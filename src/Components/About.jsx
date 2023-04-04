import { Box, Image } from "@chakra-ui/react";
import React, { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="about" class="about section">
      <Box>
        <Box
          fontWeight="bold"
          fontSize={{ base: "22px", md: "35px" }}
          textAlign={{ base: "center" }}
          // textDecoration="underline"
        >
          About me
        </Box>
        <Box
          width="90%"
          margin="auto"
          display="flex"
          pt={{ base: "20px", md: "30px" }}
          pb={{ base: "20px" }}
          mb={{ base: "20px", md: "25px" }}
          justifyContent={{ base: "center", md: "space-around" }}
          alignItems={{ base: "center" }}
          flexDirection={{ base: "column", md: "column", lg: "row" }}
        >
          <Image
            src="https://st2.depositphotos.com/1265075/8085/i/950/depositphotos_80854270-stock-photo-about-me-key-button.jpg"
            alt="aboutUs"
            borderRadius="20px"
            height={{ base: "200px", md: "300px" }}
            width={{ base: "200px", md: "500px" }}
          />
          <Box margin="20px" id="user-detail-intro">
            <Box
              fontSize={{ base: "15px", md: "22px" }}
              mb="8px"
              fontWeight="semibold"
            >
              I am Sunil Chaudhary. I am from Bhagalpur, Bihar ( India ) and I
              enjoy creating things and live on the internet.
            </Box>
            <Box fontSize={{ base: "14px", md: "18px" }} mb="8px">
              Welcome to my Portfolio.
              I am a Full Stack MERN Developer with expertise in MongoDB,
              Express, React, and Node.js. I build and deploy full-scale web
              applications using these technologies. In addition to my MERN
              stack skills, I am proficient in HTML, CSS, and JavaScript and
              familiar with tools like Git, Webpack, and NPM. I have excellent
              problem-solving and communication skills and can work
              independently or as part of a team. My goal is to deliver
              high-quality, user-friendly, and responsive web applications that
              exceed my clients' expectations. Contact me to discuss how I can
              help bring your ideas to life
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
});

export default About;
