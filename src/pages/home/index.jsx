import React from "react";
import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  HeroContent,
  HeroSection,
  MainContainer,
  ProjectCard,
  ProjectDescription,
  ProjectImage,
  ProjectInfo,
  ProjectLink,
  ProjectLinks,
  ProjectsGrid,
  ProjectsSection,
  ProjectTitle,
  SectionTitle,
  SocialLinks,
  Subtitle,
  TechStack,
  TechTag,
  Title,
} from "./styles";

function Home() {
  const projects = [
    {
      id: 1,
      title: "Projeto 1",
      description: "Uma descrição impressionante do projeto 1",
      image: "/caminho-para-imagem1.jpg",
      tech: ["React", "Node.js", "MongoDB"],
      demoLink: "https://demo1.com",
      githubLink: "https://github.com/seu-usuario/projeto1",
    },
    // Adicione mais projetos aqui
  ];

  // Adicionar as configurações de animação
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <MainContainer>
      <HeroSection id="home">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <HeroContent>
            <motion.div {...fadeInUp}>
              <Title>
                Olá, eu sou <span>Daniel Ibiapina</span>
              </Title>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Subtitle>Desenvolvedor Full Stack</Subtitle>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
              <SocialLinks>
                <a
                  href="https://github.com/DanielIbiapina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/daniel-ibiapina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a href="mailto:daniel18.ibiapinabarros@gmail.com">
                  <FaEnvelope />
                </a>
              </SocialLinks>
            </motion.div>
          </HeroContent>
        </motion.div>
      </HeroSection>

      <ProjectsSection id="projects">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Meus Projetos</SectionTitle>
        </motion.div>
        <ProjectsGrid>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <ProjectCard>
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectInfo>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack>
                    {project.tech.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </TechStack>
                  <ProjectLinks>
                    <ProjectLink
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo ao vivo
                    </ProjectLink>
                    <ProjectLink
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Código fonte
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectInfo>
              </ProjectCard>
            </motion.div>
          ))}
        </ProjectsGrid>
      </ProjectsSection>
    </MainContainer>
  );
}

export default Home;
