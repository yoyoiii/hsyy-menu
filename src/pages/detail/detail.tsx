import './css/detail.scss'
import { useState } from "react";
import { View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import Ingredients from './components/ingredients'
import Steps from './components/steps'
import Link from './components/links'
import data from '../../public/index.json'

export default function Detail() {

  useLoad(() => {
    console.log('Page(Detail) loaded.')
  })

  const getUrlParameter = (parameter: string) => {
    const reg = new RegExp("(^|&)" + parameter + "=([^&]*)(&|$)", "i");
    const r = window.location.search.substr(1).match(reg);
    if (r != null)
      return decodeURIComponent(r[2]);
    return '';
  }

  const recipeid = getUrlParameter("recipeid");
  const menuList = data?.MENU_LIST || []
  const recipe = menuList.filter(item => item.recipeid == recipeid)
  const ingredients = recipe[0]?.ingredients || []
  const steps = recipe[0]?.steps || []
  const link = recipe[0]?.link || ""

  const [selected, setSelected] = useState(0)

  const handleClick = (index) => {
    setSelected(index)
  }


  return (
    <div className='recipe-detail-contaier'>
      <div className="recipe-header">
        <img className='recipe-cover' src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80" alt="" />
        <div className="recipe-title">这个是菜名</div>
        <ul className="recipe-detail-tabs">
          <li className={selected == 0 ? 'active': ''} onClick={() => handleClick(0)}>用料</li>
          <li className={selected == 1 ? 'active': ''} onClick={() => handleClick(1)}>步骤</li>
          <li className={selected == 2 ? 'active': ''} onClick={() => handleClick(2)}>链接</li>
        </ul>
      </div>
      <div className="recipe-main">
        {
          selected == 0 ?
            <Ingredients ingredients={ingredients}></Ingredients>:
          selected == 1 ?
            <Steps steps={steps}></Steps> :
            <Link link={link}></Link>
        }
      </div>
    </div>
  )
}
