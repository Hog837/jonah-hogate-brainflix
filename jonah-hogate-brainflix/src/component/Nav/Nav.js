// import { Component } from 'react'
import './Nav.scss'
import BrainFlixLogo from "../../assets/Logo/Logo-brainflix.svg";
import avitar from "../../assets/Images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";


function NavRender() {
    return (
        <div className="App">
            <nav className="nav">
                <div className='nav__nav-search'>
                <div className='nav__logo-container'>
                    <a href='http://localhost:3000/'>
                    <img src={BrainFlixLogo} alt="" className='nav__logo' ></img>
                    </a>
                </div>
                <div className='nav__right-container'>
                <form>
                    <textarea
                        id="SearchBar"
                        className="nav__searchbar"
                        placeholder="Search"
                        >
                        </textarea>
                    </form>
                    
                    <div className='nav__bottom-container'>
                        <Link to={'/upload'}>
                        <button className='nav__button'> UPLOAD</button>
                        </Link>
                        <img src={avitar} alt="" className="nav__avitar"></img>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavRender;
