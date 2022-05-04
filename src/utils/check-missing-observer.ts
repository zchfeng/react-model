
// eslint-disable-next-line @typescript-eslint/ban-types
export const checkMissingObserver = (constructorOpt?: Function) => {
  if (process.env.NODE_ENV !== 'development') return;
  try {
    const error = new Error();
    Error.captureStackTrace(error, constructorOpt || checkMissingObserver);
    throw error;
  } catch (e: any) {
    // TODO e.stack 只有前十条栈信息（https://v8.dev/docs/stack-trace-api）
    // TODO 十条栈信息 大部分的情况下 能包含最近的一个react组件渲染的栈信息
    const stacks = Array.from(e.stack.matchAll(/at (.*?) /g)).map(v => {
      return (v as any)[1];
    });

    // TODO stacks的栈信息 只有十条 目前不会超过最近一个React组件渲染的栈信息 所以直接判断前十条栈 是否含有 useObserver
    // TODO observer 是在 useObserver 的基础上再封装了一层 forwardRef 和 memo 所以这里判断堆栈是否有 useObserver
    const hasUseObserver = stacks.includes('useObserver');

    if (hasUseObserver) return;

    // TODO 暴露了错误e是getCallStack的错误，但是能从错误堆栈中找到使用了useStores的组件
    console.warn('使用了Mobx,没有用observer方法包裹', e);
  }
};
