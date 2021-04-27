import React from "react";
import styled from 'styled-components';
import Button from './defaults/Button';

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px 15px;
  height: 60px;
  background: rgb(2,0,36);
  background: radial-gradient(circle, rgba(2,0,36,1) 16%, rgba(5,4,73,1) 20%, rgba(5,100,181,1) 25%, rgba(178,178,189,1) 37%, rgba(7,45,145,1) 45%, rgba(0,0,0,1) 51%);
  margin-bottom: 60px;
`
const StyledTitle = styled(Button)`
  text-align: center;
  background-color: transparent;
  border-style: none;
  color: rgb(255, 255, 255);
  font-size: 30px;
  font-weight: 900;
  outline: none;
`

const Header = () => (
  <Navbar>
    <StyledTitle text={"Good Idea"}/>
  </Navbar>
)


export default Header;