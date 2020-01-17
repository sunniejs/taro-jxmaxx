import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/cate/cate',
      "pages/mine/mine"
    ],
    "window": {
      "navigationBarTitleText": "Decathlon",
      "navigationBarBackgroundColor": "#0082c3",
      "navigationBarTextStyle": "white",
      "enablePullDownRefresh": true,
      "onReachBottomDistance": 10
    },
    "tabBar": {
      "color": "#999",
      "selectedColor": "#fff",
      "backgroundColor": "#303030",
      "list": [
        {
          "pagePath": "pages/index/index",
          "text": "首页",
          "iconPath": "images/icon_home_unchoice.png",
          "selectedIconPath": "images/icon_home_choice.png"
        },
        {
          "pagePath": "pages/cate/cate",
          "text": "分类",
          "iconPath": "images/icon_data_choice.png",
          "selectedIconPath": "images/icon_data_choice.png"
        },
        {
          "pagePath": "pages/mine/mine",
          "text": "我的",
          "iconPath": "images/icon_mine_unchoice.png",
          "selectedIconPath": "images/icon_mine_choice.png"
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
