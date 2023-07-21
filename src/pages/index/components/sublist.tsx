import { useState, useRef, useEffect } from "react";
import Taro, { useLoad } from '@tarojs/taro'
import 'swiper/swiper-bundle.min.css'
import Card from './card'

export default function SubList({ list, category, handleActive }) {


    useLoad(() => {

    })

    // const requireContext = require.context("../../../image", true, /^\.\/.*\.jpg|\.jpeg|\.png$/)
    // const images: any = requireContext.keys().map(requireContext)
    // console.log(images)

    const ref = useRef(null)

    useEffect(() => {
        const sl: any = ref.current;
        const observer = new IntersectionObserver(entries => {
          const entry = entries[0];

            if (entry.isIntersecting) {
                const type = entry.target.getAttribute("data-type")
                handleActive(type)
            }
        });
        observer.observe(sl);

        return () => {
          observer.disconnect();
        }
    }, [ref]);

    return (
        <ul className="recipe-ul" data-type={category} id={"Category_" + category} ref={ref}>
            {list[category].map(recipe => (
                <Card key={recipe.recipeid} recipe={recipe}></Card>
            ))}
        </ul>
    )
}
