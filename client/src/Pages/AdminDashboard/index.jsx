import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { DashboardSidebar } from "../../Components";
import Courses from "./Pannels/Courses";
import Analytics from "./Pannels/Analytics";
import Content from "./Pannels/Content";
import Students from "./Pannels/Students";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Courses");

  const TabContent = () => {
    switch (activeTab) {
      case "Courses":
        return <Courses />;
      case "Analytics":
        return <Analytics />;
      case "Content":
        return <Content />;
      case "Students":
        return <Students />;
      default:
        return <Analytics />;
    }
  };

  return (
    <Box w="100%" h="100%" display="flex" m="auto">
      <Flex w="90%" m="auto" h="100%" p="15px" gap="20px">
        <Box w="20%" bg="#fff" h="100%">
          <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </Box>
        <Box w="80%" m="auto" h="100%" >
          <TabContent />
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminDashboard;
