"use client";
import PageBanner from "../../components/PageBanner";
import SafraLayout from "../../layouts/SafraLayout";
import Link from "next/link";
//

const page = () => {
    return (
        <SafraLayout>
            <PageBanner pageName={"Special Thinner"} />
            {/* News media section one start  */}


            <section className="blog-details-area py-0 rpy-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-11 pt-60 pb-0">
                            <div className="tag-share pt-0 pb-0">
                                <h4>Chemplex (Special Thinner) </h4>
                            </div>
                            <div className="pb-20">
                                <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={400} />
                            </div>
                        </div>
                    </div>

                    <div
                        className="shoping-table mb-50"
                        data-aos="fade-up"
                        data-aos-duration={1500}
                        data-aos-offset={50}
                    >
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div
                                            className="project-item"
                                            data-aos="fade-up"
                                            data-aos-duration={1500}
                                            data-aos-offset={50}
                                        >
                                            <div className="image">
                                                <img src="assets/images/projects/project-grid33.svg" alt="Product-Ink-Solvent" width={300} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6>
                                            <div>Ink Solvent</div>
                                        </h6>
                                        <ul className="icon-list-chemplex mt-20 mb-35">

                                        </ul>
                                        <a>
                                            <i className="fa fa-file-pdf pdf-icon"></i>
                                            <span><Link href="/assets/images/pdfs/Spp/Specs/Ink-Solvent.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                                                <Link href="/assets/images/pdfs/Spp/Msds/Ink-Solvent.pdf" target="_blank"> MSDS </Link></span>
                                            <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link>
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div
                                            className="project-item"
                                            data-aos="fade-up"
                                            data-aos-duration={1500}
                                            data-aos-offset={50}
                                        >
                                            <div className="image">
                                                <img src="assets/images/projects/project-grid99.svg" alt="Product-Shellec-Thinner" width={300} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6>
                                            <div>Shellec Thinner</div>
                                        </h6>
                                        <a>
                                            <i className="fa fa-file-pdf pdf-icon"></i>
                                            <span><Link href="/assets/images/pdfs/Spp/Specs/Shellec-Thinner.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                                                <Link href="/assets/images/pdfs/Spp/Msds/Shellec-Thinner.pdf" target="_blank"> MSDS </Link></span>
                                            <Link href="contact"> \  <i className="fa fa-envelope pdf-icon"></i></Link>
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div
                                            className="project-item"
                                            data-aos="fade-up"
                                            data-aos-duration={1500}
                                            data-aos-offset={50}
                                        >
                                            <div className="image">
                                                <img src="assets/images/projects/project-grid99.svg" alt="Product-Quick-Dry-Thinner" width={300} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6>
                                            <div>Quick Dry Thinner (SQD)</div>
                                        </h6>
                                        <a>
                                            <i className="fa fa-file-pdf pdf-icon"></i>
                                            <span><Link href="/assets/images/pdfs/Spp/Specs/Quick-Dry-Thinner.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                                                <Link href="/assets/images/pdfs/Spp/Msds/Quick-Dry-Thinner.pdf" target="_blank"> MSDS </Link></span>
                                            <Link href="contact"> \  <i className="fa fa-envelope pdf-icon"></i></Link>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="tag-share pt-15 pb-40">
                        <div
                            className="item"
                            data-aos="fade-left"
                            data-aos-duration={1500}
                            data-aos-offset={50}
                        >
                            <b>Quick Links </b>
                            <div className="tag-coulds-pro">
                                <Link href="paint-thinner">paint Thinner</Link>
                                <Link href="lacquer-thinner">Lacquer Thinner</Link>
                                <Link href="acrylic-thinner">Acrylic Thinner</Link>
                                <Link href="super-acrylic-thinner">Super Acrylic Thinner</Link>
                                <Link href="polyurethane">Polyurethane</Link>
                                <Link href="wood-varnish">Wood Varnish</Link>
                                <Link href="cpvc-cement">PVC/CPVC Cement</Link>
                                <Link href="cpvc-cleaner">PVC/CPVC Cleaner</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </SafraLayout>
    );
};
export default page;