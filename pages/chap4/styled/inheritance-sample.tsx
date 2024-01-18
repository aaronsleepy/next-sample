import { NextPage } from "next";
import styled from "styled-components";

/**
 * 스타일드 컴포넌트를 사용한 컴포넌트 구현
 * - when: 스타일을 상속하여 재사용하고 싶을 때
 * - 스타일 상속 사용하기 예제
 */
const Text = styled.p`
    color: blue;
    font-weight: bold;
`

const BorderedText = styled(Text)`
    padding: 8px 16px;
    border: 3px solid blue;
    border-radius: 8px;
`

const Page: NextPage = () => {
    return (
        <div>
            <Text>Hello</Text>
            <BorderedText>World</BorderedText>
        </div>
    )
}

export default Page