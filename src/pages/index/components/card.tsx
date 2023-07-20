import { useState } from "react";
import Taro, { useLoad }  from '@tarojs/taro'

export default function Card({ recipe }) {

    useLoad(() => {

    })

    const handleClick = (e, recipeid, category) => {
        if (category == "eatout") return
        Taro.navigateTo({
            url: `/pages/detail/detail?recipeid=${recipeid}`,
        })
    }

    return (
        <li data-recipeid={recipe.recipeid} onClick={(e) => handleClick(e, recipe.recipeid, recipe.category)}>
            <div className="image-wrapper">
                <img src={recipe.thumb} alt="" />
            </div>
            <div className="item-content">
                <h3>{recipe.title}</h3>
                <p>{recipe.desc}</p>
            </div>
        </li>
    )
}
