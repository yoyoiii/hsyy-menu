import { useState } from "react";
import { View } from '@tarojs/components'

export default function Links({ link }) {

  return (
    <div id="Links" className="recipe-main-content">
      {
        link
          ? <p className="links-detail">🔗<a href={link} target="_blank">传送门</a></p>
          : <div className="no-data">暂无数据</div>
      }
    </div>
  )
}
