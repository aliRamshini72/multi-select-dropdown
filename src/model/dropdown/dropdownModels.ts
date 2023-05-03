export type DropdownOption = {
    label: string
    value: string | number
}

type MultipleDropdownProps = {
    multiple: true
    value: DropdownOption[]
    onChange: (value: DropdownOption[]) => void
}

type SingleDropdownProps = {
    multiple?: false
    value?: DropdownOption
    onChange: (value: DropdownOption | undefined) => void
}

export type DropdownProps = {
    options: DropdownOption[],
    loading: boolean,
    placeholder: string
} & (SingleDropdownProps | MultipleDropdownProps)

export type OptionsProps = {
    value?: DropdownOption[] | DropdownOption
    multiple?: boolean
    options: DropdownOption[],
    loading: boolean,
    isOpen: boolean,
    highlightedIndex: number,
    onItem: (item: DropdownOption) => void
    onItemMouseEnter: (index: number) => void
}