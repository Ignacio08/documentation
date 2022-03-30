(self.webpackChunkdocv_2=self.webpackChunkdocv_2||[]).push([[9672],{3905:function(a,t,e){"use strict";e.d(t,{Zo:function(){return u},kt:function(){return d}});var n=e(7294);function o(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function r(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function l(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){o(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function i(a,t){if(null==a)return{};var e,n,o=function(a,t){if(null==a)return{};var e,n,o={},r=Object.keys(a);for(n=0;n<r.length;n++)e=r[n],t.indexOf(e)>=0||(o[e]=a[e]);return o}(a,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)e=r[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(o[e]=a[e])}return o}var c=n.createContext({}),s=function(a){var t=n.useContext(c),e=t;return a&&(e="function"==typeof a?a(t):l(l({},t),a)),e},u=function(a){var t=s(a.components);return n.createElement(c.Provider,{value:t},a.children)},h={inlineCode:"code",wrapper:function(a){var t=a.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(a,t){var e=a.components,o=a.mdxType,r=a.originalType,c=a.parentName,u=i(a,["components","mdxType","originalType","parentName"]),p=s(e),d=o,k=p["".concat(c,".").concat(d)]||p[d]||h[d]||r;return e?n.createElement(k,l(l({ref:t},u),{},{components:e})):n.createElement(k,l({ref:t},u))}));function d(a,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof a||o){var r=e.length,l=new Array(r);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=a,i.mdxType="string"==typeof a?a:o,l[1]=i;for(var s=2;s<r;s++)l[s]=e[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}p.displayName="MDXCreateElement"},385:function(a,t,e){"use strict";e.r(t),e.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=e(2122),o=e(9756),r=(e(7294),e(3905)),l=["components"],i={id:"tutorials-nodes-polkadot-launch-datahighway-rococo-local",title:"Setup parachain testnet for Datahighway on 'rococo-local' using Polkadot-Launch",sidebar_label:"Setup parachain testnet for Datahighway on 'rococo-local' using Polkadot-Launch"},c=void 0,s={unversionedId:"tutorials/tutorials-nodes-polkadot-launch-datahighway-rococo-local",id:"tutorials/tutorials-nodes-polkadot-launch-datahighway-rococo-local",isDocsHomePage:!1,title:"Setup parachain testnet for Datahighway on 'rococo-local' using Polkadot-Launch",description:"How do you setup a DataHighway Parachain testnet on 'rococo-local' using Polkadot-Launch?",source:"@site/docs/tutorials/tutorials-node-polkadot-launch-datahighway-rococo-local.md",sourceDirName:"tutorials",slug:"/tutorials/tutorials-nodes-polkadot-launch-datahighway-rococo-local",permalink:"/zh-TW/docs/tutorials/tutorials-nodes-polkadot-launch-datahighway-rococo-local",editUrl:"https://github.com/DataHighway-DHX/documentation/edit/master/docs/tutorials/tutorials-node-polkadot-launch-datahighway-rococo-local.md",version:"current",frontMatter:{id:"tutorials-nodes-polkadot-launch-datahighway-rococo-local",title:"Setup parachain testnet for Datahighway on 'rococo-local' using Polkadot-Launch",sidebar_label:"Setup parachain testnet for Datahighway on 'rococo-local' using Polkadot-Launch"},sidebar:"tutorialSidebar",previous:{title:"Topup Supernodes",permalink:"/zh-TW/docs/tutorials/tutorials-mining-tokens-topup-supernodes"},next:{title:"Setup collator Node",permalink:"/zh-TW/docs/tutorials/tutorials-nodes-collators-setup"}},u=[{value:"How do you setup a DataHighway Parachain testnet on &#39;rococo-local&#39; using Polkadot-Launch?",id:"how-do-you-setup-a-datahighway-parachain-testnet-on-rococo-local-using-polkadot-launch",children:[{value:"Install Substrate",id:"install-substrate",children:[]},{value:"Install Rust",id:"install-rust",children:[]},{value:"Clone Polkadot-Launch. Note that this forked repository already includes a config.json file that has been preconfigured.",id:"clone-polkadot-launch-note-that-this-forked-repository-already-includes-a-configjson-file-that-has-been-preconfigured",children:[]},{value:"Build the Polkadot repository using v0.9.17",id:"build-the-polkadot-repository-using-v0917",children:[]},{value:"OPTION 1 Build the DataHighway-Parachain codebase",id:"option-1-build-the-datahighway-parachain-codebase",children:[]},{value:"OPTION 2 Build the Substrate-Parachain-Template",id:"option-2-build-the-substrate-parachain-template",children:[]},{value:"SKIP Build Cumulus codebase",id:"skip-build-cumulus-codebase",children:[]},{value:"Run Polkadot-Launch",id:"run-polkadot-launch",children:[]},{value:"Manually add further DataHighway collator nodes",id:"manually-add-further-datahighway-collator-nodes",children:[]},{value:"Benchmarking",id:"benchmarking",children:[]},{value:"Try-Runtime",id:"try-runtime",children:[]},{value:"Additional Notes:",id:"additional-notes",children:[]}]}],h={toc:u};function p(a){var t=a.components,e=(0,o.Z)(a,l);return(0,r.kt)("wrapper",(0,n.Z)({},h,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-do-you-setup-a-datahighway-parachain-testnet-on-rococo-local-using-polkadot-launch"},"How do you setup a DataHighway Parachain testnet on 'rococo-local' using Polkadot-Launch?"),(0,r.kt)("p",null,"The following is based on using an Apple macOS 11.2.2 with M1 processor. It generally follows the steps here ",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/tutorials/v3/cumulus/start-relay/"},"https://docs.substrate.io/tutorials/v3/cumulus/start-relay/"),".\nThe versions used are specified here ",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/tutorials/v3/cumulus/start-relay/#software-versioning"},"https://docs.substrate.io/tutorials/v3/cumulus/start-relay/#software-versioning"),", including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"polkadot branch 'v0.9.17' from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot/tree/v0.9.17"},"https://github.com/paritytech/polkadot/tree/v0.9.17")),(0,r.kt)("li",{parentName:"ul"},"substrate-parachain-template branch 'polkadot-v0.9.16' from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/substrate-developer-hub/substrate-parachain-template/tree/polkadot-v0.9.17"},"https://github.com/substrate-developer-hub/substrate-parachain-template/tree/polkadot-v0.9.17")),(0,r.kt)("li",{parentName:"ul"},"Polkadot-JS Apps v0.103.2-8 from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/apps/commit/129508461b062907c85bfa32ade096296cd3fe76"},"https://github.com/polkadot-js/apps/commit/129508461b062907c85bfa32ade096296cd3fe76"),")")),(0,r.kt)("p",null,"create the following shell scripts and ",(0,r.kt)("inlineCode",{parentName:"p"},"chmod 777 <FILENAME>")," each of them, and then run ",(0,r.kt)("inlineCode",{parentName:"p"},"./run_polkadot_launch.sh")),(0,r.kt)("h3",{id:"install-substrate"},"Install Substrate"),(0,r.kt)("p",null,"setup_substrate.sh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#!/bin/bash\n\ncurl https://getsubstrate.io -sSf | bash -s -- --fast\n")),(0,r.kt)("h3",{id:"install-rust"},"Install Rust"),(0,r.kt)("p",null,"setup_rust.sh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#!/bin/bash\n\nwget -O - https://sh.rustup.rs | sh -s -- -y\nPATH=$PATH:/root/.cargo/bin\nrustup update stable\nrustup update nightly\n")),(0,r.kt)("h3",{id:"clone-polkadot-launch-note-that-this-forked-repository-already-includes-a-configjson-file-that-has-been-preconfigured"},"Clone Polkadot-Launch. Note that this forked repository already includes a config.json file that has been preconfigured."),(0,r.kt)("p",null,"setup_datahighway_polkadot_launch.sh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#!/bin/bash\n\nmkdir -p ~/parachains\ncd ~/parachains\ngit clone https://github.com/DataHighway-DHX/polkadot-launch\ncd ~/parachains/polkadot-launch\nmkdir -p ~/parachains/polkadot-launch/bin\n")),(0,r.kt)("h3",{id:"build-the-polkadot-repository-using-v0917"},"Build the Polkadot repository using v0.9.17"),(0,r.kt)("p",null,"This is for the the relay chain node on the Rococo network, generated the relay chain specification, and convert it to a SCALE encoded raw chain spec for use when starting nodes. Then copy across the Polkadot binary and the chain specifications to the Polkadot-Launch folder."),(0,r.kt)("p",null,"Note that stable-aarch64-apple-darwin is required for an Apple M1 processor (otherwise you get illegal hardware instruction error) ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/subport/issues/242#issuecomment-923678332"},"https://github.com/paritytech/subport/issues/242#issuecomment-923678332")),(0,r.kt)("p",null,"setup_polkadot_relaychain.sh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#!/bin/bash\n\ncd ~/parachains\ngit clone https://github.com/paritytech/polkadot\ncd polkadot\ngit checkout v0.9.17\n. ~/.cargo/env\nPATH=$PATH:/root/.cargo/bin\nrustup update stable\nrustup toolchain install nightly\nrustup target add wasm32-unknown-unknown --toolchain nightly\nrustup install stable-aarch64-apple-darwin\nrustup default stable-aarch64-apple-darwin\nrustup override set stable-aarch64-apple-darwin\ncargo build --release\ncp ./target/release/polkadot ~/parachains/polkadot-launch/bin\n./target/release/polkadot build-spec --chain=rococo-local --disable-default-bootnode > rococo-local.json\n./target/release/polkadot build-spec --chain rococo-local.json --raw --disable-default-bootnode > rococo-local-raw.json\ncp ./rococo-local.json ~/parachains/polkadot-launch\ncp ./rococo-local-raw.json ~/parachains/polkadot-launch\n")),(0,r.kt)("h3",{id:"option-1-build-the-datahighway-parachain-codebase"},"[OPTION 1]"," Build the DataHighway-Parachain codebase"),(0,r.kt)("p",null,"setup_datahighway_parachain.sh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#!/bin/bash\n\ncd ~/parachains\ngit clone https://github.com/DataHighway-DHX/DataHighway-Parachain\ncd DataHighway-Parachain\ngit checkout main\n./scripts/init.sh\ncargo build --release\ncp ./target/release/datahighway-collator ~/parachains/polkadot-launch/bin\n")),(0,r.kt)("h3",{id:"option-2-build-the-substrate-parachain-template"},"[OPTION 2]"," Build the Substrate-Parachain-Template"),(0,r.kt)("p",null,"Instead of building the DataHighway-Parachain codebase, you can alternatively build a fork of Substrate-Parachain-Template instead using v0.9.16 for the Cumulus-based parachain collators on the Rococo network.\nChange the parachain id values in the chain_spec.rs file from 1000 to 2000 (i.e. find/replace ",(0,r.kt)("inlineCode",{parentName:"p"},'"1000.into(),"')," with ",(0,r.kt)("inlineCode",{parentName:"p"},'"2000.into(),"'),", and find/replace ",(0,r.kt)("inlineCode",{parentName:"p"},'"para_id: 1000,"')," with ",(0,r.kt)("inlineCode",{parentName:"p"},'"para_id: 2000,'),'").\nAlso change ',(0,r.kt)("inlineCode",{parentName:"p"},'"" | "local"')," to ",(0,r.kt)("inlineCode",{parentName:"p"},'"" | "local" | "rococo-local"')," in command.rs, so it would run in Polkadot-Launch. After building it then copy across the Substrate-Parachain-Template binary to the Polkadot-Launch folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/ltfschoen/substrate-parachain-template\ncd substrate-parachain-template\ngit remote add upstream https://github.com/substrate-developer-hub/substrate-parachain-template\ngit fetch upstream polkadot-v0.9.17:polkadot-v0.9.17\ngit checkout polkadot-v0.9.17\n. ~/.cargo/env\nPATH=$PATH:/root/.cargo/bin\nrustup update stable\nrustup toolchain install nightly-2021-12-15-x86_64-apple-darwin\nrustup target add wasm32-unknown-unknown --toolchain nightly-2021-12-15-x86_64-apple-darwin\nrustup default nightly-2021-12-15-x86_64-apple-darwin\nrustup override set nightly-2021-12-15-x86_64-apple-darwin\ncargo build --release\ncp ./target/release/parachain-collator ~/parachains/polkadot-launch/bin\n")),(0,r.kt)("p",null,"Then install dependencies including Node.js. Modify the Polkadot-Launch config.json file by changing ",(0,r.kt)("inlineCode",{parentName:"p"},"./bin/datahighway-collator")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"./bin/parachain-collator")," in both places in the config.json file."),(0,r.kt)("p",null,"Note that the example config.json file that is included in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ltfschoen/substrate-parachain-template"},"https://github.com/ltfschoen/substrate-parachain-template")," is likely the same as the config.json file in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DataHighway-DHX/polkadot-launch/blob/master/config.json"},"https://github.com/DataHighway-DHX/polkadot-launch/blob/master/config.json")),(0,r.kt)("p",null,"Note that any pallets that you incorporate from the Substrate repository should be also from its similar branch 'polkadot_v0.9.17'"),(0,r.kt)("h3",{id:"skip-build-cumulus-codebase"},"[SKIP]"," Build Cumulus codebase"),(0,r.kt)("p",null,"setup_cumulus_parachain.sh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#!/bin/bash\n\ncd ~/parachains\ngit clone https://github.com/paritytech/cumulus\ncd cumulus\ngit checkout polkadot-v0.9.17\ncargo build --release -p polkadot-collator\ncp ./target/release/polkadot-collator ~/parachains/polkadot-launch/bin\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Change the ",(0,r.kt)("inlineCode",{parentName:"li"},'"bin": ')," location of the binary executables to point to the files in the polkadot-launch/bin/ subfolder (i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},'"bin": "./datahighway-collator",')," rather than ",(0,r.kt)("inlineCode",{parentName:"li"},"./target/release/datahighway-collator"),")")),(0,r.kt)("h3",{id:"run-polkadot-launch"},"Run Polkadot-Launch"),(0,r.kt)("p",null,"Run Polkadot-Launch and the other scripts"),(0,r.kt)("p",null,"run_polkadot_launch.sh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#!/bin/bash\n\n./setup_substrate.sh\n./setup_rust.sh\n./change_rustup_toolchain.sh\n./setup_datahighway_polkadot_launch.sh\n./setup_datahighway_parachain.sh\n# ./setup_cumulus_parachain.sh\n./setup_polkadot_relaychain.sh\n\ncd ~/parachains/polkadot-launch\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nexport NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"\nnvm install v16.3.0\nnvm use v16.3.0\nnpm install -g yarn\nyarn\nyarn start config.json\n')),(0,r.kt)("h3",{id:"manually-add-further-datahighway-collator-nodes"},"Manually add further DataHighway collator nodes"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/tutorials/v3/cumulus/connect-parachain/#connecting-additional-parachain-nodes"},"https://docs.substrate.io/tutorials/v3/cumulus/connect-parachain/#connecting-additional-parachain-nodes")),(0,r.kt)("p",null,"Note: If you used ","[OPTION 2]"," instead of ","[OPTION 1]"," then the below commands should start with ",(0,r.kt)("inlineCode",{parentName:"p"},"./target/release/parachain-collator")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"./target/release/datahighway-collator")," and you will be making the commands from the substrate-parachain-template folder instead of the DataHighway-Parachain folder."),(0,r.kt)("p",null,'Build the raw chain specification for the "rococo-local" chain from the DataHighway-Parachain chain_spec.rs file. Note that we need to generate it from the binary that we copied across into Polkadot-Launch since that is the binary that we are using to run the other collator nodes. The files we need will be added into the DataHighway-Parachain folder. Then we use that raw chain specification to export the genesis state and genesis WASM file for use in running further DataHighway collator nodes. See ',(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/tutorials/v3/cumulus/connect-parachain/"},"https://docs.substrate.io/tutorials/v3/cumulus/connect-parachain/")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cd DataHighway-Parachain\n~/parachains/polkadot-launch/bin/datahighway-collator build-spec --chain "rococo-local" --disable-default-bootnode > rococo-local-parachain-2000-plain.json\n~/parachains/polkadot-launch/bin/datahighway-collator build-spec --chain rococo-local-parachain-2000-plain.json --raw --disable-default-bootnode > rococo-local-parachain-2000-raw.json\n~/parachains/polkadot-launch/bin/datahighway-collator export-genesis-wasm --chain rococo-local-parachain-2000-raw.json > para-2000-wasm\n~/parachains/polkadot-launch/bin/datahighway-collator export-genesis-state --chain rococo-local-parachain-2000-raw.json > para-2000-genesis\n')),(0,r.kt)("p",null,'Copy the "rococo" original generated chain specification, "raw" chain specification, exported state and wasm file from server to local machine that is used to run the collator so it may be stored in the ./res folder '),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scp -J luke@<IP_ADDR_1> luke@<IP_ADDR_2>:/home/luke/DataHighway-DHX/DataHighway-Parachain/target/release/wbuild/datahighway-parachain-runtime/datahighway_runtime.compact.wasm .\n")),(0,r.kt)("p",null,"Copy the files into the ./res folder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd DataHighway-Parachain\ncp ./res/rococo.json .\n")),(0,r.kt)("p",null,"Obtain Alice's secret Seed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"subkey inspect //Alice\n--\x3e outputs: 0xe5be9a5092b81bca64be81d212e7f2f9eba183bb7a90954f7b76361f6edb5c0a\n")),(0,r.kt)("p",null,"If you are using a chain specification with custom keys rather than defaults like Alice, and running the node without the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--alice")," then it is necessary to add the keys to the keystore."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"~/parachains/polkadot-launch/bin/datahighway-collator key insert \\\n--base-path /tmp/parachain/alice \\\n--chain rococo-local-parachain-2000-raw.json \\\n--scheme Sr25519 \\\n--suri 0xe5be9a5092b81bca64be81d212e7f2f9eba183bb7a90954f7b76361f6edb5c0a \\\n--key-type aura\n")),(0,r.kt)("p",null,"Try to run another DataHighway collator node manually on your local machine with the following:\nImportant note: Remove ",(0,r.kt)("inlineCode",{parentName:"p"},"--alice")," if you are using custom session keys that have been added to the keystore."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'rm -rf /tmp/parachain/alice\n\n./target/release/datahighway-collator \\\n    --collator \\\n    --alice \\\n    --chain rococo-local-parachain-2000-raw.json \\\n    --base-path /tmp/parachain/alice \\\n    --bootnodes <INSERT_EXISTING_COLLATOR_BOOTNODE_FROM_POLKADOT_LAUNCH_LOGS> \\\n    --name "DataHighway-Collator-Alice" \\\n    --force-authoring \\\n    --port 31400 \\\n    --rpc-port 9933 \\\n    --ws-port 9977 \\\n    --unsafe-ws-external \\\n    --unsafe-rpc-external \\\n    --rpc-cors=all \\\n    --rpc-max-payload 1000 \\\n    --rpc-cors=all \\\n    --rpc-methods=Unsafe \\\n    -- \\\n    --execution wasm \\\n    --chain rococo-local-raw.json \\\n    --port 30342 \\\n    --rpc-port 9942 \\\n    --ws-port 9953\n')),(0,r.kt)("p",null,"Note: The following was added to support Try-Runtime. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/tools/try-runtime/#usage"},"https://docs.substrate.io/v3/tools/try-runtime/#usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    --rpc-max-payload 1000 \\\n    --rpc-cors=all \\\n")),(0,r.kt)("p",null,"Note: Obtain <INSERT_EXISTING_COLLATOR_BOOTNODE_FROM_POLKADOT_LAUNCH_LOGS> from the Polkadot-Launch logs. An example of what it outputs is the following, but the Local Node Identities may be different:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Added Boot Nodes: /ip4/127.0.0.1/tcp/30336/p2p/12D3KooWRxTiM5vAPZ9RNSgd7Uqwfa8bpx4MoNo2M1m4f34nrCot,/ip4/127.0.0.1/tcp/30337/p2p/12D3KooWAWqYpvBZvvmPJ8wQ5PeiCcv8XuFzjVQrT6JGyXyU72Fu\n")),(0,r.kt)("p",null,"Wait for about 15 blocks until the logs say ",(0,r.kt)("inlineCode",{parentName:"p"}," Starting collation."),", which is when the parachain will start collating and finalizing blocks"),(0,r.kt)("p",null,"Check it works in the UI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/polkadot-js/apps\ngit checkout 129508461b062907c85bfa32ade096296cd3fe76\nnvm use v16.3.0\nyarn\nyarn start\n")),(0,r.kt)("p",null,"Go to http://localhost:3000/?rpc=ws%3A%2F%2F127.0.0.1%3A9988#/accounts and verify that the parachain is generating and finalizing blocks, that you can transfer 1 UNIT from Alice to Bob"),(0,r.kt)("h3",{id:"benchmarking"},"Benchmarking"),(0,r.kt)("p",null,"Run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./scripts/benchmark_all_pallets.sh\n")),(0,r.kt)("h3",{id:"try-runtime"},"Try-Runtime"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Build whilst specifying the ",(0,r.kt)("inlineCode",{parentName:"li"},"try-runtime")," feature")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./scripts/init.sh\n\ncargo build --release --features=try-runtime\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run Try-Runtime so ",(0,r.kt)("inlineCode",{parentName:"li"},"on-runtime-upgrade")," will invoke all  ",(0,r.kt)("inlineCode",{parentName:"li"},"OnRuntimeUpgrade")," hooks in pallets and the runtime")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"RUST_LOG=runtime=trace,try-runtime::cli=trace,executor=trace \\\nRUST_BACKTRACE=1 \\\n./target/release/datahighway-collator \\\ntry-runtime \\\n--chain rococo-local-parachain-2000-raw.json \\\n--url <ws/s port>\n--block-at <block-hash> \\\non-runtime-upgrade \\\nlive\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("inlineCode",{parentName:"p"},"./scripts/try-runtime.sh")),(0,r.kt)("h3",{id:"additional-notes"},"Additional Notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Previously DataHighway standalone chain required these dependencies:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rustup toolchain install nightly-2020-10-06\nrustup target add wasm32-unknown-unknown --toolchain nightly-2020-10-06\nrustup default nightly-2020-10-06\nrustup override set nightly-2020-10-06\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On macOS the version required for Rustup is for example ",(0,r.kt)("inlineCode",{parentName:"li"},"stable-x86_64-apple-darwin"),", whereas on Linux it is ",(0,r.kt)("inlineCode",{parentName:"li"},"stable-aarch64-unknown-linux-gnu"))))}p.isMDXComponent=!0}}]);