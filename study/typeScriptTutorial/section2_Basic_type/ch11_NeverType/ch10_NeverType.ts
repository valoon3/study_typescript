// never 유형은 값을 포함하지 않는 유형이다.
// never 을 사용해서 항상 오류를 발생시키는 함수 반환유형을 나타낸다.
function raiseError(message: string): never {
    throw new Error(message);
}

// 결론
// never 유형에는 값이 없다.
// never 유형은 항상 오류를 발생시키는 함수 또는 무한 루프를 포함하는 함수의 반환 유형을 나타낸다.


