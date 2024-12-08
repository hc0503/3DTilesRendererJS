import{W as _,S as T,a as P,O as R,G as S}from"./three.module-DpclfMcJ.js";import{g as D}from"./lil-gui.module.min-Bc0DeA9g.js";import{C as F}from"./CameraTransitionManager-6Raba0ko.js";import{E as y}from"./EnvironmentControls-C8X7oAWq.js";import{T as p}from"./TilesRenderer-B1NhZ5io.js";import{T as g}from"./TilesFadePlugin-GTJOynw2.js";import"./I3DMLoader-BlebwdUJ.js";import"./readMagicBytes-Da5ueiou.js";import"./LoaderBase-CVSPpjX2.js";import"./GLTFLoader-DkJa3Jo5.js";import"./Ellipsoid-Cnb0UTwk.js";import"./B3DMLoader-B2OeBq6-.js";import"./PNTSLoader-BMN5TswI.js";import"./CMPTLoader-nLXQ3OXQ.js";import"./GLTFExtensionLoader-TubLlshp.js";import"./EllipsoidRegion-D6hT1syi.js";let d,l,s,e,r,c,t;const a={reinstantiateTiles:w,fadeRootTiles:!1,useFade:!0,errorTarget:12,fadeDuration:.5,renderScale:1,fadingGroundTiles:"0 tiles",orthographic:!1,transitionDuration:.25};v();h();function v(){s=new _({antialias:!0}),s.setPixelRatio(window.devicePixelRatio),s.setSize(window.innerWidth,window.innerHeight),s.setClearColor(14208704),document.body.appendChild(s.domElement),l=new T,t=new F(new P(60,window.innerWidth/window.innerHeight,.25,4e3),new R(-1,1,1,-1,0,4e3)),t.camera.position.set(20,10,20),t.camera.lookAt(0,0,0),t.autoSync=!1,t.addEventListener("camera-change",({camera:m,prevCamera:u})=>{r.deleteCamera(u),e.deleteCamera(u),r.setCamera(m),e.setCamera(m),d.setCamera(m)}),d=new y(l,t.camera,s.domElement),d.minZoomDistance=2,d.cameraRadius=1,c=new S,c.rotation.set(Math.PI/2,0,0),l.add(c),w(),f(),window.addEventListener("resize",f,!1);const o=new D,n=o.addFolder("camera");n.add(a,"orthographic").onChange(m=>{t.fixedPoint.copy(d.pivotPoint),t.syncCameras(),d.adjustCamera(t.perspectiveCamera),d.adjustCamera(t.orthographicCamera),t.toggle()}),n.add(a,"transitionDuration",0,1.5);const i=o.addFolder("fade");i.add(a,"useFade"),i.add(a,"fadeRootTiles"),i.add(a,"errorTarget",0,1e3),i.add(a,"fadeDuration",0,5),i.add(a,"renderScale",.1,1,.05).onChange(m=>s.setPixelRatio(m*window.devicePixelRatio));const C=i.add(a,"fadingGroundTiles").listen().disable();C.domElement.style.opacity=1,o.add(a,"reinstantiateTiles"),o.open()}function w(){e&&(e.dispose(),e.group.removeFromParent(),r.dispose(),r.group.removeFromParent()),e=new p("https://raw.githubusercontent.com/NASA-AMMOS/3DTilesSampleData/master/msl-dingo-gap/0528_0260184_to_s64o256_colorize/0528_0260184_to_s64o256_colorize/0528_0260184_to_s64o256_colorize_tileset.json"),e.fetchOptions.mode="cors",e.lruCache.minSize=900,e.lruCache.maxSize=1300,e.errorTarget=12,e.registerPlugin(new g),e.setCamera(t.camera),r=new p("https://raw.githubusercontent.com/NASA-AMMOS/3DTilesSampleData/master/msl-dingo-gap/0528_0260184_to_s64o256_colorize/0528_0260184_to_s64o256_sky/0528_0260184_to_s64o256_sky_tileset.json"),r.fetchOptions.mode="cors",r.lruCache=e.lruCache,r.registerPlugin(new g),r.setCamera(t.camera),c.add(e.group,r.group)}function f(){const{perspectiveCamera:o,orthographicCamera:n}=t,i=window.innerWidth/window.innerHeight;n.bottom=-40,n.top=40,n.left=-40*i,n.right=40*i,n.updateProjectionMatrix(),o.aspect=i,o.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)}function h(){requestAnimationFrame(h),d.enabled=!t.animating,d.update(),t.duration=1e3*a.transitionDuration,t.update();const o=t.camera;o.updateMatrixWorld();const n=e.getPluginByName("FADE_TILES_PLUGIN");n.fadeRootTiles=a.fadeRootTiles,n.fadeDuration=a.useFade?a.fadeDuration*1e3:0,e.errorTarget=a.errorTarget,e.setCamera(o),e.setResolutionFromRenderer(o,s),e.update();const i=r.getPluginByName("FADE_TILES_PLUGIN");i.fadeRootTiles=a.fadeRootTiles,i.fadeDuration=a.useFade?a.fadeDuration*1e3:0,r.setCamera(o),r.setResolutionFromRenderer(o,s),r.update(),s.render(l,o),a.fadingGroundTiles=n.fadingTiles+" tiles"}
