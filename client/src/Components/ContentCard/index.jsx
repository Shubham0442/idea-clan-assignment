import { Box, Flex, useToast } from "@chakra-ui/react";
import React from "react";
import CourseIcon from "../CourseIcon";
import AddEditContentModal from "../AddEditContentModal";
import Alert from "../Aleart";
import { useDispatch, useSelector } from "react-redux";
import { getAllContent, removeContent } from "../../State/Actions";

const ContentCard = ({
  _id,
  content_name,
  type,
  course_name,
  lecture_link,
  duration,
  reference_url,
  courseId,
  created_at,
  description
}) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleRemoveContent = (token, id) => {
    dispatch(removeContent(token, id)).then((res) => {
      if (res?.type === "REMOVE_CONTENT_SUCCESS") {
        dispatch(getAllContent(token));
        toast({
          status: "success",
          title: "Content Removed!",
          duration: 1500,
          isClosable: true,
          position: "top-right"
        });
      } else {
        toast({
          status: "error",
          title: "Failed to removed Content!",
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
      w="100%"
      h="auto"
      fontSize="12px"
      fontWeight="500"
      color="#646464"
      bg="#fff"
      p="15px"
      textAlign="left"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Flex
          alignItems="center"
          justifyContent="flex-start"
          gap="10px"
          mb="5px"
        >
          <CourseIcon course_name={content_name} />
          <Box fontSize="18px" fontWeight="600" color="#000">
            {content_name}
          </Box>
        </Flex>
        <Box>{created_at}</Box>
      </Flex>
      <Box>
        <Flex alignItems="center" justifyContent="space-between">
          <Box color="#000" fontSize="14px" mb="5px">
            {course_name}
          </Box>
          <Flex gap="10px">
            {type === "lecture" && (
              <Box
                display="flex"
                justifyContent="center"
                h="25px"
                bg="yellow.100"
                w="fit-content"
                px="10px"
                borderRadius="12.5px"
                alignItems="center"
              >
                {duration} minutes
              </Box>
            )}
            <Box
              display="flex"
              justifyContent="center"
              h="25px"
              bg="green.100"
              w="fit-content"
              px="10px"
              borderRadius="12.5px"
              alignItems="center"
            >
              {type}
            </Box>
          </Flex>
        </Flex>
        <Box textAlign="left" mb="5px">
          {description}
        </Box>
        <Box color="blue">
          <a
            href={type === "lecture" ? lecture_link : reference_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {type === "lecture" ? "Open Zoom link" : "Ref. document"}
          </a>
        </Box>
      </Box>
      {user?.role === "admin" && (
        <Flex alignItems="center" justifyContent="flex-end" gap="15px">
          <AddEditContentModal
            data={{
              _id,
              content_name,
              type,
              course_name,
              lecture_link,
              duration,
              reference_url,
              courseId,
              created_at,
              description
            }}
          />
          <Alert
            title={content_name}
            subtitle="Content"
            id={_id}
            handleClick={handleRemoveContent}
          />
        </Flex>
      )}
    </Box>
  );
};

export default ContentCard;
