import { useState } from 'react'
import MobileNav from '../components/MobileNav'
import Navbar from '../components/Navbar'

const Navigations = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <MobileNav isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
        </>
    )
}

export default Navigations