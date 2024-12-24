<!-- BottomSheetBasic.vue -->
<template>
  <Transition name="bottom-sheet">
    <div v-if="show" class="bottom-sheet-wrapper">
      <!-- 배경 오버레이 -->
      <div class="bottom-sheet-overlay"></div>

      <!-- 바텀시트 본체 -->
      <div class="bottom-sheet">
        <!-- 바텀시트 헤더: 타입별 클래스 적용 -->
        <div :class="['bottom-sheet-header', headerType]">
          <slot name="header"></slot>
        </div>

        <!-- 바텀시트 콘텐츠: 타입별 클래스 적용 -->
        <div :class="['bottom-sheet-content', contentType]">
          <slot></slot>
        </div>

        <!-- 바텀시트 푸터 -->
        <div class="bottom-sheet-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  headerType: {
    type: String,
    default: "", // with-title
  },
  contentType: {
    type: String,
    default: "", // with-image
  },
});
</script>
