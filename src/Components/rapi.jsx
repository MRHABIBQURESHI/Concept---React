import React, { useState } from 'react'
import './card.css'

function RApi() {

const [users , setusers] = useState([]);


    const getdata = async () =>{
        const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-04-24&sortBy=publishedAt&apiKey=4cf6cd07103f428c95e3796d1fa6f634")      
        const users = await response.json()
        setusers(users)
        console.log(users.articles.title)
      

    }
console.log(users)

  return (
    <div>
        <br />
        <button className = 'btn'  onClick={getdata}>Show Data</button>
        <br />
        {
            users.map((itm , ind) => (
                <>
                <div className="card-container">
               <div className="card">
               <h2>{itm.name}</h2>
               
                <br />
                </div>
               </div>
                </>
            ))
        }
    </div>
  )
}

export default RApi




































































































































































































































// import React, { useState, useEffect } from 'react';

// const YourComponent = () => {
//     const [userData, setUserData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch("https://jsonplaceholder.typicode.com/users");
//                 const data = await response.json();
//                 setUserData(data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, []); // Empty dependency array to ensure useEffect runs only once

//     return (
//         <div>
//             {userData ? (
//                 <ul>
//                     {userData.map(user => (
//                         <li key={user.id}>{user.name}</li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default YourComponent;
