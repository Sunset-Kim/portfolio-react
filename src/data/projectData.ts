export type keyword = 'react'|'react-native' | 'typescript' | 'javascript' | 'jquery' | 'html' | 'sass' | 'css';

export interface project {
  id: number;
  title: string;
  subtitle?: string;
  desc: string;
  thumbnail?: string;
  url: string[];
  github?: string
  keywords: keyword[];
  video?: string
}

const projectData: project[] = [
  {
    id: 20210705,
    title: "국제백신연구소\n한국후원회\n웹사이트",
    subtitle: "반응형페이지 크로스브라우징",
    desc: "고정형 admin페이지와 반응형 사용자페이지 개발 및 크로스브라우징 전체. 프론트단 전체 개발",
    thumbnail: "./images/project/ivi.png",
    url: ["https://www.ivisupport.or.kr"],
    keywords: ['html', 'jquery', 'sass']
  },
  {
    id: 20210618,
    title: "선한영향력가게",
    subtitle: "반응형페이지 크로스브라우징",
    desc: "고정형 admin페이지와 반응형 사용자페이지 개발 및 크로스브라우징 전체. 프론트단 전체 개발",
    thumbnail: "./images/project/goodstore.png",
    url: ["https://선한영향력가게.com"],
    keywords: ['html', 'jquery', 'sass']
  },
  {
    id: 20210628,
    title: "네이버 해피빈",
    subtitle: "적응형페이지 크로스브라우징",
    desc: "네이버 해피빈 이벤트 페이지 다수 제작. 퍼블리싱 및 스크립트 작업",
    thumbnail: "./images/project/happybean.png",
    url: [
      "https://campaign.happybean.naver.com/campaign/give/ecensus",
      "https://campaign.happybean.naver.com/campaign/give/2021zeroenergybuilding",
      "https://happybean.naver.com/campaign/etechhive",
      "https://campaign.happybean.naver.com/campaign/give/iskwomancare",
      "https://campaign.happybean.naver.com/campaign/give/dreamgream",
      "https://campaign.happybean.naver.com/campaign/give/2021withibk",
      "https://campaign.happybean.naver.com/campaign/give/2021pampersclub",
      "https://happybean.naver.com/campaign/kcgp",
    ],
    keywords: ['html', 'jquery', 'sass']
  },
  {
    id: 20210908,
    title: "세이브더칠드런\n캠페인",
    subtitle: "적응형페이지 크로스브라우징",
    desc: "세이브더칠드런 pc용 스크롤 애니메이션 페이지 제작, 템플릿 페이지 제작 및 코드설계",
    video: "./images/project/svc.mp4",
    url: ["https://happybean.naver.com/campaign/etechhive"],
    keywords: ['html', 'javascript', 'sass']
  },
  {
    id: 20210701,
    title: "기부플랫폼\n바스켓",
    subtitle: "모바일웹",
    desc: "유지보수, 레거시코드 정리, 크로스브라우징, 코드컨벤션, 스타일 모듈화 및 디자인 시스템 정리",
    thumbnail: "./images/project/basket.png",
    url: ["https://basket.fund/page/service/friends"],
    keywords: ['html', 'sass', 'jquery']
  },
];

export default projectData 