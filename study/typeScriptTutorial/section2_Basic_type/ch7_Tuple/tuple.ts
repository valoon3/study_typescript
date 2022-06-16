
// 1. 튜플은 배열처럼 작동한다.
// 튜플에 있는 요소 수는 고정되어있다.
// 엘리먼트의 요소들은 동일할 필요 없다.

let skill: [string, number];
skill = ['Programming', 5];
// 앞과 뒤의 자료형을 잘 맞춰줘야 오류가 나지 않는다.

let color: [number, number, number] = [255, 0, 0];
// 이런 형태도 가능

let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
// number? 를 통해서 선택적 튜플 요소 선택이 가능하다.
// number? 는 없어도 된다