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
      
      <!-- 스크롤 영역 -->
      <div class="scroll-area">
        <!-- 필터 섹션 -->
        <section class="filter-section">
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
          <template v-if="!isStoreListEmpty">
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
            </ul>
          </template>

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
