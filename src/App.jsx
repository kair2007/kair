import dot from './img/Dots.svg'
import logo from "./img/_Logo.png"
import woman from "./img/screeshot.svg"
import Num from "./img/Num.svg"
import BI from "./img/BI.svg"
import KF from "./img/KF.svg"
import FB from "./img/FB.svg"
import HB from "./img/HB.svg"
import rybashka from "./img/rybaska.svg" 
import tetka from "./img/tetka.svg"
import man from "./img/man.svg"
function App() {
  return (
    <>
      <div className="main">
        <div className="banner">
          <img src={dot} alt="лого" />
          <p>Summer sale up to 50% off</p>
          <img src={dot} alt="лого" />
        </div>
        <div className='logo'>

          <img src={logo} alt='' />
        </div>
        <div className='women' >
          <img src={woman} alt='women' />
          <h1>Spring Season</h1>
          <h2></h2>
        </div>
        <div className="linebar">
          <div className="linelogo">
            <img className = "line1" src = {Num}/>
            <img className = "line2" src = {BI}/>
            <img className = "line3" src = {KF}/>
            <img className = "line4" src = {FB}/>
            <img className = "line5" src = {HB}/>
          </div>
      </div>
      <div className="flex justify-center items-center gap-[60px]">
  <div>
    <img src={rybashka} alt="" />
  </div>
  <div className="relative">
    <img src={tetka} alt="" className="w-[720px] h-[720px]" />
    <button className="absolute bottom-4 left-4 bg-black text-white py-2 px-4 rounded-lg">
      Shop Shirts
    </button>
  </div>
</div>
{/* продукты2 */}
<div class="grid grid-cols-2">
        <div class="bg-zinc-200 p-8 rounded-lg">
          <img src={man} alt="man"></img> 
          <a href="#explore" class="font-medium box-border h-42 w-32 p-4 border-4 rounded-lg border-black text-white bg-black">Shop Sweaters</a>
        </div>
        <div class="bg-orange-500	p-8 rounded-lg">
          <div class="">
            <h1 class="font-bold ...">“ First Light promises <br/>quality, timeless designs <br/>and with our mission it is <br/>truly a buy it for life <br/>purchase. “</h1>
          </div>
          <div class="">
            <p class="font-semibold ...">— Guera Latissa, Creative Director</p>
          </div>
        </div>
      </div>




        

        </div>
      
         </>
  );

}

export default App;
