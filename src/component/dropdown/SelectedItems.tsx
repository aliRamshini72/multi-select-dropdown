import {OptionBadge} from './styles'
export default function SelectedItems(props: any) {
    const {multiple, value, onItem} = props
    if (multiple) {
        if (value.length > 0) return value.map((v: any) => (
            <span key={v.value}>
                <OptionBadge
                    onClick={e => {
                        e.stopPropagation()
                        onItem(v)
                    }}
                >
                {v.label}
                    <span>&times;</span>
            </OptionBadge>
            </span>
        ))
        else return null
    } else {
        if (value) return <span>{value.label}</span>
        else return null
    }
}