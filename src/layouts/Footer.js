import Link from "next/link";
//


const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <DefaultFooter />;

    default:
      return <DefaultFooter />;
  }
};
export default Footer;

const DefaultFooter = () => {
  return (
    <footer className="main-footer footer-one rel z-1 mt-300">

      <div className="container">
        <div className="row justify-content-between ">
          <div className="col-xl-2 col-lg-4 col-sm-6 mt-50 ">
            <div
              className="footer-widget widget-about"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="logo-outer">
                <div className="logo mb-20">
                  <Link href="/">
                    <img
                      src="/assets/images/logos/flogo.gif"
                      width={200}
                      alt="Safra Logo"
                      title="Logo"
                    />
                  </Link>
                </div>
              </div>

              <div className="social-style-one ">
                <a target="_blank" href="https://www.linkedin.com/company/safra/mycompany/">
                  <i className="fab fa-linkedin" />
                </a>
                <a target="_blank" href="https://www.facebook.com/p/Safra-Co-Ltd-100063547352403/?locale=ar_AR">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="mailto:ramzi_maresh@outlook.com" >
                  <i className="far fa-envelope" />
                </a>

              </div>
            </div>
          </div>

          <div className="col-xl-9 mt-50">
            <div className="row">

              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-contact"
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Head Office</h6>
                  <ul>
                    <li>
                      <i className="fal fa-envelope" />
                      <a href="mailto:support@safraco.com">info@safraco.com</a>
                    </li>
                    <li>
                      <i className="fal fa-phone" />
                      (+966) 12 604 8777
                    </li>
                    <li>
                      <i className="fal fa-fax" />
                      (+966) 12 643 1214
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-contact"
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Chemplex </h6>
                  <ul>
                    <li>
                      <i className="fal fa-envelope" />
                      <a href="mailto:support@safraco.com">info@safraco.com</a>
                    </li>
                    <li>
                      <i className="fal fa-phone" />
                      (+966) 12 604 8833
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-contact"
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Plant (Yanbu)</h6>
                  <ul>
                    <li>
                      <i className="fal fa-envelope" />
                      <a href="mailto:support@safraco.com">info@safraco.com</a>
                    </li>
                    <li>
                      <i className="fal fa-phone" />
                      (+966) 4 396 8022
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="footer-bottom mt-30 py-15">
          <div className="row justify-content-center text-center">
            <div className="col-xl-4">
              <div
                className="copyright-text pt-10 text-lg-start text-center"

              >
                <p>
                  © 2024 All rights reserved | Safra Co. Ltd.
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </footer>
  );
};



