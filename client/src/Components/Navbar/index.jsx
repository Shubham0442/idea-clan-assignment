import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import UserMenu from "../UserMenu";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isAuth, token, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  const studentRoutes = [
    { id: 1, name: "My Dashboard", to: "/" },
    { id: 2, name: "Courses", to: "/courses" }
  ];

  const adminRoutes = [
    { id: 1, name: "My Dashboard", to: "/" },
    { id: 2, name: "Courses", to: "/courses" }
  ];

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      pl={{ base: "10px", sm: "10px", md: "20px", lg: "50px" }}
      pr={{ base: "10px", sm: "10px", md: "20px", lg: "50px" }}
      position="fixed"
      top="0"
      left="0"
      right="0"
      h="70px"
      bg="#fff"
      zIndex={10}
    >
      <Box w="10%">
        <Box
          w="65px"
          h="60px"
          _hover={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <Image src="/Edu-Hub.png" h="100%" w="100%" objectFit="contain" />
        </Box>
      </Box>
      {isAuth && token && (
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          gap="20px"
          w="70%"
          fontWeight="600"
        >
          {user?.role === "admin"
            ? adminRoutes?.map((el) => (
                <Box
                  key={el?.id}
                  onClick={() => navigate(el?.to)}
                  style={
                    location.pathname === el?.to
                      ? { color: "#3182ce", borderBottom: "2px solid #3182ce" }
                      : {}
                  }
                  _hover={{ cursor: "pointer" }}
                >
                  {el?.name}
                </Box>
              ))
            : studentRoutes?.map((el) => (
                <Box
                  _hover={{ cursor: "pointer" }}
                  key={el?.id}
                  onClick={() => navigate(el?.to)}
                  style={
                    location.pathname === el?.to
                      ? { color: "#3182ce", borderBottom: "2px solid #3182ce" }
                      : {}
                  }
                >
                  {el?.name}
                </Box>
              ))}
        </Box>
      )}
      <Box w="20%" display="flex" alignItems="center" justifyContent="flex-end">
        {isAuth && token ? (
          <UserMenu />
        ) : (
          <Button colorScheme="blue" onClick={() => navigate("/login")}>
            Login
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
