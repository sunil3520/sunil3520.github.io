import React, { forwardRef } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Project = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="projects">
      <Stack margin="auto" backgroundColor="cornflowerblue">
        {/* Projects */}
        <Box
          color="yellow"
          fontWeight="bold"
          fontSize={{ base: "22px", md: "35px" }}
          textAlign={{ base: "center" }}
          // textDecoration="underline"
        >
          Some projects I've Built
        </Box>
        <Grid
          templateColumns={{
            sm: "repeat(1,1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2,1fr)",
          }}
          gap={6}
        >
          {/* First Project */}
          <GridItem className="project-card">
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("cyan", "gray.900")}
              boxShadow={"xl"}
              padding={4}
              margin={4}
              textAlign="center"
            >
              <Flex flex={1} bg="blue.200">
                <Image
                  objectFit="cover"
                  boxSize="100%"
                  src={"purplleClone.jpg"}
                />
              </Flex>
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading
                  className="project-title"
                  fontSize={"xl"}
                  fontFamily={"body"}
                >
                  Purplle.com
                </Heading>

                <Text
                  className="project-description"
                  textAlign={"center"}
                  color={useColorModeValue("gray.700", "gray.400")}
                  px={3}
                >
                  An E-commerce website clone  of Purpull.com. 
                </Text>

                <Stack
                  display="flex"
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <Text fontWeight={"bold"} className="project-tech-stack">
                    <span style={{ color: "red", fontWeight: "600" }}>
                      Tech Stack:
                    </span>{" "}
                    React | React-Router | React-Redux | React-thunk
                    | JSON
                  </Text>
                </Stack>

                <Text>A group project executed in 5 days.</Text>

                <Stack
                  width={"70%"}
                  m="auto"
                  mt={"2rem"}
                  direction={"row"}
                  padding={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Link
                    className="project-github-link"
                    href="https://github.com/Ashmit-1131/Purplle_Clone"
                    target={"_blank"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      _focus={{
                        bg: "gray.200",
                      }}
                    >
                      GitHub
                    </Button>
                  </Link>
                  <Link
                    className="project-deployed-link"
                    href="https://purplle-ashmit-1131.vercel.app/"
                    target={"_blank"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      bg={"blue.400"}
                      color={"white"}
                      boxShadow={
                        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                      }
                      _hover={{
                        bg: "blue.500",
                      }}
                      _focus={{
                        bg: "blue.500",
                      }}
                    >
                      Demo
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </GridItem>

          {/* Second Project */}
          <GridItem className="project-card">
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("cyan", "gray.900")}
              boxShadow={"xl"}
              padding={4}
              margin={4}
              textAlign="center"
            >
              <Flex flex={1} bg="blue.200">
                <Image
                  objectFit="cover"
                  boxSize="100%"
                  src={"NatureBasketClone.jpg"}
                />
              </Flex>
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading
                  className="project-title"
                  fontSize={"xl"}
                  fontFamily={"body"}
                >
                  NatureBasket - Clone
                </Heading>

                <Text
                  className="project-description"
                  textAlign={"center"}
                  color={useColorModeValue("gray.700", "gray.400")}
                  px={3}
                >
                   An E-commerce Food website clone  of NatureBasket.com. 
                </Text>

                <Stack
                  display="flex"
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <Text fontWeight={"bold"} className="project-tech-stack">
                    <span style={{ color: "red", fontWeight: "600" }}>
                      Tech Stack:
                    </span>{" "}
                    ReactJS | React-Router | API | JavaScript | ES6
                  </Text>
                </Stack>

                <Text>A Group project executed in 4 days.</Text>

                <Stack
                  width={"70%"}
                  m="auto"
                  mt={"2rem"}
                  direction={"row"}
                  padding={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Link
                    className="project-github-link"
                    href="https://github.com/sunil3520/nauseating-fowl-3676"
                    target={"_blank"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      _focus={{
                        bg: "gray.200",
                      }}
                    >
                      GitHub
                    </Button>
                  </Link>
                  <Link
                    className="project-deployed-link"
                    href="https://effervescent-fox-5e560b.netlify.app/"
                    target={"_blank"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      bg={"blue.400"}
                      color={"white"}
                      boxShadow={
                        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                      }
                      _hover={{
                        bg: "blue.500",
                      }}
                      _focus={{
                        bg: "blue.500",
                      }}
                    >
                      Demo
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </GridItem>

          {/* Third Project */}
           <GridItem className="project-card">
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("cyan", "gray.900")}
              boxShadow={"xl"}
              padding={4}
              margin={4}
              textAlign="center"
            >
              <Flex flex={1} bg="blue.200">
                <Image
                  objectFit="cover"
                  boxSize="100%"
                  src={"dont&key.jpg"}
                />
              </Flex>
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading
                  className="project-title"
                  fontSize={"xl"}
                  fontFamily={"body"}
                >
                  An E-commerse website
                </Heading>

                <Text
                  className="project-description"
                  textAlign={"center"}
                  color={useColorModeValue("gray.700", "gray.400")}
                  px={3}
                >
                  An Ecommerce Website
                </Text>

                <Stack
                  display="flex"
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <Text className="project-tech-stack" fontWeight={"bold"}>
                    <span style={{ color: "red", fontWeight: "600" }}>
                      Tech Stack:
                    </span>{" "}
                    JavaScript | ES6 | Local Storage | CSS | HTML
                  </Text>
                </Stack>

                <Text>Group project executed in 4 days.</Text>

                <Stack
                  width={"70%"}
                  m="auto"
                  mt={"2rem"}
                  direction={"row"}
                  padding={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Link
                    className="project-github-link"
                    href="https://github.com/Aman3512/Binary_Beasts_2.0"
                    target={"_blank"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      _focus={{
                        bg: "gray.200",
                      }}
                    >
                      GitHub
                    </Button>
                  </Link>
                  <Link
                    className="project-deployed-link"
                    href="https://ornate-paletas-950328.netlify.app/"
                    target={"_blank"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      bg={"blue.400"}
                      color={"white"}
                      boxShadow={
                        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                      }
                      _hover={{
                        bg: "blue.500",
                      }}
                      _focus={{
                        bg: "blue.500",
                      }}
                    >
                      Demo
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </GridItem>

          {/* //  Fourth Project  */}
           <GridItem className="project-card">
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("cyan", "gray.900")}
              boxShadow={"xl"}
              padding={4}
              margin={4}
              textAlign="center"
            >
              <Flex flex={1} bg="blue.200">
                <Image objectFit="cover" boxSize="100%" src={"bewkoof.jpg"} />
              </Flex>
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading
                  className="project-title"
                  fontSize={"xl"}
                  fontFamily={"body"}
                >
                  Bewkoof.com Clone
                </Heading>

                <Text
                  className="project-description"
                  textAlign={"center"}
                  color={useColorModeValue("gray.700", "gray.400")}
                  px={3}
                >
                  An Ecommerse website
                </Text>

                <Stack
                  display="flex"
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <Text className="project-tech-stack" fontWeight={"bold"}>
                    <span style={{ color: "red", fontWeight: "600" }}>
                      Tech Stack:
                    </span>{" "}
                    JavaScript | ES6 | Local Storage | CSS | HTML
                  </Text>
                </Stack>

                <Text>A group project executed in 4 days.</Text>

                <Stack
                  width={"70%"}
                  m="auto"
                  mt={"2rem"}
                  direction={"row"}
                  padding={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Link
                    className="project-github-link"
                    href="https://github.com/atheist31/legit-substance-7075"
                    target={"_blank"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      _focus={{
                        bg: "gray.200",
                      }}
                    >
                      GitHub
                    </Button>
                  </Link>
                  <Link
                    className="project-deployed-link"
                    href="https://delicate-mooncake-6ba932.netlify.app/"
                    target={"_blank"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      bg={"blue.400"}
                      color={"white"}
                      boxShadow={
                        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                      }
                      _hover={{
                        bg: "blue.500",
                      }}
                      _focus={{
                        bg: "blue.500",
                      }}
                    >
                      Demo
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </GridItem> 
        </Grid> 
      </Stack>
    </section>
  );
});

export default Project;
