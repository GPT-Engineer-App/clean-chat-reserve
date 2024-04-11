# clean-chat-reserve

1. 고객 앱 기능:
A. 회원가입 및 로그인:
전화번호와 위치 기반 등록으로 간소화된 회원가입 및 로그인 프로세스 구현.
전화번호 인증을 통한 로그인 절차 구현.
B. 대화형 상담을 통한 예약:
사용자가 대화형 인터페이스를 통해 청소 서비스를 요청할 수 있게 함.
AI 채팅봇 또는 대화형 인터페이스를 통해 예약 정보 수집.
C. 위치 기반 서비스:
고객의 현재 위치를 기반으로 청소 서비스 제공.
2. 청소 매니저 앱 기능:
A. 회원가입:
전화번호, 사업자 등록증, 위치 정보 입력을 통한 회원가입 프로세스 구현.
전화번호 인증을 통한 로그인 절차 구현.
B. 서비스 요청 수신 및 견적 제출:
설정된 위치 기반으로 서비스 요청을 수신할 수 있는 기능.
고객의 요청에 대해 견적을 제출하고, 일정 금액을 받는 시스템 구현.
C. 푸시 알림:
새로운 서비스 요청에 대한 푸시 알림 수신 기능.
3. 백엔드 (Python):
A. 사용자 관리:
고객과 청소 매니저의 회원가입 및 로그인 정보 관리.
전화번호 인증 시스템 구현.
B. 예약 및 대화 시스템:
대화형 상담 로그와 예약 데이터 관리.
AI 채팅봇 또는 대화형 시스템과의 통합.
C. 위치 기반 매칭 시스템:
고객의 위치와 가까운 청소 매니저를 매칭하는 로직 구현.
D. 푸시 알림 시스템:
견적 요청에 대한 푸시 알림 시스템 구현.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/clean-chat-reserve.git
cd clean-chat-reserve
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
