<template>
  <div class="Layout SubLayout store">
    <SubHeader pageTitle="상점">
      <template v-slot:right>
        <button class="btn-icon" aria-label="비콘 위치정보">
          <svg class="icon">
            <use xlink:href="@/assets/images/icons/symbols.svg#map"></use>
          </svg>
        </button>
      </template>
    </SubHeader>
    <main class="container sub-container store-container">
      
      <!-- 스크롤 영역 -->
      <div class="scroll-area">
        <!-- 필터 섹션 -->
        <section class="filter-section">
          <!-- 카테고리 셀렉트박스 -->
          <!-- 상점 검색하기 인풋 -->
          <div class="form-element">
            <label class="form-element__label a11y-hidden" for="text-input-id-0">상점명, 키워드 검색</label>
            <div class="form-element__control input-has-icon">
              <input type="text" id="text-input-id-0" placeholder="상점명, 키워드 검색" class="input" />
              <button class="btn-icon" title="검색" aria-label="검색">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="@/assets/images/icons/symbols.svg#search"></use>
                </svg>
              </button>
            </div>
          </div>
        </section>

        <!-- 상점 리스트 섹션 -->
        <section class="store-section">
          <p class="store-list-header">전체 <strong>55</strong></p>
          <template v-if="!isStoreListEmpty">
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
          </template>

          <!-- Store01: 검색결과 없음 -->
          <!-- <template v-else>
            <div class="empty-state">
              <svg class="icon">
                <use xlink:href="@/assets/images/icons/symbols.svg#no_result"></use>
              </svg>
              <p>검색 결과가 없습니다.</p>
            </div>
          </template> -->

          <!-- Store02: 스캔된 상점 없음 -->
          <!-- <template v-else>
            <div class="empty-state">
              <svg class="icon">
                <use xlink:href="@/assets/images/icons/symbols.svg#no_shop"></use>
              </svg>
              <p>검색된 주변 상점이 없습니다.</p>
            </div>
          </template> -->

          <!-- Store02: 검색결과 없음 -->
          <!-- <template v-else>
            <div class="empty-state">
              <svg class="icon">
                <use xlink:href="@/assets/images/icons/symbols.svg#no_result"></use>
              </svg>
              <p>검색 결과가 없습니다.</p>
            </div>
          </template> -->

          <!-- Store02: 블루투스 비활성화 상태 -->
          <template v-else>
            <div class="empty-state">
              <svg class="icon">
                <use xlink:href="@/assets/images/icons/symbols.svg#no_bluetooth"></use>
              </svg>
              <p class="msg">블루투스 비활성화<br>주변 상점 정보를 불러올 수 없습니다.</p>
              <p class="info-box">블루투스를 켜고<br>
                우측 상단 <strong class="green-500">재검색</strong> 버튼을 눌러주세요!</p>
            </div>
          </template>

        </section>
      </div>

      <!-- 플로팅 버튼 -->
       <!-- <div class="btn-area mt20 mb48">
        <button class="btn with-icon">
          <svg class="icon">
            <use xlink:href="@/assets/images/icons/symbols.svg#marker"></use>
          </svg>
          주변 상점 검색
        </button>
       </div> -->
    </main>
    <!-- <BottomNav /> -->
  </div>
</template>

<script setup>
import SubHeader from "@/components/layout/header/SubHeader.vue";
// import BottomNav from "@/components/layout/footer/BottomNav.vue";
import { ref } from "vue";

const isStoreListEmpty = ref(true);
</script>
