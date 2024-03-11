import React, { useRef, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Textarea,
  FormLabel,
  InputGroup,
  Input,
  Button,
  Stack,
  Box,
  Select,
  useToast,
  Tooltip
} from "@chakra-ui/react";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, getAllCourses, updateCourse } from "../../State/Actions";

const AddEditCourseDrawer = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const toast = useToast();
  const [newCourse, setNewCourse] = useState(
    data || {
      course_name: "",
      description: "",
      duration: "",
      prerequisites: "",
      userId: user?.id,
      created_at: new Date().toDateString(),
      category: "",
      type: ""
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(newCourse);
    dispatch(addNewCourse(token, newCourse)).then((res) => {
      if (res?.type === "ADD_NEW_COURSE_SUCCESS") {
        dispatch(getAllCourses(token));
        toast({
          title: "Added New Course Successfully!",
          status: "success",
          duration: 1500,
          isClosable: true,
          position: "top-right"
        });
      } else {
        toast({
          title: "Fail to Add New Course",
          status: "error",
          duration: 1500,
          isClosable: true,
          position: "top-right"
        });
      }
      onClose();
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log(newCourse);
    dispatch(updateCourse(data?._id, token, newCourse)).then((res) => {
      if (res?.type === "UPDATE_COURSE_SUCCESS") {
        dispatch(getAllCourses(token));
        toast({
          title: "Updated Course Successfully!",
          status: "success",
          duration: 1500,
          isClosable: true,
          position: "top-right"
        });
      } else {
        toast({
          title: "Fail to Update Course",
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
      {data ? (
        <Tooltip label="Edit course">
          <Button size="xs" bg="blue.200" color="blue" onClick={onOpen}>
            <FaPencilAlt />
          </Button>
        </Tooltip>
      ) : (
        <Button
          leftIcon={<FaPlus />}
          colorScheme="teal"
          w="125px"
          h="30px"
          onClick={onOpen}
        >
          Add New
        </Button>
      )}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <form>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              {data ? "Edit Course" : "Create a new Course"}
            </DrawerHeader>
            <DrawerBody>
              <Stack spacing="24px">
                <Box fontSize="14px">
                  <FormLabel fontSize="14px">Course Name</FormLabel>
                  <Input
                    type="text"
                    name="course_name"
                    value={newCourse.course_name}
                    onChange={handleChange}
                    fontSize="14px"
                  />
                </Box>
                <Box>
                  <FormLabel fontSize="14px">Prerequisites</FormLabel>
                  <InputGroup>
                    <Input
                      fontSize="14px"
                      type="text"
                      name="prerequisites"
                      value={newCourse.prerequisites}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Box>
                <Box fontSize="14px">
                  <FormLabel>Select Duration</FormLabel>
                  <Select
                    name="duration"
                    value={newCourse.duration}
                    defaultValue="1"
                    onChange={handleChange}
                    fontSize="14px"
                  >
                    <option value="">Select Duration</option>
                    <option value="1">1 month</option>
                    <option value="2">2 months</option>
                    <option value="3">3 months</option>
                    <option value="6">6 months</option>
                    <option value="12">12 months</option>
                  </Select>
                </Box>
                <Box fontSize="14px">
                  <FormLabel fontSize="14px">Select Category</FormLabel>
                  <Select
                    name="category"
                    value={newCourse.category}
                    defaultValue="1"
                    onChange={handleChange}
                    fontSize="14px"
                  >
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Database">Database</option>
                  </Select>
                </Box>
                <Box>
                  <FormLabel fontSize="14px">Select Type</FormLabel>
                  <Select
                    name="type"
                    value={newCourse.type}
                    defaultValue="1"
                    onChange={handleChange}
                    fontSize="14px"
                  >
                    <option value="Language">Language</option>
                    <option value="Framework">Framework/Library</option>
                    <option value="Library">UI Library</option>
                    <option value="Other">Other</option>
                  </Select>
                </Box>
                <Box>
                  <FormLabel fontSize="14px" htmlFor="desc">
                    Description
                  </FormLabel>
                  <Textarea
                    fontSize="14px"
                    name="description"
                    value={newCourse.description}
                    onChange={handleChange}
                  />
                </Box>
              </Stack>
            </DrawerBody>
            <DrawerFooter borderTopWidth="1px" w="100%">
              <Button w="50%" variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                w="50%"
                colorScheme="blue"
                type="submit"
                onClick={data ? handleUpdate : handleSubmit}
              >
                {data ? "Update" : "Submit"}
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </form>
      </Drawer>
    </>
  );
};

export default AddEditCourseDrawer;
