import { useState, useRef, useEffect } from "react";
import { useLoad, navigateTo } from '@tarojs/taro'
import { Image } from '@tarojs/components'

export default function Card({ recipe }) {

    const ref = useRef(null)

    const handleClick = (e, recipeid) => {
        navigateTo({
            url: `/pages/detail/detail?recipeid=${recipeid}`,
        })
    }

    useLoad(() => {

    })

    useEffect(() => {

    })

    return (
        <li className="recipe-item" data-recipeid={recipe.recipeid} onClick={(e) => handleClick(e, recipe.recipeid)}>
            <div className="image-wrapper" ref={ref}>
                {/* <img src={require("../../../image/" + recipe.recipeid + ".jpg")} alt="" /> */}
                <Image className="thumb" src={require(`../../../image/${recipe.recipeid}.jpg`)} mode="aspectFill" />
            </div>
            <div className="item-content">
                <h3>{recipe.title}</h3>
                <p>{recipe.desc}</p>
            </div>
            {recipe.category == "eatout" ? <i className="corner-mark"></i> : null}
        </li>
    )
}
