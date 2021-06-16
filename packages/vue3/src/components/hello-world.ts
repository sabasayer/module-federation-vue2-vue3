import { createApp } from "vue";
import HelloWorld from "./HelloWorld.vue";

export default (selector: string, props?: any) =>
  createApp(HelloWorld, props).mount(selector);
