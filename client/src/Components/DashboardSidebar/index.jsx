import React from "react";
import {
  IoBookSharp,
  IoAnalyticsOutline,
  IoDocumentTextSharp
} from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { Box, Flex } from "@chakra-ui/react";

const DashboardSidebar = ({ activeTab, setActiveTab }) => {
  const list = [
    {
      title: "Courses",
      icon: <IoBookSharp />
    },
    {
      title: "Content",
      icon: <IoDocumentTextSharp />
    },
    {
      title: "Students",
      icon: <FaUserGraduate />
    },
    {
      title: "Analytics",
      icon: <IoAnalyticsOutline />
    }
  ];

  return (
    <Box
      pl={{ sm: "10px", base: "20px", md: "25px" }}
      pt="25px"
      fontWeight="600"
    >
      {list?.map((el) => (
        <Flex
          key={el.title}
          mb="40px"
          alignItems="center"
          justifyContent="flex-start"
          gap="15px"
          pl={activeTab === el.title ? "22.5px" : "25px"}
          w="100%"
          _hover={{ cursor: "pointer" }}
          borderLeft={activeTab === el.title && "3px solid #55a0de"}
          onClick={() => setActiveTab(el.title)}
          color={activeTab === el.title && "#55a0de"}
        >
          <Box>{el.icon}</Box>
          <Box>{el?.title}</Box>
        </Flex>
      ))}
    </Box>
  );
};

export default DashboardSidebar;
