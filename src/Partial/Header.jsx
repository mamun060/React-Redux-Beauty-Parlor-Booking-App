import React, { useState } from 'react';
import '../Partial/Partial.css';
import logo from '../Assats/images/logo/Thai She Saloon logo.png';
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import BookNowBtn from '../Components/Button/BookNowBtn';
import { Link } from 'react-router-dom';


const Header = () => {

    const [nav, setNav] = useState(false)
    const handleClick = ()=> setNav (!nav)

    return (
        <div className='header'>
            <div className='container'>
                <div className="header__wrapper">

                    <div className="logo">
                        <Link to={'/'}> <img src={logo} alt="Logo" /></Link>
                    </div>

                    <nav>
                        <ul>
                        <li><Link to={'/'}> Home </Link></li>
                        <li><Link to={'/about'}> About us </Link></li>
                        <li><Link to={'/service'}> our services </Link></li>
                        <li><Link to={'/pricing'}> Pricing </Link></li>
                        <li><Link to={'/gallery'}> gallary  </Link></li>
                        <li><Link to={'/blog'}> Blog  </Link></li>
                        <li><Link to={'/contact-us'}> Contact us  </Link></li>
                        </ul>
                    </nav>

                    <div className="booking-btn">
                        <BookNowBtn />
                    </div>

                    <div className='mobile-menu'>
                        <div className='mobile-icon' onClick={handleClick} >
                            {!nav ? <BiMenu /> : <AiOutlineClose /> }
                        </div>

                        { 
                        
                            nav ?
                                <ul className='mobile-menu-link'>
                                    <li><Link to={'/'}> Home </Link></li>
                                    <li><Link to={'/about'}> About us </Link></li>
                                    <li><Link to={'/service'}> our services </Link></li>
                                    <li><Link to={'/pricing'}> Pricing </Link></li>
                                    <li><Link to={'/gallery'}> gallary  </Link></li>
                                    <li><Link to={'/blog'}> Blog  </Link></li>
                                    <li><Link to={'/contact-us'}> Contact us  </Link></li>
                                </ul>
                            :
                                null
                        }

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;


