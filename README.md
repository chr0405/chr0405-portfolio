# CHR portfolio🌟

 CHR portfolio는 저를 소개하는 개인 포트폴리오 웹 사이트입니다.\
디자인 기획부터 개발 구현까지 전 과정을 단독으로 수행한 1인 프로젝트입니다.\
자기소개, 기술 스택 그리고 참여한 프로젝트 내역이 포함되어 있습니다.\
반응형 웹을 고려하여 데스크톱은 물론 휴대폰에서도 최적화된 UX를 제공합니다.\

 ## 💫Demo
 
Web site : [CHR portfolio](https://chr0405-portfolio.vercel.app/)\
youtube : [시연 연상](https://www.youtube.com/watch?v=XhR_4vWfBvo)

## 🔔개발 기간

2024.04 ~ 2024.06

## 🎁기술 스택
<p>
 <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
 <img src="https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge"/>
 <img src="https://img.shields.io/badge/cssmodules-ffffff?logo=cssmodules&logoColor=000000&style=for-the-badge"/>
</p>

## 🔑주요 기능
🔸 Figma를 이용하여 데스크톱과 휴대폰에 최적화된 반응형 디자인 제작과 적용\
🔸 브라우저 API와 이벤트 리스너를 이용해 버튼 클릭 시 부드러운 스크롤 이동과 섹션 별 URL 변경 구현\
🔸 React Hook과 브라우저 API를 이용하여 모달 창 구현

## 📙파일 구조
```
📁app
  ├── 📁(home)
  │   ├── loading.tsx
  │   │   └── page.tsx
  ├── layout.tsx
  └── not-found.tsx
📁array
  ├── AboutMeAndTechlore.module.css  # profile 페이지 - About me 데이터
  ├── ProjectArray.css  # project 페이지 데이터
  ├── SkillArray.css  # skill 페이지 데이터
  └── TechloreArray.css  # profile 페이지 - Techlore 데이터
📁components
  ├── 📁componentsStyles # components css 파일
  │   ├── AboutMeAndTechlore.module.css  # profile - About me, Techlore css
  │   ├── Footer.module.css  # Footer css
  │   ├── Header.module.css  # Header css
  │   ├── icon.module.css  # skill 페이지 icon css
  │   ├── IndividualProject.module.css  # project 페이지 project css
  │   ├── Intro.module.css  # intro 페이지 css
  │   ├── Profile.module.css  # profile 페이지 css
  │   ├── Project.module.css  # project 페이지 css
  │   ├── ProjectModal.module.css  # project modal css
  │   └── Skill.module.css  # skill 페이지 css
  ├── AboutMe.tsx  # profile 페이지 - About me
  ├── Footer.tsx  # Footer
  ├── Header.tsx  # Header
  ├── IndividualProject.tsx  # project 페이지 projec
  ├── Intro.tsx  # intro 페이지
  ├── Profile.tsx  # profile 페이지
  ├── Project.tsx  # project 페이지
  ├── ProjectModal.tsx  # project modal
  ├── Skill.tsx  # skill 페이지
  ├── SkillIcon.tsx  # skill 페이지 icon
  └── Techlore.tsx  # profile 페이지 - Techlore
📁contexts
  └── PageContext.tsx
📁img  # 이미지 파일 저장 디렉토리
  ├── 📁CHRportfolio  # CHRportfolio 데모 이미지 파일 저장 디렉토리
  ├── 📁DailyControl  # DailyControl 데모 이미지 파일 저장 디렉토리
  ├── 📁Friend  # Friend 데모 이미지 파일 저장 디렉토리
  ├── 📁skillIcon  # skillIcon 데모 이미지 파일 저장 디렉토리
  └── 📁Tnovel  # Tnovel 데모 이미지 파일 저장 디렉토리
📁public
  └── star_favicon.png # 파비콘
📁styles
  └── global.css # 전체 css setting
```
