import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faPinterest,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// import SignUpForm from "./backend/server" ;

class HorizontalLine extends React.Component {
  render() {
    const horizontalLineStyle = {
      borderBottom: "1px solid #6B6969", // Line color
      width: "1586.01px", // Set the desired width
      textAlign: "center", // Align to the center
      margin: "30px auto", // Center the line horizontally with top margin
    };

    return <div style={horizontalLineStyle}></div>;
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "", // Initialize the email state
    };
  }

  handleInputChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleSignUp = () => {
    const { email } = this.state;

    // Send a POST request to your server
    fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Handle success, e.g., show a success message to the user
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors, e.g., show an error message to the user
      });
  };

  render() {
    const textStyle = {
      color: "#333333",
      fontFamily: "Inter, sans-serif",
      fontSize: "13px",
      fontWeight: "600",
    };

    const contentStyle = {
      position: "relative", // Add position relative to allow content to sit on top of the background
      zIndex: 1, // Ensure content is above the background
      background:"#F9F5F2",
    };

    return (
      <div>
        <div className="footer" style={contentStyle}>
          <div className="text-box">
            <div
              className="text-line1"
              style={{ ...textStyle, marginLeft: "30px", marginTop: "40px", paddingTop:"20px" }}
            >
              YOUR HEALTHIEST RELATIONSHIP
            </div>
            <div
              style={{
                color: "#333333",
                fontFamily: "Raleway, sans-serif",
                fontSize: "15px",
                marginLeft: "30px",
                marginTop: "50px",
                width: "393px", // Limit text to 393px
              }}
            >
              <p>
                YumHealth decodes and demystifies what it means to live a well life, inside and out. Get it daily.
              </p>
            </div>
            <div className="search-container" style={{ marginTop: "20px" }}>
              <input
                type="text"
                className="search-box"
                placeholder="Enter Email Address"
                style={{
                  marginLeft: "30px",
                  fontFamily: "Raleway",
                  fontWeight: "300",
                }}
              />
              <button className="sign-up-button" style={{color:"#333", padding:"10px"}} onClick={this.handleSignUp}>SIGN UP</button>
            </div>
            <div className="social-icons-container" style={{ marginTop: "20px" }}>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{
                    color: "#6B6969",
                    fontSize: "25px",
                    marginLeft: "30px",
                  }}
                />
              </a>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faPinterest}
                  style={{
                    color: "#6B6969",
                    fontSize: "25px",
                    marginLeft: "20px",
                  }}
                />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{
                    color: "#6B6969",
                    fontSize: "25px",
                    marginLeft: "20px",
                  }}
                />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{
                    color: "#6B6969",
                    fontSize: "25px",
                    marginLeft: "20px",
                  }}
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{
                    color: "#6B6969",
                    fontSize: "25px",
                    marginLeft: "20px",
                  }}
                />
              </a>
            </div>
          </div>
          <HorizontalLine />
          <div
  className="yum-health-text"
  style={{ marginLeft: "700px", top: "-208px", position: "relative" }}
>
  <p style={{ ...textStyle }}>
    <a
      href="fyumhealth.html"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      YUM HEALTH
    </a>
  </p>
</div>
<div
  className="about-text"
  style={{ marginLeft: "700px", top: "-190px", position: "relative" }}
>
  <p style={{ ...textStyle }}>
    <a
      href="/About-us"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      ABOUT
    </a>
  </p>
</div>
<div
  className="contact-us-text"
  style={{ marginLeft: "700px", top: "-172px", position: "relative" }}
>
  <p style={{ ...textStyle }}>
    <a
      href="fcontactus.html"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      CONTACT US
    </a>
  </p>
</div>
<div
  className="press-text"
  style={{ marginLeft: "700px", top: "-154px", position: "relative" }}
>
  <p style={{ ...textStyle }}>
    <a
      href="fpress.html"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      PRESS
    </a>
  </p>
</div>
<div
  className="advertise-text"
  style={{ marginLeft: "700px", top: "-136px", position: "relative" }}
>
  <p style={{ ...textStyle }}>
    <a
      href="fadvertise.html"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      ADVERTISE
    </a>
  </p>
</div>

          <div
            className="footer-links"
            style={{
              marginTop: "-85px",
              marginLeft: "50px", // Add left margin here
              color: "#6B6969",
            }}
          >
            <div style={{ marginLeft: "0px" }}>
              <a
                href="access.html"
                style={{ ...textStyle, textDecoration: "none", color: "#6B6969" }}
              >
                ACCESSIBILITY STATEMENT
              </a>{" | "}
              <a
                href="california.html"
                style={{ ...textStyle, textDecoration: "none", color: "#6B6969" }}
              >
                CALIFORNIA NOTICE OF COLLECTION
              </a>{" | "}
              <a
                href="donotsell.html"
                style={{ ...textStyle, textDecoration: "none", color: "#6B6969" }}
              >
                DO NOT SELL OR SHARE MY PERSONAL INFORMATION
              </a>
            </div>
          </div>
          <div
            style={{
              ...textStyle,
              marginTop: "20px",
              marginLeft: "60px", // Add left margin here
              color: "#6B6969",
              fontSize: "12px",
              width: "100%", // Set the width to 100%
            }}
          >
            @YumHealth LLC. All Rights reserved. Read our
            <a
              href="privacy.html"
              style={{ textDecoration: "underline", color: "#6B6969" }}
            >
              {" "}
              Privacy Notice
            </a>
            {" | "}
            <a
              href="cookie.html"
              style={{ textDecoration: "underline", color: "#6B6969" }}
            >
              {" "}
              Cookie Notice
            </a>
            {" | "}
            <a
              href="terms.html"
              style={{ textDecoration: "underline", color: "#6B6969" }}
            >
              {" "}
              Terms and Conditions
            </a>
            .
          </div>
        </div>
        {/* Render the blue background behind the content */}
        {/* <div style={blueBackgroundStyle}></div> */}
        {/* <SignUpForm /> */}
      </div>
    );
  }
  handleSignUp = () => {
    const { email } = this.state;

    // Send a POST request to your server
    fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Handle success, e.g., show a success message to the user
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors, e.g., show an error message to the user
      });
  };
}


export default Footer;
