import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" height="calc(90vh - 40px)" overflow="auto" sx={{ '::-webkit-scrollbar': { display: 'none' } }}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        {/* colors.primary[400] */}
        <Box
          gridColumn="span 3"
          backgroundColor={"#f7cffcd1"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
          transaction="transform 0.3s ease-in-out"
          sx={{
            transition:"box-shadow 0.3s ease-in-out",
          '&:hover': {
            bgcolor:"#f8d3fcd1",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
          },
          }}
        >
          <StatBox
            title="9,876"
            subtitle="Emails"
            progress="0.75"
            increase="+14%"
            icon={<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={"#f7cffcd1"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
          transaction="transform 0.3s ease-in-out"
          sx={{
            transition:"box-shadow 0.3s ease-in-out",
          '&:hover': {
            bgcolor:"#f8d3fcd1",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
          },
          }}
        >
          <StatBox
            title="342,564"
            subtitle="Sales"
            progress="0.50"
            increase="+21%"
            icon={<PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={"#f7cffcd1"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
          transaction="transform 0.3s ease-in-out"
          sx={{
            transition:"box-shadow 0.3s ease-in-out",
          '&:hover': {
            bgcolor:"#f8d3fcd1",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
          },
          }}
        >
          <StatBox
            title="3,244"
            subtitle="New Orders"
            progress="0.30"
            increase="+5%"
            icon={<AddShoppingCartIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={"#f7cffcd1"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
          transaction="transform 0.3s ease-in-out"
          sx={{
            transition:"box-shadow 0.3s ease-in-out",
          '&:hover': {
            bgcolor:"#f8d3fcd1",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
          },
          }}
        >
          <StatBox
            title="$59,342.32"
            subtitle="Earnings"
            progress="0.80"
            increase="+43%"
            icon={<AttachMoneyIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                Revenue Generated
              </Typography>
              <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon sx={{ fontSize: "26px", color: colors.greenAccent[500] }} />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>{transaction.user}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
            <ProgressCircle size="125" />
            <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: "15px" }}>
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
          backgroundColor={colors.primary[400]}
        >
          <Typography variant="h5" fontWeight="600" sx={{ padding: "30px 30px 0 30px" }}>
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography variant="h5" fontWeight="600" sx={{ marginBottom: "15px" }}>
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

