import { useState } from "react";
import { View } from '@tarojs/components'

export default function Links({ link }) {

  return (
    <div id="Links" className="recipe-main-content">
      <p className="links-detail"><a href={link} target="_blank">{link}</a></p>
    </div>
  )
}
