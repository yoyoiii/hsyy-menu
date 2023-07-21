// import { useState, useContext } from "react";
// import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
export default function Tabs({ tabs, activeTab, handleActive }) {

  // const [selected, setSelected] = useState(tabs[0]?.category)
  const handleClick = (category) => {
    handleActive(category)

    Taro.pageScrollTo({
        // scrollTop: 0,
        selector: `#Category_${category}`,
        duration: 500
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
