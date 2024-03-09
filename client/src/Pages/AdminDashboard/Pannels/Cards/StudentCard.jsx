import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const StudentCard = ({ _id, firstname, lastname, mobile, email, active }) => {
  return (
    <Box
      textAlign="left"
      bg="#fff"
      w="300px"
      h="300px"
      p="20px"
      fontSize="14px"
      fontWeight="600"
    >
      <Flex fontWeight="650" gap="5px">
        <Text>{firstname}</Text>
        <Text>{lastname}</Text>
      </Flex>
      <Text>{email}</Text>
      <Text>{mobile}</Text>
    </Box>
  );
};

export default StudentCard;
