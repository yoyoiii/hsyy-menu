import { useState, useEffect } from 'react'

export function useIntersectionObserver(ref: any, dependencies: any) {
    const [intersectingEntry, setIntersectingEntry]: any = useState(null)

    useEffect(() => {
        const div = ref.current;
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0]
            if (entry.isIntersecting) {
                setIntersectingEntry(entry);
            }
        }, dependencies);
        observer.observe(div)
        return () => {
            observer.disconnect()
        }
    }, [])

    return intersectingEntry
}