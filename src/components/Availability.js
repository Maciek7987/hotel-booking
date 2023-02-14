import { useState} from "react";

import "./scss/Availability.scss";
import "./Email";
import Emial from "./Email";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faBars,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";

// //20 pokoji zwykłych numery 1-20 włącznie
// //10 apartamentów numery 27-36 włącznie
// //6 exclusive numery 21-26 włacznie

// //pokoje zwykłe z 1 sypialnia (6) 1-6
// //pokoje zwykłe z 2 sypialniami (14) 7-20

// //apartamenty z 1 sypialnia (5) 27-31
// //apartamenty z 2 sypialniami (5) 32-36

// //exclusive z 1 sypialnia (3) 21-23
// //exclusive z 2 sypialniami (3) 24-26

export default function Availability({
  roomName,
  guests,
  termin,
  arrayAges,
  countOfDays,
  oneOrTwo,
  price,
}) {
  //burger
  let [toggleIcon, setIcon] = useState(false);
  const showMenu = (e) => {
    e.preventDefault();
    setIcon((toggleIcon = !toggleIcon));
    console.log(toggleIcon);
  };
  //
  let toCompare = [];
  const adultPrice = Number(price.slice(1));
  const childPrice = (adultPrice * 50) / 100;
  //countOfDays[0]-checkIn countOfDays[1]-checkOut

  const numberOfDays =
    countOfDays.length === 2
      ? Math.round(
          (countOfDays[1].getTime() - countOfDays[0].getTime()) / 86400000 //hotel day is from 00:00 to 23:59
        )
      : 1;
  console.log(Math.round(numberOfDays), countOfDays);
  let calculatedPrice = numberOfDays * adultPrice * guests[0];
  Object.entries(arrayAges).forEach((item) => {
    toCompare.push(item[1]);
  });
  for (let i = 0; i < guests[1]; i++) {
    if (toCompare[i] !== "<6") calculatedPrice += numberOfDays * childPrice;
  }

  let flag = false;
  //[0]-adults [1]-children
  let textOfAvailbsBedrooms = "";

  if (guests[0] === 1) {
    textOfAvailbsBedrooms = "one bedroom";
  }
  if (guests[0] + guests[1] >= 2) {
    console.log(arrayAges);
    console.log(arrayAges.child1 === "<6", arrayAges.child2 === "<6");
    if (guests[0] === 2 && guests[1] === 0)
      textOfAvailbsBedrooms = "two or one bedroom";
    if (guests[0] === 1 && guests[1] === 1)
      textOfAvailbsBedrooms = "two or one bedroom";
    if (guests[0] === 1 && guests[1] === 2) {
      if (arrayAges.child1 === "<6" || arrayAges.child2 === "<6")
        textOfAvailbsBedrooms = "two or one bedroom";
      else textOfAvailbsBedrooms = "two bedrooms";
    }
    if (guests[0] === 2 && guests[1] === 1) {
      if (arrayAges.child1 === "<6")
        textOfAvailbsBedrooms = "two or one bedroom";
      else textOfAvailbsBedrooms = "two bedrooms";
    }
  }
  if (guests[0] + guests[1] >= 4 || guests[0] === 3) {
    textOfAvailbsBedrooms = "two bedrooms";
  }

  if (roomName !== "Select Room" && termin !== "Check In / Check Out")
    flag = true;
  else flag = false;

  const infoAboutSelectedRoom =
    textOfAvailbsBedrooms === "two or one bedroom"
      ? oneOrTwo === "one"
        ? "one bedroom"
        : "two bedrooms"
      : textOfAvailbsBedrooms === "one bedroom"
      ? "one bedroom"
      : "two bedrooms";

  const information =
    textOfAvailbsBedrooms === "two or one bedroom"
      ? "In the date tab you can choose between one or two bedrooms."
      : "";
  const terminInfo =
    termin === "Check In / Check Out" ? (
      <span className="summary__availability-icons">
        <FontAwesomeIcon className="icon" icon={faMinus} />
        <FontAwesomeIcon className="icon" icon={faMinus} />
        <FontAwesomeIcon className="icon" icon={faMinus} />
        <FontAwesomeIcon className="icon" icon={faMinus} />
        <FontAwesomeIcon className="icon" icon={faMinus} />
        <FontAwesomeIcon className="icon" icon={faMinus} />
        <FontAwesomeIcon className="icon" icon={faMinus} />
        <FontAwesomeIcon className="icon" icon={faMinus} />
        <FontAwesomeIcon className="icon" icon={faMinus} />
      </span>
    ) : (
      <span className="summary__availability-date">{termin}</span>
    );

  return (
    <>
      <button onClick={(e) => showMenu(e)} className="availability__bar">
        <FontAwesomeIcon
          className="availability__bar-icon"
          icon={toggleIcon ? faBarsStaggered : faBars}
        />
      </button>
      <section className="email">
        <Emial
          valueToSubmit="Book"
          flag={flag}
          price={Math.floor(calculatedPrice)}
          termin={termin}
          roomName={roomName}
          infoAboutSelectedRoom={infoAboutSelectedRoom}
        ></Emial>
      </section>
      <section title={toggleIcon.toString()} className="summary">
        <div className="summary__availability">
          <h4 className="summary__title">Availability</h4>
          <p className="summary__content">
            adults: {guests[0]}, children: {guests[1]}
            <br />
            in termin: <br />
            {terminInfo}
          </p>
        </div>
        <div className="summary__room">
          <h4 className="summary__title">Room</h4>
          <p className="summary__content">
            {roomName} with {infoAboutSelectedRoom}
          </p>
        </div>
        <div className="summary__total">
          <h4 className="summary__total-title">Total:</h4>
          <span className="summary__total-price">
            ${Math.floor(calculatedPrice)}
          </span>
        </div>
        <div className="summary__information">
          <p className="summary__content">hotel day is from 00:00 to 23:59</p>
          <p className="summary__information-content">{information}</p>
        </div>
      </section>
    </>
  );
}

//show only this date at which haven't free rooms for selected (two or one bedrooms)
// if number of adults is 1 then show only rooms with one bedroom
// if number of guests is 2 or 3 then show one and two bedrooms
// if number of guests is 4 or number of adult is 3 then show only two bedrooms

// for selected room with a given number of bedrooms, check if ten of reservation has common period to disable this termin
// you could say that on the "millisecond" axis we extract ranges which will be already booked
