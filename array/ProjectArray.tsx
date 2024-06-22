import main from "../img/Friend/main.png";
import mainCapture from "../img/Friend/mainCapture.jpg";
import report from "../img/Friend/report.jpg";
import report1 from "../img/Friend/report1.jpg";
import report2 from "../img/Friend/report2.jpg";
import report3 from "../img/Friend/report3.jpg";
import matching from "../img/Friend/matching.jpg";
import matching1 from "../img/Friend/matching1.jpg";
import matching2 from "../img/Friend/matching2.jpg";
import matching3 from "../img/Friend/matching3.jpg";
import userList from "../img/Friend/userList.jpg";
import joinList from "../img/Friend/joinList.jpg";
import profile from "../img/Friend/profile.jpg";
import profile1 from "../img/Friend/profile1.jpg";
import logIn from "../img/Friend/logIn.jpg";
import mypage from "../img/Friend/mypage.jpg";
import userInfo from "../img/Friend/userInfo.jpg";

import testImg from "../img/testImg.png";
import logInTnovel from "../img/Tnovel/logIn.jpg";
import logOut from "../img/Tnovel/logOut.jpg";
import joinUs from "../img/Tnovel/joinUs.jpg";
import joinUs1 from "../img/Tnovel/joinUs1.jpg";
import joinUs2 from "../img/Tnovel/joinUs2.jpg";
import subscription from "../img/Tnovel/subscription.jpg";
import subscription1 from "../img/Tnovel/subscription1.jpg";
import subscription2 from "../img/Tnovel/subscription2.jpg";
import subscription3 from "../img/Tnovel/subscription3.jpg";
import feedC from "../img/Tnovel/feedC.jpg";
import feedUD from "../img/Tnovel/feedUD.jpg";
import comment from "../img/Tnovel/comment.jpg";
import comment1 from "../img/Tnovel/comment1.jpg";
import mobileView from "../img/Tnovel/mobileView.jpg";

import portfolioMain from "../img/CHRportfolio/portfolioMain.png";
import intro from "../img/CHRportfolio/intro.png";
import portfolioProfile from "../img/CHRportfolio/profile.png";
import skill from "../img/CHRportfolio/skill.png";
import project from "../img/CHRportfolio/project.png";
import projectYouTubeEmbed from "../img/CHRportfolio/projectYouTubeEmbed.png";
import projectModal from "../img/CHRportfolio/projectModal.png";
import projectModalYouTubeEmbed from "../img/CHRportfolio/projectModalYouTubeEmbed.png";

export const ProjectArray = [
    {
        "mainCapture" : main,
        "capture" : [
            mainCapture,
            report,
            report1,
            report2,
            report3,
            matching,
            matching1,
            matching2,
            matching3,
            joinList,
            userList,
            profile,
            profile1,
            logIn,
            mypage,
            userInfo,
        ],
        "aboutCapture" : [
            "홈 페이지",
            "비매너 유저 신고하기 - 신고 대상 목록",
            "비매너 유저 신고하기 - 신고 사유 작성",
            "신고글 게시판",
            "신고글 게시판 2",
            "매칭 신청 (이용자)",
            "매칭 신청자 모아보기",
            "매칭 신청자 매칭",
            "매칭 완료 내역 조회",
            "가입 신청자 목록",
            "이용자 목록",
            "상세 프로필 조회",
            "상세 프로필 조회 2",
            "로그인 / 회원 가입",
            "마이 페이지",
            "개인 정보 수정",
        ],
        "name" : "Friend",
        "period" : "2024.01 ~ 2024.02",
        "aboutProject" : `Friend는 UMC 5기에서 10인 팀으로 개발한 교내 매칭 서비스 플랫폼입니다.
대학에서 매칭 행사는 항상 인기가 높았지만, 시간적 제약과 지속적인 관리의 어려움이 아쉬움으로 남았습니다.
Friend는 이러한 문제점을 해결하고자 탄생한 웹 기반 솔루션입니다.
언제 어디서나 접근 가능한 플랫폼을 통해 매칭 서비스의 시공간적 한계를 극복하고, 지속적인 운영이 가능하도록 설계되었습니다.`,
        "mainFunction" : `1. 부경대 학생 인증 시스템
2. 사용자의 프로필 정보를 기반으로 한 매칭 서비스
3. 공지사항, 신고 게시판 등 통합 커뮤니케이션 시스템`,
        "MyContributions": `Front-end 팀장으로서
1. Git을 활용한 Front-end 코드의 버전 관리
2. Notion을 이용한 개발 진행 상황 추적 및 팀원 간 역할 분배 최적화
3. 정기적인 화상 회의를 통한 프로젝트 방향성 제시 및 개발 과정 피드백 조율
주요 개발 기능
1. 이용자 신고 시스템
- 매칭 상대 신고 기능 : 신고 대상 목록 표시, 신고 사유 작성 및 제출 프로세스
- 관리자용 신고 관리 : 신고글 게시판 구현 및 처리 상태 관리 기능
2. 매칭 시스템
- 관리자 매칭 기능 : 이용자 선택 및 매칭 프로세스
- 완료된 매칭 내역 조회
3. 사용자 정보 관리 시스템
- 가입 신청자 관리 : 신청 날짜 별 가입 신청자 목록, 프로필 조회 및 가입 승인 or 거절 기능
- 이용자 관리 : 가입 승인 날짜 별 이용자 목록 및 상세 프로필 열람 기능
- 매칭 신청자 관리 : 신청 날짜 별 매칭 신청자 목록, 상세 프로필 열람 기능`,
        "troubleShooting" : `관리자 매칭 기능 로직 개선

문제 상황:
관리자 매칭 기능의 UI는 완성되었으나, 실제 동작 로직이 미구현 상태였습니다. 이는 프로젝트 관리 과정에서 발생한 문제였습니다.

해결 과정:
팀 회의를 통해 상황을 공유했습니다.
사용자 경험 최적화와 개발 기간을 고려한 매칭 프로세스를 설계했습니다:
여성 신청자 목록 조회
여성 신청자 상세 프로필 조회 (클릭 시)
여성 신청자 선택
남성 신청자 목록 표시
남성 신청자 선택
선택된 두 이용자의 고유 ID를 서버로 전송하여 매칭 처리

설계한 프로세스를 팀에 제안하고, 피드백을 반영하여 최종안을 확정했습니다.

결과:
효율적인 매칭 로직 설계와 팀 합의를 통해 기능의 완성도를 높이고 개발 일정을 최적화했습니다.
이 과정에서 프로젝트 관리의 중요성과 문제 해결을 위한 주도적 역할의 가치를 경험했습니다.`,
        "frontEnd" : "react, styled-components, Redux, Axios",
        "deployment" : "netlify",
        "webSite" : {
            "Demo" : "https://dev--rococo-dragon-c69f42.netlify.app/",
            "YouTube" : "https://www.youtube.com/watch?v=jvkPfVLO6fc",
            "YouTubeEmbed" : "https://www.youtube.com/embed/jvkPfVLO6fc",
            "GitHub" : "https://github.com/chr0405/FE?tab=readme-ov-file#yarn-build-fails-to-minify",
        },
    }, {
        "mainCapture" : testImg,
        "capture" : [
            logInTnovel,
            logOut,
            joinUs,
            joinUs1,
            joinUs2,
            subscription,
            subscription1,
            subscription2,
            subscription3,
            feedC,
            feedUD,
            comment,
            comment1,
            mobileView,
        ],
        "aboutCapture" : [
            "일반 로그인 & 소셜 로그인",
            "로그아웃",
            "회원 가입 1 (클라이언트 측 유효성 검사)",
            "회원 가입 2 생일 입력",
            "회원 가입 3 이용약관",
            "구독 서비스 페이지 1",
            "구독 서비스 페이지 2 구독 신청 전",
            "구독 서비스 페이지 3 구독 결제 과정 (포트원)",
            "구독 서비스 페이지 4 구독 신청 후",
            "게시물 등록",
            "게시물 수정 / 삭제",
            "상세 페이지에서의 상태 유지 1 - 피드에서 댓글 달기",
            "상세 페이지에서의 상태 유지 2 - 피드에서 단 댓글 상세 페이지에 즉시 반영",
            "피드 반응형 웹",
        ],
        "name" : "Tnovel",
        "period" : "2024.03",
        "aboutProject" : `Tnovel은 인스타그램을 모티브로 한 여행 기록용 SNS입니다.
Gridge에서 주관한 몰입 시뮬레이션 챌린지로 진행한 프로젝트입니다.

Gridge에서 화면 설계서와 개발 가이드라인, GUI, 서버 API를 제공받았습니다.
이를 이용해 챌린지 기간 내에 주어진 요구사항을 모두 구현한 프로젝트입니다.`,
        "mainFunction" : `<유저 Map>
회원 가입
일반 로그인 & 소셜 로그인

<결제 Map>
포트원 (구 아임포트)를 이용한 구독 서비스 결제

<게시판 Map>
피드 관리
게시물 등록 & 수정 & 삭제
타 이용자의 게시물 좋아요, 댓글 달기`,
        "MyContributions": `<유저 Map>
회원 가입 프로세스
회원 가입 단계 이동 시 정보 유지
일반 로그인 & 소셜 로그인
회원 가입, 로그인 시 클라이언트 측 유효성 검사

<결제 Map>
포트원 (구 아임포트) 초기화 & 설정
구독 서비스 결제 요청 및 처리
PC 환경에서 콜백 함수를 통해 결제 성공을 확인
모바일 환경에서 리다이렉션 경로로 이동해 결제 성공을 확인

<게시판 Map>
게시물 무한 스크롤
상세 페이지에서의 상태 유지
게시물 등록 & 수정 & 삭제
피드 정렬 & 관리
반응형 웹 디자인`,
        "frontEnd" : "react, TypeScript, styled-components, Recoil, Axios",
        "deployment" : "Vercel",
        "webSite" : {
            "Demo" : "https://tnovel-three.vercel.app/login",
            "YouTube" : "https://www.youtube.com/watch?v=87onRxoCdH8",
            "YouTubeEmbed" : "https://www.youtube.com/embed/87onRxoCdH8",
            "GitHub" : "https://github.com/chr0405/Gridge-Test-WEB?tab=readme-ov-file",
        },
    },  {
        "mainCapture" : portfolioMain,
        "capture" : [
            intro,
            portfolioProfile,
            skill,
            project,
            projectYouTubeEmbed,
            projectModal,
            projectModalYouTubeEmbed,
        ],
        "aboutCapture" : [
            "자기소개",
            "내 프로필",
            "기술 스택",
            "참여한 프로젝트 내역",
            "참여한 프로젝트 내역 (유튜브 임베디드)",
            "프로젝트 세부 내용 모달",
            "프로젝트 세부 내용 모달 (유튜브 임베디드)",
        ],
        "name" : "CHR portfolio",
        "period" : "2024.04 ~ 2024.05",
        "aboutProject" : `저를 소개하는 포트폴리오 웹 사이트입니다.

디자인 기획부터 개발 구현까지 전 과정을 단독으로 수행한 1인 프로젝트입니다.
자기소개, 기술 스택 그리고 참여한 프로젝트 내역이 포함되어 있습니다.

디자인 단계에서 반응형 웹을 고려하여 데스크톱은 물론 모바일에서도 최적화된 UX를 제공합니다.
미니멀하고 절제된 UI 디자인으로 직관적인 정보 전달과 사용성에 초점을 맞춘 웹 사이트입니다.`,
        "mainFunction" : `디자인 기획
자기소개
내 프로필 (개인 정보와 이력 사항 포함)
기술 스택
참여한 프로젝트 내역`,
        "MyContributions": `디자인 기획
모바일 반응형 디자인 적용으로 다양한 화면 크기에 최적화된 UX 제공
자기소개, 애니메이션 효과 적용
내 프로필 (개인 정보와 이력 사항 포함)
기술 스택
참여한 프로젝트 내역
프로젝트 세부 내용 확인을 위한 모달 창`,
        "frontEnd" : "TypeScript, NextJs, CSS Modules",
        "deployment" : "Vercel",
        "webSite" : {
            "Demo" : "/",
            "YouTube" : "https://youtu.be/fh2z5ffxiVk",
            "YouTubeEmbed" : "https://www.youtube.com/embed/fh2z5ffxiVk",
            "GitHub" : "https://github.com/chr0405/chr0405-portfolio.git",
        },
    },
];