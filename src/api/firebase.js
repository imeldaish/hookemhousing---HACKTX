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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const apartmentsCollection = collection(db, 'Apartments');

export async function getQuery() {
    const querySnapshot = await getDocs(query(apartmentsCollection, where('Name', '==', 'Villas on Rio')));

if (querySnapshot.size === 1) {
  // Assuming there is only one matching document
  const doc = querySnapshot.docs[0].data();

  // Access the data you need
  const name = doc.Name;
  const address = doc.Address;
  const priceLow = doc['Price Low'];
  const priceHigh = doc['Price High'];
  return { name, address, priceLow, priceHigh}
} else {
  console.log("Document not found or there are multiple matching documents.");
}
return undefined
}

export { db, app }