import HomePage from "../views/homePage/HomePage";
import Profile from "../views/profile/Profile";
import Register from "../views/register/Register";

const GroupRouter: any = [
  { path: "register", element: <Register /> },
  { path: "home", element: <HomePage /> },
  { path: "profile", element: <Profile /> },
  { path: "team", element: <div></div> },
  { path: "team", element: <div></div> },
];

export default GroupRouter;
