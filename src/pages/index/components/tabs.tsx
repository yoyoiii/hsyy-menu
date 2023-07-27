// import { useState, useContext } from "react";
// import { View } from '@tarojs/components'
import { pageScrollTo } from '@tarojs/taro'
export default function Tabs(props) {

  const { tabs, activeTab, handleActive, setTabIsSelected } = props

  const handleClick = (category) => {
    handleActive(category)
    setTabIsSelected(true)

    pageScrollTo({
      // scrollTop: 0,
      selector: `#Category_${category}`,
      duration: 500,
      complete: function () {
        setTabIsSelected(false)
      }
    })

  }


  return (
    <div className="recipe-tabs">
      {tabs.map((tab) => (
        <li className={(activeTab == tab.category) ? 'tab-item active' : 'tab-item'} key={tab.category} onClick={() => handleClick(tab.category)}>
          <span className="icon">{tab.icon}</span>
          <span className="desc">{tab.desc}</span>
        </li>
      ))}
    </div>
  )
}
