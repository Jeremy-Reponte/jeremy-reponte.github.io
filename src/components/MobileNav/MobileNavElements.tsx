import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';


export const MobileNavContainer = styled.aside<{ isOpen: boolean }>`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.secondaryColor};
    display: grid;
    align-items: center;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const MobileNavWrapper = styled.div`
  color: #fff;  
`;

export const MobileNavMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7,80px);
    text-align: center;
    padding: 0;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(7, 60px);        
    }
`

export const MobileNavLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: ${props => props.theme.colors.portfolioColor1};
        transition: 0.2s ease-in-out;
    }
`;

export const MobileNavBtnWrap = styled.div`
  display: flex;
  justify-content: center;  
`;

export const MobileNavBtn = styled(Link)`
    border-radius: 50px;
    background: ${props => props.theme.colors.primaryColor};
    white-space: nowrap;
    padding: 16px 64px;
    color: #ffffff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;