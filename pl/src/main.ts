import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Button from "@/components/Button.vue";
import ProfitCard from "@/components/ProfitCard.vue";

const app = createApp(App);

app.use(router);

app.component("Button", Button);
app.component("ProfitCard", ProfitCard);

app.mount("#app");
