import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingIndicator, NoData, StudentCard } from "../../../Components";

import { getAllStudents } from "../../../State/Actions";

const Students = () => {
  const { students, isLoading, isError } = useSelector(
    (state) => state.students
  );
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (students.length === 0) dispatch(getAllStudents(token));
  }, [students.length]);

  return (
    <Box w="100%" m="auto">
      <Box
        w="100%"
        h="600px"
        display="flex"
        alignContent={
          isLoading || isError || students.length === 0
            ? "center"
            : "flex-start"
        }
        justifyContent={
          isLoading || isError || students.length === 0
            ? "center"
            : "flex-start"
        }
        gap="20px"
        flexWrap="wrap"
        overflowX="hidden"
        overflowY="auto"
      >
        {isLoading && !isError && students.length === 0 && <LoadingIndicator />}
        {!isLoading && !isError && students.length === 0 && (
          <NoData title="Student Data Not Available" />
        )}
        {!isLoading && isError && students.length === 0 && (
          <Box>
            <Text>Oops! Something went wrong!</Text>
            <Text>Please try again</Text>
          </Box>
        )}
        {!isLoading &&
          !isError &&
          students.length !== 0 &&
          students.map((el) => <StudentCard {...el} key={el._id} />)}
      </Box>
    </Box>
  );
};

export default Students;
