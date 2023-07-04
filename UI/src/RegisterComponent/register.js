import './register.css';
import { useState } from 'react';
import axios from 'axios';
import { apiurluser } from '../apiurls';

function Register() {

  const [ name , setName ] = useState();
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [ mobile , setMobile ] = useState();
  const [ address , setAddress ] = useState();
  const [ city , setCity ] = useState();
  const [ gender , setGender ] = useState();     
  const [ output , setOutput ] = useState();

  const handleSubmit=()=>{
    
    const userDetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender};

    axios.post(apiurluser+"save",userDetails).then((response)=>{
        //console.log(response);
        setOutput("User register successfully...");
        setName("");
        setEmail("");
        setPassword("");
        setAddress("");
        setCity("");
        setMobile("");
    }).catch((error)=>{
        console.log(error);
    });  
  };
      
  return (
    <>
    {/* About Start */}
         <div class="container-fluid bg-secondary p-0">
          <div class="row g-0">
              <div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">Register <span class="text-primary">Here!!!</span></h1>
<font color="blue">{output}</font>
<form>
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value)} />
  </div>    
  <br/>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="mobile">Mobile:</label>
    <input type="text" class="form-control" value={mobile} onChange={e => setMobile(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="address">Address:</label>
    <textarea class="form-control" value={address} onChange={e => setAddress(e.target.value)} ></textarea>
  </div>
  <br/>
  <div class="form-group">
    <label for="city">City:</label>
    <select class="form-control" value={city} onChange={e => setCity(e.target.value)} >
    <option>Select City</option>
    <option>Indore</option>
    <option>Bhopal</option>
    <option>Ujjain</option>
    </select>
  </div>
  <br/>
  <div class="form-group">
    <label for="gender">Gender:</label>
    Male <input type="radio"  name="gender" value="male" onChange={e => setGender(e.target.value)} />
    &nbsp;&nbsp;
    Female <input type="radio"  name="gender" value="female" onChange={e => setGender(e.target.value)} />
  </div>
  <br/>
  <button type="button" onClick={handleSubmit} class="btn btn-success">Submit</button>
</form>
              </div>
          </div>
      </div>
      {/* About End */}
     </>		
  );
}

export default Register;
