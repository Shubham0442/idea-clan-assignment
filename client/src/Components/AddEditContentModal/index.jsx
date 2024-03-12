import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
  Tooltip,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewContent,
  getAllContent,
  updateContent
} from "../../State/Actions";

const AddEditContentModal = ({ course_name, courseId, data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const toast = useToast();
  const [content, setContent] = useState(
    data || {
      content_name: "",
      type: "",
      course_name: course_name,
      lecture_link: "",
      reference_url: "",
      courseId: courseId,
      created_at: new Date(),
      description: "",
      duration: 30
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContent({ ...content, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(content);

    dispatch(addNewContent(token, content)).then((res) => {
      if (res?.type === "ADD_NEW_CONTENT_SUCCESS") {
        dispatch(getAllContent(token));
        toast({
          title: "Added New Content Successfully!",
          status: "success",
          duration: 1500,
          isClosable: true,
          position: "top-right"
        });
      } else {
        toast({
          title: "Fail to Add New Content",
          status: "error",
          duration: 1500,
          isClosable: true,
          position: "top-right"
        });
      }
      onClose();
    });
  };

  const handleUpdateContent = (e) => {
    e.preventDefault();
    dispatch(updateContent(token, data?._id, content)).then((res) => {
      if (res?.type === "UPDATE_CONTENT_SUCCESS") {
        dispatch(getAllContent(token));
        toast({
          title: "Updated Content Successfully!",
          status: "success",
          duration: 1500,
          isClosable: true,
          position: "top-right"
        });
      } else {
        toast({
          title: "Fail to update Content",
          status: "error",
          duration: 1500,
          isClosable: true,
          position: "top-right"
        });
      }
      onClose();
    });
  };

  return (
    <>
      <Tooltip label={data ? "Update Course Content" : "Add course content"}>
        <Button size="xs" bg="green.200" color="#fff" onClick={onOpen}>
          {user?.role === "admin" && data ? <FaPencilAlt /> : <FaPlus />}
        </Button>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form>
          <ModalContent>
            <ModalHeader>{data ? "Edit Content" : "Add Content"}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box mb="10px">
                <FormControl fontSize="12px">
                  <FormLabel>Content Name</FormLabel>
                  <Input
                    type="text"
                    name="content_name"
                    onChange={handleChange}
                    value={content.content_name}
                    h="35px"
                  />
                </FormControl>
              </Box>
              <Box mb="10px">
                <FormControl fontSize="12px">
                  <FormLabel>Content Type</FormLabel>
                  <Select
                    type="text"
                    name="type"
                    onChange={handleChange}
                    value={content?.type}
                    h="35px"
                  >
                    <option value="">Select content type</option>
                    <option value="lecture">Lecture</option>
                    <option value="notes">Notes</option>
                  </Select>
                </FormControl>
              </Box>
              <Box mb="10px">
                <FormControl fontSize="12px">
                  <FormLabel>
                    {content.type === "lecture"
                      ? "Lecture Link"
                      : "Reference URL"}
                  </FormLabel>
                  <Input
                    type="text"
                    name={
                      content.type === "lecture"
                        ? "lecture_link"
                        : "reference_url"
                    }
                    onChange={handleChange}
                    value={
                      content.type === "lecture"
                        ? content.lecture_link
                        : content.reference_url
                    }
                    h="35px"
                  />
                </FormControl>
              </Box>
              {content.type === "lecture" && (
                <Box mb="10px">
                  <FormControl fontSize="12px">
                    <FormLabel>Duration in minutes</FormLabel>
                    <Input
                      type="number"
                      name="duration"
                      onChange={handleChange}
                      value={content.duration}
                      h="35px"
                    />
                  </FormControl>
                </Box>
              )}
              <Box mb="10px">
                <FormControl fontSize="12px">
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    type="text"
                    name="description"
                    onChange={handleChange}
                    value={content.description}
                    h="35px"
                  />
                </FormControl>
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button mr={3} onClick={onClose} variant="outline">
                Close
              </Button>
              <Button
                colorScheme="blue"
                type="submit"
                onClick={
                  data && user?.role === "admin"
                    ? handleUpdateContent
                    : handleSubmit
                }
              >
                {data ? "Update" : "Submit"}
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default AddEditContentModal;
