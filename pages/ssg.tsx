/**
 * SSG를 통한 페이지 구현
 */

import { NextPage } from "next"
import Head from "next/head"

type SSGProps = {}

const SSG: NextPage<SSGProps> = () =>  {
    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>
                    이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다
                </p>
            </main>
        </div>
    )
}

export default SSG