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
import portfolioProfile from "../img/CHRportfolio/profile.png";
import skill from "../img/CHRportfolio/skill.png";
import project from "../img/CHRportfolio/project.png";
import projectYouTubeEmbed from "../img/CHRportfolio/projectYouTubeEmbed.png";
import projectModal from "../img/CHRportfolio/projectModal.png";

// import dailyControlMain from "../img/DailyControl/dailyControlMain.png";
// import start from "../img/DailyControl/start.jpg";
// import weatherNow from "../img/DailyControl/weatherNow.jpg";
// import dayCounter from "../img/DailyControl/dayCounter.jpg";
// import dayCounter2 from "../img/DailyControl/dayCounter2.jpg";

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
        ],
        "aboutCapture" : [
            "홈 페이지",
            "매칭 신청",
            "매칭 신청 내역 모아보기",
            "매칭",
            "매칭 완료 내역 모아보기",
            "비매너 유저 신고하기 - 신고 대상 목록",
            "비매너 유저 신고하기 - 신고 내용 작성하기",
            "신고 접수 내역 모아보기",
            "신고 접수 내역 자세히 보기",
            "회원 가입 신청 내역 모아보기",
            "회원 목록 보기",
            "이용자 정보 열람",
            "이용자 정보 열람",
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
        "mainFunction" : `✔️ 프론트엔드 팀장으로서 팀 운영
✔️ 이용자 신고 시스템
✔️ 매칭 시스템
✔️ 이용자 정보 열람 시스템`,
        "MyContributions": `✔️ 프론트엔드 팀장으로서 팀 운영
    • 프론트엔드 코드 관리
    • Notion과 Discord를 통한 프로젝트 진행 관리

✔️ 이용자 신고 시스템
    • 매칭 완료된 상대 신고 기능 구현
    • 신고 접수 내역 처리 기능 구현

✔️ 매칭 시스템
    • 매칭 시스템 로직 설계와 구현
    • 완료된 매칭 내역 날짜 별 조회 기능 구현

✔️ 이용자 정보 열람 시스템
    • 가입 신청자, 이용자, 매칭 신청자 목록과 프로필 상세 조회
       기능 구현`,
        "troubleShooting" : `✔️ 문제 :
       매칭 시스템 로직이 미구현으로 일정이 지연된 상황에서,
       문제를 신속히 파악하고 팀 회의를 주도하여 해결책을 제시
✔️ 해결 :
       기능성과 개발 일정을 고려한 매칭 프로세스를 설계하여,
       프로젝트 진행을 정상화하고 일정을 최적화

• 매칭 프로세스 :
    1. 여성 신청자 목록 및 프로필 조회
    2. 여성 신청자 선택
    3. 남성 신청자 목록 표시
    4. 남성 신청자 프로필에서 매칭 선택
    5. 여성 신청자 ID와 남성 신청자 ID를 매칭 API로 전송하여
         매칭 처리

✔️ 결과 :
    • 프로젝트 관리와 문제 해결을 통해 팀과의 협업을
       강화하고, 프로젝트 진행에 기여
    • 매칭 시스템의 완성도를 높이고, 개발 일정을 최적화하여
       성공적인 배포를 달성`,
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
            joinUs,
            joinUs1,
            joinUs2,
            logOut,
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
            "로그인",
            "회원 가입",
            "회원 가입",
            "회원 가입",
            "게시물 피드",
            "게시물 등록",
            "게시물 수정 / 삭제",
            "피드에서 댓글 달기",
            "피드에서 단 댓글 모달에 즉시 반영",
            "유료 구독 시스템",
            "유료 구독 시스템 신청 전",
            "유료 구독 시스템 결제 과정",
            "유료 구독 시스템 신청 후",
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
        "mainFunction" : `✔️ 로그인 & 회원 가입
✔️ 유료 구독 시스템
✔️ 게시글 피드 & 게시글 상세 보기`,
        "MyContributions": `✔️ 로그인 & 회원 가입
    • 로그인 : 
       일반 로그인과 RESTful API를 이용한 kakao 로그인 기능
       구현
    • 회원 가입 : 
       회원 가입 프로세스 설계 및 클라이언트 측 유효성 검사
       구현
    • 토큰 관리 : 
       JWT 액세스 토큰 검증 및 재발급 API를 사용해 토큰 만료
       및 새로 고침 시에도 로그인 상태 유지

✔️ 유료 구독 시스템
    • 포트원(구 아임포트)을 이용해 결제 모듈 생성 및 시스템
       연동
    • 콜백 함수의 반환값을 사용하여 결제 결과에 따라
       완료 / 실패 화면 구현

✔️ 게시글 피드 & 게시글 상세 보기
    • 무한 스크롤 방식으로 게시글 피드 구현
    • 게시물 CRUD(Create, Read, Update, Delete) 기능
       제공
    • 게시물 상세 정보를 모달 형태로 구현
    • 피드에서 댓글 작성 시, 모달에 즉시 반영되도록 처리`,
        "troubleShooting" : `1️⃣ 피드 최신순 정렬 문제 해결

✔️ 문제 :
       페이지네이션 방식으로 데이터를 제공하는 피드 조회
       API에서 첫 페이지가 가장 오래된 게시물을 포함하고 있어,
       최신순으로 피드를 구현하는 데 어려움이 발생함
✔️ 해결 :
       전체 페이지 수를 확인한 후, 마지막 페이지부터 역순으로
       호출하는 로직을 설계하여 최신 게시물이 먼저 표시되도록
       구현

• 전체 페이지 확인 :
   첫 API 호출 시 전체 페이지 수를 확인하는 로직 추가
• 역순 호출 :
   마지막 페이지부터 데이터를 역순으로 호출하여 최신
   게시물이 우선 표시되도록 처리
• 로직 개선 : 
   호출한 데이터를 배열에 저장한 뒤, 최신순으로 정렬하여
   클라이언트에서 처리

✔️ 결과 :
    최신순 피드 구현을 위해 API 호출 방식을 개선하고 데이터를
    효율적으로 처리하여 안정적인 서비스 품질을 제공

2️⃣로그인 오류 메시지 개선

✔️ 문제 :
       로그인 API가 아이디 오류와 비밀번호 오류를 구분하지
       않고 404 상태 코드로 처리하여, 사용자에게 구체적인
       오류 메시지를 제공하지 못함
✔️ 해결 :
       로그인 API 호출 후 404 응답 시 아이디 중복 체크 API를
       추가 호출하여, 오류 메시지를 차별화하고 사용자에게 더
       명확한 피드백을 제공하도록 개선

• 아이디 중복 체크 API 추가 호출 :
   404 응답 시 아이디 중복 체크 API를 호출하여 아이디 오류
   여부를 확인
• 오류 메시지 차별화 :
   아이디 오류와 비밀번호 오류를 구분하여 각각에 맞는 오류
   메시지 제공

✔️ 결과 :
    사용자가 더 직관적으로 로그인 오류를 인식할 수 있도록
    개선하여, 로그인 과정에서 발생할 수 있는 혼란을 최소화`,
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
        ],
        "aboutCapture" : [
            "Intro",
            "Profile",
            "Skill",
            "Project",
            "Project (유튜브 임베디드)",
            "Project Modal",
        ],
        "name" : "CHR portfolio",
        "period" : "2024.04 ~ 2024.06",
        "mainAboutProject" : `CHR portfolio는 프론트엔드 개발자로서의 저를 소개하는 개인 포트폴리오 웹 사이트입니다.`,
        "aboutProject" : `CHR portfolio는 프론트엔드 개발자로서의 저를 소개하는 개인 포트폴리오 웹 사이트입니다.

디자인 기획부터 개발 구현까지 전 과정을 단독으로 수행한 1인 프로젝트입니다.
자기소개, 기술 스택 그리고 참여한 프로젝트 내역이 포함되어 있습니다.
반응형 웹을 고려하여 데스크톱은 물론 휴대폰에서도 최적화된 UX를 제공합니다.`,
        "frontEnd" : `• 언어 : TypeScript
• 프레임워크 : NextJs
• 스타일링 : CSS Modules
• 인프라 : Vercel`,
        "mainFunction" : `✔️ 전체 사이트 디자인
✔️ 소개 섹션 제작
✔️ 섹션 스크롤 이동 기능
✔️ 모달 창 제작`,
        "MyContributions": `✔️ 전체 사이트 디자인
    • Figma를 이용하여 데스크톱과 모바일에 최적화된 반응형
       디자인 제작 및 적용

✔️ 소개 섹션 제작
    • 자기소개와 참여한 프로젝트를 소개하는 섹션 설계 및 구현

✔️ 섹션 스크롤 이동 기능
    • 브라우저 API와 이벤트 리스너를 사용하여 버튼 클릭 시
       부드러운 스크롤 이동과 섹션 별 URL 변경 구현

✔️ 모달 창 제작
    • React Hook과 브라우저 API를 사용하여 프로젝트 세부
       내용을 담은 모달 창 구현`,
        "troubleShooting" : `✔️ 문제 :
       초기 설계에서 섹션 이동을 기본 스크롤과 헤더 메뉴 클릭
       시 스크롤 이동으로 구현했으나, 기본 스크롤 방식은
       단조롭다는 피드백을 받았으며, 헤더 메뉴 클릭 시 정확한
       이동이 되지 않음
✔️ 해결 :
       절대적인 위치로 섹션 스크롤 이동을 구현하고, 상하 이동
       버튼을 추가하여 카드 넘기기 방식으로 섹션 간 이동 방식을
       개선

• 섹션 스크롤 이동 :
    브라우저 API를 활용하여 상대적 이동 방식인
    window.scrollBy에서, 절대적인 위치로 이동하는
    window.scrollTo로 변경하여 정확한 섹션 이동 구현

• 상하 이동 버튼 :
    각 섹션에 useState로 번호를 부여하고, 버튼 클릭 시 현재
    섹션의 번호와 클릭한 버튼의 방향에 따라 목표 섹션명을
    매개변수로 스크롤 이동 함수를 호출하는 방식으로 구현

✔️ 결과 :
    • 섹션 이동 방식을 상하 이동 버튼을 이용한 카드 넘기기
    방식으로 개선함에 따라 자연스러운 전환 효과와 안정적인
    디자인 구현을 위해 각 섹션의 주요 컴포넌트 디자인과
    크기를 재조정
    • 스크롤 이동의 부정확 문제를 수정하고, 사용자 피드백을
    반영하여 섹션 이동 방식을 변경함으로써 사용자 경험 개선을
    성공적으로 이룸`,
    "webSite" : {
            "Demo" : "/",
            "YouTube" : "https://www.youtube.com/watch?v=XhR_4vWfBvo",
            "YouTubeEmbed" : "https://www.youtube.com/embed/XhR_4vWfBvo",
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