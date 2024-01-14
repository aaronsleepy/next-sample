/**
 * next/image 사용 예제
 */

import { NextPage } from "next";
import NewJeansImage from '../public/images/newjeans.jpeg'
import Image from "next/image";

const ImageSample: NextPage<void> = (props) => {
    return (
        <div>
            <h1>이미지 표시 비교</h1>
            <p>img tag로 표시한 경우</p>
            <img src="/images/newjeans.jpeg" />
            <p>Image 컴포넌트로 표시한 경우</p>
            <Image src={NewJeansImage} alt={""} />
            <p>Image로 표시한 경우는 사전에 그리기 영역이 확보됩니다</p>
        </div>
    )
}

export default ImageSample