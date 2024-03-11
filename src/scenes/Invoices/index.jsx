// import React from "react";
// import { Box, useTheme } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { mockDataOrders } from "../../data/mockData";
// import { tokens } from "../../theme";
// import Header from "../../components/Header";

// const Orders = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const columns = [
//     { field: "id", headerName: "ID" },
//     {
//       field: "buyerName",
//       headerName: "Buyer Name",
//       flex: 1,
//       cellClassName: "name-column--cell",
//     },
//     {
//       field: "address",
//       headerName: "Address",
//       flex: 1,
//     },
//     {
//       field: "contact",
//       headerName: "Contact",
//       flex: 1,
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       flex: 1,
//     },
//     {
//       field: "type",
//       headerName: "Type",
//       flex: 1,
//     },
//     {
//       field: "quantity",
//       headerName: "Quantity",
//       flex: 1,
//     },
//     {
//       field: "date",
//       headerName: "Date",
//       flex: 1,
//     },
//     {
//       field: "status",
//       headerName: "Status",
//       flex: 1,
//     },
//   ];

//   return (
//     <Box marginLeft={"20px"} marginRight={"20px"} marginBottom={"10px"}>
//       <Header title="ORDERS" subtitle="List of Orders" />
//       <Box
//         m="10px 0 0 0"
//         height="75vh"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//           },
//           "& .name-column--cell": {
//             color: colors.greenAccent[300],
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: colors.blueAccent[700],
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             backgroundColor: colors.primary[400],
//           },
//           "& .MuiDataGrid-footerContainer": {
//             borderTop: "none",
//             backgroundColor: colors.blueAccent[700],
//           },
//           "& .MuiCheckbox-root": {
//             color: `${colors.greenAccent[200]} !important`,
//           },
//         }}
//       >
//         <DataGrid checkboxSelection rows={mockDataOrders} columns={columns} />
//       </Box>
//     </Box>
//   );
// };

// export default Orders;

import React from "react";
import { Box, useTheme, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataOrders } from "../../data/mockData";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Orders = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", width: 40 },
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
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleEditOrder(params.row.id)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDeleteOrder(params.row.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const handleEditOrder = (orderId) => {
    // Placeholder logic for editing order details
    const updatedOrders = mockDataOrders.map((order) =>
      order.id === orderId ? { ...order, status: "Updated Status" } : order
    );
    // Assuming you have a state to update the orders
    // setOrders(updatedOrders);
    console.log(`Edit order with ID ${orderId}`);
  };

  const handleDeleteOrder = (orderId) => {
    // Placeholder logic for deleting order
    const updatedOrders = mockDataOrders.filter((order) => order.id !== orderId);
    // Assuming you have a state to update the orders
    // setOrders(updatedOrders);
    console.log(`Delete order with ID ${orderId}`);
  };

  return (
    <Box marginLeft={"20px"} marginRight={"20px"} marginBottom={"10px"}>
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
            display: "none", // Hide the checkbox column
          },
        }}
      >
        <DataGrid rows={mockDataOrders} columns={columns} />
      </Box>
    </Box>
  );
};

export default Orders;

