import React from "react";
import './App.css';

const MOCKDATA = [
  { name: "T-shirt",Price:"500",  profileImage: "t-shirt.jpg"},
  { name: "speaker",Price:"700",  profileImage: "speaker.jpeg" },
  { name: "phone",Price:"50000",  profileImage: "phone.jpg" }, 
  { name: "speaker",Price:"700",  profileImage: "speaker.jpeg" },
  { name: "speaker",Price:"700",  profileImage: "speaker.jpeg" },
  { name: "speaker",Price:"700",  profileImage: "speaker.jpeg" },
];

const List =() =>{
    const Create =()=>{
        return MOCKDATA.map((value,index)=>{

            return(
                <li key={index}>
                    <img src={value.profileImage} alt="list"  className="image1"  />
          <h1>{value.name}</h1>
          <h2>{value.Price}</h2>
          <h1><button type="button" value="Add Cart">Add Cart</button></h1>
          
                </li>
            )

        })
    }
    return(
        <ul>
            {Create(MOCKDATA)};
        </ul>
    )

}
export default List;