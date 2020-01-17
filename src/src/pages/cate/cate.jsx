import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView,Text,Image } from '@tarojs/components'
import SubCate from './subCate'
import './index.scss'
const info = Taro.getSystemInfoSync()
export default class Cate extends Component {

  config = {
    "enablePullDownRefresh": false,
     navigationBarTitleText: '分类'
  }
  state = {
    windowHeight:info.windowHeight,
    scroll: {
      offsetY: 0
    },
    currentIndex:0,
    categoryList:[{id:1,name:'所有运动'},{id:2,name:'运动服饰'},{id:3,name:'运动鞋袜'}],
    subCate:[{
      name:'户外运动',
      categoryList: [{
        id:1,name:'健身',bannerUrl: "https://yanxuan.nosdn.127.net/422b28e450944ab205dd0691efc739bd.png"},
        {id:2,name:'跑步',bannerUrl: "https://yanxuan.nosdn.127.net/422b28e450944ab205dd0691efc739bd.png"},
        {id:3,name:'一日徒步',bannerUrl: "https://yanxuan.nosdn.127.net/422b28e450944ab205dd0691efc739bd.png"}]
    }]
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  // 分类数据
  _fetchSubCateList(id){
    // var e = this,
     a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    // t.default.subCate({
    //     categoryId: a,
    //     groupId: n
    // }).then(function(t) {
    //     var a = t.data.category;
    //     e.setData({
    //         subCate: a,
    //         currentBannerIndex: 0
    //     });
    // }, function(e) {});
  }
  // 点击左侧
  handleTapTabBarItem (index) {
    // var a = this.data, i = a.scroll, r = a.categoryList, s = t.currentTarget.dataset.index;
    // i.offsetY = -s * n,
    //  s !== this.data.currentIndex && this._fetchSubCateList(r[s].id), 
    const { categoryList , scroll  ,windowHeight}=this.state
    scroll.offsetY = -index * windowHeight
    
    // 请求分类数据
    // index!==currentIndex  && this._fetchSubCateList(categoryList[index].id)
   // console.log(30/100*categoryList.length+currentIndex/categoryList.length)
    this.setState({
       scroll,
       currentIndex:index
    })
 
     
  }
  disableScroll () {}
  render () {
    const { currentIndex,categoryList ,subCate,scroll,windowHeight} = this.state
    const styles = {
        top: `${((30+currentIndex*100)/(categoryList.length*100))*100}%`
      // top: `${((30/100*categoryList.length)+(currentIndex /categoryList.length) ) *100}%`
      // top: `${(20/100*categoryList.length+-scroll.offsetY/windowHeight*categoryList.length)*100}%`
    }
    return (
      <View  onCatchtouchmove="disableScroll" className='container'>
        <ScrollView scrollY className="tabBarWrap"  >
          <View className="tabBar">
             <View className="tabBar-list">
             {categoryList.map((item, index) => (
                <View key={item.id} onClick={this.handleTapTabBarItem.bind(this, index)} className={['tabBar-item f-withAnimate', currentIndex===index?'active':'']}>
                  <Text>{item.name}</Text>
                </View>
              ))}
             <View className="tabBar-line f-withAnimate" style={styles} ></View>
            </View>
          </View>
        </ScrollView>
        <View className="main">
          <ScrollView scrollY  style="height: 100%;" >
            <View>
                <SubCate subCate={subCate}></SubCate>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}
