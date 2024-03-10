import { Box, Button, Flex, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import {
  FaCode,
  FaReact,
  FaAngular,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaGem,
  FaJava,
  FaPlus,
  FaTrash
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { AddEditCourseDrawer } from "../../Components";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const CourseCard = ({
  course_name,
  created_at,
  duration,
  description,
  prerequisites,
  _id
}) => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  const CourseIcon = () => {
    const regex =
      /(JavaScript|React|Angular|Vue|Java|HTML|Python|CSS|Node\.js|Express|Django|Flask|Ruby on Rails)/gi;

    const match = regex?.exec(course_name);

    if (match) {
      const language = match[0].toLowerCase();

      switch (language) {
        case "javascript":
          return <IoLogoJavascript fontSize="30px" />;
        case "react":
          return <FaReact fontSize="30px" />;
        case "java":
          return <FaJava fontSize="30px" />;
        case "angular":
          return <FaAngular fontSize="30px" />;
        case "vue":
          return <FaVuejs fontSize="30px" />;
        case "html":
          return <FaHtml5 fontSize="30px" />;
        case "css":
          return <FaCss3Alt fontSize="30px" />;
        case "node.js":
        case "express":
          return <FaNodeJs fontSize="30px" />;
        case "django":
        case "flask":
          return <FaPython fontSize="30px" />;
        case "python":
          return <FaPython fontSize="30px" />;
        case "ruby on rails":
          return <FaGem fontSize="30px" />;
        default:
          return <FaCode fontSize="30px" />;
      }
    } else return <FaCode fontSize="30px" />;
  };

  return (
    <Box w={{base: "300px", sm: "300px", md: "280px", lg: "250px"}} h="250px" p="15px" bg="#fff" textAlign="left">
      <Flex
        alignItems="flex-start"
        justifyContent="space-between"
        gap="5px"
        fontSize="15px"
        fontWeight="650"
        color="#545454"
        mb="10px"
      >
        <CourseIcon />
        <Box
          bg="green.100"
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
      </Flex>
      <Box fontSize="15px" fontWeight="650">
        {course_name}
      </Box>
      <Box fontSize="12px" fontWeight="500" h="100px">
        <Text
          w="100%"
          h="40px"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="-moz-pre-wrap"
          color="#646464"
        >
          {description}
        </Text>
        <Text fontWeight="650">Prerequisites:</Text>
        <Text color="#646464">{prerequisites}</Text>
      </Box>
      {user?.role === "admin" && location.pathname !== "/courses" && (
        <Flex gap="10px">
          <Tooltip label="Add content and lectures">
            <Button
              w="25px"
              h="40px"
              borderRadius="50%"
              bg="green.200"
              color="#fff"
            >
              <FaPlus />
            </Button>
          </Tooltip>
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
            <Button
              w="25px"
              h="40px"
              borderRadius="50%"
              bg="red.200"
              color="red"
            >
              <FaTrash />
            </Button>
          </Tooltip>
        </Flex>
      )}
    </Box>
  );
};

export default CourseCard;
