import styled from "styled-components";
import ElevatorButton from "./ElevatorButton";
import CallButton from './CallButton';
import { useContext } from 'react';
import { ElevatorInfoContext } from '../../context/ElevatorInfoContext';

const buttons = Array.from({ length: 15 }).map((_, index) => <ElevatorButton index={index} />);

export default function Header() {
  const [{ currentFloor }] = useContext(ElevatorInfoContext);

  return (
    <Wrapper>
      <ButtonList >{buttons}</ButtonList>
      <CallButton />
      <span>현재 {currentFloor}층입니다.</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Description = styled.span`
  font-weight: 700;
`;

const ButtonList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 16px;
`;
