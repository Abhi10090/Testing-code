import { Link } from 'react-router-dom';
import './header.css';
import { useEffect, useState } from 'react';


function Head(){
  // const [headercontent , setheadercontent] = useState();
return(
    <>
    {/* header section strats */}
    <header class="header_section">
      <div class="container">
        <nav class="navbar navbar-expand-lg fixed-top custom_nav-container pt-3 ">
          <a class="navbar-brand mr-5" href="index.html">
            <img src="images/logo.png" alt=""/>
            <span>
            Dwellfox
            </span>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul class="navbar-nav  ">
                <li class="nav-item active">
                  <Link to=""><a class="nav-link" >Home <span class="sr-only"></span></a></Link>
                </li>
                <li class="nav-item">
                  <Link to="/register"><a class="nav-link" >Register</a></Link>
                </li>
                <li class="nav-item">
                 <Link to="/manageuser"> <a class="nav-link"> USER-LIST </a></Link>
                </li>
                <li class="nav-item">
                  <Link to="/login"><a class="nav-link" >Login</a></Link>
                </li>
                <li class="nav-item">
                <Link to="/editdetail"><a class="nav-link" > Edit-Detail </a></Link>
                </li>
                <li class="nav-item">
                <Link to="/logout"><a class="nav-link" > Logout </a></Link>
                </li>
              </ul>
              <form class="form-inline">
                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
    {/* end header section */}
    </>
)

}
export default Head;