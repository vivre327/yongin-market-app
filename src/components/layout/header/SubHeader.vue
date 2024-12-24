<template>
  <header class="sub-header">
    <div class="sub-header-inner" :class="{ 'is-detail': isDetailHeader, 'is-only': isBackOnly }">
      <button v-if="hasBackButton" class="btn-icon btn-back" aria-label="이전 페이지로 돌아가기" @click="goBack">
        <svg class="icon">
          <use xlink:href="@/assets/images/icons/symbols.svg#back"></use>
        </svg>
      </button>
      <h1 class="title">
        {{ pageTitle }}
      </h1>
      <div class="right-area">
        <slot name="right"></slot>
      </div>
    </div>
  </header>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
 // 서브헤더의 제목
 pageTitle: {
   type: String,
 },
 // 뒤로가기 버튼 표시 여부
 hasBackButton: {
   type: Boolean,
   default: false,
 },
 // 상세 페이지용 작은 사이즈 헤더 사용 여부
 isDetailHeader: { 
   type: Boolean,
   default: false,
 },
 // 뒤로가기 버튼만 표시 (타이틀 미표시)
 isBackOnly: {
   type: Boolean,
   default: false,
 },
})

const goBack = () => {
  console.log("이전");
};
</script>

<style scoped></style>
