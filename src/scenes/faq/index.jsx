import React, { useState } from "react";
import {
  Box,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Products = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [products, setProducts] = useState([
    { id: 1, name: "Potato", price: 25, quantity: 250 },
    { id: 2, name: "Onion", price: 40, quantity: 230 },
    { id: 3, name: "Tomato", price: 80, quantity: 225 },
  ]);

  const [isAddDialogOpen, setAddDialogOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", quantity: "" });

  const handleAddProduct = () => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setAddDialogOpen(false);
    setNewProduct({ name: "", price: 0, quantity: 0 });
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <Box m="20px">
      <Header title="Products" subtitle="List of Products" />

      <Button style={{backgroundColor:"aqua", marginBottom:10+"px" }} onClick={() => setAddDialogOpen(true)}>Add Product</Button>

      <TableContainer style={{background:"#143368"}} component={Paper}>
        <Table>
          <TableHead style={{background:"rgb(14, 29, 56)"}}>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Categories</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={product.id}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="center">${product.price.toFixed(2)}</TableCell>
                <TableCell align="center">{product.quantity}</TableCell>
                <TableCell align="center">
                  <Button style={{backgroundColor:"aqua", marginBottom:10+"px" }} onClick={() => handleDeleteProduct(product.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Product Dialog */}
      <Dialog  open={isAddDialogOpen} onClose={() => setAddDialogOpen(false)}>
        <DialogTitle >Add Product</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            type="number"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Quantity"
            type="number"
            value={newProduct.quantity}
            onChange={(e) => setNewProduct({ ...newProduct, quantity: parseInt(e.target.value) })}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAddDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleAddProduct}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default Products;
