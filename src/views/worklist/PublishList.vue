<template>
  <div class="worklist-content" ref="top">
    <h1 class="worklist-title">Argos Classroom 수업 관리 사이트</h1>
    <router-link to="/worklist/StyleGuide" class="btn primary">퍼블리싱 컴포넌트</router-link>
    <div class="worklist-table">
      <h5>
        Main: 메인
        <div>
          <!-- <button class="btn secondary" @click="scrollToElement('main')">메인</button>
          <button class="btn secondary" @click="scrollToElement('class')">교실</button>
          <button class="btn secondary" @click="scrollToElement('tool')">툴바</button>
          <button class="btn secondary" @click="scrollToElement('EH')">예외사항</button> -->
        </div>
      </h5>
      <table class="worklist-table" ref="main">
        <colgroup>
          <col style="width: 25%" />
          <col style="width: auto" />
          <col style="width: 10%" span="2" />
          <col style="width: 16%" />
        </colgroup>
        <thead>
          <tr>
            <th class="text-cetner">화면명</th>
            <th class="text-cetner">화면 경로</th>
            <th class="text-cetner">화면 아이디</th>
            <th class="text-cetner">진행상황</th>
            <th class="text-cetner">비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">메인 홈</td>
            <td class="text-left">
              <router-link to="/home" target="_blank">경로 : @/views/main/MainHome.vue</router-link>
            </td>
            <td class="text-center">Main01</td>
            <td class="text-center">작업완료</td>
            <td class="text-left"><strong>12-23</strong> 추가</td>
          </tr>
          <tr>
            <td class="text-center">메인 홈 [바텀시트]</td>
            <td class="text-left">
              <router-link to="/MainBottomSheet" target="_blank">경로 : @/views/main/MainBottomSheet.vue</router-link>
            </td>
            <td class="text-center">Popup01, Popup02, Popup03</td>
            <td class="text-center">작업완료</td>
            <td class="text-left"><strong>12-23</strong> 추가</td>
          </tr>
        </tbody>
      </table>
      <h5>
        Store: 상점
        <div>
          <!-- <button class="btn secondary" @click="scrollToElement('main')">메인</button>
          <button class="btn secondary" @click="scrollToElement('class')">교실</button>
          <button class="btn secondary" @click="scrollToElement('tool')">툴바</button>
          <button class="btn secondary" @click="scrollToElement('EH')">예외사항</button> -->
        </div>
      </h5>
      <table class="worklist-table" ref="store">
        <colgroup>
          <col style="width: 25%" />
          <col style="width: auto" />
          <col style="width: 10%" span="2" />
          <col style="width: 16%" />
        </colgroup>
        <thead>
          <tr>
            <th class="text-cetner">화면명</th>
            <th class="text-cetner">화면 경로</th>
            <th class="text-cetner">화면 아이디</th>
            <th class="text-cetner">진행상황</th>
            <th class="text-cetner">비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">상점 목록</td>
            <td class="text-left">
              <router-link to="/store" target="_blank">경로 : @/views/store/StoreMain.vue</router-link>
            </td>
            <td class="text-center">Store01</td>
            <td class="text-center">예정</td>
            <td class="text-left"><strong>12-24</strong> 상점 전체 업로드 예정</td>
          </tr>
          <tr>
            <td class="text-center">상점 > 검색 결과 없음</td>
            <td class="text-left">
              <router-link to="/store/StoreSearchEmpty" target="_blank">경로 :
                @/views/store/StoreSearchEmpty.vue</router-link>
            </td>
            <td class="text-center">Store01</td>
            <td class="text-center">작업완료</td>
            <td class="text-left"><strong>12-24</strong> 완료</td>
          </tr>
          <tr>
            <td class="text-center">상점 > 주변 상점 검색</td>
            <td class="text-left">
              <router-link to="/store/StoreNearby" target="_blank">경로 : @/views/store/StoreNearby.vue</router-link>
            </td>
            <td class="text-center">Store01</td>
            <td class="text-center">예정</td>
            <td class="text-left"><strong>12-24</strong> 상점 전체 업로드 예정</td>
          </tr>
          <tr>
            <td class="text-center">상점 > 주변상점검색 > 블루투스 비활성화 상태</td>
            <td class="text-left">
              <router-link to="/store/StoreBtDisabled" target="_blank">경로 :
                @/views/store/StoreBtDisabled.vue</router-link>
            </td>
            <td class="text-center">Store02</td>
            <td class="text-center">작업완료</td>
            <td class="text-left"><strong>12-24</strong> 완료</td>
          </tr>
          <tr>
            <td class="text-center">상점 > 주변상점검색 > 스캔된 상점 없음</td>
            <td class="text-left">
              <router-link to="/store/StoreNearbyEmpty" target="_blank">경로 :
                @/views/store/StoreNearbyEmpty.vue</router-link>
            </td>
            <td class="text-center">Store02</td>
            <td class="text-center">작업완료</td>
            <td class="text-left"><strong>12-24</strong> 완료</td>
          </tr>
          <tr>
            <td class="text-center">상점 > 주변상점검색 > 검색 결과 불일치 경우</td>
            <td class="text-left">
              <router-link to="/store/StoreNearbyNoMatch" target="_blank">경로 :
                @/views/store/StoreNearbyNoMatch.vue</router-link>
            </td>
            <td class="text-center">Store02</td>
            <td class="text-center">작업완료</td>
            <td class="text-left"><strong>12-24</strong> 완료</td>
          </tr>
        </tbody>
      </table>
      <h5>
        coupon: 쿠폰
        <div>
          <!-- <button class="btn secondary" @click="scrollToElement('main')">메인</button>
          <button class="btn secondary" @click="scrollToElement('class')">교실</button>
          <button class="btn secondary" @click="scrollToElement('tool')">툴바</button>
          <button class="btn secondary" @click="scrollToElement('EH')">예외사항</button> -->
        </div>
      </h5>
      <table class="worklist-table" ref="coupon">
        <colgroup>
          <col style="width: 25%" />
          <col style="width: auto" />
          <col style="width: 10%" span="2" />
          <col style="width: 16%" />
        </colgroup>
        <thead>
          <tr>
            <th class="text-cetner">화면명</th>
            <th class="text-cetner">화면 경로</th>
            <th class="text-cetner">화면 아이디</th>
            <th class="text-cetner">진행상황</th>
            <th class="text-cetner">비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">보유쿠폰 목록</td>
            <td class="text-left">
              <router-link to="" target="_blank">경로 : </router-link>
            </td>
            <td class="text-center">Coupon01</td>
            <td class="text-center">예정</td>
            <td class="text-left"><strong>12-24</strong> 쿠폰 전체 업로드 예정</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToElement(refName) {
      const element = this.$refs[refName];
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped lang="scss">
body {
  white-space: normal;
}

th,
td {
  white-space: normal;
}

.fix {
  color: #ff386a;
}

.log {
  display: inline-block;
  height: 38px;
  padding-left: 12px;
}

.log i {
  font-weight: 500;
  color: #ff386a;
  margin-right: 5px;

  &:before {
    content: "[";
    display: inline-block;
  }

  &:after {
    content: "]";
    display: inline-block;
  }
}

details {
  cursor: pointer;
}

summary strong {
  color: #a49a9a;
}

strong {
  padding-top: 5px;
  color: #5089ef;

  &:before {
    content: "[";
    display: inline-block;
  }

  &:after {
    content: "]";
    display: inline-block;
  }
}

b {
  padding-top: 5px;
  color: #ff386a;

  &:before {
    content: "[";
    display: inline-block;
  }

  &:after {
    content: "]";
    display: inline-block;
  }
}

strong,
span,
b {
  display: block;
}

.worklist-content {
  padding: 30px 50px;

  .worklist-title {
    font-size: 30px;
    font-weight: 700;
    margin: 0 0 20px;
    line-height: normal;
    color: #004d53;
  }

  .worklist-table {
    width: 100%;
    margin-top: 20px;
    border-top: solid 2px rgba(0, 0, 0, 0.12);
    text-align: center;

    h5 {
      margin-top: 20px;
      font-size: 21px;
      position: sticky;
      top: 0;
      background: #ececec;
      z-index: 3;
      font-weight: bold;
      padding: 8px 10px;
      border-bottom: solid 2px rgba(0, 0, 0, 0.12);
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        margin-left: 5px;
      }

      +table {
        margin-top: 20px;
      }
    }

    tr {
      border: 1px solid rgba(0, 0, 0, 0.12);

      &:hover {
        background-color: #f7f7f7;
      }
    }

    tbody {

      th,
      td {
        padding: 0.625rem 1.25rem;
      }
    }

    th {
      height: 50px;
      font-size: 14px;
      word-break: keep-all;
      vertical-align: middle;
    }

    td {
      height: 50px;
      font-size: 14px;
      font-weight: 500;
      word-break: keep-all;
      vertical-align: middle;

      &.text-left {
        text-align: left;
      }
    }

    thead {
      tr {
        th {
          font-size: 15px;
          font-weight: 700;
          background-color: #f5f5f5;
          text-align: center;
        }
      }
    }

    a {
      font-size: inherit;
      text-decoration: none;
      cursor: pointer;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
  }
}

.go-top {
  width: 60px;
  height: 60px;
  border-radius: 999px;
  border: 1px solid var(--color-blue-05);
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 10;
  box-shadow: 8px 8px 20px 0px #0000001a;
}

@media (max-width: 768px) {
  .worklist-content {
    padding: 20px;

    .worklist-title {
      flex: 1;
      font-size: 24px;
      width: auto;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }

    table.worklist-table {
      width: auto;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  .go-top {
    width: 50px;
    height: 50px;
    bottom: 30px;
    right: 30px;
  }
}
</style>
