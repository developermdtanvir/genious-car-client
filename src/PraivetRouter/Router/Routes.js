import { Main } from "../../layout/Main";
import { Checkout } from "../../pages/Checkout/Checkout";
import { Home } from "../../pages/Home/Home/Home";
import { Order } from "../../pages/Home/Order/Order";
import { ProductDetails } from "../../pages/Home/Product/ProductDetails";
import { Login } from "../../pages/Login/Login";
import { LogOut } from "../../pages/LogOut/LogOut";
import { Signup } from "../../pages/Signup/Signup";
import { PrivateRouter } from "../PrivateRouter";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/service/:id",
        element: <ProductDetails />,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRouter>
            <Checkout />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://genious-car-server-topaz.vercel.app/service/${params.id}`
          ),
      },
      {
        path: "/order",
        element: (
          <PrivateRouter>
            <Order />
          </PrivateRouter>
        ),
      },
      {
        path: "/logout",
        element: <LogOut />,
      },
    ],
  },
]);

export default router;
