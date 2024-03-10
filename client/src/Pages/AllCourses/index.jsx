import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CourseCard, LoadingIndicator, NoData } from "../../Components";
import { filterCategory, filterType, getAllCourses } from "../../State/Actions";

const AllCourses = () => {
  const { isLoading, isError, courses, filters } = useSelector(
    (state) => state.courses
  );
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleCategory = (val) => {
    const newCategory = [...filters?.category];

    if (filters?.category?.includes(val)) {
      const ind = filters?.category.indexOf(val);
      newCategory.splice(ind, 1);
    } else newCategory.push(val);

    dispatch(filterCategory(newCategory));
  };

  const handleType = (val) => {
    const newType = [...filters?.type];

    if (filters?.type?.includes(val)) {
      const ind = filters?.type?.indexOf(val);
      newType?.splice(ind, 1);
    } else newType.push(val);

    dispatch(filterType(newType));
  };

  useEffect(() => {
    if (filters) dispatch(getAllCourses(token, { ...filters }));
  }, [filters]);

  return (
    <Box
      w={{ base: "100%", sm: "100%", md: "95%", lg: "90%" }}
      m="auto"
      mt="20px"
      display="flex"
      justifyContent="center"
      gap="20px"
    >
      <Box
        w={{ base: "50%", sm: "30%", md: "20%", lg: "20%" }}
        bg="#fff"
        textAlign="left"
        pl="20px"
        pt="15px"
      >
        <Box fontWeight="500" fontSize="14px" color="#545454">
          <Text fontWeight="650" mb="10px" color="black">
            Filter By Category
          </Text>
          <Box mb="10px">
            <Checkbox
              size="md"
              defaultChecked={filters?.category?.includes("Frontend")}
              value="Frontend"
              onChange={(e) => handleCategory(e.target.value)}
            >
              Frontend
            </Checkbox>
          </Box>
          <Box mb="10px">
            <Checkbox
              size="md"
              defaultChecked={filters?.category?.includes("Backend")}
              value="Backend"
              onChange={(e) => handleCategory(e.target.value)}
            >
              Backend
            </Checkbox>
          </Box>
        </Box>
        <Box mt="20px" fontWeight="500" fontSize="14px" color="#545454">
          <Text mb="10px" color="black" fontWeight="650">
            Filter By Type
          </Text>
          <Box mb="10px">
            <Checkbox
              size="md"
              value="Language"
              defaultChecked={filters?.type?.includes("Language")}
              onChange={(e) => handleType(e.target.value)}
            >
              Language
            </Checkbox>
          </Box>
          <Box mb="10px">
            <Checkbox
              size="md"
              value="Framework/Library"
              defaultChecked={filters?.type?.includes("Framework/Library")}
              onChange={(e) => handleType(e.target.value)}
            >
              Framework/Library
            </Checkbox>
          </Box>
          <Box mb="10px">
            <Checkbox
              size="md"
              value="UI Library"
              defaultChecked={filters?.type?.includes("UI Library")}
              onChange={(e) => handleType(e.target.value)}
            >
              UI Library
            </Checkbox>
          </Box>
          <Box mb="10px">
            <Checkbox
              size="md"
              value="Other"
              defaultChecked={filters?.type?.includes("Other")}
              onChange={(e) => handleType(e.target.value)}
            >
              Other
            </Checkbox>
          </Box>
        </Box>
      </Box>
      <Box
        w={{ base: "50%", sm: "70%", md: "80%", lg: "80%" }}
        h="610px"
        display="flex"
        alignItems={
          isLoading || courses?.length === 0 ? "center" : "flex-start"
        }
        justifyContent={
          isLoading || courses?.length === 0 ? "center" : "flex-start"
        }
        gap="15px"
      >
        <Box
          w="100%"
          display="flex"
          justifyContent={
            isLoading || courses?.length === 0 ? "center" : "flex-start"
          }
          gap="20px"
          flexWrap="wrap"
          overflowX="hidden"
          overflowY="auto"
        >
          {isLoading && !isError && courses?.length === 0 && (
            <LoadingIndicator />
          )}
          {!isLoading && !isError && courses?.length === 0 && (
            <Flex
              alignItems="center"
              justifyContent="center"
              gap="5px"
              flexDirection="column"
            >
              <NoData title="No Courses Available" />
            </Flex>
          )}
          {!isLoading && isError && courses?.length === 0 && (
            <Box fontWeight="550">
              <Text>Oops! Something went wrong!</Text>
              <Text>Please try again</Text>
            </Box>
          )}
          {!isLoading &&
            !isError &&
            courses?.length !== 0 &&
            courses?.map((el) => <CourseCard {...el} key={el._id} />)}
        </Box>
      </Box>
    </Box>
  );
};

export default AllCourses;
