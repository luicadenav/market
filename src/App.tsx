import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router";
import { NotificationProvider } from "./context/notification.context";
import { Suspense } from "react";

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <Suspense fallback={"cargando..."}>
          <AppRouter />
        </Suspense>
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
