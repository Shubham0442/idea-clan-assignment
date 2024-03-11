import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
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
  useToast,
  Tooltip
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetails } from "../../State/Actions";

const EditUserDetailsDrawer = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState(data);
  const { token } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const dispatch = useDispatch();
  const toast = useToast();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUserDetails(token, user?.id, user)).then((res) => {
      if (res?.type === "UPDATE_USER_DETAILS_SUCCESS") {
        toast({
          title: "Updated your details successfully!",
          status: "success",
          duration: 1500,
          isClosable: true,
          position: "top-right"
        });
      } else {
        toast({
          title: "Fail to updated your details",
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
      <Button size="xs" bg="blue.200" color="blue" onClick={onOpen}>
        <FaPencilAlt />
        Edit Details
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <form>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              Edit Your Details
            </DrawerHeader>
            <DrawerBody>
              <Stack spacing="24px">
                <Box fontSize="14px">
                  <FormLabel fontSize="14px">First Name</FormLabel>
                  <Input
                    type="text"
                    name="firstname"
                    value={user.firstname}
                    onChange={handleChange}
                    fontSize="14px"
                  />
                </Box>
                <Box>
                  <FormLabel fontSize="14px">Last Name</FormLabel>
                  <InputGroup>
                    <Input
                      fontSize="14px"
                      type="text"
                      name="lastname"
                      value={user.lastname}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Box>
                <Box>
                  <FormLabel fontSize="14px">Email</FormLabel>
                  <InputGroup>
                    <Input
                      fontSize="14px"
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Box>
                <Box>
                  <FormLabel fontSize="14px">Mobile Number</FormLabel>
                  <InputGroup>
                    <Input
                      fontSize="14px"
                      type="number"
                      name="mobile"
                      value={user.mobile}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Box>
                <Box>
                  <FormLabel fontSize="14px" htmlFor="desc">
                    Bio
                  </FormLabel>
                  <Textarea
                    fontSize="14px"
                    name="bio"
                    value={user.bio}
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
                onClick={handleUpdate}
              >
                Update
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </form>
      </Drawer>
    </>
  );
};

export default EditUserDetailsDrawer;
