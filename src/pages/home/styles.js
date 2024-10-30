import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100vw;
    overflow-x: hidden;
  }
`;

export const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary} 0%,
    #1a1a1a 100%
  );
  color: white;
  position: relative;

  @media (max-width: 768px) {
    width: 100vw;
    left: 0;
    right: 0;
  }
`;

export const HeroContent = styled.div`
  text-align: center;
  z-index: 1;

  @media (max-width: 768px) {
    text-align: center;
    padding: 40px 20px;
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;

  span {
    color: ${(props) => props.theme.colors.secondary};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  background: white;
  width: 100vw;
  margin: 0;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;

  &:after {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    background: ${(props) => props.theme.colors.secondary};
    margin: 1rem auto;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ProjectCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const ProjectDescription = styled.p`
  color: ${(props) => props.theme.colors.lightText};
  margin-bottom: 1rem;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const TechTag = styled.span`
  background: ${(props) => props.theme.colors.secondary}15;
  color: ${(props) => props.theme.colors.secondary};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const AboutSection = styled.section`
  padding: 5rem 2rem;
  background: ${(props) => props.theme.colors.primary}08;
  box-sizing: border-box;
  width: 100%;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: ${(props) => props.theme.colors.primary};

    &:after {
      content: "";
      display: block;
      width: 50px;
      height: 3px;
      background: ${(props) => props.theme.colors.secondary};
      margin: 1rem auto;
    }
  }

  @media (max-width: 768px) {
    width: 100vw;
    padding: 5rem 1rem;
    margin: 0;
    left: 0;
    right: 0;
  }
`;

export const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  line-height: 1.8;

  @media (max-width: 768px) {
    padding: 20px;
    text-align: justify;
  }
`;

export const HighlightText = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 600;
`;

export const ContactSection = styled.section`
  padding: 5rem 2rem;
  background: white;
  box-sizing: border-box;
  width: 100%;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: ${(props) => props.theme.colors.primary};

    &:after {
      content: "";
      display: block;
      width: 50px;
      height: 3px;
      background: ${(props) => props.theme.colors.secondary};
      margin: 1rem auto;
    }
  }

  @media (max-width: 768px) {
    width: 100vw;
    padding: 5rem 1rem;
    margin: 0;
    left: 0;
    right: 0;
  }
`;

export const ContactContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;

  label {
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const ContactInput = styled.input`
  padding: 0.8rem;
  border: 2px solid ${(props) => props.theme.colors.primary}30;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const ContactTextarea = styled.textarea`
  padding: 0.8rem;
  border: 2px solid ${(props) => props.theme.colors.primary}30;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const ContactButton = styled.button`
  padding: 1rem 2rem;
  background: ${(props) => props.theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${(props) => props.theme.colors.secondary}ee;
  }
`;
