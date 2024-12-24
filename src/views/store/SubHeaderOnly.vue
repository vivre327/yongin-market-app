<template>
  <div class="Layout SubLayout store">
    <!-- 서브 이전버튼만 있는 헤더 -->
    <SubHeader pageTitle="" hasBackButton isBackOnly></SubHeader>
    <main></main>
    <BottomNav />
  </div>
</template>

<script setup>
import SubHeader from "@/components/layout/header/SubHeader.vue";
import BottomNav from "@/components/layout/footer/BottomNav.vue";
</script>
