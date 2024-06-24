import styled from "styled-components";
import Header from "./components/header/Header";
import Building from "./components/elevator/Building";

export default function App() {
  return (
    <Wrapper>
      <Header />
      <Building />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
