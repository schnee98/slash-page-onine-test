import styled from "styled-components";
import Header from "./components/header/Header";
import ElevatorSystem from "./components/elevator/ElevatorSystem";

const elevatorSystems = [...Array.from({ length: 3 })].map((_, index) => <ElevatorSystem index={index} />);

export default function App() {
  return (
    <Wrapper>
      <Header />
      <Content>{elevatorSystems}</Content>
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
  gap: 20px;
`;

const Content = styled.div`
  width: 600px;
  display: flex;
  gap: 20px;
`;
