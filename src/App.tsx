import * as React from "react";
import { Header } from "./components/header";
import { Post } from "./components/post";
import "./style/home.css";
import styled from "styled-components";

const postCard = [
  {
    id: 1,
    data: "17 de ago, 2024",
    title: "O que é linguagem de programação? Conheça as principais",
    description:
      "Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.",
  },
  {
    id: 2,
    data: "12 de jul, 2024",
    title: "GitHub agora permite fazer login sem precisar de senha",
    description:
      "O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.",
  },
  {
    id: 3,
    data: "21 de jun, 2024",
    title: "Por que os hiperlinks são azuis em sua maioria??",
    description:
      "Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor.",
  },
  {
    id: 4,
    data: "30 de jun, 2024",
    title: "Primeiros passos com HTML e CSS",
    description:
      "Aprender HTML e CSS é o ponto de partida para qualquer iniciante em programação web. Entenda como criar páginas básicas e aplicar estilos para deixar sua aplicação mais atraente.",
  },
  {
    id: 5,
    data: "15 de ago, 2024",
    title: "Os erros mais comuns ao aprender a programar",
    description:
      "Iniciar na programação pode ser desafiador. Conheça os erros mais frequentes dos iniciantes e aprenda como evitá-los para progredir mais rápido nos seus estudos.",
  },
];

const App = () => {
  return (
    <Wrapper id="home">
      <Header />
      <Wrapper>
        {postCard.map((item) => (
          <Post
            key={item.id}
            data={item.data}
            title={item.title}
            description={item.description}
          />
        ))}
      </Wrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default App