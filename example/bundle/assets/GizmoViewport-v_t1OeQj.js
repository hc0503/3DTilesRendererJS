import{d as E,r as e,u as S,_ as C,g as Q}from"./CameraControls-B-lu7wDH.js";import{aE as X,x as O,$ as Y,aF as B,a0 as V,S as Z,k as P,at as J,Q as A,j as K,aG as N}from"./three.module-DpclfMcJ.js";function U(n,d,u){const o=E(l=>l.size),s=E(l=>l.viewport),f=typeof n=="number"?n:o.width*s.dpr,i=o.height*s.dpr,r=(typeof n=="number"?u:n)||{},{samples:c=0,depth:g,...p}=r,m=e.useMemo(()=>{const l=new X(f,i,{minFilter:O,magFilter:O,type:Y,...p});return g&&(l.depthTexture=new B(f,i,V)),l.samples=c,l},[]);return e.useLayoutEffect(()=>{m.setSize(f,i),c&&(m.samples=c)},[c,m,f,i]),e.useEffect(()=>()=>m.dispose(),[]),m}const $=n=>typeof n=="function",ee=e.forwardRef(({envMap:n,resolution:d=256,frames:u=1/0,children:o,makeDefault:s,...f},i)=>{const r=E(({set:t})=>t),c=E(({camera:t})=>t),g=E(({size:t})=>t),p=e.useRef(null);e.useImperativeHandle(i,()=>p.current,[]);const m=e.useRef(null),l=U(d);e.useLayoutEffect(()=>{f.manual||p.current.updateProjectionMatrix()},[g,f]),e.useLayoutEffect(()=>{p.current.updateProjectionMatrix()}),e.useLayoutEffect(()=>{if(s){const t=c;return r(()=>({camera:p.current})),()=>r(()=>({camera:t}))}},[p,s,r]);let h=0,y=null;const a=$(o);return S(t=>{a&&(u===1/0||h<u)&&(m.current.visible=!1,t.gl.setRenderTarget(l),y=t.scene.background,n&&(t.scene.background=n),t.gl.render(t.scene,p.current),t.scene.background=y,t.gl.setRenderTarget(null),m.current.visible=!0,h++)}),e.createElement(e.Fragment,null,e.createElement("orthographicCamera",C({left:g.width/-2,right:g.width/2,top:g.height/2,bottom:g.height/-2,ref:p},f),!a&&o),e.createElement("group",{ref:m},a&&o(l.texture)))});function te({defaultScene:n,defaultCamera:d,renderPriority:u=1}){const{gl:o,scene:s,camera:f}=E();let i;return S(()=>{i=o.autoClear,u===1&&(o.autoClear=!0,o.render(n,d)),o.autoClear=!1,o.clearDepth(),o.render(s,f),o.autoClear=i},u),e.createElement("group",{onPointerOver:()=>null})}function ne({children:n,renderPriority:d=1}){const{scene:u,camera:o}=E(),[s]=e.useState(()=>new Z);return e.createElement(e.Fragment,null,Q(e.createElement(e.Fragment,null,n,e.createElement(te,{defaultScene:u,defaultCamera:o,renderPriority:d})),s,{events:{priority:d+1}}))}const q=e.createContext({}),re=()=>e.useContext(q),oe=2*Math.PI,H=new J,I=new K,[v,R]=[new A,new A],G=new P,L=new P,ae=n=>"minPolarAngle"in n,k=n=>"getTarget"in n,ie=({alignment:n="bottom-right",margin:d=[80,80],renderPriority:u=1,onUpdate:o,onTarget:s,children:f})=>{const i=E(x=>x.size),r=E(x=>x.camera),c=E(x=>x.controls),g=E(x=>x.invalidate),p=e.useRef(null),m=e.useRef(null),l=e.useRef(!1),h=e.useRef(0),y=e.useRef(new P(0,0,0)),a=e.useRef(new P(0,0,0));e.useEffect(()=>{a.current.copy(r.up)},[r]);const t=e.useCallback(x=>{l.current=!0,(c||s)&&(y.current=(s==null?void 0:s())||(k(c)?c.getTarget(y.current):c==null?void 0:c.target)),h.current=r.position.distanceTo(G),v.copy(r.quaternion),L.copy(x).multiplyScalar(h.current).add(G),H.lookAt(L),R.copy(H.quaternion),g()},[c,r,s,g]);S((x,b)=>{if(m.current&&p.current){var z;if(l.current)if(v.angleTo(R)<.01)l.current=!1,ae(c)&&r.up.copy(a.current);else{const D=b*oe;v.rotateTowards(R,D),r.position.set(0,0,1).applyQuaternion(v).multiplyScalar(h.current).add(y.current),r.up.set(0,1,0).applyQuaternion(v).normalize(),r.quaternion.copy(v),k(c)&&c.setPosition(r.position.x,r.position.y,r.position.z),o?o():c&&c.update(b),g()}I.copy(r.matrix).invert(),(z=p.current)==null||z.quaternion.setFromRotationMatrix(I)}});const j=e.useMemo(()=>({tweenCamera:t}),[t]),[F,T]=d,W=n.endsWith("-center")?0:n.endsWith("-left")?-i.width/2+F:i.width/2-F,_=n.startsWith("center-")?0:n.startsWith("top-")?i.height/2-T:-i.height/2+T;return e.createElement(ne,{renderPriority:u},e.createElement(q.Provider,{value:j},e.createElement(ee,{makeDefault:!0,ref:m,position:[0,0,200]}),e.createElement("group",{ref:p,position:[W,_,0]},f)))};function M({scale:n=[.8,.05,.05],color:d,rotation:u}){return e.createElement("group",{rotation:u},e.createElement("mesh",{position:[.4,0,0]},e.createElement("boxGeometry",{args:n}),e.createElement("meshBasicMaterial",{color:d,toneMapped:!1})))}function w({onClick:n,font:d,disabled:u,arcStyle:o,label:s,labelColor:f,axisHeadScale:i=1,...r}){const c=E(a=>a.gl),g=e.useMemo(()=>{const a=document.createElement("canvas");a.width=64,a.height=64;const t=a.getContext("2d");return t.beginPath(),t.arc(32,32,16,0,2*Math.PI),t.closePath(),t.fillStyle=o,t.fill(),s&&(t.font=d,t.textAlign="center",t.fillStyle=f,t.fillText(s,32,41)),new N(a)},[o,s,f,d]),[p,m]=e.useState(!1),l=(s?1:.75)*(p?1.2:1)*i,h=a=>{a.stopPropagation(),m(!0)},y=a=>{a.stopPropagation(),m(!1)};return e.createElement("sprite",C({scale:l,onPointerOver:u?void 0:h,onPointerOut:u?void 0:n||y},r),e.createElement("spriteMaterial",{map:g,"map-anisotropy":c.capabilities.getMaxAnisotropy()||1,alphaTest:.3,opacity:s?1:.75,toneMapped:!1}))}const le=({hideNegativeAxes:n,hideAxisHeads:d,disabled:u,font:o="18px Inter var, Arial, sans-serif",axisColors:s=["#ff2060","#20df80","#2080ff"],axisHeadScale:f=1,axisScale:i,labels:r=["X","Y","Z"],labelColor:c="#000",onClick:g,...p})=>{const[m,l,h]=s,{tweenCamera:y}=re(),a={font:o,disabled:u,labelColor:c,onClick:g,axisHeadScale:f,onPointerDown:u?void 0:t=>{y(t.object.position),t.stopPropagation()}};return e.createElement("group",C({scale:40},p),e.createElement(M,{color:m,rotation:[0,0,0],scale:i}),e.createElement(M,{color:l,rotation:[0,0,Math.PI/2],scale:i}),e.createElement(M,{color:h,rotation:[0,-Math.PI/2,0],scale:i}),!d&&e.createElement(e.Fragment,null,e.createElement(w,C({arcStyle:m,position:[1,0,0],label:r[0]},a)),e.createElement(w,C({arcStyle:l,position:[0,1,0],label:r[1]},a)),e.createElement(w,C({arcStyle:h,position:[0,0,1],label:r[2]},a)),!n&&e.createElement(e.Fragment,null,e.createElement(w,C({arcStyle:m,position:[-1,0,0]},a)),e.createElement(w,C({arcStyle:l,position:[0,-1,0]},a)),e.createElement(w,C({arcStyle:h,position:[0,0,-1]},a)))))};export{ie as G,le as a,U as u};
