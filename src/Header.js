import "./Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="sideProfileContainer">
        <img
          src="./images/nick g05732.jpg"
          alt="sideProfile1"
          style={{ width: "25%" }}
          className="HeaderImages"
        />
        <img
          src="./images/Nick Gabriel Djing in Barce solo shot2.jpg"
          alt="sideProfile2"
          style={{ width: "25%" }}
          className="HeaderImages"
        />
        <img
          src="./images/EDE53B86-3EAD-4C0A-9BC8-5218FADE153E4.jpg"
          alt="sideProfile3"
          style={{ width: "25%" }}
          className="HeaderImages"
        />
        <img
          src="./images/nickg05042.jpg"
          alt="sideProfile4"
          style={{ width: "25%" }}
          className="HeaderImages"
        />
      </div>
      <div className="centerProfile">
        <img
          src="./images/Nick_Gabriel_Logo_Black-removebg-preview (5).png"
          alt="NickGabrielLogo"
          className="LogoImage"
        />
      </div>
    </div>
  );
};

export default Header;
