"use client";
import PageBanner from "../../components/PageBanner";
import SafraLayout from "../../layouts/SafraLayout";


const page = () => {
  return (
    <SafraLayout>
      <PageBanner pageName={"Distribution"} />
      {/* News media section one start  */}


      <section className="blog-details-area py-0 rpy-100">
        <div className="container">


          <div className="row">
            <div className="col-xl-9 col-lg-11 pt-60 pb-0">
              <div className="tag-share pt-0 pb-0">
                <h4>Distribution Page</h4>
              </div>
              <div className="pb-20">
                <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={400} />
              </div>
            </div>



            <div className="blog-details-content pb-0">
              <div className="blog-details-content ">
                <h4 className="">Customer Satisfaction Index</h4>

                <p>
                  Safra maintains a Customer Satisfaction Index to have a formal report of customer’s
                  perceptions about our performance and know more about the concerns and
                  expectations of our esteemed customers.
                  Safra “CSI” gives our customers an opportunity to evaluate our performance and make
                  suggestions. The feedback helps us to respond effectively in the direction of improving
                  customer services and ensuring higher satisfaction.
                </p>

                <h4 className="pt-20">Sales And Marketing</h4>

                <p>
                  Safra meets the requirements of wide spectrum of market segments by producing high
                  quality solvents in the most modern and fully automated plant. It’s expertise in
                  understanding the needs and dynamics of local and regional industrial markets further
                  attributes to serve better than competitors.<br />
                  Safra undertake deliveries anywhere in the world. The products are supplied in
                  bulk/vessel, containers, ISO Tanks, road tankers, and road trailers in accordance with
                  the requirements of our customers under International Shipping Code. Using various
                  packing such as new and reconditioned drums while adhering to global safety
                  standards.
                  Safra aims to further fulfill the needs of customers with higher levels of satisfaction by
                  producing the best quality of solvents and its distribution in the local, regional and
                  international.
                </p>
                <hr />


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Area Five Start */}
      <section className="about-area-five pb-40 pt-40 rpb-40 rel z-1"
      >
        <div className="container">
          <div className="row gap-40 align-items-center">
            <div className="col-lg-6">
              <div
                className="about-images-five rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/about/about-five1.png" alt="Customer-Service-1" />
                <img src="assets/images/about/about-five2.png" alt="Customer-Service-2" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-content-five mt-40 rmt-15"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-20">
                  <h3>Customer Service</h3>

                </div>
                <p>
                  There are different ways of moving the materials; we move them via road tankers or trailers (Drums) to our local customer in the Kingdom or around GCC.
                  We also ship container shipments (Drums) or Iso-Tanks internationally...
                </p>
                <ul className="icon-list style-two mt-40 mb-40">
                  <li>
                    <i className="fal fa-check" />  Advisory Support for Product Selection.
                  </li>
                  <li>
                    <i className="fal fa-check" />  Product-data Sheets.
                  </li>
                  <li>
                    <i className="fal fa-check" />  Safety-data Sheets.
                  </li>
                  <li>
                    <i className="fal fa-check" />   Application Support.
                  </li>
                  <li>
                    <i className="fal fa-check" />  Producing Innovative Products To Cater Specific Needs Of Customers.
                  </li>
                </ul>

              </div>
            </div>
          </div>

        </div>
      </section>
      {/* About Area End 


      <section className="hero-area-six pt-40 rpt-20 pb-0 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-11">
              <hr />
            </div>
          </div>
        </div>
      </section>
*/}
    </SafraLayout>
  );
};
export default page;
