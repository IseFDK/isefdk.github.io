import{measure}from'./profile.mjs';
// Small software texture mapper. Source pixels retain their aspect on the wall plane.
export function affineTriangle(source,target){
 const [[x0,y0],[x1,y1],[x2,y2]]=source,[[u0,v0],[u1,v1],[u2,v2]]=target;
 const det=(x1-x0)*(y2-y0)-(x2-x0)*(y1-y0);if(Math.abs(det)<1e-8)return null;
 const a=((u1-u0)*(y2-y0)-(u2-u0)*(y1-y0))/det,c=((u2-u0)*(x1-x0)-(u1-u0)*(x2-x0))/det;
 const b=((v1-v0)*(y2-y0)-(v2-v0)*(y1-y0))/det,d=((v2-v0)*(x1-x0)-(v1-v0)*(x2-x0))/det;
 return[a,b,c,d,u0-a*x0-c*y0,v0-b*x0-d*y0];
}
// Exact projective mapping: the browser composites one decoded image plane.
// Unlike triangle clipping, it never reallocates or repaints a canvas on scroll.
export function projectiveMatrix(points,width=1,height=1){
 const [[x0,y0],[x1,y1],[x2,y2],[x3,y3]]=points;
 const dx1=x1-x2,dx2=x3-x2,dx3=x0-x1+x2-x3,dy1=y1-y2,dy2=y3-y2,dy3=y0-y1+y2-y3;
 const det=dx1*dy2-dx2*dy1;let g=0,h=0;
 if(Math.abs(dx3)+Math.abs(dy3)>1e-8){if(Math.abs(det)<1e-8)return null;g=(dx3*dy2-dx2*dy3)/det;h=(dx1*dy3-dx3*dy1)/det;}
 return[(x1-x0+g*x1)/width,(y1-y0+g*y1)/width,0,g/width,(x3-x0+h*x3)/height,(y3-y0+h*y3)/height,0,h/height,0,0,1,0,x0,y0,0,1];
}
export function paintWallTexture(canvas,image,project,width,height){return measure('texture',()=>{
 if(!image.naturalWidth||!width||!height)return false;
 const matrix=projectiveMatrix([project(0,0),project(1,0),project(1,1),project(0,1)],image.naturalWidth,image.naturalHeight);if(!matrix)return false;
 Object.assign(image.style,{position:'absolute',left:'0',top:'0',width:image.naturalWidth+'px',height:image.naturalHeight+'px',transformOrigin:'0 0',transform:'matrix3d('+matrix.join(',')+')',clipPath:'none'});
 return true;
 });}
