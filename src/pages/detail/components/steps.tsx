import { useState } from "react";
import { View } from '@tarojs/components'

export default function Steps({ steps }) {


  return (
    <div className="recipe-main-content" id="Steps">
      <ul className="recipe-main-ul">
        {
          steps && steps.length
          ? steps.map((item, index) =>
            <li className="li-step" key={index}>
              <i className="icon-step">{index+1}</i>
              <span>{item}</span>
            </li>)
          : <div className="no-data">暂无数据</div>
        }
      </ul>
    </div>
  )
}
