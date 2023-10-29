import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../assiste/Footer.css";
import footerLogo from "../images/FooterLogoR.png";

export default function Footer() {
  return (
    <MDBFooter fluid className="text-center text-lg-start text-muted footer mx-auto ">
      <section className="">
        <MDBContainer fluid className="text-center text-md-start mt-5 insidefooter ">
          <MDBRow className="mt-3" style={{marginLeft:"5rem"}} >
            <MDBCol
              md="4"
              lg="3"
              xl="3"
              className="mx-auto mb-4"
              style={{ color: "white" }}
            >
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "#9D0B00", fontSize: "30px" }}
              >
                CONTACT INFO
              </h6>
              <p style={{ color: "black" }}>
                <MDBIcon className="me-2" />
                Tell:
              </p>

              <p style={{ color: "black" }}>
                <MDBIcon className="me-2" />
                Email:
              </p>

              <p style={{ color: "black" }}>
                <MDBIcon className="me-2" />
                Address:
              </p>

              <MDBIcon className="me-3 " />
              <div>
                <a
                  href="https://twitter.com"
                  className="social-icon"
                  style={{ color: "#9D0B00" }}
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  className="social-icon"
                  style={{ marginLeft: "1rem", color: "#9D0B00" }}
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  className ="social-icon"
                  style={{ marginLeft: "1rem", color: "#9D0B00" }}
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  className="social-icon"
                  style={{ marginLeft: "1rem", color: "#9D0B00" }}
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </MDBCol>

            <MDBCol
              md="4"
              lg="3"
              xl="3"
              className="mx-auto mb-4"
              style={{ color: "white" }}
            >
              <h6
                className="text-uppercase  mb-5"
                style={{ color: "#9D0B00", fontSize: "30px" }}
              >
                ABOUT US
              </h6>
              <p style={{ color: "black" }}>
                <MDBIcon className="me-2" />
                PRODUCT
              </p>

              <p style={{ color: "black" }}>
                <MDBIcon className="me-2" />
                PRODUCT
              </p>

              <p style={{ color: "black" }}>
                <MDBIcon className="me-2" />
                PRODUCT
              </p>

              <MDBIcon className="me-3 " />
            </MDBCol>

            <MDBCol
              md="4"
              lg="3"
              xl="3"
              className="mx-auto mb-4"
              style={{ color: "white" }}
            >
              <h6
                className="text-uppercase  mb-5"
                style={{ color: "#9D0B00", fontSize: "30px" }}
              >
                OUR PRODUCTS
              </h6>
              <p style={{ color: "black" }}>
                <MDBIcon className="me-2" />
                PRODUCT
              </p>

              <p style={{ color: "black" }}>
                <MDBIcon className="me-2" />
                PRODUCT
              </p>

              <p style={{ color: "black" }}>
                <MDBIcon className="me-2" />
                PRODUCT
              </p>

              <MDBIcon className="me-3 " />
            </MDBCol>



            <MDBCol
              md="4"
              lg="3"
              xl="3"
              className="mx-auto mb-4"
              style={{ color: "white" }}
            >
              <h6
                className="text-uppercase  mb-5"
                style={{ color: "#9D0B00", fontSize: "30px" }}
              >
                OUR PRODUCTS
              </h6>
              <p style={{ color: "black" }}>
                <MDBIcon className="me-2" />
                PRODUCT
              </p>

              <p style={{ color: "black" }}>
                <MDBIcon className="me-2" />
                PRODUCT
              </p>

              <p style={{ color: "black" }}>
                <MDBIcon className="me-2" />
                PRODUCT
              </p>

              <MDBIcon className="me-3 " />
            </MDBCol>

            {/* Logo and paragraph div */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between"}}>
              <p style={{ color: "black", marginLeft:"30rem" }}>
                ALL RIGHTS RESERVED 2023
              </p>
              <img src={footerLogo} alt="Footer Logo" style={{ width: "200px", height: "auto" }} />
            </div>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
