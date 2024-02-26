var w=Object.defineProperty;var I=(a,t,e)=>t in a?w(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var r=(a,t,e)=>(I(a,typeof t!="symbol"?t+"":t,e),e);import{T as x}from"./lightweight-charts.production-32c453a4.js";import{g as T}from"./sample-data-c7d89ab8.js";import{P as g}from"./plugin-base-a12dadc8.js";function S(a){return JSON.parse(JSON.stringify(a))}class p{constructor(t){r(this,"numbers");r(this,"cache");this.numbers=t,this.cache=new Map}findClosestIndex(t,e){const s=`${t}:${e}`;if(this.cache.has(s))return this.cache.get(s);const i=this._performSearch(t,e);return this.cache.set(s,i),i}_performSearch(t,e){let s=0,i=this.numbers.length-1;if(t<=this.numbers[0].time)return 0;if(t>=this.numbers[i].time)return i;for(;s<=i;){const n=Math.floor((s+i)/2),o=this.numbers[n].time;if(o===t)return n;o>t?i=n-1:s=n+1}return e==="left"?s:i}}class m{constructor(t,e=10){r(this,"_arr");r(this,"_chunkSize");r(this,"_cache");this._arr=t,this._chunkSize=e,this._cache=new Map}getMinMax(t,e){const s=`${t}:${e}`;if(s in this._cache)return this._cache.get(s);const i={lower:1/0,upper:-1/0},n=Math.floor(t/this._chunkSize),o=Math.floor(e/this._chunkSize);for(let h=n;h<=o;h++){const c=h*this._chunkSize,l=Math.min((h+1)*this._chunkSize-1,this._arr.length-1),d=`${c}:${l}`;if(d in this._cache.keys()){const u=this._cache.get(s);this._check(u,i)}else{const u={lower:1/0,upper:-1/0};for(let _=c;_<=l;_++)this._check(this._arr[_],u);this._cache.set(d,u),this._check(u,i)}}return this._cache.set(s,i),i}_check(t,e){t.lower<e.lower&&(e.lower=t.lower),t.upper>e.upper&&(e.upper=t.upper)}}class k{constructor(t){r(this,"_viewData");this._viewData=t}draw(){}drawBackground(t){const e=this._viewData.data;t.useBitmapCoordinateSpace(s=>{const i=s.context;i.scale(s.horizontalPixelRatio,s.verticalPixelRatio),i.strokeStyle=this._viewData.options.lineColor,i.lineWidth=this._viewData.options.lineWidth,i.beginPath();const n=new Path2D,o=new Path2D;n.moveTo(e[0].x,e[0].upper),o.moveTo(e[0].x,e[0].upper);for(const c of e)n.lineTo(c.x,c.upper),o.lineTo(c.x,c.upper);const h=e.length-1;n.lineTo(e[h].x,e[h].lower),o.moveTo(e[h].x,e[h].lower);for(let c=e.length-2;c>=0;c--)n.lineTo(e[c].x,e[c].lower),o.lineTo(e[c].x,e[c].lower);n.lineTo(e[0].x,e[0].upper),n.closePath(),i.stroke(o),i.fillStyle=this._viewData.options.fillColor,i.fill(n)})}}class V{constructor(t){r(this,"_source");r(this,"_data");this._source=t,this._data={data:[],options:this._source._options}}update(){const t=this._source.series,e=this._source.chart.timeScale();this._data.data=this._source._bandsData.map(s=>({x:e.timeToCoordinate(s.time)??-100,upper:t.priceToCoordinate(s.upper)??-100,lower:t.priceToCoordinate(s.lower)??-100}))}renderer(){return new k(this._data)}}function D(a){if(a.close)return a.close;if(a.value)return a.value}const b={lineColor:"rgb(25, 200, 100)",fillColor:"rgba(25, 200, 100, 0.25)",lineWidth:1};class C extends g{constructor(e={}){super();r(this,"_paneViews");r(this,"_seriesData",[]);r(this,"_bandsData",[]);r(this,"_options");r(this,"_timeIndices");r(this,"_upperLower");r(this,"_minValue",Number.POSITIVE_INFINITY);r(this,"_maxValue",Number.NEGATIVE_INFINITY);this._options={...b,...e},this._paneViews=[new V(this)],this._timeIndices=new p([]),this._upperLower=new m([])}updateAllViews(){this._paneViews.forEach(e=>e.update())}paneViews(){return this._paneViews}attached(e){super.attached(e),this.dataUpdated("full")}dataUpdated(e){this._seriesData=S(this.series.data()),this.calculateBands(),e==="full"&&(this._timeIndices=new p(this._seriesData))}calculateBands(){const e=new Array(this._seriesData.length);let s=0;this._minValue=Number.POSITIVE_INFINITY,this._maxValue=Number.NEGATIVE_INFINITY,this._seriesData.forEach(i=>{const n=D(i);if(n===void 0)return;const o=n*1.1,h=n*.9;o>this._maxValue&&(this._maxValue=o),h<this._minValue&&(this._minValue=h),e[s]={upper:o,lower:h,time:i.time},s+=1}),e.length=s,this._bandsData=e,this._upperLower=new m(this._bandsData,4)}autoscaleInfo(e,s){const i=this.chart.timeScale(),n=i.coordinateToTime(i.logicalToCoordinate(e)??0)??0,o=i.coordinateToTime(i.logicalToCoordinate(s)??5e9)??5e9,h=this._timeIndices.findClosestIndex(n,"left"),c=this._timeIndices.findClosestIndex(o,"right"),l=this._upperLower.getMinMax(h,c);return{priceRange:{minValue:l.lower,maxValue:l.upper}}}}const N=window.chart=x("chart",{autoSize:!0}),f=N.addLineSeries(),v=T();f.setData(v);const y=new C;f.attachPrimitive(y);
