// import { data } from 'autoprefixer'
// import React, { useState } from 'react'

// function File1() {
  
  

//     const [users , setusers] = useState([]);
//     const getData = async () => {
//         const response = await fetch("https://api.escuelajs.co/api/v1/categories")
//         const product = await  response.json()
//         setusers(product)
//     }
 
//     return (
// <>
// <h1>Cards</h1>
// <button onClick={getData}>Show Data</button>
// {

// users.map((x , ind ) => {
        
// <div  key={ind} className="card" style={{width:" 18rem"}}>
//         <img src={x.image} className="card-img-top" alt="" />
//         <div className="card-body">
//           <h5 className="card-title">{x.name}</h5>
//           {/* <p className="card-text">{x.price}</p> */}
//           <a href="#" className="btn btn-primary">Submit</a>
//         </div>
//       </div>
//     })
       

// }
// </>
// )
// }

// export default File1






import React, { useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/categories");
    const data = await response.json();
    console.log(data);
    setProducts(data);
  };

  return (
    <div>
      <button onClick={fetchProducts}>All Products</button>
      <div>
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img className="card-img-top" src={product.image} alt="" />
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}














































// // import React, { useState, useEffect } from 'react';

// // function File1() {
// //   const [userData, setUserData] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch("https://jsonplaceholder.typicode.com/users");
// //         const data = await response.json();
// //         setUserData(data);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   return (
// //     <>
// //       <h1>Cards</h1>
// //       {userData.map((user, index) => (
// //         <div className="card" style={{ width: "18rem" }} key={index}>
// //           <img src="" className="card-img-top" alt="" />
// //           <div className="card-body">
// //             <h5 className="card-title">{user.name}</h5>
// //             <p className="card-text">{user.email}</p>
// //             <a href="#" className="btn btn-primary">Submit</a>
// //           </div>
// //         </div>
// //       ))}
// //     </>
// //   );
// // }

// // export default File1;



