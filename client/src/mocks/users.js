import Chance from "chance";
import moment from "moment";


const usersData = () => {
  let data = [
    {
      username: "hing123",
      description: "Some Description",
      email: "hing@tmailservices.com",
      joined: "2011-01-06",
      status: "Active"
    },
    {
      username: "ng123",
      description: "Some Description",
      email: "ng@tmailservices.com",
      joined: "2016-08-02",
      status: "Active"
    },
    {
      username: "Tester12345",
      description: "Some Description",
      email: "tisa@tmailservices.com",
      joined: "2018-1-12",
      status: "Active"
    },
    {
      username: "tss12345",
      description: "Some Description",
      email: "tisssa@tmailservices.com",
      joined: "2017-09-10",
      status: "Active"
    },
    {
      username: "ster",
      description: "Some Description",
      email: "iamtisa@tmailservices.com",
      joined: "2016-02-23",
      status: "Active"
    },
    {
      username: "aster",
      description: "Some Description",
      email: "aiamtisa@tmailservices.com",
      joined: "2012-06-01",
      status: "Active"
    }
  ];
  return data;
};

const userDetails = () => {
  const chance = new Chance();
  const index = Math.round(Math.random() * 3);
  const paymentArray = [
    "https://img.icons8.com/cute-clipart/64/000000/visa.png",
    "https://img.icons8.com/color/48/000000/discover.png",
    "https://img.icons8.com/color/48/000000/mastercard.png",
    "https://img.icons8.com/office/16/000000/jcb.png"
  ];

  const period = ["day", "month", "year", "week"];
  const indexUserType = Math.round(Math.random() * 1);
  const userType = ["New", "Recurring"];
  const details = {
    fname: chance.first(),
    lname: chance.last(),
    registered: chance.date({ string: true }),
    userType: userType[indexUserType],
    paymentMethod: paymentArray[index],
    activity: moment()
      .startOf(period[index])
      .fromNow(),
    country: `https://www.countryflags.io/${chance.country()}/flat/64.png`,

    usage: `${Math.round(Math.random() * 99)}%`,
    userImg: `https://api.adorable.io/avatars/100/${chance.first()}`
  };
  return details;
};

const tableDataGenerator = (numberOfUsers) => {

  const chance = new Chance();
  let users = [];

  const statusMapper = [
    "Free",
    "Subscribed",
    "Paused",
    "Banned"
  ]


  for(let i = 0; i < numberOfUsers; i++) {
    users.push({
      profilePic: `https://api.adorable.io/avatars/100/${chance.first()}`,
      username: chance.first(),
      email: chance.email(),
      status: statusMapper[Math.floor(Math.random()*statusMapper.length)],
    });
  }

  return users;
}

let tableData = tableDataGenerator(9);

// let tableData = [
//   {
//     profilePic: "https://img.icons8.com/cute-clipart/64/000000/visa.png",
//     username: "ng123",
//     email: "hing@tmailservices.com",
//     status: "Free"
//   },
//   {
//     profilePic: "https://img.icons8.com/cute-clipart/64/000000/visa.png",
//     username: "ng123",
//     email: "ng@tmailservices.com",
//     status: "Free"
//   },
//   {
//     profilePic: "https://img.icons8.com/cute-clipart/64/000000/visa.png",
//     username: "Tester12345",
//     email: "tisa@tmailservices.com",
//     status: "Subscribed"
//   },
//   {
//     profilePic: "https://img.icons8.com/cute-clipart/64/000000/visa.png",
//     username: "tss12345",
//     email: "tisssa@tmailservices.com",
//     status: "Banned"
//   },
//   {
//     profilePic: "https://img.icons8.com/cute-clipart/64/000000/visa.png",
//     username: "ster",
//     email: "iamtisa@tmailservices.com",
//     status: "Subscribed"
//   },
//   {
//     profilePic: "https://img.icons8.com/cute-clipart/64/000000/visa.png",
//     username: "aster",
//     email: "aiamtisa@tmailservices.com",
//     status: "Paused"
//   },
//   {
//     profilePic: "https://img.icons8.com/cute-clipart/64/000000/visa.png",
//     username: "aster",
//     email: "aiamtisa@tmailservices.com",
//     status: "Paused"
//   },
//   {
//     profilePic: "https://img.icons8.com/cute-clipart/64/000000/visa.png",
//     username: "aster",
//     email: "aiamtisa@tmailservices.com",
//     status: "Paused"
//   },
//   {
//     profilePic: "https://img.icons8.com/cute-clipart/64/000000/visa.png",
//     username: "aster",
//     email: "aiamtisa@tmailservices.com",
//     status: "Paused"
//   },
//   {
//     profilePic: "https://img.icons8.com/cute-clipart/64/000000/visa.png",
//     username: "aster",
//     email: "aiamtisa@tmailservices.com",
//     status: "Paused"
//   },
//   {
//     profilePic: "https://img.icons8.com/cute-clipart/64/000000/visa.png",
//     username: "aster",
//     email: "aiamtisa@tmailservices.com",
//     status: "Paused"
//   },
//   {
//     profilePic: "https://img.icons8.com/cute-clipart/64/000000/visa.png",
//     username: "aster",
//     email: "aiamtisa@tmailservices.com",
//     status: "Paused"
//   },
//   {
//     profilePic: "https://img.icons8.com/cute-clipart/64/000000/visa.png",
//     username: "aster",
//     email: "aiamtisa@tmailservices.com",
//     status: "Paused"
//   }
// ];

export { userDetails, usersData, tableData };
