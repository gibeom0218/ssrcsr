
# SSR과 CSR의 비교 (SEO 측면)

### 🌐 배포 : https://ssrcsr.vercel.app/

---
## ⭐️ 소개

### - 기간 : 2024. 10. 22. ~ 2024. 10. 24.
### - 설명

### 구현 배경
Next.js App Router 환경에서 SEO 관점에서 SSR(Server-Side Rendering)과 CSR(Client-Side Rendering)의 성능을 비교했습니다.
<br/>
각각의 렌더링 방식이 페이지 초기 로딩과 검색엔진 최적화(SEO)에 미치는 영향을 분석하였습니다.

### 구현 방법
서버 컴포넌트인 SSR 페이지에서 데이터들을 react-query의 prefetch 기능을 사용.

클라이언트 컴포넌트인 SSRMovies,CSRMovies에서 useQuery를 사용해 데이터들 가져옴.
    
---
## ⭐️ 구성

### Tech Stacks

#### Languages

<div>
  <img height='26px' src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
  <img height='26px' src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
</div>

#### Styles

<div>
<img height='26px' src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=Tailwind%20CSS&logoColor=white"/>
</div>

#### Framework & Libraries

<div>
<img height='26px' src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/>
<img height='26px' src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
</div>
<div>
<img height='26px' src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"/>
<img height='26px' src="https://img.shields.io/badge/-React%20Query-FF4154?style=plastic&logo=react%20query&logoColor=white"/>
</div>

#### Version Control

<img height='26px' src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"/>

#### Deployment

<img height='26px' src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white"/>

<hr />

## 화면 구성
<table style="text-align: center; width: 100%">
  <tbody>
    <h3>비로그인</h3>
    <tr>
      <tr>
        <td><img src="https://github.com/user-attachments/assets/d6cb6ac7-d824-4574-8fff-2b24409f32f8"></td>
        <td><img src="https://github.com/user-attachments/assets/ed17e4dd-b5d3-4423-9bb3-e4c60f5cbd39"></td>
      </tr>
      <tr>
        <td><p align="center">메인화면</p></td>
        <td><p align="center">SSR or CSR 화면</p></td>
      </tr>
      </tbody>
</table>
<hr />

## 개발자 도구의 미리보기
<table style="text-align: center; width: 100%">
  <tbody>
    <h3>로그인 (사장님)</h3>
    <tr>
      <tr>
        <td><img src="https://github.com/user-attachments/assets/5b67e8ca-f706-4e1c-8955-df7fae122acf"></td>
        <td><img src="https://github.com/user-attachments/assets/da2d7c2f-e1cf-4dd0-910d-d379fc62e384"></td>
      </tr>
      <tr>
        <td><p align="center">SSR</p></td>
        <td><p align="center">CSR</p></td>
      </tr>
      </tbody>
</table>
<hr />

### 결론

**SSR (Server-Side Rendering)**
<br/>
- 동작 원리 : 서버에서 HTML을 미리 렌더링하여 클라이언트에 전송합니다. 초기 페이지 로딩 시 자바스크립트가 로드되기 전에도 페이지의 콘텐츠가 HTML에 포함되어 있어, 검색엔진 크롤러가 콘텐츠를 쉽게 인덱싱할 수 있습니다.<br/>
- SEO 및 사용자 경험 : 초기 로딩 시 개발자 도구의 미리보기를 통해 SSR 페이지의 텍스트와 이미지가 바로 표시되며, 'loading' 화면이 없이 즉시 콘텐츠가 노출됩니다.
<br/>

**CSR (Client-Side Rendering)**
<br/>
- 동작 원리 : 자바스크립트가 실행되어 콘텐츠를 클라이언트 측에서 렌더링합니다. HTML이 아닌 빈 페이지를 먼저 로드하고, 이후 자바스크립트가 실행되면서 콘텐츠가 표시됩니다.<br/>
- SEO 및 사용자 경험 : 초기 로딩 시 'loading' 메시지가 표시되며, 이후 자바스크립트가 완료된 뒤에야 콘텐츠가 나타납니다. 검색엔진 크롤러가 페이지를 완전히 렌더링하기 어려워 SEO에 불리할 수 있습니다.

**SSR은 서버에서 HTML을 미리 렌더링하여 클라이언트로 전송하기 때문에 검색엔진이 페이지를 크롤링할 때 완전한 HTML 콘텐츠를 바로 확인할 수 있습니다.<br/>
이로 인해 SSR 페이지는 SEO에 유리하며, 개발자 도구의 "미리보기"에서도 즉각적인 HTML 콘텐츠가 보여집니다.<br/> 이렇게 검색엔진이 콘텐츠를 쉽게 인식할 수 있으므로, SEO 최적화 측면에서 유리합니다.<br/><br/>반면 CSR은 초기 로딩 시 빈 HTML에 자바스크립트 파일만 전송하고, 클라이언트 측에서 콘텐츠를 동적으로 로드하기 때문에, 검색엔진이 페이지에 접근하는 순간 HTML에 실제 콘텐츠가 없을 수 있습니다. <br/>이로 인해 SEO 측면에서 불리할 수 있으며, 개발자 도구 미리보기에서는 'loading...'과 같은 초기 상태만 표시될 수 있습니다.**
