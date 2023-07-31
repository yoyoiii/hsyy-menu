import { useRef, useEffect } from "react";
import { useLoad, getWindowInfo } from '@tarojs/taro'
import 'swiper/swiper-bundle.min.css'
import Card from './card'

export default function SubList(props) {

    const { list, category, handleActive, tabIsSelected } = props

    const windowHeight = getWindowInfo()?.windowHeight || 0
    const ref = useRef(null)

    useLoad(() => {

    })

    useEffect(() => {
        const div: any = ref.current;
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0]
            if (entry.isIntersecting && !tabIsSelected) {
                const type = entry.target.getAttribute("data-type")
                handleActive(type)
            }
        }, {
            root: document.querySelector('.taro_page'),
            rootMargin: `0px 0px ${-windowHeight}px 0px`
        });
        observer.observe(div)
        return () => {
            if(observer) observer.disconnect()
        }
    }, [tabIsSelected])

    return (
        <ul className="recipe-ul" data-type={category} id={"Category_" + category} ref={ref}>
            {list[category].map(recipe => (
                <Card key={recipe.recipeid} recipe={recipe}></Card>
            ))}
        </ul>
    )
}
