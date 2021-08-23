// import { Component } from 'react'
import './Nav.scss'
import BrainFlixLogo from "../../assets/Logo/Logo-brainflix.svg";
import avitar from "../../assets/Images/Mohan-muruge.jpg";


function NavRender() {
    return (
        <div className="App">
            <nav className="nav">
                <div className='nav__nav-search'>
                <div className='nav__logo-container'>
                    <img src={BrainFlixLogo} alt="" className='nav__logo'></img>
                </div>
                
                <form>
                <textarea
                    id="SearchBar"
                    className="nav__searchbar"
                    placeholder="Search"
                    >
                    </textarea>
                </form>
                </div>
                <div className='nav__bottom-container'>
                    <button className='nav__button'>+ UPLOAD</button>
                    <img src={avitar} alt="" className="nav__avitar"></img>
                </div>
            </nav>
        </div>
    );
}

export default NavRender;
