import Footer from "./Footer";
import Pricing from "./Pricing";
import Skeleton from "./Skeleton";
import { createBrowserRouter } from "react-router-dom";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Skeleton />,
    children: [
      {
        path: "pricing",
        element: <Pricing />,
      },
      { path: "contact", element: <Footer /> },
    ],
  },
]);
const App = () => {
  return (
    <>
      <Skeleton />
    </>
  );
};

export default App;
