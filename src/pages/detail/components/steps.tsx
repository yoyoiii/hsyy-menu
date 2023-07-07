import { useState } from "react";
import { View } from '@tarojs/components'

export default function Steps() {


  return (
    <div className="recipe-main-content" id="Steps">
      <ul className="recipe-main-ul">
        <li className="li-step">
          <i className="icon-step">1</i>
          <span>第一步巴拉来不及阿拉伯胶腊八节腊八节啊吧</span>
        </li>
        <li className="li-step">
          <i className="icon-step"></i>
          <span>第2步巴拉来不及阿拉伯胶腊八节腊八节啊吧</span>
        </li>
        <li className="li-step">
          <i className="icon-step"></i>
          <span>第3步巴拉来不及阿拉伯胶腊八节腊八节啊吧</span>
        </li>
      </ul>
    </div>
  )
}
