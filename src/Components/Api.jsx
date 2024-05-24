import React, { useState } from 'react'
import './card.css'

function Api() {

const [users , setusers] = useState([]);


    const getdata = async () =>{
       // const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await response.json()
        setusers(users)
        console.log(users)

    }


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
               <h3>{itm.username}</h3>
               <h4>{itm.email}</h4>
               <h5>{itm.address.street}</h5>
                <br />
                </div>
               </div>
                </>
            ))
        }
    </div>
  )
}

export default Api




































































































































































































































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
