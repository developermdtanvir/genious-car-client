import { Main } from "../../layout/Main";
import { Checkout } from "../../pages/Checkout/Checkout";
import { Home } from "../../pages/Home/Home/Home";
import { Order } from "../../pages/Home/Order/Order";
import { ProductDetails } from "../../pages/Home/Product/ProductDetails";
import { Login } from "../../pages/Login/Login";
import { Signup } from "../../pages/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/service/:id',
                element: <ProductDetails />
            },
            {
                path: '/checkout/:id',
                element: <Checkout />,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: '/order',
                element: <Order />
            }
        ]
    },
]);

export default router;