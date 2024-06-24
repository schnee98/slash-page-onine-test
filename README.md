# 구현할 기능 목록

## 헤더
- [ ] `호출` 설명 텍스트 추가
- [ ] 텍스트와 1에서 15까지의 텍스트를 포함한 클릭 가능한 버튼 추가
  - 클릭 이벤트
    - [ ] 클릭 시 클릭 한 버튼의 텍스트를 `red`로 변경
    - [ ] 각각 세 개의 다른 버튼을 클릭 시, 최소 한개의 엘레베이터 컴포넌트가 이동 가능한 상태일 때 까지 버튼 리스트의 스타일을 다음과 같이 변경
      - [ ] 클릭 불가능
      - [ ] 클릭 된 버튼의 텍스트를 `black`으로 변경
      - [ ] 클릭 된 버튼의 `font-weight`를 `700`으로 변경
      - [ ] 모든 버튼의 `background-color`를 `gray`로 변경

## 엘레베이터
- [ ] 엘레베이터의 상태마다 최소 1에서 최대 15층까지 표현된 위치까지 이동
- [ ] 세 개의 엘레베이터 컴포넌트를 스택에 저장하여 스택의 순서대로 클릭 이벤트 적용
  - [ ] 클릭 이벤트 발생 시 클릭한 층의 수로 이동
  - [ ] 클릭한 층의 수가 엘레베이터의 층 수보다 많을 시, 1초마다 엘레베이터 층이 1씩 증가
  - [ ] 클릭한 층의 수가 엘레베이터의 층 수보다 적을 시, 1초마다 엘레베이터 층이 1씩 감소
  - [ ] 이동 중일 시 엘레베이터 컴포넌트의 `border`와 `color`를 `red`로 변경

## 상태관리

- [ ] 1부터 15까지의 Floor 전역 상태 추가
- [ ] `length`가 3개인 ElevatorStack 전역 상태 추가