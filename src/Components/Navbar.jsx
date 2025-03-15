import React from 'react'
import './Navbar.css'

function Navbar(){
    return(
        <>
            <header>
                <nav className="nav-bar">
                    <div className="image">
                        <img id="nav-logo" src="/public/BooksBloom.png"/>
                    </div>
                    <div className="nav-list">
                        <ul>
                            <li>
                                Home
                            </li>
                            <li>
                                Shop
                            </li>
                            <li>
                                <input id="nav-input" placeholder="What are you looking for?"></input>
                            </li>
                            <li>
                                Products
                            </li>
                            <li className="signUp-btn">
                                <button className="Btn1">LogIn</button>
                            </li>
                            <li>
                                <button className="Btn2">SignIn</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Navbar;