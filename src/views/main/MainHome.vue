<template>
  <div class="Layout MainLayout">
    <!-- 헤더 -->
    <MainHeader />
    <!-- 메인 -->
    <main class="container main-container">
      <!-- 알럿 -->
      <Transition name="alert">
        <article v-if="isAlert" class="alert mb16" aria-live="polite">
          <div class="alert-inner closeable" role="alert">
            <p class="alert-content">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="@/assets/images/icons/symbols.svg#bluetooth"></use>
              </svg>
              <span>블루투스를 켜고 주변 상점 쿠폰을 받아보세요!</span>
            </p>
            <button class="btn-icon" title="닫기" aria-label="닫기" @click="closeAlert">
              <svg aria-hidden="true">
                <use xlink:href="@/assets/images/icons/symbols.svg#close_16"></use>
              </svg>
            </button>
          </div>
        </article>
      </Transition>
      <!-- 01: 메인 슬라이더 -->
      <section class="main-section">
        <div class="swiper-container with-bullet">
          <swiper
            :slides-per-view="1"
            :space-between="10"
            :pagination="{
              el: '.bullet',
              clickable: true,
            }"
            :modules="[Pagination]"
          >
            <swiper-slide>
              <div class="img-wrap">
                <img src="@\assets\images\temp\main_slider_sample.jpg" alt="" style="object-position: bottom" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="img-wrap">
                <img src="@\assets\images\temp\main_slider_sample.jpg" alt="" style="object-position: bottom" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="img-wrap">
                <img src="@\assets\images\temp\main_slider_sample.jpg" alt="" style="object-position: bottom" />
              </div>
            </swiper-slide>
            <div class="swiper-pagination bullet"></div>
          </swiper>
        </div>
      </section>
      <!-- 02: 쿠폰 컨텐츠 -->
      <section class="main-section full">
        <div class="section-header">
          <div class="title-wrap">
            <h2 class="heading-03">중앙시장 쿠폰 혜택</h2>
            <router-link to="/details" class="btn text sm">전체보기</router-link>
          </div>
          <p class="subtitle">중앙시장의 다양한 상점 혜택 쿠폰 모음 ZIP</p>
        </div>
        <div class="swiper-container with-fraction">
          <swiper
            :slides-per-view="1.7"
            :space-between="10"
            :slidesOffsetBefore="20"
            :slidesOffsetAfter="20"
            :pagination="{
              el: '.fraction',
              clickable: true,
              type: 'fraction',
            }"
            :modules="[Pagination]"
          >
            <swiper-slide>
              <article class="coupon primary">
                <div class="coupon-left">
                  <strong class="coupon-title">사이드 메뉴 500원 할인 쿠폰 </strong>
                  <p class="coupon-period">2024.10.18 ~ 2024.11.17</p>
                </div>
                <div class="coupon-right">
                  <svg class="icon">
                    <use xlink:href="@/assets/images/icons/symbols.svg#sale"></use>
                  </svg>
                </div>
              </article>
            </swiper-slide>
            <swiper-slide>
              <article class="coupon secondary">
                <div class="coupon-left">
                  <strong class="coupon-title">탄산음료 선착순 10명 증정 쿠폰 </strong>
                  <p class="coupon-period">2024.10.18 ~ 2024.11.17</p>
                </div>
                <div class="coupon-right">
                  <svg class="icon">
                    <use xlink:href="@/assets/images/icons/symbols.svg#sale"></use>
                  </svg>
                </div>
              </article>
            </swiper-slide>
            <swiper-slide>
              <article class="coupon primary">
                <div class="coupon-left">
                  <strong class="coupon-title">2줄이 넘어가는 글자수의 쿠폰 타이틀입니다. </strong>
                  <p class="coupon-period">2024.10.18 ~ 2024.11.17</p>
                </div>
                <div class="coupon-right">
                  <svg class="icon">
                    <use xlink:href="@/assets/images/icons/symbols.svg#sale"></use>
                  </svg>
                </div>
              </article>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination fraction"></div>
        </div>
      </section>
      <!-- 03: 상점 컨텐츠 -->
      <section class="main-section">
        <div class="section-header">
          <div class="title-wrap">
            <h2 class="heading-03">중앙시장 오늘의 상점</h2>
            <router-link to="/details" class="btn text sm sm" aria-label="쿠폰 전체보기">전체보기</router-link>
          </div>
          <p class="subtitle">키워드로 보는 오늘의 상점을 확인해보세요!</p>
        </div>
        <div class="section-content">
          <article class="store">
            <div class="chip-group">
              <span class="chip" :class="{ active: activeChip === '추천 맛집' }" @click="activeChip = '추천 맛집'">추천 맛집</span>
              <span class="chip" :class="{ active: activeChip === '쇼핑' }" @click="activeChip = '쇼핑'">쇼핑</span>
              <span class="chip" :class="{ active: activeChip === '청년점포' }" @click="activeChip = '청년점포'">청년점포</span>
              <span class="chip" :class="{ active: activeChip === '전통노포' }" @click="activeChip = '전통노포'">전통노포</span>
            </div>
            <ul class="store-list">
              <li class="store-item">
                <figure class="store-img thumb">
                  <img src="@\assets\images\temp\store_sample_01.png" alt="상점 이미지" />
                </figure>
                <div class="store-info">
                  <strong class="store-name">창승 식품</strong>
                  <p class="store-desc">반찬</p>
                </div>
                <div class="coupon-tag">
                  <svg class="icon">
                    <use xlink:href="@/assets/images/icons/symbols.svg#coupon"></use>
                  </svg>
                  <span>쿠폰</span>
                </div>
              </li>
              <li class="store-item">
                <figure class="store-img thumb">
                  <img src="@\assets\images\temp\store_sample_02.png" alt="골목식당 이미지" />
                </figure>
                <div class="store-info">
                  <strong class="store-name">골목식당</strong>
                  <p class="store-desc">음식점/카페</p>
                </div>
              </li>
              <li class="store-item">
                <figure class="store-img thumb">
                  <img src="@\assets\images\temp\store_sample_03.png" alt="성산분식 이미지" />
                </figure>
                <div class="store-info">
                  <strong class="store-name">성산분식</strong>
                  <p class="store-desc">음식점</p>
                </div>
              </li>
              <li class="store-item">
                <figure class="store-img thumb">
                  <img src="@\assets\images\temp\store_sample_04.png" alt="심성과일나라 이미지" />
                </figure>
                <div class="store-info">
                  <strong class="store-name">심성과일나라</strong>
                  <p class="store-desc">과일가게</p>
                </div>
                <div class="coupon-tag">
                  <svg class="icon">
                    <use xlink:href="@/assets/images/icons/symbols.svg#coupon"></use>
                  </svg>
                  <span>쿠폰</span>
                </div>
              </li>
            </ul>
          </article>
          <!-- 주변 상점 검색 -->
          <div class="btn-area mt20">
            <button class="btn with-icon">
              <svg class="icon icon-left">
                <use xlink:href="@/assets/images/icons/symbols.svg#marker"></use>
              </svg>
              주변 상점 검색
            </button>
          </div>
        </div>
      </section>
      <!-- 배너: 먹깨비 APP 설치 -->
      <article class="ad-banner tertiary mb48">
        <figure class="banner-img thumb">
          <img src="@\assets\images\pic\related_app.png" alt="연관된 앱 광고 배너 이미지" />
        </figure>
        <div class="banner-info">
          <strong class="title">지역화폐 사용가능 배달앱</strong>
          <button class="btn text">
            먹깨비 앱으로 이동하기
            <svg class="icon sm">
              <use xlink:href="@/assets/images/icons/symbols.svg#arrow_right"></use>
            </svg>
          </button>
        </div>
      </article>
      <!-- 04: 오시는길 컨텐츠 -->
      <section class="main-section bg-blue">
        <div class="section-header">
          <div class="title-wrap">
            <h2 class="heading-03">중앙시장 오시는 길</h2>
          </div>
          <p class="address">
            <svg class="icon">
              <use xlink:href="@/assets/images/icons/symbols.svg#location"></use>
            </svg>
            경기 용인시 처인구 김량장동
          </p>
        </div>
        <div class="section-content">
          <figure class="map-img thumb">
            <img src="@/assets/images/pic/yongin_market_map.jpg" alt="용인시 중앙시장 지도" />
          </figure>
          <!-- 지하철 이용안내 -->
          <article class="transport">
            <h3 class="transport-title">
              <svg class="icon">
                <use xlink:href="@/assets/images/icons/symbols.svg#subway"></use></svg>지하철 이용시
            </h3>
            <dl class="transport-list subway">
              <div class="tl-item">
                <dt class="tl-name green">에버라인</dt>
                <dd class="tl-desc">
                  운동장 송담대역
                  <span>(중앙시장 하차 후 3번 출구 도보 3분)</span>
                </dd>
              </div>
              <div class="tl-item">
                <dt class="tl-name orange">수인분당선</dt>
                <dd class="tl-desc">
                  운동장 송담대역
                  <span>기흥역에서 에버라인으로 환승<br />(중앙시장 하차 후 3번 출구 도보 3분)</span>
                </dd>
              </div>
            </dl>
          </article>
          <!-- 버스 노선별 안내 -->
          <article class="transport">
            <h3 class="transport-title">
              <svg class="icon">
                <use xlink:href="@/assets/images/icons/symbols.svg#bus"></use></svg>버스 이용시
            </h3>
            <dl class="transport-list bus">
              <div class="tl-item">
                <dt class="tl-name">용인중앙시장역 하차</dt>
                <dd class="tl-desc num">
                  <p class="green">
                    <span>8, 20, 66-4, 70</span>
                  </p>
                  <p class="red">
                    <span>5002B, 5600B</span>
                  </p>
                </dd>
              </div>
              <div class="tl-item">
                <dt class="tl-name">용인시장. 시장약국 하차</dt>
                <dd class="tl-desc num">
                  <p class="green">
                    <span>10, 66, 690, 820</span>
                  </p>
                  <p class="red">
                    <span>5005, 5600</span>
                  </p>
                </dd>
              </div>
            </dl>
          </article>
          <!-- 주변 주차장 현황 -->
          <article class="transport">
            <h3 class="transport-title">
              <svg class="icon">
                <use xlink:href="@/assets/images/icons/symbols.svg#parking"></use></svg>주변 주차장 현황
            </h3>
            <ul class="parking-list">
              <li class="pl-item">
                <strong class="pl-name">제1공영주차장</strong>
                <span class="pl-desc">경기 용인시 처인구 금령로71번길 12-29</span>
                <dl class="pl-state">
                  <dt>주차 가능대수</dt>
                  <dd class="red">만차</dd>
                </dl>
              </li>
              <li class="pl-item">
                <strong class="pl-name">제2공영주차장</strong>
                <span class="pl-desc">경기 용인시 처인구 금령로107번길 13</span>
                <dl class="pl-state">
                  <dt>주차 가능대수</dt>
                  <dd class="blue">5</dd>
                </dl>
              </li>
              <li class="pl-item">
                <strong class="pl-name">중앙동행정주차장</strong>
                <span class="pl-desc">경기 용인시 처인구 김량장동 금령로90번길 3-20</span>
                <dl class="pl-state">
                  <dt>주차 가능대수</dt>
                  <dd class="blue">120</dd>
                </dl>
              </li>
            </ul>
          </article>
        </div>
      </section>
      <!-- 05: 소식 컨텐츠 -->
      <section class="main-section">
        <div class="section-header">
          <div class="title-wrap">
            <h2 class="heading-03">중앙시장 소식</h2>
            <router-link to="/details" class="btn text sm" aria-label="쿠폰 전체보기">전체보기</router-link>
          </div>
          <p class="subtitle">중앙시장의 다양한 행사, 이벤트, 공지 소식</p>
        </div>
        <div class="section-content">
          <!-- 중앙시작의 소식 리스트 3개 -->
          <article class="news">
            <ul class="news-list">
              <li class="news-item tertiary">
                <span class="cate">공지</span>
                <p class="title">별빛 마당 야시장 셀러 모집 공고</p>
              </li>
              <li class="news-item primary">
                <span class="cate">이벤트</span>
                <p class="title">중앙시장 수험생 격려 이벤트</p>
              </li>
              <li class="news-item secondary">
                <span class="cate">행사</span>
                <p class="title">별빛 마당 야시장 개최</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
      <!-- 배너: 중앙시장 APP 공유 -->
      <article class="ad-banner primary mb48">
        <figure class="banner-img thumb">
          <img src="@/assets/images/pic/share_app.png" alt="앱 공유하기 배너 이미지" />
        </figure>
        <div class="banner-info">
          <strong class="title">중앙시장 APP 공유</strong>
          <button class="btn text">
            QR코드 스캔하고 함께 쓰기
            <svg class="icon sm">
              <use xlink:href="@/assets/images/icons/symbols.svg#arrow_right"></use>
            </svg>
          </button>
        </div>
      </article>
    </main>
    <!-- 푸터 메뉴 -->
    <BottomNav />
  </div>
</template>

<script setup>
import MainHeader from "@/components/layout/header/MainHeader.vue";
import BottomNav from "@/components/layout/footer/BottomNav.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { ref } from "vue";

// chip
const activeChip = ref("추천 맛집");

// 알럿
const isAlert = ref(true);

// 알럿 배너 닫기
const closeAlert = () => {
  isAlert.value = false;
};
</script>

<style scoped></style>
