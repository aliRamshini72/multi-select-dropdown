import {useCallback} from "react";
import {DropdownOption, OptionsProps} from "../../model/dropdown/dropdownModels";
import {OptionList, Tick, OptionItem} from "./styles";
import classNames from "classnames";

export default function Options(props: OptionsProps) {
    const {loading, multiple, value, options, isOpen, onItem, highlightedIndex, onItemMouseEnter} = props;

    const isOptionSelected = useCallback((option: DropdownOption) => {
        // @ts-ignore
        return multiple ? value?.includes(option) : option === value
    }, [multiple, value])

    if (loading) return <OptionList isOpen={isOpen}>loading ...</OptionList>
    if (options && options.length === 0) return <OptionList isOpen={isOpen}>not found ...</OptionList>
    return (
        <OptionList isOpen={isOpen}>
            {options.map((option: any, index: number) => (
                <OptionItem
                    onClick={e => {
                        e.stopPropagation()
                        onItem(option)
                    }}
                    onMouseEnter={(event) => {
                        onItemMouseEnter(index)
                    }}
                    key={option.value}
                    className={classNames({
                        "selected": isOptionSelected(option),
                        "highlighted": index === highlightedIndex
                    })}
                >
                    {option.label}
                    {isOptionSelected(option) && <Tick>&#x2713;</Tick>}
                </OptionItem>
            ))}
        </OptionList
        >
    )
}