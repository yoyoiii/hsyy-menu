import { useState, useRef, useEffect } from "react";
import Taro, { useLoad } from '@tarojs/taro'
import 'swiper/swiper-bundle.min.css'
import Card from './card'
import { useIntersectionObserver } from './useIntersectionObserver'

export default function SubList(props) {

    const { list, category, handleActive, tabIsSelected } = props

    useLoad(() => {

    })

    // const requireContext = require.context("../../../image", true, /^\.\/.*\.jpg|\.jpeg|\.png$/)
    // const images: any = requireContext.keys().map(requireContext)
    // console.log(images)

    const ref = useRef(null)
    const intersectingEntry = useIntersectionObserver(ref, {
        root: document.querySelector('.taro_page'),
        rootMargin: "-40% 0px -40% 0px"
    })

    useEffect(() => {
        if (intersectingEntry && !tabIsSelected) {
            const type = intersectingEntry.target.getAttribute("data-type")
            handleActive(type)
         }
    }, [intersectingEntry])

    return (
        <ul className="recipe-ul" data-type={category} id={"Category_" + category} ref={ref}>
            {list[category].map(recipe => (
                <Card key={recipe.recipeid} recipe={recipe}></Card>
            ))}
        </ul>
    )
}
