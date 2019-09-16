import Chance from 'chance'
import moment from 'moment'

export const userDetails = () => {
    const chance = new Chance()
    const index = Math.round((Math.random()*3))
    const paymentArray = ["https://img.icons8.com/cute-clipart/64/000000/visa.png",
    "https://img.icons8.com/color/48/000000/discover.png",
    "https://img.icons8.com/color/48/000000/mastercard.png",
    "https://img.icons8.com/office/16/000000/jcb.png",
        ]
   
const period = ['day','month','year','week']
const indexUserType = Math.round((Math.random()*1))
const userType = ['New', 'Recurring']
    const details = {
        fname: chance.first(),
        lname:chance.last(),
        registered:chance.date({string: true}),
        userType:userType[indexUserType],
        paymentMethod:paymentArray[index],

       activity:moment().startOf(period[index]).fromNow(),
        country:`https://www.countryflags.io/${chance.country()}/flat/64.png`,

        usage: `${Math.round(Math.random()*99)}%`,
        userImg: `https://api.adorable.io/avatars/100/${chance.first()}`  
        
    }

    console.log(details)

    
}

