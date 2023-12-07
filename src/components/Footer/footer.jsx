import React from "react";
import {
  FaStar,
  FaHouse,
  FaEnvelopeOpen,
  FaPhone,
  FaPrint,
  FaFacebook,
  FaSquareTwitter,
  FaGoogle,
  FaLinkedin,
  FaGithub,
  FaSquareInstagram
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
    <footer className="text-center text-lg-start bg-body-tertiary text-muted" >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{ backgroundColor: "#087643", marginBottom: "-5px"}}>
        <div className="me-5 d-none d-lg-block">
          <span className="fw-bold"> You can find us in literally none of these social medias</span>
        </div>
        <div>
          <a href="" className="me-4 text-reset" >
            <FaFacebook style={{color:"black"}}/>
          </a>
          <a href="" className="me-4 text-reset">
            <FaSquareTwitter style={{color:"black"}}/>
          </a>
          <a href="" className="me-4 text-reset">
            <FaGoogle style={{color:"black"}}/>
          </a>
          <a href="" className="me-4 text-reset">
            <FaSquareInstagram style={{color:"black"}}/>
          </a>
          <a href="" className="me-4 text-reset">
            <FaLinkedin style={{color:"black"}}/>
          </a>
          <a href="" className="me-4 text-reset">
            <FaGithub style={{color:"black"}}/>
          </a>
        </div>
      </section>
      <section style={{ backgroundColor: "#198754"}}>
        <div className="container text-center text-md-start">
          <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mt-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <FaStar />
                ステッカー
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="/stickers" className="text-reset">
                  Skickers
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  PLACEHOLDER
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  PLACEHOLDER
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  PLACEHOLDER
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/aboutus" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  PLACEHOLDER
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  PLACEHOLDER
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  PLACEHOLDER
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mt-3">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FaHouse /> Santo Domingo, Republica Dominicana RD
              </p>
              <p>
                <FaEnvelopeOpen />
                PLACEHOLDER.com
              </p>
              <p>
                <FaPhone /> +000 PLACEHOLDER
              </p>
              <p>
                <FaPrint className="me-3" /> +000 PLACEHOLDER
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4 fw-bold" style={{ backgroundColor: "#087643" }}>
        © 2024 Copyright: 
        <a className="text-reset fw-bold ms-1" href="#!">
          PLACEHOLDER.com
        </a>
      </div>
    </footer>
    </>
  );
};
