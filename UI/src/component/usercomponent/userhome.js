import { Link } from 'react-router-dom';
import './userhome.css';

function User(){
    return(<>
     <section class="about_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="detail-box">
            <div class="heading_container">
              <h2>
                Welcome login succesfully
              </h2>
            </div>
            <p>
             <b>User-Id</b> : {localStorage.getItem("_id")}
             <br/>
             <b>name</b> : {localStorage.getItem("name")}
             <br/>
             <b>Email-Id</b> : {localStorage.getItem("email")}
             <br/>
             <b>Address</b> : {localStorage.getItem("address")}
             <br/>
             <b>Gender</b> : {localStorage.getItem("gender")}
             <br/>
             <b>City</b> : {localStorage.getItem("city")}
             <br/>
            </p>
          <Link  to="/logout"><font>Logout</font></Link>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img-box">
            <img src="images/about-img.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
   {/* end about section */}
    </>)
}
export default User