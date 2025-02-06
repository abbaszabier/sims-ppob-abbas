import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ToastContainer } from "react-toastify";
import InstallPrompt from "./components/install-prompt";

function App() {
  if (!localStorage.getItem("installed")) {
    localStorage.setItem("installed", "false");
  }

  return (
    <>
      <InstallPrompt />
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </>
  );
}

export default App;
