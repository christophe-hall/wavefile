var z="function"==typeof Object.defineProperties?Object.defineProperty:function(d,h,g){d!=Array.prototype&&d!=Object.prototype&&(d[h]=g.value)},D="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function E(d,h){if(h){var g=D;d=d.split(".");for(var a=0;a<d.length-1;a++){var b=d[a];b in g||(g[b]={});g=g[b]}d=d[d.length-1];a=g[d];h=h(a);h!=a&&null!=h&&z(g,d,{configurable:!0,writable:!0,value:h})}}
E("Object.is",function(d){return d?d:function(d,g){return d===g?0!==d||1/d===1/g:d!==d&&g!==g}});E("Array.prototype.includes",function(d){return d?d:function(d,g){var a=this;a instanceof String&&(a=String(a));var b=a.length;for(g=g||0;g<b;g++)if(a[g]==d||Object.is(a[g],d))return!0;return!1}});
(function(d){function h(a){if(g[a])return g[a].b;var b=g[a]={Fa:a,ra:!1,b:{}};d[a].call(b.b,b,b.b,h);b.ra=!0;return b.b}var g={};h.j=d;h.g=g;h.c=function(a,b){h.f(a)||Object.defineProperty(a,"a",{configurable:!1,enumerable:!0,get:b})};h.h=function(a){var b=a&&a.ta?function(){return a["default"]}:function(){return a};h.c(b,b);return b};h.f=function(a){return Object.prototype.hasOwnProperty.call(a,"a")};h.i="";return h(h.m=1)})([function(d,h,g){function a(c,a,l){a.be&&A(c,a.offset);var e=c.length;if(10!=
l)for(var b=0;b<e;b++)c[b]=parseInt(c[b],l);l=[];e-=a.offset-1;for(b=0;b<e;b+=a.offset)l.push(w(c,b));return l}function b(c,a,l){for(var e=0,b=[],d=c.length,f=0;f<d;f++)e=x(b,c[f],e);a.be&&A(b,a.offset);if(10!=l)for(c=(2==l?8:2)+1,d=b.length,a=0;a<d;a++)b[a]=b[a].toString(l),b[a]=Array(c-b[a].length).join("0")+b[a];return b}function q(c,a){return r.read(c,a)}function t(c,a){c=r.read(c,a);a=(c&31744)>>10;var l=c&1023;return(a?Math.pow(2,a-15)*(1+l/1024):l/1024*.00006103515625)*(c>>15?-1:1)}function p(c,
a){u[0]=r.read(c,a);return y[0]}function f(c,a){u[0]=r.read(c,a);u[1]=r.read(c,a+4);return B[0]}function n(c,a){for(var l="",e=0;e<r.offset;e++)l+=String.fromCharCode(c[a+e]);return l}function k(c,a,l){return r.write(c,a,l)}function e(c,a,l){y[0]=a;var e=u[0];a=e>>16&32768;var b=e>>12&2047;e=e>>23&255;103<=e&&(a=(a|e-112<<10|b>>1)+(b&1));c[l++]=a&255;c[l++]=a>>>8&255;return l}function m(c,a,l){y[0]=a;return r.write(c,u[0],l)}function v(c,a,l){B[0]=a;l=r.write(c,u[0],l);return r.write(c,u[1],l)}function c(c,
a,l){for(var e=0;e<a.length;e++)c[l++]=a.charCodeAt(e);return l}function l(a){if(!a)throw Error("Undefined type.");if(a["float"]){if(-1==[16,32,64].indexOf(a.bits))throw Error("Not a supported float type.");}else if(a["char"]){if(8>a.bits||a.bits%2)throw Error("Wrong offset for type char.");}else if(1>a.bits||53<a.bits)throw Error("Not a supported type.");a.offset=8>a.bits?1:Math.ceil(a.bits/8);a["float"]?16==a.bits?w=t:32==a.bits?w=p:64==a.bits&&(w=f):a["char"]?w=n:w=q;a["float"]?16==a.bits?x=e:
32==a.bits?x=m:64==a.bits&&(x=v):a["char"]?x=c:x=k;a["char"]?r.offset=8>a.bits?1:Math.ceil(a.bits/8):r=new F(64==a.bits?32:a.bits,a["float"]?!1:a.signed)}function C(c,a){c.constructor==String&&(c=c.length>=a.offset?c.slice(0,a.offset):"");return c}var A=g(4),F=g(5);h=new Int8Array(8);var u=new Uint32Array(h.buffer),y=new Float32Array(h.buffer),B=new Float64Array(h.buffer),w,x,r={};d.b.va={bits:8,"char":!0};d.b.Ea={bits:32,"char":!0};d.b.ua={bits:1};d.b.Ia={bits:2,signed:!0};d.b.Va={bits:2};d.b.Na=
{bits:4,signed:!0};d.b.$a={bits:4};d.b.Sa={bits:8,signed:!0};d.b.fb={bits:8};d.b.Ga={bits:16,signed:!0};d.b.Ta={bits:16};d.b.ya={bits:16,"float":!0};d.b.Ja={bits:24,signed:!0};d.b.Wa={bits:24};d.b.La={bits:32,signed:!0};d.b.Ya={bits:32};d.b.Aa={bits:32,"float":!0};d.b.Oa={bits:40,signed:!0};d.b.ab={bits:40};d.b.Qa={bits:48,signed:!0};d.b.cb={bits:48};d.b.Ca={bits:64,"float":!0};d.b.Ha={bits:16,signed:!0,be:!0};d.b.Ua={bits:16,be:!0};d.b.za={bits:16,"float":!0,be:!0};d.b.Ka={bits:24,signed:!0,be:!0};
d.b.Xa={bits:24,be:!0};d.b.Ma={bits:32,signed:!0,be:!0};d.b.Za={bits:32,be:!0};d.b.Ba={bits:32,"float":!0,be:!0};d.b.Pa={bits:40,signed:!0,be:!0};d.b.bb={bits:40,be:!0};d.b.Ra={bits:48,signed:!0,be:!0};d.b.eb={bits:48,be:!0};d.b.Da={bits:64,"float":!0,be:!0};d.b.a=function(c,a){var e=void 0===e?10:e;l(a);var d=[];if(void 0===c)return d;c=C(c,a);return b([c],a,e)};d.b.l=function(c,e){var b=void 0===b?10:b;l(e);return(c=a(c.slice(0,e.offset),e,b))?c[0]:e["char"]?"":null};d.b.M=function(c,a){var e=void 0===
e?10:e;l(a);if(a["char"])for(var d=c.length,f=0;f<d;f++)c[f]=C(c[f],a);return b(c,a,e)};d.b.sa=function(c,e){var b=void 0===b?10:b;l(e);return a(c,e,b)}},function(d,h,g){function a(c){this.container="";this.chunkSize=0;this.format="";this.fmt={chunkId:"",chunkSize:0,audioFormat:0,numChannels:0,sampleRate:0,byteRate:0,blockAlign:0,bitsPerSample:0,cbSize:0,validBitsPerSample:0,dwChannelMask:0,subformat:[]};this.fact={chunkId:"",chunkSize:0,dwSampleLength:0};this.cue={chunkId:"",chunkSize:0,dwCuePoints:0,
points:[]};this.bext={chunkId:"",chunkSize:0,description:"",originator:"",originatorReference:"",originationDate:"",originationTime:"",timeReference:[],version:0,UMID:"",loudnessValue:0,loudnessRange:0,maxTruePeakLevel:0,maxMomentaryLoudness:0,maxShortTermLoudness:0,reserved:"",codingHistory:""};this.ds64={chunkId:"",chunkSize:0,riffSizeHigh:0,riffSizeLow:0,dataSizeHigh:0,dataSizeLow:0,originationTime:0,sampleCountHigh:0,sampleCountLow:0};this.data={chunkId:"",chunkSize:0,samples:[]};this.LIST=[];
this.junk={chunkId:"",chunkSize:0,chunkData:[]};this.isInterleaved=!0;this.bitDepth="0";this.u={4:17,8:1,"8a":6,"8m":7,16:1,24:1,32:1,"32f":3,40:65534,48:65534,64:3};this.f=0;this.enforceFact=!1;c&&this.fromBuffer(c)}var b=g(2),q=g(3),t=g(6),p=g(7),f=g(0),n=g(10).encode,k={bits:16},e={bits:32},m={bits:32,"char":!0},v={bits:8,"char":!0};a.prototype.fromScratch=function(c,a,e,b,d){d=void 0===d?{}:d;d.container||(d.container="RIFF");var l=((parseInt(e,10)-1|7)+1)/8;this.B();this.bitDepth=e;this.container=
d.container;this.chunkSize=36+b.length*l;this.format="WAVE";this.fmt.chunkId="fmt ";this.fmt.chunkSize=16;this.fmt.byteRate=c*l*a;this.fmt.blockAlign=c*l;this.fmt.audioFormat=this.u[e]?this.u[e]:65534;this.fmt.numChannels=c;this.fmt.sampleRate=a;this.fmt.bitsPerSample=parseInt(e,10);this.fmt.cbSize=0;this.fmt.validBitsPerSample=0;this.data.chunkId="data";this.data.samples=b;0<b.length&&b[0].constructor===Array&&(this.isInterleaved=!1,this.interleave());this.data.chunkSize=b.length*l;"4"==e&&(this.chunkSize=
40+b.length,this.fmt.chunkSize=20,this.fmt.byteRate=4055,this.fmt.blockAlign=256,this.fmt.bitsPerSample=4,this.fmt.cbSize=2,this.fmt.validBitsPerSample=505,this.fact.chunkId="fact",this.fact.chunkSize=4,this.fact.dwSampleLength=2*b.length,this.data.chunkSize=b.length);if("8a"==e||"8m"==e)this.chunkSize=40+b.length,this.fmt.chunkSize=20,this.fmt.cbSize=2,this.fmt.validBitsPerSample=8,this.fact.chunkId="fact",this.fact.chunkSize=4,this.fact.dwSampleLength=b.length;65534==this.fmt.audioFormat&&(this.chunkSize=
60+b.length*l,this.fmt.chunkSize=40,this.fmt.bitsPerSample=(parseInt(e,10)-1|7)+1,this.fmt.cbSize=22,this.fmt.validBitsPerSample=parseInt(e,10),this.fmt.dwChannelMask=0,this.fmt.subformat=[1,1048576,2852126848,1905997824]);this.A();this.m()};a.prototype.fromBuffer=function(c){this.B();this.ja(c);c=q.read(c);this.da(c.subChunks);this.fa(c.subChunks);this.ea(c.subChunks);this.aa(c.subChunks);this.ba(c.subChunks);this.ca(c.subChunks);this.N(c.subChunks);this.ha(c.subChunks);this.O()};a.prototype.toBuffer=
function(){this.A();this.o();return this.P()};a.prototype.toBase64=function(){return n(this.toBuffer())};a.prototype.toDataURI=function(){return"data:audio/wav;base64,"+this.toBase64()};a.prototype.toRIFF=function(){"RF64"==this.container?this.fromScratch(this.fmt.numChannels,this.fmt.sampleRate,this.bitDepth,this.data.samples):(this.container="RIFF",this.m())};a.prototype.toRIFX=function(){"RF64"==this.container?this.fromScratch(this.fmt.numChannels,this.fmt.sampleRate,this.bitDepth,this.data.samples,
{container:"RIFX"}):(this.container="RIFX",this.m())};a.prototype.toBitDepth=function(c,a){var l=c,e=this.bitDepth;void 0===a||a||(l=this.F(c),e=this.F(this.bitDepth));this.o();this.w();b.toBitDepth(this.data.samples,e,l);this.fromScratch(this.fmt.numChannels,this.fmt.sampleRate,c,this.data.samples,{container:this.j()})};a.prototype.interleave=function(){if(!this.isInterleaved){for(var c=[],a=this.data.samples[0].length,e=0;e<a;e++)for(var b=0;b<this.data.samples.length;b++)c.push(this.data.samples[b][e]);
this.data.samples=c;this.isInterleaved=!0}};a.prototype.deInterleave=function(){if(this.isInterleaved){var c=[],a;for(a=0;a<this.fmt.numChannels;a++)c[a]=[];a=0;for(var e;a<this.data.samples.length;){for(e=0;e<this.fmt.numChannels;e++)c[e].push(this.data.samples[a+e]);a+=e}this.data.samples=c;this.isInterleaved=!1}};a.prototype.toIMAADPCM=function(){if(8E3!=this.fmt.sampleRate)throw Error("Only 8000 Hz files can be compressed as IMA-ADPCM.");if(1!=this.fmt.numChannels)throw Error("Only mono files can be compressed as IMA-ADPCM.");
this.s();this.fromScratch(this.fmt.numChannels,this.fmt.sampleRate,"4",t.encode(this.data.samples),{container:this.j()})};a.prototype.fromIMAADPCM=function(c){c=void 0===c?"16":c;this.fromScratch(this.fmt.numChannels,this.fmt.sampleRate,"16",t.decode(this.data.samples,this.fmt.blockAlign),{container:this.j()});"16"!=c&&this.toBitDepth(c)};a.prototype.toALaw=function(){this.s();this.o();this.fromScratch(this.fmt.numChannels,this.fmt.sampleRate,"8a",p.G.encode(this.data.samples),{container:this.j()})};
a.prototype.fromALaw=function(c){c=void 0===c?"16":c;this.fromScratch(this.fmt.numChannels,this.fmt.sampleRate,"16",p.G.decode(this.data.samples),{container:this.j()});"16"!=c&&this.toBitDepth(c)};a.prototype.toMuLaw=function(){this.s();this.o();this.fromScratch(this.fmt.numChannels,this.fmt.sampleRate,"8m",p.H.encode(this.data.samples),{container:this.j()})};a.prototype.fromMuLaw=function(c){c=void 0===c?"16":c;this.fromScratch(this.fmt.numChannels,this.fmt.sampleRate,"16",p.H.decode(this.data.samples),
{container:this.j()});"16"!=c&&this.toBitDepth(c)};a.prototype.F=function(c){"32f"!=c&&(c=((parseInt(c,10)-1|7)+1).toString());return c};a.prototype.A=function(){this.na();this.pa();this.qa()};a.prototype.na=function(){if(!(this.u[this.bitDepth]||8<parseInt(this.bitDepth,10)&&54>parseInt(this.bitDepth,10)))throw Error("Invalid bit depth.");};a.prototype.pa=function(){var c=this.fmt.numChannels*this.fmt.bitsPerSample/8;if(1>this.fmt.numChannels||65535<c)throw Error("Invalid number of channels.");};
a.prototype.qa=function(){var c=this.fmt.bitsPerSample/8*this.fmt.numChannels*this.fmt.sampleRate;if(1>this.fmt.sampleRate||4294967295<c)throw Error("Invalid sample rate.");};a.prototype.B=function(){this.fmt.cbSize=0;this.fmt.validBitsPerSample=0;this.fact.chunkId="";this.ds64.chunkId=""};a.prototype.s=function(){this.w();"16"!=this.bitDepth&&this.toBitDepth("16")};a.prototype.w=function(){"8a"==this.bitDepth?this.fromALaw():"8m"==this.bitDepth?this.fromMuLaw():"4"==this.bitDepth&&this.fromIMAADPCM()};
a.prototype.o=function(){this.isInterleaved||this.interleave()};a.prototype.m=function(){var c="RIFX"===this.container;k.be=c;e.be=c};a.prototype.i=function(c,a,e){e=void 0===e?!1:e;for(var l=[],b=0;b<c.length;b++)if(c[b].chunkId==a)if(e)l.push(c[b]);else return c[b];return"LIST"==a?l.length?l:null:null};a.prototype.ja=function(c){this.f=0;this.container=this.g(c,4);if(-1===["RIFF","RIFX","RF64"].indexOf(this.container))throw Error("Not a supported format.");this.m();this.chunkSize=this.c(c,e);this.format=
this.g(c,4);if("WAVE"!=this.format)throw Error("Could not find the 'WAVE' format identifier");};a.prototype.fa=function(c){if(c=this.i(c,"fmt ")){this.f=0;var a=c.chunkData;this.fmt.chunkId=c.chunkId;this.fmt.chunkSize=c.chunkSize;this.fmt.audioFormat=this.c(a,k);this.fmt.numChannels=this.c(a,k);this.fmt.sampleRate=this.c(a,e);this.fmt.byteRate=this.c(a,e);this.fmt.blockAlign=this.c(a,k);this.fmt.bitsPerSample=this.c(a,k);this.ga(a)}else throw Error("Could not find the 'fmt ' chunk");};a.prototype.ga=
function(c){16<this.fmt.chunkSize&&(this.fmt.cbSize=this.c(c,k),18<this.fmt.chunkSize&&(this.fmt.validBitsPerSample=this.c(c,k),20<this.fmt.chunkSize&&(this.fmt.dwChannelMask=this.c(c,e),this.fmt.subformat=[this.c(c,e),this.c(c,e),this.c(c,e),this.c(c,e)])))};a.prototype.ea=function(c){if(c=this.i(c,"fact"))this.f=0,this.fact.chunkId=c.chunkId,this.fact.chunkSize=c.chunkSize,this.fact.dwSampleLength=this.c(c.chunkData,e);else if(this.enforceFact)throw Error("Could not find the 'fact' chunk");};a.prototype.ba=
function(c){var a=this.i(c,"cue ");if(a)for(this.f=0,c=a.chunkData,this.cue.chunkId=a.chunkId,this.cue.chunkSize=a.chunkSize,this.cue.dwCuePoints=this.c(c,e),a=0;a<this.cue.dwCuePoints;a++)this.cue.points.push({dwName:this.c(c,e),dwPosition:this.c(c,e),fccChunk:this.g(c,4),dwChunkStart:this.c(c,e),dwBlockStart:this.c(c,e),dwSampleOffset:this.c(c,e)})};a.prototype.ca=function(c){if(c=this.i(c,"data"))this.data.chunkId="data",this.data.chunkSize=c.chunkSize,this.ka(c.chunkData);else throw Error("Could not find the 'data' chunk");
};a.prototype.aa=function(c){if(c=this.i(c,"bext")){this.f=0;var a=c.chunkData;this.bext.chunkId=c.chunkId;this.bext.chunkSize=c.chunkSize;this.bext.description=this.g(a,256);this.bext.originator=this.g(a,32);this.bext.originatorReference=this.g(a,32);this.bext.originationDate=this.g(a,10);this.bext.originationTime=this.g(a,8);this.bext.timeReference=[this.c(a,e),this.c(a,e)];this.bext.version=this.c(a,k);this.bext.UMID=this.g(a,64);this.bext.loudnessValue=this.c(a,k);this.bext.loudnessRange=this.c(a,
k);this.bext.maxTruePeakLevel=this.c(a,k);this.bext.maxMomentaryLoudness=this.c(a,k);this.bext.maxShortTermLoudness=this.c(a,k);this.bext.reserved=this.g(a,180);this.bext.codingHistory=this.g(a,this.bext.chunkSize-602)}};a.prototype.da=function(c){if(c=this.i(c,"ds64")){this.f=0;var a=c.chunkData;this.ds64.chunkId=c.chunkId;this.ds64.chunkSize=c.chunkSize;this.ds64.riffSizeHigh=this.c(a,e);this.ds64.riffSizeLow=this.c(a,e);this.ds64.dataSizeHigh=this.c(a,e);this.ds64.dataSizeLow=this.c(a,e);this.ds64.originationTime=
this.c(a,e);this.ds64.sampleCountHigh=this.c(a,e);this.ds64.sampleCountLow=this.c(a,e)}else if("RF64"==this.container)throw Error("Could not find the 'ds64' chunk");};a.prototype.N=function(a){if(a=this.i(a,"LIST",!0))for(var c=0;c<a.length;c++){var e=a[c];this.LIST.push({chunkId:e.chunkId,chunkSize:e.chunkSize,format:e.format,chunkData:e.chunkData,subChunks:[]});for(var b=0;b<e.subChunks.length;b++)this.ia(e.subChunks[b],e.format)}};a.prototype.ia=function(a,b){"adtl"==b?-1<["labl","note"].indexOf(a.chunkId)&&
this.LIST[this.LIST.length-1].subChunks.push({chunkId:a.chunkId,chunkSize:a.chunkSize,dwName:f.l(a.chunkData.slice(0,4),e),value:this.D(a.chunkData.slice(4))}):"INFO"==b&&this.LIST[this.LIST.length-1].subChunks.push({chunkId:a.chunkId,chunkSize:a.chunkSize,value:this.D(a.chunkData.slice(0))})};a.prototype.ha=function(a){if(a=this.i(a,"junk"))this.junk={chunkId:a.chunkId,chunkSize:a.chunkSize,chunkData:a.chunkData}};a.prototype.D=function(a){for(var c="",e=0;e<a.length&&0!=a[e];e++)c+=f.l([a[e]],v);
return c};a.prototype.g=function(a,e){for(var c="",b=0;b<e;b++)c+=f.l([a[this.f]],v),this.f++;return c};a.prototype.c=function(a,e){var c=e.bits/8;a=f.l(a.slice(this.f,this.f+c),e);this.f+=c;return a};a.prototype.h=function(a,e){var c=void 0===c?!0:c;a=f.M(a,v);if(c)for(c=a.length;c<e;c++)a.push(0);return a};a.prototype.la=function(){var a={be:"RIFX"===this.container,bits:4==this.fmt.bitsPerSample?8:this.fmt.bitsPerSample,"float":3==this.fmt.audioFormat?!0:!1};a.signed=8==a.bits?!1:!0;a=f.M(this.data.samples,
a);a.length%2&&a.push(0);return a};a.prototype.ka=function(a){var c={be:"RIFX"===this.container,bits:4==this.fmt.bitsPerSample?8:this.fmt.bitsPerSample,"float":3==this.fmt.audioFormat?!0:!1};c.signed=8==c.bits?!1:!0;this.data.samples=f.sa(a,c)};a.prototype.R=function(){var a=[];return this.bext.chunkId?a.concat(f.a(this.bext.chunkId,m),f.a(602+this.bext.codingHistory.length,e),this.h(this.bext.description,256),this.h(this.bext.originator,32),this.h(this.bext.originatorReference,32),this.h(this.bext.originationDate,
10),this.h(this.bext.originationTime,8),f.a(this.bext.timeReference[0],e),f.a(this.bext.timeReference[1],e),f.a(this.bext.version,k),this.h(this.bext.UMID,64),f.a(this.bext.loudnessValue,k),f.a(this.bext.loudnessRange,k),f.a(this.bext.maxTruePeakLevel,k),f.a(this.bext.maxMomentaryLoudness,k),f.a(this.bext.maxShortTermLoudness,k),this.h(this.bext.reserved,180),this.h(this.bext.codingHistory,this.bext.codingHistory.length)):a};a.prototype.U=function(){var a=[];this.ds64.chunkId&&(a=a.concat(f.a(this.ds64.chunkId,
m),f.a(this.ds64.chunkSize,e),f.a(this.ds64.riffSizeHigh,e),f.a(this.ds64.riffSizeLow,e),f.a(this.ds64.dataSizeHigh,e),f.a(this.ds64.dataSizeLow,e),f.a(this.ds64.originationTime,e),f.a(this.ds64.sampleCountHigh,e),f.a(this.ds64.sampleCountLow,e)));return a};a.prototype.S=function(){var a=[];return this.cue.chunkId?a.concat(f.a(this.cue.chunkId,m),f.a(this.v()-8,e),f.a(this.cue.dwCuePoints,e),this.T()):a};a.prototype.T=function(){for(var a=[],b=0;b<this.cue.dwCuePoints;b++)a=a.concat(f.a(this.cue.points[b].dwName,
e),f.a(this.cue.points[b].dwPosition,e),f.a(this.cue.points[b].fccChunk,m),f.a(this.cue.points[b].dwChunkStart,e),f.a(this.cue.points[b].dwBlockStart,e),f.a(this.cue.points[b].dwSampleOffset,e));return a};a.prototype.V=function(){var a=[];return this.fact.chunkId?a.concat(f.a(this.fact.chunkId,m),f.a(this.fact.chunkSize,e),f.a(this.fact.dwSampleLength,e)):a};a.prototype.X=function(){if(this.fmt.chunkId)return[].concat(f.a(this.fmt.chunkId,m),f.a(this.fmt.chunkSize,e),f.a(this.fmt.audioFormat,k),f.a(this.fmt.numChannels,
k),f.a(this.fmt.sampleRate,e),f.a(this.fmt.byteRate,e),f.a(this.fmt.blockAlign,k),f.a(this.fmt.bitsPerSample,k),this.Y());throw Error("Could not find the 'fmt ' chunk");};a.prototype.Y=function(){var a=[];16<this.fmt.chunkSize&&(a=a.concat(f.a(this.fmt.cbSize,k)));18<this.fmt.chunkSize&&(a=a.concat(f.a(this.fmt.validBitsPerSample,k)));20<this.fmt.chunkSize&&(a=a.concat(f.a(this.fmt.dwChannelMask,e)));24<this.fmt.chunkSize&&(a=a.concat(f.a(this.fmt.subformat[0],e),f.a(this.fmt.subformat[1],e),f.a(this.fmt.subformat[2],
e),f.a(this.fmt.subformat[3],e)));return a};a.prototype.C=function(a){for(var c=12,e=0;e<this.LIST[a].subChunks.length;e++)"adtl"==this.LIST[a].format?c+=this.LIST[a].subChunks[e].value.length+13:"INFO"==this.LIST[a].format&&(c+=this.LIST[a].subChunks[e].value.length+9),c%2&&c++;return c};a.prototype.getLISTSize_=function(){for(var a=0,e=0;e<this.LIST.length;e++)a+=this.C(e);return a};a.prototype.getLISTBytes_=function(){for(var a=[],b=0;b<this.LIST.length;b++){var d=this.C(b)-8;a=a.concat(f.a(this.LIST[b].chunkId,
m),f.a(d,e),f.a(this.LIST[b].format,m),this.$(this.LIST[b].subChunks,this.LIST[b].format))}return a};a.prototype.$=function(a,b){for(var c=[],d=0;d<a.length;d++)c=c.concat(f.a(a[d].chunkId,m)),"INFO"==b?(c=c.concat(f.a(a[d].value.length+1,e),this.h(a[d].value,a[d].value.length)),c.push(0)):"adtl"==b&&(c=c.concat(f.a(a[d].value.length+4+1,e),f.a(a[d].dwName,e),this.h(a[d].value,a[d].value.length)),c.push(0)),c.length%2&&c.push(0);return c};a.prototype.Z=function(){var a=[];return this.junk.chunkId?
a.concat(f.a(this.junk.chunkId,m),f.a(this.junk.chunkData.length,e),this.junk.chunkData):a};a.prototype.j=function(){return"RF64"==this.container?"RIFF":this.container};a.prototype.O=function(){3==this.fmt.audioFormat&&32==this.fmt.bitsPerSample?this.bitDepth="32f":6==this.fmt.audioFormat?this.bitDepth="8a":7==this.fmt.audioFormat?this.bitDepth="8m":this.bitDepth=this.fmt.bitsPerSample.toString()};a.prototype.v=function(){for(var a=12,e=0;e<this.cue.points.length;e++)a+=24;return a};a.prototype.W=
function(){var a=0,e=((parseInt(this.bitDepth,10)-1|7)+1)/8;-1<[1,3].indexOf(this.fmt.audioFormat)?a=36+this.data.samples.length*e:-1<["8a","8m","4"].indexOf(this.bitDepth)?a=40+this.data.samples.length:a=60+this.data.samples.length*e;this.bext.chunkId&&(a+=610+this.bext.codingHistory.length);this.cue.chunkId&&(a+=this.v());this.fact.chunkId&&(a+=12);this.LIST.length&&(a+=this.getLISTSize_());this.ds64.chunkId&&(a+=36);this.junk.chunkId&&(a+=this.junk.chunkData.length+8);return a%2?a+1:a};a.prototype.P=
function(){return new Uint8Array([].concat(f.a(this.container,m),f.a(this.W(),e),f.a(this.format,m),this.Z(),this.U(),this.R(),this.X(),this.V(),f.a(this.data.chunkId,m),f.a(this.data.chunkSize,e),this.la(),this.S(),this.getLISTBytes_()))};window.WaveFile=a},function(d){function h(a,b,e,d){p(b);p(e);d=d||a;var f=t(b,e),c={L:Math.pow(2,parseInt(b,10))/2,J:Math.pow(2,parseInt(e,10))/2,K:Math.pow(2,parseInt(b,10))/2-1,I:Math.pow(2,parseInt(e,10))/2-1},g=a.length;if("8"==b)for(b=0;b<g;b++)d[b]=a[b]-=
128;for(b=0;b<g;b++)d[b]=f(a[b],c);if("8"==e)for(a=0;a<g;a++)d[a]=d[a]+=128}function g(a,b){return a=0<a?parseInt(a/b.K*b.I,10):parseInt(a/b.L*b.J,10)}function a(a,b){return parseInt(0<a?a*b.I:a*b.J,10)}function b(a,b){return 0<a?a/b.K:a/b.L}function q(a){f[0]=a;return f[0]}function t(d,f){var e;["32f","64"].includes(d)?["32f","64"].includes(f)?e=q:e=a:e=["32f","64"].includes(f)?b:g;d==f&&(e=function(a){return a});return e}function p(a){if("32f"!=a&&"64"!=a&&("8">parseInt(a,10)||"53"<parseInt(a,10)))throw Error("Invalid bit depth.");
}var f=new Float32Array(1);d.b=h;d.b.toBitDepth=h},function(d,h,g){function a(a,d){d=void 0===d?!1:d;n.be="RIFX"==a.chunkId;a=f.a(a.chunkId,k).concat(f.a(a.chunkSize,n),f.a(a.format,k),b(a.subChunks));d||(a=new Uint8Array(a));return a}function b(e){for(var b=[],d=0;d<e.length;)b="LIST"==e[d].chunkId?b.concat(a(e[d],!0)):b.concat(f.a(e[d].chunkId,k),f.a(e[d].chunkSize,n),e[d].chunkData),d++;return b}function q(a){for(var b=[],e=p(a,12);e<=a.length-8;)b.push(t(a,e)),e+=8+b[b.length-1].chunkSize;return b}
function t(a,b){b=p(a,b);var e={chunkId:f.l(a.slice(b,b+4),k),chunkSize:f.l(a.slice(b+4,b+8),n)};"LIST"==e.chunkId?(e.format=f.l(a.slice(b+8,b+12),k),e.subChunks=q(a.slice(b))):e.chunkData=a.slice(b+8,b+8+e.chunkSize);return e}function p(a,b){for(;0==a[b]||0==a[b+1]||0==a[b+2]||0==a[b+3];)b++;return b}var f=g(0),n={bits:32},k={bits:32,"char":!0};d.b.read=function(a){a=[].slice.call(a);var b=f.l(a.slice(0,4),k);n.be="RIFX"==b;return{chunkId:b,chunkSize:f.l(a.slice(4,8),n),format:f.l(a.slice(8,12),
k),subChunks:q(a)}};d.b.write=a},function(d){d.b=function(d,g){for(var a=d.length,b=0;b<a;){for(var q=d,h=b,p=0,f=g-1,n=parseInt(g/2,10);p<n;){var k=q[h+p];q[h+p]=q[h+f];q[h+f]=k;p++;f--}b+=g}}},function(d){function h(d,a){this.c=d;this.w=void 0===a?!1:a;this.offset=0;this.min=-Infinity;this.max=Infinity;this.g=this.c;this.h=255;this.j()}h.prototype.read=function(d,a){a=void 0===a?0:a;for(var b=0,g=this.offset-1;0<g;)b|=d[g+a]<<8*g,g--;b=(d[a]|b)>>>0;return this.f(this.i(b))};h.prototype.write=function(d,
a,b){b=void 0===b?0:b;a=this.f(a);d[b++]=a&255;for(var g=2;g<=this.offset;g++)d[b++]=Math.floor(a/Math.pow(2,8*(g-1)))&255;return b};h.prototype.B=function(d,a,b){a=this.f(a);b=this.v(d,a,void 0===b?0:b);for(var g=2;g<this.offset;g++)d[b++]=Math.floor(a/Math.pow(2,8*(g-1)))&255;8<this.c&&(d[b++]=Math.floor(a/Math.pow(2,8*(this.offset-1)))&this.h);return b};h.prototype.m=function(d,a){a=void 0===a?0:a;for(var b="",g=0;g<this.offset;){var h=d[a+g].toString(2);b=Array(9-h.length).join("0")+h+b;g++}return this.f(this.i(parseInt(b,
2)))};h.prototype.j=function(){this.A();this.u();this.o();this.s();this.offset=8>this.c?1:Math.ceil(this.g/8);if(this.g!=this.c||8>this.c||32<this.c)this.write=this.B,this.read=this.m};h.prototype.i=function(d){d>this.max&&(d-=2*this.max+2);return d};h.prototype.f=function(d){d>this.max?d=this.max:d<this.min&&(d=this.min);return d};h.prototype.s=function(){var d=Math.pow(2,this.c);this.w?(this.max=d/2-1,this.min=-d/2):(this.max=d-1,this.min=0)};h.prototype.A=function(){if(1>this.c||64<this.c)throw Error("Not a supported type.");
};h.prototype.u=function(){8<this.c&&(this.g=(this.c-1|7)+1)};h.prototype.o=function(){var d=8-(this.g-this.c);this.h=Math.pow(2,0<d?d:8)-1};h.prototype.v=function(d,a,b){8>this.c?d[b++]=0>a?a+Math.pow(2,this.c):a:d[b++]=a&255;return b};d.b=h},function(d){function h(a){return 32768<a?a-65536:a}function g(a){var c=a-f;0<=c?a=0:(a=8,c=-c);var b=p[n],e=b>>3;c>b&&(a|=4,c-=b,e+=b);b>>=1;c>b&&(a|=2,c-=b,e+=b);b>>=1;c>b&&(a|=1,e+=b);c=a;f=c&8?f-e:f+e;-32768>f?f=-32768:32767<f&&(f=32767);n+=t[c&7];0>n?n=
0:88<n&&(n=88);return a}function a(a){var c=0;a&4&&(c+=m);a&2&&(c+=m>>1);a&1&&(c+=m>>2);c+=m>>3;a&8&&(c=-c);k+=c;32767<k?k=32767:-32767>k&&(k=-32767);e+=t[a];0>e?e=0:88<e&&(e=88);m=p[e];return k}function b(a){var c=a[0];g(c);var b=[];b.push(c&255);b.push(c>>8&255);b.push(n);b.push(0);for(c=3;c<a.length;c+=2){var e=g(a[c]),d=g(a[c+1]);b.push(d<<4|e)}for(;256>b.length;)b.push(0);return b}function q(b){k=h(b[1]<<8|b[0]);e=b[2];m=p[e];for(var c=[k,h(b[3]<<8|b[2])],d=4;d<b.length;d++){var f=b[d],g=f>>
4;c.push(a(g<<4^f));c.push(a(g))}return c}var t=[-1,-1,-1,-1,2,4,6,8,-1,-1,-1,-1,2,4,6,8],p=[7,8,9,10,11,12,13,14,16,17,19,21,23,25,28,31,34,37,41,45,50,55,60,66,73,80,88,97,107,118,130,143,157,173,190,209,230,253,279,307,337,371,408,449,494,544,598,658,724,796,876,963,1060,1166,1282,1411,1552,1707,1878,2066,2272,2499,2749,3024,3327,3660,4026,4428,4871,5358,5894,6484,7132,7845,8630,9493,10442,11487,12635,13899,15289,16818,18500,20350,22385,24623,27086,29794,32767],f=0,n=0,k=0,e=0,m=7;d.b.encode=function(a){for(var c=
[],e=[],d=0;d<a.length;d++)if(e.push(a[d]),0==d%505&&0!=d||d==a.length-1)c=c.concat(b(e)),e=[];return c};d.b.decode=function(a,b){b=void 0===b?256:b;for(var c=[],e=[],d=0;d<a.length;d++)0==d%b&&0!=d&&(c=c.concat(q(e)),e=[]),e.push(a[d]);return c};d.b.xa=b;d.b.wa=q},function(d,h,g){d.b.G=g(8);d.b.H=g(9)},function(d){function h(a){var b=[1,1,2,2,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],d;a=-32768==a?-32767:a;(d=~a>>8&128)||(a*=-1);32635<a&&(a=32635);256<=a?(b=b[a>>8&127],a=b<<4|a>>b+3&15):a>>=4;return a^d^85}function g(a){var b=0;a^=85;a&128&&(a&=-129,b=-1);var d=((a&240)>>4)+4;a=4!=d?1<<d|(a&15)<<d-4|1<<d-5:a<<1|1;return-8*(0===b?a:-a)}d.b.oa=h;d.b.ma=g;d.b.encode=function(a){for(var b=[],d=0;d<a.length;d++)b.push(h(a[d]));return b};d.b.decode=function(a){for(var b=[],d=0;d<a.length;d++)b.push(g(a[d]));
return b}},function(d){function h(a){if(0>a){a=132-a;var b=127}else a+=132,b=255;32767<a&&(a=32767);var d=0;var g=a>>7;g&240&&(g>>=4,d+=4);g&12&&(g>>=2,d+=2);g&2&&(d+=1);g=d;return(g<<4|a>>g+3&15)^b}function g(a){a=~a;var b=((a&15)<<3)+132<<((a&112)>>4);return a&128?132-b:b-132}d.b.oa=h;d.b.ma=g;d.b.encode=function(a){for(var b=[],d=0;d<a.length;d++)b.push(h(a[d]));return b};d.b.decode=function(a){for(var b=[],d=0;d<a.length;d++)b.push(g(a[d]));return b}},function(d,h){(function(){for(var d=new Uint8Array(256),
a=0;64>a;a++)d["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(a)]=a;h.encode=function(a){a=new Uint8Array(a);var b,d=a.length,g="";for(b=0;b<d;b+=3)g+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a[b]>>2],g+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(a[b]&3)<<4|a[b+1]>>4],g+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(a[b+1]&15)<<2|a[b+2]>>6],g+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a[b+
2]&63];2===d%3?g=g.substring(0,g.length-1)+"\x3d":1===d%3&&(g=g.substring(0,g.length-2)+"\x3d\x3d");return g};h.decode=function(a){var b=.75*a.length,g=a.length,h=0;"\x3d"===a[a.length-1]&&(b--,"\x3d"===a[a.length-2]&&b--);var f=new ArrayBuffer(b),n=new Uint8Array(f);for(b=0;b<g;b+=4){var k=d[a.charCodeAt(b)];var e=d[a.charCodeAt(b+1)];var m=d[a.charCodeAt(b+2)];var v=d[a.charCodeAt(b+3)];n[h++]=k<<2|e>>4;n[h++]=(e&15)<<4|m>>2;n[h++]=(m&3)<<6|v&63}return f}})()}]);