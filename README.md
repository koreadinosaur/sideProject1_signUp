# sideProject1_signUp v0.1

> 목적 : codestate 복습, github 사용법 공부

## github guide
- project 생성
- milestones 생성
- 이슈 생성
- 작업 실행

## git branch guide
- main : 배포(devlop만 머지 가능)
- develop : 개발(feature만 머지 가능)
- feature : 단위 기능(작업 브랜치)
- hotfix : 긴급 수정

## commit guide
### 타입
- feat : 새로운 기능
- fix : 버그 수정
- docs : 문서 수정
- style : 코드에 영향을 주지 않는 변경(공백, 서식, 세미콜론 누락 등...)
- refactor : 기능을 추가하지 않는 코드 변경
- chore : 빌드 프로세스 또는 도구 및 라이브러리 변경

### 형태
```
[타입] - [이슈번호] : 제목 // 명령문, 끝에 마침표'.' 금지
// 공백
[본문]
```
```
feat - #01 : 로그인 페이지 html, css 추가

시안과 로그인 버튼 색상 다름(기획자와 상의하여 버튼색 변경)
```

## javascript guide
- 블록 들여쓰기 2칸
- 문자 리터럴은 작은따움표'' 사용
- npm prettier 사용
