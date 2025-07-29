import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { removeProducts } from "../slices/productSlice";

function createData(name, id, price, description, amount) {
  return { name, id, price, description, amount };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function GridHome() {
  const products = useSelector((state) => state.productStore.products);

  const dispatch = useDispatch();
  const removeFromTable = (cod) => {
    dispatch(removeProducts(cod));
    console.log("Removing item with code:", cod);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#Código</TableCell>
            <TableCell align="right">#Nome</TableCell>
            <TableCell align="right">#Quantidade</TableCell>
            <TableCell align="right">#Valor Unitário</TableCell>
            <TableCell align="right">#Valor Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products
            ? products.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.cod}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.amountItem}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <TableCell align="right">
                    <DeleteForeverIcon
                      onClick={(e) => {
                        removeFromTable(row.cod);
                      }}
                      style={{ cursor: "pointer", color: "red" }}
                    />
                  </TableCell>
                </TableRow>
              ))
            : rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
