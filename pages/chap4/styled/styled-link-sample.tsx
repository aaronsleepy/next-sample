import { NextPage } from "next";
import Link, { LinkProps } from "next/link";
import React from "react";
import { styled } from "styled-components";

/**
 * Next.js 컴포넌트에 스타일을 사용하기
 */
type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
    className?: string
    children: React.ReactNode
}

const BaseLink = (props: BaseLinkProps) => {
    const { className, children, ...rest } = props

    return (
        <Link className={className} {...rest}>
            {children}
        </Link>
    )
}

const StyledLink = styled(BaseLink)`
    color: #1E90FF;
    font-size: 2em;
`

const Page: NextPage = () => {
    return (
        <div>
            <StyledLink href="/">
                Go to Index
            </StyledLink>
        </div>
    )
}

export default Page