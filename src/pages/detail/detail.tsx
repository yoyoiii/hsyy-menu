import './css/detail.scss'
import { useState } from "react";
import { View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import Overview from './components/overview'
import Instructions from './components/instructions'
import Link from './components/links'

export default function Detail() {


  useLoad(() => {
    console.log('Page(Detail) loaded.')
  })

  const [selected, setSelected] = useState(0)
  const handleClick = (index) => {
    setSelected(index)
  }


  return (
    <div className='recipe-detail-contaier'>
      <div className="recipe-header">
        <img className='recipe-cover' src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80" alt="" />
        <div className="recipe-title">这个是菜名</div>
        <ul className="recipe-tabs">
          <li className={selected == 0 ? 'active': ''} onClick={() => handleClick(0)}>Overview</li>
          <li className={selected == 1 ? 'active': ''} onClick={() => handleClick(1)}>Instructions</li>
          <li className={selected == 2 ? 'active': ''} onClick={() => handleClick(2)}>Links</li>
        </ul>
      </div>
      <div className="recipe-main">
        {
          selected == 0 ?
            <Overview></Overview>:
          selected == 1 ?
            <Instructions></Instructions> :
            <Link></Link>
        }
      </div>
    </div>
  )
}
