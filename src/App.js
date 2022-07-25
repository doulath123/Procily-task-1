import {Resizable} from 're-resizable'
import './App.css';
import Cmp1 from './component1/cmp1';
import Cmp2 from './component2/cmp2';
import Cmp3 from './component3/cmp3';
function App() {
  return (
    <div>
      <div className="cmp1cmp2">
   
   <Cmp1/>
   <Cmp2/>
   
 </div>
 
 <Cmp3/>
    </div>
  );
}

export default App;
