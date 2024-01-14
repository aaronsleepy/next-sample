/**
 * next/link 예제
 * - getStaticProps 사용
 */

import { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"

type SSGProps = {
    message: string
}

const LinkDemoPage: NextPage<SSGProps> = (props) =>  {
    const { message } = props

    const router = useRouter()

    const onSubmit = () => {
        router.push('/ssg')
    }


    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div>
                    <Link href="/ssr">
                        Go to SSR
                    </Link>
                </div>
                <div>
                    <Link
                    href={{
                        pathname: '/ssr'
                    }}>
                        Go to SSR
                    </Link>
                </div>
                <div>
                    <button onClick={onSubmit}>Click to SSG</button>
                </div>
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp}에 getStaticProps가 실행됐습니다`
    console.log(message)

    return {
        props: {
            message
        }
    }
}

export default LinkDemoPage