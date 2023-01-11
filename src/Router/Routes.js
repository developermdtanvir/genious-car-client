import { Main } from "../layout/Main";
import { Home } from "../pages/Home/Home/Home";
import { ProductDetails } from "../pages/Home/Product/ProductDetails";
import { Login } from "../pages/Login/Login";
import { Signup } from "../pages/Signup/Signup";

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
            }
        ]
    },
]);

export default router;