import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Cart from './Cart';
import Products from './Products';

function App() {
  return (
    <Wrapper>
      <TitleWrapper>
        <h1>useReducer Hook start Project</h1>
        <p>packages are looking for funding</p>
      </TitleWrapper>

      <LinksWrapper>
        <Link to='/'> Home </Link>
        <Link to='/cart'> Cart </Link>
      </LinksWrapper>

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Roboto";
  margin: 40px;

  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  row-gap: 10px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: #bb7250;

    :hover {
      color: #bb7250;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;

export default App;
