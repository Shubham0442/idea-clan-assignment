import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useToast
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../State/Actions";

const UserMenu = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleLogout = () => {
    dispatch(logout(user?.id, { active: false })).then((res) => {
      if (res?.type === "USER_LOGOUT_SUCCESS")
        toast({
          status: "success",
          title: "Logout Successfully!",
          duration: 1500,
          position: "top-right",
          isClosable: true
        });
      else
        toast({
          status: "error",
          title: "Fail to Logout!",
          duration: 1500,
          position: "top-right",
          isClosable: true
        });
    });
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="40px"
        h="40px"
        p="0"
        borderRadius="50%"
        bg="#aa0087"
        color="#fff"
        fontWeight="600"
        _hover={{
          bg: "#5aa02c"
        }}
      >
        <Text textAlign="center">{user?.firstname[0] + user?.lastname[0]}</Text>
      </MenuButton>
      <MenuList fontWeight="700" border="1px solid #bdb3b6">
        <MenuItem>My Account</MenuItem>
        <MenuItem>My Account Settings</MenuItem>
        <MenuItem fontWeight="600" onClick={handleLogout}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
