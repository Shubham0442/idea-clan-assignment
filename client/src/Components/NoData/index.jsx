import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { GiEmptyHourglass } from "react-icons/gi";

const NoData = ({ title }) => {
  return (
    <Flex
      fontWeight="550"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <GiEmptyHourglass fontSize="40px" />
      <Text>{title}</Text>
    </Flex>
  );
};

export default NoData;
