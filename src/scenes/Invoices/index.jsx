import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
} from "@mui/material";
import { mockDataOrders } from "../../data/mockData";
import Header from "../../components/Header";

const Orders = () => {
  const [data, setData] = useState(mockDataOrders);

  const columns = [
    { name: "id", label: "ID" },
    { name: "buyerName", label: "Buyer Name", flex: 1, options: { cellClassName: "name-column--cell" } },
    { name: "address", label: "Address", flex: 1 },
    { name: "contact", label: "Contact", flex: 1 },
    { name: "email", label: "Email", flex: 1 },
    { name: "type", label: "Type", flex: 1 },
    { name: "quantity", label: "Quantity", flex: 1 },
    { name: "date", label: "Date", flex: 1 },
    { name: "status", label: "Status", flex: 1 },
    {
      name: "actions",
      label: "Actions",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          const order = data[tableMeta.rowIndex];
          return (
            <EditDeleteOrder
              order={order}
              onUpdateStatus={handleUpdateOrderStatus}
              onDelete={handleDeleteOrder}
            />
          );
        },
      },
    },
  ];

  const options = {
    filter: true,
    sort: true,
    selectableRows: "none",
    rowsPerPage: 5,
    elevation: 0,
    padding: 0,
  };
  const handleUpdateOrderStatus = (updatedOrder) => {
    setData(data.map((order) => (order.id === updatedOrder.id ? updatedOrder : order)));
  };

  const handleDeleteOrder = (id) => {
    setData(data.filter((order) => order.id !== id));
  };

  return (
    <Box   marginLeft={"20px"} marginRight={"20px"} marginBottom={"20px"}>
      <div style={{marginBottom:-32 }} className="pr">
      <Header title="ORDERS" subtitle={"List of Orders"} />
      </div>
      <Box sx={{ display: "flex"  }}>
        <Box component="main">
          <MUIDataTable title="" data={data} columns={columns} options={options} />
        </Box>
      </Box>
    </Box>
  );
};

const EditDeleteOrder = ({ order, onUpdateStatus, onDelete }) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(order.status);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateStatus = () => {
    onUpdateStatus({ ...order, status });
    handleClose();
  };

  const handleDelete = () => {
    onDelete(order.id);
    handleClose();
  };

  return (
    <>
      <Button style={{ backgroundColor: "aqua"}} variant="outlined" color="primary" onClick={handleOpen}>
        Edit/Delete
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle >Edit or Delete Order</DialogTitle>
        <DialogContent>
          <Select value={status} onChange={(e) => setStatus(e.target.value)} fullWidth margin="normal">
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Shipped">Shipped</MenuItem>
            <MenuItem value="Processing">Processing</MenuItem>
            <MenuItem value="Delivered">Delivered</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateStatus} color="primary">
            Update Status
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Orders;


