import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { StudentDashSidebar } from "../../Components";
import MyCourses from "./Pannels/MyCourses";
import MyContent from "./Pannels/MyContent";
import MyAccount from "./Pannels/MyAccount";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("My Courses");

  const TabContent = () => {
    switch (activeTab) {
      case "My Courses":
        return <MyCourses />;
      case "My Content":
        return <MyContent />;
      case "My Account":
        return <MyAccount />;
      default:
        return <MyCourses />;
    }
  };

  return (
    <Box w="100%" h="100%" display="flex" m="auto">
      <Flex w="85%" m="auto" h="100%" p="15px" gap="20px">
        <Box w="20%" bg="#fff" h="100%">
          <StudentDashSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </Box>
        <Box w="80%" m="auto" h="100%">
          <TabContent />
        </Box>
      </Flex>
    </Box>
  );
};

export default StudentDashboard;
