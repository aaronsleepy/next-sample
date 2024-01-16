import { NextPage } from "next";
import CountButton from "./container-comp";

const SSR: NextPage = (props) => {
    return (
        <div>
            <CountButton label="Click Me" maximum={5} />
        </div>
    )
}

export default SSR