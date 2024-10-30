import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 3rem 0;

  @media (max-width: 768px) {
    width: 100vw;
    padding: 2rem 0;
    margin: 0;
    left: 0;
    right: 0;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 30px;
      height: 2px;
      background-color: ${(props) => props.theme.colors.secondary};
    }
    @media (max-width: 768px) {
      &:after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`;

export const QuickLinks = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

export const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .heart {
    color: ${(props) => props.theme.colors.secondary};
  }
  @media (max-width: 768px) {
    margin: 2rem auto 0;
    padding: 2rem 1rem 0;
    width: calc(100% - 2rem);
  }
`;
