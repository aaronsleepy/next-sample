# Next.js 연습용
* 교재: 타입스크립트, 리액트, Next.js로 배우는 실전 웹 애플리케이션 개발
* 챕터: 3장, Next.js
* version: 12.2.2 (최신 버전: 14.0.4)


## 샘플 프로젝트
* 샘플 프로젝트 생성
```shell
$ npx create-next-app@12.2.2  --ts next-sample
```

* 샘플 프로젝트 실행
```shell
$ npm run dev
```

* 샘플 프로젝트 접속: http://localhost:3000


## Dependencies
* styled-components
```shell
$ npm install --save styled-components
$ npm install --save-dev @types/styled-components
```


## 단위 테스트 관련: React Testing Library
### 테스트에 필요한 패키지 설치
```shell
$ npm install --save-dev jest @testing-library/react @testing-library/jest-dom@5.17.0 jest-environment-jsdom
```

### jest.setup.js 설정
```javascript
import '@testing-library/extend-expect'
```

### jest.config.js 설정
```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
    testPathIgnorePatterns: ['<rootDir>/.next/', '/<rootDir>/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jsdom',
}

module.exports = createJestConfig(customJestConfig)
```

### test script 추가
```json
  "scripts": {
    ...
    "test": "jest"
  },
```

### 테스트 실행
```shell
$ npm run test

> next-sample@0.1.0 test
> jest

No tests found, exiting with code 1
Run with `--passWithNoTests` to exit with code 0
In /Users/aaron/Github/Aaron/NextJs/next-sample
  149 files checked.
  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
  testPathIgnorePatterns: /node_modules/, /.next/, /Users/aaron/Github/Aaron/NextJs/next-sample/.next/, //Users/aaron/Github/Aaron/NextJs/next-sample/node_modules/ - 32 matches
  testRegex:  - 0 matches
Pattern:  - 0 matches
```