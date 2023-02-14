// //20 standard rooms with numbers of room 1-20 włącznie
// //10 apartment with numbers of room 7-36 włącznie
// //6 exclusive with numbers of room 21-26 włacznie

// //standard with  z 1 bedroom (6) 1-6
// //standard with z 2 bedrooms (14) 7-20

// //apartment with 1 bedroom (5) 27-31
// //apartment with 2 bedrooms  (5) 32-36

// //exclusive with 1 bedroom (3) 21-23
// //exclusive with 2 bedrooms (3) 24-26

let array = {
  exclusive: {
    oneBedroom: [
      {
        id: 51,
        name: "Fifonż",
        surname: "Niuk",
        phone: 874432008,
        email: "nachobarbero@gamil.com",
        checkIn: new Date(2023, 3, 14),
        checkOut: new Date(2023, 3, 25),
      },
      {
        id: 52,
        name: "Tommy",
        surname: "Luciano",
        phone: 1009334124,
        email: "midus@gamil.com",
        checkIn: new Date(2023, 3, 16),
        checkOut: new Date(2023, 3, 30),
      },
      {
        id: 52,
        name: "Nico",
        surname: "Tomas",
        phone: 9905234443,
        email: "krater2000@gamil.com",
        checkIn: new Date(2023, 3, 16),
        checkOut: new Date(2023, 3, 27),
      },
    ],
    twoBedrooms: [
      {
        id: 23,
        name: "Antionio",
        surname: "Filipaik",
        phone: 897754096,
        email: "chiacynt32@gamil.com",
        checkIn: new Date(2023, 2, 31),
        checkOut: new Date(2023, 3, 3),
      },
      {
        id: 54,
        name: "Maradnionio",
        surname: "Delazqz",
        phone: 687231902,
        email: "fdddsse@gamil.com",
        checkIn: new Date(2023, 3, 1),
        checkOut: new Date(2023, 3, 2),
      },
      {
        id: 224,
        name: "Antionio",
        surname: "Marcli",
        phone: 993233452,
        email: "ilovefrontend@gamil.com",
        checkIn: new Date(2023, 2, 2),
        checkOut: new Date(2023, 2, 5),
      },
    ],
  },
  apartment: {
    oneBedroom: [
      {
        id: 6666,
        name: "Luna",
        surname: "Alabators",
        phone: 942434008,
        email: "zzzzzzzzzzz@gamil.com",
        checkIn: new Date(2023, 2, 26),
        checkOut: new Date(2023, 3, 3),
      },
      {
        id: 777,
        name: "Jack",
        surname: "DaVinci",
        phone: 876424008,
        email: "geometria1920@gamil.com",
        checkIn: new Date(2023, 2, 26),
        checkOut: new Date(2023, 3, 3),
      },
      {
        id: 6966,
        name: "Nico",
        surname: "Alberts",
        phone: 876424008,
        email: "fusy@gamil.com",
        checkIn: new Date(2023, 2, 26),
        checkOut: new Date(2023, 3, 3),
      },
      {
        id: 2341,
        name: "Paul",
        surname: "October",
        phone: 66603234,
        email: "kapusee@gamil.com",
        checkIn: new Date(2023, 2, 26),
        checkOut: new Date(2023, 3, 3),
      },
      {
        id: 3333,
        name: "Meyer",
        surname: "Lansky",
        phone: 687231902,
        email: "crime@gamil.com",
        checkIn: new Date(2023, 2, 26),
        checkOut: new Date(2023, 3, 3),
      },
    ],
    twoBedrooms: [
      {
        id: 2222,
        name: "Antionio",
        surname: "Filipaik",
        phone: 897754096,
        email: "chiacynt32@gamil.com",
        checkIn: new Date(2023, 2, 4),
        checkOut: new Date(2023, 2, 7),
      },
      {
        id: 2222,
        name: "Filipaik",
        surname: "Antionio",
        phone: 897754096,
        email: "chiacynt32@gamil.com",
        checkIn: new Date(2023, 2, 4),
        checkOut: new Date(2023, 2, 7),
      },
      {
        id: 2222,
        name: "Antionio",
        surname: "Frank",
        phone: 97623422675,
        email: "firankta@gamil.com",
        checkIn: new Date(2023, 2, 4),
        checkOut: new Date(2023, 2, 7),
      },
      {
        id: 3333,
        name: "Maradnionio",
        surname: "Delazqz",
        phone: 687231902,
        email: "fdddsse@gamil.com",
        checkIn: new Date(2023, 2, 4),
        checkOut: new Date(2023, 2, 7),
      },
      {
        id: 3333,
        name: "Maradnionio",
        surname: "Delazqz",
        phone: 687231902,
        email: "fdddsse@gamil.com",
        checkIn: new Date(2023, 2, 4),
        checkOut: new Date(2023, 2, 7),
      },
    ],
  },
  standard: {
    oneBedroom: [
      {
        id: 3333,
        name: "Maradnionio",
        surname: "Delazqz",
        phone: 687231902,
        email: "fdddsse@gamil.com",
        checkIn: new Date(2023, 2, 1),
        checkOut: new Date(2023, 2, 1),
      },
      {
        id: 3333,
        name: "Maradnionio",
        surname: "Delazqz",
        phone: 687231902,
        email: "fdddsse@gamil.com",
        checkIn: new Date(2023, 2, 1),
        checkOut: new Date(2023, 2, 1),
      },
      {
        id: 3333,
        name: "Maradnionio",
        surname: "Delazqz",
        phone: 687231902,
        email: "fdddsse@gamil.com",
        checkIn: new Date(2023, 2, 1),
        checkOut: new Date(2023, 2, 1),
      },
    ],
    twoBedrooms: [
      {
        id: "A",
        checkIn: new Date(2023, 2, 10),
        checkOut: new Date(2023, 2, 20),
      },
      {
        id: "X",
        checkIn: new Date(2023, 2, 20),
        checkOut: new Date(2023, 2, 24),
      },
      {
        id: "Y",
        checkIn: new Date(2023, 2, 30),
        checkOut: new Date(2023, 3, 5),
      },
      {
        id: "Z",
        checkIn: new Date(2023, 2, 17),
        checkOut: new Date(2023, 2, 20),
      },
    ],
  },
};

const maxNumberOfRooms = {
  exclusive: {
    oneBedroom: 3,
    twoBedrooms: 3,
    both: 6,
  },
  apartment: {
    oneBedroom: 5,
    twoBedrooms: 5,
    both: 10,
  },
  standard: {
    oneBedroom: 6,
    twoBedrooms: 14,
    both: 20,
  },
};

let maxRooms;
let arr = [];
let results;
let allDaysOfCurrentBook = [],
  allDaysOfWholeReservations = [];

const check = (name, countOfBed, flag) => {
  console.log(name, countOfBed);

  switch (name) {
    case "Exclusive Room":
      if (countOfBed === 2 || (countOfBed === 3 && flag === "two")) {
        arr = array.exclusive.twoBedrooms;
        maxRooms = maxNumberOfRooms.exclusive.twoBedrooms;
      } else if (countOfBed === 1 || (countOfBed === 3 && flag === "one")) {
        arr = array.exclusive.oneBedroom;
        maxRooms = maxNumberOfRooms.exclusive.oneBedroom;
      }
      break;
    case "Apartment Room":
      if (countOfBed === 2 || (countOfBed === 3 && flag === "two")) {
        arr = array.apartment.twoBedrooms;
        maxRooms = maxNumberOfRooms.apartment.twoBedrooms;
      } else if (countOfBed === 1 || (countOfBed === 3 && flag === "one")) {
        arr = array.apartment.oneBedroom;
        maxRooms = maxNumberOfRooms.apartment.oneBedroom;
      }
      break;
    case "Standard Room":
      if (countOfBed === 2 || (countOfBed === 3 && flag === "two")) {
        arr = array.standard.twoBedrooms;
        maxRooms = maxNumberOfRooms.standard.twoBedrooms;
      } else if (countOfBed === 1 || (countOfBed === 3 && flag === "one")) {
        arr = array.standard.oneBedroom;
        maxRooms = maxNumberOfRooms.standard.oneBedroom;
      }
      break;
    default:
      console.log("none");
      break;
  }

  // all days
  arr.forEach((book) => {
    //whole time of one reservation divided for one day, result is count of days
    results = (book.checkOut.getTime() - book.checkIn.getTime()) / 86400000;

    //push first day
    allDaysOfCurrentBook.push(book.checkIn.getTime());
    //push rest of days
    for (let i = 0; i < results; i++) {
      allDaysOfCurrentBook.push(allDaysOfCurrentBook[i] + 86400000);
    }
    //array with all days of reservations with selected room with defined number of guests, to it add poszczególne dni każdej rezerwacji
    allDaysOfCurrentBook.forEach((day) => {
      allDaysOfWholeReservations.push(day);
    });
    allDaysOfCurrentBook = [];
  });

  //covering days in which, all of selected room are busy
  const arrayTerminsReservation = [];
  const coveringDays = {};

  allDaysOfWholeReservations.forEach((x, key) => {
    coveringDays[x] = (coveringDays[x] || 0) + 1;
  });
  allDaysOfWholeReservations = [];

  for (const [key, value] of Object.entries(coveringDays)) {
    if (value >= maxRooms) arrayTerminsReservation.push(key);
  }

  return arrayTerminsReservation;
};

const arrayForValidCoordinates = {
  test: (name, guests, flag, arrayAges) => {
    let countOfBed;
    let nameOfRoom = name;
    if (guests[0] === 1) {
      countOfBed = 1;
    }
    if (guests[0] + guests[1] >= 2) {
      console.log(arrayAges);
      console.log(arrayAges.child1 === "<6", arrayAges.child2 === "<6");
      if (guests[0] === 2 && guests[1] === 0) countOfBed = 3;
      if (guests[0] === 1 && guests[1] === 1) countOfBed = 3;
      if (guests[0] === 1 && guests[1] === 2) {
        if (arrayAges.child1 === "<6" || arrayAges.child2 === "<6")
          countOfBed = 3;
        else countOfBed = 2;
      }
      if (guests[0] === 2 && guests[1] === 1) {
        if (arrayAges.child1 === "<6") countOfBed = 3;
        else countOfBed = 2;
      }
    }
    if (guests[0] + guests[1] >= 4 || guests[0] === 3) {
      countOfBed = 2;
    }

    return check(nameOfRoom, countOfBed, flag);
  },
};

export default arrayForValidCoordinates;

//show only this date at which haven't free rooms for selected (two or one bedrooms)
// if number of adults is 1 then show only rooms with one bedroom
// if number of guests is 2 or 3 then show one and two bedrooms
// if number of guests is 4 or number of adult is 3 then show only two bedrooms

// for selected room with a given number of bedrooms, check if ten of reservation has common period to disable this termin
// you could say that on the "millisecond" axis we extract ranges which will be already booked
