/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../Headers/fondiwiris.jpeg") + ")"
          }}
         
        ></div>
        <Container>
          <div className="content-center brand">
            
            <h1 className="h1-seo">Cáhuitl</h1>
            <h3></h3>
          </div>
          <h6 className="category category-absolute">
            Designed by{"lamundo"}
            <a href="http://invisionapp.com/?ref=creativetim" target="_blank">
              <img
                alt="..."
                className="invision-logo"
                src={require("assets/img/invision-white-slim.png")}
              ></img>
            </a>
            . Coded by{" MetaWeather "}
            .
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
