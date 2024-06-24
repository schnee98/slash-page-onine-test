import styled from "styled-components";
import useElevatorButtonLogic from "../../logics/useElevatorButtonLogic";

const getButtonColor = ($clicked: boolean, $stackLength: number) => {
  if ($stackLength === 0) return "#000";
  return $clicked ? "red" : "#000";
};

export default function ElevatorButton({ index }: { index: number }) {
  const { isClicked, stackLength, handleClick } = useElevatorButtonLogic({ index });
  const buttonProps = {
    $clicked: isClicked,
    $stackLength: stackLength,
    disabled: stackLength === 0,
    onClick: handleClick,
  };

  return <Button {...buttonProps}>{index + 1}</Button>;
}

const Button = styled.button<{ $clicked: boolean; $stackLength: number }>`
  width: 40px;
  height: 28px;
  border: 1px solid #ccc9c9a4;
  background-color: transparent;
  color: ${({ $clicked, $stackLength }) => getButtonColor($clicked, $stackLength)};
  font-weight: ${({ $clicked }) => ($clicked ? "900" : "400")};
  cursor: ${({ $stackLength }) => ($stackLength === 0 ? "default" : "pointer")};
`;
