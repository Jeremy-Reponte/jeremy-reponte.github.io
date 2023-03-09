import {
    CloseIcon,
    Icon,
    MobileNavBtnWrap,
    MobileNavContainer,
    MobileNavLink,
    MobileNavWrapper,
    MobileNavBtn,
    MobileNavMenu
} from './MobileNavElements';

interface IParams {
    isOpen: boolean;
    toggle: any;
}

const MobileNav = ({ isOpen, toggle }: IParams) => {
    return (
        <MobileNavContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <MobileNavWrapper>
                <MobileNavMenu>
                    <MobileNavLink to='/' onClick={toggle}>
                        Home
                    </MobileNavLink>
                    <MobileNavLink to='/skills' onClick={toggle}>
                        Skills
                    </MobileNavLink>
                    <MobileNavLink to='/experiences' onClick={toggle}>
                        Experiences
                    </MobileNavLink>
                    <MobileNavLink to='/projects' onClick={toggle}>
                        Projects
                    </MobileNavLink>
                    <MobileNavLink to='/graphics' onClick={toggle}>
                        Graphics
                    </MobileNavLink>
                    <MobileNavLink to='/contact' onClick={toggle}>
                        Contact
                    </MobileNavLink>
                </MobileNavMenu>
                <MobileNavBtnWrap>
                    <MobileNavBtn to="https://drive.google.com/uc?export=download&id=15Rn2WJ1tlQZ2QOWaDWuhabpe8g3EA2_M">
                        Download CV
                    </MobileNavBtn>
                </MobileNavBtnWrap>
            </MobileNavWrapper>
        </MobileNavContainer>
    )
}

export default MobileNav