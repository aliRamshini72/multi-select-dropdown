import {useEffect, useRef, useState} from "react";
import {DropdownOption} from "../model/dropdown/dropdownModels";


export default function useDropdown(options: DropdownOption[], selectOption: (option: DropdownOption) => void) {
    const [isOpen, setIsOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isOpen) setHighlightedIndex(0)
    }, [isOpen])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.target != containerRef.current) return
            switch (e.code) {
                case "Enter":
                case "Space":
                    setIsOpen(prev => !prev)
                    if (isOpen) selectOption(options[highlightedIndex])
                    break
                case "ArrowUp":
                case "ArrowDown": {
                    if (!isOpen) {
                        setIsOpen(true)
                        break
                    }

                    const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1)
                    if (newValue >= 0 && newValue < options.length) {
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
    }, [isOpen, highlightedIndex, options, selectOption])

    return {
        isOpen,
        setIsOpen,
        highlightedIndex,
        setHighlightedIndex,
        containerRef,
    }
}