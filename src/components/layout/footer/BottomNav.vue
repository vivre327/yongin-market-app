<template>
  <!-- 푸터 메뉴 -->
  <footer class="footer">
    <nav class="bottom-nav">
      <ul>
        <li class="nav-item">
          <router-link to="/home" :class="['nav-link', { active: isActive('/home') }]" @click="updateActiveMenu('/home')">
            <span class="icon icon-home"></span>
            <span>홈</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/store" :class="['nav-link', { active: isActive('/store') }]" @click="updateActiveMenu('/store')">
            <span class="icon icon-store"></span>
            <span>상점</span>
          </router-link>
        </li>
        <li class="nav-item">
          <a :class="['nav-link', { active: isActive('/coupon') }]" href="#" @click.prevent="updateActiveMenu('/coupon')">
            <span class="icon icon-coupon"></span>
            <span>쿠폰</span>
          </a>
        </li>
        <li class="nav-item more">
          <a :class="['nav-link', { active: isActive('/more') }]" href="#" @click.prevent="updateActiveMenu('/more')">
            <span class="icon icon-more"></span>
            <span>더보기</span>
          </a>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const activeMenu = ref(route.path);

watch(
  () => route.path,
  (newPath) => {
    activeMenu.value = newPath;
  }
);

const updateActiveMenu = (path) => {
  activeMenu.value = path;
};

const isActive = (path) => {
  return activeMenu.value.startsWith(path);
};
</script>
