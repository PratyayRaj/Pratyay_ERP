import { tokens } from "../theme";

export const mockDataTeam = [
  {
    id: 1,
    name: "Arya Singh",
    email: "aryasingh@gmail.com",
    age: 35,
    phone: "+91 98765 43210",
    access: "admin",
  },
  {
    id: 2,
    name: "Raj Kapoor",
    email: "rajkapoor@gmail.com",
    age: 42,
    phone: "+91 87654 32109",
    access: "manager",
  },
  {
    id: 3,
    name: "Sonia Gupta",
    email: "soniagupta@gmail.com",
    age: 45,
    phone: "+91 76543 21098",
    access: "user",
  },
  {
    id: 4,
    name: "Priya Sharma",
    email: "priyasharma@gmail.com",
    age: 16,
    phone: "+91 98765 67890",
    access: "admin",
  },
  {
    id: 5,
    name: "Anita Verma",
    email: "anitaverma@gmail.com",
    age: 31,
    phone: "+91 87654 56789",
    access: "user",
  },
  {
    id: 6,
    name: "Rahul Patel",
    email: "rahulpatel@gmail.com",
    age: 50,
    phone: "+91 76543 45678",
    access: "manager",
  },
  {
    id: 7,
    name: "Sneha Kumar",
    email: "snehakumar@gmail.com",
    age: 44,
    phone: "+91 98765 43210",
    access: "user",
  },
  {
    id: 8,
    name: "Vivek Gupta",
    email: "vivekgupta@gmail.com",
    age: 36,
    phone: "+91 87654 32109",
    access: "user",
  },
  {
    id: 9,
    name: "Rajesh Khanna",
    email: "rajeshkhanna@gmail.com",
    age: 65,
    phone: "+91 76543 21098",
    access: "admin",
  },
];

export   const mockDataOrders = [
  { id: 1, buyerName: "Rahul Verma", address: "123 Main St, New Delhi, DL 110001", contact: "+91 555-1234", email: "rahul.verma@example.com", type: "Vegetables", quantity: 3, date: "2024-03-10", status: "Pending" },
{ id: 2, buyerName: "Aishwarya Singh", address: "456 Oak Ave, Mumbai, MH 400001", contact: "+91 555-5678", email: "aishwarya.singh@example.com", type: "Fast Food", quantity: 2, date: "2024-03-11", status: "Shipped" },
{ id: 3, buyerName: "Priya Gupta", address: "789 Pine Blvd, Pune, MH 411001", contact: "+91 555-9012", email: "priya.gupta@example.com", type: "Vegetables", quantity: 5, date: "2024-03-12", status: "Processing" },
{ id: 4, buyerName: "Arun Kumar", address: "101 Cedar Rd, Bangalore, KA 560001", contact: "+91 555-3456", email: "arun.kumar@example.com", type: "Fast Food", quantity: 1, date: "2024-03-10", status: "Delivered" },
{ id: 5, buyerName: "Anjali Devi", address: "202 Elm Ln, Chennai, TN 600001", contact: "+91 555-7890", email: "anjali.devi@example.com", type: "Vegetables", quantity: 4, date: "2024-03-11", status: "Pending" },
{ id: 6, buyerName: "Rajesh Mishra", address: "303 Birch Dr, Hyderabad, TS 500001", contact: "+91 555-2345", email: "rajesh.mishra@example.com", type: "Fast Food", quantity: 2, date: "2024-03-12", status: "Shipped" },
{ id: 7, buyerName: "Sneha Sharma", address: "404 Willow Ave, Kolkata, WB 700001", contact: "+91 555-6789", email: "sneha.sharma@example.com", type: "Vegetables", quantity: 3, date: "2024-03-10", status: "Processing" },
{ id: 8, buyerName: "Rahul Gupta", address: "505 Maple Rd, Ahmedabad, GJ 380001", contact: "+91 555-0123", email: "rahul.gupta@example.com", type: "Fast Food", quantity: 1, date: "2024-03-12", status: "Delivered" },
{ id: 9, buyerName: "Sakshi Verma", address: "606 Pine Blvd, Jaipur, RJ 302001", contact: "+91 555-4567", email: "sakshi.verma@example.com", type: "Vegetables", quantity: 6, date: "2024-03-11", status: "Pending" },
];


export const mockDataContacts = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "amitsharma@gmail.com",
    age: 35,
    phone: "+91 98765 43210",
    address: "0912 Ganpati Street, Mumbai, MH 400001",
    city: "Mumbai",
    zipCode: "400001",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Radha Kapoor",
    email: "radhakapoor@gmail.com",
    age: 42,
    phone: "+91 87654 32109",
    address: "1234 Krishna Street, New Delhi, DL 110001",
    city: "New Delhi",
    zipCode: "110001",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Suresh Gupta",
    email: "sureshgupta@gmail.com",
    age: 45,
    phone: "+91 76543 21098",
    address: "3333 Ganesh Nagar, Pune, MH 411001",
    city: "Pune",
    zipCode: "411001",
    registrarId: 4132513,
  },
  {
    id: 4,
    name: "Priya Sharma",
    email: "priyasharma@gmail.com",
    age: 16,
    phone: "+91 98765 67890",
    address: "1514 Lakshmi Street, Kolkata, WB 700001",
    city: "Kolkata",
    zipCode: "700001",
    registrarId: 123512,
  },
  {
    id: 5,
    name: "Ananya Verma",
    email: "ananyaverma@gmail.com",
    age: 31,
    phone: "+91 87654 56789",
    address: "11122 Saraswati Nagar, Chennai, TN 600001",
    city: "Chennai",
    zipCode: "600001",
    registrarId: 123512,
  },
  {
    id: 6,
    name: "Rahul Patel",
    email: "rahulpatel@gmail.com",
    age: 150,
    phone: "+91 76543 45678",
    address: "1234 Ganesh Vihar, Bangalore, KA 560001",
    city: "Bangalore",
    zipCode: "560001",
    registrarId: 123512,
  },
  {
    id: 7,
    name: "Sneha Kumar",
    email: "snehakumar@gmail.com",
    age: 44,
    phone: "+91 98765 43210",
    address: "22215 Lakshmi Nagar, Hyderabad, TS 500001",
    city: "Hyderabad",
    zipCode: "500001",
    registrarId: 123512,
  },
  {
    id: 8,
    name: "Vivek Gupta",
    email: "vivekgupta@gmail.com",
    age: 36,
    phone: "+91 87654 32109",
    address: "4123 Vishnu Street, Ahmedabad, GJ 380001",
    city: "Ahmedabad",
    zipCode: "380001",
    registrarId: 512315,
  },
  {
    id: 9,
    name: "Rajesh Khanna",
    email: "rajeshkhanna@gmail.com",
    age: 65,
    phone: "+91 76543 21098",
    address: "51234 Shiva Street, Jaipur, RJ 302001",
    city: "Jaipur",
    zipCode: "302001",
    registrarId: 928397,
  },
  {
    id: 10,
    name: "Anita Reddy",
    email: "anitareddy@gmail.com",
    age: 42,
    phone: "+91 87654 32109",
    address: "4123 Parvati Nagar, Pune, MH 411001",
    city: "Pune",
    zipCode: "411001",
    registrarId: 533215,
  },
  {
    id: 11,
    name: "Sandeep Agarwal",
    email: "sandeepagarwale@gmail.com",
    age: 11,
    phone: "+91 76543 21098",
    address: "51234 Durga Street, Kolkata, WB 700001",
    city: "Kolkata",
    zipCode: "700001",
    registrarId: 92197,
  },
];

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "Aarav Patel",
    date: "2024-03-10",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "Aarya Singh",
    date: "2024-03-11",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "Ishaan Sharma",
    date: "2024-03-09",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "Saanvi Gupta",
    date: "2024-03-08",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "Advik Kumar",
    date: "2024-03-10",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "Ananya Reddy",
    date: "2024-03-12",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "Reyansh Verma",
    date: "2024-03-11",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "Kriti Patel",
    date: "2024-03-09",
    cost: "133.45",
  },
];


export const mockBarData = [
  {
    country: "AD",
    "hot dog": 137,
    "hot dogColor": "hsl(229, 70%, 50%)",
    burger: 96,
    burgerColor: "hsl(296, 70%, 50%)",
    kebab: 72,
    kebabColor: "hsl(97, 70%, 50%)",
    donut: 140,
    donutColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 55,
    "hot dogColor": "hsl(307, 70%, 50%)",
    burger: 28,
    burgerColor: "hsl(111, 70%, 50%)",
    kebab: 58,
    kebabColor: "hsl(273, 70%, 50%)",
    donut: 29,
    donutColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 109,
    "hot dogColor": "hsl(72, 70%, 50%)",
    burger: 23,
    burgerColor: "hsl(96, 70%, 50%)",
    kebab: 34,
    kebabColor: "hsl(106, 70%, 50%)",
    donut: 152,
    donutColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 133,
    "hot dogColor": "hsl(257, 70%, 50%)",
    burger: 52,
    burgerColor: "hsl(326, 70%, 50%)",
    kebab: 43,
    kebabColor: "hsl(110, 70%, 50%)",
    donut: 83,
    donutColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 81,
    "hot dogColor": "hsl(190, 70%, 50%)",
    burger: 80,
    burgerColor: "hsl(325, 70%, 50%)",
    kebab: 112,
    kebabColor: "hsl(54, 70%, 50%)",
    donut: 35,
    donutColor: "hsl(285, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 66,
    "hot dogColor": "hsl(208, 70%, 50%)",
    burger: 111,
    burgerColor: "hsl(334, 70%, 50%)",
    kebab: 167,
    kebabColor: "hsl(182, 70%, 50%)",
    donut: 18,
    donutColor: "hsl(76, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 80,
    "hot dogColor": "hsl(87, 70%, 50%)",
    burger: 47,
    burgerColor: "hsl(141, 70%, 50%)",
    kebab: 158,
    kebabColor: "hsl(224, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(274, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "India",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "plane",
        y: 101,
      },
      {
        x: "helicopter",
        y: 75,
      },
      {
        x: "boat",
        y: 36,
      },
      {
        x: "train",
        y: 216,
      },
      {
        x: "subway",
        y: 35,
      },
      {
        x: "bus",
        y: 236,
      },
      {
        x: "car",
        y: 88,
      },
      {
        x: "moto",
        y: 232,
      },
      {
        x: "bicycle",
        y: 281,
      },
      {
        x: "horse",
        y: 1,
      },
      {
        x: "skateboard",
        y: 35,
      },
      {
        x: "others",
        y: 14,
      },
    ],
  },
  {
    id: "France",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "plane",
        y: 212,
      },
      {
        x: "helicopter",
        y: 190,
      },
      {
        x: "boat",
        y: 270,
      },
      {
        x: "train",
        y: 9,
      },
      {
        x: "subway",
        y: 75,
      },
      {
        x: "bus",
        y: 175,
      },
      {
        x: "car",
        y: 33,
      },
      {
        x: "moto",
        y: 189,
      },
      {
        x: "bicycle",
        y: 97,
      },
      {
        x: "horse",
        y: 87,
      },
      {
        x: "skateboard",
        y: 299,
      },
      {
        x: "others",
        y: 251,
      },
    ],
  },
  {
    id: "US",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "plane",
        y: 191,
      },
      {
        x: "helicopter",
        y: 136,
      },
      {
        x: "boat",
        y: 91,
      },
      {
        x: "train",
        y: 190,
      },
      {
        x: "subway",
        y: 211,
      },
      {
        x: "bus",
        y: 152,
      },
      {
        x: "car",
        y: 189,
      },
      {
        x: "moto",
        y: 152,
      },
      {
        x: "bicycle",
        y: 8,
      },
      {
        x: "horse",
        y: 197,
      },
      {
        x: "skateboard",
        y: 107,
      },
      {
        x: "others",
        y: 170,
      },
    ],
  },
];

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];
