import {ComponentProps, CSSProperties} from "react";
import {colors} from "../colors";

export function P(props: ComponentProps<'p'>) {
    const style: CSSProperties = {wordSpacing: '0.1rem', fontWeight: 400, fontSize: '1.1rem', color: colors.second};
    return <p style={style} {...props} >{props.children}</p>
}