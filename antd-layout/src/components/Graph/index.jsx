import React from 'react'
import simpleHierarchy from '../../data/simple_hierarchical_data'
import * as d3 from 'd3'
import Node from '../Node'
import Link from '../Link'

export default function Graph() {
    const width = 1000,height = 600;
    const root = d3.hierarchy(simpleHierarchy);
    console.log(simpleHierarchy)
    console.log(root)
    // generate labels
    root.eachBefore(function(d) {
        if(!d.parent) {
            d.number = 1;
        } else {
            d.number = d.parent.number + "." + (d.parent.children.indexOf(d) + 1);
        }
    });

    const tree = d3.cluster()
            .size([width-120,height-120]); // top-down
    const treeData = tree(root);

    const nodes = treeData.descendants();
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
            .domain(d3.extent(nodes, n => n.depth));
    const links = treeData.links();
    function buildnodes(nodes){
        return nodes.map(node=>{
            return (<Node nodeColor={colorScale(node.depth)} {...node} ></Node>)
        })
    }
    function buildlinks(links){
        return links.map(link=>{
            return (<Link {...link} ></Link>)
        })
    }
    

    const drag = d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);

    d3.selectAll(".node").call(drag)
    //return svg.node();
    function dragstarted(event, d) {
    d3.select(this).raise().attr("stroke", "black").attr("cursor", "grabbing");
  }

  function dragged(event, d) {
    d3.select(this).attr("x", event.x).attr("y", event.y)
    .attr("transform",`translate(${event.x},${event.y})`);
}

  function dragended(event, d) {
    d3.select(this).attr("stroke", null).attr("cursor", "grab");
  }

  return (
    <g transform={`translate(${[60,60]})`}>
      {buildlinks(links)}

      {buildnodes(nodes)}
    </g>
  )
}
