import styled from "styled-components";

export function Header() {
  return (
    <MainHeader>
      <img src="" alt="Logo Unforged" />
      <nav>
        <a href="">Comunidade Unforged</a>
        <a href="">Tutorial</a>
        <a href="">Open Source</a>
        <a href="">Comandos</a>
      </nav>
    </MainHeader>
  );
}

const MainHeader = styled.header``;
