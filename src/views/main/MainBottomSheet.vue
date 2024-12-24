<template>
  <h2 class="heading-01 mb16">[Popup01] 필수권한 설정 안내 팝업</h2>
  <div class="btn-area mb48">
    <button class="btn primary" @click="isModalVisible1 = true">블루투스 + 위치</button>
    <button class="btn primary" @click="isModalVisible2 = true">블루투스</button>
    <button class="btn primary" @click="isModalVisible3 = true">위치</button>
  </div>

  <h2 class="heading-01 mb16">[Popup02] 비콘수신 쿠폰 알림 팝업</h2>
  <div class="btn-area mb48">
    <button class="btn secondary" @click="isModalVisible4 = true">쿠폰알림 팝업</button>
  </div>

  <h2 class="heading-01 mb16">[Popup03] 중앙시장 APP 공유하기 팝업</h2>
  <div class="btn-area">
    <button class="btn secondary" @click="isModalVisible5 = true">공유하기 팝업</button>
  </div>

  <!-- Popup01: 블루투스 + 위치 -->
  <BottomSheet :show="isModalVisible1" header-type="with-title" content-type="with-image">
    <!-- 헤더 슬롯 -->
    <template #header>
      <h2 class="title">필수 권한 설정 안내</h2>
      <button class="btn-icon" @click="isModalVisible1 = false">
        <svg class="icon">
          <use xlink:href="@/assets/images/icons/symbols.svg#close"></use>
        </svg>
      </button>
    </template>

    <!-- 기본 슬롯 (콘텐츠) -->
    <figure class="pic-area">
      <img src="@/assets/images/pic/pic_permission.png" alt="권한 설정" />
    </figure>
    <p class="body-02-m">
      원활한 서비스 이용을 위해<br />
      필수 권한이 반드시 필요해요.
    </p>

    <!-- 푸터 슬롯 -->
    <template #footer>
      <div class="btn-area">
        <button class="btn secondary" @click="isModalVisible1 = false">나중에 하기</button>
        <button class="btn primary">권한 설정하기</button>
      </div>
    </template>
  </BottomSheet>

  <!-- Popup01: 블루투스 -->
  <BottomSheet :show="isModalVisible2" header-type="with-title" content-type="with-image">
    <template #header>
      <h2 class="title">필수 권한 설정 안내</h2>
      <button class="btn-icon" @click="isModalVisible2 = false">
        <svg class="icon">
          <use xlink:href="@/assets/images/icons/symbols.svg#close"></use>
        </svg>
      </button>
    </template>
    <figure class="pic-area">
      <img src="@/assets/images/pic/pic_permission_bluetooth.png" alt="권한 설정" />
    </figure>
    <p class="body-02-m">
      원활한 서비스 이용을 위해<br />
      필수 권한이 반드시 필요해요.
    </p>
    <template #footer>
      <div class="btn-area">
        <button class="btn secondary" @click="isModalVisible2 = false">나중에 하기</button>
        <button class="btn primary">권한 설정하기</button>
      </div>
    </template>
  </BottomSheet>

  <!-- Popup01: 위치 -->
  <BottomSheet :show="isModalVisible3" header-type="with-title" content-type="with-image">
    <template #header>
      <h2 class="title">필수 권한 설정 안내</h2>
      <button class="btn-icon" @click="isModalVisible3 = false">
        <svg class="icon">
          <use xlink:href="@/assets/images/icons/symbols.svg#close"></use>
        </svg>
      </button>
    </template>
    <figure class="pic-area">
      <img src="@/assets/images/pic/pic_permission_location.png" alt="권한 설정" />
    </figure>
    <p class="body-02-m">
      원활한 서비스 이용을 위해<br />
      필수 권한이 반드시 필요해요.
    </p>
    <template #footer>
      <div class="btn-area">
        <button class="btn secondary" @click="isModalVisible3 = false">나중에 하기</button>
        <button class="btn primary">권한 설정하기</button>
      </div>
    </template>
  </BottomSheet>

  <!-- Popup02: 쿠폰알림 팝업 -->
  <BottomSheet :show="isModalVisible4" header-type="with-title" content-type="with-image">
    <template #header>
      <h2 class="title">골목 혜택 발견!</h2>
      <button class="btn-icon" @click="isModalVisible4 = false">
        <svg class="icon">
          <use xlink:href="@/assets/images/icons/symbols.svg#close"></use>
        </svg>
      </button>
    </template>
    <figure class="pic-area">
      <img src="@/assets/images/pic/pic_coupon_discount.svg" alt="쿠폰 알림" />
    </figure>
    <p class="body-02-m">
      내 주변 상점에서 사용 가능한 쿠폰이 있어요.<br />
      지금 바로 확인해보세요!
    </p>
    <template #footer>
      <div class="btn-area">
        <button class="btn primary">쿠폰함 바로가기</button>
      </div>
    </template>
  </BottomSheet>

  <!-- Popup03: 공유하기 팝업 -->
  <BottomSheet :show="isModalVisible5" content-type="with-image qr">
    <template #header>
      <button class="btn-icon" @click="isModalVisible5 = false">
        <svg class="icon">
          <use xlink:href="@/assets/images/icons/symbols.svg#close"></use>
        </svg>
      </button>
    </template>
    <p class="title-01-b">
      QR코드 스캔하고<br />
      중앙시장APP 친구와 함께 써요
    </p>
    <figure class="pic-area">
      <img src="@/assets/images/temp/qr_sample.png" alt="QR 코드" />
    </figure>
    <template #footer>
      <div class="btn-area">
        <button class="btn with-icon">
          <svg class="icon sm">
            <use xlink:href="@/assets/images/icons/symbols.svg#share"></use></svg>공유하기
        </button>
      </div>
    </template>
  </BottomSheet>
</template>

<script setup>
import { ref } from "vue";
import BottomSheet from "@/components/dialog/BottomSheet.vue";

const isModalVisible1 = ref(false);
const isModalVisible2 = ref(false);
const isModalVisible3 = ref(false);
const isModalVisible4 = ref(false);
const isModalVisible5 = ref(false);
</script>
