<template>
  <div class="Layout SubLayout store">
    <SubHeader pageTitle="주변 상점 검색" hasBackButton isDetailHeader>
      <template v-slot:right>
        <button class="btn text">
          <svg class="icon">
            <use xlink:href="@/assets/images/icons/symbols.svg#refresh"></use>
          </svg>
          재검색
        </button>
      </template>
    </SubHeader>
    <main class="container sub-container store-container">

      <div class="scroll-area">
        <!-- 필터 섹션 -->
        <section class="filter-section">
          <!-- 상점 검색하기 인풋 -->
          <div class="form-element">
            <label class="form-element__label a11y-hidden" for="search">상점명, 키워드 검색</label>
            <div class="form-element__control input-has-icon">
              <input type="text" id="search" class="input input-search" placeholder="상점명, 키워드 검색" autocomplete="off"
                :value="searchText" @input="handleInput">
              <button class="btn-icon" aria-label="검색">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="@/assets/images/icons/symbols.svg#search"></use>
                </svg>
              </button>
              <button type="button" class="btn-icon clear" @click="clearSearch" v-show="searchText" aria-label="삭제">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="@/assets/images/icons/symbols.svg#delete"></use>
                </svg>
              </button>
            </div>
          </div>
        </section>
        <!-- 상점 리스트 섹션 -->
        <section class="store-section">
          <p class="store-list-header">전체 <strong>55</strong></p>
          <ul class="store-list store">
            <li class="store-item">
              <div class="store-info">
                <strong class="store-name">
                  <span>창승식품</span>
                  <span class="badge food">
                    <svg class="icon">
                      <use xlink:href="@/assets/images/icons/symbols.svg#food"></use>
                    </svg>
                    반찬
                  </span>
                </strong>
                <p class="store-desc">용인시 처인구 금령로99번길 15</p>
              </div>
              <div class="coupon-tag">
                <svg class="icon">
                  <use xlink:href="@/assets/images/icons/symbols.svg#coupon"></use>
                </svg>
                <span>쿠폰</span>
              </div>
            </li>
            <li class="store-item">
              <div class="store-info">
                <strong class="store-name">
                  <span>골목식당</span>
                  <span class="badge fnb">
                    <svg class="icon">
                      <use xlink:href="@/assets/images/icons/symbols.svg#fnb"></use>
                    </svg>
                    음식점/카페
                  </span>
                </strong>
                <p class="store-desc">용인시 처인구 금령로107번길 8</p>
              </div>
            </li>
            <li class="store-item">
              <div class="store-info">
                <strong class="store-name">
                  <span>성산분식</span>
                  <span class="badge fnb">
                    <svg class="icon">
                      <use xlink:href="@/assets/images/icons/symbols.svg#fnb"></use>
                    </svg>
                    음식점/카페
                  </span>
                </strong>
                <p class="store-desc">용인시 처인구 용문로204</p>
              </div>
            </li>
            <li class="store-item">
              <div class="store-info">
                <strong class="store-name">
                  <span>상상과일나라</span>
                  <span class="badge fruit">
                    <svg class="icon">
                      <use xlink:href="@/assets/images/icons/symbols.svg#fruit"></use>
                    </svg>
                    과일
                  </span>
                </strong>
                <p class="store-desc">용인시 처인구 금령로 85번길 18</p>
              </div>
              <div class="coupon-tag">
                <svg class="icon">
                  <use xlink:href="@/assets/images/icons/symbols.svg#coupon"></use>
                </svg>
                <span>쿠폰</span>
              </div>
            </li>
            <li class="store-item">
              <div class="store-info">
                <strong class="store-name">
                  <span>이규혁 오징어</span>
                  <span class="badge etc">
                    <svg class="icon">
                      <use xlink:href="@/assets/images/icons/symbols.svg#etc"></use>
                    </svg>
                    기타
                  </span>
                </strong>
                <p class="store-desc">용인시 처인구 금령로 85번길 15</p>
              </div>
            </li>
            <li class="store-item">
              <div class="store-info">
                <strong class="store-name">
                  <span>최신 유행을 선도하는 패션 전문점</span>
                  <span class="badge clothes">
                    <svg class="icon">
                      <use xlink:href="@/assets/images/icons/symbols.svg#clothes"></use>
                    </svg>
                    의류/잡화
                  </span>
                </strong>
                <p class="store-desc">용인시 처인구 금령로 90번길 22, 금령상가 1106호</p>
              </div>
              <div class="coupon-tag">
                <svg class="icon">
                  <use xlink:href="@/assets/images/icons/symbols.svg#coupon"></use>
                </svg>
                <span>쿠폰</span>
              </div>
            </li>
            <li class="store-item">
              <div class="store-info">
                <strong class="store-name">
                  <span>신선한 해산물을 제공하는 처인수산</span>
                  <span class="badge farm">
                    <svg class="icon">
                      <use xlink:href="@/assets/images/icons/symbols.svg#farm"></use>
                    </svg>
                    농축수산
                  </span>
                </strong>
                <p class="store-desc">용인시 처인구 금령로 88번길 10</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
    <BottomNav />
  </div>
</template>

<script setup>
import SubHeader from "@/components/layout/header/SubHeader.vue";
import BottomNav from "@/components/layout/footer/BottomNav.vue";
import { ref } from "vue";

/** 검색창 */
const searchText = ref('')

//검색어 입력
const handleInput = (event) => {
  searchText.value = event.target.value
}

//검색어 초기화
const clearSearch = () => {
  searchText.value = ''
}

</script>
