import { shallowMount } from "@vue/test-utils";

import CounterPage from "../../src/components/CounterPage.vue";

describe('Counter test', () => {
    
  
    it('increments count when button is clicked', async () => {
      const wrapper = shallowMount(CounterPage);
      expect(wrapper.vm.count).toBe(0);
      const button = wrapper.find('.increment');
      await button.trigger('click');
      expect(wrapper.vm.count).toBe(1);
    });
  });
  