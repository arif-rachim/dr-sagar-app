import {useViewportDimension} from "../useViewportDimension";
import {CSSProperties, PropsWithChildren} from "react";
import {colors} from "../colors";

export function Page(props: PropsWithChildren<{ title: string }>) {
    const dimension = useViewportDimension();
    const containerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        padding: '3rem 3rem',
        boxShadow: '0 15rem 70rem -5rem rgba(128,188,106,0.2) inset',
        color: 'rgba(0,0,0,0.8)',
        borderTop: `1px solid ${colors.primary}`
    };
    if (dimension.width < 500) {
        containerStyle.padding = '1rem'
    }
    return <div style={containerStyle}>
        <article>
            <h2 style={{
                fontFamily: 'Sacramento',
                fontSize: '3rem',
                margin: 0,
                padding: 0,
                color: colors.second,
                textAlign : dimension.width < 600 ? 'center' : 'left'

            }}>{props.title}</h2>

        {props.children}
        </article>
    </div>
}