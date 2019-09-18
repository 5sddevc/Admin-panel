import Chance from "chance";
import moment from "moment";

const usersData = () => {
  return [
    {
      username: "Tester12345",
      email: "tisa@tmailservices.com",
      joined: "2018-1-12",
      status:"Active"
    },
    {
      username: "tss12345",
      email: "tisssa@tmailservices.com",
      joined: "2017-09-10",
      status:"Active"
    },
    {
      username: "ster",
      email: "iamtisa@tmailservices.com",
      joined: "2016-02-23",
      status:"Active"
    },
    {
        username: "aster",
        email: "aiamtisa@tmailservices.com",
        joined: "2012-06-01",
        status:"Active"
      }
  ];
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
export { userDetails, usersData };
