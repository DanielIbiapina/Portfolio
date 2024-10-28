import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 3rem 0;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
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
`;
