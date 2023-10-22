import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getQuery } from './api/firebase';
import { getQuery2 } from './api/firebase';
import { getQuery3 } from './api/firebase';
import { getQuery4 } from './api/firebase';
import myImage from './group1.png';
import profilePage from './profile.png';


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

    const [apartmentData2, setApartmentData2] = useState(null)
    useEffect(() => {
        const getData2 = async () => {
            const queryResponse = await getQuery2()
            console.log(queryResponse)
            if (queryResponse) setApartmentData2(queryResponse)
        }
        getData2()
    }, [])

    const [apartmentData3, setApartmentData3] = useState(null)
    useEffect(() => {
        const getData3 = async () => {
            const queryResponse = await getQuery3()
            console.log(queryResponse)
            if (queryResponse) setApartmentData3(queryResponse)
        }
        getData3()
    }, [])

    const [apartmentData4, setApartmentData4] = useState(null)
    useEffect(() => {
        const getData4 = async () => {
            const queryResponse = await getQuery4()
            console.log(queryResponse)
            if (queryResponse) setApartmentData4(queryResponse)
        }
        getData4()
    }, [])

    return (
        <>
            <div class="header">
                <h1 id="logo">HOOK 'EM HOUSING</h1>
                <div class="search-input">
                    <svg id="search-icon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M23.5 23.5L16 16M1 9.75C1 10.8991 1.22633 12.0369 1.66605 13.0985C2.10578 14.1601 2.7503 15.1247 3.56282 15.9372C4.37533 16.7497 5.33992 17.3942 6.40152 17.8339C7.46312 18.2737 8.60093 18.5 9.75 18.5C10.8991 18.5 12.0369 18.2737 13.0985 17.8339C14.1601 17.3942 15.1247 16.7497 15.9372 15.9372C16.7497 15.1247 17.3942 14.1601 17.8339 13.0985C18.2737 12.0369 18.5 10.8991 18.5 9.75C18.5 8.60093 18.2737 7.46312 17.8339 6.40152C17.3942 5.33992 16.7497 4.37533 15.9372 3.56282C15.1247 2.7503 14.1601 2.10578 13.0985 1.66605C12.0369 1.22633 10.8991 1 9.75 1C8.60093 1 7.46312 1.22633 6.40152 1.66605C5.33992 2.10578 4.37533 2.7503 3.56282 3.56282C2.7503 4.37533 2.10578 5.33992 1.66605 6.40152C1.22633 7.46312 1 8.60093 1 9.75Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <a href={profilePage}>
                <div >
                    <img id="profile-img" src={myImage} alt="pfp" />
                </div>
                </a>
            </div>
            <h1 id="title">Explore</h1>

            <div class="explore-container">
                <div class="card">
                    <div class="card-content">
                        <div class="card-img">
                            <img src="https://villasonrio.com/wp-content/uploads/DJI_0101-HDR.jpeg" />
                        </div>
                        <div class="name-address-price-wrapper">
                            <div class="name-address-wrapper">
                                <h1 class="name" id="name">{apartmentData && (apartmentData.name ?? "N/A")}</h1>
                                <p class="address" id="address">{apartmentData && (apartmentData.address ?? "N/A")}</p>
                            </div>
                            <p class="price" id="priceLow">${apartmentData && (apartmentData.priceLow ?? 0)} -${apartmentData && (apartmentData.priceHigh ?? 0)}</p>
                            {/* <p class="price" id="priceHigh">-${apartmentData && (apartmentData.priceHigh ?? 0)}</p> */}
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <div class="card-img">
                            <img src="https://s3.amazonaws.com/rcp-prod-uploads/property_images/webp/2020-11/df60b84b47d5713021f6cb26e2cbbe4d9ad83890TE.jpg " />
                        </div>
                        <div class="name-address-price-wrapper">
                            <div class="name-address-wrapper">
                                <h1 class="name" id="name2">{apartmentData2 && (apartmentData2.name ?? "N/A")}</h1>
                                <p class="address" id="address2">{apartmentData2 && (apartmentData2.address ?? "N/A")}</p>
                            </div>
                            <p class="price" id="priceLow">${apartmentData2 && (apartmentData2.priceLow ?? 0)} -${apartmentData2 && (apartmentData2.priceHigh ?? 0)}</p>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-content">
                        <div class="card-img">
                            <img src="https://picturescdn.alndata.com/?pid=ca2f3d60-486e-4763-bc83-64840822b7c1&w=720&qual=60&fmt=webp" />
                        </div>
                        <div class="name-address-price-wrapper">
                            <div class="name-address-wrapper">
                                <h1 class="name" id="name3">{apartmentData3 && (apartmentData3.name ?? "N/A")}</h1>
                                <p class="address" id="address3">{apartmentData3 && (apartmentData3.address ?? "N/A")}</p>
                            </div>
                            <p class="price" id="priceLow">${apartmentData3 && (apartmentData3.priceLow ?? 0)} -${apartmentData3 && (apartmentData3.priceHigh ?? 0)}</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <div class="card-img">
                            <img src="https://ion-austin.com/wp-content/uploads/sites/6/2020/02/HomepageExterior.jpg" />
                        </div>
                        <div class="name-address-price-wrapper">
                            <div class="name-address-wrapper">
                                <h1 class="name" id="name4">{apartmentData4 && (apartmentData4.name ?? "N/A")}</h1>
                                <p class="address" id="address4">{apartmentData4 && (apartmentData4.address ?? "N/A")}</p>
                            </div>
                            <p class="price" id="priceLow">${apartmentData4 && (apartmentData4.priceLow ?? 0)} -${apartmentData4 && (apartmentData4.priceHigh ?? 0)}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default App;
