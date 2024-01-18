import { NextPage } from "next";
import styled from "styled-components";

/**
 * Next.js 컴포넌트에 스타일을 사용하기
 * - theme 사용하기
 *   - theme 정의: root/theme.ts
 *   - theme 적용: root/_app.tsx에 ThemeProvier 적용
 */
const Text = styled.span`
    color: ${(props) => props.theme.colors.red};
    font-size: ${(props) => props.theme.fontSizes[3]};
    margin: ${(props) => props.theme.space[2]};
`

const Page: NextPage = () => {
    return (
        <div>
            <Text>Theme에서 참조한 색상을 사용하고 있습니다</Text>
        </div>
    )
}

export default Page