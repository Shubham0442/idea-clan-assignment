import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminDashboard, AllCourses, Home, Login, Register } from "../Pages";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { AdminProtectedRoute, PrivateRoute } from "../HOC";

const AllRoutes = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Box mt="80px">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path={"/"}
          element={
            user?.role === "admin" ? (
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            ) : (
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            )
          }
        />
        <Route path="/courses" element={<AllCourses />} />
      </Routes>
    </Box>
  );
};

export default AllRoutes;
