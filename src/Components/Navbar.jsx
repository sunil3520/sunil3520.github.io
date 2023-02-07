

import {
  Box,
  Flex,
  
  HStack,
  Link,
  IconButton,
  Button,
 
  useDisclosure,
  useColorModeValue,
  Stack,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  
  Drawer,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { HiDownload } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

const Links = [
  { text: "Home", path: "/", class: "nav-linke home" },
  { text: "About", path: "/about", class: "nav-linke about" },
  { text: "Skills", path: "/skills", class: "nav-linke skills" },
  { text: "Projects", path: "/projects", class: "nav-linke projects" },
  { text: "Contact", path: "/contact", class: "nav-linke contact" },
  // { text: "Resume", path: "/resume", ClassName: "nav-linke resume" },
];

const NavItem = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"/"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Box
        bg={useColorModeValue("#778899")}
        px={4}
        width="100%"
        paddingRight={"5%"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <div
              style={{
                marginLeft: "10%",
                fontSize: "30px",
                marginRight: "20%",
              }}
            >
              <Box>
                <b>SUNIL</b>
              </Box>
            </div>
            <HStack display={{ base: "none", md: "flex" }} gap="20%">
              {Links.map((link) => (
                <NavLink to={link.path} className={link.class}>
                  <NavItem key={link.text}>{link.text}</NavItem>
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button className="nav-linke resume">
              Resume
              <span>
                <HiDownload />
              </span>
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack>
              <Drawer
              
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent border={"1px solid red"} width="200px">
                  <DrawerCloseButton />
                  <DrawerHeader>Create your account</DrawerHeader>

                  <DrawerBody display={"flex"} flexDirection="column"  >
                    {Links.map((link) => (
                      <NavLink to={link.path} className={link.class}>
                        <NavItem key={link.text}>{link.text}</NavItem>
                      </NavLink>
                    ))}
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Stack>
          </Box>
        ) : null}
      </Box>

      
    </>
  );
}
