import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'

export function useIntersectionObserver(ref: any, options: any = {}, dependencies: any = []) {
    const [intersectingEntry, setIntersectingEntry]: any = useState(null)

    useEffect(() => {
        const div = ref.current;
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0]
            if (entry.isIntersecting) {
                setIntersectingEntry(entry);
            }
        }, options);
        observer.observe(div)
        return () => {
            if(observer) observer.disconnect()
        }
    }, dependencies)

    return intersectingEntry
}