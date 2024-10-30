import React, { useState } from "react";
import { motion } from "framer-motion";
import uniqueBeautyImage from "../../assets/uniquebeautycapa.png";
import parrotCardGameImage from "../../assets/parrotcapa.png";
import instagramImage from "../../assets/instagramcapa.png";
import jogoForcaImage from "../../assets/jogodaforcacapa.png";
import zapRecallImage from "../../assets/zaprecallcapa.png";
import cineflexImage from "../../assets/cineflexcapa.png";
import trackitImage from "../../assets/trackitcapa.png";
import myWalletImage from "../../assets/mywalletcapa.png";
import imobiliariaImage from "../../assets/imobiliariacapa.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  AboutSection,
  AboutContent,
  ContactButton,
  ContactForm,
  ContactInput,
  ContactSection,
  ContactTextarea,
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
  HighlightText,
  ContactContent,
  FormGroup,
} from "./styles";

function Home() {
  const projects = [
    {
      id: 1,
      title: "Unique Beauty",
      description:
        "Um projeto de gerenciamento de salão de beleza com sistema de agendamento de serviços",
      image: uniqueBeautyImage,
      tech: [
        "React",
        "Node.js",
        "PostgreSQL",
        "JavaScript",
        "TypeScript",
        "Prisma",
        "Styled Components",
        "HTML",
        "CSS",
      ],
      demoLink: "https://unique-beauty-btma.vercel.app/",
      frontendUrl: "https://github.com/DanielIbiapina/Unique-Beauty",
      backendUrl: "url-do-backend",
      isFullStack: true,
    },
    {
      id: 2,
      title: "Imobiliária",
      description: "Projeto Full Stack de uma imobiliária",
      image: imobiliariaImage,
      tech: [
        "React",
        "Node.js",
        "PostgreSQL",
        "JavaScript",
        "TypeScript",
        "Prisma",
        "Styled Components",
        "HTML",
        "CSS",
      ],
      demoLink: "https://martinsbrokers.vercel.app/",
      frontendUrl:
        "https://github.com/DanielIbiapina/imobiliaria-projetoAutoral-front",
      backendUrl: "url-do-backend",
      isFullStack: true,
    },
    {
      id: 3,
      title: "My Wallet",
      description:
        "Projeto Full Stack de controle de finanças, com login, cadastro, lista de transações e registro de transações.",
      image: myWalletImage,
      tech: [
        "React",
        "HTML",
        "CSS",
        "JavaScript",
        "Styled Components",
        "Node.js",
        "MongoDB",
      ],
      demoLink:
        "https://projeto14-my-wallet-front-mruy6l0ld-danielibiapinas-projects.vercel.app/",
      githubLink: "https://github.com/DanielIbiapina/Projeto14-MyWallet-front",
      isFullStack: false,
    },

    {
      id: 4,
      title: "TrackIt",
      description:
        "Site de controle de hábitos, com login, cadastro, lista de hábitos e registro de hábitos diários.",
      image: trackitImage,
      tech: ["React", "HTML", "CSS", "JavaScript", "Styled Components"],
      demoLink: "https://projeto11-trackit-mauve-beta.vercel.app/",
      githubLink: "https://github.com/DanielIbiapina/TrackIt",
      isFullStack: false,
    },

    {
      id: 5,
      title: "Cineflex",
      description:
        "Site de compra de ingressos de cinema, com filmes, sessões e assentos, usando API.",
      image: cineflexImage,
      tech: ["React", "HTML", "CSS", "JavaScript", "Styled Components"],
      demoLink: "https://projeto10-cineflex-eta-jet.vercel.app/",
      githubLink: "https://github.com/DanielIbiapina/Cineflex",
      isFullStack: false,
    },
    {
      id: 6,
      title: "Zap Recall",
      description:
        "Flashcards são cartões de contém uma pergunta/afirmação na sua frente e uma resposta atrás. É possível utilizá-los para treinar sua memória com as metodologias Active Recall e Spaced Repetition.",
      image: zapRecallImage,
      tech: ["React", "HTML", "CSS", "JavaScript"],
      demoLink: "https://projeto9-zaprecall-one-psi.vercel.app/",
      githubLink: "https://github.com/DanielIbiapina/Zap-Recall",
      isFullStack: false,
    },
    {
      id: 7,
      title: "Jogo da Forca",
      description: "Jogo da forca usando React",
      image: jogoForcaImage,
      tech: ["React", "HTML", "CSS", "JavaScript"],
      demoLink: "https://projeto8-jogodaforca-xfbi.vercel.app/",
      githubLink: "https://github.com/DanielIbiapina/Jogo-da-Forca",
      isFullStack: false,
    },
    {
      id: 8,
      title: "Instagram",
      description:
        "Página do instagram simplificada feita com React, o meu primeiro projeto React",
      image: instagramImage,
      tech: ["React", "HTML", "CSS", "JavaScript"],
      demoLink: "https://instagram-react-eosin.vercel.app/",
      githubLink: "https://github.com/DanielIbiapina/Instagram-React",
      isFullStack: false,
    },
    {
      id: 9,
      title: "Jogo da Memória de Papagaios",
      description: "Um jogo de memória simples, o meu primeiro projeto de jogo",
      image: parrotCardGameImage,
      tech: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://danielibiapina.github.io/Parrot-Card-Game/",
      githubLink: "https://github.com/DanielIbiapina/Parrot-Card-Game",
      isFullStack: false,
    },
  ];

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

  const [showFullStack, setShowFullStack] = useState([]);

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

      <AboutSection id="about">
        <h2>Sobre Mim</h2>
        <AboutContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p>
              {" "}
              Tenho formação em{" "}
              <HighlightText>Engenharia Mecatrônica</HighlightText> pela{" "}
              <HighlightText>Universidade de São Paulo</HighlightText>, onde
              gerenciei uma equipe na Secretaria Acadêmica do curso e participei
              de atividades extracurriculares que aprimoraram minhas habilidades
              em gestão e liderança. Após isso, concluí um curso intensivo em{" "}
              <HighlightText>Desenvolvimento Web Full Stack</HighlightText> pela{" "}
              <HighlightText>Driven Education</HighlightText>, que me levou ao
              meu primeiro emprego na{" "}
              <HighlightText>Luz Soluções Financeiras</HighlightText> como
              Analista de Desenvolvimento de Software.{" "}
            </p>{" "}
            <p>
              {" "}
              Com mais de dois anos de experiência, desenvolvi mais de 30
              projetos de <HighlightText>Front-end</HighlightText>,{" "}
              <HighlightText>Back-end</HighlightText> e{" "}
              <HighlightText>Full Stack</HighlightText>, utilizando tecnologias
              como <HighlightText>React</HighlightText>,{" "}
              <HighlightText>Node.js</HighlightText> e{" "}
              <HighlightText>TypeScript</HighlightText>. Meu foco é sempre
              entregar soluções eficientes e escaláveis, priorizando boas
              práticas de código e a experiência do usuário.{" "}
            </p>{" "}
            <p>
              {" "}
              Estou entusiasmado para continuar expandindo minhas habilidades e
              contribuir com soluções tecnológicas inovadoras que façam a
              diferença.{" "}
            </p>
          </motion.div>
        </AboutContent>
      </AboutSection>

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
                    {project.isFullStack ? (
                      showFullStack.includes(project.id) ? (
                        <>
                          <ProjectLink
                            href={project.frontendUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Front
                          </ProjectLink>
                          <ProjectLink
                            href={project.backendUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Back
                          </ProjectLink>
                        </>
                      ) : (
                        <ProjectLink
                          onClick={() =>
                            setShowFullStack([...showFullStack, project.id])
                          }
                          style={{ cursor: "pointer" }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Código fonte
                        </ProjectLink>
                      )
                    ) : (
                      <ProjectLink
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Código fonte
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectInfo>
              </ProjectCard>
            </motion.div>
          ))}
        </ProjectsGrid>
      </ProjectsSection>

      <ContactSection id="contact">
        <h2>Vamos Conversar?</h2>
        <ContactContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p>
              Estou sempre interessado em novos desafios e oportunidades de
              colaboração. Se você procura um desenvolvedor comprometido com
              qualidade e inovação, entre em contato!
            </p>
            <ContactForm
              onSubmit={(e) => {
                e.preventDefault();
                // Adicionar lógica de envio do formulário
              }}
            >
              <FormGroup>
                <label htmlFor="nome">Nome</label>
                <ContactInput type="text" id="nome" name="nome" required />
              </FormGroup>

              <FormGroup>
                <label htmlFor="email">Email</label>
                <ContactInput type="email" id="email" name="email" required />
              </FormGroup>

              <FormGroup>
                <label htmlFor="mensagem">Mensagem</label>
                <ContactTextarea id="mensagem" name="mensagem" required />
              </FormGroup>

              <ContactButton type="submit">Enviar Mensagem</ContactButton>
            </ContactForm>
          </motion.div>
        </ContactContent>
      </ContactSection>
    </MainContainer>
  );
}

export default Home;
