import {useState} from "react";
import {Menu} from "./fragment/menu/Menu";
import {Banner} from "./fragment/banner/Banner";
import {Journey} from "./fragment/journey/Journey";
import {Education} from "./fragment/education/Education";
import {ConditionsTreated} from "./fragment/treated/ConditionsTreated";
import {Appointment} from "./fragment/appointment/Appointment";

/**
 *
 *
 */

function App() {
  const [count, setCount] = useState(0)
  return <div style={{display:'flex',flexDirection:'column',maxWidth:1024,margin:'auto'}}>
    <Menu />
    <Banner/>
    <Journey/>
    <Education/>
    <ConditionsTreated />
    <Appointment />
  </div>
}

export default App
