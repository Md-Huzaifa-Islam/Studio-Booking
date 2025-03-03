import { index, layout, route } from "@react-router/dev/routes";

export default [
  layout("./Layouts/RootLayout.jsx", [
    index("./routes/home.jsx"),
    route("mybookings", "./routes/MyBookings.jsx"),
    route("studios", "./routes/AllStudios.jsx"),
  ]),
];
