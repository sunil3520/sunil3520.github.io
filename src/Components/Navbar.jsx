import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  
  IconButton,
  Button,
 
  useDisclosure,
  useColorModeValue,
  Stack,
  position,
} from "@chakra-ui/react";

// import { ClassNames } from "@emotion/react";

//Icons imported here
import { HiDownload } from 'react-icons/hi';
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

const links = [
  { text: "Home", path: "/", ClassName: "nav-linke home" },
  { text: "About", path: "/about", ClassName: "nav-linke about" },
  { text: "Skills", path: "/skills", ClassName: "nav-linke skills" },
  { text: "Projects", path: "/projects", ClassName: "nav-linke projects" },
  { text: "Contact", path: "/contact", ClassName: "nav-linke contact" },
  // { text: "Resume", path: "/resume", ClassName: "nav-linke resume" },
];

const { isOpen, onOpen, onClose } = useDisclosure;



const Navbar = () => {
  return (
    <div>
      <>
        <Box backgroundColor={"#7db5df"} id="nav-menu"  marginTop={"0px"} width={"100%"} position="sticky">
          <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
            display={{ md: "none" }}
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={50} alignItems={"center"}>
              <div
                style={{
                  marginLeft: "20px",
                  fontSize: "30px",
                  marginRight: "50px",
                }}
              >
                <Box><b>SUNIL</b></Box>
              </div>
              <HStack
                as={"nav"}
                spacing={"35%"}
                display={{ base: "none", md: "flex" }}
              >
               {links.map((el)=>{
               return (
                <Link  to={el.path}>{el.text}</Link>
               )
               })}
                <Box>
                  <Button className="nav-linke resume" >
                    Resume
                    <span>
                      <HiDownload/>
                    </span>
                  </Button>
                </Box>
              </HStack>
            </HStack>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
              {links.map((el)=>{
               return (
                <Link  to={el.path}>{el.text}</Link>
               )
               })}

               
              </Stack>
            </Box>
          ) : null}
        </Box>

        
      </>
    </div>
  );
};

export default Navbar;
