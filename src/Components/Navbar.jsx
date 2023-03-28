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
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const Links = [
  { to: "/", name: "Home", class: "nav-link home" },
  { to: "/about", name: "About Me", class: "nav-link about" },
  { to: "/projects", name: "Projects", class: "nav-link projects" },
  { to: "/techstack", name: "Tech-Stack", class: "nav-link techstack" },
  { to: "/skills", name: "Skills", class: "nav-link skills" },
  { to: "/contact", name: "Contact", class: "nav-link contact" },
];

const NavItem = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "red.800",
      color: "white",
    }}
    color="black"
    fontWeight="bold"
    textAlign="center"
    fontSize="18px"
    href={"/"}
  >
    {children}
  </Link>
);

export default function Navbar({ refs }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  useEffect(() => {
    console.log("location", location.pathname);
    switch (location.pathname) {
      case "/about":
        scrollSmoothHandler(refs.aboutRef);
        break;

      case "/projects":
        scrollSmoothHandler(refs.projectRef);
        break;

      case "/techstack":
        scrollSmoothHandler(refs.techStackRef);
        break;

      case "/skills":
        scrollSmoothHandler(refs.skillsRef);
        break;

      case "/contact":
        scrollSmoothHandler(refs.contactRef);
        break;

      default:
        scrollSmoothHandler(refs.homeRef);
        break;
    }
  }, [location, refs]);

  const scrollSmoothHandler = (ref) => {
    console.log("Triggered.");
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeButton=()=>{
    window.open("https://drive.google.com/file/d/14lPmsIALQLdUtgME7E7ACVkja1TGcIoE/view?usp=sharing","_ blank")
  }

  return (
    <div id="nav-menu">
      <Box
        box-shadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
        bg={useColorModeValue("white", "black.900")}
        px={4}
        pos="fixed"
        zIndex={2}
        w="100%"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ lg: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            {/* Navbar Logo */}
            <NavLink to="/">
              
              <Box color="black" fontFamily={"cursive"} fontWeight="bold" marginRight={"12px"} marginLeft="20px" fontSize="32px">
                SUNIL
              </Box>
            </NavLink>

            {/* Navbar items */}
            <HStack
              as={"nav"}
              spacing={"4"}
              display={{ base: "none", lg: "flex" }}
            >
              {Links.map((link) => (
                <NavLink to={link.to} className={link.class}>
                  {" "}
                  <NavItem key={link.name}>{link.name}</NavItem>
                </NavLink>
              ))}
            </HStack>
          </HStack>

          {/* Resume Button */}
          <Flex alignItems={"center"}>
              <Button
              onClick={handleResumeButton}
              marginRight={"10px"}
                id="resume-button-1"
                className="nav-link resume"
                display={"inline-flex"}
                fontSize={"md"}
                fontWeight={"bold"}
                letterSpacing="2px"
                color={"white"}
                bg={"black"}
                href={"#"}
                _hover={{
                  bg: "white",
                  color: "red.800",
                  border: "1px solid red",
                }}
              >
            <a  href="Sunil_Chaudhary_Resume.pdf"  download>
              
               Resume
               </a>
              </Button>
           
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "lg" }} p="static">
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink to={link.to} className={link.class}>
                  {" "}
                  <NavItem key={link.name}>{link.name}</NavItem>
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </div>
  );
}
