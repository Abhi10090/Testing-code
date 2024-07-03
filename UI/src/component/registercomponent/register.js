import './register.css';
import axios from 'axios';
import { useState } from 'react';
import { _apiurl } from '../../api_url';
function Register() {
  const [output , setoutput]= useState()
  const [name , setname]= useState()
  const [email , setemail]= useState()
  const [password , setpassword]= useState()
  const [mobile , setmobile]= useState()
  const [address , setaddress]= useState()
  const [city , setcity]= useState()
  const [gender , setgender]= useState()

  var userdetail = {"name":name, "email":email , "password":password,"mobile":mobile,"address":address,"city":city,"gender":gender}
  var handelsubmit=()=>{
axios.post(_apiurl+"save",userdetail).then((res)=>{
  setoutput("Registration is succesfully completed")
  setname("")
  setemail("")
  setpassword("")
  setmobile("")
  setaddress("")
  setcity("")
  setgender("")
}).catch((err)=>{
  console.log(err);
})


  }

    return (<>
        <div className='mainpart' >
            <div className='firstpart'>
              <font color="blue" >{output}</font>
            <form>
            <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="name" class="form-control" id="exampleInputPassword1" value={name} onChange={e=>setname(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={email} onChange={e=>setemail(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={e=>setpassword(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Mobile</label>
    <input type="mobile" class="form-control" id="exampleInputPassword1" value={mobile} onChange={e=>setmobile(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Address</label>
    <input type="address" class="form-control" id="exampleInputPassword1" value={address} onChange={e=>setaddress(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">City</label>
    <select type="city" class="form-control" id="exampleInputPassword1"  value={city} onChange={e=>setcity(e.target.value)}>
<option>Select City</option>
<option>Indore</option>
<option>Bhopal</option>
<option>Ujjain</option>
<option>Nalkheda</option>
</select>
  </div>
 <label for="gender">Gender : </label>&nbsp;
     Male<input type="radio" value ="male" name="gender" onChange={e=>setgender(e.target.value)}/>&nbsp;&nbsp;&nbsp;
   Female <input type="radio" value ="female" name="gender"  onChange={e=>setgender(e.target.value)}/>
   <br/> <br/>
  <button  onClick={handelsubmit} type="button" class="btn btn-primary">Submit</button>
</form>

            </div>

            <div className='secondpart'>

<img className='imageset' src='./images/registration1.jpg'></img>
            </div>
        </div>

    </>)
}
export default Register