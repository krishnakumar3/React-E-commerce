import React from "react";
import './App.css';

const MOCKDATA = [
  {
    name: "Electronics",profileImage: "electronics.jpg"
  },
  { name: "Groceries",  profileImage: "Groceries.jpg" },
  { name: "Fassion",  profileImage: "fassion.jpg" },
  { name: "Furniture",  profileImage: "furniture.jpg" }
];

const UserList = () => {
  const createList = () => {
    return MOCKDATA.map((value, index) => {
      return (
        <li>
          <img src={value.profileImage} alt="image1" className="img-class" />
          <h2>{value.name}</h2>
          <h2>{value.id}</h2>
          <h2>{value.dept}</h2>
        </li>
      );
    });
  };
  return (
      <>
     
  <ul className="flex-container" >{createList(MOCKDATA)};</ul>;
  
  </>
  )
};
export default UserList;
