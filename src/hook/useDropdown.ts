import {useEffect, useRef, useState} from "react";
import {DropdownOption} from "../model/dropdown/dropdownModels";
import useDebounce from "./utils/useDebounce";


export default function useDropdown(loading: boolean, options: DropdownOption[], selectOption: (option: DropdownOption) => void) {
    const [filteredList, setFilteredList] = useState(options)
    const [searchQuery, setSearchQuery] = useState("");
    const debouncedValue = useDebounce(searchQuery, 1000);
    const [isOpen, setIsOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isOpen) setHighlightedIndex(0)
    }, [isOpen, filteredList])

    useEffect(() => {
        if (!loading && debouncedValue && options && options.length > 0) {
            const list = options.filter((u: DropdownOption) => u.label.toLowerCase().includes(debouncedValue.toLowerCase()))
            setFilteredList(list)
        } else setFilteredList(options)
    }, [debouncedValue, options])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            // if (e.target != containerRef.current) return
            switch (e.code) {
                case "Enter":
                case "Space":
                    if (filteredList.length > 0) {
                        setIsOpen(prev => !prev)
                        if (isOpen) selectOption(filteredList[highlightedIndex])
                    }
                    break
                case "ArrowUp":
                case "ArrowDown": {
                    if (!isOpen) {
                        setIsOpen(true)
                        break
                    }

                    const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1)
                    if (newValue >= 0 && newValue < filteredList.length) {
                        setHighlightedIndex(newValue)
                    }
                    break
                }
                case "Escape":
                    setIsOpen(false)
                    break
            }
        }
        containerRef.current?.addEventListener("keydown", handler)

        return () => {
            containerRef.current?.removeEventListener("keydown", handler)
        }
    }, [isOpen, highlightedIndex, filteredList, selectOption])

    return {
        data: filteredList,
        isOpen,
        setIsOpen,
        highlightedIndex,
        setHighlightedIndex,
        containerRef,
        searchQuery, setSearchQuery
    }
}