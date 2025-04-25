import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  const limit = 300;

  const truncated =
    children.length > limit ? children.slice(0, limit) + "... " : children;

  return (
    <Text>
      {expanded ? children : truncated}

      {children.length > limit && (
        <Button
          onClick={() => setExpanded(!expanded)}
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          marginLeft={1}
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
      )}
    </Text>
  );
};

export default ExpandableText;
