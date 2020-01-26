import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BarcodeScanner } from "components/BarcodeScanner";
import { Product } from "components/Product";
import { fetchProduct } from "reducers/products";

import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  background: #c9b6e4;
  text-align: center;
  padding: 1rem;
`;

const Button = styled.button`
  background: #c9b6e4;
  text-align: center;
  width: 50%;
  align-self: center;
  padding: 1rem;
  border: none;
  letter-spacing: 1px;
  margin-bottom: 3rem;
  :hover {
    background: #e1ccec;
  }
`;

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false);

  const dispatch = useDispatch();

  // onClick={() => setShowScanner(true)

  const test = () => {
    dispatch(fetchProduct(7394376615979));
  };

  return (
    <>
      <Product />
      <Header>
        <h1>Scan barcode of the product</h1>
        <p>...that you would like to recreate!</p>
      </Header>

      {!showScanner && (
        <Main>
          <ion-icon name="barcode"></ion-icon>
          <Button type="button" onClick={test}>
            SHOW SCANNER
          </Button>
        </Main>
      )}

      {showScanner && (
        <BarcodeScanner
          className="scanner"
          onDetected={code => {
            console.log("Got barcode", code);
            setShowScanner(false);
            dispatch(fetchProduct(7394376615979));
          }}
        />
      )}
    </>
  );
};

// 3045140105502
//8437014211962
//7394376615979
