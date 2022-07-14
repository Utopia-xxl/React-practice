import React from 'react'
import * as d3 from 'd3'
import './index.css'

export default function Link(d) {

    const verticalLink = d3.linkVertical()
            .source(()=>[d.source.x,d.source.y])
            .target(()=>[d.target.x,d.target.y]);
    
    const result = verticalLink();
    console.log(result)
    const link = <path d={result} 
    style={{"strokeWidth":(d.target.height + 1) * (d.target.height + 1),"opacity":d.target.depth *.25 * .6 + .4}}
    ></path>
  return (
    <>
    {link}
    </>
  )
}
