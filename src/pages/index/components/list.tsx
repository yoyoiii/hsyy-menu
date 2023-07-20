import { useState } from "react";
import { useLoad } from '@tarojs/taro'
import 'swiper/swiper-bundle.min.css'
import Card from './card'

export default function List({ tabs, list }) {


    useLoad(() => {

    })

    return (
        <div className="recipe-list">
            {tabs.map(tab => (
                <ul key={tab.category} className="recipe-ul" id={"Category_" + tab.category}>
                    {list[tab.category].map(recipe => (
                        <Card key={recipe.recipeid} recipe={recipe}></Card>
                    ))}
                </ul>
            ))}
        </div>
    )
}
