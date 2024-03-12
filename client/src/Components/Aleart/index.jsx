import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  Tooltip
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";

const Alert = ({ title, subtitle, handleClick, id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { token } = useSelector((state) => state.auth);
  const cancelRef = React.useRef();

  return (
    <>
      <Tooltip
        label={
          subtitle === "Course"
            ? "Remove Course"
            : subtitle === "Content"
            ? "Remove Content"
            : null
        }
      >
        <Button size="xs" bg="red.200" color="red" onClick={onOpen}>
          <FaTrash />
        </Button>
      </Tooltip>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Remove {title + " " + subtitle}
            </AlertDialogHeader>
            <AlertDialogBody fontSize="14px" fontWeight="500">
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  handleClick(token, id);
                  onClose();
                }}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Alert;
