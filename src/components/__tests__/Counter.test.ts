import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Counter from '../Counter.vue';

describe('Counter.vue', () => {
  it('renders initial count', () => {
    const wrapper = mount(Counter);
    expect(wrapper.text()).toContain('0');
  });

  it('increments count when Increment button is clicked', async () => {
    const wrapper = mount(Counter);
    const button = wrapper.find('button:first-of-type');
    await button.trigger('click');
    expect(wrapper.text()).toContain('1');
  });

  it('decrements count when Decrement button is clicked', async () => {
    const wrapper = mount(Counter);
    const incrementButton = wrapper.find('button:first-of-type');
    const decrementButton = wrapper.find('button:last-of-type');
    await incrementButton.trigger('click');
    await decrementButton.trigger('click');
    expect(wrapper.text()).toContain('0');
  });
  
   it('increments and decrements count', async () => {
    const wrapper = mount(Counter);
    const vm = wrapper.vm as any;

    // 检查初始状态
    expect(vm.count).toBe(0);

    // 调用方法并检查状态变化
    vm.increment();
    await wrapper.vm.$nextTick();
    expect(vm.count).toBe(1);

    vm.decrement();
    await wrapper.vm.$nextTick();
    expect(vm.count).toBe(0);
  });
}); 

