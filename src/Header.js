import React from "react";

import Logo from './Logo';
import Search from './Search';
import Login from './Login';
import Condition from "./Condition";
import Contact from './Contact';
import Cart from "./Cart";

const Header=()=>{
    return(
        <>
       

<div >
        <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li>{<Search />}</li>
  {/* <li>{<Condition />}</li> */}
  {<Contact />}
  

  
  {<Login />}
  {<Cart />}
  
  {/*<li id="loginb">{<Login />}</li>*/}
</ul>
       
</div>

</>
    )
}
export default Header;