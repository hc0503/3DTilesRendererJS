class n{constructor(){this.fetchOptions={},this.workingPath=""}load(t){return console.warn('Loader: "load" function has been deprecated in favor of "loadAsync".'),this.loadAsync(t)}loadAsync(t){return fetch(t,this.fetchOptions).then(r=>{if(!r.ok)throw new Error(`Failed to load file "${t}" with status ${r.status} : ${r.statusText}`);return r.arrayBuffer()}).then(r=>(this.workingPath===""&&(this.workingPath=this.workingPathForURL(t)),this.parse(r)))}resolveExternalURL(t){return/^[^\\/]/.test(t)&&!/^http/.test(t)?this.workingPath+"/"+t:t}workingPathForURL(t){const r=t.split(/[\\/]/g);return r.pop(),r.join("/")+"/"}parse(t){throw new Error("LoaderBase: Parse not implemented.")}}export{n as L};