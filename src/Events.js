import "./events.css";
const Events = ({ eventsSectionRef }) => {
  return (
    <>
      <h2 className="socialTag" ref={eventsSectionRef}>
        Events
      </h2>
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        <img
          className="eventsImage"
          src="./images/IMG_8624.JPG"
          alt="clubImage1"
          style={{ marginRight: "10px" }}
        />
        <img
          className="eventsImage"
          src="./images/IMG_6006.JPEG"
          alt="clubImage2"
          style={{ marginRight: "10px" }}
        />
        <img
          className="eventsImage"
          src="./images/IMG_8627.JPG"
          alt="clubImage3"
          style={{ marginRight: "10px" }}
        />
      </div>
    </>
  );
};
export default Events;
