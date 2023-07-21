// import { useState } from "react";
import { useLoad } from '@tarojs/taro'
import 'swiper/swiper-bundle.min.css'
import SubList from './sublist'

export default function List({ tabs, list, handleActive }) {


    useLoad(() => {

    })

    // const requireContext = require.context("../../../image", true, /^\.\/.*\.jpg|\.jpeg|\.png$/)
    // const images: any = requireContext.keys().map(requireContext)
    // console.log(images)


    return (
        <div className="recipe-list">
            {tabs.map(tab => (
                <SubList key={tab.category} list={list} category={tab.category} handleActive={handleActive}></SubList>
            ))}
        </div>
    )
}
