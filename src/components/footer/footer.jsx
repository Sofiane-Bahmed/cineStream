import React from "react";
import Logo2 from "../../assets/blackLogo.png" ;

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footerStyle";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
        <Column>
            <img src={Logo2} style={{ width: "150px" }} alt="CineStream Logo" /><br />
            <p style={{ color: "inherit", opacity: 0.7 }}>
              Your ultimate destination for discovering the latest movies and all-time classics. Stream your passion with CineStream.
            </p>
          </Column>
          <Column>
            <Heading>Explore</Heading>
            <FooterLink href="#!">Movies</FooterLink>
            <FooterLink href="#!">TV Shows</FooterLink>
            <FooterLink href="#!">Actors</FooterLink>
            <FooterLink href="#!">Awards</FooterLink>
          </Column>
          <Column>
            <Heading>Genres</Heading>
            <FooterLink href="#!">Action</FooterLink>
            <FooterLink href="#!">Comedy</FooterLink>
            <FooterLink href="#!">Drama</FooterLink>
            <FooterLink href="#!">Horror</FooterLink>
          </Column>
          <Column>
            <Heading>Support</Heading>
            <FooterLink href="#!">Help Center</FooterLink>
            <FooterLink href="#!">Privacy Policy</FooterLink>
            <FooterLink href="#!">Terms of Use</FooterLink>
            <FooterLink href="#!">Contact Us</FooterLink>
          </Column>
          <Column>
            <Heading>Social</Heading>
            <FooterLink href="#!">Facebook</FooterLink>
            <FooterLink href="#!">Instagram</FooterLink>
            <FooterLink href="#!">Twitter</FooterLink>
            <FooterLink href="#!">YouTube</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;