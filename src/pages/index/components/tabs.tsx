import { useState } from "react";
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
export default function Tabs({ tabs }) {

  const [selected, setSelected] = useState(0)
  const handleClick = (index, category) => {
    setSelected(index)
    // const activeList: any = document.getElementById(`Category_${category}`)
    // activeList.scrollIntoView({ behavior: "smooth" })

    Taro.pageScrollTo({
        // scrollTop: 0,
        selector: `#Category_${category}`,
        duration: 500
    })
  }

  return (
    <div className="recipe-tabs">
      {tabs.map((tab, index) => (
        <li className={index == selected ? 'tab-item active' : 'tab-item'} key={tab.category} data-index={index} onClick={() => handleClick(index, tab.category)}>
          <span className="icon">{tab.icon}</span>
          <span className="desc">{tab.desc}</span>
        </li>
      ))}
    </div>
  )
}
