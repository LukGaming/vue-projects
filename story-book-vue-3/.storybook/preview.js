// .storybook/preview.js
import { setup } from '@storybook/vue3';
import HellloWorld from "../src/components/HelloWorld.vue"

setup((app) => {
  app.use(MyPlugin);
  app.component('hello-world', HellloWorld);
  app.mixin({
    /* My mixin */
  });
});

// Rest of the file...