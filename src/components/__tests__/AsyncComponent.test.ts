import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import AsyncComponent from '../AsyncComponent.vue';

// 模拟 fetch API
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: 'Hello, Async!' }),
  })
);

describe('AsyncComponent.vue', () => {
  it('renders loading state initially', () => {
    const wrapper = mount(AsyncComponent);
    expect(wrapper.text()).toContain('Loading...');
  });

  it('renders data after fetch', async () => {
    const wrapper = mount(AsyncComponent);
    await new Promise(setImmediate); // 等待异步任务完成
    await wrapper.vm.$nextTick(); // 等待 Vue 组件更新
    expect(wrapper.text()).toContain('Hello, Async!');
  });
});

