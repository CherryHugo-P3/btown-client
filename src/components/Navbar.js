// src/components/Navbar.js

import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  const currentPage = useLocation();
  const isLoginPage = currentPage.pathname === "/login";
  const isSignupPage = currentPage.pathname === "/signup";

  //  Update the rendering logic to display different content
  //  depending on whether the user is logged in or not
  return (
    <nav>
      <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/"><Button variant="outline-secondary">Home</Button></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/spots"><Button variant="outline-secondary">Spots</Button></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/collection"><Button variant="outline-secondary">Collections</Button></Nav.Link>
        </Nav.Item>
    </Nav>


      {/* <Link to="/">
        <button>Home</button>{" "}
      </Link>

      <Link to="/spots"> 
            <button>Spots</button>{" "}
      </Link>

       */}
     
      {/* <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Sign up</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Login</Nav.Link>
        </Nav.Item>
      </Nav> */}

      {isLoggedIn && (
        <>
        <span>*Welcome {user && user.name}*</span>
          <Nav className="justify-content-end" activeKey="/home">
          {/* <button onClick={logOutUser}>Logout</button> 
          <br />
          <hr /> */}
          
        {/* <Nav.Item>
        <Nav.Link href="/collection"><Button variant="secondary" size="sm">Collections</Button></Nav.Link>
        </Nav.Item> */}
        <Nav.Item>
        <Nav.Link href="/"><Button variant="secondary" size="sm" onClick={logOutUser}>Logout</Button></Nav.Link>
        </Nav.Item>
        </Nav>
          {/* <Link to="/collection">  
            <button>Collections</button>
          </Link> */}
        </>
      )}
      

      {!isLoggedIn && (
        <>
          { // using React's useLocation hook and a conditional statement,
            // so the SignUp and Login buttons are not displayed at the Login page
            !isLoginPage && !isSignupPage && (
              <> 
              <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
              <Nav.Link href="/signup"><Button variant="secondary" size="sm">Sign Up</Button></Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link href="/login"><Button variant="secondary" size="sm">Login</Button></Nav.Link>
              </Nav.Item>
              </Nav>

      
                {/* <Link to="/signup">{" "}<button>Sign Up</button></Link>
                <Link to="/login">{" "}<button>Login</button></Link>  */}
              </>
          )} 
          
          
        </>
      )}
    </nav>
  );
}

export default Navbar;
