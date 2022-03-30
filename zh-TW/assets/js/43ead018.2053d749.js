(self.webpackChunkdocv_2=self.webpackChunkdocv_2||[]).push([[5513],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9578:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),i=["components"],p={id:"tutorials-runtime-upgrade",title:"Runtime Upgrade",sidebar_label:"Runtime Upgrade"},l=void 0,s={unversionedId:"tutorials/tutorials-runtime-upgrade",id:"tutorials/tutorials-runtime-upgrade",isDocsHomePage:!1,title:"Runtime Upgrade",description:"How to propose a forkless runtime upgrade",source:"@site/docs/tutorials/tutorials-runtime-upgrade.md",sourceDirName:"tutorials",slug:"/tutorials/tutorials-runtime-upgrade",permalink:"/zh-TW/docs/tutorials/tutorials-runtime-upgrade",editUrl:"https://github.com/DataHighway-DHX/documentation/edit/master/docs/tutorials/tutorials-runtime-upgrade.md",version:"current",frontMatter:{id:"tutorials-runtime-upgrade",title:"Runtime Upgrade",sidebar_label:"Runtime Upgrade"},sidebar:"tutorialSidebar",previous:{title:"Setup Validator Node",permalink:"/zh-TW/docs/tutorials/tutorials-nodes-validator-setup"},next:{title:"API Reference Documentation",permalink:"/zh-TW/docs/api/rust-reference-docs"}},u=[{value:"How to propose a forkless runtime upgrade",id:"how-to-propose-a-forkless-runtime-upgrade",children:[{value:"Step 1: Prepare WASM binary",id:"step-1-prepare-wasm-binary",children:[]},{value:"Step 2: Submit a Preimage Hash of the Proposal for a forkless runtime upgrade",id:"step-2-submit-a-preimage-hash-of-the-proposal-for-a-forkless-runtime-upgrade",children:[]},{value:"Step 3: Submit the Proposal",id:"step-3-submit-the-proposal",children:[]},{value:"Step 4: Seconding the Proposal",id:"step-4-seconding-the-proposal",children:[]},{value:"Step 5: Voting on the Proposal",id:"step-5-voting-on-the-proposal",children:[]},{value:"Step 6: Dispatch",id:"step-6-dispatch",children:[]},{value:"Reference",id:"reference",children:[]}]}],c={toc:u};function m(e){var t=e.components,p=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-propose-a-forkless-runtime-upgrade"},"How to propose a forkless runtime upgrade"),(0,o.kt)("h3",{id:"step-1-prepare-wasm-binary"},"Step 1: Prepare WASM binary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Clone ",(0,o.kt)("a",{href:"https://github.com/DataHighway-DHX/node",target:"_blank",className:"pretty-link pretty-link-colored"},"node")," repo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Switch to the root directory of the cloned project"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cd node")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build the Wasm bytecode")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cargo build --release")),(0,o.kt)("h3",{id:"step-2-submit-a-preimage-hash-of-the-proposal-for-a-forkless-runtime-upgrade"},"Step 2: Submit a Preimage Hash of the Proposal for a forkless runtime upgrade"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("em",{parentName:"p"},"Democracy")," page ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fwestlake.datahighway.com#/democracy"},"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fwestlake.datahighway.com#/democracy"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The first step is to submit a preimage of the proposal. Click on ",(0,o.kt)("em",{parentName:"p"},"Submit preimage"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Choose ",(0,o.kt)("em",{parentName:"p"},"system")," as call and ",(0,o.kt)("em",{parentName:"p"},"setCode")," as function ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("em",{parentName:"p"},"code")," input field, and select the Wasm binary that defines the upgraded runtime:\n",(0,o.kt)("inlineCode",{parentName:"p"},"target/release/wbuild/datahighway-runtime/datahighway_runtime.compact.wasm")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note: If you get errosr then copy the ",(0,o.kt)("inlineCode",{parentName:"li"},"datahighway_runtime.compact.compressed.wasm")," file instead"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Copy the preimage hash. This represents the proposal. You will use this hash when submitting the actual proposal.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Leave the value for the _weight parameter at the default of 0.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Click "Submit Transaction" and then "Sign and Submit".'))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Submit Preimage",src:a(1814).Z,title:"Submit Preimage"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important")," If you forgot to copy the preimage hash, you can easily regenerate and copy it again by choosing the same extrinsic (it won't allow to submit it again but you can get preimage hash)."),(0,o.kt)("h3",{id:"step-3-submit-the-proposal"},"Step 3: Submit the Proposal"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select the account from which you want to submit the proposal. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enter the preimage hash related to the proposal. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set the locked balance. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("em",{parentName:"p"},"Submit proposal")," button and sign the transaction"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Submit Proposal",src:a(1628).Z,title:"Submit Proposal"})),(0,o.kt)("h3",{id:"step-4-seconding-the-proposal"},"Step 4: Seconding the Proposal"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select the account to second the proposal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Verify the number of tokens required to second the proposal and Click the "Second" button and sign the transaction'))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Second Proposal1",src:a(4783).Z,title:"Second Proposal1"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Second Proposal2",src:a(6698).Z,title:"Second Proposal2"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Second Proposal3",src:a(3171).Z,title:"Second Proposal3"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important")," By seconding a proposal you will move it higher up the rank of proposals. The most seconded proposal \u2014 in value, not number of supporters \u2014 will be brought to a referendum every launch period. If nobody seconds a proposal, it would still reach to referendum."),(0,o.kt)("h3",{id:"step-5-voting-on-the-proposal"},"Step 5: Voting on the Proposal"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The most seconded proposal moves to public referendum")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Once in referendum, token holders vote "Aye" or "Nay" on the proposal by locking tokens. Two factors account the vote weight: amount locked (i.e. conviction) and locking period')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the proposal passes, it is enacted after a certain amount of time"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Vote1",src:a(7577).Z,title:"Vote1"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Vote2",src:a(1738).Z,title:"Vote2"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Vote3",src:a(8088).Z,title:"Vote3"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important")," If referendum does not pass due to any reason (either nobody votes or more ",(0,o.kt)("inlineCode",{parentName:"p"},"Nay")," and less ",(0,o.kt)("inlineCode",{parentName:"p"},"Aye"),"), you can re-submit proposal using same preimage hash."),(0,o.kt)("h3",{id:"step-6-dispatch"},"Step 6: Dispatch"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'After the voting period has expired, the proposal will be visible under the "Dispatch" tab if approved.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dispatch",src:a(8544).Z,title:"Dispatch"})),(0,o.kt)("p",null,"After the dispatch period has expired, Runtime_upgrade will start and you can see upgraded version on top left corner."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Runtime",src:a(5497).Z,title:"Runtime"})),(0,o.kt)("h3",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.polkadot.network/docs/maintain-guides-democracy/#proposing-an-action"},"Participating in Democracy on Kusama and Polkadot"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important:")," If you want to test locally, you may need to modify the current runtime configuration of democracy module such as Launch Period, EnactmentPeriod and Voting Period."))}m.isMDXComponent=!0},8544:function(e,t,a){"use strict";t.Z=a.p+"assets/images/dispatch-0a853df8761753d7972115bcfeb3099d.png"},5497:function(e,t,a){"use strict";t.Z=a.p+"assets/images/runtime-41a0d3ca5d86acf42c5163c1339e8592.png"},4783:function(e,t,a){"use strict";t.Z=a.p+"assets/images/second_proposal1-6ac3fe4606d992417f01a2033bd40db9.png"},6698:function(e,t,a){"use strict";t.Z=a.p+"assets/images/second_proposal2-d4050201cdd786398483f68f2b371359.png"},3171:function(e,t,a){"use strict";t.Z=a.p+"assets/images/second_proposal3-d9ea9486f75b64d12c768926f1c51731.png"},1814:function(e,t,a){"use strict";t.Z=a.p+"assets/images/submit_preimage-8b126686611fb307375e7bed4476a17b.png"},1628:function(e,t,a){"use strict";t.Z=a.p+"assets/images/submit_proposal-4bed3bf66ab2727700b8940d6dfcca4e.png"},7577:function(e,t,a){"use strict";t.Z=a.p+"assets/images/vote1-fd15fc66f2c4df391296e21a18286f9e.png"},1738:function(e,t,a){"use strict";t.Z=a.p+"assets/images/vote2-939db9708d0377643fd28cfe96b7fa7f.png"},8088:function(e,t,a){"use strict";t.Z=a.p+"assets/images/vote3-8c404221e1db37093f091f9f40958290.png"}}]);