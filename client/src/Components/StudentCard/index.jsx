import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudents, updateStudentRole } from "../../State/Actions";

const StudentCard = ({ _id, firstname, lastname, mobile, email, active }) => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleMakeAdmin = () => {
    dispatch(updateStudentRole(token, _id)).then((res) => {
      if (res?.type === "UPDATE_STUDENT_ROLE_SUCCESS") {
        dispatch(getAllStudents(token));
        toast({
          title: "Updated role as Admin!",
          status: "success",
          duration: 1500,
          isClosable: true,
          position: "top-right"
        });
      } else
        toast({
          title: "Fail to update role!",
          description: "Something went wrong! Please try again",
          status: "success",
          duration: 1500,
          isClosable: true,
          position: "top-right"
        });
    });
  };
  return (
    <Box
      textAlign="left"
      bg="#fff"
      w="240px"
      h="150px"
      p="20px"
      fontSize="14px"
      fontWeight="600"
      position="relative"
    >
      {active && (
        <Box
          position="absolute"
          bg="#5aa02c"
          h="12px"
          w="12px"
          borderRadius="50%"
          right="15px"
          top="15px"
        ></Box>
      )}
      <Flex fontWeight="650" gap="5px">
        <Text>{firstname}</Text>
        <Text>{lastname}</Text>
      </Flex>
      <Text>{email}</Text>
      <Text>{mobile}</Text>
      <Button size="xs" mt="10px" onClick={handleMakeAdmin}>
        Make Admin
      </Button>
    </Box>
  );
};

export default StudentCard;
