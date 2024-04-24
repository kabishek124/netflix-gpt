import "./App.css";
import Body from "./components/Body";
import Browse from "./components/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
