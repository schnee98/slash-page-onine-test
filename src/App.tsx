import styled from "styled-components";
import Header from "./components/header/Header";
import ElevatorSystem from "./components/elevator/ElevatorSystem";

export default function App() {
  return (
    <Wrapper>
      <Header />
      <ElevatorSystem />
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
