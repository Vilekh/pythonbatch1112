import './nav.css';
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';

function Nav() {

  const [NavContent , setNavContent] = useState();

  useEffect(()=>{
    setTimeout(()=>{
    if(localStorage.getItem('token')!=undefined && localStorage.getItem('role')=='admin')
    {
        setNavContent(<>
            {/* Navbar Start */}
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="index.html" class="navbar-brand p-0">
            <h1 class="m-0 text-uppercase text-primary"><i class="far fa-smile text-primary me-2"></i>PMS</h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0 me-n3">
                <a class="nav-item nav-link active"><Link to="/user">Admin Home</Link></a>
                <a class="nav-item nav-link"><Link to="/manageusers">Manage Users</Link></a>
                <a class="nav-item nav-link"><Link to="/logout">logout</Link></a>
            </div>
        </div>
    </nav>
    {/* Navbar End */}        
            </>);
    }
    else if(localStorage.getItem('token')!=undefined && localStorage.getItem('role')=='user')
    {
        setNavContent(<>
            {/* Navbar Start */}
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="index.html" class="navbar-brand p-0">
            <h1 class="m-0 text-uppercase text-primary"><i class="far fa-smile text-primary me-2"></i>PMS</h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0 me-n3">
                <a class="nav-item nav-link active"><Link to="/user">User Home</Link></a>
                <a class="nav-item nav-link"><Link to="/logout">logout</Link></a>
            </div>
        </div>
    </nav>
    {/* Navbar End */}        
            </>);    
    }
    else
    {
        setNavContent(<>
                {/* Navbar Start */}
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="index.html" class="navbar-brand p-0">
            <h1 class="m-0 text-uppercase text-primary"><i class="far fa-smile text-primary me-2"></i>PMS</h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0 me-n3">
                <a class="nav-item nav-link active"><Link to="/">Home</Link></a>
                <a class="nav-item nav-link"><Link to="/about">About</Link></a>
                <a class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
                <a class="nav-item nav-link"><Link to="/service">Service</Link></a>
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{"color":"#F3525B"}} >Pages</a>
                    <div class="dropdown-menu m-0">
                        <a class="dropdown-item">Blog Grid</a>
                        <a class="dropdown-item">Blog Detail</a>
                        <a class="dropdown-item">The Team</a>
                        <a class="dropdown-item">Testimonial</a>
                    </div>
                </div>
                <a class="nav-item nav-link"><Link to="/register">Register</Link></a>
                <a class="nav-item nav-link"><Link to="/login">login</Link></a>
            </div>
        </div>
    </nav>
    {/* Navbar End */}
            </>);
    }
    },10);
  },[]);

  return (
<>
{NavContent}
</>
  );
}

export default Nav;
