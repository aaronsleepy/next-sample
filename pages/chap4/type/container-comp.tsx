import { useState } from "react"
import Button from "./presentation-comp"

/**
 * Container Component
 * - 동작을 나타내는 컴포넌트: 비즈니스 로직을 담당
 * - Hooks을 사용해서 상태를 조작
 * - Presentation Component를 자식 컴포넌트로 가지며, 부모로써 비즈니스 로직을 담당
 */
type CountButtonProps = {
    label: string
    maximum: number
}

const usePopup = () => {
    const cb = (text: string) => {
        prompt(text)
    }

    return cb
}

const CountButton = (props: CountButtonProps) => {
    const { label, maximum } = props
 
    const [count, setCount] = useState(0)

    const displayPopup = usePopup()

    const onClick = () => {
        const newCount = count + 1
        setCount(newCount)

        if (newCount >= maximum) {
            displayPopup(`You clicked ${newCount} times`)
        }
    }

    const disabled = count >= maximum
    const text = disabled
        ? 'Cant click any more'
        : `You clicked ${count} times`
    return (
        <Button disabled={disabled} onClick={onClick} label={label} text={text} />
    )
}

export default CountButton