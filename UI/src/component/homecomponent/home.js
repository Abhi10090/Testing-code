import './home.css';
import { Link } from 'react-router-dom';

function Home(){
    return(<>
     <section class="about_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="detail-box">
            <div class="heading_container">
              <h2>
                Welcome To Home
              </h2>
            </div>
            <p>
            Dwellfox is a renowned IT development and consulting company founded in 2016. Our goal is to improve business processes and strategies through progressive and innovative technological solutions. We offer a wide range of result-oriented services from IT consulting to development that help in the digital transformation of business.
            </p>
            <Link  to="/register"><font>Register Yourself</font></Link>
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
export default Home