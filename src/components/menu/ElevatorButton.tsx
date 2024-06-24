import styled from "styled-components";
import useElevatorButtonLogic from "../../logics/useElevatorButtonLogic";

const getButtonColor = ($clicked: boolean, $stackLength: number) => {
  if ($stackLength !== 0) return "#000";
  return $clicked ? "red" : "#000";
};

export default function ElevatorButton({ index }: { index: number }) {
  const { isClicked, isReady, stackLength, handleClick } = useElevatorButtonLogic({ index });
  const buttonProps = {
    $clicked: isClicked,
    $ready: isReady,
    $stackLength: stackLength,
    disabled: stackLength !== 0 || !isReady,
    onClick: handleClick,
  };

  return <Button {...buttonProps}>{index + 1}</Button>;
}

const Button = styled.button<{ $clicked: boolean; $ready: boolean; $stackLength: number }>`
  width: 40px;
  height: 28px;
  border: 1px solid #ccc9c9a4;
  background-color: ${({ $stackLength, $ready }) => ($stackLength !== 0 || !$ready ? "gray" : "transparent")};
  color: ${({ $clicked, $stackLength }) => getButtonColor($clicked, $stackLength)};
  font-weight: ${({ $clicked }) => ($clicked ? "900" : "400")};
  cursor: ${({ $stackLength, $ready }) => ($stackLength !== 0 || !$ready ? "default" : "pointer")};
`;
