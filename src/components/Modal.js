import React, { useState } from "react";
import Popup from "reactjs-popup";
import "./scss/Modal.scss";
import calncelIcon from "../pictures/icons/modal-icon/cancel_96245.svg";
import leftArrowIcon from "../pictures/icons/modal-icon/left-arrow.png";
import rigthArrowIcon from "../pictures/icons/modal-icon/right-arrow.png";
import bedIcon from "../pictures/icons/room-icons/grey-double-bed.svg";
import barIcon from "../pictures/icons/room-icons/grey-bar.svg";
import bellhopIcon from "../pictures/icons/room-icons/grey-bellhop.svg";
import buildingIcon from "../pictures/icons/room-icons/grey-building.svg";
import spaIcon from "../pictures/icons/room-icons/grey-spa.svg";
import tvIcon from "../pictures/icons/room-icons/grey-tv.svg";
import wifiIcon from "../pictures/icons/room-icons/grey-wifi.svg";

const objectIcons = [
  { icon: bedIcon, alt: "bedIcon", specification: "King bed" }, //0
  { icon: barIcon, alt: "barIcon", specification: "Marble bar" }, //1
  {
    icon: bellhopIcon,
    alt: "bellhopIcon",
    specification: "Butler service upon request",
  }, //2
  {
    //3
    exclusive: {
      icon: buildingIcon,
      alt: "buildingIcon",
      specification: "1130 sq.ft. / 105 sq.m. Located on floor 1",
    },
    apartment: {
      icon: buildingIcon,
      alt: "buildingIcon",
      specification: "775 sq.ft. / 72 sq.m. Located on floor 3",
    },
    standard: {
      icon: buildingIcon,
      alt: "buildingIcon",
      specification: "452 sq.ft. / 42 sq.m. Located on floor 2",
    },
  },
  {
    icon: spaIcon,
    alt: "spaIcon",
    specification: "SPA daily from 8 a.m. to 7 p.m",
  }, //4

  {
    //5
    exclusive: {
      icon: tvIcon,
      alt: "tvIcon",
      specification: "Curved 65-inch television",
    },
    apartment: {
      icon: tvIcon,
      alt: "tvIcon",
      specification: "50-inch television",
    },
    standard: {
      icon: tvIcon,
      alt: "tvIcon",
      specification: "40-inch television",
    },
  },
  { icon: wifiIcon, alt: "wifiIcon", specification: "Free WiFi" }, //6
];

let li1, li2, li3, li4, li5, li6, li7;
let moreInformation;
let indexOfEachRoomImage;
const handlerChangeDetialsImage = (e, title, moreDetailsImage) => {
  let maxIndexOfCollectionImages = moreDetailsImage.length - 1; //default is index 2 because apartments array have only 3 pictures
  e.preventDefault();

  if (e.target.id === "btn-left-details") {
    //if clicked target is btn-left-details then subtract 1 from index array
    indexOfEachRoomImage--;
    if (indexOfEachRoomImage === -1) {
      indexOfEachRoomImage = maxIndexOfCollectionImages;
    }
  } else {
    indexOfEachRoomImage++;
    if (indexOfEachRoomImage === moreDetailsImage.length) {
      //if after
      indexOfEachRoomImage = 0;
    }
  }
  e.target.parentElement.style.backgroundImage = `url(${moreDetailsImage[indexOfEachRoomImage]})`;
};

const modalContent = (title, description, moreDetailsImage) => {
  switch (title) {
    case "Exclusive Room":
      li1 = objectIcons[3].exclusive; // in this object are 2 object (floor)
      li2 = objectIcons[0]; // in this object are 2 object (bed)
      li3 = objectIcons[2]; // in this object are 2 object (butler)
      li4 = objectIcons[1]; // in this object are 2 object (bar)
      li5 = objectIcons[4]; // in this object are 2 object (spa)
      li6 = objectIcons[5].exclusive; // in this object are 2 object (tv)
      li7 = objectIcons[6]; // in this object are 2 object (wifi)
      indexOfEachRoomImage = 2;

      break;
    case "Apartment Room":
      li1 = objectIcons[3].apartment; // in this object are 2 object (floor)
      li2 = objectIcons[0]; // in this object are 2 object (bed)
      li3 = objectIcons[4]; // in this object are 2 object (spa)
      li4 = objectIcons[5].apartment; // in this object are 2 object (tv)
      li5 = objectIcons[6]; // in this object are 2 object (wifi)
      li6 = "";
      li7 = "";
      indexOfEachRoomImage = 0;

      break;
    case "Standard Room":
      li1 = objectIcons[3].standard; // in this object are 2 object (floor)
      li2 = objectIcons[0]; // in this object are 2 object (bed)
      li3 = objectIcons[5].standard; // in this object are 2 object (tv)
      li4 = objectIcons[6]; // in this object are 2 object (wifi)
      li5 = "";
      li6 = "";
      li7 = "";
      indexOfEachRoomImage = 1;

      break;
    default:
      console.log("none");
      break;
  }

  moreInformation = (
    <>
      <div
        style={{
          backgroundImage: `url(${moreDetailsImage[indexOfEachRoomImage]})`,
        }}
        className="modal__content-gallery modal__content-gallery--otherImage"
      >
        <button
          className="modal__content-gallery-btn-arrow"
          id="btn-left-details"
          onClick={(e) => {
            handlerChangeDetialsImage(e, title, moreDetailsImage);
          }}
        >
          <img src={leftArrowIcon} alt="leftArrow" />
        </button>
        <button
          className="modal__content-gallery-btn-arrow"
          id="btn-right-details"
          onClick={(e) => {
            handlerChangeDetialsImage(e, title, moreDetailsImage);
          }}
        >
          <img src={rigthArrowIcon} alt="rightArrow" />
        </button>
      </div>
      <p className="modal__content-paragraph">{description}</p>
      <div className="modal__content-caption">
        <li>
          <img
            className="modal__content-caption-icon"
            src={li1.icon}
            alt={li1.alt}
          />
          <div className="modal__content-caption-specification">
            {li1.specification}
          </div>
        </li>
        <li>
          <img
            className="modal__content-caption-icon"
            src={li2.icon}
            alt={li2.alt}
          />
          <div className="modal__content-caption-specification">
            {li2.specification}
          </div>
        </li>
        <li>
          <img
            className="modal__content-caption-icon"
            src={li3.icon}
            alt={li3.alt}
          />
          <div className="modal__content-caption-specification">
            {li3.specification}
          </div>
        </li>
        <li>
          <img
            className="modal__content-caption-icon"
            src={li4.icon}
            alt={li4.alt}
          />
          <div className="modal__content-caption-specification">
            {li4.specification}
          </div>
        </li>
        <li>
          <img
            className="modal__content-caption-icon"
            src={li5.icon}
            alt={li5.alt}
          />
          <div className="modal__content-caption-specification">
            {li5.specification}
          </div>
        </li>
        <li>
          <img
            className="modal__content-caption-icon"
            src={li6.icon}
            alt={li6.alt}
          />
          <div className="modal__content-caption-specification">
            {li6.specification}
          </div>
        </li>
        <li>
          <img
            className="modal__content-caption-icon"
            src={li7.icon}
            alt={li7.alt}
          />
          <div className="modal__content-caption-specification">
            {li7.specification}
          </div>
        </li>
      </div>
    </>
  );
  return moreInformation;
};

export default ({ title, description, moreDetailsImage }) => {
  return (
    <Popup
      className="book-popup"
      trigger={<button className="more-details"> more details </button>}
      modal
      nested
    >
      {(close) => (
        <main className="modal">
          <button className="modal__close" onClick={close}>
            <img src={calncelIcon} alt="calncelIcon" />
          </button>
          <header className="modal__header">
            <h3> {title} </h3>
          </header>
          <section className="modal__content">
            {modalContent(title, description, moreDetailsImage)}
          </section>
          <footer className="modal__actions">
            <button
              className="modal__actions-more-details"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close
            </button>
          </footer>
        </main>
      )}
    </Popup>
  );
};
