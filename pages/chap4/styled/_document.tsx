/**
 * styled-components 사용 예제
 * - getInitialProps 사용
 * - Custom Document 구조: 페이지의 html, body 요소 자체를 변경
 */

import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () => 
                originalRenderPage({
                    enhanceApp: (App) => (props) => 
                    sheet.collectStyles(<App {...props} />)
                })

            const initialProps = await Document.getInitialProps(ctx)

            return {
                ...initialProps,
                styles: [
                    initialProps.styles,
                    sheet.getStyleElement()
                ]
            }
        } finally {
            sheet.seal()
        }
    }   
}