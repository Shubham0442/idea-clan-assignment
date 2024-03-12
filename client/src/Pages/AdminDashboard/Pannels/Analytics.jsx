import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContent, getAllCourses } from "../../../State/Actions";
import CourseChart from "./Charts/CourseChart";
import ContentChart from "./Charts/ContentChart";

const Analytics = () => {
  const { courses, filters } = useSelector((state) => state.courses);
  const { allContent } = useSelector((state) => state.content);
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCourses(token, { ...filters }));
    dispatch(getAllContent(token));
  }, []);

  return (
    <Box w="90%" m="auto" overflowX="hidden" overflowY="auto">
      <Flex w="100%" flexWrap="wrap">
        <Box w={{ base: "90%", sm: "90%", md: "65%", lg: "45%" }} h="auto">
          <Text color="#545454" fontWeight="550" fontSize="14px" mb="20px">
            Courses
          </Text>
          <CourseChart courses={courses} />
        </Box>
        <Box w={{ base: "90%", sm: "90%", md: "65%", lg: "45%" }} h="auto">
          <Text color="#545454" fontWeight="550" fontSize="14px" mb="20px">
            Content
          </Text>
          <ContentChart contents={allContent} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Analytics;
