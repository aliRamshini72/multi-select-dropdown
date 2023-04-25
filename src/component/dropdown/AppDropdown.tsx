import useDropdownStyle from "./useDropdownStyle";
import {DropdownOption, DropdownProps} from "../../model/dropdown/dropdownModels";
import useDropdown from "../../hook/useDropdown";
import {useCallback} from "react";


export default function AppDropdown({multiple, value, onChange, options, placeholder}: DropdownProps) {
    const classes = useDropdownStyle()

    const clearOptions = useCallback(() => {
        multiple ? onChange([]) : onChange(undefined)
    }, [multiple, onChange])

    const selectOption = useCallback((option: DropdownOption) => {
        if (multiple) {
            if (value.includes(option)) {
                onChange(value.filter(o => o !== option))
            } else {
                onChange([...value, option])
            }
        } else {
            if (option !== value) onChange(option)
        }
    }, [multiple, onChange, value])

    const isOptionSelected = useCallback((option: DropdownOption) => {
        return multiple ? value?.includes(option) : option === value
    }, [multiple, value])

    const {
        isOpen,
        setIsOpen,
        highlightedIndex,
        setHighlightedIndex,
        containerRef,
    } = useDropdown(options, selectOption)


    const renderValue = () => {
        if (multiple) {
            if (value.length > 0) return value.map(v => (
                <button
                    key={v.value}
                    onClick={e => {
                        e.stopPropagation()
                        selectOption(v)
                    }}
                    className={classes["option-badge"]}
                >
                    {v.label}
                    <span>&times;</span>
                </button>
            ))
            else return placeholder
        } else {
            if (value) return value.label
            else return placeholder
        }
    }


    return (
        <div
            ref={containerRef}
            onBlur={() => setIsOpen(false)}
            onClick={() => setIsOpen(prev => !prev)}
            tabIndex={0}
            className={classes.container}
        >
              <span className={classes.value}>
                  {renderValue()}
              </span>
            <button
                onClick={e => {
                    e.stopPropagation()
                    clearOptions()
                }}
                className={classes["clear-btn"]}
            >
                &times;
            </button>
            <div className={classes.divider}></div>
            <div className={classes.caret}></div>
            <ul className={`${classes.options} ${isOpen ? `${classes["options-show"]}` : ""}`}>
                {options.map((option, index) => (
                    <li
                        onClick={e => {
                            e.stopPropagation()
                            if (option)
                                selectOption(option)
                            setIsOpen(false)
                        }}
                        onMouseEnter={() => setHighlightedIndex(index)}
                        key={option.value}
                        className={`${classes.option} ${
                            isOptionSelected(option) ? `${classes["option-selected"]}` : ""
                        } ${index === highlightedIndex ? `${classes["option-highlighted"]}` : ""}`}
                    >
                        {option.label}
                        {isOptionSelected(option) && <span className={classes.tick}>&#x2713;</span>}
                    </li>
                ))}
            </ul>
        </div>
    )
}