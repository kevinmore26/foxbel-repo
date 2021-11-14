import React from 'react'
import {  Nav } from "react-bootstrap";
// import Foxbel from '../assets/fox.png'
const PortadaView = _=>
    {
      
      return (<div style={{height:'110%',backgroundColor:'#662323',width:'23vw',position:'relative',right:'20px',margin:'0 auto'}}>
          
          <>
          <Nav defaultActiveKey="/home" className="flex-column" >
          <img src={`https://i.imgur.com/6y9SErJ.png` } style={{width:'230px', margin:'0 auto',marginTop:'30px',marginBottom:'30px'}} alt=""></img>
          <p style={{fontSize:'22px',fontFamily:'Quicksand',fontWeight:'bold',color:'#ffffff',display:'flex',justifyContent:'left',marginLeft:'40px'}}>Mi librería</p>
          
          <Nav.Link href="/" style={{color:'white',opacity:'50%',marginLeft:'25px'}}>Inicio</Nav.Link>
          <Nav.Link href="/favorites"style={{color:'white',opacity:'50%',marginLeft:'25px'}}>Música favorita</Nav.Link>
          <Nav.Link href="/favorites" style={{color:'white',opacity:'50%',marginLeft:'25px'}}>Albums</Nav.Link>
          <Nav.Link href="/favorites" style={{color:'white',opacity:'50%',marginLeft:'25px'}}>Canciones</Nav.Link>

          <Nav.Link href="/" style={{color:'white',opacity:'50%',marginLeft:'25px'}}>Metal</Nav.Link>
          <p style={{fontSize:'22px',fontFamily:'Quicksand',fontWeight:'bold',color:'#ffffff',display:'flex',justifyContent:'left',marginLeft:'40px',marginTop:'20px'}}>Playlist</p>
          <Nav.Link href="/" style={{color:'white',opacity:'50%',marginLeft:'25px'}}>Rock</Nav.Link>
          <Nav.Link href="/" style={{color:'white',opacity:'50%',marginLeft:'25px'}}>Para bailar</Nav.Link>

          <Nav.Link href="/" style={{color:'white',opacity:'50%',marginLeft:'25px'}}>Rock 90s</Nav.Link>

          <Nav.Link href="/" style={{color:'white',opacity:'50%',marginLeft:'25px'}}>Baladas</Nav.Link>

          



     

          </Nav>
  
  <br />
 

  <br />
 
</>
          </div>)}

      export default PortadaView