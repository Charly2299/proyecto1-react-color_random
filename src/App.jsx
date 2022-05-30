import { useState } from 'react'
import quote_info from './components/json/quote-info.json'
import './App.css'
import QuoteBox from './components/QuoteBox'




const arrayColor=[
  '#402275','#1C4BEB','#304185','#AA71AD','#91CF13',
  '#1D6338','#291377','#DED59A','#5EC16D','#685A19'
]





function App() {



  const numberRandom= array=>{

    return(Math.floor( Math.random()*array.length));
    }

    const getElementRandom= array =>{
      const i = numberRandom(array)
      return array[i]
      
      }

    
     const [quoteRandom,setUserRandom]= useState(getElementRandom(quote_info))
    const [colorRandom,setColorRandom]= useState(getElementRandom(arrayColor))
    
    

    
    const clickButton= ( )=>{
      setUserRandom(getElementRandom(quote_info))
      setColorRandom(getElementRandom(arrayColor))
    
    }


    const cardColor= {
      color: colorRandom
    }

    const backColor={
      backgroundColor: colorRandom
    }
  // const [count, setCount] = useState(0)

  return (
    <div style={backColor}  className="App">
   
<QuoteBox 
quote_info={quoteRandom}
colorRandom={colorRandom}
clickButton={clickButton}
cardColor={cardColor}
backColor={backColor}
/>
    </div>
  )
}

export default App
