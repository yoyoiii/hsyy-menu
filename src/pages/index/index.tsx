import './css/index.scss'
import { useState } from "react";
import Taro, { useLoad } from '@tarojs/taro'
import Tabs from './components/tabs'
import ListH5 from './components/list_h5'
import ListWe from './components/list_weapp'
import data from '../../public/index.json'

const ENV_TYPE = Taro.getEnv()?.toUpperCase();

export default function Index() {

  const menuTabs = data?.MENU_TABS || []
  const menuList = data?.MENU_LIST || []
  let tabs: any = []
  let list: any = {}

  // 排序
  menuTabs.map(tab => {
      menuList.forEach((item) => {
        if (tab.category == item.category) {
          if (tabs.indexOf(tab) < 0) {
            tabs.push(tab)
            list[tab.category] = []
          }
          list[tab.category] .push(item)
        }
      })
  })

  useLoad(() => {
    console.log('Page(List) loaded.')
  })

  const [activeTab, setActiveTab] = useState("")
  const [tabIsSelected, setTabIsSelected] = useState(false)

  const handleActive = (type) => {
    setActiveTab(type)
  }

  return (
    <div className='recipe-container'>
      <Tabs tabs={tabs} activeTab={activeTab} handleActive={handleActive} setTabIsSelected={setTabIsSelected}></Tabs>
      {
        ENV_TYPE == "WEB"
          ? <ListH5 tabs={tabs} list={list} handleActive={handleActive} tabIsSelected={tabIsSelected}></ListH5>
          : ENV_TYPE == "WEAPP"
          ? <ListWe tabs={tabs} list={list} handleActive={handleActive} tabIsSelected={tabIsSelected}></ListWe>
          : null
      }
    </div>
  )
}
