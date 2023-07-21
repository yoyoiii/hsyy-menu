import { useState } from "react";
import Taro, { useLoad } from '@tarojs/taro'

export default function Card({ recipe }) {

    useLoad(() => {

    })

    const handleClick = (e, recipeid) => {
        Taro.navigateTo({
            url: `/pages/detail/detail?recipeid=${recipeid}`,
        })
    }

    return (
        <li className="recipe-item" data-recipeid={recipe.recipeid} onClick={(e) => handleClick(e, recipe.recipeid)}>
            <div className="image-wrapper">
                {/* <img src={require("../../../image/" + recipe.recipeid + ".jpg")} alt="" /> */}
                <img src={require(`../../../image/${recipe.recipeid}.jpg`)} alt="" />
            </div>
            <div className="item-content">
                <h3>{recipe.title}</h3>
                <p>{recipe.desc}</p>
            </div>
            {recipe.category == "eatout" ? <i className="corner-mark"></i> : null}
        </li>
    )
}
