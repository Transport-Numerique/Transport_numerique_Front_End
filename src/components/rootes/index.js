import { createBrowserRouter } from "react-router-dom";
import Acceuil from "../frontPage/Acceuil";
import ListCar from "../frontPage/ListCar";
import Detail from "../frontPage/Detail";

// const PagesLanding : Loadable(lazy(() :> import('views/pages/landing')));

// ::============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter([
  { path: "/", element: <Acceuil /> },
  { path: "/trajet", element: <ListCar /> },
  { path: "/trajet/detail/:id", element: <Detail /> },
]);

export default router;
