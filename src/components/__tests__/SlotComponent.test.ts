import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import SlotComponent from '../SlotComponent.vue';

describe('SlotComponent.vue', () => {
  it('renders slot content', () => {
    const wrapper = mount(SlotComponent, {
      slots: {
        default: '<p>Hello, Slot!</p>'
      }
    });
    expect(wrapper.html()).toContain('<p>Hello, Slot!</p>');
  });
});

