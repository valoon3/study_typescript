// NodeJs 프로젝트에서 TypeScript 개발 자동화하기

// 1. node ts 라는 파일을 만들고
// src, build 하위 디렉터리를 생성한다.

// 2. 타입스크립트 코드를 src에 저장하면 TypeScript 컴파일러가 출력파일을 build 디렉터리에 저장한다.

// 3. nodets 에서
// tsc --init 실행
// 실행하면 tsconfig.ts 가 생김
// tsconfig.ts 는 nodets가 typeScript 프로젝트의 루트임을 나타낸다.
// typeScript 컴파일러는 tsconfig.json 을 사용해서 프로젝트를 컴파일한다.

// 4. tsconfig file option
// 대표적 두개
// - rootdir : typescript 입력 파일의 루트 데렉토리를 지정
// - outdir : 출력되는 javascript 파일을 저장 위치
// 해당 옵션들은 기본적으로 주석처리 되어있는데 해제하고 변경해야한다.

// 경로에 맞춰 outDir => ./build
// 경로에 맞춰 rootDir => ./src

// 5. app.ts 생성 후
// nodets에서 tsc 명령어 실행
// 빌드된 app.js 가 build 폴더에 생성된 것을 볼 수 있다.

// =======================================================================
// =======================================================================

// 1. nodemon 설치로 자동화
// 먼저 npm init 으로 만들어준다.
// npm i nodemon concurrently 으로 노데몬 설치
// tutorial에서는 --g 로 글로벌로 설치했다.

// 2. package.json의 script를 수정한다.
// 옵션 변경하기
// ...
// "scripts": {
//     "start:build": "tsc -w",                 // tsc -w : (./src) 의 변경사항을 감시하고 자동으로 컴파일 한다.
//     "start:run": "nodemon build/app.js",
        // ./build에 새 파일이 생성될 때마다 디렉터리에서 자동으로 nodemon build/app.js 으로 실행된다.
//     "start": "concurrently npm:start:*"
        //  "start": "concurrently npm:start:*" 로 시작하는 모든 명령을을 start:build start:run을 동시에 실행한다.
// },
// ...

        // app.js : NodeJs 프로그램이 프로그램의 진입점이 될 것이므로 package.json 파일에서 다음 app.js 옵션도 변경해줘야한다.
        // "main": "index.js" => "main": "app.js"

// 3. 마지막으로 npm start 를 실행한다.


