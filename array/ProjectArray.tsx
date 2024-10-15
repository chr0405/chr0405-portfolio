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

import portfolioMain from "../img/CHRportfolio/portfolioMain.png";
import intro from "../img/CHRportfolio/intro.png";
import introAnimation from "../img/CHRportfolio/introAnimation.png";
import portfolioProfile from "../img/CHRportfolio/profile.png";
import skill from "../img/CHRportfolio/skill.png";
import project from "../img/CHRportfolio/project.jpg";
import projectYouTubeEmbed from "../img/CHRportfolio/projectYouTubeEmbed.jpg";
import projectModal1 from "../img/CHRportfolio/projectModal1.jpg";
import projectModal2 from "../img/CHRportfolio/projectModal2.jpg";
import projectModal3 from "../img/CHRportfolio/projectModal3.jpg";
import projectModalYouTubeEmbed from "../img/CHRportfolio/projectModalYouTubeEmbed.jpg";

import dailyControlMain from "../img/DailyControl/dailyControlMain.png";
import start from "../img/DailyControl/start.jpg";
import weatherNow from "../img/DailyControl/weatherNow.jpg";
import dayCounter from "../img/DailyControl/dayCounter.jpg";
import dayCounter2 from "../img/DailyControl/dayCounter2.jpg";

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

대학에서 매칭 행사는 항상 인기가 높았지만, 시간적 제약과 지속적인 관리의 어려움이 늘 아쉬움으로 남았습니다.
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

팀 회의를 통해 상황을 공유했습니다. 그 후 설계한 프로세스를 제안하고, 피드백을 반영하여 최종안을 확정했습니다.

사용자 경험 최적화와 개발 기간을 고려한 매칭 프로세스를 설계했습니다 :
1. 여성 신청자 목록 조회
2. 여성 신청자 상세 프로필 조회 (클릭 시)
3. 여성 신청자 선택
4. 남성 신청자 목록 표시
5. 남성 신청자 선택
6. 선택된 두 이용자의 고유 ID를 서버로 전송하여 매칭 처리

• 결과 & 느낀점 💡:

효율적인 매칭 로직 설계와 팀 합의를 통해 기능의 완성도를 높이고 개발 일정을 최적화했습니다.
이 과정에서 프로젝트 관리의 중요성과 주도적으로 문제를 해결하는 역할이 프로젝트의 성공에 미치는 가치를 경험했습니다.`,
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
• 포트원 (구 아임포트)를 이용한 구독 서비스 결제 시스템
• 게시물 관리 기능 (CRUD, 무한 스크롤)`,
        "MyContributions": `• 유저 기능
⇒ 회원 가입 프로세스와 클라이언트 측 유효성 검사 구현
⇒ 일반 로그인과 RESTful API를 이용한 카카오톡 로그인 기능 구현
⇒ JWT 액세스 토큰을 검증하고 새로 발급하는 API를 이용해 토큰 만료, 새로 고침 시에도 로그인 상태 유지 기능 구현

• 결제 기능
⇒ 포트원 (구 아임포트)를 통해 결제 모듈을 생성하고, 이를 시스템에 연동하여 결제 화면 구현
⇒ PC 환경에서 콜백 함수의 반환값을 이용해 결제 결과에 따라 완료 / 실패 화면 구현

• 게시판 기능
⇒ 무한 스크롤 방식의 피드 구현
⇒ 게시물 CRUD(Create, Read, Update, Delete) 기능 구현
⇒ 게시물을 자세히 보여주는 기능 모달로 구현
⇒ 피드에서 댓글 작성 시, 모달을 열었을 때 해당 댓글이 즉시 반영되도록 구현`,
        "troubleShooting" : `✔️ 게시글 최신순 조회 기능 개선

• 문제 상황 💡:

페이지네이션 방식으로 데이터를 제공하는 피드 조회 API에서 첫 페이지가 가장 오래된 게시물을 포함하고 있어 최신순으로 피드를 구현하는 데 어려움이 있었습니다

• 해결 과정 💡:

⇒ 게시글 최신순 조회를 위한 프로세스 설계 :

1. 첫 API 호출로 전체 페이지 수 확인
2. 마지막 페이지부터 첫 페이지까지 역순으로 조회
3. 각 페이지의 게시글을 최신순으로 정렬하여 리스트에 추가

• 결과 & 느낀점 💡:

효율적인 게시글 최신순 조회 로직을 통해 성공적으로 사용자에게 게시글을 최신순으로 제공하며 사용자 경험 개선과 데이터 조회 최적화를 달성했습니다.
이 과정에서 API를 효과적으로 응용하여 요구사항에 맞는 기능을 구현하는 문제해결능력을 갖출 수 있었습니다.

✔️ API 응답 세분화를 통한 로그인 오류 메시지 개선

• 문제 상황 💡:

로그인 API가 아이디 오류와 비밀번호 오류를 구분하지 않고 404 상태 코드로 처리하여 사용자에게 구체적인 오류 메시지를 제공하지 못했습니다.
사용자에게 더 명확한 오류 메시지를 제공하기 위해서는 해결 방안이 필요했습니다.

• 해결 과정 💡:

로그인 실패 시 추가적으로 아이디 중복 확인 API를 추가로 호출하는 방안을 고안했습니다 :

1. 로그인 API 호출 후 404 응답 시 아이디 중복 확인 API 추가 호출
2. 아이디 중복 확인 결과에 따라 오류 메시지 차별화
⇒ 중복된 아이디 존재 시 "입력한 사용자 이름을 사용하는 계정을 찾을 수 없습니다. 사용자 이름을 확인하고 다시 시도하세요." 메시지 표시
⇒ 중복된 아이디 없을 시 "잘못된 비밀번호입니다. 다시 확인하세요." 메시지 표시

• 결과 & 느낀점 💡:

사용자에게 더 구체적인 로그인 오류 메시지를 제공했습니다.
이 경험을 통해 제한된 리소스 내에서 효과적인 해결책을 도출하는 능력을 키우며, API 통합과 사용자 중심 설계의 중요성을 깊이 이해했습니다.`,
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
            introAnimation,
            portfolioProfile,
            skill,
            project,
            projectYouTubeEmbed,
            projectModal1,
            projectModal2,
            projectModal3,
            projectModalYouTubeEmbed,
        ],
        "aboutCapture" : [
            "자기소개",
            "자기소개 애니메이션",
            "내 프로필",
            "기술 스택",
            "참여한 프로젝트 내역",
            "참여한 프로젝트 내역 (유튜브 임베디드)",
            "프로젝트 세부 내용 모달 1",
            "프로젝트 세부 내용 모달 2",
            "프로젝트 세부 내용 모달 3",
            "프로젝트 세부 내용 모달 (유튜브 임베디드)",
        ],
        "name" : "CHR portfolio",
        "period" : "2024.04 ~ 2024.06",
        "mainAboutProject" : `CHR portfolio는 프론트엔드 개발자로서의 저를 소개하는 개인 포트폴리오 웹 사이트입니다.`,
        "aboutProject" : `CHR portfolio는 프론트엔드 개발자로서의 저를 소개하는 개인 포트폴리오 웹 사이트입니다.

디자인 기획부터 개발 구현까지 전 과정을 단독으로 수행한 1인 프로젝트입니다.
자기소개, 기술 스택 그리고 참여한 프로젝트 내역이 포함되어 있습니다.
반응형 웹을 고려하여 데스크톱은 물론 휴대폰에서도 최적화된 UX를 제공합니다.
미니멀하고 절제된 UI 디자인으로 직관적인 정보 전달에 초점을 맞춘 웹 사이트입니다.`,
        "frontEnd" : `• 언어 : TypeScript
• 프레임워크 : NextJs
• 스타일링 : CSS Modules
• 인프라 : Vercel`,
        "mainFunction" : `• 자기소개
• 내 프로필 (개인 정보와 이력 사항)
• 기술 스택 소개
• 참여한 프로젝트 내역 소개
• 프로젝트 세부 내용 확인을 위한 모달 창`,
        "MyContributions": `• 데스크톱과 휴대폰에 최적화된 UX를 제공을 위해 반응형 디자인 제작과 적용
• 가시적인 정보 전달을 목적으로 ‘useState’와 애니메이션 효과를 적용한 스위치를 통한 정보 전환 기능 구현
• ‘window.scrollBy’를 응용해 헤더  내에 있는 페이지명에서 클릭한 페이지로 부드러운 스크롤 이동 구현. 브라우저 API와 이벤트 리스너를 이용해 현재 페이지를 추적, 이에 따른 반응형 디자인 구현
• React의 ‘useState’, ‘useEffect', Next.js의 ‘usePathname', 그리고 브라우저의 ‘window.history.pushState'를 사용하여 모달 창 구현과 페이지 상태 관리`,
        "troubleShooting" : `✔️ 페이지 스크롤 이동과 현재 페이지명 강조 기능 최적화

• 문제 상황 💡:

헤더 내에서 각 페이지명을 클릭할 시 해당 페이지로 스크롤 이동하는 기능과 현재 페이지명을 강조하는 기능을 구현했습니다.
그러나 스크롤 이동 시 다른 페이지명이 강조되는 불일치가 발생했습니다.
이는 사용자가 실제 보고 있는 페이지와 헤더 상태의 불일치로 혼란을 야기할 수 있었습니다.

• 해결 과정 💡:

문제 해결을 위해 스크롤 이동 함수를 개선했습니다.
offset 값을 매개변수로 추가하고, ‘window.scrollBy’ 메서드를 사용하여 페이지 이동 시 offset 값이 적용된 위치로 이동하도록 구현했습니다.
이벤트 리스너를 사용해 스크롤 이동 함수 호출 시 offset값을 페이지명마다 다르게 적용하며 현재 페이지명 강조 기능의 정확도를 높였습니다.

• 결과 & 느낀점 💡:

스크롤 이동한 페이지와 강조 디자인이 적용된 페이지명 간의 일치성을 확보했습니다.
결과적으로 사용자 경험을 개선하고 더욱 직관적인 인터페이스를 제공할 수 있었습니다.
JavaScrip를 바탕으로 동적 페이지 조작 기술을 체득하며 프론트엔드의 정교한 개발이 프로젝트의 기능성과 완성도에 미치는 영향을 깊이 깨달았습니다.

✔️ 휴대폰용 반응형 디자인 적용의 어려움 극복

• 문제 상황 💡:
휴대폰용 반응형 디자인을 구현하는 과정에서 다양한 해상도와 디바이스에 대응하는 반응형 디자인 적용에 어려움을 겪었습니다.

주요 문제점은 다음과 같았습니다:
요소 간 겹침
디바이스별 최적화 부족
이미지 파일마다 사이즈가 달라서 보기 좋지 않음

• 해결 과정 💡:

⇒ vw, vh 단위 활용 :
화면 크기에 따라 동적으로 조절되는 vw, vh 단위 적용
다양한 해상도에서 반복 테스트하며 세부 조정

⇒ 이미지 사이즈 최적화:
이미지 파일마다 사이즈가 달라서 보기 좋지 않음
CSS로 'object-fit: contain' 속성을 사용하여 이미지 사이즈 문제 해결
이 속성을 통해 이미지가 잘리지 않고 원본 비율을 유지하면서 컨테이너에 맞게 조절됨

• 결과 & 느낀점 💡:
다양한 디바이스에서 최적화된 사용자 경험을 제공했습니다.
반응형 디자인 구현 기술에 대한 깊이 있는 이해를 했습니다.
이미지 사이즈 문제도 해결하여 더욱 일관성 있는 디자인을 제공할 수 있었습니다.
휴대폰 환경에서의 웹 디자인 최적화를 경험하며 관련 기술을 실전에서 적용하는 능력을 키웠습니다.`,
    "webSite" : {
            "Demo" : "/",
            "YouTube" : "https://www.youtube.com/watch?v=DI688JuqPYI",
            "YouTubeEmbed" : "https://www.youtube.com/embed/DI688JuqPYI",
            "GitHub" : "https://github.com/chr0405/chr0405-portfolio.git",
        },
    },
//     {
//         "num" : 4,
//         "mainCapture" : dailyControlMain,
//         "capture" : [
//             start,
//             dayCounter,
//             dayCounter2,
//             weatherNow,
//         ],
//         "aboutCapture" : [
//             "시작 화면",
//             "DayCounter & CounterLog 1 (기념일 선택)",
//             "DayCounter & CounterLog 2 (날짜 직접 입력)",
//             "WeatherNow (지역별 오늘 날씨)",
//         ],
//         "name" : "DailyControl",
//         "period" : "2023.06, 2024.07",
//         "mainAboutProject" : `DailyControl은 D-day 계산 기능과 지역별 날씨 정보를 제공하는 웹 사이트입니다.`,
//         "aboutProject" : `DailyControl은 D-day 계산 기능과 지역별 날씨 정보를 제공하는 웹 사이트입니다.
// 프론트엔드 개발자를 목표로 공부를 시작하며 처음 만들었던 D-day 계산기 웹 사이트를 수정, 보완했습니다.

// 주요 목표는 실무에 가까운 웹 개발 경험을 쌓는 것과 함께, 기존 D-day 웹 사이트들의 사용자 경험을 개선하는 것이었습니다.
// 날짜 수와 D-day를 명확히 구분하고, 간결하면서도 직관적인 디자인을 적용해 정보의 가독성을 높였습니다.
// 이를 통해 사용자의 혼란을 줄이고 더 나은 경험을 제공하고자 했습니다.

// 프로젝트를 수정하고 보완하는 과정에서 D-day 계산 로직을 더욱 정확하고 효율적으로 개선했습니다.
// 또한 사용자의 검색 기록을 관리하는 시스템을 구현하여 편의성을 향상시키고, 지역별 실시간 날씨 정보를 제공하는 기능을 새롭게 추가하여 서비스의 가치를 높였습니다.`,
//         "frontEnd" : `• 언어 : JavaScript
// • 마크업 : HTML5
// • 스타일링 : CSS3
// • 인프라 : Vercel`,
//         "mainFunction" : `• 지역별 날씨 정보 제공 (WeatherNow)
// • 선택한 날짜의 남은 / 지난 날짜 수 및 D-day 계산 (DayCounter)
// • 사용자의 웹 사이트 이용 기록 시각화 (CounterLog)`,
//         "MyContributions": `• OpenWeather API를 이용한 대한민국 지역별 기온, 날씨 정보 제공
// • 주요 기념일 버튼 클릭, 특정 날짜 선택 시 남은 / 지난 날짜 수 및 D-day 계산
// • Local storage를 이용한 DayCounter 이용 기록 시각화`,
//         "troubleShooting" : `✔️ 잘못된 D-day 계산 로직 수정

// • 문제 상황 💡:

// 날짜 비교 과정에서 오류가 발생했습니다.
// 예를 들어, N월 1일에 사용자가 N월 2일을 선택했음에도 D-Day가 "Today"로 표시되었고, 이용 기록에는 N월 1일 선택으로 잘못 저장되었습니다.

// • 문제 원인 💡:

// JavaScript의 Date 객체와 시간대 처리 방식으로 인해 문제가 발생했습니다.
// 현재 날짜(currentKoreaTime)는 한국 시간(UTC+9)으로 설정된 반면, 사용자가 선택한 날짜(selectedDate)는 HTML input 요소를 통해 UTC 기준으로 해석되었습니다.
// 이로 인해 두 날짜가 서로 다른 시간대를 기준으로 비교되어 정확한 계산이 이루어지지 않았습니다.

// • 해결 과정 💡:

// 문제 해결을 위해 날짜 비교 기준을 일원화했습니다.
// 현재 날짜와 사용자 선택 날짜를 모두 UTC 기준으로 변환하여 비교하도록 함수를 수정했습니다.
// 그 후 Date 객체의 getUTCFullYear(), getUTCMonth(), getUTCDate() 메서드를 활용하여 정확한 날짜 비교가 가능하도록 했습니다.

// • 결과 & 느낀점 💡:

// JavaScript의 Date 객체와 시간대 처리에 대한 이해가 깊어졌습니다.
// 특히 웹 사이트에서 시간대 관리의 중요성을 실감했고, UTC와 로컬 시간의 차이, 그리고 이를 다루는 Date 객체의 다양한 메서드 활용법을 익혔습니다.
// 또한, 일관된 시간대 처리가 코드의 가독성과 유지보수성 향상에 미치는 영향을 체감했습니다.`,
//     "webSite" : {
//             "Demo" : "https://daily-control.vercel.app",
//             "YouTube" : "https://www.youtube.com/watch?v=5FmfYGDka5I",
//             "YouTubeEmbed" : "https://www.youtube.com/embed/5FmfYGDka5I",
//             "GitHub" : "https://github.com/chr0405/DailyControl.git",
//         },
//     },
];