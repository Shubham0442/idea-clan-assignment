import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { EditUserDetailsDrawer } from "../../../Components";

const MyAccount = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Box
      w={{ base: "95%", sm: "90%", md: "75%", lg: "60%" }}
      m="auto"
      mt="10px"
      bg="#fff"
      p="20px"
      fontSize="14px"
      fontWeight="500"
      color="#646464"
    >
      <Text fontWeight="600" color="#000">
        My Account
      </Text>
      <Flex gap="10px" w="100%" mb="15px">
        <Text>{user?.firstname}</Text>
        <Text>{user?.lastname}</Text>
      </Flex>
      <Flex gap="50px" w="100%" mb="15px" justifyContent="space-between">
        <Text>Email</Text>
        <Text>{user?.email}</Text>
      </Flex>
      <Flex gap="50px" w="100%" mb="15px" justifyContent="space-between">
        <Text>Mobile Number</Text>
        <Text>{user?.mobile}</Text>
      </Flex>
      <Flex gap="50px" w="100%" mb="15px" justifyContent="flex-start">
        <Text>Bio</Text>
        <Text>{user?.bio}</Text>
      </Flex>
      <Box>
        <EditUserDetailsDrawer data={user} />
      </Box>
    </Box>
  );
};

export default MyAccount;
