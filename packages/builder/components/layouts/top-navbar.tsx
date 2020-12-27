import {
  Flex,
  HStack,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { MdBugReport, MdWbIncandescent, MdWbSunny } from "react-icons/md";
import { useDispatch } from "react-redux";

const TopNavbar: FC = () => {
  const dispatch = useDispatch();
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.900");

  return (
    <Flex
      h="80px"
      borderBottomWidth={1}
      px={4}
      alignItems="center"
      bg={bgColor}
    >
      <Flex justifyContent="space-between" w="100%">
        <HStack spacing={4} align="center">
          <Link>Writy</Link>
        </HStack>
        <HStack spacing={4} align="center">
          <IconButton
            aria-label="Report an issue"
            icon={<MdBugReport size={24} />}
            as="a"
            href="https://github.com/ghoshnirmalya/writy/issues/new"
            target="_blank"
          />
          <IconButton
            aria-label="Report bug"
            icon={
              colorMode === "light" ? (
                <MdWbIncandescent size={24} />
              ) : (
                <MdWbSunny size={24} />
              )
            }
            onClick={toggleColorMode}
          />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default TopNavbar;
