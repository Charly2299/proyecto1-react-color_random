

import React from 'react'

const QuoteBox = ({quote_info,colorRandom,clickButton,cardColor,backColor}) => {




  return (
    <article className='quotebox-container'>


<p  style={cardColor}  className='quotebox-txt'>
<span style={cardColor} > " </span>
   {quote_info.quote}</p>

<p  style={cardColor} className='quotebox-author'>{quote_info.author}</p>

<div className='btn-container'>

<button style={backColor}  onClick={clickButton} className='quotebox-btn'>&#62;</button>
</div>
    </article>
  )
}

export default QuoteBox