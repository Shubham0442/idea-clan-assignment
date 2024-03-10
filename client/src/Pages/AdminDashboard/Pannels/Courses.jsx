import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import {
  AddEditCourseDrawer,
  LoadingIndicator,
  NoData
} from "../../../Components";
import CourseCard from "./Cards/CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../../State/Actions";

const Courses = () => {
  const { isLoading, isError, courses } = useSelector((state) => state.courses);
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCourses(token));
  }, []);
  console.log(courses);

  return (
    <Box w="100%" m="auto">
      {!isLoading && !isError && courses?.length !== 0 && (
        <Box mb="10px">
          <AddEditCourseDrawer />
        </Box>
      )}
      <Box
        w="100%"
        h="590px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="20px"
        flexWrap="wrap"
        overflowX="hidden"
        overflowY="auto"
      >
        {isLoading && !isError && courses?.length === 0 && <LoadingIndicator />}
        {!isLoading && !isError && courses?.length === 0 && (
          <Flex
            alignItems="center"
            justifyContent="center"
            gap="5px"
            flexDirection="column"
          >
            <NoData title="No Courses Available" />
            <AddEditCourseDrawer />
          </Flex>
        )}
        {!isLoading && isError && courses?.length === 0 && (
          <Box>
            <Text>Oops! Something went wrong!</Text>
            <Text>Please try again</Text>
          </Box>
        )}
        {!isLoading &&
          !isError &&
          courses?.length !== 0 &&
          courses?.map((el) => <CourseCard {...el} key={el._id} />)}
      </Box>
    </Box>
  );
};

export default Courses;
