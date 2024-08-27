import { LOREM_IPSUM_TEXT } from "./randomTexts";

type PlainTextProps = {
    id: number
}

const PlainText = ({ id }: PlainTextProps) => {
    return (
        <div className="text-container">
            <div>Let's talk about lorem ipsum</div>
            <div style={{minHeight: '35vh'}}>
                {LOREM_IPSUM_TEXT[id]}
            </div>
            <div>That's all folks</div>
        </div>
    );
};

export default PlainText;
