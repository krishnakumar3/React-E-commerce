
import { useState } from "react";

function UserForm() {

  const [values,setValues] = useState({
    name: "",
    email: "",
    phonenumber: "",
    address:"",
  });
  const handleNameChange  =(Event)=>{
      setValues({...values,name:Event.target.value})
  }
  const handleEmailChange  =(Event)=>{
    setValues({...values,email:Event.target.value})
}
const handlePhoneChange  =(Event)=>{
    setValues({...values,phonenumber:Event.target.value})
}
const handleAddressChange  =(Event)=>{
    setValues({...values,address:Event.target.value})
}
const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    
   setValues({ name: "", email: "", phonenumber: "" ,address:""});
     alert(`
   Namae: ${this.name}
   Email:${this.email}
   Phone:${this.phonenumber}
   Address:${this.address}
     `)
  
    
  };
  const handleSubmmit1=(event)=>{
    const { name,email,phonenumber,address}=this.state;
    event.preventDefault();
    alert(`
    ___Your Details___\n
    Namae: ${this.name}
    Email:${this.email}
    Phone:${this.phonenumber}
    Address:${this.address}
      `)
  }
 
  /*const handleSubmit1=(Event)=>{
      return(
    alert(`
    Nmae: ${this.state.name}
    Email:${this.state.email}
    Phone:${this.state.phonenumber}
    Address:${this.state.address}
      `))
      Event.preventDefault();
  }*/
  

  return (
    <div className="form-container">
      <form onSubmit={handleSubmmit1}>
        <div>
          <h3>Contact Form</h3>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <input
            type="tel"
            name="phonenumber"
            placeholder="Phone Number"
            value={values.phonenumber}
            onChange={handlePhoneChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="address"
            placeholder="Enter Address"
            value={values.address
            }
            onChange={handleAddressChange}
          />
        </div>

        <div>
          <button >Submit Contact</button>
        </div>
      </form>
    </div>
  );
}
export default UserForm;