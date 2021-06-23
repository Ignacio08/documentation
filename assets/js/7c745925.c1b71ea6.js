(self.webpackChunkdocv_2=self.webpackChunkdocv_2||[]).push([[321],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(m,l(l({ref:t},c),{},{components:n})):o.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7796:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),l=["components"],s={id:"tutorials-nodes-collators-setup",title:"Setup collator Node",sidebar_label:"Setup collator Node"},i={unversionedId:"tutorials/tutorials-nodes-collators-setup",id:"tutorials/tutorials-nodes-collators-setup",isDocsHomePage:!1,title:"Setup collator Node",description:"DRAFT",source:"@site/docs/tutorials/tutorials-nodes-collators-setup.md",sourceDirName:"tutorials",slug:"/tutorials/tutorials-nodes-collators-setup",permalink:"/documentation/docs/tutorials/tutorials-nodes-collators-setup",editUrl:"https://github.com/DataHighway-DHX/documentation/docs/tutorials/tutorials-nodes-collators-setup.md",version:"current",sidebar_label:"Setup collator Node",frontMatter:{id:"tutorials-nodes-collators-setup",title:"Setup collator Node",sidebar_label:"Setup collator Node"},sidebar:"tutorialSidebar",previous:{title:"Setup Token Mining",permalink:"/documentation/docs/tutorials/tutorials-mining-tokens-setup"},next:{title:"Setup Full Node",permalink:"/documentation/docs/tutorials/tutorials-nodes-full-node-setup"}},u=[{value:"How do you setup an Collator Node?",id:"how-do-you-setup-an-collator-node",children:[{value:"Provisioning a server",id:"provisioning-a-server",children:[]},{value:"Installing DataHighway and setting it up as a system service",id:"installing-datahighway-and-setting-it-up-as-a-system-service",children:[]},{value:"Set up the node as a system service.",id:"set-up-the-node-as-a-system-service",children:[]}]}],c={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DRAFT")),(0,r.kt)("h2",{id:"how-do-you-setup-an-collator-node"},"How do you setup an Collator Node?"),(0,r.kt)("p",null,"This guide covers how to set up a DataHighway Collator Node."),(0,r.kt)("h3",{id:"provisioning-a-server"},"Provisioning a server"),(0,r.kt)("p",null,"Provision an appropriately sized server from a reputable VPS provider, e.g.: Vultr, DigitalOcean, Linode, OVH, Contabo, Scaleway, Amazon AWS, etc."),(0,r.kt)("p",null,"We recommend a node with at least 4GB of RAM, and Ubuntu 18.04 x64. Other operating systems will require adjustments to these instructions."),(0,r.kt)("p",null,"SSH into the server."),(0,r.kt)("h3",{id:"installing-datahighway-and-setting-it-up-as-a-system-service"},"Installing DataHighway and setting it up as a system service"),(0,r.kt)("p",null,"First, clone the DataHighway-DHX/node repo, install any dependencies, and run the required build scripts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt update\napt install -y gcc libc6-dev\napt install -y cmake pkg-config libssl-dev git clang libclang-dev\n")),(0,r.kt)("p",null,"Prefetch SSH publickeys"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keyscan -H github.com >> ~/.ssh/known_hosts\n")),(0,r.kt)("p",null,"Install rustup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://sh.rustup.rs -sSf | sh -s -- -y\nsource $HOME/.cargo/env\nexport PATH=$HOME/.cargo/bin:$PATH\n")),(0,r.kt)("p",null,"Get packages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/DataHighway-DHX/node.git\ncd node\n")),(0,r.kt)("p",null,"Build packages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://getsubstrate.io -sSf | bash -s -- --fast && \\\n./scripts/init.sh\n")),(0,r.kt)("p",null,"Build runtime code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --release\n")),(0,r.kt)("h3",{id:"set-up-the-node-as-a-system-service"},"Set up the node as a system service."),(0,r.kt)("p",null,"To do this, navigate into the root directory of the DataHighway-DHX/node repo and execute the following to create the service configuration file.\nReplace the values for keys starting with $ to suit your own collator node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"{\n  echo '[Unit]'\n  echo 'Description=DataHighway'\n  echo '[Service]'\n  echo 'Type=simple'\n  echo 'WorkingDirectory=$fullprojectpath'\n  echo 'ExecStart=$fullprojectpath/target/release/parachain-collator --collator --name $nameofyournode -\nparachain-id 2 --port 40334 --ws-port 9845 --bootnodes $dhxbootnode -- --chain rococo --port 30333 --ws-port 9978 --bootnodes $dhxbootnode'\n  echo '[Install]'\n  echo 'WantedBy=multi-user.target'\n} > /etc/systemd/system/datahighway.service\n")),(0,r.kt)("p",null,"$dhxbootnode= requst this from DHX team thru discord"),(0,r.kt)("p",null,"$fullprojectpath=needs to be the full path to your node project which you cloned. eg:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/home/foo/node\n")),(0,r.kt)("p",null,"$nameofyournode=name your node with the --name option which will be shown on telemetry (not supported yet), eg:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--name Mycollator\n")),(0,r.kt)("p",null,"Double check that the config has been written to /etc/systemd/system/datahighway.service correctly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cat /etc/systemd/system/datahighway.service\n")),(0,r.kt)("p",null,"Then enable the service so it runs on startup, and then try to start it now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable datahighway\nsystemctl start datahighway\n")),(0,r.kt)("p",null,"Check the status of the service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status datahighway\n")),(0,r.kt)("p",null,"You should see the node connecting to the network and syncing the latest blocks. If you like to follow the log output, you can use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -u datahighway.service -f\n")))}p.isMDXComponent=!0}}]);