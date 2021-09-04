import React, { useEffect, useState } from "react";
import Post from "./Post";
const App = () => {
 const [data, setData] = useState([]); // where to store the returned data
 const [error, setError] = useState(null); // where to store the coming errors
 useEffect(() => {
   function fetchData () {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then((res) => res.json())
     .then((res) => setData(res))
     .then((e) => setError(e)) 
   }
   fetchData();
 }, []);
 return (
   <div className="container">
     <h2 style={{marginBottom : "25px"}}> Employee Users </h2>
   <section>
     {data.map((e,index) => {
       return (
         <div >
         <Post name={e.name} username={e.username} email={e.email} phone = {e.phone} key={index} />
         </div>
       )
     })}
   </section>
   </div>
 )
}

export default App;
