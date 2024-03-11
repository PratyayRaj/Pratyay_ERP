// import { useState } from "react";
// import FullCalendar, { formatDate } from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import listPlugin from "@fullcalendar/list";
// import {
//   Box,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import Header from "../../components/Header";
// import { tokens } from "../../theme";

// const Calendar = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [currentEvents, setCurrentEvents] = useState([]);

//   const handleDateClick = (selected) => {
//     const title = prompt("Please enter a new title for your event");
//     const calendarApi = selected.view.calendar;
//     calendarApi.unselect();

//     if (title) {
//       calendarApi.addEvent({
//         id: `${selected.dateStr}-${title}`,
//         title,
//         start: selected.startStr,
//         end: selected.endStr,
//         allDay: selected.allDay,
//       });
//     }
//   };

//   const handleEventClick = (selected) => {
//     if (
//       window.confirm(
//         `Are you sure you want to delete the event '${selected.event.title}'`
//       )
//     ) {
//       selected.event.remove();
//     }
//   };

//   return (
//     <Box marginLeft={"20px"} marginRight={"20px"} marginBottom={"10px"}>
//       <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

//       <Box display="flex" justifyContent="space-between">
//         {/* CALENDAR SIDEBAR */}
//         <Box
//           flex="1 1 20%"
//           backgroundColor={colors.primary[400]}
//           p="15px"
//           borderRadius="4px"
//         >
//           <Typography variant="h5">Events</Typography>
//           <List>
//             {currentEvents.map((event) => (
//               <ListItem
//                 key={event.id}
//                 sx={{
//                   backgroundColor: colors.greenAccent[500],
//                   margin: "10px 0",
//                   borderRadius: "2px",
//                 }}
//               >
//                 <ListItemText
//                   primary={event.title}
//                   secondary={
//                     <Typography>
//                       {formatDate(event.start, {
//                         year: "numeric",
//                         month: "short",
//                         day: "numeric",
//                       })}
//                     </Typography>
//                   }
//                 />
//               </ListItem>
//             ))}
//           </List>
//         </Box>

//         {/* CALENDAR */}
//         <Box flex="1 1 100%" ml="15px">
//           <FullCalendar
//             height="75vh"
//             plugins={[
//               dayGridPlugin,
//               timeGridPlugin,
//               interactionPlugin,
//               listPlugin,
//             ]}
//             headerToolbar={{
//               left: "prev,next today",
//               center: "title",
//               right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
//             }}
//             initialView="dayGridMonth"
//             editable={true}
//             selectable={true}
//             selectMirror={true}
//             dayMaxEvents={true}
//             select={handleDateClick}
//             eventClick={handleEventClick}
//             eventsSet={(events) => setCurrentEvents(events)}
//             initialEvents={[
//               {
//                 id: "12315",
//                 title: "All-day event",
//                 date: "2022-09-14",
//               },
//               {
//                 id: "5123",
//                 title: "Timed event",
//                 date: "2022-09-28",
//               },
//             ]}
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Calendar;


import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Box from "@mui/material/Box";
import MUIDataTable from "mui-datatables";
const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const orders = [
  {
    id: 1,
    customer: "Alice",
    product: "Book",
    deliveryDate: new Date(currentYear, currentMonth, 15),
  },
  {
    id: 2,
    customer: "Bob",
    product: "Laptop",
    deliveryDate: new Date(currentYear, currentMonth, 18),
  },
  {
    id: 3,
    customer: "Charlie",
    product: "Shoes",
    deliveryDate: new Date(currentYear, currentMonth, 20),
  },
  {
    id: 4,
    customer: "David",
    product: "Headphones",
    deliveryDate: new Date(currentYear, currentMonth, 22),
  },
  {
    id: 5,
    customer: "Eva",
    product: "Watch",
    deliveryDate: new Date(currentYear, currentMonth, 25),
  },
  {
    id: 6,
    customer: "Frank",
    product: "Camera",
    deliveryDate: new Date(currentYear, currentMonth, 28),
  },
  {
    id: 7,
    customer: "Frank",
    product: "Camera",
    deliveryDate: new Date(currentYear, currentMonth, 28),
  },
  {
    id: 8,
    customer: "Grace",
    product: "Phone",
    deliveryDate: new Date(currentYear, currentMonth, 20),
  },
  {
    id: 9,
    customer: "Henry",
    product: "Tablet",
    deliveryDate: new Date(currentYear, currentMonth, 20),
  },
  {
    id: 10,
    customer: "Isabel",
    product: "Earphones",
    deliveryDate: new Date(currentYear, currentMonth, 20),
  },
  {
    id: 11,
    customer: "Jack",
    product: "Smartwatch",
    deliveryDate: new Date(currentYear, currentMonth, 25),
  },
  {
    id: 12,
    customer: "Katherine",
    product: "Backpack",
    deliveryDate: new Date(currentYear, currentMonth, 25),
  },
  {
    id: 13,
    customer: "Leo",
    product: "Camera",
    deliveryDate: new Date(currentYear, currentMonth, 28),
  },
  {
    id: 14,
    customer: "Mia",
    product: "Printer",
    deliveryDate: new Date(currentYear, currentMonth, 28),
  },
];

const TileContent = ({ date, view }) => {
  if (view === "month") {
    const ordersByDate = orders.filter(
      (order) => order.deliveryDate.toDateString() === date.toDateString()
    );
    return (
      <div className="tile-content">
        {ordersByDate.length > 0 && <p>{ordersByDate.length} orders</p>}
      </div>
    );
  }
  return null;
};

const OrdCalendar = () => {
  const [date, setDate] = React.useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  const columns = [
    {
      name: "id",
      label: "ID",
    },
    {
      name: "customer",
      label: "Customer",
    },
    {
      name: "product",
      label: "Product",
    },
  ];

  const ordersByDate = orders.filter(
    (order) => order.deliveryDate.toDateString() === date.toDateString()
  );

  const data = ordersByDate.map((order) => ({
    id: order.id,
    customer: order.customer,
    product: order.product,
  }));

  const options = {
    filter: true,
    search: false,
    selectableRows: "none",
    print: false,
    download: false,
    viewColumns: false,
    setTableProps: () => ({
        style: {
          minWidth: "95vh", // Set the minimum width
          minHeight: "100px", // Set the minimum height
        },
      }),
  };

  return (
    <>
      <div className="bgcolor">
    
        <Box/>
        <Box sx={{ display: "flex" }}>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <div className="orders-calendar-view" style={{display:"flex"}}>
              <Calendar onChange={onChange} value={date} tileContent={TileContent} />
              <div  className="orders-list-container" style={{ height: "500px", overflowY: "auto" }}>
                <h3>Orders for {date.toDateString()}</h3>
                <MUIDataTable  title={"Orders"} data={data} columns={columns} options={options} />
              </div>
            </div>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default OrdCalendar;

