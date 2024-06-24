import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ElevatorInfoContext } from "../../context/ElevatorInfoContext";

export default function CallButton() {
  const [{ movingElevators }, dispatchInfoState] = useContext(ElevatorInfoContext);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    dispatchInfoState({ type: "SET_READY", payload: {} });
  };

  useEffect(() => {
    if (movingElevators.length === 0) setIsClicked(false);
  }, [movingElevators]);

  return (
    <Button disabled={isClicked} onClick={handleClick}>
      호출
    </Button>
  );
}

const Button = styled.button`
  width: 60px;
  height: 28px;
  background-color: skyblue;
  font-weight: 700;
  cursor: pointer;
`;
