import React, {useState} from "react";
import { Outlet } from "react-router-dom";
export const ToggleSidebar = () => {
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <> 
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md bg-body-tertiary">
              <div className="container-xl">
                <a className="navbar-brand" href="#">
                  <img src="https://codingyaar.com/wp-content/uploads/coding-yaar-logo.png" alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li>
                          <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li>
                          <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">Another Link</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">Another Link</a>
                    </li>
                  </ul>
                  <div className="search-and-icons">
                    <form className="d-flex mb-2 me-2" role="search">
                      <input className="form-control me-2" type="search" aria-label="Search"/>
                    </form>
                    <div className="user-icons d-flex mb-2">
                      <div className="profile"><i className="bi bi-person"></i></div>
                      <div className="wishlist"><i className="bi bi-heart"></i></div>
                      <div className="cart"><i className="bi bi-cart3"></i></div>
                    </div>
                  </div>
                  <div className="contact-info d-md-flex">
                    <p>+0987654321 | +1234567890 </p>
                    <p><a href="mailto:">contact@domainname.com</a></p>
                  </div>
                </div>
              </div>
            </nav>
          </div>
           <Outlet />
        </>
    )
}

