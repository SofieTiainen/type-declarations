import axios from "axios";

//sidenote: ladda ner jsonn viewer pro

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: { lat: string; lng: string };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string
        bs: string;
    };
};


const url = 'https://jsonplaceholder.typicode.com/users/';

// axios 
// .get(url)
// .then(response => console.log(response.data))
// .catch(error => console.log(error));

/*Vi vill ha all data mapat över i en array till User
När vi nu har en typ som den mapar till, så kan vi skapa en funktion.

Nu kommer axios mapa allt sitt response data till min typ/interface User
och göra en array av det.*/
axios 
.get<User[]>(url)
.then(response => response.data.forEach(PrintBaseUserInfo))
.catch(error => console.log(error));

function PrintBaseUserInfo(user: User) {
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