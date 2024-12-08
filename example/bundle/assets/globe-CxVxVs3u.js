import{S as W,O as k,aB as I,k as M,j as b,an as _,i as S}from"./three.module-DpclfMcJ.js";import{d as z,r as n,f as O,u as T,g as B,j as t,c as U,C as q,T as V,a as v,G as N,h as X,b as Y}from"./CameraControls-B-lu7wDH.js";import{D as Z}from"./DRACOLoader-DJWREZh5.js";import{u as H,G as J,T as K}from"./leva.esm-CJKbaWS2.js";import{G as Q}from"./GoogleCloudAuthPlugin-CWIx3JJD.js";import{T as $}from"./TileCompressionPlugin-LPgvgQPx.js";import{U as ee}from"./UpdateOnChangePlugin-BFotcVNs.js";import{T as te}from"./TilesFadePlugin-GTJOynw2.js";import{c as re}from"./EnvironmentControls-C8X7oAWq.js";import{C as oe}from"./CameraTransitionManager-6Raba0ko.js";import"./GlobeControls-BUn2ddB7.js";import"./Ellipsoid-Cnb0UTwk.js";import"./TilesRenderer-B1NhZ5io.js";import"./I3DMLoader-BlebwdUJ.js";import"./readMagicBytes-Da5ueiou.js";import"./LoaderBase-CVSPpjX2.js";import"./GLTFLoader-DkJa3Jo5.js";import"./B3DMLoader-B2OeBq6-.js";import"./PNTSLoader-BMN5TswI.js";import"./CMPTLoader-nLXQ3OXQ.js";import"./GLTFExtensionLoader-TubLlshp.js";import"./EllipsoidRegion-D6hT1syi.js";import"./GLTFMeshFeaturesExtension-D473cUUw.js";import"./Pass-inUSP30K.js";const f=new M,C=new M,E=new M,y=new b,L=new b,w=new b,P=new _,R={};function ae(i,m,r,a){L.copy(r.matrixWorld).invert(),P.origin.copy(i.position),P.direction.set(0,0,-1).transformDirection(i.matrixWorld),P.applyMatrix4(L),re(P,m,E),E.applyMatrix4(r.matrixWorld),C.set(0,0,-1).transformDirection(i.matrixWorld);const l=E.sub(i.position).dot(C);return a.copy(i.position).addScaledVector(C,l),a}function ie(i){const{defaultScene:m,defaultCamera:r,overrideRenderLoop:a=!0,renderPriority:l=1}=i,c=n.useMemo(()=>new k,[]),[h,u,p,g]=z(s=>[s.set,s.size,s.gl,s.scene]);n.useEffect(()=>{h({camera:c})},[h,c]),n.useEffect(()=>{c.left=-u.width/2,c.right=u.width/2,c.top=u.height/2,c.bottom=-u.height/2,c.near=0,c.far=2e3,c.position.z=c.far/2,c.updateProjectionMatrix()},[c,u]),T(()=>{a&&p.render(m,r);const s=p.autoClear;p.autoClear=!1,p.clearDepth(),p.render(g,c),p.autoClear=s},l)}function G(){const i=n.useRef();return n.useEffect(()=>{const r=i.current.attributes.position;for(let a=0,l=r.count;a<l;a++)f.fromBufferAttribute(r,a),f.y>0&&(f.x=0,r.setXYZ(a,...f))}),t.jsx("boxGeometry",{ref:i})}function ne({northColor:i=15684432,southColor:m=16777215}){const[r,a]=n.useState(),l=n.useRef();return n.useEffect(()=>{a(l.current)},[]),t.jsxs("group",{scale:.5,ref:l,children:[t.jsx("ambientLight",{intensity:1}),t.jsx("directionalLight",{position:[0,2,3],intensity:3,target:r}),t.jsx("directionalLight",{position:[0,-2,-3],intensity:3,target:r}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{}),t.jsx("meshBasicMaterial",{color:0,opacity:.3,transparent:!0,side:I})]}),t.jsxs("group",{scale:[.5,1,.15],children:[t.jsxs("mesh",{"position-y":.5,children:[t.jsx(G,{}),t.jsx("meshStandardMaterial",{color:i})]}),t.jsxs("mesh",{"position-y":-.5,"rotation-x":Math.PI,children:[t.jsx(G,{}),t.jsx("meshStandardMaterial",{color:m})]})]})]})}function se({children:i,overrideRenderLoop:m,mode:r="3d",margin:a=10,scale:l=35,visible:c=!0,...h}){const[u,p,g]=z(e=>[e.camera,e.scene,e.size]),s=n.useContext(O),x=n.useRef(null),j=n.useMemo(()=>new W,[]);return T(()=>{if(s===null||x.current===null)return null;const{ellipsoid:e}=s,o=x.current;if(y.copy(s.group.matrixWorld).invert(),ae(u,e,s.group,E).applyMatrix4(y),e.getPositionToCartographic(E,R),e.getRotationMatrixFromAzElRoll(R.lat,R.lon,0,0,0,w).premultiply(s.group.matrixWorld),w.invert(),y.copy(u.matrixWorld).premultiply(w),r.toLowerCase()==="3d")o.quaternion.setFromRotationMatrix(y).invert();else if(f.set(0,1,0).transformDirection(y).normalize(),f.z=0,f.normalize(),f.length()===0)o.quaternion.identity();else{const d=C.set(0,1,0).angleTo(f);C.cross(f).normalize(),o.quaternion.setFromAxisAngle(C,-d)}}),i||(i=t.jsx(ne,{})),c?B(t.jsxs(t.Fragment,{children:[t.jsx("group",{ref:x,scale:l,position:[g.width/2-a-l/2,-g.height/2+a+l/2,0],...h,children:i}),t.jsx(ie,{defaultCamera:u,defaultScene:p,overrideRenderLoop:m,renderPriority:10})]}),j,{events:{priority:10}}):null}const ce=n.forwardRef(function(m,r){const{mode:a="perspective",onTransitionStart:l,onTransitionEnd:c,perspectiveCamera:h,orthographicCamera:u}=m,[p,g,s,x,j]=z(o=>[o.set,o.invalidate,o.controls,o.camera,o.size]),e=n.useMemo(()=>{const o=new oe;return o.autoSync=!1,x.isOrthographicCamera?(o.orthographicCamera.copy(x),o.mode="orthographic"):o.perspectiveCamera.copy(x),o.syncCameras(),o.mode=a,o},[]);n.useEffect(()=>{const{perspectiveCamera:o,orthographicCamera:d}=e,D=j.width/j.height;o.aspect=D,o.updateProjectionMatrix(),d.left=-d.top*D,d.right=-d.left,o.updateProjectionMatrix()},[e,j]),n.useEffect(()=>{r&&(r instanceof Function?r(e):r.current=e)},[e,r]),n.useEffect(()=>{const o=({camera:d})=>{p(()=>({camera:d}))};return p(()=>({camera:e.camera})),e.addEventListener("camera-change",o),()=>{e.removeEventListener("camera-change",o)}},[e,p]),n.useEffect(()=>{if(c)return e.addEventListener("transition-end",c),()=>e.removeEventListener("transition-end",c)},[c,e]),n.useEffect(()=>{if(l)return e.addEventListener("transition-start",l),()=>e.removeEventListener("transition-start",l)},[l,e]),n.useEffect(()=>{const o=e.perspectiveCamera,d=e.orthographicCamera;return e.perspectiveCamera=h||o,e.orthographicCamera=u||d,p(()=>({camera:e.camera})),()=>{e.perspectiveCamera=o,e.orthographicCamera=d}},[h,u,e,p]),n.useEffect(()=>{a!==e.mode&&(s&&s.isEnvironmentControls?(s.getPivotPoint(e.fixedPoint),e.syncCameras(),s.adjustCamera(e.perspectiveCamera),s.adjustCamera(e.orthographicCamera)):(e.fixedPoint.set(0,0,-1).transformDirection(e.camera.matrixWorld).multiplyScalar(50).add(e.camera.position),e.syncCameras()),e.toggle(),g())},[a,e,g,s]),T(()=>{e.update(),s&&(s.enabled=!e.animating),e.animating&&g()},-1)}),me=new Z().setDecoderPath("https://www.gstatic.com/draco/v1/decoders/"),A=new M,F=new M;function le(){const i=n.useRef();return T(({camera:m})=>{const r=i.current;A.setFromMatrixPosition(m.matrixWorld),r.position.set(0,0,0),r.updateMatrixWorld(),F.setFromMatrixPosition(r.matrixWorld);let a;if(m.isPerspectiveCamera){const l=A.distanceTo(F);a=Math.max(.05*l*Math.atan(m.fov*S.DEG2RAD),25)}else a=Math.max((m.top-m.bottom)*.05/m.zoom,25);r.scale.setScalar(a),r.position.z=a*.5}),t.jsxs("mesh",{ref:i,"rotation-x":-Math.PI/2,raycast:()=>{},children:[t.jsx("coneGeometry",{args:[.3]}),t.jsx("meshStandardMaterial",{color:15483002,emissive:15483002,emissiveIntensity:.25})]})}function pe(){const i={apiToken:{value:localStorage.getItem("google-token")||"put-your-api-key-here",onChange:a=>localStorage.setItem("google-token",a),transient:!1},ortho:!1},{apiToken:m,ortho:r}=H(i);return t.jsxs(q,{frameloop:"demand",camera:{position:[0,.5*1e7,1.5*1e7]},style:{width:"100%",height:"100%",position:"absolute",margin:0,left:0,top:0},flat:!0,children:[t.jsx("color",{attach:"background",args:[1118481]}),t.jsxs(V,{group:{rotation:[-Math.PI/2,0,0]},children:[t.jsx(v,{plugin:Q,args:{apiToken:m}}),t.jsx(v,{plugin:J,dracoLoader:me}),t.jsx(v,{plugin:$}),t.jsx(v,{plugin:ee}),t.jsx(v,{plugin:te}),t.jsx(N,{enableDamping:!0}),t.jsx(K,{}),t.jsx(X,{lat:34.2013*S.DEG2RAD,lon:-118.1714*S.DEG2RAD,height:350,children:t.jsx(le,{})}),";",t.jsx(se,{})]}),t.jsx(Y,{preset:"sunset",backgroundBlurriness:.9,environmentIntensity:1}),t.jsx(ce,{mode:r?"orthographic":"perspective"})]})}U(document.getElementById("root")).render(t.jsx(n.StrictMode,{children:t.jsx(pe,{})}));