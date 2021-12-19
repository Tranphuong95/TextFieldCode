import React, {useEffect} from "react"
export default function TextFieldCode(props){
    console.log("code", props.code)
    useEffect(() => {
        props.onChange({
            target: {
                name: props.name,
                value: Math.random()*10
            }
        })
    }, [props.checkBox])
    return <input {...props}/>
}