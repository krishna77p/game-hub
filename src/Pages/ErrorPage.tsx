import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops Sorry</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "Unexpected error"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
