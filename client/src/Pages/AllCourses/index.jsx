import { Box, Checkbox, Flex, FormLabel, Text } from "@chakra-ui/react";
import React from "react";

const AllCourses = () => {
  return (
    <Box
      w="90%"
      m="auto"
      h="100%"
      mt="20px"
      display="flex"
      justifyContent="center"
    >
      <Box w="20%" h="100%" bg="#fff" textAlign="left" pl="20px" pt="15px">
        <Box fontWeight="500" fontSize="14px" color="#545454">
          <Text fontWeight="650" mb="10px" color="black">Filter By Category</Text>
          <Box mb="10px">
            <Checkbox size="md">Frontend</Checkbox>
          </Box>
          <Box mb="10px">
            <Checkbox size="md">Backend</Checkbox>
          </Box>
        </Box>
        <Box mt="20px" fontWeight="500" fontSize="14px" color="#545454">
          <Text mb="10px" color="black" fontWeight="650">Filter By Type</Text>
          <Box mb="10px">
            <Checkbox size="md">Language</Checkbox>
          </Box>
          <Box mb="10px">
            <Checkbox size="md">Framework/Library</Checkbox>
          </Box>
          <Box mb="10px">
            <Checkbox size="md">Other</Checkbox>
          </Box>
        </Box>
      </Box>
      <Box
        w="80%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="15px"
      ></Box>
    </Box>
  );
};

export default AllCourses;
