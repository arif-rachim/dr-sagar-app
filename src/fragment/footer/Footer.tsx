import {colors} from "../colors.ts";

export function Footer(){
    const currentYear = new Date().getFullYear();
    return <div style={{display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:colors.second,color:'#FFF',padding:'0.5rem 0 1rem 0',boxShadow:'0 0.5rem 2rem -1.5rem rgba(0,0,0,0.5) inset'}}>
        <div style={{fontWeight:400,fontSize:'1.2rem'}}>Sagars Homeopathy For Kids</div>
        <div style={{fontWeight:400,fontSize:'1rem',letterSpacing:'0.3rem'}}>pedsagar@gmail.com</div>
        <div style={{fontWeight:400,fontSize:'0.85rem'}}>©{currentYear} by Sagars Homeopathy For Kids</div>
    </div>
}