import { RenderResult, render, screen } from '@testing-library/react'
import { Input } from ".";

/**
 * index.tsx 컴포넌트에 대한 Test
 * - version이 맞지 않아 SKIP
 */
// describe('Input', () => {
//     let renderResult: RenderResult

//     beforeEach(() => {
//         renderResult = render(<Input id="username" label="Username" />)
//     })

//     afterEach(() => {
//         renderResult.unmount()
//     })

//     it('처음 화면에 그릴 때 input 요소가 비어있어야 합니다', () => {
//         const inputNode = screen.getByLabelText('Username') as HTMLInputElement
        
//         expect(inputNode).toHaveValue()
//     })
// })