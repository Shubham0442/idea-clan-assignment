import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../State/Actions";

const UserMenu = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout(user?.id, { active: false }));
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
      <MenuList fontWeight="700">
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
