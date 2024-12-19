import * as React from "react";
import { Header } from "./components/header";
import { Post } from "./components/post";
import styled from "styled-components";
import "./style/home.css";
import { PostInToplist } from "./components/postInToplist";

const postCard = [
  {
    id: 1,
    data: "17 de ago, 2024",
    title: "O que é linguagem de programação? Conheça as principais",
    description:
      "Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.",
    category: "Conhecimento",
    specify: "Frontend / Backend",
  },
  {
    id: 2,
    data: "12 de jul, 2024",
    title: "GitHub agora permite fazer login sem precisar de senha",
    description:
      "O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.",
    category: "Curiosidades",
    specify: "Frontend / Backend",
  },
  {
    id: 3,
    data: "21 de jun, 2024",
    title: "Por que os hiperlinks são azuis em sua maioria??",
    description:
      "Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor.",
    category: "Curiosidades",
    specify: "Frontend",
  },
  {
    id: 4,
    data: "30 de jun, 2024",
    title: "Primeiros passos com HTML e CSS",
    description:
      "Aprender HTML e CSS é o ponto de partida para qualquer iniciante em programação web. Entenda como criar páginas básicas e aplicar estilos para deixar sua aplicação mais atraente.",
    category: "Conhecimento",
    specify: "Frontend",
  },
  {
    id: 5,
    data: "15 de ago, 2024",
    title: "Os erros mais comuns ao aprender a programar",
    description:
      "Iniciar na programação pode ser desafiador. Conheça os erros mais frequentes dos iniciantes e aprenda como evitá-los para progredir mais rápido nos seus estudos.",
    category: "Conhecimentos",
    specify: "Frontend / Backend",
  },
];

const App = () => {
  return (
    <Wrapper id="home">
      <Header />
      <Body>
        <SidebarLeft>
          <h1>Categorias</h1>
          <p>Curiosidades</p>
          <p>Novidades</p>
          <p>Conhecimento</p>
          <h1>Específicos</h1>
          <p>Frontend</p>
          <p>Backend</p>
          <p>Infraestrutura</p>
          <p>DevOps</p>
          <p>UX/UI</p>
          <p>QA</p>
        </SidebarLeft>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
            margin: 20,
          }}
        >
          {postCard.map((item) => (
            <Post
              key={item.id}
              data={item.data}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <SidebarRight>
          <h1>mais procurados</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {postCard.map((item) => (
              <PostInToplist
                key={item.id}
                title={item.title}
                data={item.data}
                category={item.category}
                specify={item.specify}
              />
            ))}
          </div>
        </SidebarRight>
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr 0.3fr;
  gap: 30px;
`;

const SidebarLeft = styled.div`
  border-right: 1px solid #4b4950;
  background: #17171a;
  color: #ffffff;
  height: 100vh;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SidebarRight = styled(SidebarLeft)`
  align-items: center;
  border-left: 1px solid #252529;
  min-height: fit-content;
`;

const Divider = styled.div`
  width: "100%";
  height: 2px;
  background: #4b4950;
`;

export default App;
