import { useState } from "react";
import { useLoad } from '@tarojs/taro'
import 'swiper/swiper-bundle.min.css'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Pagination, EffectCards } from 'swiper'
import Card from './card'

export default function List({ tabs, list }) {


    useLoad(() => {

    })

    return (
        <div className="recipe-card">
            <Swiper
                className="recipe-card-swiper"
                modules={[Pagination, EffectCards]}
                pagination = {{
                    clickable: true,
                }}
                effect="cards"
            >
                {tabs.map((tab) => (
                    list[tab.category].map((recipe, index) => (
                        <SwiperSlide className="slider-item" data-recipeid={recipe.recipeid} data-category={tab.category}>
                            <Card recipe={recipe}></Card>
                        </SwiperSlide>
                    ))
                ))}
            </Swiper>
        </div>
    )
}
