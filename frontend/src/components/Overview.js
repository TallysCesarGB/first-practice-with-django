import React, { useState, useEffect, use } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

export default function Overview() {
  const products = useSelector((state) => state.productStore.products);
  const [amountItem, setAmountItem] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setAmountItem(products.length);
    setTotalPrice(
      products.reduce(
        (acc, product) => acc + product.price * product.amountItem,
        0
      )
    );
  }, [products]);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 240,
          height: 240,
        },
      }}
    >
      <Paper elevation={3}>
        <h4>Resumo</h4>
        <p>
          Total: <b>R$ {totalPrice}</b>
        </p>
        <p>
          Qts Itens: <b>{amountItem}</b>
        </p>
        <Button variant="outlined">Ferchar Compra</Button>
      </Paper>
    </Box>
  );
}
