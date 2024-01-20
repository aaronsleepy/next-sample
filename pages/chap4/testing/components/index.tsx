import { useState } from "react"

/**
 * 컴포넌트 테스트 대상
 */
type InputProps = JSX.IntrinsicElements['input'] & {
    label: string
}

export const Input = (props: InputProps) => {
    const { label, ...rest } = props

    const [text, setText] = useState('')

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(text)
    }

    const resetInputField = () => {
        setText('')
    }

    return (
        <div>
            <label htmlFor="{props.id}">{label}</label>
            <input {...rest} type="text" value={text} onChange={onInputChange} />
            <button onClick={resetInputField}>Reset</button>
        </div>
    )
}