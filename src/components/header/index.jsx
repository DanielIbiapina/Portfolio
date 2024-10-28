import React, { useState, useEffect } from "react";
import {
  HeaderContainer,
  Logo,
  MobileMenuButton,
  Nav,
  NavLink,
  NavLinks,
} from "./styles";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <Nav>
        <Logo scrolled={scrolled} href="#home">
          &lt;DanielIbiapina /&gt;
        </Logo>
        <NavLinks>
          <NavLink scrolled={scrolled} href="#home">
            Home
          </NavLink>
          <NavLink scrolled={scrolled} href="#about">
            Sobre
          </NavLink>
          <NavLink scrolled={scrolled} href="#projects">
            Projetos
          </NavLink>
          <NavLink scrolled={scrolled} href="#contact">
            Contato
          </NavLink>
        </NavLinks>
        <MobileMenuButton scrolled={scrolled}>☰</MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
