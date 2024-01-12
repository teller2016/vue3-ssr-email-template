// 테스트용 js
// 렌더링 console.log

// 이것은 서버의 Node.js에서 실행됩니다.
import { createSSRApp } from "vue";
// Vue의 서버 렌더링 API는 `vue/server-renderer`에 있습니다.
import { renderToString } from "vue/server-renderer";

const app = createSSRApp({
  data: () => ({ count: 1 }),
  template: `<button @click="count++">{{ count }}</button>`,
});

renderToString(app).then((html) => {
  console.log(html);
});

app.mount("#app");
