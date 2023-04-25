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
    placeholder: string
} & (SingleDropdownProps | MultipleDropdownProps)