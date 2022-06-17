import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import StoreComponent from "./pages/StoreComponent";
import Register from "./pages/admin/register/Register";
import SharedPage from "./pages/admin/dashboard/SharedPage";
import AddProduct from "./pages/admin/dashboard/AddMeal";
import DeleteProduct from "./pages/admin/dashboard/AllMeals";
import Profile from "./pages/admin/dashboard/Profile";
import NotFound from "./components/notFound/NotFound";
import ProtectionRoute from "./pages/admin/dashboard/ProtectionRoute";
import Orders from "./pages/admin/dashboard/Orders/Orders";
function App() {
  return (
    <Routes>
      <Route path="/" element={<StoreComponent />} />
      <Route path="/admin/register" element={<Register />} />
      <Route
        path="/admin"
        element={
          <ProtectionRoute>
            <SharedPage />
          </ProtectionRoute>
        }
      >
        <Route path="/admin/add-meal" element={<AddProduct />} />
        <Route path="/admin/all-meal" element={<DeleteProduct />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route index element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
