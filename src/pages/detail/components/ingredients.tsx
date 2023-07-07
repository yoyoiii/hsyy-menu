import { useState } from "react";
import { View } from '@tarojs/components'

export default function Ingredients() {


  return (
    <div className="recipe-main-content" id="Ingredients" >
          <ul className="recipe-main-ul">
              <li className="li-ingredient">
                  <span>猪肉</span>
                  <span className="dashed"></span>
                  <span>一斤</span>
              </li>
              <li className="li-ingredient">
                  <span>小米辣</span>
                  <span className="dashed"></span>
                  <span>一把</span>
              </li>
              <li className="li-ingredient">
                  <span>猪肉</span>
                  <span className="dashed"></span>
                  <span>一斤</span>
              </li>
          </ul>
    </div>
  )
}
