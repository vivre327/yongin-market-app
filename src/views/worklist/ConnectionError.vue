<template>
  <div class="error-page">
    <h2 class="error-title">용인시 중앙시장 APP 퍼블리시</h2>
    <p class="error-desc">잘못된 경로로 접근하셨거나,<br />사용할 수 없는 웹사이트 주소입니다.</p>
    <div class="btn-area">
      <button class="btn primary" @click="$router.push('/worklist/PublishList')">퍼블 목차</button>
      <button class="btn secondary" @click="$router.push('/home')">메인으로</button>
      <button class="btn secondary" @click="$router.go(-1)">뒤로 가기</button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100dvh; */
  height: 100%;
  padding: 2rem;
  background-color: var(--color-green-50);
  text-align: center;
}

.error-title {
  margin-bottom: 2.5rem;
  font-size: 1.625rem;
  color: var(--color-green-900);
}

.error-desc {
  margin-bottom: 2.5rem;
  font-size: 1.125rem;
  color: var(--color-green-700);
}

.button {
  margin-top: 20px;
}
</style>
