import React, {useState} from 'react';
import AppDropdown from "./component/dropdown/AppDropdown";
import {DropdownOption} from "./model/dropdown/dropdownModels";

const options = [
    {
        label: "ali",
        value: 1
    },
    {
        label: "alireza",
        value: 2
    },
    {
        label: "sajad",
        value: 3
    },
    {
        label: "milad",
        value: 4
    },
    {
        label: "amir",
        value: 5
    },
    {
        label: "yousef",
        value: 6
    }
]


function App() {
    const [value1, setValue1] = useState<DropdownOption[]>([])
    const [value2, setValue2] = useState<DropdownOption | undefined>()

    return (
        <>
            <AppDropdown placeholder={'select users'} multiple options={options} value={value1}
                         onChange={(e: any) => setValue1(e)}/>
            <br/>
            <AppDropdown placeholder={'select user'} options={options} value={value2}
                         onChange={(e: any) => setValue2(e)}/>
        </>
    );
}

export default App;
