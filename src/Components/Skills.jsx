import {
  GridItem,
  Stack,
  Image,
  Heading,
  useColorModeValue,
  Grid,
  Box,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

const Skills = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="skills">
      <Stack
        margin="auto"
        backgroundColor="purple.300"
        padding={{ base: "10px 1%", md: "10px", lg: "10px 22%" }}
      >
        <Box
          color="black.600"
          fontWeight="bold"
          fontSize={{ base: "22px", md: "35px" }}
          textAlign={{ base: "center" }}
          // textDecoration="underline"
        >
          My Skills
        </Box>

        {/* Soft Skills */}
        {/* <Heading
          paddingLeft={{ base: "12px", md: "25px" }}
          // textDecoration="underline"
        >
          Soft Skills
        </Heading> */}
        <Grid
          templateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4,1fr)",
          }}
          gap={{ base: "", md: "4" }}
        >
          {/* First Soft Skills */}
          <GridItem className="skills-card">
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "80%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("black", "gray.900")}
              boxShadow={"xl"}
              padding="10px"
              margin={4}
              textAlign="center"
            >
              <Image
                className="skills-card-img"
                width={{ base: "70px", md: "100px" }}
                height="130px"
                margin="2px 18%"
                src={
                  "https://abhijitnr.github.io/static/media/collabrative.697daf5b0a056e39d2ea.png"
                }
              />

              <Heading
                className="skills-card-name"
                fontSize={"xl"}
                fontFamily={"body"}
                color="white"
              >
                Collaborative
              </Heading>
            </Stack>
          </GridItem>

          {/* Second Soft Skills */}
          <GridItem className="skills-card">
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "80%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("black", "gray.900")}
              boxShadow={"xl"}
              padding="10px"
              margin={4}
              textAlign="center"
            >
              <Image
                className="skills-card-img"
                width={{ base: "70px", md: "100px" }}
                height="130px"
                margin="2px 18%"
                src={
                  "https://s3.amazonaws.com/creativity-post/uploads/_articleHeader/iStock_000017945529Medium.jpg"
                }
              />

              <Heading
                className="skills-card-name"
                fontSize={"xl"}
                fontFamily={"body"}
                color="white"
              >
                Creative Thinking
              </Heading>
            </Stack>
          </GridItem>

          {/* Third Soft Skills */}
          <GridItem className="skills-card">
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "80%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("black", "gray.900")}
              boxShadow={"xl"}
              padding="10px"
              margin={4}
              textAlign="center"
            >
              <Image
                className="skills-card-img"
                width={{ base: "70px", md: "100px" }}
                height="130px"
                margin="2px 18%"
                src={
                  "https://www.incimages.com/uploaded_files/image/1920x1080/getty_588960966_354337.jpg"
                }
              />

              <Heading
                className="skills-card-name"
                fontSize={"xl"}
                fontFamily={"body"}
                color="white"
              >
                Problem Solving
              </Heading>
            </Stack>
          </GridItem>

          {/* Fourth Soft Skills */}
          <GridItem className="skills-card">
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "80%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("black", "gray.900")}
              boxShadow={"xl"}
              padding="10px"
              margin={4}
              textAlign="center"
            >
              <Image
                className="skills-card-img"
                width={{ base: "70px", md: "100px" }}
                height="130px"
                margin="2px 18%"
                src={
                  "https://www.agiledrop.com/sites/default/files/styles/blog_big_teaser/public/2020-02/Time%20management%20cover%201.png?itok=XOER9TUD"
                }
              />

              <Heading
                className="skills-card-name"
                fontSize={"xl"}
                fontFamily={"body"}
                color="white"
              >
                Time Management
              </Heading>
            </Stack>
          </GridItem>
        </Grid>

        {/* Tech Skills */}
        {/* <Heading
          paddingLeft={{ base: "12px", md: "25px" }}
          textDecoration="underline"
        >
          Tech Skills
        </Heading>
        <Grid
          templateColumns={{ base: "repeat(2,1fr)", md: "repeat(4, 1fr)" }}
          gap={{ base: "", md: "4" }}
        > */}
        {/* First Tech Skills */}
        {/* <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "80%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("black", "gray.900")}
              boxShadow={"xl"}
              padding="10px"
              margin={4}
              textAlign="center"
            >
              <Image
                width={{ base: "70px", md: "100px" }}
                height="130px"
                margin="2px 18%"
                src={
                  "https://abhijitnr.github.io/static/media/frontend-icon-22.23cac2a4e78e5e715d52.jpg"
                }
              />

              <Heading fontSize={"xl"} fontFamily={"body"} color="white">
                Frontend
              </Heading>
            </Stack>
          </GridItem> */}

        {/* Second Tech Skills */}
        {/* <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "80%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("black", "gray.900")}
              boxShadow={"xl"}
              padding="10px"
              margin={4}
              textAlign="center"
            >
              <Image
                width={{ base: "70px", md: "100px" }}
                height="130px"
                margin="2px 18%"
                src={
                  "https://abhijitnr.github.io/static/media/backend.cd86763da06f05c86ca6.png"
                }
              />

              <Heading fontSize={"xl"} fontFamily={"body"} color="white">
                Backend
              </Heading>
            </Stack>
          </GridItem> */}

        {/* Third Tech Skills */}
        {/* <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "80%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("black", "gray.900")}
              boxShadow={"xl"}
              padding="10px"
              margin={4}
              textAlign="center"
            >
              <Image
                width={{ base: "70px", md: "100px" }}
                height="130px"
                margin="2px 18%"
                src={
                  "https://abhijitnr.github.io/static/media/DSAA.77509298a343d123a7bd.png"
                }
              />

              <Heading fontSize={"xl"} fontFamily={"body"} color="white">
                DSA
              </Heading>
            </Stack>
          </GridItem> */}

        {/* Fourth Tech Skills */}
        {/* <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "80%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("black", "gray.900")}
              boxShadow={"xl"}
              padding="10px"
              margin={4}
              textAlign="center"
            >
              <Image
                width={{ base: "70px", md: "100px" }}
                height="130px"
                margin="2px 18%"
                src={
                  "https://abhijitnr.github.io/static/media/projectManagement.56532bbb9da241b0f1c8.png"
                }
              />

              <Heading fontSize={"xl"} fontFamily={"body"} color="white">
                Project Management
              </Heading>
            </Stack>
          </GridItem> */}
        {/* </Grid> */}
      </Stack>
    </section>
  );
});

export default Skills;
