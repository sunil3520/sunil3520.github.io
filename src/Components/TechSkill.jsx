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

const TechSkill = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <Stack
        margin="auto"
        backgroundColor="lavender"
        padding={{ base: "10px 1%", md: "10px", lg: "10px 22%" }}
      >
        {/* Tech Stack */}
        <Box
          color="red.600"
          fontWeight="bold"
          fontSize={{ base: "22px", md: "35px" }}
          textAlign={{ base: "center" }}
          // textDecoration="underline"
        >
          Tech Stack
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4,1fr)",
          }}
          gap={8}
        >
          {/* First Tech Stack */}
          <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
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
                  "https://cdn-icons-png.flaticon.com/512/1532/1532556.png"
                }
              />

              <Heading fontSize={"xl"} fontFamily={"body"} color="white">
                HTML
              </Heading>
            </Stack>
          </GridItem>

          {/* Second Tech Stack */}
          <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
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
                  "https://camo.githubusercontent.com/119b29ca4b9d31cf3969a94eb57fcfbbea0879b493c09c89dc6d4b7fb9e0dc37/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6373732d332e737667"
                }
              />

              <Heading fontSize={"xl"} fontFamily={"body"} color="white">
                CSS
              </Heading>
            </Stack>
          </GridItem>

          {/* Third Tech Stack */}
          <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
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
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                }
              />

              <Heading fontSize={"xl"} fontFamily={"body"} color="white">
                JavaScript
              </Heading>
            </Stack>
          </GridItem>

          {/* Fourth Tech Stack */}
          <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
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
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                }
              />

              <Heading fontSize={"xl"} fontFamily={"body"} color="white">
                React
              </Heading>
            </Stack>
          </GridItem>

          {/* Fifth Tech Stack */}
          <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
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
                  "https://w7.pngwing.com/pngs/413/852/png-transparent-redux-react-logo-javascript-dq-purple-violet-text-thumbnail.png"
                }
              />

              <Heading fontSize={"xl"} fontFamily={"body"} color="white">
                Redux
              </Heading>
            </Stack>
          </GridItem>

          {/* Sixth Tech Stack */}
          <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
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
                  "https://www.turing.com/blog/wp-content/uploads/2021/11/node-js-logo.png"
                }
              />

              <Heading fontSize={"xl"} fontFamily={"body"} color="white">
                NodeJS
              </Heading>
            </Stack>
          </GridItem>

          {/* Seventh Tech Stack */}
          <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("grey", "gray.900")}
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
                  "https://wsofter.ru/wp-content/uploads/2017/12/node-express.png"
                }
              />

              <Heading fontSize={"xl"} fontFamily={"body"} color="black">
                ExpressJS
              </Heading>
            </Stack>
          </GridItem>

          {/* Eight Tech Stack */}
          <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
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
                  "https://www.tutorialsteacher.com/Content/images/home/mongodb.svg"
                }
              />

              <Heading fontSize={"xl"} fontFamily={"body"} color="white">
                MongoDB
              </Heading>
            </Stack>
          </GridItem>

          {/* Nineth Tech Stack */}
          <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
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
                borderRadius="10%"
                src={
                  "data:image/png;base64,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"
                }
              />

              <Heading fontSize={"xl"} fontFamily={"body"} color="white">
                Chakra-UI
              </Heading>
            </Stack>
          </GridItem>

          

          {/* Eleventh Tech Stack */}
          <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
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
                  "https://github.githubassets.com/images/modules/open_graph/github-octocat.png"
                }
              />

              <Heading fontSize={"xl"} fontFamily={"body"} color="white">
                Git
              </Heading>
            </Stack>
          </GridItem>
        </Grid>
      </Stack>
    </section>
  );
});

export default TechSkill;
