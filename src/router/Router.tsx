import { NotFound } from "components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddReminder, EditReminder, Home } from "screens";
import { ROUTES } from "./routes";
import { RouterValidator } from "providers";

const Router = () => (
  <BrowserRouter basename="/">
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route
        path={ROUTES.LIST}
        element={
          <RouterValidator>
            <Home />
          </RouterValidator>
        }
      />
      <Route
        path={ROUTES.ADD}
        element={
          <RouterValidator>
            <AddReminder />
          </RouterValidator>
        }
      />
      <Route
        path={ROUTES.EDIT}
        element={
          <RouterValidator>
            <EditReminder />
          </RouterValidator>
        }
      />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export { Router };
