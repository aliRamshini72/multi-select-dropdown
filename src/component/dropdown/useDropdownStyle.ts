import {createUseStyles} from "react-jss";

const useDropdownStyle = createUseStyles({
    container: {
        margin: '2rem auto',
        position: "relative",
        width: "20em",
        minHeight: "1.5em",
        border: ".05em solid #777",
        display: "flex",
        alignItems: "center",
        gap: ".5em",
        padding: ".5em",
        borderRadius: ".25em",
        outline: "none",
        cursor: 'pointer',
        "&:focus": {"borderColor": "hsl(135,66%,74%)"}
    },
    value: {
        flexGrow: "1", display: "flex", gap: ".5em", flexWrap: "wrap"},
    "clear-btn": {
        background: "none",
        color : "#777",
        border: "none",
        outline: "none",
        cursor: "pointer",
        padding: "0",
        fontSize: "1.25em",
        "&:focus": {"color": "#333"},
        "&:hover": {"color": "#333"}
    },
    divider: {"backgroundColor": "#777", "alignSelf": "stretch", "width": ".05em"},
    caret: {
        translate: "0 25%",
        border: ".25em solid transparent",
        borderTopColor: "#777",
        "&:hover": {borderTopColor: "#333"}
    },
    options: {
        position: "absolute",
        margin: "0",
        padding: "0",
        listStyle: "none",
        display: "none",
        maxHeight: "15em",
        overflowY: "auto",
        border: ".05em solid #777",
        borderRadius: ".25em",
        width: "100%",
        left: "0",
        top: "calc(100% + .25em)",
        backgroundColor: "white",
        zIndex: "100",
    },
    "options-show": {
        display: "block"
    },
    option: {
        padding: ".25em .5em", borderRadius: '.25rem', margin: ".25em .5em", cursor: "pointer",
    },
    "option-selected": {backgroundColor: "rgba(6,125,30,0.24)"},
    "option-highlighted": {backgroundColor: "rgba(6,125,30,0.73)", color: "white"},
    "option-badge": {
        display: "flex",
        alignItems: "center",
        border: ".05em solid #777",
        borderRadius: ".25em",
        padding: ".15em .25em",
        gap: ".25em",
        cursor: "pointer",
        background: "none",
        outline: "none",
        "&:hover": {
            backgroundColor: "#f8c3c3", borderColor: "#f51919",
        },
        "&.focus": {
            backgroundColor: "#f8c3c3", borderColor: "#f51919",
        }

    },
})
export default useDropdownStyle