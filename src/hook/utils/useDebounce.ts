import {useEffect, useState} from "react";


export default function useDebounce<T>(value: T, timer?: number) {
    const [debounceValue, setDebounceValue] = useState<T>(value);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceValue(value)
        }, timer || 500)
        return () => clearTimeout(timeout)
    }, [value])
    return debounceValue
}