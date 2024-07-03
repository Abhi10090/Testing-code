import './login.css';
import axios from 'axios';
import { useState } from 'react';
import { _apiurl } from '../../api_url';
import { useNavigate } from 'react-router-dom';
function Login() {
  var navigate = useNavigate();
  const [output, setoutput] = useState()
  const [output2, setoutput2] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  var userdetail = { "email": email, "password": password, }
  var handelsubmit = () => {
    axios.post(_apiurl + "login", userdetail).then((res) => {
      setoutput("Login succesfull")
     
var user = res.data.userdetail
localStorage.setItem("token",res.data.token);
localStorage.setItem("name",user.name); 
localStorage.setItem("email",user.email); 
localStorage.setItem("mobile",user.mobile); 
localStorage.setItem("address",user.address); 
localStorage.setItem("city",user.city); 
localStorage.setItem("gender",user.gender); 
localStorage.setItem("info",user.info); 
localStorage.setItem("role",user.role); 
localStorage.setItem("status",user.status); 
console.log(user);
(user.role == "admin")?navigate("/admin"):navigate("/user");

      
    }).catch((err) => {
      setoutput2("invalid user or incorrect detail");
      setemail("")
      setpassword("")
      console.log(err);
    })


  }

  return (<>
    <div className='mainpart' >
      <div className='firstpart'>
        <font color="blue" >{output}</font>
        <font color="red" >{output2}</font>
        <form>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={e => setemail(e.target.value)} />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={e => setpassword(e.target.value)} />
          </div>
          
          <button onClick={handelsubmit} type="button" class="btn btn-primary">Submit</button>
        </form>

      </div>

      <div className='secondpart'>

        <img className='imageset' src='./images/login.avif'></img>
      </div>
    </div>

  </>)
}
export default Login