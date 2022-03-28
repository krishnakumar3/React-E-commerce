import React from "react";


const Item=()=>{
    
    return(
        
        <>
        <h1>Categories</h1>
        <table className="td" width="100%">
            <tr>
                <th>{<img src="img\electronics.jpg" alt="Electronics" height="150px" width="150px"></img>}</th>
                <th><img src="img\Groceries.jpg" alt="Groceries" height="150px" width="150px"></img></th>
                <th><img src="img\fassion.jpg" alt="Fassion" height="150px" width="150px"></img></th>
                <th><img src="img\furniture.jpg" alt="Furniture" height="150px" width="150px"></img></th>
                
            </tr>
            <tr>
                <td>Electronics</td>
                <td>Grocery</td>
                <td>Fassion</td>
                <td>Furniture</td>
            </tr>
        </table>
        
        
        </>
    )
}

export default Item;