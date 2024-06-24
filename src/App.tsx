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
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

const Content = styled.div`
  display: flex;
  gap: 20px;
`;
