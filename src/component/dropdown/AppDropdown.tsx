import {DropdownOption, DropdownProps} from "../../model/dropdown/dropdownModels";
import useDropdown from "../../hook/useDropdown";
import {useCallback} from "react";
import Options from "./Options";
import SelectedItems from "./SelectedItems";
import {DropdownContainer, DropdownInput, ClearBtn, Divider, Caret} from './styles'


export default function AppDropdown({loading, multiple, value, onChange, options, placeholder}: DropdownProps) {

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
        setSearchQuery("")
    }, [multiple, onChange, value])

    const onItem = (option: DropdownOption) => {
        if (option)
            selectOption(option)
        setIsOpen(false)
    }

    const onItemMouseEnter = useCallback((index: number) => {
        setHighlightedIndex(index)
    }, [])

    const onSelectedItem = (item: DropdownOption) => selectOption(item)

    const onChangeInput = (event: any) => {
        setIsOpen(true)
        setSearchQuery(event.target.value)
    }
    const onBlurContainer = (event: any) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsOpen(false)
        }
    }

    const {
        data,
        isOpen,
        setIsOpen,
        highlightedIndex,
        setHighlightedIndex,
        containerRef,
        searchQuery, setSearchQuery
    } = useDropdown(loading, options, selectOption)

    return (
        <DropdownContainer
            tabIndex={0}
            ref={containerRef}
            onBlur={onBlurContainer}
            onClick={() => {
                setIsOpen(prev => !prev)
            }}>
            <SelectedItems
                value={value}
                multiple={multiple}
                onItem={onSelectedItem}/>
            <DropdownInput
                value={searchQuery}
                onChange={onChangeInput} placeholder={placeholder}
                id={'dropdown-input'}/>
            <ClearBtn onClick={(event) => {
                event.stopPropagation()
                clearOptions()
            }}/>
            <Divider/>
            <Caret/>
            <Options
                isOpen={isOpen}
                loading={loading}
                options={data}
                multiple={multiple}
                value={value}
                onItem={onItem}
                highlightedIndex={highlightedIndex}
                onItemMouseEnter={onItemMouseEnter}
            />
        </DropdownContainer>
    )
}





