import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class SubCate extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { subCate } = this.props
    return (
      <View className="cate">
        {/* <View className="all-sports-list">
              {item.categoryList.map(item  => (
                  <View className="item">
                      <Image lazyLoad className="img" src={item.bannerUrl}></Image>
                      <View className="name">{item.name}</View>
                  </View>
              ))}
        </View> */}
        {subCate.map((item) => (
          <View className="group" key={item.id}>
            { item.name && <View className="title" > {item.name}</View>}
            <View className="listWrapper">
              <View className="categories-group">
              {item.categoryList.map(item  => (
                  <View className="categories-item">
                      <View className="categories-name">{item.name}</View>   
                  </View>
               ))}
              </View>
            </View>
          </View>
        ))}
      </View> 
    )
  }
}
