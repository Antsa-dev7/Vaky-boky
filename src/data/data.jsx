import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1, title: 'Home', image: iconsImgs.Home, value: '/' },
    { id: 2, title: 'Library', image: iconsImgs.Library, value: '/Library' },
    { id: 3, title: 'Reading', image: iconsImgs.Reading, value: '/Reading' },
    { id: 4, title: 'History', image: iconsImgs.History, value: '/History' },
    { id: 5, title: 'Genres', image: iconsImgs.Genres, value: '/Genres' },
    { id: 6, title: 'Recommendations', image: iconsImgs.Recommemmendations, value: '/Recommendations' },
    { id: 7, title: 'Favorites', image: iconsImgs.Favorites, value: '/Favorites' },
    { id: 8, title: 'Add Book', image: iconsImgs.AddBook, value: '/AddBook' },
    { id: 9, title: 'Account', image: iconsImgs.Account, value: '/Account' },
    { id: 10, title: 'Settings', image: iconsImgs.Setting, value: '/Settings' },
    { id: 11, title: 'Help', image: iconsImgs.Help, value: '/Help' },
    { id: 12, title: 'Notifications', image: iconsImgs.Notificcations, value: '/Notifications' }
];

export const transactions = [
    {
        id: 11, 
        name: "Sarah Parker",
        image: personsImgs.person_four,
        date: "23/12/04",
        amount: 22000
    },
    {
        id: 12, 
        name: "Krisitine Carter",
        image: personsImgs.person_three,
        date: "23/07/21",
        amount: 20000
    },
    {
        id: 13, 
        name: "Irene Doe",
        image: personsImgs.person_two,
        date: "23/08/25",
        amount: 30000
    }
];

export const reportData = [
    {
        id: 14,
        month: "Jan",
        value1: 45,
        value2: null
    },
    {
        id: 15,
        month: "Feb",
        value1: 45,
        value2: 60
    },
    {
        id: 16,
        month: "Mar",
        value1: 45,
        value2: null
    },
    {
        id: 17,
        month: "Apr",
        value1: 45,
        value2: null
    },
    {
        id: 18,
        month: "May",
        value1: 45,
        value2: null
    }
];

export const budget = [
    {
        id: 19, 
        title: "Subscriptions",
        type: "Automated",
        amount: 22000
    },
    {
        id: 20, 
        title: "Loan Payment",
        type: "Automated",
        amount: 16000
    },
    {
        id: 21, 
        title: "Foodstuff",
        type: "Automated",
        amount: 20000
    },
    {
        id: 22, 
        title: "Subscriptions",
        type: null,
        amount: 10000
    },
    {
        id: 23, 
        title: "Subscriptions",
        type: null,
        amount: 40000
    }
];

export const subscriptions = [
    {
        id: 24,
        title: "LinkedIn",
        due_date: "23/12/04",
        amount: 20000,
        image: personsImgs.LinkedIn
    },
    {
        id: 25,
        title: "Google",
        due_date: "23/12/10",
        amount: 5000,
        image: iconsImgs.Google
    },
    {
        id: 26,
        title: "GitHub",
        due_date: "23/12/22",
        amount: 2000,
        image: iconsImgs.gears
    }
];

export const savings = [
    {
        id: 27,
        image: personsImgs.person_one,
        saving_amount: 250000,
        title: "Pay kid bro’s fees",
        date_taken: "23/12/22",
        amount_left: 40000
    }
]

export const cards = [
    {
        id: 45,
        image:iconsImgs.plus,
        title:"Balance",
        price: "22.000",
        code: "1234",
        date: "10-12-2001"
    },
    {
        id: 25,
        image:iconsImgs.plus,
        title:"Balance",
        price: "22.000",
        code: "1234",
        date: "10-12-2001"
    },
    {
        id: 41,
        image:iconsImgs.plus,
        title:"Balance",
        price: "22.000",
        code: "1234",
        date: "10-12-2001"
    },
    {
        id: 20,
        image:iconsImgs.plus,
        title:"Balance",
        price: "22.000",
        code: "1234",
        date: "10-12-2001"
    },
    {
        id: 12,
        image:iconsImgs.plus,
        title:"Balance",
        price: "22.000",
        code: "1234",
        date: "10-12-2001"
    },
    {
        id: 3,
        image:iconsImgs.plus,
        title:"Balance",
        price: "22.000",
        code: "1234",
        date: "10-12-2001"
    },
    {
        id: 4,
        image:iconsImgs.plus,
        title:"Balance",
        price: "22.000",
        code: "1234",
        date: "10-12-2001"
    },
    {
        id: 5,
        image:iconsImgs.plus,
        title:"Balance",
        price: "22.000",
        code: "1234",
        date: "10-12-2001"
    },
    {
        id: 6,
        image:iconsImgs.plus,
        title:"Balance",
        price: "22.000",
        code: "1234",
        date: "10-12-2001"
    }
    
]