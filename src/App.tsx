import { RouterProvider } from "react-router";
import { router } from "./router";
import { MantineProvider } from "@mantine/core";
import { Toaster } from "react-hot-toast";

// src/App.jsx
function App() {
  return (
    <MantineProvider>
      <div className="w-full h-screen overflow-hidden">
        <RouterProvider router={router} />
      </div>
      <Toaster />
    </MantineProvider>
  );
}

export default App;
