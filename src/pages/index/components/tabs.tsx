import { useState } from "react";
import { View } from '@tarojs/components'

export default function Tabs({ tabs, getIndex }) {

  const [selected, setSelected] = useState(0)
  const handleClick = (index) => {
    setSelected(index)
    getIndex(index)
  }

  return (
    <ul className="recipe-tabs">
      {tabs.map((tab, index) => (
        <li className={index == selected ? 'tab-item active': 'tab-item'} key={tab.category} data-index={index} onClick={() => handleClick(index)}>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref={'#' + tab.svg}></use>
          </svg>
          <span className="desc">{tab.desc}</span>
        </li>
      ))}
    </ul>
  )
}
