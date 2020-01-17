import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { showDrawer,changeCata, hideDrawer } from "../../actions/menu";
import { AtDrawer } from "taro-ui";
import { connect } from "@tarojs/redux";
import "./menu.scss";
@connect(
  function(store) {
    return { ...store.menu };
  },
  function(dispatch) {
    return {
      showMenu() {
        dispatch(showDrawer());
      },
      hideDrawer(){
        dispatch(hideDrawer())
      },
      changeCata(cata){
        dispatch(changeCata(cata))
    }
    };
  }
)
class Menu extends Component {
  // 显示抽屉
  showDrawer() {
    this.props.showMenu && this.props.showMenu();
  }
  //关闭抽屉时触发
  closeDrawer(){
    this.props.hideDrawer&&this.props.hideDrawer();
  }
  getItems(cataData) {
    return cataData.map(item => item.value);
  }
  // 点击分类时候触发
  clickCata(index){
    let {cataData}=this.props
    let clickCata=cataData[index]
    this.props.changeCata&&this.props.changeCata(clickCata) //点击分类 触发切换分类方法
  }
  render() {
    let { showDrawer, cataData } = this.props;
    let items = this.getItems(cataData); //获取分类列表
    return (
      <View>
        <View className="topiclist-menu">
          <Image
            onClick={this.showDrawer.bind(this)}
            className="image  left"
            src={require("../../assets/img/cata.png")}
          />
          <Text>
            {this.props.currentCata ? this.props.currentCata.value : ""}
          </Text>
          <Image
            className="image right"
            src={require("../../assets/img/login.png")}
          />
        </View>
        <AtDrawer onClose={this.closeDrawer.bind(this)} onItemClick={this.clickCata.bind(this)}  show={showDrawer} items={items} />
      </View>
    );
  }
}

export default Menu;
