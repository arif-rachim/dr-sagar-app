import logo from "./logo.svg";
import {colors} from "../colors";
export function Banner(){
    return <div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:'3rem 1rem',boxShadow:'0 15rem 70rem -5rem rgba(255,255,255,0.3) inset',color:'rgba(0,0,0,0.8)',textAlign:'center',minHeight:'80vh'}}>
        <img width={300} height={300} src={logo}/>
        <h1 style={{fontFamily:'Tenor Sans',letterSpacing:'0.1rem',margin:'3rem 0',color:colors.second}}>SAGARS HOLISTICS PEDIATRICS</h1>
        <h3 style={{fontWeight:300,margin:0,padding:0,fontSize:'0.9rem',letterSpacing:'0.15rem'}}>A Video Consulation Platform by,</h3>
        <h2 style={{fontWeight:300,fontSize:'1.6rem',margin:'0.5rem',padding:0}}>PADMINI SAGAR <span>M.D. DABHM</span></h2>
        <h3 style={{fontWeight:400,fontStyle:'italic',margin:0,padding:0,fontSize:'1rem'}}>Board Certified Pediatrician and Homeopath</h3>
    </div>
}