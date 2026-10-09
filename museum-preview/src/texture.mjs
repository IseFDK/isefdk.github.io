// Small software texture mapper. Source pixels retain their aspect on the wall plane.
export function affineTriangle(source,target){
 const [[x0,y0],[x1,y1],[x2,y2]]=source,[[u0,v0],[u1,v1],[u2,v2]]=target;
 const det=(x1-x0)*(y2-y0)-(x2-x0)*(y1-y0);if(Math.abs(det)<1e-8)return null;
 const a=((u1-u0)*(y2-y0)-(u2-u0)*(y1-y0))/det,c=((u2-u0)*(x1-x0)-(u1-u0)*(x2-x0))/det;
 const b=((v1-v0)*(y2-y0)-(v2-v0)*(y1-y0))/det,d=((v2-v0)*(x1-x0)-(v1-v0)*(x2-x0))/det;
 return[a,b,c,d,u0-a*x0-c*y0,v0-b*x0-d*y0];
}
function triangle(ctx,image,source,target){const matrix=affineTriangle(source,target);if(!matrix)return;ctx.save();const area=(target[1][0]-target[0][0])*(target[2][1]-target[0][1])-(target[1][1]-target[0][1])*(target[2][0]-target[0][0]),sign=area>=0?1:-1;const normals=target.map((p,i)=>{const q=target[(i+1)%3],dx=q[0]-p[0],dy=q[1]-p[1],length=Math.hypot(dx,dy)||1;return[sign*dy/length,-sign*dx/length];}),clip=target.map((p,i)=>{const a=normals[(i+2)%3],b=normals[i],scale=.8/Math.max(.001,1+a[0]*b[0]+a[1]*b[1]);return[p[0]+(a[0]+b[0])*scale,p[1]+(a[1]+b[1])*scale];});ctx.beginPath();ctx.moveTo(...clip[0]);ctx.lineTo(...clip[1]);ctx.lineTo(...clip[2]);ctx.closePath();ctx.clip();ctx.transform(...matrix);ctx.drawImage(image,0,0);ctx.restore();}
export function paintWallTexture(canvas,image,project,width,height,quality='full'){
 if(!image.naturalWidth||!width||!height)return false;
 const ratio=Math.min(devicePixelRatio||1,1.4,1100/width,800/height);canvas.width=Math.max(1,Math.ceil(width*ratio));canvas.height=Math.max(1,Math.ceil(height*ratio));
 const ctx=canvas.getContext('2d',{alpha:true});if(!ctx)return false;ctx.scale(ratio,ratio);ctx.imageSmoothingEnabled=true;
 const steps=quality==='light'?6:14,sw=image.naturalWidth,sh=image.naturalHeight;
 for(let n=0;n<steps;n++){const a=n/steps,b=(n+1)/steps;const p0=project(a,0),p1=project(b,0),p2=project(b,1),p3=project(a,1);triangle(ctx,image,[[a*sw,0],[b*sw,0],[b*sw,sh]],[p0,p1,p2]);triangle(ctx,image,[[a*sw,0],[b*sw,sh],[a*sw,sh]],[p0,p2,p3]);}
 return true;
}
