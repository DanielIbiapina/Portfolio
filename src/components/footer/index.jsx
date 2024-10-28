import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import {
  Copyright,
  FooterContainer,
  FooterContent,
  FooterSection,
  QuickLinks,
  SocialLinks,
} from "./styles";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Sobre</h3>
          <p>
            Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e
            experiências digitais incríveis.
          </p>
          <SocialLinks>
            <a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:seu-email@email.com">
              <FaEnvelope />
            </a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Links Rápidos</h3>
          <QuickLinks>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </QuickLinks>
        </FooterSection>

        <FooterSection>
          <h3>Contato</h3>
          <p>Email: seu-email@email.com</p>
          <p>Localização: Sua Cidade, País</p>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>
          © {currentYear} Seu Nome. Feito com <FaHeart className="heart" /> em
          React
        </p>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
