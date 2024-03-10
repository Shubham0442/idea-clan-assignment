import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyCourses } from "../../../State/Actions";
import { CourseCard, LoadingIndicator, NoData } from "../../../Components";

const MyCourses = () => {
  const { isLoading, isError, myCourses } = useSelector(
    (state) => state.myCourses
  );
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyCourses(token, user?.id));
  }, []);

  return (
    <Box
      w={{ base: "50%", sm: "70%", md: "80%", lg: "80%" }}
      h="610px"
      display="flex"
      alignItems={
        isLoading || myCourses?.length === 0 ? "center" : "flex-start"
      }
      justifyContent={
        isLoading || myCourses?.length === 0 ? "center" : "flex-start"
      }
      gap="15px"
    >
      <Box
        w="100%"
        display="flex"
        justifyContent={
          isLoading || myCourses?.length === 0 ? "center" : "flex-start"
        }
        gap="20px"
        flexWrap="wrap"
        overflowX="hidden"
        overflowY="auto"
      >
        {isLoading && !isError && myCourses?.length === 0 && (
          <Box>
            <LoadingIndicator />
          </Box>
        )}
        {!isLoading && !isError && myCourses?.length === 0 && (
          <Flex
            alignItems="center"
            justifyContent="center"
            gap="5px"
            flexDirection="column"
          >
            <NoData title="No Courses Available" />
          </Flex>
        )}
        {!isLoading && isError && myCourses?.length === 0 && (
          <Box fontWeight="550">
            <Text>Oops! Something went wrong!</Text>
            <Text>Please try again</Text>
          </Box>
        )}
        {!isLoading &&
          !isError &&
          myCourses?.length !== 0 &&
          myCourses?.map((el) => <CourseCard {...el} key={el._id} />)}
      </Box>
    </Box>
  );
};

export default MyCourses;
