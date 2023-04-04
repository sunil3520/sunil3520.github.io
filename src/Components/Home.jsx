import { Box, Button, HStack, IconButton, Image, Link } from "@chakra-ui/react";
import { forwardRef } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Home = forwardRef((props, ref) => {


  const handleResumeButton=()=>{
    window.open("https://drive.google.com/file/d/14lPmsIALQLdUtgME7E7ACVkja1TGcIoE/view?usp=sharing","_ blank")
  }
  
  const property = {
    imageUrl: "https://avatars.githubusercontent.com/u/76693614?v=4",
    imageAlt: "Sunil Profile Picture",
  };

  return (
    <section ref={ref} id="home">
      <Box
        display="flex"
        backgroundColor="lightslategray"
        pt={{ base: "45px", md: "80px" }}
        pb={{ base: "20px" }}
        // mt={{ base: "3px", md: "5px" }}
        justifyContent={{ base: "center", md: "space-around" }}
        alignItems={{ base: "center" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box p="6">
          <Box fontWeight="bold" fontSize={{ base: "22px", md: "30px" }} color="white">
            Hi, I am
          </Box>

          <Box
            id="user-detail-name"
            fontWeight="bold"
            color={"white"}
            fontSize={{ base: "30px", md: "45px" }}
          >
            Sunil Chaudhary
          </Box>

          <Box
            fontWeight="bold"
            fontSize={{ base: "18px", md: "30px" }}
            color="white"
          >
            Full Stack Web Developer
          </Box>

          <Box margin="10px">
            <a  href="Sunil-Chaudhary-Resume.pdf" download>
              <Button 
               onClick={handleResumeButton}
                id="resume-button-2"
                display={"inline-flex"}
                fontSize={{ base: "sm", md: "md" }}
                fontWeight={"bold"}
                letterSpacing="2px"
                color={"white"}
                bg={"black"}
                _hover={{
                  bg: "red.800",
                }}
              >
                Resume
              </Button>
            </a>
          </Box>

          {/* Social Icons */}

          <HStack
            mt={{ lg: 5, md: 5 }}
            spacing={5}
            px={5}
            alignItems="flex-start"
          >
            <Link target="_blank" href="https://www.linkedin.com/in/sunil3520/">
              <IconButton
                aria-label="linkedin"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: "#0D74FF" }}
                icon={<BsLinkedin size="28px" />}
              />
            </Link>

            <Link target="_blank" href="https://github.com/sunil3520">
              <IconButton
                aria-label="github"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: "#0D74FF" }}
                icon={<BsGithub size="28px" />}
              />
            </Link>

            {/* <Link href="shivam2432000@gmail.com"> */}
            <a href="mailto:sunilchaudhary7789@gmail.com">
              <IconButton
                aria-label="discord"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: "#0D74FF" }}
                icon={<MdEmail size="28px" />}
              />
            </a>
            {/* </Link> */}
          </HStack>
        </Box>

        <Image
          src={"Profile_Picture.jpg"}
          alt={property.imageAlt}
          borderRadius="50%"
          className="home-img"
          height={{ base: "225px", md: "320px" }}
          width={{ base: "225px", md: "320px" }}
        />
      </Box>
    </section>
  );
});

export default Home;
