(function(i,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("@auth0/auth0-spa-js"),require("graphql-request")):typeof define=="function"&&define.amd?define(["exports","@auth0/auth0-spa-js","graphql-request"],t):(i=typeof globalThis<"u"?globalThis:i||self,t((i["@lookingglass/blocks"]=i["@lookingglass/blocks"]||{},i["@lookingglass/blocks"].js={}),i.auth0SpaJs,i["graphql-request"]))})(this,function(i,t,o){"use strict";var E=Object.defineProperty;var M=(i,t,o)=>t in i?E(i,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[t]=o;var v=(i,t,o)=>(M(i,typeof t!="symbol"?t+"":t,o),o);const I=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(o),k="blocksToken";let d,N;const r=()=>document.querySelector("[data-login]"),c=()=>document.querySelector("[data-logout]"),g=()=>document.querySelectorAll("[data-logged-in]"),S=()=>document.querySelectorAll("[data-logged-out]");function D(){var e,n;(e=r())==null||e.addEventListener("click",async()=>{console.log("Logging in"),await(d==null?void 0:d.loginWithRedirect({authorizationParams:{redirect_uri:N}}))}),(n=c())==null||n.addEventListener("click",async()=>{console.log("Logging out"),sessionStorage.removeItem(k),y()})}async function A(){const e=window.location.search;if(e.includes("code=")&&e.includes("state=")&&d){try{await d.handleRedirectCallback()}catch(a){console.error(a)}if(await d.isAuthenticated()){const a=await d.getTokenSilently();sessionStorage.setItem(k,a),window.history.replaceState({},document.title,window.location.pathname)}}}async function y(){s.isAuthenticated()?(r().style.display="none",c().style.display="",g().forEach(e=>{e.style.display=""}),S().forEach(e=>{e.style.display="none"})):(r().style.display="",c().style.display="none",g().forEach(e=>{e.style.display="none"}),S().forEach(e=>{e.style.display=""}))}class s{static async init(n){D(),N=n.redirectUri,d=new t.Auth0Client({domain:n.domain||"blocks.us.auth0.com",clientId:n.clientId,authorizationParams:{audience:"https://blocks.glass"}}),await A(),await y()}static isAuthenticated(){return s.getJWT()!=""}static getJWT(){return sessionStorage.getItem(k)||""}}i.HologramType=void 0,function(e){e.Quilt="QUILT",e.Rgbd="RGBD"}(i.HologramType||(i.HologramType={})),i.PlaylistPrivacy=void 0,function(e){e.OnlyMe="ONLY_ME",e.Password="PASSWORD",e.Public="PUBLIC",e.Unlisted="UNLISTED"}(i.PlaylistPrivacy||(i.PlaylistPrivacy={})),i.PlaylistPrivacyFilter=void 0,function(e){e.All="ALL",e.OnlyMe="ONLY_ME",e.Password="PASSWORD",e.Public="PUBLIC",e.Unlisted="UNLISTED"}(i.PlaylistPrivacyFilter||(i.PlaylistPrivacyFilter={})),i.PrivacyType=void 0,function(e){e.OnlyMe="ONLY_ME",e.Public="PUBLIC",e.Unlisted="UNLISTED"}(i.PrivacyType||(i.PrivacyType={})),i.Role=void 0,function(e){e.Admin="ADMIN",e.User="USER"}(i.Role||(i.Role={}));const h={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"FindHologram"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hologramFindById"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"aspectRatio"}},{kind:"Field",name:{kind:"Name",value:"quiltCols"}},{kind:"Field",name:{kind:"Name",value:"quiltRows"}},{kind:"Field",name:{kind:"Name",value:"quiltTileCount"}},{kind:"Field",name:{kind:"Name",value:"sourceImages"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"fileSize"}}]}}]}}]}}]},F={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"FindPlaylist"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"lookup"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"first"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"50"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playlist"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}},{kind:"Argument",name:{kind:"Name",value:"lookup"},value:{kind:"Variable",name:{kind:"Name",value:"lookup"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"Field",name:{kind:"Name",value:"permalink"}},{kind:"Field",name:{kind:"Name",value:"privacy"}},{kind:"Field",name:{kind:"Name",value:"updatedAt"}},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"Variable",name:{kind:"Name",value:"first"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"pageInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasNextPage"}},{kind:"Field",name:{kind:"Name",value:"hasPreviousPage"}},{kind:"Field",name:{kind:"Name",value:"startCursor"}},{kind:"Field",name:{kind:"Name",value:"endCursor"}}]}},{kind:"Field",name:{kind:"Name",value:"edges"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"node"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"hologramId"}},{kind:"Field",name:{kind:"Name",value:"position"}},{kind:"Field",name:{kind:"Name",value:"hologram"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"aspectRatio"}},{kind:"Field",name:{kind:"Name",value:"quiltCols"}},{kind:"Field",name:{kind:"Name",value:"quiltRows"}},{kind:"Field",name:{kind:"Name",value:"quiltTileCount"}},{kind:"Field",name:{kind:"Name",value:"sourceImages"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"fileSize"}}]}}]}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"thumbnail"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}},{kind:"Field",name:{kind:"Name",value:"type"}}]}}]}}]}}]},p={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CreateQuiltHologram"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"data"}},type:{kind:"NamedType",name:{kind:"Name",value:"CreateQuiltHologramInputType"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createQuiltHologram"},arguments:[{kind:"Argument",name:{kind:"Name",value:"data"},value:{kind:"Variable",name:{kind:"Name",value:"data"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"permalink"}}]}}]}}]},f={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Me"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"me"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"displayName"}},{kind:"Field",name:{kind:"Name",value:"email"}},{kind:"Field",name:{kind:"Name",value:"picture"}},{kind:"Field",name:{kind:"Name",value:"createdAt"}}]}}]}}]},b={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyHolograms"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"first"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"20"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"me"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"displayName"}},{kind:"Field",name:{kind:"Name",value:"holograms"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"Variable",name:{kind:"Name",value:"first"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"aspectRatio"}},{kind:"Field",name:{kind:"Name",value:"quiltCols"}},{kind:"Field",name:{kind:"Name",value:"quiltRows"}},{kind:"Field",name:{kind:"Name",value:"quiltTileCount"}},{kind:"Field",name:{kind:"Name",value:"sourceImages"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"fileSize"}}]}}]}}]}}]}}]}}]},w=["png","jpg","jpeg","webp","bmp"],T=w.map(e=>`image/${e}`),L={token:"",apiUrl:"https://blocks.glass",graphqlApiUrl:"https://blocks.glass/api/graphql"};class q{constructor(n){v(this,"auth");v(this,"args");this.args={...L,...n},console.log(this.args)}async me(){return await this.api({document:f})}async hologram(n){return await this.api({document:h,variables:{id:n.toString()}})}async playlist(n,a=100){return await this.api({document:F,variables:{id:n,first:a}})}async myHolograms(n=20){return await this.api({document:b,variables:{first:n}})}async createQuiltHologram(n){return await this.api({document:p,variables:{data:n}})}async uploadAndCreateQuiltHologram(n,a){const m=await this.getImageSizeFromFile(n),l=await this.uploadImage(n);return await this.createQuiltHologram({...a,imageUrl:l,width:m.width,height:m.height,fileSize:n.size})}async uploadImage(n){var l;const a=await this.getS3PresignedPost(n),m=new FormData;if(Object.entries({...a.fields,file:n}).forEach(([u,O])=>{m.append(u,O)}),a!=null&&a.url)return await fetch(a.url,{method:"POST",body:m}),`${a.url}/${(l=a.fields)==null?void 0:l.key}`;throw new Error(a.error)}async getImageSizeFromFile(n){return new Promise((a,m)=>{const l=document.createElement("img");l.src=URL.createObjectURL(n),l.style.display="none",l.addEventListener("load",async()=>{const u={width:l.naturalWidth,height:l.naturalHeight};document.body.removeChild(l),a(u)}),l.addEventListener("error",()=>{m("Failed to get dimenisions from image")}),document.body.appendChild(l)})}async getS3PresignedPost(n){const a=await fetch(this.args.apiUrl+"/api/upload",{method:"POST",body:JSON.stringify({file:n.name}),headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.args.token}`}});return a.status==200?await a.json():{error:`Response failed ${a.status}`}}async api(n){const a={document:n.document,variables:n==null?void 0:n.variables,url:this.args.graphqlApiUrl,requestHeaders:{Authorization:`Bearer ${this.args.token}`}};return await I.default(a)}}i.BlocksClient=q,i.BlocksSpaAuth=s,i.CreateQuiltHologramDocument=p,i.FindHologramDocument=h,i.FindPlaylistDocument=F,i.HOLOGRAM_QUILT_IMAGE_FORMATS=w,i.HOLOGRAM_QUILT_IMAGE_MIMETYPES=T,i.MeDocument=f,i.MyHologramsDocument=b,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
