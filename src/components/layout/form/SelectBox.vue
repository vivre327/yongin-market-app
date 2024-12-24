<!-- CustomSelect.vue -->
<template>
  <div class="form-element">
    <!-- 셀렉트 트리거 -->
    <div class="form-element__control select-wrap">
      <button
        type="button"
        class="select"
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-controls="options-list"
        @click="openSheet"
      >
        {{ modelValue || placeholder }}
        <span class="icon-arrow" aria-hidden="true"></span>
      </button>
      <button class="btn-icon" aria-label="필터">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="@/assets/images/icons/symbols.svg#arrow_down"></use>
        </svg>
      </button>
    </div>

    <!-- 바텀시트 -->
    <Teleport to="body">
      <Transition name="bottom-sheet">
        <div v-if="isOpen" class="bottom-sheet-wrapper">
          <div class="bottom-sheet-overlay" @click="closeSheet"></div>
          <div class="bottom-sheet">
            <div class="bottom-sheet-header with-title">
              <h2 class="title">{{ label }}</h2>
              <button class="btn-icon" @click="closeSheet">
                <svg class="icon">
                  <use xlink:href="@/assets/images/icons/symbols.svg#close"></use>
                </svg>
              </button>
            </div>
            <div class="bottom-sheet-content no-padding">
              <ul class="select-list">
                <li 
                  v-for="option in options" 
                  :key="option.value" 
                  class="select-item"
                  :class="{ 'is-selected': modelValue === option.value }"
                  @click="selectOption(option.value)"
                >
                  {{ option.label }}
                  <svg v-if="modelValue === option.value" class="icon">
                    <use xlink:href="@/assets/images/icons/symbols.svg#check_24"></use>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'

/** 속성(props) */
defineProps({
 modelValue: {
   type: [String, Number],
   default: ''
 },

 // 선택 가능한 옵션 배열
 options: {
   type: Array,
   default: () => []
 },

 // 바텀시트 헤더에 표시될 제목
 label: {
   type: String,
   default: '옵션 선택'
 },

 // 플레이스홀더
 placeholder: {
   type: String,
   default: '전체'
 }
})

 /** 부모 컴포넌트로 내보낼 이벤트 */
const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)

// 바텀시트 열기
const openSheet = () => {
 isOpen.value = true
 // 바텀시트가 열리면 body 스크롤을 막기
 document.body.style.overflow = 'hidden'
}

// 바텀시트 닫기
const closeSheet = () => {
 isOpen.value = false
 // 바텀시트가 닫히면 스크롤을 다시 활성화
 document.body.style.overflow = ''
}

// 1. 옵션 선택 함수 (선택하면 바로 닫힘)
// const selectOption = (value) => {
//   // 선택된 값을 부모에게 알림
//   emit('update:modelValue', value)
//   // 바텀시트 닫기
//   closeSheet()
// }

// 2. 옵션 선택 함수 (시각적 피드백을 준 후 닫힘?)
const selectOption = (value) => {
  emit('update:modelValue', value)
  setTimeout(() => {
    closeSheet()
  }, 150) // 딜레이
}

// update:modelValue: 자식이 새 값을 부모에게 전달할 때 사용하는 이벤트 이름 (변수로 선언하기)

// 부모: selectedCategory -> 자식: modelValue로 전달
// 자식: emit('update:modelValue', 새로운값) -> 부모: selectedCategory가 새로운값으로 업데이트
</script>