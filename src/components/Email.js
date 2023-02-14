import "./scss/Email.scss";
import { Component } from "react";


export default class Emial extends Component {
  constructor(props) {
    super(props);
    //inputss value
    this.state = {
      inputNameValue: "",
      inputSurnameValue: "",
      inputPhoneValue: "",
      inputEmailValue: "",
      inputTextareaValue: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let flg1, flg2, flg3, flg4, flg5;
    const {
      inputNameValue,
      inputSurnameValue,
      inputPhoneValue,
      inputTextareaValue,
      inputEmailValue,
    } = this.state;

    //regular expression to vailidate emial input
    const reg = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

    //function to set information about wrong input and blocking it
    const checkWhichInoutItIs = (name, info) => {
      const form = document.querySelector("form.form");

      //assignment to a variable result of searching element wrapper-info which has class from argument "name"
      const element = form.querySelector(`.wrapper-info.${name}`);
      //e.g selector: from .wrapper-info.phone > p
      element.lastChild.textContent = info;

      //verification if variable "info" is empty is means, that function was call when input had correct value
      if (info === "") {
        switch (name) {
          case "name":
            flg1 = true;
            break;
          case "surname":
            flg2 = true;
            break;
          case "phone":
            flg3 = true;
            break;
          case "email":
            flg4 = true;
            break;
          case "textarea":
            flg5 = true;
            break;
          default:
            console.log("null");
            break;
        }
      } else {
        switch (name) {
          case "name":
            flg1 = false;
            break;
          case "surname":
            flg2 = false;
            break;
          case "phone":
            flg3 = false;
            break;
          case "email":
            flg4 = false;
            break;
          case "textarea":
            flg5 = false;
            break;
          default:
            console.log("null");
            break;
        }
      }
    };

    //simple vailidation

    if (inputNameValue.length < 3 || /[^a-zA-Z]/.test(inputNameValue)) {
      const info =
        "Name have to more than 2 letters and must not contain numbers and special chars e.g  @ # $ / , . { [ ";
      checkWhichInoutItIs("name", info);
    } else {
      checkWhichInoutItIs("name", "");
    }
    if (inputSurnameValue.length < 3 || /[^a-zA-Z]/.test(inputSurnameValue)) {
      const info =
        "Surname have to more than 2 letters and must not contain numbers and special chars e.g  @ # $ / , . { [ ";
      checkWhichInoutItIs("surname", info);
    } else {
      checkWhichInoutItIs("surname", "");
    }

    if (inputPhoneValue.length < 3 || /\D/.test(inputPhoneValue)) {
      const info =
        "Phone have to more than 2 numbers and must not contain letters and special chars e.g  @ # $ / , . { [ ";
      checkWhichInoutItIs("phone", info);
    } else {
      checkWhichInoutItIs("phone", "");
    }
    if (inputEmailValue.length < 5 || !reg.test(inputEmailValue)) {
      const info =
        "Email address have to more than 5 characters, the symbol @, and a domain e.g. john.smith@example.com";
      checkWhichInoutItIs("email", info);
    } else {
      checkWhichInoutItIs("email", "");
    }
    if (inputTextareaValue.length < 3 && this.props.valueToSubmit === "Send") {
      //it means that component Emial is in subPage Contact and it can't have empty and area
      const info = "Message have to more than 2 characters";
      checkWhichInoutItIs("textarea", info);
    } else {
      checkWhichInoutItIs("textarea", "");
    }

    // if everything is "true" then message is send and form is clearing
    if (flg1 && flg2 && flg3 && flg4 && flg5) {
      ///if is on a book page add reservation to base of data and in email add new information about book from props, and new alert ///with information that reservation was completed successfully
      if (this.props.valueToSubmit === "Book") {
        const { price, termin, roomName, infoAboutSelectedRoom } = this.props;
        window.Email.send({
          Host: "smtp.elasticemail.com",
          Username: "mierl23441@gmail.com",
          Password: "920A7482EE5C8A1510FDFF227BA9AAA2029A",
          To: "mierl23441@gmail.com",
          From: "mierl23441@gmail.com",
          Subject: `${inputNameValue} made a reservation`,
          Body: `Name: ${inputNameValue} <br/> Surname: ${inputSurnameValue} <br/> Email: ${inputEmailValue} <br/> Phone: ${inputPhoneValue} <br/> Message: ${inputTextareaValue} <br/> Termin: ${termin} <br/> Selected room: ${roomName} with ${infoAboutSelectedRoom} <br/> Price: ${price}`,
        }).then((inputNameValue) => {
          alert(" reservation was completed successfully");
        });
      }else{
        window.Email.send({
          Host: "smtp.elasticemail.com",
          Username: "mierl23441@gmail.com",
          Password: "920A7482EE5C8A1510FDFF227BA9AAA2029A",
          To: "mierl23441@gmail.com",
          From: "mierl23441@gmail.com",
          Subject: `${inputNameValue} sent you a emial message`,
          Body: `Name: ${inputNameValue} <br/> Surname: ${inputSurnameValue} <br/> Email: ${inputEmailValue} <br/> Phone: ${inputPhoneValue} <br/> Message: ${inputTextareaValue} `,
        }).then((inputNameValue) => {
          alert("message was sent successfully");
        });
      }

      

      this.setState({
        inputNameValue: "",
        inputSurnameValue: "",
        inputPhoneValue: "",
        inputEmailValue: "",
        inputTextareaValue: "",
      });
    } else {
      return;
    }
  };

  handleChangeInput = (e) => {
    switch (e.target.name) {
      case "name":
        this.setState({ inputNameValue: e.target.value });
        break;
      case "surname":
        this.setState({ inputSurnameValue: e.target.value });
        break;
      case "email":
        this.setState({ inputEmailValue: e.target.value });
        break;
      case "phone":
        this.setState({ inputPhoneValue: e.target.value });
        break;
      case "textarea":
        this.setState({ inputTextareaValue: e.target.value });
        break;
      default:
        console.log("none");
        break;
    }
  };
  render() {
    return (
      <form className="form" method="post">
        <div className="form__wrap">
          <div className="wrapper-info name">
            <label className="wrapper-info__label">Name</label>
            <p className="wrapper-info__paragraph"></p>
          </div>
          <input
            className="form__wrap-input"
            type="text"
            name="name"
            maxLength="30"
            value={this.state.inputNameValue}
            onChange={this.handleChangeInput}
          />
        </div>

        <div className="form__wrap">
          <div className="wrapper-info surname">
            <label className="wrapper-info__label">Surname</label>
            <p className="wrapper-info__paragraph"></p>
          </div>
          <input
            className="form__wrap-input"
            type="text"
            name="surname"
            maxLength="30"
            value={this.state.inputSurnameValue}
            onChange={this.handleChangeInput}
          />
        </div>

        <div className="form__wrap">
          <div className="wrapper-info phone">
            <label className="wrapper-info__label">Phone</label>
            <p className="wrapper-info__paragraph"></p>
          </div>
          <input
            className="form__wrap-input"
            type="tel"
            name="phone"
            maxLength="19"
            value={this.state.inputPhoneValue}
            onChange={this.handleChangeInput}
          />
        </div>

        <div className="form__wrap">
          <div className="wrapper-info email">
            <label className="wrapper-info__label">Email</label>
            <p className="wrapper-info__paragraph"></p>
          </div>
          <input
            className="form__wrap-input"
            type="email"
            name="email"
            maxLength="30"
            value={this.state.inputEmailValue}
            onChange={this.handleChangeInput}
          />
        </div>

        <textarea
          className="form__textarea"
          placeholder="Message"
          name="textarea"
          cols="30"
          rows="10"
          value={this.state.inputTextareaValue}
          onChange={this.handleChangeInput}
        ></textarea>

        <div className="wrapper-info wrapper-info--textarea textarea">
          <p className="wrapper-info__paragraph wrapper-info--textarea__paragraph"></p>
        </div>

        <input
          disable={this.props.flag ? "true" : "false"}
          className="form__submit"
          type="submit"
          value={this.props.valueToSubmit}
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
}
