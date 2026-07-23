import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { router } from "./router/router";
import { fetchCurrentUser } from "./features/auth/authThunks";
import CustomToaster from "./components/common/CustomToaster";

const App = () =>{
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
      <CustomToaster />
    </>
  );
}

export default App;
