import './css/detail.scss'
import { useState } from "react";
import { View } from '@tarojs/components'
import { useLoad, useRouter } from '@tarojs/taro'
import Ingredients from './components/ingredients'
import Steps from './components/steps'
import Link from './components/links'
import data from '../../public/index.json'

export default function Detail() {

  useLoad(() => {
    console.log('Page(Detail) loaded.')
  })

  const router = useRouter()
  const recipeid = router?.params?.recipeid
  const recipe = data?.MENU_LIST.filter(item => item.recipeid == recipeid)[0]
  const ingredients = recipe?.ingredients,
        steps = recipe?.steps,
        link = recipe?.link

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
          <li className={selected == 0 ? 'active': ''} onClick={() => handleClick(0)}>Ingredients</li>
          <li className={selected == 1 ? 'active': ''} onClick={() => handleClick(1)}>Steps</li>
          <li className={selected == 2 ? 'active': ''} onClick={() => handleClick(2)}>Link</li>
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
