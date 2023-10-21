import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getQuery } from './api/firebase';

function App() {
  const [apartmentData, setApartmentData] = useState(null)
  useEffect(() => {
    const getData = async () => {
      const queryResponse = await getQuery()
      console.log(queryResponse)
      if (queryResponse) setApartmentData(queryResponse)
    }
  getData()
  }, [])
  return (
    <>
    <div class="explore-container">
        <div class="card">
            <img src="" alt="" />
            <div class="card-content">
                <h2 id="name">{apartmentData && (apartmentData.name ?? "N/A")}</h2>
                <p id="address">{apartmentData && (apartmentData.address ?? "N/A")}</p>
                <p id="priceLow">Price Low: ${apartmentData && (apartmentData.priceLow ?? 0)}</p>
                <p id="priceHigh">Price High: ${apartmentData && (apartmentData.priceHigh ?? 0)}</p>
            </div>
        </div>
        <div class="card">
            <img src="" alt=""/>
            <div class="card-content">
                <h3>Legacy on Rio</h3>
            </div>
        </div>
        <div class="card">
            <img src="" alt=""/>
            <div class="card-content">
                <h3>Ion Austin</h3>
            </div>
        </div>
        <div class="card">
            <img src="" alt=""/>
            <div class="card-content">
                <h3>Block On 28th</h3>
            </div>
        </div>
        </div>
      </>
  );
}

export default App;
