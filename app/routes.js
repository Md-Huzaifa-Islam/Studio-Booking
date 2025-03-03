import { index, layout, route } from "@react-router/dev/routes";

export default [
  layout("./Layouts/RootLayout.jsx", [
    index("./routes/home.jsx"),
    route("studio/:id", "./components/StudioPage.jsx"),
  ]),
];
