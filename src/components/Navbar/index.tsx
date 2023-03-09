import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

interface IParams {
    toggle: any;
}

const Navbar = ({ toggle }: IParams) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <img src={require('../../assets/images/logo.PNG')} alt='logo' width={60}/>
                </NavLink>
                <Bars onClick={toggle} />
                <NavMenu>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                    <NavLink to='/skills'>
                        Skills
                    </NavLink>
                    <NavLink to='/experiences'>
                        Experiences
                    </NavLink>
                    <NavLink to='/projects'>
                        Projects
                    </NavLink>
                    <NavLink to='/graphics'>
                        Graphics
                    </NavLink>
                    <NavLink to='/contact'>
                        Contact
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Download CV</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='https://drive.google.com/uc?export=download&id=15Rn2WJ1tlQZ2QOWaDWuhabpe8g3EA2_M'>
                        Download CV
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;