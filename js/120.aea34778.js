"use strict";(self["webpackChunkyongin_market_publish"]=self["webpackChunkyongin_market_publish"]||[]).push([[120],{4467:function(s,e,a){a.d(e,{A:function(){return u}});var l=a(6768),n=a(4232),t=a(9101);const c=t+"#back",o={class:"sub-header"},i={class:"title"},k={class:"right-area"};var r={__name:"SubHeader",props:{pageTitle:{type:String},hasBackButton:{type:Boolean,default:!1},isDetailHeader:{type:Boolean,default:!1},isBackOnly:{type:Boolean,default:!1}},setup(s){const e=()=>{console.log("이전")};return(a,t)=>((0,l.uX)(),(0,l.CE)("header",o,[(0,l.Lk)("div",{class:(0,n.C4)(["sub-header-inner",{"is-detail":s.isDetailHeader,"is-only":s.isBackOnly}])},[s.hasBackButton?((0,l.uX)(),(0,l.CE)("button",{key:0,class:"btn-icon btn-back","aria-label":"이전 페이지로 돌아가기",onClick:e},t[0]||(t[0]=[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":c})],-1)]))):(0,l.Q3)("",!0),(0,l.Lk)("h1",i,(0,n.v_)(s.pageTitle),1),(0,l.Lk)("div",k,[(0,l.RG)(a.$slots,"right")])],2)]))}};const L=r;var u=L},120:function(s,e,a){a.r(e),a.d(e,{default:function(){return B}});var l=a(6768),n=a(9101),t=a(4467),c=a(144);const o=n+"#map",i=n+"#search",k=n+"#food",r=n+"#coupon",L=n+"#fnb",u=n+"#fruit",p=n+"#etc",d=n+"#clothes",f=n+"#farm",g=n+"#no_bluetooth",v={class:"Layout SubLayout store"},b={class:"container sub-container store-container"},h={class:"scroll-area"},m={class:"store-section"},y={key:0,class:"store-list store"},x={key:1,class:"empty-state"};var _={__name:"StoreNearbyEmpty",setup(s){const e=(0,c.KR)(!0);return(s,a)=>((0,l.uX)(),(0,l.CE)("div",v,[(0,l.bF)(t.A,{pageTitle:"상점"},{right:(0,l.k6)((()=>a[0]||(a[0]=[(0,l.Lk)("button",{class:"btn-icon","aria-label":"비콘 위치정보"},[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":o})])],-1)]))),_:1}),(0,l.Lk)("main",b,[(0,l.Lk)("div",h,[a[4]||(a[4]=(0,l.Lk)("section",{class:"filter-section"},[(0,l.Lk)("div",{class:"form-element"},[(0,l.Lk)("label",{class:"form-element__label a11y-hidden",for:"text-input-id-0"},"상점명, 키워드 검색"),(0,l.Lk)("div",{class:"form-element__control input-has-icon"},[(0,l.Lk)("input",{type:"text",id:"text-input-id-0",placeholder:"상점명, 키워드 검색",class:"input"}),(0,l.Lk)("button",{class:"btn-icon",title:"검색","aria-label":"검색"},[(0,l.Lk)("svg",{class:"icon","aria-hidden":"true"},[(0,l.Lk)("use",{"xlink:href":i})])])])])],-1)),(0,l.Lk)("section",m,[a[3]||(a[3]=(0,l.Lk)("p",{class:"store-list-header"},[(0,l.eW)("전체 "),(0,l.Lk)("strong",null,"55")],-1)),e.value?((0,l.uX)(),(0,l.CE)("div",x,a[2]||(a[2]=[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":g})],-1),(0,l.Lk)("p",{class:"msg"},[(0,l.eW)("블루투스 비활성화"),(0,l.Lk)("br"),(0,l.eW)("주변 상점 정보를 불러올 수 없습니다.")],-1),(0,l.Lk)("p",{class:"info-box"},[(0,l.eW)("블루투스를 켜고"),(0,l.Lk)("br"),(0,l.eW)(" 우측 상단 "),(0,l.Lk)("strong",{class:"green-500"},"재검색"),(0,l.eW)(" 버튼을 눌러주세요!")],-1)]))):((0,l.uX)(),(0,l.CE)("ul",y,a[1]||(a[1]=[(0,l.Lk)("li",{class:"store-item"},[(0,l.Lk)("div",{class:"store-info"},[(0,l.Lk)("strong",{class:"store-name"},[(0,l.Lk)("span",null,"창승식품"),(0,l.Lk)("span",{class:"badge food"},[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":k})]),(0,l.eW)(" 반찬 ")])]),(0,l.Lk)("p",{class:"store-desc"},"용인시 처인구 금령로99번길 15")]),(0,l.Lk)("div",{class:"coupon-tag"},[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":r})]),(0,l.Lk)("span",null,"쿠폰")])],-1),(0,l.Lk)("li",{class:"store-item"},[(0,l.Lk)("div",{class:"store-info"},[(0,l.Lk)("strong",{class:"store-name"},[(0,l.Lk)("span",null,"골목식당"),(0,l.Lk)("span",{class:"badge fnb"},[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":L})]),(0,l.eW)(" 음식점/카페 ")])]),(0,l.Lk)("p",{class:"store-desc"},"용인시 처인구 금령로107번길 8")])],-1),(0,l.Fv)('<li class="store-item"><div class="store-info"><strong class="store-name"><span>성산분식</span><span class="badge fnb"><svg class="icon"><use xlink:href="'+L+'"></use></svg> 음식점/카페 </span></strong><p class="store-desc">용인시 처인구 용문로204</p></div></li>',1),(0,l.Lk)("li",{class:"store-item"},[(0,l.Lk)("div",{class:"store-info"},[(0,l.Lk)("strong",{class:"store-name"},[(0,l.Lk)("span",null,"상상과일나라"),(0,l.Lk)("span",{class:"badge fruit"},[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":u})]),(0,l.eW)(" 과일 ")])]),(0,l.Lk)("p",{class:"store-desc"},"용인시 처인구 금령로 85번길 18")]),(0,l.Lk)("div",{class:"coupon-tag"},[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":r})]),(0,l.Lk)("span",null,"쿠폰")])],-1),(0,l.Lk)("li",{class:"store-item"},[(0,l.Lk)("div",{class:"store-info"},[(0,l.Lk)("strong",{class:"store-name"},[(0,l.Lk)("span",null,"이규혁 오징어"),(0,l.Lk)("span",{class:"badge etc"},[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":p})]),(0,l.eW)(" 기타 ")])]),(0,l.Lk)("p",{class:"store-desc"},"용인시 처인구 금령로 85번길 15")])],-1),(0,l.Lk)("li",{class:"store-item"},[(0,l.Lk)("div",{class:"store-info"},[(0,l.Lk)("strong",{class:"store-name"},[(0,l.Lk)("span",null,"최신 유행을 선도하는 패션 전문점"),(0,l.Lk)("span",{class:"badge clothes"},[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":d})]),(0,l.eW)(" 의류/잡화 ")])]),(0,l.Lk)("p",{class:"store-desc"},"용인시 처인구 금령로 90번길 22, 금령상가 1106호")]),(0,l.Lk)("div",{class:"coupon-tag"},[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":r})]),(0,l.Lk)("span",null,"쿠폰")])],-1),(0,l.Lk)("li",{class:"store-item"},[(0,l.Lk)("div",{class:"store-info"},[(0,l.Lk)("strong",{class:"store-name"},[(0,l.Lk)("span",null,"신선한 해산물을 제공하는 처인수산"),(0,l.Lk)("span",{class:"badge farm"},[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":f})]),(0,l.eW)(" 농축수산 ")])]),(0,l.Lk)("p",{class:"store-desc"},"용인시 처인구 금령로 88번길 10")])],-1)])))])])])]))}};const W=_;var B=W},9101:function(s,e,a){s.exports=a.p+"img/symbols.f2a19f63.svg"}}]);
//# sourceMappingURL=120.aea34778.js.map