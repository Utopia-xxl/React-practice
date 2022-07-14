import React from 'react'

export default function Node(Props) {
  //const Props = {depth: 0,height: 4,number: 1,x:100,y:100}
  const node = <circle r={(Props.height + 1) * 10 } style={{'fill':Props.nodeColor}}></circle>
  const label = <text transform={Props.height === 0 ? `rotate(-90) translate(-15,5)` : "translate(0,5)"} 
  style={{"fontSize":14 + (Props.height*Props.height),"textAnchor":Props.height !== 0 ? "middle" : "end","fill":Props.height !== 0 ? 'white' : 'black'}}>{Props.number}</text>
  return (
    <g className='node' transform={`translate(${[Props.x, Props.y]})`} x={Props.x} y={Props.y}>
        {node}
        {label} 
    </g>
  )
}
