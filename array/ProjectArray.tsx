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
        "aboutProject" : `Friend는 교내 매칭 서비스를 구현한 웹 사이트입니다.
대학생 IT 연합 동아리 UMC 5기에서 진행한 10인 팀 프로젝트입니다.

교내 매칭 서비스는 대학 행사에서 큰 인기를 얻고 있습니다.
하지만 행사 기간 중으로 참여 기간이 제한되어 있고, 관리자의 부재가 늘 아쉬움으로 남았습니다.

웹 사이트로 구현함으로써 위 문제를 해결하고, 개인 정보, 이상형, 기피 사항을 제공받아 매칭의 만족도를 높였습니다.
또한 공지사항, Q&A, 신고 게시판을 통해 이용과 관리가 편리하게 만들었습니다.`,
        "mainFunction" : `서비스 가입 시 부경대 학생 인증
개인 정보 입력과 수정
이용자의 매칭 신청
매칭 상대 신고
관리자의 가입 신청자 승인
관리자의 이용자 개인 정보 검토 및 매칭
신고 접수 및 처리
게시판 글쓰기`,
        "MyContributions": `<프론트엔드 팀장 역할>
Git을 통한 프론트엔드 코드 관리와 버전 통제
Notion을 통한 개발 진행 상황 관리와 역할 분배
화상 회의를 통한 프로젝트 진행 주도와 개발 방향 피드백

<이용자 신고 기능 담당>
이용자가 매칭 상대를 신고할 수 있도록 신고 대상 목록과 신고 사유 작성 및 제출 기능 구현
관리자가 신고 내역을 모아볼 수 있도록 신고글 게시판 구현
신고글 처리 프로세스와 이용자 경고 기능 구현

<매칭 기능 담당>
관리자의 매칭 신청자 매칭 기능 구현
매칭 완료 내역 조회 기능 구현

<이용자, 가입 신청자, 매칭 신청자 열람 기능 담당>
가입 신청자 목록과 상세 프로필 조회 기능 구현
이용자 목록과 상세 프로필 조회 기능 구현
매칭 신청자 목록과 상세 프로필 조회 기능 구현`,
        "frontEnd" : "react, styled-components, Redux, Axios",
        "deployment" : "netlify",
        "webSite" : {
            "Demo" : "https://dev--rococo-dragon-c69f42.netlify.app/",
            "YouTube" : "https://www.youtube.com/watch?v=jvkPfVLO6fc",
            "YouTubeEmbed" : "https://www.youtube.com/embed/jvkPfVLO6fc",
            "GitHub" : "https://github.com/chr0405/FE?tab=readme-ov-file#yarn-build-fails-to-minify",
        },
        "etc" : {
            "etcName" : "Front-end Notion",
            "etcLink" : "https://bottlenose-barberry-5ba.notion.site/Friend-FE-489356d3cfff48a5ad3682515a3e5a7f",
            "aboutEtc" : "Front-end 팀장으로서 개발 진행 과정 전반을 기록해둔 Notion입니다.",
        }
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
        "capture" : [
            testImg,
            testImg,
            testImg,
            testImg
        ],
        "aboutCapture" : [
            "이 사진은 어떠한 사진",
            "이 사진은 어떠한 사진",
            "이 사진은 어떠한 사진",
            "이 사진은 어떠한 사진",
        ],
        "name" : "test3",
        "period" : "11112233 ~ 11112233",
        "aboutProject" : "어떤 프로젝트인지 설명하는 글입니다. 어떤 프로젝트인지 설명하는 글입니다. 어떤 프로젝트인지 설명하는 글입니다. 어떤 프로젝트인지 설명하는 글입니다. 어떤 프로젝트인지 설명하는 글입니다. 어떤 프로젝트인지 설명하는 글입니다.",
        "mainFunction" : "주요 기능에 대해 설명하는 글입니다. 주요 기능에 대해 설명하는 글입니다. 주요 기능에 대해 설명하는 글입니다. 주요 기능에 대해 설명하는 글입니다.",
        "MyContributions": `프론트엔드 팀장 역할:
Git을 통한 프론트엔드 코드 관리와 버전 통제
Notion을 통한 개발 진행 상황 관리와 역할 분배
화상 회의를 통한 프로젝트 진행 주도와 개발 방향 피드백

이용자 신고 기능 담당:
이용자가 매칭 상대를 신고할 수 있도록 신고 대상 목록과 신고 사유 작성 및 제출 기능 구현
관리자가 신고 내역을 모아볼 수 있도록 신고글 게시판 구현
신고글 처리 프로세스와 이용자 경고 기능 구현

매칭 기능 담당:
관리자의 매칭 신청자 매칭 기능 구현
매칭 완료 내역 조회 기능 구현

이용자, 가입 신청자, 매칭 신청자 열람 기능 담당:
가입 신청자 목록과 상세 프로필 조회 기능 구현
이용자 목록과 상세 프로필 조회 기능 구현
매칭 신청자 목록과 상세 프로필 조회 기능 구현`,
        "frontEnd" : "test, test, test, test",
        "deployment" : "test",
        "webSite" : {
            "Demo" : "https://www.naver.com/",
            "YouTube" : "https://www.naver.com/",
            "GitHub" : "https://www.naver.com/",
        },
        "etc" : {
            "notion" : "notion",
            "notionLink" : "https://www.naver.com/",
            "aboutNotion" : "어떤 기록을 해놓은 노션입니다."
        }
    }, {
        "capture" : [
            testImg,
            testImg,
            testImg,
            testImg
        ],
        "aboutCapture" : [
            "이 사진은 어떠한 사진",
            "이 사진은 어떠한 사진",
            "이 사진은 어떠한 사진",
            "이 사진은 어떠한 사진",
        ],
        "name" : "test4",
        "period" : "11112233 ~ 11112233",
        "aboutProject" : "어떤 프로젝트인지 설명하는 글입니다. 어떤 프로젝트인지 설명하는 글입니다. 어떤 프로젝트인지 설명하는 글입니다. 어떤 프로젝트인지 설명하는 글입니다. 어떤 프로젝트인지 설명하는 글입니다. 어떤 프로젝트인지 설명하는 글입니다.",
        "mainFunction" : "주요 기능에 대해 설명하는 글입니다. 주요 기능에 대해 설명하는 글입니다. 주요 기능에 대해 설명하는 글입니다. 주요 기능에 대해 설명하는 글입니다.",
        "MyContributions": `프론트엔드 팀장 역할:
Git을 통한 프론트엔드 코드 관리와 버전 통제
Notion을 통한 개발 진행 상황 관리와 역할 분배
화상 회의를 통한 프로젝트 진행 주도와 개발 방향 피드백

이용자 신고 기능 담당:
이용자가 매칭 상대를 신고할 수 있도록 신고 대상 목록과 신고 사유 작성 및 제출 기능 구현
관리자가 신고 내역을 모아볼 수 있도록 신고글 게시판 구현
신고글 처리 프로세스와 이용자 경고 기능 구현

매칭 기능 담당:
관리자의 매칭 신청자 매칭 기능 구현
매칭 완료 내역 조회 기능 구현

이용자, 가입 신청자, 매칭 신청자 열람 기능 담당:
가입 신청자 목록과 상세 프로필 조회 기능 구현
이용자 목록과 상세 프로필 조회 기능 구현
매칭 신청자 목록과 상세 프로필 조회 기능 구현`,
        "frontEnd" : "test, test, test, test",
        "deployment" : "test",
        "webSite" : {
            "Demo" : "https://www.naver.com/",
            "YouTube" : "https://www.naver.com/",
            "GitHub" : "https://www.naver.com/",
        },
        "etc" : {
            "notion" : "notion",
            "notionLink" : "https://www.naver.com/",
            "aboutNotion" : "어떤 기록을 해놓은 노션입니다."
        }
    },
];