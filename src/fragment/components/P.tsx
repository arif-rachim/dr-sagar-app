import {CSSProperties, HTMLProps} from "react";

export function P(props: HTMLProps<HTMLParagraphElement>) {
    const style: CSSProperties = {wordSpacing: '0.1rem', fontWeight: 400, fontSize: '1.1rem',color:'#555'};
    return <p style={style} {...props}>{props.children}</p>
}