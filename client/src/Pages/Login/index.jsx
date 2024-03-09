import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "../../State/Actions";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location?.state?.from?.pathname || "/";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(loginForm)).then((res) => {
      if (res?.type === "USER_LOGIN_SUCCESS") {
        toast({
          title: "Login Successful!",
          duration: 1200,
          isClosable: true,
          position: "top-right",
          status: "success"
        });
        navigate(pathname);
      } else {
        toast({
          title: "Login Fail!",
          description: "Please check your cridentials",
          duration: 1200,
          isClosable: true,
          position: "top-right",
          status: "error"
        });
      }
    });
  };

  return (
    <Box w="100%" m="auto">
      <Text
        w="100%"
        textAlign="center"
        fontWeight="bold"
        fontSize={{ base: "20px", sm: "25px", md: "25px" }}
        mb="30px"
      >
        Login
      </Text>
      <Box
        w={{ base: "80%", sm: "90%", md: "50%", lg: "25%" }}
        m="auto"
        bg="#fff"
        p="40px"
        borderRadius="10px"
        fontSize={{ base: "14px", sm: "15px" }}
      >
        <form style={{ width: "100%", margin: "auto" }}>
          <Box
            w="100%"
            h={{ base: "30px", sm: "30px", md: "40px", lg: "40px" }}
            mb="50px"
          >
            <FormControl isRequired>
              <FormLabel fontSize={{ base: "14px", sm: "16px" }}>
                Email
              </FormLabel>
              <Input
                type="email"
                name="email"
                value={loginForm?.email}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
          <Box
            w="100%"
            h={{ base: "30px", sm: "30px", md: "40px", lg: "40px" }}
            mb="60px"
          >
            <FormControl isRequired>
              <FormLabel fontSize={{ base: "14px", sm: "15px" }}>
                Password
              </FormLabel>
              <Input
                type="password"
                name="password"
                value={loginForm?.password}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
          <Box
            w="100%"
            h={{ base: "30px", sm: "30px", md: "40px", lg: "40px" }}
          >
            <Button
              w="100%"
              type="submit"
              colorScheme="blue"
              fontSize={{ base: "14px", sm: "16px" }}
              onClick={handleLogin}
              isLoading={isLoading}
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
      <Text fontWeight="500" mt="10px">New to Edu-Hub?</Text>
      <Link to="/register">
        <Text
          fontWeight="semibold"
          fontSize={{ base: "16px", sm: "18px" }}
          color="#3182ce"
          mt="5px"
        >
          Register
        </Text>
      </Link>
    </Box>
  );
};

export default Login;
