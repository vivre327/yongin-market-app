<template>
  <div class="Layout SubLayout store">
    <!-- 서브 상세페이지 헤더 -->
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
    <main></main>
    <BottomNav />
  </div>
</template>

<script setup>
import SubHeader from "@/components/layout/header/SubHeader.vue";
import BottomNav from "@/components/layout/footer/BottomNav.vue";
</script>
