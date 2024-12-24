<template>
  <!-- 메인 헤더 -->
  <header class="header">
    <div class="header-inner" role="banner">
      <!-- 메인 로고 -->
      <h1 class="logo">
        <img src="@/assets/images/logo/logo.png" alt="행복을 파는 용인중앙시장" aria-label="용인중앙시장 - 메인으로 이동" width="125" height="56" />
      </h1>
      <!-- 일일 방문자 수 -->
      <div class="visitor-info" role="status" aria-live="polite">
        <svg class="icon" role="img" aria-label="방문자 아이콘">
          <use xlink:href="@/assets/images/icons/symbols.svg#visitor"></use>
        </svg>
        <span class="visitor-count">1234</span>
      </div>
    </div>
  </header>
</template>

<script setup></script>
