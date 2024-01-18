import { NextPage } from "next";
import styled from "styled-components";

/**
 * 스타일드 컴포넌트를 사용한 컴포넌트 구현
 * - when: 스타일을 다른 HTML 요소에 사용하고 싶을 때
 * - as 사용하기 예제
 */
const Text = styled.p`
    color: #FF0000;
    font-size: 2em;
`

const Page: NextPage = () => {
    return (
        <div>
            <Text>World</Text>

            <Text as="a" href="/">
                Go to index
            </Text>
        </div>
    )
}

export default Page