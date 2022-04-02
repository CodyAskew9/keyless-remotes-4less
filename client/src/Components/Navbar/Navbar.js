import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";
import { GiThreeKeys } from "react-icons/gi";
export const Nav = styled.nav`
background: tranparent;
display: flex;
justify-content: center;
height:80px;
font-weight:700;
`;
export const NavLink = styled(Link)`
color: #fff;
font-size:3rem;
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;

@media screen and (max-width: 400px) {
    position: absolute;
    top:10px;
    left: 25px;
}`;

export const NavIcon = styled.div`
display:block;
position: absolute;
top: 0;
right: 0;
cursor: pointer;
color: #fff;

p{
    transform: translate(-175%, 100%);
    font-weight: bold;
}`;

export const Bars = styled(GiThreeKeys)`
font-size: 2rem;
transform: translate(20%, 20%);
`;