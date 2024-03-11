import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContent } from "../../../State/Actions";
import { ContentCard, LoadingIndicator, NoData } from "../../../Components";

const Content = () => {
  const { isLoading, isError, allContent } = useSelector(
    (state) => state.content
  );
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContent(token));
  }, []);

  return (
    <Box
      w="100%"
      h="100%"
      overflowX="hidden"
      overflowY="auto"
      display="flex"
      flexDirection="column"
      justifyContent={
        isLoading || allContent?.length === 0 ? "center" : "flex-start"
      }
      alignItems={
        isLoading || allContent?.length === 0 ? "center" : "flex-start"
      }
      gap="20px"
    >
      {isLoading && !isError && (
        <LoadingIndicator />
      )}
      {!isLoading && !isError && allContent?.length === 0 && (
        <Flex
          alignItems="center"
          justifyContent="center"
          gap="5px"
          flexDirection="column"
        >
          <NoData title="No Content Available" />
        </Flex>
      )}
      {!isLoading && isError && allContent?.length === 0 && (
        <Box>
          <Text>Oops! Something went wrong!</Text>
          <Text>Please try again</Text>
        </Box>
      )}
      {!isLoading &&
        !isError &&
        allContent?.length !== 0 &&
        allContent?.map((el) => <ContentCard {...el} key={el._id} />)}
    </Box>
  );
};

export default Content;
