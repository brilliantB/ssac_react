import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrap = styled.div`
    padding: 10px 30px;
    display: flex;
    border-bottom: 1px solid black;
`;

const LinkWrap = styled.div`
    font-size: 16px;
    font-weight: bolder;
    display: flex;
`;

const StyledLink = styled(Link)`
    text-decoration : none;
    color: #000000;
    margin-right: 10px;

    &:hover{
        color: hotpink;
    }
`;


function NavbarComponents() {
    return (
    <>
        <NavWrap>
            <LinkWrap>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/upload'>Upload</StyledLink>
            </LinkWrap>
        </NavWrap>
    </>
    )
}


export default NavbarComponents;


