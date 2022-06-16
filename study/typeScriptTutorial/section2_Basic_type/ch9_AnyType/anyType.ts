// anyType 자료형은 컴파일 타임에서 모든 자료형을 허용한다,
// 정확히는 any유형을 사용하면 모든 값을 저장할 수 있고 컴파일러에서 유형 검사를 건너 뛰도록 지시하는 것.
// 마이그레이션 할때 많이 사용된다.


// json may come from a third-party API
const json = `{"latitude": 10.11, "longitude":12.12}`;

// parse JSON to find location
const currentLocation = JSON.parse(json);
console.log(currentLocation);

// typescript any : 암시적 입력
// typescript가 자료형을 지정하지 않으면 암시적으로 any 라고 판정함

let result: any;  // result가 any이기 때문에 아래가 오류가 나지 않는다
result = 10.123;
console.log(result.toFixed());
result.willExist();


// result의 값을 Object로 수정해서 오류가 난다.
let result2: object;
result = 10.123;
result.toFixed();