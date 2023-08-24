import "./music.css";
const Music = ({ musicSectionRef }) => {
  return (
    <>
      <h2 className="socialTag" ref={musicSectionRef}>
        Music
      </h2>
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        <a
          href="https://soundcloud.com/nrg-239579605/push-me-away-nick-gabriel-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="musicImage"
            src="./images/PUSH ME AWAY COVER (SC).png"
            alt="Push Me Away Cover"
            title="Push Me Away"
            style={{ marginRight: "10px" }}
          />
        </a>
        <a
          href="https://soundcloud.com/nrg-239579605/where-do-we-go-nick-gabriel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="musicImage"
            src="./images/WDWG Cover.jpeg"
            alt="Where Do We Go Cover"
            title="Where Do We Go"
            style={{ marginRight: "10px" }}
          />
        </a>

        <a
          href="https://soundcloud.com/nrg-239579605/nick-gabriel-live-in-barcelona-spain-nick-gabriel-b2b-erash"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="musicImage"
            src="./images/Dark Minimalist Paper Texture Music Album Cover (1920 × 1080 px) (800 × 800 px).png"
            alt="Barcelona Mix Cover"
            title="Barcelona Mix"
            style={{ marginRight: "10px" }}
          />
        </a>
        <a
          href="https://soundcloud.com/nrg-239579605/calm-down-rema-nick-gabriel-remix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="musicImage"
            src="./images/CALM DOWN NICK GABRIEL COVER ART.png
            "
            alt="Calm Down Remix Cover"
            title="Calm Down - Remix"
            style={{ marginRight: "10px" }}
          />
        </a>
        <a
          href="https://soundcloud.com/nrg-239579605/nick-gabriel-focus-extended-mix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="musicImage"
            src="./images/Black Gradient Abstract Party Album Cover.png"
            alt="Focus Cover"
            title="Focus"
            style={{ marginRight: "10px" }}
          />
        </a>
        <a
          href="https://soundcloud.com/nrg-239579605/titi-me-fogo-nick-gabriel-erash-mashup-bad-bunny-major-lazer-garmani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="musicImage"
            src="./images/TITI ME FOGO NICK GABRIEL COVER ART .png"
            alt="TITI ME FOGO Mashup Cover"
            title="TITI ME FOGO Mashup"
            style={{ marginRight: "10px" }}
          />
        </a>
      </div>
    </>
  );
};
export default Music;
