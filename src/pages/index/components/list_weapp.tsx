import { useState, useEffect, useRef } from "react";
import Taro, { useLoad } from '@tarojs/taro'
import 'swiper/swiper-bundle.min.css'
import Card from './card'

export default function List(props) {

    const { tabs, list, handleActive, tabIsSelected } = props

    const windowHeight = Taro.getWindowInfo()?.windowHeight || 0
    const [itemHeight, setItemHeight] = useState(0)
    const ref: any = useRef(null)

    const getCurrentPage = () => {
        const pages = Taro.getCurrentPages ? Taro.getCurrentPages() : [{}]
        const currentPage = pages[pages.length - 1]
        return currentPage
    }

    useLoad(() => {
        setTimeout(() => {
            const query = Taro.createSelectorQuery()
            query.select('.recipe-item').boundingClientRect((res: any) => {
                setItemHeight(res?.height)
            }).exec()
        }, 200);
    })

    useEffect(() => {
        const observer = Taro.createIntersectionObserver(getCurrentPage(), {
            thresholds: [0], observeAll: true
        }).relativeToViewport({
            bottom: itemHeight - windowHeight
        })
        if (!tabIsSelected) {
            observer.observe('.recipe-ul', (entry) => {
                if (entry.intersectionRatio > 0) {
                    const type = document.getElementById(entry.id)?.getAttribute("data-type")
                    handleActive(type)
                }
            })
        }
        return () => {
            if(observer) observer.disconnect()
        }
    }, [tabIsSelected, itemHeight])

    return (
        <div className="recipe-list">
            {tabs.map(tab => (
                <ul className="recipe-ul" data-type={tab.category} id={"Category_" + tab.category} ref={ref}>
                    {list[tab.category].map(recipe => (
                        <Card key={recipe.recipeid} recipe={recipe}></Card>
                    ))}
                </ul>
            ))}
        </div>
    )
}
