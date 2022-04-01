"use strict";(self.webpackChunkcontabo_docs=self.webpackChunkcontabo_docs||[]).push([[534],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2458:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:5},l="Cyberduck",s={unversionedId:"Object-Storage/Tools/cyberduck",id:"Object-Storage/Tools/cyberduck",title:"Cyberduck",description:"Cyberduck is a free Desktop Application for MacOS and Windows which allows to manage remote files for a wide variety of protocols including S3 compatible Object Storage.",source:"@site/docs/Object-Storage/Tools/cyberduck.md",sourceDirName:"Object-Storage/Tools",slug:"/Object-Storage/Tools/cyberduck",permalink:"/docs/Object-Storage/Tools/cyberduck",editUrl:"https://github.com/contabo/docs/tree/main/docs/Object-Storage/Tools/cyberduck.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"rclone",permalink:"/docs/Object-Storage/Tools/rclone"},next:{title:"s3fs-fuse",permalink:"/docs/Object-Storage/Tools/s3fs-fuse"}},p={},u=[{value:"Configuration for Contabo&#39;s S3 compatible Object Storage",id:"configuration-for-contabos-s3-compatible-object-storage",level:2},{value:"Example values",id:"example-values",level:3},{value:"Steps",id:"steps",level:3}],d={toc:u};function f(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cyberduck"},"Cyberduck"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cyberduck.io/"},"Cyberduck")," is a free Desktop Application for MacOS and Windows which allows to manage remote files for a wide variety of protocols including S3 compatible Object Storage."),(0,a.kt)("p",null,"Please follow the installation instruction like described on ",(0,a.kt)("a",{parentName:"p",href:"https://cyberduck.io/download/"},"Cyberduck")),(0,a.kt)("p",null,"All you will need is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"access_key")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"secret_key")),(0,a.kt)("li",{parentName:"ul"},"Contabo's S3 URL")),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"access_key"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"secret_key")," and the S3 URL please check ",(0,a.kt)("a",{parentName:"p",href:"/docs/Object-Storage/s3-connection-settings"},"here"),"."),(0,a.kt)("h2",{id:"configuration-for-contabos-s3-compatible-object-storage"},"Configuration for Contabo's S3 compatible Object Storage"),(0,a.kt)("h3",{id:"example-values"},"Example values"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"access_key")," = 82046e8110804a43bf29c1ae426a724d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"secret_key")," = 82e69bd7a52076c527154297a76c2233"),(0,a.kt)("li",{parentName:"ul"},"S3 URL = ",(0,a.kt)("a",{parentName:"li",href:"https://eu2.contabostorage.com"},"https://eu2.contabostorage.com"))),(0,a.kt)("h3",{id:"steps"},"Steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new bookmark, see screenshot\n",(0,a.kt)("img",{alt:"new bookmark",src:n(4633).Z,width:"1368",height:"469"})),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("inlineCode",{parentName:"li"},"Amazon S3")," as type, see screenshot\n",(0,a.kt)("img",{alt:"new bookmark",src:n(4955).Z,width:"588",height:"721"})),(0,a.kt)("li",{parentName:"ol"},"Specify settings, see screenshot",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"in field ",(0,a.kt)("inlineCode",{parentName:"li"},"Server")," put ",(0,a.kt)("inlineCode",{parentName:"li"},"eu2.contabostorage.com")," (depending your Object Storage). NOTE: please make sure to enter without ",(0,a.kt)("inlineCode",{parentName:"li"},"https://")),(0,a.kt)("li",{parentName:"ul"},"in field ",(0,a.kt)("inlineCode",{parentName:"li"},"Access Key ID")," put your access_key, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"82046e8110804a43bf29c1ae426a724d")),(0,a.kt)("li",{parentName:"ul"},"in field ",(0,a.kt)("inlineCode",{parentName:"li"},"Secret Access Key")," put your secret_key, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"82e69bd7a52076c527154297a76c2233"),(0,a.kt)("img",{alt:"new bookmark",src:n(2848).Z,width:"495",height:"370"})))),(0,a.kt)("li",{parentName:"ol"},"You are done")))}f.isMDXComponent=!0},4955:function(e,t,n){t.Z=n.p+"assets/images/choose_s3-fdf9eccb30e052ee27e8ff03672df853.png"},4633:function(e,t,n){t.Z=n.p+"assets/images/new_bookmark-95c4299ff8a7f65fd4e5051775a0bd09.png"},2848:function(e,t,n){t.Z=n.p+"assets/images/s3-settings-26384d038aba96a59d39a7dbdfa71ffc.png"}}]);