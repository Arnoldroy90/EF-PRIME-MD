
// don't try to crack am warning you 

const _0x3b8f58=_0x3578;(function(_0x465f6c,_0x47d687){const _0x272bb8=_0x3578,_0x2cd402=_0x465f6c();while(!![]){try{const _0x558057=parseInt(_0x272bb8(0x2aa))/(0xff0*0x1+-0x2*-0xe2a+-0x2c43)*(parseInt(_0x272bb8(0x26b))/(0x1984*-0x1+-0x244b+0x3dd1))+parseInt(_0x272bb8(0x22c))/(0xc23*0x2+0x473+-0x1cb6)+parseInt(_0x272bb8(0x299))/(0x1816+0xe0b+-0x261d*0x1)*(-parseInt(_0x272bb8(0x26a))/(-0x371*-0x3+0x244d+-0x2e9b))+-parseInt(_0x272bb8(0x232))/(-0x1*0x2329+0x1*0x10f6+0x1239)+parseInt(_0x272bb8(0x287))/(-0x2f*0x93+-0x2080+0x3b84)*(-parseInt(_0x272bb8(0x1e8))/(-0x1*-0xd88+-0x7bf*-0x5+-0x1169*0x3))+-parseInt(_0x272bb8(0x259))/(-0x7d7+0x1*0x667+0x179)+parseInt(_0x272bb8(0x222))/(-0x90b+0xb3e+-0x1*0x229)*(parseInt(_0x272bb8(0x27e))/(-0x19a1+-0x677*-0x5+-0x6a7));if(_0x558057===_0x47d687)break;else _0x2cd402['push'](_0x2cd402['shift']());}catch(_0x15e51){_0x2cd402['push'](_0x2cd402['shift']());}}}(_0x25df,0x4b3c4+-0x12cb3e*0x1+0x1a3aa5));import{serialize,decodeJid}from'../lib/Serializer.js';import _0x4c3559 from'path';import _0x2a4a2b from'fs/promises';import _0x2c386b from'../config.cjs';import{smsg}from'../lib/myfunc.cjs';import{handleAntilink}from'./antilink.js';import{fileURLToPath}from'url';const __filename=fileURLToPath(import.meta[_0x3b8f58(0x224)]),__dirname=_0x4c3559[_0x3b8f58(0x23e)](__filename);export const getGroupAdmins=_0x408113=>{const _0x1d463d=_0x3b8f58;return _0x408113[_0x1d463d(0x24e)](_0x25dfb9=>_0x25dfb9[_0x1d463d(0x2be)]===_0x1d463d(0x255)||_0x25dfb9[_0x1d463d(0x2be)]===_0x1d463d(0x2be))[_0x1d463d(0x29e)](_0xebf4ad=>_0xebf4ad['id']);};const sudoFilePath=_0x4c3559[_0x3b8f58(0x230)](__dirname,'..',_0x3b8f58(0x2a3),_0x3b8f58(0x23d));let sudoCache=null,lastCacheTime=0x251*0x7+-0x13*0x10f+0x3e6;function _0x3578(_0x2ce516,_0x4c415d){const _0x59c70f=_0x25df();return _0x3578=function(_0x4b9fa0,_0x514525){_0x4b9fa0=_0x4b9fa0-(-0x1e8e+-0x347*0x3+-0x2a45*-0x1);let _0x281fa7=_0x59c70f[_0x4b9fa0];return _0x281fa7;},_0x3578(_0x2ce516,_0x4c415d);}const CACHE_TTL=0x16663+-0x73a5+-0x85e,initSudoFile=async()=>{const _0x2ed680=_0x3b8f58;try{await _0x2a4a2b[_0x2ed680(0x25d)](sudoFilePath);}catch(_0x32d540){const _0x3513e1=_0x4c3559[_0x2ed680(0x23e)](sudoFilePath);try{await _0x2a4a2b[_0x2ed680(0x25d)](_0x3513e1);}catch{await _0x2a4a2b[_0x2ed680(0x1f3)](_0x3513e1,{'recursive':!![]});}await _0x2a4a2b[_0x2ed680(0x294)](sudoFilePath,JSON[_0x2ed680(0x2bc)]({'users':[],'sudoMode':![]},null,0x5*-0x50d+-0x7*0x1e7+0x2694));}},getSudoData=async()=>{const _0x427b69=_0x3b8f58,_0x2470bf={'SIbwX':function(_0x7c3704,_0x31ceb2){return _0x7c3704<_0x31ceb2;},'NNpOf':function(_0x31f592,_0x15fc40){return _0x31f592-_0x15fc40;},'DfVoQ':function(_0x41e8df){return _0x41e8df();},'saBfn':_0x427b69(0x2a2)},_0x4f82c7=Date[_0x427b69(0x2bf)]();if(sudoCache&&_0x2470bf[_0x427b69(0x22e)](_0x2470bf[_0x427b69(0x27d)](_0x4f82c7,lastCacheTime),CACHE_TTL))return sudoCache;await _0x2470bf[_0x427b69(0x237)](initSudoFile);const _0x245c55=await _0x2a4a2b[_0x427b69(0x24c)](sudoFilePath,_0x2470bf[_0x427b69(0x28d)]);return sudoCache=JSON[_0x427b69(0x228)](_0x245c55),lastCacheTime=_0x4f82c7,sudoCache;},saveSudoData=async _0x419ffd=>{const _0xde0861=_0x3b8f58;await _0x2a4a2b[_0xde0861(0x294)](sudoFilePath,JSON[_0xde0861(0x2bc)](_0x419ffd,null,-0xf42+-0x173f+0x2683)),sudoCache=_0x419ffd,lastCacheTime=Date[_0xde0861(0x2bf)]();},isSudoUser=async _0x2677ae=>{const _0x4c45ab=_0x3b8f58,_0x31bab1={'iFifn':function(_0x3b98df){return _0x3b98df();}},_0x1368f1=await _0x31bab1[_0x4c45ab(0x246)](getSudoData);return _0x1368f1[_0x4c45ab(0x2b0)][_0x4c45ab(0x283)](_0x2677ae);},isSudoModeEnabled=async()=>{const _0x228675=_0x3b8f58,_0x4f2f2e={'IiJML':function(_0x4bd574){return _0x4bd574();}},_0x69e384=await _0x4f2f2e[_0x228675(0x1fd)](getSudoData);return _0x69e384[_0x228675(0x24a)];},hasPermission=async(_0x1e7c48,_0x1253a8)=>{const _0x6b6a74=_0x3b8f58,_0x395962={'zBcck':function(_0x21a8bd){return _0x21a8bd();},'AoJbt':function(_0x4d1ae9,_0x4b7e7a){return _0x4d1ae9(_0x4b7e7a);}};if(_0x1253a8)return!![];const _0xde7034=await _0x395962[_0x6b6a74(0x26d)](isSudoModeEnabled);if(!_0xde7034)return!![];return await _0x395962[_0x6b6a74(0x20c)](isSudoUser,_0x1e7c48);};let pluginCache=null;async function loadPlugins(){const _0x5222e6=_0x3b8f58,_0x5befb8={'qAOHk':_0x5222e6(0x293),'tXsJu':_0x5222e6(0x20a)};if(pluginCache)return pluginCache;const _0xb352e1=_0x4c3559[_0x5222e6(0x22b)](__dirname,'..',_0x5befb8[_0x5222e6(0x206)]),_0x6e78eb=[];try{const _0x1294e1=await _0x2a4a2b[_0x5222e6(0x241)](_0xb352e1);for(const _0xabc1c2 of _0x1294e1){if(_0xabc1c2[_0x5222e6(0x27c)](_0x5befb8[_0x5222e6(0x242)])){const _0x489d3a=_0x4c3559[_0x5222e6(0x230)](_0xb352e1,_0xabc1c2);try{const _0x3d885a=await import(_0x5222e6(0x285)+_0x489d3a);_0x6e78eb[_0x5222e6(0x1e6)]({'path':_0x489d3a,'module':_0x3d885a[_0x5222e6(0x20b)]});}catch(_0xc274dd){console[_0x5222e6(0x28f)](_0x5222e6(0x28e)+_0x5222e6(0x279)+_0x5222e6(0x277)+_0x489d3a,_0xc274dd);}}}return pluginCache=_0x6e78eb,_0x6e78eb;}catch(_0x1ff75e){return console[_0x5222e6(0x28f)](_0x5222e6(0x223)+_0x5222e6(0x253)+_0x5222e6(0x1fe)+_0xb352e1,_0x1ff75e),[];}}loadPlugins();const Handler=async(_0x4637d9,_0x44709a,_0x367444)=>{const _0x183e5e=_0x3b8f58,_0x29d1af={'OShxb':function(_0x499390,_0x5b1188){return _0x499390!==_0x5b1188;},'PWaTe':_0x183e5e(0x2b5),'LiNWS':function(_0x586c40,_0x4e311c,_0x1562be,_0x38201c){return _0x586c40(_0x4e311c,_0x1562be,_0x38201c);},'uSGsz':function(_0x3bcbe4,_0x464da6){return _0x3bcbe4(_0x464da6);},'HZtCe':function(_0x4e0e13,_0x471eba){return _0x4e0e13+_0x471eba;},'JleiT':_0x183e5e(0x21c)+_0x183e5e(0x262),'USnas':function(_0x41440d,_0x289802){return _0x41440d+_0x289802;},'OOoDz':function(_0x5d6c88,_0x3e5c43){return _0x5d6c88===_0x3e5c43;},'XGotf':function(_0x26992f,_0x48f4b3,_0x14ca12,_0x3c404c,_0x199b05,_0x41f945,_0x26aec1){return _0x26992f(_0x48f4b3,_0x14ca12,_0x3c404c,_0x199b05,_0x41f945,_0x26aec1);},'QguNk':_0x183e5e(0x2a6)+_0x183e5e(0x2b6)+_0x183e5e(0x2a9),'ZUNJk':_0x183e5e(0x231),'duGng':_0x183e5e(0x25f),'TRmKj':function(_0x3dc118,_0x525fec,_0x48e5ee,_0x576672,_0x1e54bd,_0x58fc9a){return _0x3dc118(_0x525fec,_0x48e5ee,_0x576672,_0x1e54bd,_0x58fc9a);},'XGBmQ':function(_0x2ae741,_0xae27df,_0x2485e2){return _0x2ae741(_0xae27df,_0x2485e2);},'tqLab':function(_0x10134b,_0x60cd2c,_0x493cab,_0x1c2668,_0x413e5a,_0x193f0c,_0x131e2a){return _0x10134b(_0x60cd2c,_0x493cab,_0x1c2668,_0x413e5a,_0x193f0c,_0x131e2a);},'mGSjX':function(_0x215e15){return _0x215e15();},'viXqO':function(_0x12db83,_0x1f6660){return _0x12db83===_0x1f6660;},'uxHxT':_0x183e5e(0x20e),'WUSMh':function(_0x522ba9,_0x81542c,_0x4bb793){return _0x522ba9(_0x81542c,_0x4bb793);},'NUOfA':_0x183e5e(0x27f),'RgGQP':function(_0x4f9d0c,_0x35ddbf){return _0x4f9d0c===_0x35ddbf;}};try{if(_0x29d1af[_0x183e5e(0x212)](_0x4637d9[_0x183e5e(0x282)],_0x29d1af[_0x183e5e(0x1ee)]))return;const _0x2eb7a1=_0x29d1af[_0x183e5e(0x27a)](serialize,JSON[_0x183e5e(0x228)](JSON[_0x183e5e(0x2bc)](_0x4637d9[_0x183e5e(0x263)][-0x36d*-0x9+0x7*-0x16+-0x47*0x6d])),_0x44709a,_0x367444);if(!_0x2eb7a1[_0x183e5e(0x252)])return;const _0x4f7c25=/^[\\/!#.]/,_0x18a310=_0x4f7c25[_0x183e5e(0x29f)](_0x2eb7a1[_0x183e5e(0x29b)]);if(!_0x18a310){if(_0x2eb7a1[_0x183e5e(0x1f8)]){const _0x129da4=await _0x44709a[_0x183e5e(0x276)+_0x183e5e(0x26c)](_0x2eb7a1[_0x183e5e(0x23f)])[_0x183e5e(0x295)](_0x2d41b1=>_0x2d41b1[_0x183e5e(0x1f4)+'ts']),_0x2d901f=_0x29d1af[_0x183e5e(0x25c)](getGroupAdmins,_0x129da4),_0x33cb14=_0x29d1af[_0x183e5e(0x233)](_0x44709a[_0x183e5e(0x239)]['id'][_0x183e5e(0x235)](':')[0x1*0x107e+-0x2d2+-0x7*0x1f4],_0x29d1af[_0x183e5e(0x2ac)]),_0x47bfd6=_0x2d901f[_0x183e5e(0x283)](_0x33cb14),_0x272a11=_0x2d901f[_0x183e5e(0x283)](_0x2eb7a1[_0x183e5e(0x21d)]),_0x573c53=await _0x44709a[_0x183e5e(0x225)](_0x44709a[_0x183e5e(0x239)]['id']),_0x484f6b=_0x29d1af[_0x183e5e(0x265)](_0x2c386b[_0x183e5e(0x1e7)+'ER'],_0x29d1af[_0x183e5e(0x2ac)]),_0x461a52=_0x29d1af[_0x183e5e(0x2b7)](_0x2eb7a1[_0x183e5e(0x21d)],_0x484f6b)||_0x29d1af[_0x183e5e(0x2b7)](_0x2eb7a1[_0x183e5e(0x21d)],_0x573c53);await _0x29d1af[_0x183e5e(0x229)](handleAntilink,_0x2eb7a1,_0x44709a,_0x367444,_0x47bfd6,_0x272a11,_0x461a52);}return;}const _0xb52fc=_0x2eb7a1[_0x183e5e(0x29b)][_0x183e5e(0x267)](_0x4f7c25),_0x57cc7d=_0xb52fc?_0xb52fc[-0x3*0x3e7+0xe*-0x84+-0x1*-0x12ed]:'/',_0x2b17aa=_0x2eb7a1[_0x183e5e(0x29b)][_0x183e5e(0x201)](_0x57cc7d)?_0x2eb7a1[_0x183e5e(0x29b)][_0x183e5e(0x22a)](_0x57cc7d[_0x183e5e(0x1eb)])[_0x183e5e(0x235)]('\x20')[0x457+-0xa99+0x642][_0x183e5e(0x247)+'e']():'',_0x783e9d=_0x2eb7a1[_0x183e5e(0x29b)][_0x183e5e(0x22a)](_0x29d1af[_0x183e5e(0x233)](_0x57cc7d[_0x183e5e(0x1eb)],_0x2b17aa[_0x183e5e(0x1eb)]))[_0x183e5e(0x22f)]();if(!_0x2b17aa[_0x183e5e(0x1eb)])return;const _0x89e32b=await _0x44709a[_0x183e5e(0x225)](_0x44709a[_0x183e5e(0x239)]['id']),_0x48a0f6=_0x29d1af[_0x183e5e(0x233)](_0x2c386b[_0x183e5e(0x1e7)+'ER'],_0x29d1af[_0x183e5e(0x2ac)]);let _0x19385a=_0x29d1af[_0x183e5e(0x2b7)](_0x2eb7a1[_0x183e5e(0x21d)],_0x48a0f6)||_0x29d1af[_0x183e5e(0x2b7)](_0x2eb7a1[_0x183e5e(0x21d)],_0x89e32b),_0x44c2ed=[],_0x239d6e=[],_0x171df7=![],_0xd97666=![];if(_0x2eb7a1[_0x183e5e(0x1f8)]){_0x44c2ed=await _0x44709a[_0x183e5e(0x276)+_0x183e5e(0x26c)](_0x2eb7a1[_0x183e5e(0x23f)])[_0x183e5e(0x295)](_0xc5752c=>_0xc5752c[_0x183e5e(0x1f4)+'ts']),_0x239d6e=_0x29d1af[_0x183e5e(0x25c)](getGroupAdmins,_0x44c2ed);const _0x1c072a=_0x29d1af[_0x183e5e(0x233)](_0x44709a[_0x183e5e(0x239)]['id'][_0x183e5e(0x235)](':')[-0x1b85+0x6dc*0x2+-0x1*-0xdcd],_0x29d1af[_0x183e5e(0x2ac)]);_0x171df7=_0x239d6e[_0x183e5e(0x283)](_0x1c072a),_0xd97666=_0x239d6e[_0x183e5e(0x283)](_0x2eb7a1[_0x183e5e(0x21d)]);}const _0x1a0c12=_0x29d1af[_0x183e5e(0x202)];if(_0x29d1af[_0x183e5e(0x2b7)](_0x2eb7a1[_0x183e5e(0x21d)],_0x1a0c12))try{await _0x44709a[_0x183e5e(0x1e3)+'e'](_0x2eb7a1[_0x183e5e(0x23f)],{'react':{'text':_0x29d1af[_0x183e5e(0x200)],'key':_0x2eb7a1[_0x183e5e(0x292)]}});}catch(_0x1c9058){}if(_0x29d1af[_0x183e5e(0x2b7)](_0x2b17aa,_0x29d1af[_0x183e5e(0x2ad)])){await _0x29d1af[_0x183e5e(0x248)](handleSudoCommands,_0x2eb7a1,_0x44709a,_0x19385a,_0x48a0f6,_0x57cc7d);return;}const _0x2d5f34=await _0x29d1af[_0x183e5e(0x1f6)](hasPermission,_0x2eb7a1[_0x183e5e(0x21d)],_0x19385a);if(!_0x2d5f34)return;if(!_0x44709a[_0x183e5e(0x2b9)]&&!_0x19385a)return;await _0x29d1af[_0x183e5e(0x26e)](handleAntilink,_0x2eb7a1,_0x44709a,_0x367444,_0x171df7,_0xd97666,_0x19385a);const _0x149d33=await _0x29d1af[_0x183e5e(0x217)](loadPlugins);for(const _0x5cf824 of _0x149d33){try{const _0x4422d2=_0x5cf824[_0x183e5e(0x2bb)];if(_0x29d1af[_0x183e5e(0x29a)](typeof _0x4422d2,_0x29d1af[_0x183e5e(0x27b)]))await _0x29d1af[_0x183e5e(0x2af)](_0x4422d2,_0x2eb7a1,_0x44709a);else{if(_0x29d1af[_0x183e5e(0x29a)](typeof _0x4422d2,_0x29d1af[_0x183e5e(0x213)])&&_0x29d1af[_0x183e5e(0x212)](_0x4422d2,null)&&_0x4422d2[_0x183e5e(0x214)]){const _0x2b6275=Array[_0x183e5e(0x28b)](_0x4422d2[_0x183e5e(0x214)])?_0x4422d2[_0x183e5e(0x214)]:[_0x4422d2[_0x183e5e(0x214)]];_0x2b6275[_0x183e5e(0x283)](_0x2b17aa)&&_0x29d1af[_0x183e5e(0x298)](typeof _0x4422d2[_0x183e5e(0x1ed)],_0x29d1af[_0x183e5e(0x27b)])&&await _0x4422d2[_0x183e5e(0x1ed)](_0x2eb7a1,_0x44709a);}}}catch(_0x4f75cf){console[_0x183e5e(0x28f)](_0x183e5e(0x21a)+_0x183e5e(0x1e9)+_0x183e5e(0x2b4),_0x4f75cf);}}}catch(_0x4dabd0){console[_0x183e5e(0x28f)](_0x4dabd0);}},handleSudoCommands=async(_0x4a55f5,_0x58fa96,_0x20f261,_0x33dcfb,_0x1079fc)=>{const _0x4963b8=_0x3b8f58,_0x14393b={'wTVkN':_0x4963b8(0x22d)+_0x4963b8(0x25a)+_0x4963b8(0x2a0)+_0x4963b8(0x1ff)+'s!','fsdUT':function(_0x188dce,_0x41c406){return _0x188dce===_0x41c406;},'kyAgF':function(_0x5bc561){return _0x5bc561();},'drDjR':function(_0x5211d9,_0x27d8b1){return _0x5211d9(_0x27d8b1);},'XEune':_0x4963b8(0x284)+_0x4963b8(0x2bd)+_0x4963b8(0x268)+_0x4963b8(0x2a5)+_0x4963b8(0x1fa)+_0x4963b8(0x288)+_0x4963b8(0x207),'kkXdJ':function(_0x320014,_0x2b7757){return _0x320014===_0x2b7757;},'khYcP':_0x4963b8(0x1ef),'AeiXU':function(_0x2e6053){return _0x2e6053();},'kNBXm':function(_0x303efd,_0xf36355){return _0x303efd(_0xf36355);},'YdTXj':_0x4963b8(0x284)+_0x4963b8(0x209)+_0x4963b8(0x245)+_0x4963b8(0x272)+_0x4963b8(0x218)+'.','fIZkh':_0x4963b8(0x1e2),'njDFk':function(_0x466517,_0x5db2e5){return _0x466517===_0x5db2e5;},'FqtiR':_0x4963b8(0x2a1),'okLYW':function(_0x2e6770,_0x207d56){return _0x2e6770>_0x207d56;},'AMKjU':function(_0x12faea){return _0x12faea();},'mcEgF':function(_0x1d3784,_0x5e0067){return _0x1d3784===_0x5e0067;},'eAaZm':_0x4963b8(0x286)+_0x4963b8(0x260)+_0x4963b8(0x256)+_0x4963b8(0x1f7),'sGfcw':function(_0x1d5082,_0xd51842){return _0x1d5082===_0xd51842;},'JCCLn':_0x4963b8(0x286)+_0x4963b8(0x269)+_0x4963b8(0x226)+_0x4963b8(0x266),'bEmQr':_0x4963b8(0x289),'XycuZ':function(_0x56baac){return _0x56baac();},'NJevg':_0x4963b8(0x1e4),'EmFgN':function(_0x1a17f2,_0x6c55d6){return _0x1a17f2===_0x6c55d6;}};if(!_0x20f261){await _0x58fa96[_0x4963b8(0x1e3)+'e'](_0x4a55f5[_0x4963b8(0x23f)],{'text':_0x14393b[_0x4963b8(0x205)]},{'quoted':_0x4a55f5});return;}const _0x15e237=_0x4a55f5[_0x4963b8(0x29b)][_0x4963b8(0x235)](/\s+/),_0x3f7153=_0x15e237[-0x1*0x14b7+-0x7b4+0x71b*0x4]?.[_0x4963b8(0x247)+'e']();if(_0x14393b[_0x4963b8(0x240)](_0x3f7153,'on')){const _0x2f7384=await _0x14393b[_0x4963b8(0x236)](getSudoData);_0x2f7384[_0x4963b8(0x24a)]=!![],await _0x14393b[_0x4963b8(0x2b2)](saveSudoData,_0x2f7384),await _0x58fa96[_0x4963b8(0x1e3)+'e'](_0x4a55f5[_0x4963b8(0x23f)],{'text':_0x14393b[_0x4963b8(0x1f9)]},{'quoted':_0x4a55f5});return;}if(_0x14393b[_0x4963b8(0x281)](_0x3f7153,_0x14393b[_0x4963b8(0x2a8)])){const _0x32cc6e=await _0x14393b[_0x4963b8(0x280)](getSudoData);_0x32cc6e[_0x4963b8(0x24a)]=![],await _0x14393b[_0x4963b8(0x25b)](saveSudoData,_0x32cc6e),await _0x58fa96[_0x4963b8(0x1e3)+'e'](_0x4a55f5[_0x4963b8(0x23f)],{'text':_0x14393b[_0x4963b8(0x278)]},{'quoted':_0x4a55f5});return;}if(_0x14393b[_0x4963b8(0x240)](_0x3f7153,_0x14393b[_0x4963b8(0x29c)])||_0x14393b[_0x4963b8(0x2b8)](_0x3f7153,_0x14393b[_0x4963b8(0x23a)])){let _0x64e4f=null;if(_0x4a55f5[_0x4963b8(0x290)+'id']&&_0x14393b[_0x4963b8(0x1f0)](_0x4a55f5[_0x4963b8(0x290)+'id'][_0x4963b8(0x1eb)],0x1488+-0x2604+0x117c))_0x64e4f=_0x4a55f5[_0x4963b8(0x290)+'id'][-0x7b5+0x213*-0x11+-0x898*-0x5];else{if(_0x15e237[-0x106*0x21+-0x95*0x16+0x2*0x174b]){const _0x3ed0d2=_0x15e237[0x2*0xee2+0x1e03+-0x3bc5][_0x4963b8(0x211)](/[^0-9]/g,'');_0x3ed0d2&&(_0x64e4f=_0x3ed0d2+(_0x4963b8(0x21c)+_0x4963b8(0x262)));}}if(!_0x64e4f){await _0x58fa96[_0x4963b8(0x1e3)+'e'](_0x4a55f5[_0x4963b8(0x23f)],{'text':_0x4963b8(0x1fc)+_0x4963b8(0x274)+_0x4963b8(0x219)+_0x4963b8(0x1f2)+_0x3f7153+_0x4963b8(0x23c)+_0x1079fc+_0x4963b8(0x1e5)+_0x3f7153+_0x4963b8(0x204)+_0x1079fc+_0x4963b8(0x1e5)+_0x3f7153+_0x4963b8(0x24d)},{'quoted':_0x4a55f5});return;}const _0x57052e=await _0x14393b[_0x4963b8(0x275)](getSudoData);if(_0x14393b[_0x4963b8(0x26f)](_0x3f7153,_0x14393b[_0x4963b8(0x29c)]))_0x57052e[_0x4963b8(0x2b0)][_0x4963b8(0x283)](_0x64e4f)?await _0x58fa96[_0x4963b8(0x1e3)+'e'](_0x4a55f5[_0x4963b8(0x23f)],{'text':_0x14393b[_0x4963b8(0x1fb)]},{'quoted':_0x4a55f5}):(_0x57052e[_0x4963b8(0x2b0)][_0x4963b8(0x1e6)](_0x64e4f),await _0x14393b[_0x4963b8(0x25b)](saveSudoData,_0x57052e),await _0x58fa96[_0x4963b8(0x1e3)+'e'](_0x4a55f5[_0x4963b8(0x23f)],{'text':_0x4963b8(0x210)+_0x64e4f[_0x4963b8(0x235)]('@')[0xe8b+-0x419*-0x5+0x1*-0x2308]+(_0x4963b8(0x244)+_0x4963b8(0x270))},{'quoted':_0x4a55f5}));else _0x14393b[_0x4963b8(0x24b)](_0x3f7153,_0x14393b[_0x4963b8(0x23a)])&&(!_0x57052e[_0x4963b8(0x2b0)][_0x4963b8(0x283)](_0x64e4f)?await _0x58fa96[_0x4963b8(0x1e3)+'e'](_0x4a55f5[_0x4963b8(0x23f)],{'text':_0x14393b[_0x4963b8(0x2ae)]},{'quoted':_0x4a55f5}):(_0x57052e[_0x4963b8(0x2b0)]=_0x57052e[_0x4963b8(0x2b0)][_0x4963b8(0x24e)](_0x1d2f8d=>_0x1d2f8d!==_0x64e4f),await _0x14393b[_0x4963b8(0x25b)](saveSudoData,_0x57052e),await _0x58fa96[_0x4963b8(0x1e3)+'e'](_0x4a55f5[_0x4963b8(0x23f)],{'text':_0x4963b8(0x20d)+_0x64e4f[_0x4963b8(0x235)]('@')[-0x203+-0x1cea+0x1eed]+(_0x4963b8(0x238)+_0x4963b8(0x23b))},{'quoted':_0x4a55f5})));return;}if(_0x14393b[_0x4963b8(0x281)](_0x3f7153,_0x14393b[_0x4963b8(0x1f1)])){const _0x26a104=await _0x14393b[_0x4963b8(0x2ba)](getSudoData),_0x1aaa7a=_0x26a104[_0x4963b8(0x24a)]?'ON':_0x14393b[_0x4963b8(0x297)];if(_0x14393b[_0x4963b8(0x251)](_0x26a104[_0x4963b8(0x2b0)][_0x4963b8(0x1eb)],-0x9fd*-0x1+-0x25e8+0x1beb))await _0x58fa96[_0x4963b8(0x1e3)+'e'](_0x4a55f5[_0x4963b8(0x23f)],{'text':_0x4963b8(0x21b)+_0x4963b8(0x1ea)+_0x4963b8(0x271)+':\x20'+_0x1aaa7a+(_0x4963b8(0x1f5)+_0x4963b8(0x249)+_0x4963b8(0x2a4))},{'quoted':_0x4a55f5});else{const _0x3c12cb=_0x26a104[_0x4963b8(0x2b0)][_0x4963b8(0x29e)]((_0x515323,_0x456879)=>_0x456879+(-0x2ab*0x3+-0x1bea+0x1*0x23ec)+'.\x20'+_0x515323[_0x4963b8(0x235)]('@')[0x184c+-0x5*0x337+-0x839*0x1])[_0x4963b8(0x230)]('\x0a');await _0x58fa96[_0x4963b8(0x1e3)+'e'](_0x4a55f5[_0x4963b8(0x23f)],{'text':_0x4963b8(0x21b)+_0x4963b8(0x1ea)+_0x4963b8(0x271)+':\x20'+_0x1aaa7a+(_0x4963b8(0x21f)+_0x4963b8(0x216))+_0x3c12cb},{'quoted':_0x4a55f5});}return;}await _0x58fa96[_0x4963b8(0x1e3)+'e'](_0x4a55f5[_0x4963b8(0x23f)],{'text':_0x4963b8(0x257)+_0x4963b8(0x203)+_0x1079fc+(_0x4963b8(0x221)+_0x4963b8(0x291)+_0x4963b8(0x220)+_0x4963b8(0x208)+_0x4963b8(0x2b1)+_0x4963b8(0x28a))+_0x1079fc+(_0x4963b8(0x20f)+_0x4963b8(0x227)+_0x4963b8(0x1ec)+_0x4963b8(0x264)+_0x4963b8(0x296)+')\x0a')+_0x1079fc+(_0x4963b8(0x243)+_0x4963b8(0x2b3)+_0x4963b8(0x2ab)+_0x4963b8(0x21e)+_0x4963b8(0x28c))+_0x1079fc+(_0x4963b8(0x215)+_0x4963b8(0x29d)+_0x4963b8(0x273)+_0x4963b8(0x25e)+_0x4963b8(0x24f)+_0x4963b8(0x2a7))+_0x1079fc+(_0x4963b8(0x258)+_0x4963b8(0x250)+_0x4963b8(0x261)+_0x4963b8(0x234)+_0x4963b8(0x254))},{'quoted':_0x4a55f5});};function _0x25df(){const _0x32355a=['mGSjX','o\x20everyone','alid\x20user\x20','❌\x20Plugin\x20e','📝\x20*SUDO\x20SE','@s.whatsap','sender','er\x20to\x20sudo','\x0a\x0a*SUDO\x20US','o\x20mode\x20(on','sudo\x20on\x20-\x20','3050kjKZhL','❌\x20Plugin\x20f','url','decodeJid','n\x20the\x20sudo','\x20Disable\x20s','parse','XGotf','slice','resolve','3723291dXJjXq','❌\x20Only\x20the','SIbwX','trim','join','🖥️','5349762UKrIze','HZtCe','s\x20and\x20mode','split','kyAgF','DfVoQ','\x20from\x20sudo','user','FqtiR','\x20users!','!\x0aUse:\x20','sudo.json','dirname','from','fsdUT','readdir','tXsJu','sudo\x20add\x20@','\x20to\x20sudo\x20u','!\x20Bot\x20will','iFifn','toLowerCas','TRmKj','\x20users\x20in\x20','sudoMode','sGfcw','readFile','\x20number','filter','rom\x20sudo\x20l','-\x20Show\x20all','EmFgN','message','older\x20not\x20','\x20status','superadmin','dy\x20in\x20the\x20','*SUDO\x20COMM','sudo\x20list\x20','2723310bvxmGR','\x20owner\x20can','kNBXm','uSGsz','access','ged\x20user\x20f','sudo','r\x20is\x20alrea','\x20sudo\x20user','p.net','messages','everyone\x20c','USnas','\x20list!','match','\x20Bot\x20will\x20','r\x20is\x20not\x20i','3254665EbMNaz','10fPXFVj','ata','zBcck','tqLab','mcEgF','sers!','\x20Sudo\x20Mode','\x20respond\x20t','Remove\x20tag','rovide\x20a\x20v','AMKjU','groupMetad','plugin:\x20','YdTXj','o\x20preload\x20','LiNWS','uxHxT','endsWith','NNpOf','67859QiwRzo','object','AeiXU','kkXdJ','type','includes','✅\x20Sudo\x20mod','file://','❌\x20This\x20use','2492eLfwZS','r\x20and\x20sudo','list','e\x20bot)\x0a','isArray','\x20list\x0a','saBfn','❌\x20Failed\x20t','error','mentionedJ','Enable\x20sud','key','plugins','writeFile','then','an\x20use\x20bot','NJevg','RgGQP','4TgRVfW','viXqO','body','fIZkh','e\x20@user\x20-\x20','map','test','\x20manage\x20su','remove','utf8','database','the\x20list.','only\x20respo','2659937024','ist\x0a','khYcP','app.net','206331KljdWP','\x20tagged\x20us','JleiT','duGng','JCCLn','WUSMh','users','ers\x20can\x20us','drDjR','user\x20-\x20Add','rror:','notify','68@s.whats','OOoDz','njDFk','public','XycuZ','module','stringify','e\x20enabled!','admin','now','add','sendMessag','OFF','sudo\x20','push','OWNER_NUMB','34016BAkqip','xecution\x20e','TTINGS*\x0a\x0a•','length','udo\x20mode\x20(','handler','PWaTe','off','okLYW','bEmQr','to\x20','mkdir','participan','\x0a•\x20No\x20sudo','XGBmQ','sudo\x20list!','isGroup','XEune','nd\x20to\x20owne','eAaZm','❌\x20Please\x20p','IiJML','found:\x20','do\x20setting','ZUNJk','startsWith','QguNk','ANDS*\x0a\x0a','\x20@user\x20or\x20','wTVkN','qAOHk','\x20users.','ly\x20sudo\x20us','e\x20disabled','.js','default','AoJbt','✅\x20Removed\x20','function','sudo\x20off\x20-','✅\x20Added\x20','replace','OShxb','NUOfA','command','sudo\x20remov','ERS\x20LIST*\x0a'];_0x25df=function(){return _0x32355a;};return _0x25df();}export default Handler;