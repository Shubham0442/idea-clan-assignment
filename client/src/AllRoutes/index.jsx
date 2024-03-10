import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AdminDashboard,
  AllCourses,
  Login,
  Register,
  SingleCourse,
  StudentDashboard
} from "../Pages";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { AdminProtectedRoute, PrivateRoute } from "../HOC";

const AllRoutes = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Box w="100%" mt="70px" bg="#f3f3f3" h="660px" position="fixed">
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
                <StudentDashboard />
              </PrivateRoute>
            )
          }
        />
        <Route
          path="/courses"
          element={
            <PrivateRoute>
              <AllCourses />
            </PrivateRoute>
          }
        />
        <Route
          path="/courses/:_id"
          element={
            <PrivateRoute>
              <SingleCourse />
            </PrivateRoute>
          }
        />
      </Routes>
    </Box>
  );
};

export default AllRoutes;
