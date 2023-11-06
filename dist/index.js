"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
;
const url = 'https://jsonplaceholder.typicode.com/users/';
// axios 
// .get(url)
// .then(response => console.log(response.data))
// .catch(error => console.log(error));
/*Vi vill ha all data mapat över i en array till User
När vi nu har en typ som den mapar till, så kan vi skapa en funktion.

Nu kommer axios mapa allt sitt response data till min typ/interface User
och göra en array av det.*/
axios_1.default
    .get(url)
    .then(response => response.data.forEach(PrintBaseUserInfo))
    .catch(error => console.log(error));
function PrintBaseUserInfo(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
    console.log(user.address.street);
    console.log(user.address.zipcode);
    console.log(user.address.city);
    console.log("");
    console.log("------------------");
    console.log("");
}
