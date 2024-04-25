---
theme: smartblue
highlight: a11y-dark
---
# 一、Zustand 状态库简介

Zustand 是一个轻量级、简洁且强大的 React 状态管理库，旨在为您的 React 项目提供更简单、更灵活的状态管理方式。与其他流行的状态管理库（如 Redux、MobX 等）相比，Zustand 的 API 更加简洁明了，学习成本较低，且无需引入繁琐的中间件和配置。同时，Zustand 支持 TypeScript，让您的项目更具健壮性。

Zustand 官方文档地址 ： https://docs.pmnd.rs/zustand/getting-started/introduction

zustand 中文网： https://awesomedevin.github.io/zustand-vue/

教程：https://codthing.github.io/react/zustand/zustand-base/#%E4%B8%80%E5%AE%89%E8%A3%85

国内翻译的中文教程： https://zhuanlan.zhihu.com/p/475571377

提到状态管理，大家可能首先想到的是 redux。

redux 是老牌状态管理库，能完成各种基本功能，并且有着庞大的中间件生态来扩展额外功能。

但 redux 经常被人诟病它的使用繁琐。

近两年，React 社区出现了很多新的状态管理库，比如 zustand、jotai、recoil 等，都完全能替代 redux，而且更简单。

zustand 算是其中最流行的一个。

看 star 数，redux 有 60k，而 zustand 也有 38k 了：

看 npm 包的周下载量，redux 有 880w，而 zustand 也有 260w 了：

从各方面来说，zustand 都在快速赶超 redux。

Zustand 是 2021 年 Star 增长最快的 React 状态管理库，设计理念函数式，全面拥抱 hooks，API 设计的很优雅，对业务的侵入小，学习的心智负担低，推荐使用。

这个网站可以看到近些年哪些前端技术比较热门：https://risingstars.js.org/2023/zh

可以看到 zustand 在近三年都是名列前茅的状态库

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f06774ffe7f542579c167f3d8b8ba43d~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2152&h=912&s=147232&e=png&b=f0f0ee)


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b08f280e23d424cbd7476c754906d8d~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1808&h=798&s=137004&e=png&b=f0f0ee)


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2ddeab1c1e034e48aba4cb7449263766~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2032&h=744&s=148879&e=png&b=f0f0ee)

# 为什么会考虑 ZUstand 这个状态库

> 在公司的项目中使用的是 dva.js 作为 状态管理，但是Dva.js在编写代码时过于臃肿，并且 Dva 不再维护，其在 ts 下的都没有任何提示的问题也逐步暴露。这使得我考虑有没有一种更加优雅的方式进行React状态的管理，并且能够完美兼容项目中已有的状态管理方法，作为一种补充手段为开发提效。
>

## 在实际使用中，dva.js 会有如下的缺点
### 学习成本：
dva.js 是基于 redux、redux-saga 和 react-router 的，因此在开始使用 dva.js 之前，需要对这些库有一定的了解，这增加了学习成本。

### 不支持 Typescript
在 ts 下的都没有任何提示，也不支持 ts

### 更新较慢：
dva.js 的更新速度相比其他框架来说较慢，不能及时跟上最新的技术发展。并且 dva.js 仓库在 2019 年开始就不在维护了

### 错误处理不够优雅：
dva.js 在处理错误时，往往会导致整个应用崩溃，而不是只影响出错的部分。
> 在 dva.js 中，如果一个 effect 中的异步操作出错了，那么这个错误会导致整个应用崩溃，而不仅仅是影响当前的异步操作。这是因为 dva.js 使用的 redux-saga 在处理异步操作时，如果发生错误，会直接抛出，而不是被捕获并处理。
> 
> 这样的错误处理方式，虽然可以让开发者立即发现问题，但是对于生产环境的应用来说，可能会导致整个应用的可用性下降。比如，一个用户在使用应用的过程中，如果触发了一个有错误的异步操作，那么整个应用就会崩溃，用户就无法继续使用，这显然是不可接受的。
> 
> 理想的错误处理方式应该是，当一个异步操作出错时，只影响这个操作，而不会影响到整个应用。并且，应该提供一种方式，让开发者可以自定义错误处理逻辑，比如显示一个错误提示，或者做一些错误恢复的操作。但是 dva.js 并没有提供这样的机制，这就是它在错误处理上的一个主要缺点。

### 代码冗余：
dva.js 的代码冗余问题比较严重，特别是在处理异步操作时，需要写大量的 boilerplate code。需要在reducer, saga, action之间来回切换，跳来跳去


### 依赖过多：

dva.js 依赖于多个库，如 React、Redux、Redux-Saga、React-Router 等。虽然这些库都是非常优秀的，但是这也意味着 dva.js 的项目会有更多的依赖，这可能会导致项目的维护和升级变得更加复杂。

我认为 dva.js 更加适用于中小型的 React 项目，对于大型复杂的项目来说优点难受
zustand 能完美满足我这一需求，它足够简单且能够和其他状态库共存。

# 二、Zustand 的优势

1.  **轻量级** ：Zustand 的整个代码库非常小巧，gzip 压缩后仅有 1KB，对项目性能影响极小。
1.  **简洁的 API** ：Zustand 提供了简洁明了的 API，能够快速上手并使用它来管理项目状态。   **基于钩子**: Zustand 使用 React 的钩子机制作为状态管理的基础。它通过创建自定义 Hook 来提供对状态的访问和更新。这种方式与函数式组件和钩子的编程模型紧密配合，使得状态管理变得非常自然和无缝。

1.  **易于集成** ：Zustand 可以轻松地与其他 React 库（如 Redux、MobX 等）共存，方便逐步迁移项目状态管理。
1.  **支持 TypeScript**：Zustand 支持 TypeScript，让项目更具健壮性。
1.  **灵活性**：Zustand 允许根据项目需求自由组织状态树，适应不同的项目结构。
2.  **可拓展性** : Zustand 提供了中间件 (middleware) 的概念，允许你通过插件的方式扩展其功能。中间件可以用于处理日志记录、持久化存储、异步操作等需求，使得状态管理更加灵活和可扩展。
3.  **性能优化**: Zustand 在设计时非常注重性能。它采用了高效的状态更新机制，避免了不必要的渲染。同时，Zustand 还支持分片状态和惰性初始化，以提高大型应用程序的性能。
4. **无副作用**: Zustand 鼓励无副作用的状态更新方式。它倡导使用 immer 库来处理不可变性，使得状态更新更具可预测性，也更易于调试和维护。


# 三、如何在 React 项目中使用 Zustand

## 1.  安装 Zustand


```bash
npm install zustand
```
或者


```bash
yarn add zustand
```

## 2，快速上手


```js

// 计数器 Demo 快速上手
import React from "react";
import { create } from "zustand";

// create（）：存在三个参数，第一个参数为函数，第二个参数为布尔值
// 第一个参数：(set、get、api)=>{…}
// 第二个参数：true/false 
// 若第二个参数不传或者传false时，则调用修改状态的方法后得到的新状态将会和create方法原来的返回值进行融合；
// 若第二个参数传true时，则调用修改状态的方法后得到的新状态将会直接覆盖create方法原来的返回值。

const useStore = create(set => ({
  count: 0,
  setCount: (num: number) => set({ count: num }),
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

export default function Demo() {
  // 在这里引入所需状态
  const { count, setCount, inc } = useStore();

  return (
    <div>
      {count}
      <input
        onChange={(event) => {
          setCount(Number(event.target.value));
        }}
      ></input>
      <button onClick={inc}>增加</button>
    </div>
  );
}


```
## 3, 在状态中访问和存储数组

假设我们需要在 `Zustand` 中存储一个 state 中的数组, 我们可以像下面这样定义

```ts
const useStore = create(set => ({
  fruits: ['apple', 'banana', 'orange'],
  addFruits: (fruit) => {
    set(state => ({
      fruits: [...state.fruits, fruit]
    }));
  }
}));


```
以上, 我们创建了一个 `store` 包含了 `fruits state`, 其中包含了一系列水果, 第二个参数是 `addFruits` , 接受一个参数 `fruit` 并运行一个函数来得到 `fruits state` 和 新增的 `fruits`, 第二个变量用于更新我们存储状态的值

## 4,访问存储状态

当我们定义上面的状态时, 我们使用 `set()` 方法, 假设我们在一个程序里, 我们需要存储 `其他地方` 的值添加到我们的状态, 为此, 我们将使用 `Zustand` 提供的方法 `get()` 代替, 此方法允许多个状态使用相同的值


```js
// 第二个参数 get
const useStore = create((set,get) => ({
  votes: 0,
  action: () => {
    // 使用 get()
    const userVotes = get().votes
    // ...
  }
}));
```
## 5,从 action 中读取 state

通过`get`访问状态。

```js
const useStore = create((set, get) => ({
  name: "Lucy",
  action: () => {
    const name= get().name
    // ...
  }
})
```
## 6， subscribe 监听状态变更
相当于vue中的computed，数据变了，执行对应函数

```js
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { shallow } from 'zustand/shallow'
const useStore = create(
  subscribeWithSelector(() => ({ paw: true, snout: true, fur: true }))
)

// Listening to selected changes, in this case when "paw" changes
const unsub2 = useStore.subscribe((state) => state.paw,  (a, b) => {
    console.log('新数据:', a, '旧数据:', b)
  })
```

## 7，更方便的访问state
### 从 action 中读取状态

```js
const useStore = create((set, get) => ({
  sound: 'grunt',
  action: () => {
    const sound = get().sound
    // ...
  },
}))

```
从createState就解决了访问外部的state的问题，zustand本身不用useContext来传递react的状态，那么就不会存在渲染器上下文获取不到的情况


### 多环境集成（ react内外环境联动 ）
实际的复杂应用中，一定会存在某些不在react环境内的状态数据，以图表、画布、3D场景最多。一旦要涉及到多环境下的状态管理，可以让人掉无数头发。

而zustand已经考虑到了，`useStore` 上直接可以拿值。

通过 getState() 和 setState() 可以在任何地方调用 和 处理 zustand 的状态

```js
const useStore = create(() => ({ paw: true, snout: true, fur: true }))

// 获得最新的且非响应式的状态
const paw = useStore.getState().paw
// 监听所有的变化，每次变化是将同步触发
const unsub1 = useStore.subscribe(console.log)
// 更新状态，将触发监听器
useStore.setState({ paw: false })
// 取消订阅
unsub1()
// 销毁store(删除所有订阅)。
useStore.destroy()

// 当然，你可以像往常一样使用hook
function Component() {
  const paw = useStore(state => state.paw)
```
## 8，async operation 异步操作

如果你需要在 Zustand 的状态中处理异步操作，你可以在你的状态对象中添加一个异步函数。这个函数可以使用 `set` 函数来更新状态。

这里有一个例子，它展示了如何在 Zustand 状态中添加一个异步函数来从服务器加载数据：

```js
import create from 'zustand'

const useStore = create((set) => ({
  items: [],
  fetchItems: async () => {
    const response = await fetch('/api/items')
    const items = await response.json()
    set({ items })
  },
}))
```

在这个例子中，`fetchItems` 函数是一个异步函数，它使用 `fetch` API 从服务器加载数据，然后使用 `set` 函数更新 `items` 状态。

你可以在你的 React 组件中使用这个函数：

```js
import React, { useEffect } from 'react'
import useStore from './store'

function Items() {
  const items = useStore((state) => state.items)
  const fetchItems = useStore((state) => state.fetchItems)

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}

export default Items
```

在这个组件中，我们使用 `useEffect` hook 在组件挂载时调用 `fetchItems` 函数。当 `fetchItems` 函数完成时，它会更新 `items` 状态，这将触发组件重新渲染。

注意，因为 `fetchItems` 是一个异步函数，所以你需要确保你的组件在等待数据加载时能正确处理。例如，你可能需要在数据加载时显示一个加载指示器，或者在数据加载失败时显示一个错误消息。

## 9， 在 React class类组件中使用 zustand

在老项目中很多都是使用类组件的React 写法，那么如何在类组件中设置 zustand 状态呢，这里提供一个方案

类组件最接近钩子(Hook)的是高阶组件 (HOC) 模式。


```js
const withStore = BaseComponent => props => {
  const store = useStore();
  return <BaseComponent {...props} store={store} />;
};
```

我们可以将 store 作为一个 prop 访问到任何封装在 `withStore` 中的类组件中。 .

```js
class BaseMyClass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { setPink } = this.props.store;
    return (
      <div>
        <button onClick={setPink}>
          Set State Class
        </button>
      </div>
    );
  }
}

const MyClass = withStore(BaseMyClass);
```
关于reactjs - 如何在类组件中设置 zustand 状态，我们在Stack Overflow上找到一个类似的问题： <https://stackoverflow.com/questions/66084662/>

如果追求方便简洁的话，也可以通过这种方式在类组件中使用 zustand
```js
import { useStore } from "./store";

class MyClass extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            useStore.setState({ isPink: true });
          }}
        >
          Set State Class
        </button>
      </div>
    );
  }
}
```
```js
import React, { Component } from "react";
import { useStore } from "./store";

class MyClass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button
          onClick={
              useStore.getState().setPink() // <-- Changed code
          }
        >
          Set State Class
        </button>
      </div>
    );
  }
}

export default MyClass;
```
# 四，和 Redux 状态库对比

Redux 是一个非常流行的状态管理库，它提供了一种可预测的状态容器。然而，Redux 的一些缺点是其冗长的代码和引入许多概念，如 actions、reducers 和 middleware。这可能会让新手感到困惑，同时增加了应用程序的复杂性。

相比之下，Zustand 提供了一种更简洁的 API，无需引入额外的概念。它允许您直接使用 setState 更新状态，而无需编写繁琐的 actions 和 reducers。此外，Zustand 的体积更小，仅为 1KB，而 Redux 的体积为 7KB。

1，Redux

```js
import { createStore } from 'redux'
import { useSelector, useDispatch } from 'react-redux'

type State = {
  count: number
}

type Action = {
  type: 'increment' | 'decrement'
  qty: number
}

const countReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.qty }
    case 'decrement':
      return { count: state.count - action.qty }
    default:
      return state
  }
}

const countStore = createStore(countReducer)

const Component = () => {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
  // ...
}

```

2，zustand

```js
import { create } from 'zustand'

type State = {
  count: number
}

type Actions = {
  increment: (qty: number) => void
  decrement: (qty: number) => void
}

const useCountStore = create<State & Actions>((set) => ({
  count: 0,
  increment: (qty: number) => set((state) => ({ count: state.count + qty })),
  decrement: (qty: number) => set((state) => ({ count: state.count - qty })),
}))

const Component = () => {
  const { count , increment , decrement} = useCountStore();
  // ...
}

```
可以看出 zustand 使用起来非常简单，没有啥心智负担。

而且 zustand 的 代码量 比 Redux 少了 近 30% 
这还仅仅是一个小demo
在实际的项目使用中，使用 zustand 带来的 代码量 的减少是成倍的，能极大的提升开发的效率和速度

# 五，踩坑点

举个例子：

创建一个存放主题和语言类型的store

```js
import { create } from 'zustand';

interface State {
  theme: string;
  lang: string;
}

interface Action {
  setTheme: (theme: string) => void;
  setLang: (lang: string) => void;
}

const useConfigStore = create<State & Action>((set) => ({
  theme: 'light',
  lang: 'zh-CN',
  setLang: (lang: string) => set({lang}),
  setTheme: (theme: string) => set({theme}),
}));

export default useConfigStore;

```
分别创建两个组件，主题组件和语言类型组件


```js
import useConfigStore from './store';

const Theme = () => {

  const { theme, setTheme } = useConfigStore();
  console.log('theme render');
  
  return (
    <div>
      <div>{theme}</div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>切换</button>
    </div>
  )
}

export default Theme;

```

```js
import useConfigStore from './store';

const Lang = () => {

  const { lang, setLang } = useConfigStore();

  console.log('lang render...');

  return (
    <div>
      <div>{lang}</div>
      <button onClick={() => setLang(lang === 'zh-CN' ? 'en-US' : 'zh-CN')}>切换</button>
    </div>
  )
}

export default Lang;

```

按照上面写法，改变theme会导致Lang组件渲染，改变lang会导致Theme重新渲染，但是实际上这两个都没有关系，怎么优化这个呢，有以下几种方法。

## 方案一：基于 `selector` 进行状态选择
默认情况下，它检测严格相等的变化（`old === new` 即 `新值全等于旧值`）
  
```js
  const theme = useConfigStore((state) => state.theme);
  const setTheme = useConfigStore((state) => state.setTheme);
```
```js
import useConfigStore from './store';

const Theme = () => {

  const theme = useConfigStore((state) => state.theme);
  const setTheme = useConfigStore((state) => state.setTheme);

  console.log('theme render');

  return (
    <div>
      <div>{theme}</div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>切换</button>
    </div>
  )
}

export default Theme;

```
把值单个return出来，zustand内部会判断两次返回的值是否一样，如果一样就不重新渲染。

这里因为只改变了lang，theme和setTheme都没变，所以不会重新渲染。

## 方案二：

上面写法如果变量很多的情况下，要写很多遍`useConfigStore`，有点麻烦。可以把上面方案改写成这样，变量多的时候简单一些。

```tsx
import useConfigStore from './store';

const Theme = () => {

  const { theme, setTheme } = useConfigStore(state => ({
    theme: state.theme,
    setTheme: state.setTheme,
  }));

  console.log('theme render');

  return (
    <div>
      <div>{theme}</div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>切换</button>
    </div>
  )
}

export default Theme;
```

上面这种写法是不行的，因为每次都返回了新的对象，即使theme和setTheme不变的情况下，也会返回新对象，zustand内部拿到返回值和上次比较，发现每次都是新的对象，然后重新渲染。

上面情况，zustand提供了解决方案，对外暴露了一个`useShallow`方法，可以浅比较两个对象是否一样。

```tsx
import { useShallow } from 'zustand/react/shallow';
import useConfigStore from './store';

const Theme = () => {

  const { theme, setTheme } = useConfigStore(
    useShallow(state => ({
      theme: state.theme,
      setTheme: state.setTheme,
    }))
  );

  console.log('theme render');

  return (
    <div>
      <div>{theme}</div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>切换</button>
    </div>
  )
}

export default Theme;
```

# 六，zustand 中间价

## 1，数据持久化

  你可以将 Zustand 的状态保存到 localStorage 或者 IndexedDB 中。当然，你需要注意的是，这种方式可能会导致一些问题，比如性能问题，以及在某些浏览器中可能会因为隐私设置而无法工作。

```js
// store.js
import create from 'zustand';
import { persist } from 'zustand-persist';

const initialState = {
  count: 0,
  increment: () => {},
  decrement: () => {},
};

const useStore = create(
  persist(
    (set) => ({
      ...initialState,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: 'my-store', // 唯一名称
      getStorage: () => localStorage, // 可选，默认使用 localStorage
    }
  )
);

export default useStore;
```
在这个例子中，我们创建了一个简单的计数器应用的状态管理。`increment` 和 `decrement` 函数分别用于增加和减少计数。我们使用 `persist` 函数将状态保存到 localStorage 中。

在你的 React 组件中使用这个 Zustand store：

```js
// App.js
import React from 'react';
import useStore from './store';

function App() {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

  return (
    <div>
      <h1>计数器: {count}</h1>
      <button onClick={increment}>增加</button>
      <button onClick={decrement}>减少</button>
    </div>
  );
}

export default App;
```

在这个组件中，我们使用 `useStore` 自定义 hook 来访问状态和操作函数。当用户点击“增加”或“减少”按钮时，计数器的值将会改变，并自动保存到 localStorage 中。

当应用重启时，`zustand-persist` 会自动从 localStorage 中加载状态，这样你就可以实现数据持久化了。

需要注意的是，如果你的状态中包含了不能直接保存到 localStorage 的数据（比如函数或者包含循环引用的对象），你需要在 `persist` 函数的配置对象中提供 `serialize` 和 `deserialize` 函数来处理这些数据的序列化和反序列化。例如：

```js
const useStore = create(
  persist(
    (set) => ({
      ...initialState,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: 'my-store',
      getStorage: () => localStorage,
      serialize: (state) => {
        // 处理序列化逻辑
      },
      deserialize: (serializedState) => {
        // 处理反序列化逻辑
      },
    }
  )
);
```
## 2，自定义中间件

在 Zustand 中，你可以使用中间件来扩展或自定义状态管理的行为。中间件是一个函数，它接收一个 `config` 对象作为参数，并返回一个新的 `config` 对象。你可以在中间件中修改或增强状态更新的行为。

下面是一个简单的例子，展示了如何创建一个用于记录状态更新的日志的中间件：


```js
import { produce } from 'immer';
import { create } from 'zustand';

// 自定义中间件
// 日志中间件
const log = config => (set, get, api) => config(args => {
    console.log("  applying", args);
    set(args);
    console.log("  new state", get());
}, get, api);

// 将 set 方法变成一个 immer proxy

const immer = config => (set, get, api) => config((partial, replace) => {
    const nextState = typeof partial === 'function'
        ? produce(partial)
        : partial
    return set(nextState, replace)
}, get, api);

const middleWareText = create(
    log(
        immer((set) => ({
            count: 0,
            setCount: (num) => set({ count: num }),
            increment: () =>set((state) => ({ count: state.count + 1 })),
            decrement: () => set((state) => ({ count: state.count - 1 })),
        })),
    ),
);

export default middleWareText;

```
在这个例子中，我们创建了一个名为 `loggerMiddleware` 的中间件。这个中间件接收一个 `config` 对象，并返回一个新的 `config` 对象。我们在这个中间件中覆盖了 `set` 函数，以便在每次状态更新时输出日志。

要在你的 Zustand store 中使用这个中间件，你需要使用 `create` 函数的第二个参数传递它：

```js
// store.js
import create from 'zustand';
import loggerMiddleware from './loggerMiddleware';

const useStore = create(
  (set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  }),
  loggerMiddleware
);

export default useStore;
```


现在，每当你的状态发生变化时，`loggerMiddleware` 中间件将输出日志，显示更新前的状态、应用的更新以及更新后的状态。

你可以在 Zustand 中使用多个中间件。要实现这一点，只需将它们作为数组传递给 `create` 函数的第二个参数即可：


```js
import create from 'zustand';
import loggerMiddleware from './loggerMiddleware';
import anotherMiddleware from './anotherMiddleware';

const useStore = create(
  (set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  }),
  [loggerMiddleware, anotherMiddleware]
);

export default useStore;
```

在这个例子中，我们将 `loggerMiddleware` 和 `anotherMiddleware` 作为中间件数组传递给 `create` 函数。这些中间件将按照数组中的顺序应用。


## 3，Immer middleware[​](https://awesomedevin.github.io/zustand-vue/docs/basic/middleware#immer-middleware "标题的直接链接")

`Immer` 也可以作为中间件使用。

```js
import { create } from 'zustand-vue'

// import { create } from 'zustand'

import { immer } from 'zustand/middleware/immer'

const useBeeStore = create(
  immer((set) => ({
    bees: 0,
    addBees: (by) =>
      set((state) => {
        state.bees += by
      }),
  }))
)
```

## 4，Redux middleware[​](https://awesomedevin.github.io/zustand-vue/docs/basic/middleware#redux-middleware "标题的直接链接")

让你像写 `redux` 一样，来写 `zustand`

```js
import { redux } from 'zustand/middleware'

const types = { increase: 'INCREASE', decrease: 'DECREASE' }

const reducer = (state, { type, by = 1 }) => {
  switch (type) {
    case types.increase:
      return { grumpiness: state.grumpiness + by }
    case types.decrease:
      return { grumpiness: state.grumpiness - by }
  }
}

const initialState = {
  grumpiness: 0,
  dispatch: (args) => set((state) => reducer(state, args)),
}

const useReduxStore = create(redux(reducer, initialState))
```

## 5，Devtools middle[​](https://awesomedevin.github.io/zustand-vue/docs/basic/middleware#devtools-middle "标题的直接链接")

利用开发者工具 `调试/追踪` Store

```js
import { devtools, persist } from 'zustand/middleware'

const useFishStore = create(
  devtools(persist(
    (set, get) => ({
      fishes: 0,
      addAFish: () => set({ fishes: get().fishes + 1 }),
    }),
  ))
)
```
## 6，管理中间件

```js
import create from "zustand"
import produce from "immer"
import pipe from "ramda/es/pipe"

/* 通过pipe集合任意数量的中间件 */
const createStore = pipe(log, immer, create)

const useStore = createStore(set => ({
  bears: 1,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 }))
}))

export default useStore
```








# 七，选择 Zustand 而不是其他状态库作为React状态管理的理由

从页面视角更新过程：

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad3d7095ab5d4c33bd9af71dea0957e5~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2178&h=1574&s=1172146&e=png&b=f9e9e2)
## 积极拥抱 hooks

1. 我认为zustand最大的优点就是它跟本质上就是带了发布订阅模式的hooks。redux你存储的数据一直会在内存里面，你切换了路由数据还是在，但是zustand会跟着页面卸载数据会卸载，这就使得你存数据就很自然。

1. 并且由于 zustand 的这个优点使得 单元测试 特别友好。redux中的useSelector，测试起来还是有点麻烦，比如你可能要制造一个Provider的环境，zustand的也有类似useSelector的方法，它是一个纯函数，或者说是hooks，比redux好测试的多！

1. Zustand 不强制你使用特定的架构或模式。你可以根据需要自由地组织和管理你的状态。这种灵活性使得 Zustand 可以适应各种不同的项目需求。

1. Zustand 使用 React 的钩子机制作为状态管理的基础。它通过创建自定义 Hook 来提供对状态的访问和更新。这种方式与函数式组件和钩子的编程模型紧密配合，使得状态管理变得非常自然和无缝。
## 不需要使用 context providers 包裹应用、也没有 reducer 那种模版代码

**状态管理最必要的一点就是状态共享**。这也是context出来以后，大部分文章说不需要redux的根本原因。因为context可以实现最最基础的状态共享。但这种方法（包括redux在内），都需要在最外层包一个Provider。 Context中的值都在Provider的作用域下有效。


```js
// Context 状态共享

// store.ts
export const StoreContext = createStoreContext(() => { ... });

// index.tsx
import { appState, StoreContext } from './store';

root.render(
    <StoreContext.Provider value={appState}>
        <App />
    </StoreContext.Provider>
);

// icon.tsx
import { StoreContext } from './store';

const ReplaceGuide: FC = () => {
    const { i18n, hideGuide, settings } = useContext(StoreContext);

    // ...
    return ...
}
```
而zustand做到的第一点创新就是：**默认不需要Provider**。直接声明一个hooks式的useStore后就可以在不同组件中进行调用。它们的状态会直接共享，简单而美好。

```js
// Zustand 状态共享

// store.ts
import create from "zustand";

export const useStore = create((set) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
}));

// Control.tsx
import { useStore } from "./store";

function Control() {
    return (
        <button
            onClick={() => {
                useStore.setState((s) => ({ ...s, count: s.count - 5 }));
            }}
        >
            －5
        </button>
    );
}

// AnotherControl.tsx
import { useStore } from "./store";

function AnotherControl() {
    const inc = useStore((state) => state.inc);
    return <button onClick={inc}> +1 </button>;
}

// Counter.tsx
import { useStore } from "./store";

function Counter() {
    const { count } = useStore();
    return <h1>{count}</h1>;
}

```
由于没有Provider的存在，所以声明的useStore默认都是单实例，如果需要多实例的话，zustand也提供了对应的Provider的[书写方式](https://link.zhihu.com/?target=https%3A//github.com/pmndrs/zustand%23react-contexthttps%3A//github.com/pmndrs/zustand%23react-context)，这种方式在组件库中比较常用。 ProEditor也是用的这种方式做到了多实例。
## API 设计地优雅清晰（create、usexxxStore 大部分够用了）

## 支持多个 store

1. zustand也支持类似redux全局的store，也支持分散的store
1. Zustand 支持分割和组合状态，这使得它非常适合大型应用。你可以将你的状态分割成多个小的、可管理的部分，然后在需要的地方组合它们。

## 性能优势

对于性能优化，关键的问题是 —— 保持props引用不变。

在原生React中，如果a依赖b，b依赖c。那么，当a变化后，我们需要通过各种方法（比如useCallback、useMemo）保持b、c引用的稳定。

做这件事情本身（保持引用不变）对开发者来说就是额外的心智负担。那么，状态管理是如何解决这个问题的呢？

答案是：状态管理库自己管理所有原始状态以及派生状态。

比如：

-   在Recoil中，基础状态类型被称为Atom，其他派生状态都是基于Atom组合而来
-   在Zustand中，基础状态都是create方法创建的实例
-   在Redux中，维护了一个全局状态，对于需要用到的状态通过selector从中摘出来

这些状态管理方案都会自己维护所有的基础状态与派生状态。当开发者从状态管理库中引入状态时，就能最大限度保持props引用不变。

比如，由于状态a和依赖a的fn都是由Zustand管理，所以fn的引用始终不变：


```js
const useStore = create(set => ({
  a: 0,
  fn: () => set(state => ({ a: state.a + 1 })),
}))
function App() {
  const fn = useStore(state => state.fn)
  return <Child fn={fn}/>
}
```

Zustand 的性能优势主要体现在以下几个方面：

### 最小化渲染：
Zustand 只在状态改变时触发重渲染，且仅限于依赖于这些状态的组件。这意味着如果一个组件并未订阅某个状态，即使这个状态发生改变，组件也不会被重新渲染。这样可以避免不必要的渲染，从而提高应用的性能。

### 选择性订阅：
Zustand 允许你选择性地订阅状态。你可以选择只订阅你关心的状态，而忽略其他不相关的状态。这样可以减少不必要的渲染，提高性能。

而在 dva.js 中，由于其基于 Redux，当状态发生变化时，所有连接到 Redux store 的组件都可能会重新渲染。虽然可以通过优化 mapStateToProps 和使用 Reselect 等工具来减少渲染次数，但这会增加代码的复杂性。

### 无需额外的库或工具：
zustand 是一个轻量级的状态管理库，经过 Gzip 压缩后仅 **1kb**左右 大小，不需要额外的依赖。且它的 API 简洁，易于理解和使用。与需要依赖其他库或工具的状态管理库相比，Zustand 可以减少应用的负载，提高性能。

### 高效的状态更新：
Zustand 使用了高效的状态更新机制。当你更新状态时，Zustand 会立即反应这个改变，而不是等待下一次渲染周期。这可以确保你的应用始终响应迅速，提供流畅的用户体验。

### 支持并发模式：
Zustand 完全支持 React 的并发模式。并发模式可以帮助你更好地管理复杂的状态更新，提高应用的性能。

### 优化内存使用：
Zustand 使用了高效的内存管理策略，可以帮助你避免内存泄露，减少内存使用。这对于大型应用和长时间运行的应用来说尤其重要。

### 更少的样板代码：
使用 Zustand 编写的代码量可能会比使用 Redux 编写的代码量少 30% 到 50%。较少的代码量意味着更少的解析和执行时间，从而提高应用程序性能。

## 直接支持异步，不需要另外引入中间件

## 外部可用

## 可以持久化（存到 localStorage）

## 可扩展（插入中间件）

Zustand 提供了中间件 (middleware) 的概念，允许你通过插件的方式扩展其功能。中间件可以用于处理日志记录、持久化存储、异步操作等需求，使得状态管理更加灵活和可扩展。


# 八，zustand 的工作原理

zustand = 发布订阅 + react hooks


zustand 的心智模型非常简单，包含一个发布订阅器和渲染层，工作原理如下，


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2b270a38d947446192abdbdd16b9ae40~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1456&h=1598&s=738456&e=png&b=e1ecf6)

其中 Vanilla 层是发布订阅模式的实现，提供了setState、subscribe 和 getState 方法，React 层是 Zustand 的核心，实现了 reselect 缓存和注册事件的 listener 的功能，并且通过 forceUpdate 对组件进行重渲染，发布订阅相信大家都比较了解了，我们重点介绍下渲染层。

首先思考一个问题，React hooks 语法下，我们如何让当前组件刷新？

是不是只需要利用 `useState` 或 `useReducer` 这类 hook 的原生能力即可，调用第二个返回值的 dispatch 函数，就可以让组件重新渲染，这里 zustand 选择的是 `useReducer`，

```js
const [, forceUpdate] = useReducer((c) => c + 1, 0) as [never, () => void]
```

有了 forceUpdate 函数，接下来的问题就是什么时候调用 forceUpdate，我们参考源码来看，

```js
// create 函数实现
// api 本质就是就是 createStore 的返回值，也就是 Vanilla 层的发布订阅器
const api: CustomStoreApi = typeof createState === 'function' ? createStore(createState) : createState

// 这里的 useIsomorphicLayoutEffect 是同构框架常用 API 套路，在前端环境是 useLayoutEffect，在 node 环境是 useEffect
useIsomorphicLayoutEffect(() => {
  const listener = () => {
    try {
      // 拿到最新的 state 与上一次的 compare 函数
      const nextState = api.getState()
      const nextStateSlice = selectorRef.current(nextState)
      // 判断前后 state 值是否发生了变化，如果变化调用 forceUpdate 进行一次强制刷新
      if (!equalityFnRef.current(currentSliceRef.current as StateSlice, nextStateSlice)) {
        stateRef.current = nextState
        currentSliceRef.current = nextStateSlice
        forceUpdate()
      }
    } catch (error) {
      erroredRef.current = true
      forceUpdate()
    }
  }
  // 订阅 state 更新
  const unsubscribe = api.subscribe(listener)
  if (api.getState() !== stateBeforeSubscriptionRef.current) {
    listener()
  }
  return unsubscribe
}, [])
```

我们首先从第 24 行 `api.subscribe(listener)` 开始，这里先创建了 listener 的订阅，这就使得任何的 setState 调用都会触发 listener 的执行，接着回到 listener 函数的内部，利用 `api.getState()` 拿到了最新 state，以及上一次的 compare 函数 equalityFnRef，然后执行比较函数后判断值前后是否发生了改变，如果改变则调用 forceUpdate 进行一次强制刷新。

这就是 zustand 渲染层的原理，简单而精巧，zustand 实现状态共享的方式本质是**将状态保存在一个对象里**，

# 九，我写了个 学习 zustand 的demo，可以直接克隆下来进行学习

GitHub链接： https://github.com/tomato-wu/zustand-demo2

为了便利 zustand 的使用，我还开发了一个cli脚手架工具，
npm 地址如下：https://www.npmjs.com/package/zustand-cli?activeTab=readme

关于如何开发一个脚手架工具，欢迎关注我并且能在我发布的文章里面找到具体教程






