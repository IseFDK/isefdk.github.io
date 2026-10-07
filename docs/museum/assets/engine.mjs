export const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
export function parseMuseumHash(hash){const [route,selected]=String(hash||'').replace(/^#/,'').split('/');const wing=['entrance','rotunda','gallery','interactive'].includes(route)?route:'entrance';return{wing,selected:(wing==='gallery'&&selected==='last-signal')||(wing==='interactive'&&selected==='light-study')?selected:null};}
export function routeHash({wing,selected}){return'#'+wing+(selected?'/'+selected:'');}
export function nearestItem(items,p){return items.reduce((best,item)=>!best||Math.abs(item.depth-p)<Math.abs(best.depth-p)?item:best,null);}
export function positionFromScroll(scroll,height,length){return clamp(scroll/Math.max(1,height),0,1)*length;}
export function scrollFromPosition(p,height,length){return clamp(p,0,length)/length*Math.max(1,height);}
export function cameraPose({position,selectedItem,reduced,mobile,quality}){const scale=mobile?(selectedItem?.68:.44):1;const travel=reduced&&!selectedItem?Math.round(position/650)*650:position;return{position:selectedItem?selectedItem.depth:travel,yaw:selectedItem?(selectedItem.side===-1?-90:selectedItem.side===1?90:0):0,offset:selectedItem?(mobile?0:-220):0,approach:selectedItem?(selectedItem.side===0?(mobile?130:350):180):0,scale,animate:!reduced&&quality==='full'};}
export function worldTransform(pose){return`translateX(${pose.offset}px) translateZ(${pose.approach}px) scale3d(${pose.scale},${pose.scale},${pose.scale}) rotateY(${pose.yaw}deg) translateZ(${pose.position}px)`;}
export function magneticTarget(items,p,speed){if(Math.abs(speed)>.16)return null;const item=nearestItem(items,p+480);if(!item)return null;const target=item.depth-480;return Math.abs(target-p)<90?target:null;}
