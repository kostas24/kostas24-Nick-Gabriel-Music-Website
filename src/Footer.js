import React from "react";
import "./footer.css";

const Footer = ({ socialSectionRef }) => {
  return (
    <>
      <h2 className="socialTag" ref={socialSectionRef}>
        Socials
      </h2>
      {/* <img
        src="./images/IMG_6721.JPG"
        alt="soundcloud"
        className="socialImage"
      /> */}
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        <a
          href="https://on.soundcloud.com/vBMYki7AeGcBYu356"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./images/image-removebg-preview (1).png"
            alt="soundcloud"
            title="Soundcloud"
            className="socialLogo"
            style={{ marginRight: "10px" }}
          />
        </a>
        <a
          href="https://www.instagram.com/nicholas_gabriel__/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./images/iglogo-removebg-preview.png"
            alt="instagram"
            title="Instagram"
            className="socialLogo"
            style={{ marginRight: "10px" }}
          />
        </a>
        <a
          href=" https://www.tiktok.com/@nickgabriel__?lang=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./images/tiktoklogo-removebg-preview.png"
            alt="tiktok"
            title="Tiktok"
            className="socialLogo"
            style={{ marginRight: "10px" }}
          />
        </a>

        <a
          href="https://www.youtube.com/@Nick.Gabriel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./images/youtubelogo-removebg-preview.png"
            alt="youtube"
            title="Youtube"
            className="socialLogo"
            style={{ marginRight: "10px" }}
          />
        </a>
        <a
          href="https://twitter.com/NickGabriel___"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./images/twitterlogo-removebg-preview.png"
            alt="twitter"
            title="Twitter"
            className="socialLogo"
            style={{ marginRight: "10px" }}
          />
        </a>
        {/* <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./images/image-removebg-preview (3).png"
            alt="facebook"
            title="Facebook"
            className="socialLogo"
          />
        </a> */}
      </div>
    </>
  );
};

export default Footer;
