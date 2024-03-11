import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addMyCourse, getAllCourses, getMyCourses } from "../../State/Actions";
import { CourseIcon } from "../../Components";

const SingleCourse = () => {
  const { _id } = useParams();
  const [currentCourse, setCurrentCourse] = useState({});
  const dispatch = useDispatch();
  const { courses, filters } = useSelector((state) => state.courses);
  const { myCourses } = useSelector((state) => state.myCourses);
  const { token, user } = useSelector((state) => state.auth);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (_id) {
      const reqCourse =
        courses?.length !== 0 && courses?.find((el) => el._id === _id);
      setCurrentCourse(reqCourse);
    }
  }, [_id, courses?.length, myCourses?.length]);

  useEffect(() => {
    dispatch(getAllCourses(token, { ...filters }));
  }, []);

  useEffect(() => {
    dispatch(getMyCourses(token, user?.id));
  }, []);

  const handleSelect = () => {
    if (myCourses?.length < 3) {
      dispatch(
        addMyCourse(token, {
          course_name: currentCourse?.course_name,
          category: currentCourse?.category,
          type: currentCourse?.type,
          duration: currentCourse?.duration,
          description: currentCourse?.description,
          created_at: currentCourse?.created_at,
          prerequisites: currentCourse?.prerequisites,
          userId: user?.id
        })
      ).then((res) => {
        if (res?.type === "ADD_MY_COURSE_SUCCESS") {
          dispatch(getMyCourses(token, user?.id));
          toast({
            status: "success",
            title: "Selected New Course!",
            duration: 1500,
            isClosable: true,
            position: "top-right"
          });
          navigate("/");
        } else {
          toast({
            status: "error",
            title: res?.payload?.message,
            description: "Please select new course",
            duration: 1500,
            isClosable: true,
            position: "top-right"
          });
        }
      });
    } else {
      toast({
        status: "warning",
        title: "Can Not Select more than 3 Courses",
        duration: 1500,
        isClosable: true,
        position: "top-right"
      });
    }
  };

  // console.log(myCourses);

  return (
    <Box
      w={{ base: "90%", sm: "90%", md: "60%", lg: "60%" }}
      m="auto"
      mt="10px"
      px="20px"
      py="10px"
      bg="#fff"
      fontSize="12px"
      fontWeight="500"
      textAlign="left"
    >
      <Flex alignItems="center" justifyContent="space-between" mb="10px">
        <Flex alignItems="center" gap="10px">
          <CourseIcon course_name={currentCourse?.course_name} />
          <Text fontSize="16px" fontWeight="600">
            {currentCourse?.course_name}
          </Text>
        </Flex>
        <Flex>
          <Text>{currentCourse?.created_at}</Text>
        </Flex>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="flex-start"
        gap="20px"
        flexWrap="wrap"
      >
        <Box
          h="25px"
          w="fit-content"
          px="10px"
          borderRadius="12.5"
          bg="yellow.100"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {currentCourse?.duration} Months
        </Box>
        <Box
          h="25px"
          w="fit-content"
          px="10px"
          borderRadius="12.5"
          bg="green.100"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {currentCourse?.category}
        </Box>
        <Box
          h="25px"
          w="fit-content"
          px="10px"
          borderRadius="12.5"
          bg="blue.100"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {currentCourse?.type}
        </Box>
      </Flex>
      <Box fontWeight="600" mt="10px">
        Prerequisites:
      </Box>
      <Box mb="10px">{currentCourse?.prerequisites}</Box>
      <Box my="10px">{currentCourse?.description}</Box>
      <Button
        h="30px"
        bg="green.400"
        color="#fff"
        _hover={{ color: "#000", bg: "#f3f3f3" }}
        onClick={handleSelect}
      >
        Select Course
      </Button>
    </Box>
  );
};

export default SingleCourse;
