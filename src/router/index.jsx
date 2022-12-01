import {createBrowserRouter} from "react-router-dom";
import AdminUser from "../pages/AdminUser";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/admin/users",
      element: <AdminUser/>,
    },
  ]);

  export default router;