import React, { useEffect } from 'react'
import styledComponents from 'styled-components';
import ProductCard from './ProductCard';
import useShop from './store/ShopContext';

function Cart() {
  const {products, total} = useShop();
  return (
    <div>
      <Title>Your cart total is {total}.00$</Title>
      <CartsWrapper>
        {products.map((product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </CartsWrapper>

    </div>
  )
}

const Title = styledComponents.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;



const CartsWrapper = styledComponents.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
`;


export default Cart