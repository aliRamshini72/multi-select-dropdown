import React, {useEffect, useState} from 'react';
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
    },
    {
        label: "hosein",
        value: 7
    },
    {
        label: "hasan",
        value: 8
    },
    {
        label: "gholam",
        value: 9
    },
    {
        label: "arman",
        value: 10
    }
]

function getOptions() {
    return new Promise<any[]>((resolve, reject) => {
        setTimeout(() => {
            resolve(options)
        }, 2000)
    })
}


function App() {
    const [value1, setValue1] = useState<DropdownOption[]>([])
    const [value2, setValue2] = useState<DropdownOption | undefined>()
    const [loading, setLoading] = useState(true);
    const [options, setOptions] = useState<any[]>([])
    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const res = await getOptions();
            setOptions(res)
            setLoading(false)
        }
        getData()
    }, [])
    return (
        <div style={{
            width : "50%" ,
            margin : '2rem auto'
        }}>
            <AppDropdown loading={loading} placeholder={'select users'} multiple options={options} value={value1}
                         onChange={(e: any) => setValue1(e)}/>
            <br/>
            <AppDropdown loading={loading} placeholder={'select user'} options={options} value={value2}
                         onChange={(e: any) => setValue2(e)}/>
        </div>
    );
}

export default App;
