import { NextPage } from "next"
import styled from "styled-components"

/**
 * 스타일드 컴포넌트를 사용한 컴포넌트 구현
 * - when: 부모 컴포넌트에 따라 CSS의 내용을 바꾸고 싶을 때
 * - props 사용하기 예제
 */
type ButtonProps = {
    color: string
    backgroundColor: string
}

const Button = styled.button<ButtonProps>`
    color: ${(props) => props.color};
    background: ${(props) => props.backgroundColor};
    border: 2px soild ${(props) => props.color};
    font-size: 2em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 8px;
    cursor: pointer;
`

const Page: NextPage = () => {
    return (
        <div>
            <Button backgroundColor="transparent" color="#FF0000">
                Hello
            </Button>

            <Button backgroundColor="#1E90FF" color="White">
                World
            </Button>
        </div>
    )
}

export default Page