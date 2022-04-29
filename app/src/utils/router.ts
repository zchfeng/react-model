import Home from "../pages/home"
import Page1 from "../pages/page1"
import Page2 from "../pages/page2"

interface IRouter {
  title: string,
  path: string,
  name: string,
  component: any
}

export const ROUTER: IRouter[] = [{
  title: '首页',
  path: '/',
  name: '首页',
  component: Home
}, {
  title: 'page1',
  path: '/page1',
  name: 'page1',
  component: Page1
},
{
  title: 'page2',
  path: '/page2',
  name: 'page2',
  component: Page2
}]