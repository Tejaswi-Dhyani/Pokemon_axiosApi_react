import React, { useEffect, useState } from 'react';
import axios from 'axios';
import pic from './images/1p.png';

export const PageA=()=>{
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();
    useEffect(()=>{
      async function getData(){
const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
console.log(res.data);
setName(res.data.name);
setMoves(res.data.moves.length);

       }
       getData();
    });
    return(
        <>
        <img src={pic}  alt="logo" />
       
        <div style={{padding:"20px 50px",backgroundColor:"aquamarine",border:"1px solid black"}}>
        <h3>Please select any value...</h3>
      
      <select value={num} onChange={(event)=>{
              setNum(event.target.value);
      }}>
           <option value="">Select</option>
<option value="1">1</option>
<option value="25">25</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
<h1>You Choose Value <span style={{color:"red"}}>{num}</span></h1>
      <h1>My Name is <span style={{color:"red"}}>{name}</span></h1>
<h1>I have <span style={{color:"red"}}>{moves}</span> moves</h1>

        </div>
        
<footer style={{position:'fixed',bottom:'0', width:"100%"}}>
    <hr></hr>
    <p>........Created  By @TEJASWI DHYANI.......</p>
</footer>
        </>
    );

}