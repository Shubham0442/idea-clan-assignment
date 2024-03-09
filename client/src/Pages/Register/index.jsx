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
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../State/Actions";

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    bio: "-",
    active: false,
    mobile: "",
    role: "student"
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(
      register({ ...registerForm, mobile: Number(registerForm?.mobile) })
    ).then((res) => {
      if (res?.type === "USER_REGISTER_SUCCESS") {
        toast({
          title: "Registration Successful!",
          duration: 1200,
          isClosable: true,
          position: "top-right",
          status: "success"
        });
        navigate("/")
      } else {
        toast({
          title: "Registration Fail!",
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
        my="10px"
      >
        Register
      </Text>
      <Box
        w={{ base: "80%", sm: "80%", md: "65%", lg: "35%" }}
        m="auto"
        fontSize={{ base: "14px", sm: "15px" }}
        bg="#fff"
        py="25px"
        px="40px"
        borderRadius="10px"
      >
        <form style={{ width: "100%", margin: "auto" }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row"
            }}
            gap={{ base: "0px", sm: "0px", md: "20px", lg: "20px" }}
          >
            <Box
              w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
              h={{ base: "30px", sm: "30px", md: "40px", lg: "40px" }}
              mb="50px"
            >
              <FormControl isRequired>
                <FormLabel fontSize={{ base: "14px", sm: "15px" }}>
                  Firstname
                </FormLabel>
                <Input
                  type="text"
                  name="firstname"
                  onChange={handleChange}
                  value={registerForm.firstname}
                />
              </FormControl>
            </Box>
            <Box
              w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
              h={{ base: "30px", sm: "30px", md: "40px", lg: "40px" }}
              mb="50px"
            >
              <FormControl isRequired>
                <FormLabel fontSize={{ base: "14px", sm: "15px" }}>
                  Lastname
                </FormLabel>
                <Input
                  type="text"
                  required
                  name="lastname"
                  onChange={handleChange}
                  value={registerForm.lastname}
                />
              </FormControl>
            </Box>
          </Box>
          <Box
            w="100%"
            h={{ base: "30px", sm: "30px", md: "40px", lg: "40px" }}
            mb="50px"
          >
            <FormControl isRequired>
              <FormLabel fontSize={{ base: "14px", sm: "15px" }}>
                Mobile Number
              </FormLabel>
              <Input
                type="number"
                required
                name="mobile"
                onChange={handleChange}
                value={registerForm.mobile}
              />
            </FormControl>
          </Box>
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
                value={registerForm.email}
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
                required
                name="password"
                onChange={handleChange}
                value={registerForm.password}
              />
            </FormControl>
          </Box>
          <Box
            w="100%"
            h={{ base: "30px", sm: "30px", md: "40px", lg: "40px" }}
          >
            <Button
              w="100%"
              colorScheme="blue"
              fontSize={{ base: "14px", sm: "16px" }}
              type="submit"
              onClick={handleRegister}
            >
              Register
            </Button>
          </Box>
        </form>
      </Box>
      <Text fontWeight="500" mt="10px">Already have an account?</Text>
      <Link to="/login">
        <Text
          fontWeight="semibold"
          fontSize={{ base: "16px", sm: "18px" }}
          color="#3182ce"
          mt="5px"
        >
          Login
        </Text>
      </Link>
    </Box>
  );
};

export default Register;
