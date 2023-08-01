import React, { useState } from "react";
import "../../pages/Home/home.css";
import Draggable, { DraggableCore } from "react-draggable";
import sparkle from "../../assets/Home/landing/sparkle.png";

const HomeScreen = () => {
  function updateScreenWidth() {
    const screenWidth = window.innerWidth;
    console.log("dynamic", screenWidth);
  }

  // Call the function initially to show the screen width on page load
  updateScreenWidth();

  // Attach an event listener to update the screen width when the window is resized
  window.addEventListener("resize", updateScreenWidth);
  console.log(window.innerWidth, window.innerHeight);
  const [widthHeight, setWidthHeight] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const p1x = widthHeight.width - widthHeight.width * 0.25; //ai
  const p1y = widthHeight.height - widthHeight.height * 0.3;
  const p2x = widthHeight.width - widthHeight.width * 0.5; //coc
  const p2y = widthHeight.height - widthHeight.height * 0.29;
  const p3x = widthHeight.width - widthHeight.width * 0.8; //xd
  const p3y = widthHeight.height - widthHeight.height * 0.45;
  const p4x = widthHeight.width - widthHeight.width * 0.24; //sketch
  const p4y = widthHeight.height - widthHeight.height * 0.7;
  const p5x = widthHeight.width - widthHeight.width * 0.48; //figma
  const p5y = widthHeight.height - widthHeight.height * 0.77;
  const p6x = widthHeight.width - widthHeight.width * 0.78; //ps
  const p6y = widthHeight.height - widthHeight.height * 0.84;
  const p7x = widthHeight.width - widthHeight.width * 0.95; //star under ps
  const p7y = widthHeight.height - widthHeight.height * 0.73;
  const p8x = widthHeight.width - widthHeight.width * 0.65; //star right of xd
  const p8y = widthHeight.height - widthHeight.height * 0.3;
  const p9x = widthHeight.width - widthHeight.width * 0.31; //star top of ai
  const p9y = widthHeight.height - widthHeight.height * 0.49;
  const p10x = widthHeight.width - widthHeight.width * 0.75; //dot above ps
  const p10y = widthHeight.height - widthHeight.height * 0.95;
  const p11x = widthHeight.width - widthHeight.width * 0.65; //dot right ps
  const p11y = widthHeight.height - widthHeight.height * 0.78;
  const p12x = widthHeight.width - widthHeight.width * 0.56; //dot center ps and figma
  const p12y = widthHeight.height - widthHeight.height * 0.72;
  const p13x = widthHeight.width - widthHeight.width * 0.52; //dot left figma
  const p13y = widthHeight.height - widthHeight.height * 0.83;
  const p14x = widthHeight.width - widthHeight.width * 0.33; //dot figma right
  const p14y = widthHeight.height - widthHeight.height * 0.7;
  const p15x = widthHeight.width - widthHeight.width * 0.22; //dot bottom sketch
  const p15y = widthHeight.height - widthHeight.height * 0.6;
  const p16x = widthHeight.width - widthHeight.width * 0.12; //dot above sketch
  const p16y = widthHeight.height - widthHeight.height * 0.8;
  const p17x = widthHeight.width - widthHeight.width * 0.88; //dot above xd
  const p17y = widthHeight.height - widthHeight.height * 0.54;
  const p18x = widthHeight.width - widthHeight.width * 0.8; //dot below xd
  const p18y = widthHeight.height - widthHeight.height * 0.15;
  const p19x = widthHeight.width - widthHeight.width * 0.7; //dot on p
  const p19y = widthHeight.height - widthHeight.height * 0.555;
  const p20x = widthHeight.width - widthHeight.width * 0.6; //dot below explore
  const p20y = widthHeight.height - widthHeight.height * 0.38;
  const p21x = widthHeight.width - widthHeight.width * 0.35; //dot right coc
  const p21y = widthHeight.height - widthHeight.height * 0.13;

  if (widthHeight.width < 1000) {
  }
  return (
    <div className="landing-page-wrapper">
      <div className="landing-page-content">
        <div className="landing-page-main-content">
          <div>
            <h2>Meet & Collaborate with the people who loves Design.</h2>
          </div>
          <div className="landing-page-explore-btn">
            <a href="">Explore Design</a>
          </div>
        </div>
        <div className="homedrag-wrapper-desk shake">
          {/* ai */}
          <Draggable
            defaultPosition={{
              x: p1x,
              y: p1y,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 129 127"
              fill="none"
              className="dragComponents pt-logo"
            >
              <g filter="url(#filter0_d_433_34)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M84.6298 15.958L28.414 26.7461C19.891 28.3817 14.3224 36.5951 15.958 45.1181L26.3285 99.1578C27.9641 107.681 36.1774 113.249 44.7005 111.614L100.916 100.826C109.439 99.1902 115.008 90.9768 113.372 82.4538L103.002 28.414C101.366 19.891 93.1529 14.3224 84.6298 15.958ZM51.3241 74.995L64.8159 72.4059L69.4464 80.467C69.5676 80.707 69.8563 80.8396 70.1032 80.7546L77.6833 79.3C78.046 79.2304 78.12 79.0281 77.9346 78.6501L57.5279 43.8342C57.4568 43.6598 57.2908 43.5788 57.0007 43.6345L47.6072 45.4371C47.4328 45.5082 47.3225 45.7174 47.3936 45.8918C47.5467 46.6897 47.6273 47.5015 47.6284 48.291C47.5848 48.6191 47.5559 48.9254 47.5288 49.2126C47.5177 49.3307 47.5068 49.4456 47.4954 49.5574L42.269 85.4192C42.2437 85.8753 42.3942 86.0721 42.7932 85.9955L49.6116 84.687C49.945 84.6607 50.1934 84.3874 50.2033 84.047L51.3241 74.995ZM61.2269 65.461L52.0147 67.2289C52.2664 65.6012 52.4834 63.7922 52.6361 61.8451C52.78 60.6534 52.9099 59.4645 53.0378 58.2937C53.1165 57.5734 53.1944 56.8601 53.2744 56.1572C53.4829 54.5002 53.5825 52.8641 53.6097 51.242L53.6822 51.2281C53.9168 51.6861 54.1558 52.1667 54.4053 52.6686C54.6035 53.0671 54.8083 53.479 55.023 53.9039C55.515 54.9 56.0432 55.8891 56.6217 56.9438C56.9109 57.4712 57.1893 57.9912 57.4677 58.5112C57.7462 59.0313 58.0246 59.5513 58.3138 60.0787C58.849 61.1041 59.3773 62.0932 59.8916 63.0098C60.399 63.8901 60.8631 64.7412 61.2269 65.461ZM76.5444 45.1485C77.575 45.8157 78.826 46.0644 80.0159 45.7985C81.263 45.6344 82.4056 44.9262 83.0727 43.8957C83.7692 42.822 83.9747 41.5416 83.7018 40.3154C83.5084 39.1116 82.8504 38.0346 81.8855 37.3172C80.9275 36.6362 79.7559 36.4098 78.3415 36.6812C77.1446 36.9109 76.0676 37.5688 75.3572 38.57C74.6469 39.5713 74.3981 40.8223 74.671 42.0485C74.8714 43.2886 75.5363 44.4019 76.5444 45.1485ZM76.636 50.1323L81.9952 78.0589C82.0648 78.4215 82.2879 78.6043 82.6506 78.5347L89.7591 77.1706C90.0856 77.1079 90.1958 76.8988 90.1193 76.4998L84.76 48.5732C84.6974 48.2468 84.5175 48.0933 84.1911 48.156L77.01 49.534C76.6836 49.5967 76.5664 49.7696 76.636 50.1323Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_433_34"
                  x="0.673828"
                  y="0.673096"
                  width="127.984"
                  height="126.226"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="7.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_433_34"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_433_34"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Draggable>
        </div>
        <div className="homedrag-wrapper-desk shake">
          {/* coc */}
          <Draggable
            defaultPosition={{
              x: p2x,
              y: p2y,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 114 146"
              fill="none"
              className="dragComponents pt-logo"
            >
              <g filter="url(#filter0_d_433_39)">
                <path
                  d="M48.5855 130.701L35.1612 128.213L35.3496 117.833L52.1297 120.944L48.5855 130.701Z"
                  fill="white"
                />
                <path
                  d="M44.5529 113.687L42.9107 113.382C40.3548 90.0368 40.0055 70.2657 41.9574 54.8579C44.7758 32.6132 51.8831 19.3678 59.8098 16.7999C60.5481 16.5603 61.3495 16.4164 62.5458 16.6191C63.7343 16.8588 64.4309 17.2819 65.0346 17.7684C71.5153 23.0078 73.4025 37.9251 68.0565 59.7108C64.3559 74.792 56.9448 93.1191 46.1951 113.991L44.5529 113.687ZM56.4542 15.4007C56.4542 15.4007 35.4925 19.1836 31.6166 47.959C27.7412 76.7336 41.1632 113.042 41.1632 113.042C31.1416 100.177 19.5219 63.7325 22.7955 44.1609C26.8754 23.6257 41.978 17.807 46.1535 16.6911C50.3295 15.5725 54.6136 15.1398 56.4542 15.4007ZM38.4198 17.2406C38.4198 17.2406 15.7724 22.0071 15.295 47.8009C14.8183 73.5926 32.0107 104.4 37.5353 111.29C39.4927 113.889 16.071 75.4521 18.5746 45.9681C19.2304 34.7828 24.6711 23.2577 38.4198 17.2406ZM85.3169 25.9337C85.3169 25.9337 104.751 38.5006 95.9518 62.7518C87.1527 87.0009 60.0604 109.599 52.4329 114.052C49.6749 115.777 85.3176 88.288 93.5464 59.8652C96.9433 49.1881 95.9955 36.4787 85.3169 25.9337ZM69.0466 17.7349C69.0466 17.7349 87.2602 28.7795 80.5647 57.0323C73.8697 85.2842 48.3251 114.37 48.3251 114.37C62.2922 105.951 86.2022 76.0927 90.1599 56.6479C93.7118 36.0148 81.699 25.1699 78.1996 22.6313C74.7029 20.0905 70.8582 18.151 69.0466 17.7349Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_433_39"
                  x="0.285156"
                  y="0.327148"
                  width="112.953"
                  height="145.374"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="7.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_433_39"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_433_39"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Draggable>
        </div>
        <div className="homedrag-wrapper-desk shake">
          {/* xd */}
          <Draggable
            defaultPosition={{
              x: p3x,
              y: p3y,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 110 108"
              fill="none"
              className="dragComponents pt-logo"
            >
              <g filter="url(#filter0_d_433_42)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.2987 19.5363L76.7999 15.9762C84.1533 15.4365 90.535 20.9454 91.0747 28.2988L94.497 74.9225C95.0367 82.2759 89.5278 88.6576 82.1744 89.1974L33.6732 92.7574C26.3198 93.2972 19.9381 87.7883 19.3984 80.4349L15.9761 33.8112C15.4364 26.4578 20.9453 20.0761 28.2987 19.5363ZM55.8998 36.8572L47.6494 53.0353L58.8684 68.7281C58.9401 68.8487 58.9806 68.9716 58.9585 69.099C58.945 69.1773 58.89 69.1756 58.8066 69.173C58.7542 69.1714 58.6905 69.1695 58.6189 69.1869L51.4533 69.7128C50.9526 69.7496 50.6061 69.7436 50.3641 69.4467C49.9873 68.8137 49.6033 68.1891 49.2192 67.5645C48.8352 66.9399 48.4512 66.3153 48.0744 65.6824C47.3231 64.4476 46.5069 63.1862 45.6572 61.8959L45.6569 61.8954L45.6566 61.895C44.8071 60.6049 43.9575 59.3148 43.1056 57.9934L43.043 57.998C42.4847 59.3917 41.8638 60.7901 41.2428 62.1884L41.2426 62.189L41.2425 62.1891C40.6217 63.5872 40.0009 64.9853 39.409 66.3499C39.2013 66.8055 38.9938 67.2647 38.7863 67.7238C38.3714 68.6421 37.9564 69.5605 37.5393 70.451C37.4372 70.7731 37.1891 70.8228 36.8449 70.848L29.9609 71.3533C29.9304 71.3556 29.902 71.3614 29.8764 71.3667C29.7968 71.383 29.7436 71.3939 29.735 71.2755C29.6945 71.1527 29.7166 71.0252 29.7723 70.9267L38.3324 54.254L27.673 38.8976C27.5699 38.7793 27.5294 38.6565 27.5874 38.5893C27.6431 38.4908 27.766 38.4503 27.8911 38.4412L34.9942 37.9198C35.1507 37.9083 35.3094 37.9281 35.4369 37.9502C35.5666 38.0036 35.6674 38.0906 35.7705 38.2089C36.4638 39.5107 37.2509 40.8057 38.0694 42.0984C38.2237 42.3327 38.3769 42.5661 38.5295 42.7986C39.2176 43.8467 39.8948 44.8784 40.614 45.907C41.4615 47.1661 42.2463 48.4298 43.0022 49.7271L43.0648 49.7225C43.6209 48.2975 44.2105 46.9014 44.8024 45.5367C45.3944 44.1719 46.0176 42.8048 46.6408 41.4378C47.0097 40.6287 47.3668 39.8094 47.72 38.999L47.7201 38.9988C47.9637 38.44 48.2054 37.8854 48.4479 37.3412C48.47 37.2138 48.5234 37.084 48.6127 37.0145C48.7333 36.9428 48.8562 36.9023 49.0149 36.9221L55.6173 36.4375C55.7715 36.3947 55.9348 36.4771 55.9776 36.6312C56.0112 36.6602 55.9578 36.79 55.8998 36.8572ZM65.948 67.8939C68.1157 68.71 70.4657 69.0094 72.779 68.8081C74.4061 68.6887 75.9905 68.4151 77.5656 68.0164C79.295 67.5748 80.9792 66.9478 82.5558 66.14C82.768 66.03 82.8481 65.8354 82.832 65.6164C82.8212 65.5348 82.8102 65.451 82.7989 65.3653C82.7371 64.894 82.6674 64.3627 82.5736 63.8107C82.5661 63.7478 82.5587 63.6854 82.5513 63.6236C82.4779 63.0108 82.4108 62.4494 82.3732 61.9378L80.1867 32.1487L80.1821 32.0861C80.1416 31.9633 80.0072 31.8473 79.8531 31.8901L73.501 32.3563C73.282 32.3724 73.1973 32.5044 73.2134 32.7235L73.9391 42.6115C73.7643 42.6097 73.6034 42.6137 73.4528 42.6175C73.278 42.6218 73.1171 42.6258 72.9645 42.6201C72.6806 42.6095 72.4616 42.6255 72.3051 42.637C69.2073 42.8644 66.6225 43.6519 64.5217 45.033C62.5392 46.3111 60.9422 48.1271 59.9024 50.2483C58.8916 52.3359 58.4648 54.6638 58.666 56.977C58.875 59.8245 59.6128 62.1613 60.9107 63.9851C62.1727 65.7486 63.9101 67.1311 65.948 67.8939ZM74.3755 48.5568L75.3861 62.3248C75.0198 62.4776 74.6802 62.5654 74.2711 62.564C73.8667 62.6251 73.4309 62.6886 72.9615 62.723C72.0854 62.7873 71.2 62.7265 70.3345 62.5069C69.5025 62.3163 68.7507 61.931 68.1148 61.4114C67.4431 60.8315 66.9186 60.115 66.5437 59.2931C66.0924 58.2881 65.8242 57.2067 65.7751 56.1092C65.6557 54.482 65.9011 53.1112 66.516 52.0594C67.1309 51.0076 67.981 50.1587 69.0058 49.5486C70.0597 48.905 71.2616 48.5651 72.482 48.4755C72.8262 48.4503 73.1726 48.4563 73.5191 48.4623L73.5192 48.4623C73.8031 48.4729 74.0893 48.5148 74.3755 48.5568Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_433_42"
                  x="0.939453"
                  y="0.939697"
                  width="108.594"
                  height="106.854"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="7.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_433_42"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_433_42"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Draggable>
        </div>
        <div className="homedrag-wrapper-desk shake">
          {/* sketch */}
          <Draggable
            defaultPosition={{
              x: p4x,
              y: p4y,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 108 101"
              fill="none"
              className="dragComponents pt-logo"
            >
              <g filter="url(#filter0_d_433_51)">
                <path
                  d="M32.0101 17.3226L53.979 15L75.9479 17.3226L92.9561 40.1545L53.979 85.543L15.002 40.1545L32.0101 17.3226Z"
                  fill="#FDB300"
                />
                <path
                  d="M30.7877 40.1545L53.9771 85.543L15 40.1545H30.7877Z"
                  fill="#C7C7C7"
                />
                <path
                  d="M77.1674 40.1543L53.978 85.5427L92.9551 40.1543H77.1674Z"
                  fill="#C7C7C7"
                />
                <path
                  d="M30.7871 40.1545H77.166L53.9766 85.543L30.7871 40.1545Z"
                  fill="#DDDDDD"
                />
                <path
                  d="M53.9766 15.0005L32.0076 17.323L30.7871 40.155L53.9766 15.0005Z"
                  fill="#F0F0F0"
                />
                <path
                  d="M53.9766 15.0007L75.9456 17.3233L77.166 40.1553L53.9766 15.0007Z"
                  fill="#F0F0F0"
                />
                <path
                  d="M92.9551 40.155L75.9468 17.323L77.1674 40.155H92.9551Z"
                  fill="#DDDDDD"
                />
                <path
                  d="M15 40.1552L32.0081 17.3232L30.7877 40.1552H15Z"
                  fill="#DDDDDD"
                />
                <path
                  d="M53.9766 15.0005L30.7871 40.155H77.166L53.9766 15.0005Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_433_51"
                  x="0"
                  y="0"
                  width="107.957"
                  height="100.543"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="7.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_433_51"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_433_51"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Draggable>
        </div>
        <div className="homedrag-wrapper-desk shake">
          {/* figma */}
          <Draggable
            defaultPosition={{
              x: p5x,
              y: p5y,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 95 123"
              fill="none"
              className="dragComponents pt-logo"
            >
              <g filter="url(#filter0_d_433_63)">
                <path
                  d="M46.2325 107.191C54.0181 105.431 58.9086 97.6838 57.1488 89.8981L53.9607 75.7938L39.8563 78.9818C32.0707 80.7417 27.1802 88.4887 28.94 96.2743C30.6998 104.06 38.4469 108.95 46.2325 107.191Z"
                  fill="white"
                />
                <path
                  d="M22.565 68.0656C20.8052 60.2799 25.6957 52.5329 33.4813 50.7731L47.5857 47.585L53.9619 75.7938L39.8575 78.9819C32.0719 80.7417 24.3248 75.8512 22.565 68.0656Z"
                  fill="white"
                />
                <path
                  d="M16.1881 39.8566C14.4283 32.071 19.3188 24.3239 27.1044 22.5641L41.2088 19.376L47.5849 47.5848L33.4805 50.7729C25.6949 52.5327 17.9479 47.6422 16.1881 39.8566Z"
                  fill="white"
                />
                <path
                  d="M41.209 19.3762L55.3134 16.1881C63.099 14.4283 70.846 19.3188 72.6058 27.1044C74.3656 34.8901 69.4751 42.6371 61.6895 44.3969L47.5851 47.585L41.209 19.3762Z"
                  fill="white"
                />
                <path
                  d="M78.9808 55.3132C80.7406 63.0988 75.8501 70.8458 68.0645 72.6056C60.2789 74.3655 52.5319 69.475 50.7721 61.6893C49.0122 53.9037 53.9027 46.1567 61.6884 44.3969C69.474 42.6371 77.221 47.5276 78.9808 55.3132Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_433_63"
                  x="0.830078"
                  y="0.82959"
                  width="93.5098"
                  height="121.719"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="7.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_433_63"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_433_63"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Draggable>
        </div>
        <div className="homedrag-wrapper-desk shake">
          {/* ps */}
          <Draggable
            defaultPosition={{
              x: p6x,
              y: p6y,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 126"
              fill="none"
              className="dragComponents pt-logo"
            >
              <g filter="url(#filter0_d_433_69)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M42.7758 15.5967L99.2286 25.0672C107.788 26.5031 113.547 34.584 112.111 43.143L103.007 97.4104C101.571 105.969 93.4901 111.728 84.9312 110.293L28.4785 100.822C19.9195 99.3863 14.1604 91.3054 15.5962 82.7464L24.7001 28.479C26.136 19.92 34.2169 14.1609 42.7758 15.5967ZM36.9352 76.066L43.2224 38.5887C43.2651 38.3338 43.3988 38.2064 43.6538 38.2492C44.273 38.3531 44.8557 38.4508 45.6995 38.5549C46.1528 38.6117 46.6141 38.6797 47.0901 38.7499L47.0901 38.7499L47.0903 38.7499C47.5386 38.8161 47.9999 38.8841 48.4797 38.9464C48.9915 39.0129 49.5211 39.0924 50.0703 39.1749C50.5829 39.2518 51.1125 39.3313 51.6606 39.4052C52.7957 39.5582 53.8884 39.7415 54.981 39.9248C57.9675 40.4258 60.3831 41.2055 62.2943 42.3125C64.0115 43.2371 65.5158 44.538 66.6737 46.1177C67.6437 47.4787 68.3159 49.0519 68.6359 50.7158C68.9256 52.3371 68.9543 53.9521 68.6793 55.591C68.1539 58.7233 66.9916 61.187 65.1926 62.9821C63.3936 64.7773 61.0974 65.9649 58.5834 66.4418C55.954 66.9369 53.1675 66.8064 50.1809 66.3054C49.3068 66.1587 48.7241 66.061 48.366 65.9635C48.0079 65.8659 47.498 65.7804 46.806 65.6643L44.8447 77.3555C44.8383 77.6165 44.6196 77.8045 44.3585 77.7982L44.2128 77.7737L37.2928 76.6128C37.0014 76.5639 36.8802 76.3938 36.9352 76.066ZM50.0502 46.5493L47.9972 58.7868L48.105 58.813L48.1052 58.813C48.568 58.9252 48.9997 59.0299 49.4054 59.098L51.3357 59.4218C52.7561 59.6601 54.2132 59.6798 55.6341 59.4689C56.8546 59.3366 57.9905 58.8157 58.9445 58.0396C59.8621 57.2573 60.434 56.0801 60.7029 54.4776C60.9287 53.3547 60.8267 52.1767 60.409 51.0956C59.9487 50.0448 59.1968 49.1697 58.2078 48.5919C56.9518 47.8195 55.5317 47.3566 54.0323 47.1425C53.0853 46.9836 52.2476 46.8431 51.5495 46.7634C50.8272 46.6048 50.3112 46.5557 50.0502 46.5493ZM87.4028 61.8401C88.5984 62.3028 89.6966 62.8989 90.6915 63.665C90.825 63.7622 91.0071 63.7928 91.3471 63.7749C91.4686 63.7204 91.5659 63.587 91.5903 63.4413L92.5862 57.5046C92.6107 57.359 92.5987 57.2072 92.5867 57.0555L92.5867 57.0554C92.5383 56.8975 92.4171 56.7273 92.2775 56.6665C91.3613 56.1009 90.354 55.6323 89.2858 55.3033C87.8292 54.8343 86.3178 54.4684 84.8246 54.2179C82.2387 53.7841 80.0226 53.8242 78.1642 54.4112C76.4759 54.8769 74.9328 55.8163 73.7778 57.1204C72.7505 58.3335 72.0629 59.7535 71.8002 61.3196C71.5499 62.5882 71.6275 63.9118 72.0147 65.1751C72.4989 66.5295 73.2687 67.7445 74.2633 68.7352C75.6826 70.0967 77.2477 71.258 78.9952 72.2251C80.6638 73.2165 81.774 73.9645 82.2773 74.5357C82.7806 75.107 82.9926 75.6293 82.907 76.1392C82.797 76.7948 82.2925 77.3467 81.667 77.5039C80.9565 77.7217 79.9425 77.7389 78.5585 77.5067C77.1017 77.2623 75.6754 76.8358 74.3525 76.2394C72.8111 75.6063 71.4156 74.7731 70.1357 73.6971C70.0386 73.6059 69.9355 73.5512 69.814 73.6057C69.6925 73.6602 69.6316 73.7998 69.6133 73.9091L68.5502 80.2463C68.4649 80.5316 68.6042 80.8171 68.8347 81.0055C69.9085 81.7474 71.1161 82.3619 72.3542 82.7942C73.9381 83.397 75.5526 83.8176 77.228 84.0987C79.8503 84.5386 82.1028 84.5046 84.0157 84.0391C85.7647 83.6585 87.3745 82.7677 88.6387 81.4819C89.8239 80.2204 90.621 78.5941 90.8717 76.8762C91.1281 75.5712 91.0506 74.2476 90.6634 72.9843C90.1791 71.6299 89.3668 70.4452 88.2932 69.4787C86.7283 68.0928 84.9872 66.8645 83.1304 65.879C82.3174 65.3681 81.5105 64.8209 80.7462 64.2433C80.3155 63.9089 79.9334 63.5078 79.6728 63.0522C79.5032 62.7242 79.4125 62.3719 79.4675 62.0441C79.5224 61.7163 79.6928 61.3705 79.9238 61.1096C80.2398 60.7882 80.6832 60.6005 81.175 60.5706C81.8976 60.5046 82.6808 60.5237 83.4031 60.6823C84.7871 60.9145 86.1041 61.3226 87.4028 61.8401Z"
                  fill="white"
                  className="dragComponents"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_433_69"
                  x="0.376953"
                  y="0.377197"
                  width="126.953"
                  height="125.135"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="7.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_433_69"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_433_69"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Draggable>
        </div>
        <div className="homedrag-wrapper-desk shake">
          {/* celestial bodies */}
          <Draggable
            defaultPosition={{
              x: p7x,
              y: p7y,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 160 160"
              fill="none"
              className="dragComponents cellestial"
            >
              <g filter="url(#filter0_d_438_332)">
                <path
                  d="M101.339 134.749C98.0563 134.319 95.7121 131.756 95.7458 128.569C95.5926 100.124 92.0506 95.7024 63.2541 88.8193C59.9385 88.0015 57.7444 85.0755 58.2144 82.0733C58.6909 79.0297 61.636 76.8629 65.0821 76.8468C94.7537 76.9514 98.865 74.1717 108.509 47.0546C109.584 44.0469 112.529 42.178 115.767 42.6026C119.095 43.0392 121.394 45.5959 121.451 48.7948C121.52 77.1857 125.062 81.6075 153.813 88.4848C157.213 89.3563 159.375 92.193 158.892 95.2783C158.422 98.2804 155.568 100.459 152.031 100.463C122.3 100.436 118.241 103.18 108.689 130.309C107.515 133.346 104.531 135.168 101.339 134.749Z"
                  fill="url(#paint0_radial_438_332)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_438_332"
                  x="0.725193"
                  y="0.0682211"
                  width="215.659"
                  height="207.117"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="14.9509" />
                  <feGaussianBlur stdDeviation="28.7126" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.296824 0 0 0 0 0.244184 0 0 0 0 0.404167 0 0 0 0.6 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_438_332"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_438_332"
                    result="shape"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_438_332"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(137.668 123.841) rotate(-146.937) scale(71.9544 71.404)"
                >
                  <stop stop-color="#DABFFF" />
                  <stop offset="1" stop-color="#874FFF" />
                </radialGradient>
              </defs>
            </svg>
          </Draggable>
        </div>
        <div className="homedrag-wrapper-desk shake">
          {/* p8 */}
          <Draggable
            defaultPosition={{
              x: p8x,
              y: p8y,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 112 106"
              fill="none"
              className="dragComponents pt-logo"
            >
              <g filter="url(#filter0_d_442_249)">
                <path
                  d="M64.1131 89.1831C61.7203 88.9889 59.8484 87.2098 59.6419 84.8906C57.4722 64.2064 54.6041 61.1184 33.3907 57.1559C30.9464 56.6813 29.1562 54.6325 29.2769 52.4318C29.3994 50.2007 31.361 48.5178 33.8388 48.3811C55.191 47.3814 57.9473 45.2104 62.9211 25.1365C63.4773 22.9098 65.4605 21.4436 67.8201 21.6351C70.2462 21.8319 72.0848 23.6083 72.3577 25.933C74.4627 46.5813 77.3308 49.6691 98.511 53.6291C101.02 54.1397 102.78 56.1246 102.656 58.3863C102.536 60.587 100.64 62.2753 98.0961 62.4066C76.7073 63.4647 73.986 65.6078 69.0785 85.687C68.4542 87.9389 66.4395 89.3719 64.1131 89.1831Z"
                  fill="url(#paint0_radial_442_249)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_442_249"
                  x="0.117048"
                  y="0.0544758"
                  width="131.699"
                  height="125.89"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="7.5905" />
                  <feGaussianBlur stdDeviation="14.5772" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.220722 0 0 0 0 0.210451 0 0 0 0 0.241667 0 0 0 0.6 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_442_249"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_442_249"
                    result="shape"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_442_249"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(89.4566 79.9315) rotate(-150.298) scale(53.2134 50.7735)"
                >
                  <stop stop-color="#DABFFF" />
                  <stop offset="1" stop-color="#874FFF" />
                </radialGradient>
              </defs>
            </svg>
          </Draggable>
        </div>
        <div className="homedrag-wrapper-desk shake">
          {/* p9 */}
          <Draggable
            defaultPosition={{
              x: p9x,
              y: p9y,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 160 160"
              fill="none"
              className="dragComponents cellestial"
            >
              <g filter="url(#filter0_d_442_247)">
                <path
                  d="M118.124 134.096C114.919 134.927 111.785 133.429 110.623 130.461C99.8252 104.145 94.8847 101.372 65.6065 105.778C62.2261 106.261 59.0955 104.37 58.4067 101.411C57.7084 98.4101 59.6273 95.2979 62.8164 93.992C90.3666 82.9739 93.1373 78.8564 91.9204 50.1014C91.7913 46.9097 93.8216 44.0736 96.9824 43.2545C100.232 42.4124 103.321 43.9219 104.573 46.8664C115.272 73.1642 120.212 75.9371 149.446 71.5434C152.925 71.0777 155.992 72.8981 156.7 75.9397C157.389 78.8993 155.559 81.9885 152.281 83.3174C124.705 94.4294 121.969 98.4942 123.275 127.226C123.325 130.482 121.24 133.288 118.124 134.096Z"
                  fill="url(#paint0_radial_442_247)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_442_247"
                  x="0.838474"
                  y="0.548446"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="14.9509" />
                  <feGaussianBlur stdDeviation="28.7126" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.296824 0 0 0 0 0.244184 0 0 0 0 0.404167 0 0 0 0.6 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_442_247"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_442_247"
                    result="shape"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_442_247"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(147.721 110.373) rotate(-168.937) scale(71.9544 71.404)"
                >
                  <stop stop-color="#DABFFF" />
                  <stop offset="1" stop-color="#874FFF" />
                </radialGradient>
              </defs>
            </svg>
          </Draggable>
        </div>{" "}
        <div className="homedrag-wrapper-desk shake">
          {/* p10 */}
          <Draggable
            defaultPosition={{
              x: p10x,
              y: p10y,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="dragComponents ball43"
            >
              <g filter="url(#filter0_d_442_236)">
                <circle
                  cx="21.5"
                  cy="21.5"
                  r="11.5"
                  fill="url(#paint0_radial_442_236)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_442_236"
                  x="0.795458"
                  y="0.795458"
                  width="41.4091"
                  height="41.4091"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="4.60227" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.592157 0 0 0 0 0.392157 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_442_236"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_442_236"
                    result="shape"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_442_236"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(13.75 29.1667) rotate(-27.2669) scale(16.7345 17.1547)"
                >
                  <stop stop-color="#DABFFF" />
                  <stop offset="1" stop-color="#874FFF" />
                </radialGradient>
              </defs>
            </svg>
          </Draggable>
        </div>
        <div className="homedrag-wrapper-desk shake">
          {/* p11 */}
          <Draggable
            defaultPosition={{
              x: p11x,
              y: p11y,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              className="dragComponents ball30"
            >
              <g filter="url(#filter0_d_442_241)">
                <circle
                  cx="15"
                  cy="15"
                  r="5"
                  fill="url(#paint0_radial_442_241)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_442_241"
                  x="0.795458"
                  y="0.795458"
                  width="28.4091"
                  height="28.4091"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="4.60227" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.592157 0 0 0 0 0.392157 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_442_241"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_442_241"
                    result="shape"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_442_241"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(11.6304 18.3333) rotate(-27.2669) scale(7.27587 7.45858)"
                >
                  <stop stop-color="#DABFFF" />
                  <stop offset="1" stop-color="#874FFF" />
                </radialGradient>
              </defs>
            </svg>
          </Draggable>
        </div>{" "}
        <div className="homedrag-wrapper-desk shake">
          {/* p12 */}
          <Draggable
            defaultPosition={{
              x: p12x,
              y: p12y,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 43 43"
              fill="none"
              className="dragComponents ball43"
            >
              <g filter="url(#filter0_d_442_237)">
                <circle
                  cx="21.5"
                  cy="21.5"
                  r="11.5"
                  fill="url(#paint0_radial_442_237)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_442_237"
                  x="0.795458"
                  y="0.795458"
                  width="41.4091"
                  height="41.4091"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="4.60227" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.592157 0 0 0 0 0.392157 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_442_237"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_442_237"
                    result="shape"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_442_237"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(13.75 29.1667) rotate(-27.2669) scale(16.7345 17.1547)"
                >
                  <stop stop-color="#DABFFF" />
                  <stop offset="1" stop-color="#874FFF" />
                </radialGradient>
              </defs>
            </svg>
          </Draggable>
        </div>
        <div className="homedrag-wrapper-desk shake">
          {/* p13 */}
          <Draggable
            defaultPosition={{
              x: p13x,
              y: p13y,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              
              viewBox="0 0 40 40"
              fill="none"
              className="dragComponents ball40"
            >
              <g filter="url(#filter0_d_442_246)">
                <circle
                  cx="21.5"
                  cy="21.5"
                  r="6.5"
                  fill="url(#paint0_radial_442_246)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_442_246"
                  x="0.535717"
                  y="0.535717"
                  width="41.9286"
                  height="41.9286"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="7.23214" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.592157 0 0 0 0 0.392157 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_442_246"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_442_246"
                    result="shape"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_442_246"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(17.1196 25.8333) rotate(-27.2669) scale(9.45863 9.69615)"
                >
                  <stop stop-color="#DABFFF" />
                  <stop offset="1" stop-color="#874FFF" />
                </radialGradient>
              </defs>
            </svg>
          </Draggable>
        </div>{" "}
        <div className="homedrag-wrapper-desk shake">
          {/* p14 */}
          <Draggable
            defaultPosition={{
              x: p14x,
              y: p14y,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
           
              viewBox="0 0 43 43"
              fill="none"
              className="dragComponents ball43"
            >
              <g filter="url(#filter0_d_442_237)">
                <circle
                  cx="21.5"
                  cy="21.5"
                  r="11.5"
                  fill="url(#paint0_radial_442_237)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_442_237"
                  x="0.795458"
                  y="0.795458"
                  width="41.4091"
                  height="41.4091"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="4.60227" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.592157 0 0 0 0 0.392157 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_442_237"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_442_237"
                    result="shape"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_442_237"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(13.75 29.1667) rotate(-27.2669) scale(16.7345 17.1547)"
                >
                  <stop stop-color="#DABFFF" />
                  <stop offset="1" stop-color="#874FFF" />
                </radialGradient>
              </defs>
            </svg>
          </Draggable>
        </div>
        <div className="homedrag-wrapper-desk shake">
          {/* p15 */}
          <Draggable
            defaultPosition={{
              x: p15x,
              y: p15y,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
             
              viewBox="0 0 30 30"
              fill="none"
              className="dragComponents ball30"
            >
              <g filter="url(#filter0_d_442_238)">
                <circle
                  cx="15"
                  cy="15"
                  r="5"
                  fill="url(#paint0_radial_442_238)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_442_238"
                  x="0.795458"
                  y="0.795458"
                  width="28.4091"
                  height="28.4091"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="4.60227" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.592157 0 0 0 0 0.392157 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_442_238"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_442_238"
                    result="shape"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_442_238"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(11.6304 18.3333) rotate(-27.2669) scale(7.27587 7.45858)"
                >
                  <stop stop-color="#DABFFF" />
                  <stop offset="1" stop-color="#874FFF" />
                </radialGradient>
              </defs>
            </svg>
          </Draggable>
        </div>
        <div className="homedrag-wrapper-desk shake">
          {/* p16 */}
          <Draggable
            defaultPosition={{
              x: p16x,
              y: p16y,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
           
              viewBox="0 0 70 70"
              fill="none"
              className="dragComponents ball70"
            >
              <g filter="url(#filter0_d_442_243)">
                <circle
                  cx="35"
                  cy="35"
                  r="11"
                  fill="url(#paint0_radial_442_243)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_442_243"
                  x="0.121216"
                  y="0.121216"
                 
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="11.9394" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.592157 0 0 0 0 0.392157 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_442_243"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_442_243"
                    result="shape"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_442_243"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(27.587 42.3333) rotate(-27.2669) scale(16.0069 16.4089)"
                >
                  <stop stop-color="#DABFFF" />
                  <stop offset="1" stop-color="#874FFF" />
                </radialGradient>
              </defs>
            </svg>
          </Draggable>
        </div>
        <div className="homedrag-wrapper-desk shake">
          {/* p17 */}
          <Draggable
            defaultPosition={{
              x: p17x,
              y: p17y,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              
              viewBox="0 0 30 30"
              fill="none"
              className="dragComponents ball30"
            >
              <g filter="url(#filter0_d_442_242)">
                <circle
                  cx="15"
                  cy="15"
                  r="5"
                  fill="url(#paint0_radial_442_242)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_442_242"
                  x="0.795458"
                  y="0.795458"
                  
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="4.60227" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.592157 0 0 0 0 0.392157 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_442_242"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_442_242"
                    result="shape"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_442_242"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(11.6304 18.3333) rotate(-27.2669) scale(7.27587 7.45858)"
                >
                  <stop stop-color="#DABFFF" />
                  <stop offset="1" stop-color="#874FFF" />
                </radialGradient>
              </defs>
            </svg>
          </Draggable>
        </div>
        <div className="homedrag-wrapper-desk shake">
          {/* p18 */}
          <Draggable
            defaultPosition={{
              x: p18x,
              y: p18y,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
             
              viewBox="0 0 30 30"
              fill="none"
              className="dragComponents ball30"
            >
              <g filter="url(#filter0_d_442_242)">
                <circle
                  cx="15"
                  cy="15"
                  r="5"
                  fill="url(#paint0_radial_442_242)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_442_242"
                  x="0.795458"
                  y="0.795458"
                  width="28.4091"
                  height="28.4091"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="4.60227" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.592157 0 0 0 0 0.392157 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_442_242"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_442_242"
                    result="shape"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_442_242"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(11.6304 18.3333) rotate(-27.2669) scale(7.27587 7.45858)"
                >
                  <stop stop-color="#DABFFF" />
                  <stop offset="1" stop-color="#874FFF" />
                </radialGradient>
              </defs>
            </svg>
          </Draggable>
        </div>
        <div className="homedrag-wrapper-desk shake">
          {/* p19 */}
          <Draggable
            defaultPosition={{
              x: p19x,
              y: p19y,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
          
              viewBox="0 0 70 70"
              fill="none"
              className="dragComponents ball70"
            >
              <g filter="url(#filter0_d_442_245)">
                <circle
                  cx="35"
                  cy="35"
                  r="11"
                  fill="url(#paint0_radial_442_245)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_442_245"
                  x="0.121216"
                  y="0.121216"
                  width="69.7576"
                  height="69.7576"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="11.9394" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.592157 0 0 0 0 0.392157 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_442_245"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_442_245"
                    result="shape"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_442_245"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(27.587 42.3333) rotate(-27.2669) scale(16.0069 16.4089)"
                >
                  <stop stop-color="#DABFFF" />
                  <stop offset="1" stop-color="#874FFF" />
                </radialGradient>
              </defs>
            </svg>
          </Draggable>
        </div>
        <div className="homedrag-wrapper-desk shake">
          {/* p20 */}
          <Draggable
            defaultPosition={{
              x: p20x,
              y: p20y,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
             
              viewBox="0 0 70 70"
              fill="none"
              className="dragComponents ball70"
            >
              <g filter="url(#filter0_d_442_245)">
                <circle
                  cx="35"
                  cy="35"
                  r="11"
                  fill="url(#paint0_radial_442_245)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_442_245"
                  x="0.121216"
                  y="0.121216"
                  width="69.7576"
                  height="69.7576"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="11.9394" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.592157 0 0 0 0 0.392157 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_442_245"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_442_245"
                    result="shape"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_442_245"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(27.587 42.3333) rotate(-27.2669) scale(16.0069 16.4089)"
                >
                  <stop stop-color="#DABFFF" />
                  <stop offset="1" stop-color="#874FFF" />
                </radialGradient>
              </defs>
            </svg>
          </Draggable>
        </div>{" "}
        <div className="homedrag-wrapper-desk shake">
          {/* p21 */}
          <Draggable
            defaultPosition={{
              x: p21x,
              y: p21y,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              className="dragComponents"
            >
              <g filter="url(#filter0_d_442_261)">
                <circle
                  cx="17"
                  cy="17.1738"
                  r="9"
                  fill="url(#paint0_radial_442_261)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_442_261"
                  x="0.796445"
                  y="0.970273"
                  width="32.4071"
                  height="32.4071"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="3.60178" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.592157 0 0 0 0 0.392157 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_442_261"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_442_261"
                    result="shape"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_442_261"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(10.9348 23.1738) rotate(-27.2669) scale(13.0966 13.4254)"
                >
                  <stop stop-color="#DABFFF" />
                  <stop offset="1" stop-color="#874FFF" />
                </radialGradient>
              </defs>
            </svg>
          </Draggable>
        </div>
        {/* Mobile version */}
        <div className="home-about-wrapper">
          <div className="home-about-outer-wrapper">
            <div className="home-about-inner-wrapper">
              <p>
                fun design is a network for design enthusiasts dedicated to
                equip you with all the skills and resources you need to
                supercharge your design career, freelance and agency journey,
                helping you connect designers over the state. Join a growing
                community, get peer insights, and discover exciting business
                opportunities and collaborations.
              </p>
            </div>
          </div>
          <div className="home-about-star-one">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 153 153"
              fill="none"
            >
              <g filter="url(#filter0_d_438_384)">
                <path
                  d="M82.4907 107.734C79.8607 108.131 77.4138 106.522 76.6357 103.84C69.3422 80.0076 65.5065 77.1149 41.6544 77.9884C38.9018 78.0677 36.4785 76.1191 36.0821 73.4915C35.6803 70.8275 37.3954 68.3293 40.0379 67.5201C62.8521 60.7569 65.3083 57.4751 65.8736 32.4946C65.9411 29.7224 67.7313 27.4742 70.3248 27.0829C72.9913 26.6807 75.4016 28.2953 76.2527 30.9663C83.4677 54.7732 87.3034 57.6656 111.119 56.7978C113.95 56.744 116.326 58.6251 116.733 61.3256C117.13 63.9532 115.488 66.4404 112.772 67.2606C89.9324 74.1024 87.5072 77.3421 87.0148 102.312C86.8799 105.131 85.0476 107.348 82.4907 107.734Z"
                  fill="url(#paint0_radial_438_384)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_438_384"
                  x="0.796944"
                  y="0.966629"
                  width="151.223"
                  height="151.225"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="9.17139" />
                  <feGaussianBlur stdDeviation="17.6132" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.220722 0 0 0 0 0.210451 0 0 0 0 0.241667 0 0 0 0.6 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_438_384"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_438_384"
                    result="shape"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_438_384"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(107.639 90.1929) rotate(-161.311) scale(59.3446 60.8349)"
                >
                  <stop stop-color="#DABFFF" />
                  <stop offset="1" stop-color="#874FFF" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <div className="home-about-star-two">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 153 153"
              fill="none"
            >
              <g filter="url(#filter0_d_438_384)">
                <path
                  d="M82.4907 107.734C79.8607 108.131 77.4138 106.522 76.6357 103.84C69.3422 80.0076 65.5065 77.1149 41.6544 77.9884C38.9018 78.0677 36.4785 76.1191 36.0821 73.4915C35.6803 70.8275 37.3954 68.3293 40.0379 67.5201C62.8521 60.7569 65.3083 57.4751 65.8736 32.4946C65.9411 29.7224 67.7313 27.4742 70.3248 27.0829C72.9913 26.6807 75.4016 28.2953 76.2527 30.9663C83.4677 54.7732 87.3034 57.6656 111.119 56.7978C113.95 56.744 116.326 58.6251 116.733 61.3256C117.13 63.9532 115.488 66.4404 112.772 67.2606C89.9324 74.1024 87.5072 77.3421 87.0148 102.312C86.8799 105.131 85.0476 107.348 82.4907 107.734Z"
                  fill="url(#paint0_radial_438_384)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_438_384"
                  x="0.796944"
                  y="0.966629"
                  width="151.223"
                  height="151.225"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="9.17139" />
                  <feGaussianBlur stdDeviation="17.6132" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.220722 0 0 0 0 0.210451 0 0 0 0 0.241667 0 0 0 0.6 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_438_384"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_438_384"
                    result="shape"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_438_384"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(107.639 90.1929) rotate(-161.311) scale(59.3446 60.8349)"
                >
                  <stop stop-color="#DABFFF" />
                  <stop offset="1" stop-color="#874FFF" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
