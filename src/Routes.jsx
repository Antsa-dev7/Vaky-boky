import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import History from "./containers/history/History";
import Home from "./containers/home/Home";
import Library from "./containers/library/Library";
import Reading from "./containers/reading/Reading";
import Genres from "./containers/genres/Genres";
import Recommendations from "./containers/recommendation/Recommendations";
import Favorites from "./containers/favorites/Favorites";
import Add_book from "./containers/add_book/Add_book";
import Account from "./containers/account/Account";
import Settings from "./containers/settings/Settings";
import Help from "./containers/help/Help";
import Notifications from "./containers/notifications/Notifications";

const router = [
    {
        path: "",
        element: <Layout />,
        children: [
            {
                path:"/",
                element: <Home />
            },
            {
                path:"/history",
                element: <History />
            },
            {
                path:"/library",
                element: <Library />
            },
            {
                path:"/reading",
                element: <Reading />
            },
            {
                path:"/genres",
                element: <Genres />
            },
            {
                path:"/recommendations",
                element: <Recommendations />
            },
            {
                path:"/favorites",
                element: <Favorites />
            },
            {
                path:"/addBook",
                element: <Add_book />
            },
            {
                path:"/account",
                element: <Account />
            },
            {
                path:"/settings",
                element: <Settings />
            },
            {
                path:"/help",
                element: <Help />
            },
            {
                path:"/notifications",
                element: <Notifications />
            }
        ]
    }
];

const Router = () => {
    return <RouterProvider router={createBrowserRouter(router)} />
}

export default Router