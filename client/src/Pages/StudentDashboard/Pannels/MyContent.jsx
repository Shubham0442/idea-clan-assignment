import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContentCard, LoadingIndicator, NoData } from "../../../Components";
import { getMyCourses, getStudentContent } from "../../../State/Actions";

const MyContent = () => {
  const { isLoading, isError, studentContent } = useSelector(
    (state) => state.content
  );
  const { myCourses } = useSelector((state) => state.myCourses);
  const { token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const coursesSelected = useMemo(() => {
    const courses =
      myCourses?.length !== 0 && myCourses?.map((el) => el.course_name);
    return courses;
  }, [myCourses]);

  console.log(myCourses, coursesSelected);

  useEffect(() => {
    dispatch(getMyCourses(token, user?.id));
  }, []);

  useEffect(() => {
    dispatch(getStudentContent(token, coursesSelected));
  }, []);

  return (
    <Box
      w="100%"
      h="100%"
      overflowX="hidden"
      overflowY="auto"
      display="flex"
      flexDirection="column"
      p="20px"
      justifyContent={
        isLoading || studentContent?.length === 0 ? "center" : "flex-start"
      }
      alignItems={
        isLoading || studentContent?.length === 0 ? "center" : "flex-start"
      }
      gap="20px"
    >
      {isLoading && !isError && studentContent?.length === 0 && (
        <LoadingIndicator />
      )}
      {!isLoading && !isError && studentContent?.length === 0 && (
        <Flex
          alignItems="center"
          justifyContent="center"
          gap="5px"
          flexDirection="column"
        >
          <NoData title="No Content Available" />
        </Flex>
      )}
      {!isLoading && isError && studentContent?.length === 0 && (
        <Box>
          <Text>Oops! Something went wrong!</Text>
          <Text>Please try again</Text>
        </Box>
      )}
      {!isLoading &&
        !isError &&
        studentContent?.length !== 0 &&
        studentContent?.map((el) => <ContentCard {...el} key={el._id} />)}
    </Box>
  );
};

export default MyContent;
