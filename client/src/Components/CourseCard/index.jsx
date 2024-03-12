import { Box, Button, Flex, Text, Tooltip, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import {
  AddEditContentModal,
  AddEditCourseDrawer,
  Alert,
  CourseIcon
} from "../../Components";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getAllCourses,
  getMyCourses,
  removeCourse,
  removeMyCourse
} from "../../State/Actions";

const CourseCard = ({
  course_name,
  created_at,
  duration,
  description,
  prerequisites,
  _id
}) => {
  const { user, token } = useSelector((state) => state.auth);
  const location = useLocation();
  const dispatch = useDispatch();
  const [hoverd, setHovered] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleRemove = (id) => {
    dispatch(removeMyCourse(token, id)).then((res) => {
      if (res?.type === "REMOVE_MY_COURSE_SUCCESS") {
        dispatch(getMyCourses(token, user?.id));
        toast({
          status: "success",
          title: "Course Removed!",
          duration: 1500,
          isClosable: true,
          position: "top-right"
        });
      } else {
        toast({
          status: "error",
          title: "Failed to removed Course!",
          description: "Something went wrong!, Please try again.",
          duration: 1500,
          isClosable: true,
          position: "top-right"
        });
      }
    });
  };

  const handleRemoveCourse = (token, id) => {
    dispatch(removeCourse(token, id)).then((res) => {
      if (res?.type === "REMOVE_COURSE_SUCCESS") {
        dispatch(getAllCourses(token));
        toast({
          status: "success",
          title: "Course Removed!",
          duration: 1500,
          isClosable: true,
          position: "top-right"
        });
      } else {
        toast({
          status: "error",
          title: "Failed to removed Course!",
          description: "Something went wrong!, Please try again.",
          duration: 1500,
          isClosable: true,
          position: "top-right"
        });
      }
    });
  };

  return (
    <Box
      w={{ base: "300px", sm: "300px", md: "280px", lg: "250px" }}
      h={location.pathname === "/courses" ? "225px" : "250px"}
      p="15px"
      bg="#fff"
      textAlign="left"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      position="relative"
    >
      <Flex
        alignItems="flex-start"
        justifyContent="space-between"
        gap="5px"
        fontSize="15px"
        fontWeight="650"
        color="#545454"
        mb="10px"
      >
        <CourseIcon course_name={course_name} />
        {location.pathname !== "/courses" && (
          <Box
            bg="yellow.100"
            mb="10px"
            w="86px"
            h="25px"
            fontSize="12px"
            borderRadius="12.5px"
            textAlign="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {duration} Months
          </Box>
        )}
      </Flex>
      <Box fontSize="15px" fontWeight="650">
        {course_name}
      </Box>
      <Box fontSize="12px" fontWeight="500" h="60px">
        <Text fontWeight="650">Prerequisites:</Text>
        <Text color="#646464">{prerequisites}</Text>
      </Box>
      {user?.role === "admin" && location.pathname !== "/courses" && (
        <Flex gap="10px">
          <AddEditContentModal courseId={_id} course_name={course_name} />
          <Tooltip label="Edit course">
            <AddEditCourseDrawer
              data={{
                course_name,
                created_at,
                description,
                duration,
                prerequisites,
                _id
              }}
            />
          </Tooltip>
          <Tooltip label="Remove course">
            <Alert
              title={course_name}
              subtitle="Course"
              id={_id}
              handleClick={handleRemoveCourse}
            />
          </Tooltip>
        </Flex>
      )}
      {location?.pathname === "/courses" && (
        <Box
          bg="yellow.100"
          mb="10px"
          w="86px"
          h="25px"
          fontSize="12px"
          borderRadius="12.5px"
          textAlign="center"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {duration} Months
        </Box>
      )}
      {location.pathname === "/courses" && hoverd && (
        <Box
          borderTopRadius="10px"
          mb="10px"
          w="100%"
          h="50px"
          borderRadius="12.5px"
          textAlign="center"
          display="flex"
          alignItems="center"
          fontWeight="500"
          justifyContent="center"
          position="absolute"
          zIndex={2}
          bottom="0"
          left="0"
          right="0"
          gap="10px"
        >
          <Button
            h="30px"
            fontSize="12px"
            variant="outline"
            onClick={() => navigate(`/courses/${_id}`)}
          >
            See Details
          </Button>
        </Box>
      )}
      {user.role === "student" && location.pathname !== "/courses" && (
        <Flex alignItems="center" justifyContent="center" h="50px">
          <Button h="30px" fontSize="12px" onClick={() => handleRemove(_id)}>
            Remove Course
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default CourseCard;
