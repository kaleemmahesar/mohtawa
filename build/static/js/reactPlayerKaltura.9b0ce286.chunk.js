(self.webpackChunkmotawa_app=self.webpackChunkmotawa_app||[]).push([[463],{8892:(e,t,r)=>{var a,s=Object.create,l=Object.defineProperty,o=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,i=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,p=(e,t,r,a)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let s of n(t))u.call(e,s)||s===r||l(e,s,{get:()=>t[s],enumerable:!(a=o(t,s))||a.enumerable});return e},h=(e,t,r)=>(((e,t,r)=>{t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>f}),e.exports=(a=d,p(l({},"__esModule",{value:!0}),a));var c=((e,t,r)=>(r=null!=e?s(i(e)):{},p(!t&&e&&e.__esModule?r:l(r,"default",{value:e,enumerable:!0}),e)))(r(5043)),y=r(2206),m=r(1520);class f extends c.Component{constructor(){super(...arguments),h(this,"callPlayer",y.callPlayer),h(this,"duration",null),h(this,"currentTime",null),h(this,"secondsLoaded",null),h(this,"mute",(()=>{this.callPlayer("mute")})),h(this,"unmute",(()=>{this.callPlayer("unmute")})),h(this,"ref",(e=>{this.iframe=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,y.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then((e=>{this.iframe&&(this.player=new e.Player(this.iframe),this.player.on("ready",(()=>{setTimeout((()=>{this.player.isReady=!0,this.player.setLoop(this.props.loop),this.props.muted&&this.player.mute(),this.addListeners(this.player,this.props),this.props.onReady()}),500)})))}),this.props.onError)}addListeners(e,t){e.on("play",t.onPlay),e.on("pause",t.onPause),e.on("ended",t.onEnded),e.on("error",t.onError),e.on("timeupdate",(e=>{let{duration:t,seconds:r}=e;this.duration=t,this.currentTime=r}))}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){return c.default.createElement("iframe",{ref:this.ref,src:this.props.url,frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;",referrerPolicy:"no-referrer-when-downgrade"})}}h(f,"displayName","Kaltura"),h(f,"canPlay",m.canPlay.kaltura)}}]);
//# sourceMappingURL=reactPlayerKaltura.9b0ce286.chunk.js.map