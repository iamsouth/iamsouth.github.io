import{u as i,a as e,F as d,j as a}from"./components_AgeRatioChart.91c13277.js";import{r as n}from"./react.464ead42.js";import"./echarts-liquidfill.9f9b38a2.js";const f="_actualTotal_biv0a_1",h="_actualItem_biv0a_10",x="_expectTotal_biv0a_27",u="_actualEcharts_biv0a_40",t={actualTotal:f,actualItem:h,expectTotal:x,actualEcharts:u};function S(){const o={title:[{text:50 .toFixed(0)+"%",left:"49%",top:"35%",textAlign:"center",textStyle:{fontSize:"14",fontWeight:"normal",color:"#fff",align:"center",textBorderColor:"rgba(0, 0, 0, 0)",textShadowColor:"#000",textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:1}},{text:"预约量",left:"49%",top:"25%",textAlign:"center",textStyle:{fontSize:"15",fontWeight:"normal",color:"#ffffff",align:"center",textBorderColor:"rgba(0, 0, 0, 0)",textShadowColor:"#000",textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:1}}],grid:{top:"0",left:"0px",right:"0px",bottom:"0",containLabel:!0},polar:{radius:["75%","85%"],center:["50%","50%"]},angleAxis:{max:120,clockwise:!1,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1},startAngle:188},radiusAxis:{type:"category",show:!0,axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},series:[{type:"liquidFill",radius:"70%",z:2,center:["50%","50%"],data:[.4,.4,.4],itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#35FAB6"},{offset:1,color:"rgba(40, 209, 247,0.3)"}],global:!1}},outline:{borderDistance:0,itemStyle:{borderWidth:2,borderColor:"#31d8d5",shadowBlur:20,shadowColor:"#50c1a7"}},label:{show:!1},backgroundStyle:{borderWidth:1,color:{type:"radial",x:.5,y:.5,r:.5,colorStops:[{offset:0,color:"#0D2648"},{offset:.8,color:"#0D2648"},{offset:1,color:"#228E7D"}],global:!1}}},{type:"pie",radius:["80%","80%"],center:["50%","50%"],z:1,label:{show:!1},silent:!0,itemStyle:{borderWidth:2,borderType:[8,10],borderDashOffset:15,borderColor:"#31d8d5",color:"#11144e",borderCap:"round"},data:[100]},{type:"bar",data:[55],z:10,coordinateSystem:"polar",roundCap:!0,color:"#31d8d5"}]},[l]=n.useState("227903"),[r]=i(o,.5);return e(d,{children:[e("div",{className:t.actualTotal,children:[e("div",{className:t.expectTotal,children:["可预约总量",a("i",{children:"999999"}),"人"]}),e("div",{className:t.actualTotal,children:[l.split("").map((s,c)=>a("div",{className:t.actualItem,children:s},c)),a("div",{className:t.actualItem,children:"人"})]})]}),a("div",{ref:r,className:t.actualEcharts})]})}export{S as V};
