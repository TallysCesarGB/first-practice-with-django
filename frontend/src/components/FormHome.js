import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import localeProducts from "../localeProducts";
import {
  addProducts,
  removeProducts,
  filterProductsAsync,
} from "../slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";

export default function FormHome() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productStore.products);

  const [item, setItem] = useState("");
  const [matchedProduct, setMatchedProduct] = useState(null);
  const [amount, setAmount] = useState(0);

  const searchItem = async (e) => {
    setItem(e);
    console.log("Searching for item:", e);
    const item = await filterProductsAsync(e);

    if (e.trim() === "") {
      setMatchedProduct([]); // limpa se o campo estiver vazio
      return;
    }

    setMatchedProduct(item);
  };

  const addToTable = (item) => {
    console.log("Adding item to table:", item);
    item.amountItem = parseInt(amount);
    dispatch(addProducts({ ...item, amountItem: parseInt(amount) }));
    setItem("");
    setAmount(0);
    setMatchedProduct(null);
  };

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Item"
        variant="outlined"
        value={item}
        onChange={(e) => searchItem(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Quantidade"
        variant="outlined"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      {matchedProduct ? (
        matchedProduct.map((it) => (
          <Button onClick={(e) => addToTable(it)}>{it.name}</Button>
        ))
      ) : (
        <h4></h4>
      )}
    </Box>
  );
}
