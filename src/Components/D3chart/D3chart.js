import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import './D3chart.scss'


const D3chart = () => {
    const [data, setData]=useState([200,250,60,150,100,175]);
    
    // Handle random Data 
    const handleRandom = () =>{
        const ranData = [];
        for (let i=0;i<6;i++){
                // for generating random value 
            var randomNumber=Math.floor(Math.random()*100)+100;
            console.log(randomNumber);
            ranData.push(randomNumber);
        }
        console.log(ranData);
        setData(ranData);
    }
   
    


    const svgRef = useRef();

    useEffect(()=>{
        //setting up svg container
        const w = 400;
        const h = 300;
        const svg = d3.select(svgRef.current)
            .attr('width',w)
            .attr('height',h)
            .style('overflow','visible')
            .style('margin-top','75px');

        // seting the scaling 
        const xScale = d3.scaleBand()
            .domain(data.map((val,i)=> i))
            .range([0,w])
            .padding(0.5);

        const yScale = d3.scaleLinear()
            .domain([0,h])
            .range([h,0])
               
        // setting the axess 
        const xAxis = d3.axisBottom(xScale)
            .ticks(data.length);
        const yAxis = d3.axisLeft(yScale)
            .ticks(5);
        svg.append('g')
            .call(xAxis)
            .attr('transform',`translate(0,${h})`);
        svg.append('g')
            .call(yAxis)    
        // setting up the svg data 
        svg.selectAll('.bar')
            .data(data)
            .join('rect')
                .attr('x',(v,i)=>xScale(i))
                .attr('y',yScale)
                .attr('width',xScale.bandwidth())
                .attr('height',val=> h-yScale(val));



    },[data]);

    return (
        <div>
            <h2 className='bar-title'>This is a Bar chart using D3.js</h2>
            <svg className='chatClass' onClick={handleRandom} ref={svgRef}></svg>
            <h4 className='bar-bottom'> Please Click on the chart to see the change</h4>
        </div>
    );
};

export default D3chart;