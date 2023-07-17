import { useState } from "react";
import Taro, { useLoad }  from '@tarojs/taro'

export default function Card({ recipe }) {
    useLoad(() => {

    })

    const handleClick = (e) => {
        const recipeid = e.target.dataset?.recipeid
        Taro.navigateTo({
            url: `/pages/detail/detail?recipeid=${recipeid}`,
        })
    }

    return (
        <>
            <div className="slider-image-wrapper">
                <img className="slider-image swiper-lazy" data-src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80" alt=" " />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
            <div className="slider-item-content">
                <h3>这是一个菜名</h3>
                <p>这是一句描述</p>
                <span className="more" data-recipeid={recipe.recipeid} onClick={handleClick}>More Detail</span>
            </div>
        </>
    )
}
