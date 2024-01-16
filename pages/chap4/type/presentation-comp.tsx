/**
 * Presentation Component
 * - 형태를 나타내는 컴포넌트
 * - 내부에 상태를 갖지 않음
 * - API 호출 등 부가 작용을 실행하지 않음
 */

type ButtonProps = {
    label: string
    text: string
    disabled: boolean
    onClick: React.MouseEventHandler<HTMLButtonElement>
}