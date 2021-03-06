import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

const Main = styled.div`
  margin: 0 auto;
  background: #f8c3af;
  width: 100%;
  text-align: center;
  margin-bottom: 3rem;
  padding: 1rem 0;
`;

export const ProductHeader = () => {
  const scan = useSelector(state => state.products.product);

  return (
    <Main>
      <h2>Below you will find information about your product</h2>
      <p>Try to make {scan.product.product_name} yourself! It will be tasty!</p>
    </Main>
  );
};
