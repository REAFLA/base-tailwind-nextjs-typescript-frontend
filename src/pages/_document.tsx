/* eslint-disable @next/next/no-css-tags */
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          {/* 브라우저 호환성 지정 */}
          <meta name="Description" content="도깨비에디터" />
          <meta name="Keywords" content="도깨비에디터" />
          <meta name="Date" content="2022-03-20T07:45:37+09:00" />
          {/* 제작일 */}
          <meta name="rating" content="General" />
          <meta name="referrer" content="no-referrer" />
          <link rel="canonical" href="http://43.200.190.224" />
          <meta httpEquiv="imagetoolbar" content="no" />
          {/* 이미지 마우스 오버 시 이미지 관련 툴바 막기 */}
          <meta
            httpEquiv="Content-Script-Type"
            content="Text/javascript, Text/typescript"
          />
          {/* 웹페이지에 사용된 언어 */}
          <meta httpEquiv="Filename" content="index.html" /> {/* 파일 이름 */}
          <meta httpEquiv="Subject" content="도깨비에디터" />
          <meta httpEquiv="Generator" content="Visual Studio Code" />
          <meta httpEquiv="Author" content="(주) 통신나라 미래교육" />
          <meta httpEquiv="Distribution" content="레플라 (REAFLA)" />
          <meta httpEquiv="publisher" content="레플라 (REAFLA)" />
          <meta httpEquiv="Build" content="date" /> {/* 빌드일 */}
          <meta httpEquiv="Last-Modified" content="Fri, 05 Jul 2020 19:40:40" />
          {/* 마지막 수정일 */}
          <meta httpEquiv="Other Agent" content="(주) 통신나라 미래교육" />
          <meta httpEquiv="Reply-To" content="대표 이메일 주소" />
          <meta httpEquiv="Email" content="대표 이메일 주소" />
          <meta httpEquiv="Location" content="위치" />
          <meta httpEquiv="Cache-Control" content="no-cache" /> {/* 캐시 */}
          <meta httpEquiv="Pragma" content="no-chche" /> {/* 캐시 */}
          <meta httpEquiv="Expires" content="-1" /> {/* 캐시 만료일 */}
          <meta httpEquiv="refresh" content="3600" /> {/* 새로고침(S) */}
          {/* <meta httpEquiv="refresh" content="revealtrans(Duration=1, Transition=12)" /> */}
          {/* 페이지 전환 효과 (사용 하지 않음) */}
          <meta
            httpEquiv="Copyright"
            content="Copyright ⓒ 2022 ADMOVE All rights reserved."
          />
          {/* 어플리케이션 및 앱 */}
          <meta property="al:android:app_name" content="도깨비에디터" />
          <meta property="al:web:url" content="http://43.200.190.224" />
          <meta
            property="al:android:url"
            content="//play.google.com/store/apps/details?id=kr.co.thaiinfo.thaiinfo_v01"
          />
          <meta
            property="al:android:package"
            content="kr.co.thaiinfo.thaiinfo_v01"
          />
          {/* 이미지 및 아이콘 */}
          <meta itemProp="image" content="/assets/images/logo/logo.png" />
          <link rel="shortcut icon" href="/assets/images/logo/logo.ico" />
          <link rel="apple-touch-icon" href="/assets/images/logo/logo.png" />
          {/* 페이스북 */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://43.200.190.224" />
          <meta property="og:site_name" content="도깨비에디터" />
          <meta property="og:title" content="도깨비에디터" />
          <meta property="og:description" content="도깨비에디터" />
          <meta property="og:image" content="/assets/images/logo/logo.png" />
          <meta property="og:image:width" content="200" />
          <meta property="og:image:height" content="200" />
          {/* 트위터 */}
          {/* 트위터 카드 타입은 summary_large_image, summary, photo 중 하나를 선택할 수 있다. */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="http://43.200.190.224" />
          <meta name="twitter:title" content="도깨비에디터" />
          <meta name="twitter:description" content="도깨비에디터" />
          <meta name="twitter:image" content="/assets/images/logo/logo.png" />
          {/* 애플 */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="도깨비에디터" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#ffffff"
          />
          {/* 로봇 */}
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index,follow" />
          {/* 지역 태그 */}
          <meta name="ICBM" content="latitude, longitude" />
          <meta name="geo.position" content="latitude;longitude" />
          <meta name="geo.region" content="country[-state]" />
          <meta name="geo.placename" content="city/town" />
          {/* 기타 */}
          <meta name="application-name" content="도깨비에디터" />
          {/* 웹 애플리케이션 이름(웹 사이트를 앱으로 사용하는 경우에만 사용해야 함) */}
          <meta name="theme-color" content="#ffffff" />
          {/* Chrome, Firefox OS 및 Opera의 테마 색상 */}
          <meta name="format-detection" content="telephone=yes" />
          {/* preconnect */}
          <link
            rel="preconnect"
            href="//fonts.googleapis.com"
            crossOrigin="anonymous"
          />
          <link
            rel="preconnect"
            href="//fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          {/* manifest */}
          <link rel="manifest" href="manifest.json" />
          {/* Google Font */}
          <link
            rel="stylesheet"
            href="//fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    )
  }
}
