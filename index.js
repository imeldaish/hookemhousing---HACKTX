const { initializeApp } = require('firebase/app');
const { getFirestore, collection, query, where, getDocs } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAUYASu6bGbscB9dRBSna8CpwMRK7drygg",
  authDomain: "hookemhousing-c6b03.firebaseapp.com",
  projectId: "hookemhousing-c6b03",
  storageBucket: "hookemhousing-c6b03.appspot.com",
  messagingSenderId: "1028497293083",
  appId: "1:1028497293083:web:3662ee7fe12d9095559dbe"
};

const db = getDatabase();
const app = initializeApp(firebaseConfig);
//const apartmentRef = ref(db, 'Apartments/Villas on Rio');

const apartmentsCollection = collection(db, 'Apartments');

async function getQuery() {
    const querySnapshot = await getDocs(query(apartmentsCollection, where('Name', '==', 'Villas on Rio')));

if (querySnapshot.size === 1) {
  // Assuming there is only one matching document
  const doc = querySnapshot.docs[0].data();

  // Access the data you need
  const name = doc.Name;
  const address = doc.Address;
  const priceLow = doc['Price Low'];
  const priceHigh = doc['Price High'];

  // Now you can populate your HTML elements with this data
  const nameElement = document.getElementById('name');
  const addressElement = document.getElementById('address');
  const priceLowElement = document.getElementById('priceLow');
  const priceHighElement = document.getElementById('priceHigh');

  nameElement.textContent = name;
  addressElement.textContent = `Address: ${address}`;
  priceLowElement.textContent = `Price Low: $${priceLow}`;
  priceHighElement.textContent = `Price High: $${priceHigh}`;
} else {
  console.log("Document not found or there are multiple matching documents.");
}
}

async function getQuery2() {
  const querySnapshot = await getDocs(query(apartmentsCollection, where('Name', '==', 'The Block on 28th')));

if (querySnapshot.size === 1) {
// Assuming there is only one matching document
const doc = querySnapshot.docs[0].data();

// Access the data you need
const name = doc.Name;
const address = doc.Address;
const priceLow = doc['Price Low'];
const priceHigh = doc['Price High'];

// Now you can populate your HTML elements with this data
const nameElement = document.getElementById('name2');
const addressElement = document.getElementById('address2');
const priceLowElement = document.getElementById('priceLow2');
const priceHighElement = document.getElementById('priceHigh2');

nameElement.textContent = name;
addressElement.textContent = `Address: ${address}`;
priceLowElement.textContent = `Price Low: $${priceLow}`;
priceHighElement.textContent = `Price High: $${priceHigh}`;
} else {
console.log("Document not found or there are multiple matching documents.");
}
}

async function getQuery3() {
  const querySnapshot = await getDocs(query(apartmentsCollection, where('Name', '==', 'Legacy on Rio')));

if (querySnapshot.size === 1) {
// Assuming there is only one matching document
const doc = querySnapshot.docs[0].data();

// Access the data you need
const name = doc.Name;
const address = doc.Address;
const priceLow = doc['Price Low'];
const priceHigh = doc['Price High'];

// Now you can populate your HTML elements with this data
const nameElement = document.getElementById('name3');
const addressElement = document.getElementById('address3');
const priceLowElement = document.getElementById('priceLow3');
const priceHighElement = document.getElementById('priceHigh3');

nameElement.textContent = name;
addressElement.textContent = `Address: ${address}`;
priceLowElement.textContent = `Price Low: $${priceLow}`;
priceHighElement.textContent = `Price High: $${priceHigh}`;
} else {
console.log("Document not found or there are multiple matching documents.");
}
}

async function getQuery4() {
  const querySnapshot = await getDocs(query(apartmentsCollection, where('Name', '==', 'Ion Austin')));

if (querySnapshot.size === 1) {
// Assuming there is only one matching document
const doc = querySnapshot.docs[0].data();

// Access the data you need
const name = doc.Name;
const address = doc.Address;
const priceLow = doc['Price Low'];
const priceHigh = doc['Price High'];

// Now you can populate your HTML elements with this data
const nameElement = document.getElementById('name4');
const addressElement = document.getElementById('address4');
const priceLowElement = document.getElementById('priceLow4');
const priceHighElement = document.getElementById('priceHigh4');

nameElement.textContent = name;
addressElement.textContent = `Address: ${address}`;
priceLowElement.textContent = `Price Low: $${priceLow}`;
priceHighElement.textContent = `Price High: $${priceHigh}`;
} else {
console.log("Document not found or there are multiple matching documents.");
}
}

getQuery()
getQuery2()
getQuery3()
getQuery4()
