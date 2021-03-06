export default {
  pages: [
    'pages/index/index',
    'pages/page01/index',
    'pages/page02/index',
    'pages/todo/todo'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#7a7e83',
    selectedColor: '#333333',
    backgroundColor: '#fff',
    list: [{
      pagePath: 'pages/index/index',
      text: '้ฆ้กต',
      iconPath: 'assets/img/icon_home.png',
      selectedIconPath: 'assets/img/icon_home_active.png',
    }, {
      pagePath: 'pages/todo/todo',
      text: 'ๆ็',
      iconPath: 'assets/img/icon_search.png',
      selectedIconPath: 'assets/img/icon_search_active.png',
    }]
  }
}
