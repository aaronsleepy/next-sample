import { NextPage } from "next";
import styled from "styled-components";
import { css } from "styled-components";


/**
 * 스타일드 컴포넌트를 사용한 컴포넌트 구현
 * - when: CSS 정의를 재사용하고자 할 때
 * - mixin 사용하기 예제
 */
const redBox = css`
    padding: 0.25em 1em;
    border: 3px solid #FF0000;
    border-radius: 10px;
`
const font = css`
    color: #1E90FF;
    font-size: 2em;
`

const Button = styled.button`
    background: transparent;
    margin: 1em;
    cursor: pointer;
    ${redBox}
    ${font}
`
const Text = styled.p`
    font-weight: bolod;
    ${font}
`

const Page: NextPage = () => {
    return (
        <div>
            <Button>Hello</Button>
            <Text>World</Text>
        </div>
    )
}

export default Page