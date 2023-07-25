import './css/index.scss'
import { useState } from "react";
import { useLoad } from '@tarojs/taro'
import Tabs from './components/tabs'
import List from './components/list'
import data from '../../public/index.json'

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
        <List tabs={tabs} list={list} handleActive={handleActive} tabIsSelected={tabIsSelected}></List>
    </div>
  )
}
