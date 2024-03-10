import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Orders = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "buyerName",
      headerName: "Buyer Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "contact",
      headerName: "Contact",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
  ];

  // Mock data for 9 buyers with date
  const mockDataOrders = [
    { id: 1, buyerName: "John Doe", address: "123 Main St", contact: "555-1234", email: "john.doe@example.com", type: "Vegetables", quantity: 3, date: "2024-03-10", status: "Pending" },
    { id: 2, buyerName: "Jane Smith", address: "456 Oak Ave", contact: "555-5678", email: "jane.smith@example.com", type: "Fast Food", quantity: 2, date: "2024-03-11", status: "Shipped" },
    { id: 3, buyerName: "Alice Johnson", address: "789 Pine Blvd", contact: "555-9012", email: "alice.johnson@example.com", type: "Vegetables", quantity: 5, date: "2024-03-12", status: "Processing" },
    { id: 4, buyerName: "Bob Williams", address: "101 Cedar Rd", contact: "555-3456", email: "bob.williams@example.com", type: "Fast Food", quantity: 1, date: "2024-03-10", status: "Delivered" },
    { id: 5, buyerName: "Eva Davis", address: "202 Elm Ln", contact: "555-7890", email: "eva.davis@example.com", type: "Vegetables", quantity: 4, date: "2024-03-11", status: "Pending" },
    { id: 6, buyerName: "Michael Miller", address: "303 Birch Dr", contact: "555-2345", email: "michael.miller@example.com", type: "Fast Food", quantity: 2, date: "2024-03-12", status: "Shipped" },
    { id: 7, buyerName: "Olivia Wilson", address: "404 Willow Ave", contact: "555-6789", email: "olivia.wilson@example.com", type: "Vegetables", quantity: 3, date: "2024-03-10", status: "Processing" },
    { id: 8, buyerName: "Charlie Brown", address: "505 Maple Rd", contact: "555-0123", email: "charlie.brown@example.com", type: "Fast Food", quantity: 1, date: "2024-03-12", status: "Delivered" },
    { id: 9, buyerName: "Sophia Lee", address: "606 Pine Blvd", contact: "555-4567", email: "sophia.lee@example.com", type: "Vegetables", quantity: 6, date: "2024-03-11", status: "Pending" },
  ];

  return (
    <Box marginLeft="20px" marginBottom="0px">
      <Header title="ORDERS" subtitle="List of Orders" />
      <Box
        m="10px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataOrders} columns={columns} />
      </Box>
    </Box>
  );
};

export default Orders;

