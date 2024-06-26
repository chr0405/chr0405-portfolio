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
        "num" : 1,
        "mainCapture" : main,
        "capture" : [
            mainCapture,
            matching,
            matching1,
            matching2,
            matching3,
            report,
            report1,
            report2,
            report3,
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
            "매칭 신청 (이용자)",
            "매칭 신청자 모아보기",
            "매칭 신청자 매칭",
            "매칭 완료 내역 조회",
            "비매너 유저 신고하기 - 신고 대상 목록",
            "비매너 유저 신고하기 - 신고 사유 작성",
            "신고글 게시판",
            "신고글 게시판 2",
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
        "mainAboutProject" : `Friend는 UMC 5기에서 10인 팀으로 개발한 교내 매칭 서비스 플랫폼입니다.`,
        "aboutProject" : `Friend는 UMC 5기에서 10인 팀으로 개발한 교내 매칭 서비스 플랫폼입니다.
대학에서 매칭 행사는 항상 인기가 높았지만, 시간적 제약과 지속적인 관리의 어려움이 아쉬움으로 남았습니다.
Friend는 이러한 문제점을 해결하고자 탄생한 웹 기반 솔루션입니다.
언제 어디서나 접근 가능한 플랫폼을 통해 매칭 서비스의 시공간적 한계를 극복하고, 지속적인 운영이 가능하도록 설계되었습니다.`,
        "frontEnd" : `• 언어 : JavaScript
• 프레임워크 : React
• 라이브러리 : styled-components, Redux, Axios
• 인프라 : Netlify`,
        "mainFunction" : `• 부경대 학생 인증 시스템
• 사용자의 프로필 정보를 기반으로 한 매칭 서비스
• 공지사항, 신고 게시판 등 통합 커뮤니케이션 시스템`,
        "MyContributions": `✔️ Front-end 팀장으로서

• Git을 활용한 Front-end 코드의 버전 관리
• Notion을 이용한 개발 진행 상황 추적 및 팀원 간 역할 분배 최적화
• 정기적인 화상 회의를 통한 프로젝트 방향성 제시 및 개발 과정 피드백 조율

✔️ 주요 개발 기능

• 이용자 신고 시스템
⇒ 매칭 상대 신고 기능 : 신고 대상 목록 표시, 신고 사유 작성 및 제출 프로세스
⇒ 관리자용 신고 관리 : 신고글 게시판 구현 및 처리 상태 관리 기능

• 매칭 시스템
⇒ 관리자 매칭 기능 : 이용자 선택 및 매칭 프로세스
⇒ 완료된 매칭 내역 조회

• 사용자 정보 관리 시스템
⇒ 가입 신청자 관리 : 신청 날짜 별 가입 신청자 목록, 프로필 조회 및 가입 승인 or 거절 기능
⇒ 이용자 관리 : 가입 승인 날짜 별 이용자 목록 및 상세 프로필 열람 기능
⇒ 매칭 신청자 관리 : 신청 날짜 별 매칭 신청자 목록, 상세 프로필 열람 기능`,
        "troubleShooting" : `✔️ 관리자 매칭 기능 로직 개선

• 문제 상황 💡:

관리자 매칭 기능의 UI는 완성되었으나, 실제 동작 로직이 미구현 상태였습니다. 이는 프로젝트 관리 과정에서 발생한 문제였습니다.

• 해결 과정 💡:

팀 회의를 통해 상황을 공유했습니다.
사용자 경험 최적화와 개발 기간을 고려한 매칭 프로세스를 설계했습니다 :
1. 여성 신청자 목록 조회
2. 여성 신청자 상세 프로필 조회 (클릭 시)
3. 여성 신청자 선택
4. 남성 신청자 목록 표시
5. 남성 신청자 선택
6. 선택된 두 이용자의 고유 ID를 서버로 전송하여 매칭 처리

설계한 프로세스를 팀에 제안하고, 피드백을 반영하여 최종안을 확정했습니다.

• 결과 💡:

효율적인 매칭 로직 설계와 팀 합의를 통해 기능의 완성도를 높이고 개발 일정을 최적화했습니다.
이 과정에서 프로젝트 관리의 중요성과 문제 해결을 위한 주도적 역할의 가치를 경험했습니다.`,
        "webSite" : {
            "Demo" : "https://dev--rococo-dragon-c69f42.netlify.app/",
            "YouTube" : "https://www.youtube.com/watch?v=jvkPfVLO6fc",
            "YouTubeEmbed" : "https://www.youtube.com/embed/jvkPfVLO6fc",
            "GitHub" : "https://github.com/chr0405/FE?tab=readme-ov-file#yarn-build-fails-to-minify",
        },
    }, {
        "num" : 2,
        "mainCapture" : testImg,
        "capture" : [
            logInTnovel,
            logOut,
            joinUs,
            joinUs1,
            joinUs2,
            feedC,
            feedUD,
            comment,
            comment1,
            subscription,
            subscription1,
            subscription2,
            subscription3,
        ],
        "aboutCapture" : [
            "일반 로그인 & 소셜 로그인",
            "로그아웃",
            "회원 가입 1 (클라이언트 측 유효성 검사)",
            "회원 가입 2 생일 입력",
            "회원 가입 3 이용약관",
            "게시물 등록",
            "게시물 수정 / 삭제",
            "상세 페이지에서의 상태 유지 1 - 피드에서 댓글 달기",
            "상세 페이지에서의 상태 유지 2 - 피드에서 단 댓글 상세 페이지에 즉시 반영",
            "구독 서비스 페이지 1",
            "구독 서비스 페이지 2 구독 신청 전",
            "구독 서비스 페이지 3 구독 결제 과정 (포트원)",
            "구독 서비스 페이지 4 구독 신청 후",
        ],
        "name" : "Tnovel",
        "period" : "2024.03",
        "mainAboutProject" : `Tnovel은 인스타그램에서 영감을 받아 개발된 여행 특화 소셜 네트워크 서비스(SNS)입니다.`,
        "aboutProject" : `Tnovel은 인스타그램에서 영감을 받아 개발된 여행 특화 소셜 네트워크 서비스(SNS)입니다.
Gridge에서 주관한 몰입형 시뮬레이션 챌린지로 진행된 이 프로젝트는 현대 여행자들의 니즈를 충족시키는 플랫폼을 목표로 합니다.
Gridge에서 제공한 화면 설계서, 개발 가이드라인, GUI, 서버 API를 기반으로 구축되었으며, 주어진 챌린지 기간 내에 모든 요구사항을 성공적으로 구현하여 효율적인 프로젝트 관리 능력을 입증했습니다.`,
        "frontEnd" : `• 언어 : TypeScript
• 프레임워크 : React
• 라이브러리 : styled-components, Recoil, Axios
• 인프라 : Vercel
`,
        "mainFunction" : `• 회원 관리 시스템 (회원 가입, 일반 로그인 & 소셜 로그인)
• 포트원을 이용한 구독 서비스 결제 시스템
• 게시물 관리 기능 (등록, 수정, 삭제, 무한 스크롤)
• 사용자 상호작용 기능 (좋아요, 댓글 달기)`,
        "MyContributions": `• 유저 기능 개발
⇒ 회원 가입 프로세스 구현
⇒ 일반 로그인 및 소셜 로그인 기능 개발
⇒ 클라이언트 측 유효성 검사 구현

• 결제 시스템 구현
⇒ 포트원(구 아임포트) 초기화 및 설정
⇒ 구독 서비스 결제 요청 및 처리 로직 개발
⇒ PC 및 모바일 환경에서의 결제 성공 확인 프로세스 구현

• 게시판 기능 개발
⇒ 무한 스크롤을 이용한 피드 구현
⇒ 게시물 등록, 수정, 삭제 기능 개발
⇒ 상세 페이지에서의 상태 유지 로직 구현
⇒ 피드 정렬 및 관리 기능 개발`,
        "troubleShooting" : `✔️ 게시글 최신순 조회 기능 개선

• 문제 상황 💡:

API에서 페이지네이션된 결과만 제공되어 전체 페이지 수를 알 수 없었습니다.
이로 인해 최신순으로 게시글을 조회하는 데 어려움이 있었습니다.

• 해결 과정 💡:

⇒ 최신 게시글 조회를 위한 프로세스 설계 :

1. 첫 API 호출로 전체 페이지 수 확인
2. 마지막 페이지부터 첫 페이지까지 역순으로 조회
3. 각 페이지의 게시글을 최신순으로 정렬하여 리스트에 추가

⇒ 구체적인 구현 단계 :

1. API 호출로 전체 페이지 수 획득
2. 마지막 페이지부터 첫 페이지까지 역순으로 게시글 조회 및 리스트 추가
3. 각 페이지의 게시글 리스트를 역순으로 정렬하여 최종 리스트에 추가

• 결과 💡:

효율적인 최신 게시글 조회 로직을 구현하여 성공적으로 사용자에게 최신 게시글을 제공했습니다.
사용자 경험 개선 및 데이터 조회 최적화를 달성했습니다.
이 과정을 통해 API의 한계를 극복하고 요구사항에 맞는 기능을 구현하는 문제 해결 능력을 향상시켰습니다.

✔️ API 응답 세분화를 통한 로그인 오류 메시지 개선

• 문제 상황 💡:

로그인 API가 아이디 오류와 비밀번호 오류를 구분하지 않고 404 상태 코드로 통합 처리했습니다.
사용자에게 더 명확한 오류 메시지를 제공해야 했습니다.

• 해결 과정 💡:

로그인 실패 시 추가적으로 아이디 중복 확인 API를 활용하는 방안을 고안했습니다 :

1. 로그인 API 호출 후 404 응답 시 아이디 중복 확인 API 추가 호출
2. 아이디 중복 확인 결과에 따라 오류 메시지 차별화
⇒ 중복된 아이디 존재 시 "입력한 사용자 이름을 사용하는 계정을 찾을 수 없습니다. 사용자 이름을 확인하고 다시 시도하세요." 메시지 표시
⇒ 중복된 아이디 없을 시 "잘못된 비밀번호입니다. 다시 확인하세요." 메시지 표시

• 결과 💡:

사용자에게 더 정확하고 유용한 로그인 오류 메시지를 제공했습니다.
기존 API의 한계를 창의적으로 극복하여 사용자 경험을 개선했습니다.
이 경험을 통해 제한된 리소스 내에서 효과적인 해결책을 도출하는 능력을 키웠으며, API 통합과 사용자 중심 설계의 중요성을 깊이 이해하게 되었습니다.`,
        "webSite" : {
            "Demo" : "https://tnovel-three.vercel.app/login",
            "YouTube" : "https://www.youtube.com/watch?v=87onRxoCdH8",
            "YouTubeEmbed" : "https://www.youtube.com/embed/87onRxoCdH8",
            "GitHub" : "https://github.com/chr0405/Gridge-Test-WEB?tab=readme-ov-file",
        },
    },  {
        "num" : 3,
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
        "period" : "2024.04 ~ 2024.06",
        "mainAboutProject" : `CHR portfolio는 저를 소개하는 개인 포트폴리오 웹 사이트입니다.`,
        "aboutProject" : `CHR portfolio는 저를 소개하는 개인 포트폴리오 웹 사이트입니다.
디자인 기획부터 개발 구현까지 전 과정을 단독으로 수행한 1인 프로젝트입니다.
자기소개, 기술 스택 그리고 참여한 프로젝트 내역이 포함되어 있습니다.
반응형 웹을 고려하여 데스크톱은 물론 휴대폰에서도 최적화된 UX를 제공합니다.
미니멀하고 절제된 UI 디자인으로 직관적인 정보 전달과 사용성에 초점을 맞춘 웹 사이트입니다.`,
        "frontEnd" : `• 언어 : TypeScript
• 프레임워크 : NextJs
• 스타일링 : CSS Modules
• 인프라 : Vercel`,
        "mainFunction" : `• 자기소개
• 내 프로필 (개인 정보와 이력 사항 포함)
• 기술 스택 소개
• 참여한 프로젝트 내역 소개
• 프로젝트 세부 내용 확인을 위한 모달 창`,
        "MyContributions": `• 디자인 기획 및 구현
• 휴대폰 반응형 디자인 적용
• 자기소개 (섹션에 애니메이션 효과 적용)
• 프로필, 기술 스택, 프로젝트 내역 섹션 개발
• 프로젝트 세부 내용 확인을 위한 모달 창 구현`,
        "troubleShooting" : `✔️ 휴대폰용 반응형 디자인 적용의 어려움 극복 사례

• 문제 상황 💡:
휴대폰용 반응형 디자인을 구현하는 과정에서 다양한 해상도와 디바이스에 대응하는 반응형 디자인 적용에 어려움을 겪었습니다.

주요 문제점은 다음과 같았습니다:
레이아웃 깨짐
요소 간 겹침
디바이스별 최적화 부족

• 해결 과정 💡:

⇒ vw, vh 단위 활용 :
화면 크기에 따라 동적으로 조절되는 vw, vh 단위 적용
다양한 해상도에서 반복 테스트하며 세부 조정

⇒ 반응형 레이아웃 최적화 :
여러 디바이스와 브라우저에서 지속적인 테스트 진행
뷰포트 크기 변경에 따른 레이아웃 조정 확인 및 수정

• 결과 💡:
다양한 디바이스에서 최적화된 사용자 경험을 제공했습니다.
반응형 디자인 구현 기술에 대한 깊이 있는 이해를 했습니다.
이 경험을 통해 휴대폰 환경에서의 웹 디자인 최적화 중요성을 재확인하고, 관련 기술을 실전에서 적용하는 능력을 키웠습니다.`,
    "webSite" : {
            "Demo" : "/",
            "YouTube" : "https://youtu.be/fh2z5ffxiVk",
            "YouTubeEmbed" : "https://www.youtube.com/embed/fh2z5ffxiVk",
            "GitHub" : "https://github.com/chr0405/chr0405-portfolio.git",
        },
    },
];