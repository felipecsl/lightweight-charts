var _=Object.defineProperty;var B=(o,t,n)=>t in o?_(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n;var f=(o,t,n)=>(B(o,typeof t!="symbol"?t+"":t,n),n);import{P as w,T as b}from"./lightweight-charts.production-32c453a4.js";import{a as v}from"./positions-0a54307c.js";import{m as M}from"./sample-data-c7d89ab8.js";const S={...w,colors:["#2962FF","#E1575A","#F28E2C","rgb(164, 89, 209)","rgb(27, 156, 133)"]},W=4,C=1;function d(o,t){return Math.ceil(o*t)<=C?0:Math.max(1,Math.floor(t))}function R(o,t,n){return Math.round(o*t)-(n??d(o,t))}function x(o,t){const n=d(o,t),a=R(o,t,n),l=a%2===0,c=(a-(l?0:1))/2;return{spacing:n,shiftLeft:l,columnHalfWidthBitmap:c,horizontalPixelRatio:t}}function L(o,t,n){const a=o*t.horizontalPixelRatio,l=Math.round(a),c={left:l-t.columnHalfWidthBitmap,right:l+t.columnHalfWidthBitmap-(t.shiftLeft?1:0),shiftLeft:l>a},s=t.spacing+1;return n&&c.left-n.right!==s&&(n.shiftLeft?n.right=c.left-s:c.left=n.right+s),c}function k(o,t,n,a,l){const c=x(t,n);let s;for(let i=a;i<Math.min(l,o.length);i++)o[i].column=L(o[i].x,c,s),s=o[i].column;const e=o.reduce((i,r,u)=>{if(!r.column||u<a||u>l)return i;r.column.right<r.column.left&&(r.column.right=r.column.left);const h=r.column.right-r.column.left+1;return Math.min(i,h)},Math.ceil(t*n));c.spacing>0&&e<W&&o.forEach((i,r)=>!i.column||r<a||r>l?void 0:i.column.right-i.column.left+1<=e?i:(i.column.shiftLeft?i.column.right-=1:i.column.left+=1,i.column))}function E(o){let t=0;return o.map(n=>{const a=t+n;return t=a,a})}class y{constructor(){f(this,"_data",null);f(this,"_options",null)}draw(t,n){t.useBitmapCoordinateSpace(a=>this._drawImpl(a,n))}update(t,n){this._data=t,this._options=n}_drawImpl(t,n){if(this._data===null||this._data.bars.length===0||this._data.visibleRange===null||this._options===null)return;const a=this._options,l=this._data.bars.map(s=>({x:s.x,ys:E(s.originalData.values).map(e=>n(e)??0)}));k(l,this._data.barSpacing,t.horizontalPixelRatio,this._data.visibleRange.from,this._data.visibleRange.to);const c=n(0)??0;for(let s=this._data.visibleRange.from;s<this._data.visibleRange.to;s++){const e=l[s],i=e.column;if(!i)return;let r=c;const u=Math.min(Math.max(t.horizontalPixelRatio,i.right-i.left),this._data.barSpacing*t.horizontalPixelRatio);e.ys.forEach((h,p)=>{const g=a.colors[p%a.colors.length],m=v(r,h,t.verticalPixelRatio);t.context.fillStyle=g,t.context.fillRect(i.left,m.position,u,m.length),r=h})}}}class F{constructor(){f(this,"_renderer");this._renderer=new y}priceValueBuilder(t){return[0,t.values.reduce((n,a)=>n+a,0)]}isWhitespace(t){var n;return!((n=t.values)!=null&&n.length)}renderer(){return this._renderer}update(t,n){this._renderer.update(t,n)}defaultOptions(){return S}}const H=window.chart=b("chart",{autoSize:!0,timeScale:{minBarSpacing:3}}),P=new F,V=H.addCustomSeries(P,{color:"black"}),A=M(3,200,20);V.setData(A);
