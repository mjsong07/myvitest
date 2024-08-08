import { describe, it, expect } from 'vitest';

//常用法
describe('Array', () => {
  it('should start empty', () => {
    const arr = [];
    expect(arr).toHaveLength(0);
  });

  it('should add elements correctly', () => {
    const arr = [];
    arr.push(1);
    expect(arr).toHaveLength(1);
    expect(arr[0]).toBe(1);
  });
});

//异步使用
describe('Async function', () => {
  it('should resolve', async () => {
    const asyncFunc = () => new Promise((resolve) => setTimeout(() => resolve('done'), 100));
    const result = await asyncFunc();
    expect(result).toBe('done');
  });

  it('should reject', async () => {
    const asyncFunc = () => new Promise((_, reject) => setTimeout(() => reject(new Error('error')), 100));
    await expect(asyncFunc()).rejects.toThrow('error');
  });
});

//各种钩子逻辑
import { beforeEach, afterEach, beforeAll, afterAll } from 'vitest';

let globalCounter = 0;

beforeAll(() => {
  // 在所有测试之前运行
  console.log('beforeAll');
});

afterAll(() => {
  // 在所有测试之后运行
  console.log('afterAll');
});

describe('Counter', () => {
  beforeEach(() => {
    // 在每个测试之前运行
    globalCounter = 0;
  });

  afterEach(() => {
    // 在每个测试之后运行
    console.log('afterEach');
  });

  it('should be 0 initially', () => {
    expect(globalCounter).toBe(0);
  });

  it('should increment', () => {
    globalCounter++;
    expect(globalCounter).toBe(1);
  });
});

