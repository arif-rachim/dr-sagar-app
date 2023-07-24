import {PropsWithChildren} from "react";

const Li = (props: PropsWithChildren) => <li style={{
    margin: 0, listStyle: 'none', flexGrow: 1, padding: '1rem',
     justifyContent: 'center',textAlign:'center'
}}>{props.children}</li>

const A = (props:PropsWithChildren<HTMLAnchorElement>) => <a {...props} style={{textDecoration:'none',color:'#fff'}}>{props.children}</a>
export function Menu() {

    return <nav style={{background:'#80BC6A',boxShadow:'0 30px 30px -15px rgba(0,0,0,0.1) inset'}}>
        <ul style={{display: 'flex', margin: 0, padding: 0,flexWrap:'wrap'}}>
            <Li><A href={'#home'}>Home</A></Li>
            <Li><A href={'#home'}>First Consultation</A></Li>
            <Li><A href={'#home'}>Follow Up Consultation</A></Li>
            <Li><A href={'#home'}>Services</A></Li>
            <Li><A href={'#home'}>Fees</A></Li>
            <Li><A href={'#home'}>What is Homeopathy</A></Li>
            <Li><A href={'#home'}>Testimonials</A></Li>
            <Li><A href={'#home'}>Contact</A></Li>
        </ul>
    </nav>
}