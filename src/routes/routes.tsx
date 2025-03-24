import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsPage } from "../pages";
import { SingleCardPage } from "../pages"

const router = createBrowserRouter([
    { 
        path: "/",
        element: <ProductsPage />
    },
    {
        path: "/products/:id",
        element: <SingleCardPage />
    }
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};