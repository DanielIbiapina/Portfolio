import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: ${({ scrolled }) =>
    scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent"};
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(10px)" : "none")};
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none"};
  transition: all 0.3s ease;
  z-index: 1000;
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ scrolled }) =>
    scrolled ? (props) => props.theme.colors.primary : "#fff"};
  text-decoration: none;
  transition: color 0.3s ease;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ scrolled }) =>
    scrolled ? (props) => props.theme.colors.primary : "#fff"};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 2px;
    background-color: ${(props) => props.theme.colors.secondary};
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ scrolled }) =>
    scrolled ? (props) => props.theme.colors.primary : "#fff"};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
