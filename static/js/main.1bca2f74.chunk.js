(this.webpackJsonpbirthday=this.webpackJsonpbirthday||[]).push([[0],{165:function(e,t,o){},166:function(e,t,o){"use strict";o.r(t);var a=o(3),n=o(4),r=o(6),s=o(5),l=o(2),i=o(7),c=o(8),h=o(0),u=o.n(h),d=o(61),p=o.n(d),b=o(168),v=o(24),m=o.n(v),f=o(9),y=o.n(f),P=o(1),g=o.n(P),O=o(38),E={photo:void 0,number:void 0,caption:void 0,subcaption:void 0,thumbnail:void 0},j=g.a.oneOf(["forwards","backwards"]),k=g.a.shape({photo:g.a.string.isRequired,number:g.a.number,caption:g.a.string,subcaption:g.a.string,thumbnail:g.a.string}),T=g.a.oneOfType([g.a.arrayOf(g.a.string.isRequired),g.a.arrayOf(k)]),w={noPhotosProvided:"No photos to show",showPhotoList:"Show photo list",hidePhotoList:"Hide photo list"},N=o(23);Object(O.forbidExtraProps)({activePhotoIndex:O.nonNegativeInteger,activePhotoPressed:g.a.func,direction:j,nextButtonPressed:g.a.func,prevButtonPressed:g.a.func,showThumbnails:g.a.bool,photos:T,preloadSize:O.nonNegativeInteger,wrap:g.a.bool,phrases:g.a.shape(function e(){return Object.keys(e).reduce((function(e,t){return Object(c.a)({},e,Object(N.a)({},t,g.a.oneOfType([g.a.string,g.a.func,g.a.node])))}),{})}()),light:g.a.bool,backgroundColor:g.a.string});var x=function(){},B={activePhotoIndex:0,activePhotoPressed:x,direction:"forwards",nextButtonPressed:x,prevButtonPressed:x,showThumbnails:!0,photos:[],preloadSize:5,wrap:!1,phrases:w,light:!1,backgroundColor:"rgba(0,0,0,1)"},S=(Object(O.forbidExtraProps)({onLoad:g.a.func,onError:g.a.func}),{onLoad:x,onError:x}),C=o(62),I=function(e){return e.show&&u.a.createElement("div",{className:"loading-spinner"})};I.defaultProps={show:!0};var L=I,M=Object(c.a)({},S,{style:null,className:null,alt:""}),R={loading:!0,withError:!1},D=function(e){function t(e){var o;Object(a.a)(this,t),o=Object(r.a)(this,Object(s.a)(t).call(this,e));var n=e.src;return o.state=Object(c.a)({currentSrc:n},R),o.onLoad=o.onLoad.bind(Object(l.a)(o)),o.onError=o.onError.bind(Object(l.a)(o)),o}return Object(i.a)(t,e),Object(n.a)(t,[{key:"onLoad",value:function(){var e=this,t=this.props.onLoad;setTimeout((function(){t(),e.setState({loading:!1,withError:!1})}),100)}},{key:"onError",value:function(){var e=this.props.onError;e(),this.setState({loading:!1,withError:!0})}},{key:"renderImage",value:function(){var e=this.props,t=e.alt,o=e.src,a=e.style,n=e.className,r=this.state,s=r.loading,l=r.withError,i=[n,"media-image"],c=[];return s&&c.push(u.a.createElement(L,{key:".pictureLoadingSpinner"})),l||c.push(u.a.createElement("img",{alt:t,key:".pictureComponent",className:y()(i),onLoad:this.onLoad,onError:this.onError,src:o,style:a})),c}},{key:"render",value:function(){var e=["picture",this.state.loading&&"loading"],t=this.renderImage();return u.a.createElement("div",{className:y()(e)},t)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var o=e.src;return o!==t.currentSrc?Object(c.a)({currentSrc:o},R):null}}]),t}(h.Component);D.defaultProps=M;var z=D,G=Object(c.a)({},S,{photo:null,onPress:x,onTouchStart:x,onTouchMove:x,onTouchEnd:x}),K=function(e){function t(e){var o;return Object(a.a)(this,t),(o=Object(r.a)(this,Object(s.a)(t).call(this,e))).onPress=o.onPress.bind(Object(l.a)(o)),o}return Object(i.a)(t,e),Object(n.a)(t,[{key:"onPress",value:function(){var e=this.props.onPress;e()}},{key:"renderPhoto",value:function(){var e=this.props,t=e.photo,o=e.onTouchStart,a=e.onTouchMove,n=e.onTouchEnd,r=Object(C.a)(e,["photo","onTouchStart","onTouchMove","onTouchEnd"]);if(!t)return null;var s=m()(r,["onPress"]),l=s.onLoad,i=s.onError,c=s.style;return u.a.createElement("button",{type:"button",onClick:this.onPress,className:"photo-button",onTouchStart:o,onTouchMove:a,onTouchEnd:n},u.a.createElement(z,{alt:t.caption||"",className:"photo",src:t.photo,onLoad:l,onError:i,style:c}))}},{key:"render",value:function(){var e=y()("gallery-media-photo","gallery-media-photo--block","gallery-media-cover"),t=this.renderPhoto();return u.a.createElement("ul",{className:"gallery-images--ul"},u.a.createElement("li",{className:e},t))}}]),t}(h.PureComponent);K.defaultProps=G;var F=K,W={width:100,height:67},X={active:!1,photo:null,onPress:x,number:0},q=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.active,o=e.photo,a=e.onPress,n=e.number,r=y()("thumbnail-button",t&&"active");return u.a.createElement("button",{type:"button","aria-label":o.caption,className:r,"data-photo-index":n,onClick:a,disabled:!1},u.a.createElement(z,{alt:o.caption,src:o.thumbnail||o.photo,className:"thumbnail",style:W}))}}]),t}(h.PureComponent);q.defaultProps=X;var J=q,H={isOpened:!0,onPress:x,phrases:w},U=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isOpened,o=e.onPress,a=e.phrases,n=a.showPhotoList,r=a.hidePhotoList,s=t?r:n,l=y()("gallery-thumbnails--toggle",t?"hide":"open");return u.a.createElement("button",{type:"button",className:l,onClick:o},s)}}]),t}(h.PureComponent);U.defaultProps=H;var A=U;function Q(e){return 100*e+(10*e-10)}var V={showThumbnails:!0,current:0,photos:[],onPress:x,phrases:w},Y=function(e){function t(e){var o;Object(a.a)(this,t);var n=(o=Object(r.a)(this,Object(s.a)(t).call(this,e))).props,i=n.showThumbnails,c=n.photos;return o.state={showThumbnails:i},o.thumbnailsWrapperRef=null,o.thumbnailsListRef=null,o.hasMoreThanOnePhoto=c.length>1,o.onThumbnailPress=o.onThumbnailPress.bind(Object(l.a)(o)),o.setGalleryFigcaptionRef=o.setGalleryFigcaptionRef.bind(Object(l.a)(o)),o.setGalleryThubmanilsRef=o.setGalleryThubmanilsRef.bind(Object(l.a)(o)),o.toggleThumbnails=o.toggleThumbnails.bind(Object(l.a)(o)),o}return Object(i.a)(t,e),Object(n.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.current;t!==e.current&&this.setThumbnailsWrapperScrollLeft(t)}},{key:"onThumbnailPress",value:function(e){var t=this.props,o=t.onPress,a=t.photos,n=parseInt(e.currentTarget.dataset.photoIndex,10);n>=0&&n<=a.length-1&&o(n)}},{key:"setThumbnailsWrapperScrollLeft",value:function(e){var t=this.props.photos,o=this.thumbnailsWrapperRef.getBoundingClientRect(),a=function(e,t,o){var a=100*e+10*e-(o.width/2-50),n=0;if(a<0)return n;var r=o.width/110;return n=t-(e+1)<Math.round(r/2)?Q(t)-o.width:a,-Math.abs(n)}(e,t.length,o);this.thumbnailsListRef.style.marginLeft="".concat(a,"px")}},{key:"getPhotoByIndex",value:function(e){return this.props.photos[e]}},{key:"setGalleryFigcaptionRef",value:function(e){this.thumbnailsWrapperRef=e}},{key:"setGalleryThubmanilsRef",value:function(e){this.thumbnailsListRef=e}},{key:"toggleThumbnails",value:function(){this.setState((function(e){return{showThumbnails:!e.showThumbnails}}))}},{key:"renderThumbnail",value:function(e,t,o){var a=this.props.current;return u.a.createElement(J,{active:t===a,photo:e,onPress:o,number:t})}},{key:"render",value:function(){var e=this,t=this.props,o=t.current,a=t.photos,n=t.phrases,r=this.state.showThumbnails,s=y()("gallery-figcaption",!r&&"hide"),l=this.getPhotoByIndex(o),i=Q(a.length);return u.a.createElement("figcaption",{className:s},u.a.createElement("div",{className:"gallery-figcaption--content"},u.a.createElement("div",{className:"gallery-figcaption--inner"},u.a.createElement("div",{className:"gallery-figcaption--info"},u.a.createElement("div",{className:"caption-left"},l.caption&&u.a.createElement("h3",{className:"photo-caption"},l.caption),l.subcaption&&u.a.createElement("p",{className:"photo-subcaption"},l.subcaption)),this.hasMoreThanOnePhoto&&u.a.createElement("div",{className:"caption-right"},u.a.createElement(A,{phrases:n,isOpened:r,onPress:this.toggleThumbnails}))),this.hasMoreThanOnePhoto&&u.a.createElement("div",{className:"gallery-figcaption--thumbnails","aria-hidden":!1,ref:this.setGalleryFigcaptionRef},u.a.createElement("div",{className:"caption-thumbnails",style:{width:i}},u.a.createElement("ul",{className:"thumbnails-list",ref:this.setGalleryThubmanilsRef},a.map((function(t,o){return u.a.createElement("li",{key:t.photo},e.renderThumbnail(t,o,e.onThumbnailPress))}))))))))}}]),t}(h.PureComponent);Y.defaultProps=V;var Z=Y,$={height:"2.8em",width:"2.8em",fill:"rgba(255,255,255,1)"},_={fill:"rgba(1,1,1,1)"},ee={arrow:null,onPress:x,label:"",className:null,disabled:!1,light:!1},te=function(e){function t(e){var o;return Object(a.a)(this,t),(o=Object(r.a)(this,Object(s.a)(t).call(this,e))).onButtonPress=o.onButtonPress.bind(Object(l.a)(o)),o}return Object(i.a)(t,e),Object(n.a)(t,[{key:"onButtonPress",value:function(){return(0,this.props.onPress)(),!1}},{key:"render",value:function(){var e=this.props,t=e.arrow,o=e.label,a=e.className,n=e.disabled,r=e.light;return u.a.createElement("button",{type:"button",className:y()("gallery-control",a),onClick:this.onButtonPress,disabled:n,"aria-label":o},u.a.createElement("svg",{viewBox:"0 0 18 18",role:"presentation",focusable:"false","aria-hidden":"true",style:Object(c.a)({},$,{},r&&_)},u.a.createElement("path",{d:t,fillRule:"evenodd"})))}}]),t}(u.a.PureComponent);te.defaultProps=ee;var oe=te,ae={onPress:x,disabled:!1,light:!1},ne=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onPress,o=e.disabled,a=e.light;return u.a.createElement(oe,{className:"gallery-control--prev",onPress:t,arrow:"m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z",disabled:o,light:a})}}]),t}(h.PureComponent);ne.defaultProps=ae;var re=ne,se={onPress:x,disabled:!1,light:!1},le=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onPress,o=e.disabled,a=e.light;return u.a.createElement(oe,{className:"gallery-control--next",onPress:t,arrow:"m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z",disabled:o,light:a})}}]),t}(h.PureComponent);le.defaultProps=se;var ie=le,ce=Object(c.a)({},B),he=function(e){function t(e){var o;Object(a.a)(this,t);var n=(o=Object(r.a)(this,Object(s.a)(t).call(this,e))).props,i=n.activePhotoIndex,c=n.photos,h=n.wrap;return o.state={activePhotoIndex:i,hidePrevButton:h&&0===i,hideNextButton:h&&i===c.length-1,controlsDisabled:!0,touchStartInfo:null,touchEndInfo:null,touchMoved:!1},o.lastPreloadIndex=0,o.preloadedPhotos=[],o.hasPhotos=c.length>0,o.hasMoreThanOnePhoto=c.length>1,o.move=o.move.bind(Object(l.a)(o)),o.prev=o.prev.bind(Object(l.a)(o)),o.next=o.next.bind(Object(l.a)(o)),o.onPhotoLoad=o.onPhotoLoad.bind(Object(l.a)(o)),o.onPhotoError=o.onPhotoError.bind(Object(l.a)(o)),o.onPhotoPress=o.onPhotoPress.bind(Object(l.a)(o)),o.onTouchStart=o.onTouchStart.bind(Object(l.a)(o)),o.onTouchMove=o.onTouchMove.bind(Object(l.a)(o)),o.onTouchEnd=o.onTouchEnd.bind(Object(l.a)(o)),o.onThumbnailPress=o.onThumbnailPress.bind(Object(l.a)(o)),o.onPrevButtonPress=o.onPrevButtonPress.bind(Object(l.a)(o)),o.onNextButtonPress=o.onNextButtonPress.bind(Object(l.a)(o)),o}return Object(i.a)(t,e),Object(n.a)(t,[{key:"onNextButtonPress",value:function(){var e=this.props.nextButtonPressed;this.next(),e()}},{key:"onPrevButtonPress",value:function(){var e=this.props.prevButtonPressed;this.prev(),e()}},{key:"onPhotoLoad",value:function(){return this.setState({controlsDisabled:!1})}},{key:"onPhotoError",value:function(){return this.setState({controlsDisabled:!1})}},{key:"onPhotoPress",value:function(){var e=this.props.activePhotoPressed;this.move("next"),e()}},{key:"onTouchStart",value:function(e){this.setState({touchStartInfo:e.targetTouches[0]})}},{key:"onTouchMove",value:function(e){this.setState({touchMoved:!0,touchEndInfo:e.targetTouches[0]})}},{key:"onTouchEnd",value:function(){var e=this.state,t=e.touchStartInfo,o=e.touchEndInfo;e.touchMoved&&(t.screenX<o.screenX?this.onPrevButtonPress():t.screenX>o.screenX&&this.onNextButtonPress()),this.setState({touchMoved:!1})}},{key:"onThumbnailPress",value:function(e){this.to(e)}},{key:"getPhotoByIndex",value:function(e){return this.props.photos[e]}},{key:"getItemByDirection",value:function(e,t){var o=this.props,a=o.photos,n=o.wrap,r="next"===e,s="prev"===e,l=a.length-1;if((s&&0===t||r&&t===l)&&n)return t;var i=(t+(s?-1:1))%a.length;return-1===i?a.length-1:i}},{key:"getStyles",value:function(){return{backgroundColor:this.props.backgroundColor}}},{key:"prev",value:function(){return this.move("prev")}},{key:"next",value:function(){return this.move("next")}},{key:"move",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=this.state.activePhotoIndex,a=!1!==t?t:this.getItemByDirection(e,o);this.wrapCheck(e,a),this.setState({activePhotoIndex:a})}},{key:"to",value:function(e){var t=this.props.photos,o=this.state.activePhotoIndex;if(!(e>t.length-1||e<0||o===e)){var a=e>o?"next":"prev";this.move(a,e)}}},{key:"wrapCheck",value:function(e,t){var o=this.props,a=o.photos;o.wrap&&this.setState({hideNextButton:t===a.length-1,hidePrevButton:0===t})}},{key:"renderControls",value:function(){var e=this.props.light,t=this.state,o=t.hidePrevButton,a=t.hideNextButton,n=t.controlsDisabled,r=[];return this.hasMoreThanOnePhoto&&(o||r.push(u.a.createElement(re,{key:".prevControl",disabled:n,onPress:this.onPrevButtonPress,light:e})),a||r.push(u.a.createElement(ie,{key:".nextControl",disabled:n,onPress:this.onNextButtonPress,light:e}))),r}},{key:"renderPreloadPhotos",value:function(e){for(var t=this.props,o=t.photos,a=t.preloadSize,n=1,r=e,s=null,l=[];r<o.length&&n<=a;)s=o[r],l.push(u.a.createElement("img",{key:s.photo,alt:s.photo,src:s.photo})),r+=1,n+=1}},{key:"render",value:function(){var e=this.props,t=e.photos,o=e.showThumbnails,a=e.phrases,n=a.noPhotosProvided,r=this.state.activePhotoIndex,s=this.renderPreloadPhotos(r),l=this.renderControls(),i=this.getPhotoByIndex(r),c=this.getStyles();return u.a.createElement("div",{className:"gallery",style:c},u.a.createElement("div",{className:"gallery-modal--preload"},s),u.a.createElement("div",{className:"gallery-main"},l,u.a.createElement("div",{className:"gallery-photos"},this.hasPhotos?u.a.createElement("div",{className:"gallery-photo"},u.a.createElement("div",{className:"gallery-photo--current"},u.a.createElement(F,{photo:i,onLoad:this.onPhotoLoad,onError:this.onPhotoError,onPress:this.onPhotoPress,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd}))):u.a.createElement("div",{className:"gallery-empty"},n))),o&&i&&u.a.createElement(Z,{phrases:a,current:r,photos:t,onPress:this.onThumbnailPress}))}}]),t}(h.PureComponent);he.defaultProps=ce;var ue=he,de={height:"2em",width:"2em",display:"block",fill:"rgba(255,255,255,1)"},pe={fill:"rgba(1,1,1,1)"},be=function(e){var t=e.onPress,o=e.light;return u.a.createElement("button",{onClick:t,className:"gallery-close",type:"button","aria-busy":!1},u.a.createElement("svg",{viewBox:"0 0 24 24",role:"img",focusable:"false",style:Object(c.a)({},de,{},o&&pe)},u.a.createElement("path",{d:"m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22",fillRule:"evenodd"})))};be.defaultProps={onPress:x,light:!1};var ve=be;function me(e,t){var o="string"===typeof e?{number:t+1,photo:e}:Object(c.a)({},e,{number:t+1});return Object(c.a)({},E,{},o)}o(165);var fe=Object(c.a)({},B,{leftKeyPressed:x,onClose:x,rightKeyPressed:x,show:!1,keyboard:!0,opacity:1,zIndex:2e3}),ye=function(e){function t(e){var o;return Object(a.a)(this,t),(o=Object(r.a)(this,Object(s.a)(t).call(this,e))).state={photos:null},o.gallery=u.a.createRef(),o.close=o.close.bind(Object(l.a)(o)),o.onKeyDown=o.onKeyDown.bind(Object(l.a)(o)),o}return Object(i.a)(t,e),Object(n.a)(t,[{key:"onKeyDown",value:function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 27:e.preventDefault(),this.close();break;case 37:e.preventDefault(),this.gallery.current.prev();break;case 39:e.preventDefault(),this.gallery.current.next()}}},{key:"getModalOverlayStyles",value:function(){var e=this.props;return{opacity:e.opacity,backgroundColor:e.backgroundColor}}},{key:"close",value:function(){(0,this.props.onClose)()}},{key:"render",value:function(){var e=this.props,t=e.show,o=e.phrases,a=e.keyboard,n=e.light,r=e.zIndex,s=this.state.photos;if(!t)return null;var l=m()(this.props,["onClose","leftKeyPressed","rightKeyPressed","show","photos","opacity","backgroundColor","zIndex","keyboard"]),i=l.wrap,c=l.activePhotoIndex,h=l.activePhotoPressed,d=l.direction,v=l.nextButtonPressed,f=l.prevButtonPressed,P=l.showThumbnails,g=l.preloadSize,O=this.getModalOverlayStyles(),E={zIndex:r};return u.a.createElement(b.a,null,u.a.createElement(p.a,null,u.a.createElement("div",{className:y()(["gallery-modal",n&&"mode-light"]),onKeyDown:a&&this.onKeyDown,tabIndex:"-1",role:"dialog",style:E},u.a.createElement("div",{style:O,className:"gallery-modal--overlay"}),u.a.createElement("div",{className:"gallery-modal--container"},u.a.createElement("div",{className:"gallery-modal--table"},u.a.createElement("div",{className:"gallery-modal--cell"},u.a.createElement("div",{className:"gallery-modal--content"},u.a.createElement("div",{className:"gallery-modal--close"},u.a.createElement(ve,{onPress:this.close,light:n})),u.a.createElement("div",{className:"gallery-content"},u.a.createElement("div",{className:"gallery-top"},u.a.createElement("div",{className:"gallery-top--inner"})),u.a.createElement(ue,{phrases:o,ref:this.gallery,photos:s,wrap:i,activePhotoIndex:c,activePhotoPressed:h,direction:d,nextButtonPressed:v,prevButtonPressed:f,showThumbnails:P,preloadSize:g,backgroundColor:null,light:n})))))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.photos!==t.photos?{photos:(o=e.photos,o.map(me))}:null;var o}}]),t}(h.Component);ye.defaultProps=fe;var Pe=ye;o.d(t,"ReactBnbGallery",(function(){return Pe})),o.d(t,"Gallery",(function(){return ue}));t.default=Pe},63:function(e,t,o){e.exports=o(166)}},[[63,1,2]]]);
//# sourceMappingURL=main.1bca2f74.chunk.js.map