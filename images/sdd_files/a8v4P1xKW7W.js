if (self.CavalryLogger) { CavalryLogger.start_js(["9QK3O"]); }

__d("SpotlightViewerAutoResize",["invariant","Event","SubscriptionsHandler"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";function a(a){this.$1=a,typeof this.$1.onResize==="function"||g(0,1068)}var c=a.prototype;c.enable=function(){this.$2=new(b("SubscriptionsHandler"))(),this.$2.addSubscriptions(b("Event").listen(window,"resize",this.$1.onResize))};c.disable=function(){this.$2.release(),delete this.$2};return a}();e.exports=a}),null);
__d("SpotlightViewerBehaviorsMixin",["BehaviorsMixin"],(function(a,b,c,d,e,f){a={UNSAFE_componentWillMount:function(){this.behaviors&&this.enableBehaviors(this.behaviors)},componentWillUnmount:function(){this.destroyBehaviors()}};Object.assign(a,b("BehaviorsMixin"));e.exports=a}),null);
__d("SpotlightViewerPageWithKeys",["KeyEventController","SubscriptionsHandler"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=a}var c=a.prototype;c.enable=function(){this.$2=new(b("SubscriptionsHandler"))(),this.$2.addSubscriptions(b("KeyEventController").registerKey("LEFT",function(){this.$1.viewState.backward();return!1}.bind(this)),b("KeyEventController").registerKey("RIGHT",function(){this.$1.viewState.forward();return!1}.bind(this)))};c.disable=function(){this.$2.release(),delete this.$2};return a}();e.exports=a}),null);
__d("SpotlightViewerPagers",["cx","LeftRight.react","Link.react","React"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsxs(b("LeftRight.react"),{children:[b("React").jsx(b("Link.react"),{className:"_4-oa _4-ob _50-m"}),b("React").jsx(b("Link.react"),{className:"_4-oa _4-oc _50-m"})]})};return c}(b("React").Component);e.exports=a}),null);
__d("SpotlightSnowflakePhotoViewer",["ArbiterMixin","React","SpotlightViewer","SpotlightViewerAutoResize","SpotlightViewerBehaviorsMixin","SpotlightViewerClose","SpotlightViewerCoreMixin","SpotlightViewerDimensionMixin","SpotlightViewerPagers","SpotlightViewerPageWithKeys","SpotlightViewerThumbnailMixin","SpotlightViewport","SubscriptionsHandler","createReactClass_DEPRECATED"],(function(a,b,c,d,e,f){a=b("createReactClass_DEPRECATED")({displayName:"SpotlightSnowflakePhotoViewer",mixins:[b("ArbiterMixin"),b("SpotlightViewerBehaviorsMixin"),b("SpotlightViewerCoreMixin"),b("SpotlightViewerThumbnailMixin"),b("SpotlightViewerDimensionMixin")],behaviors:[b("SpotlightViewerPageWithKeys"),b("SpotlightViewerAutoResize")],getViewerID:function(){return"photoviewer"},componentWillUnmount:function(){this._subscriptions&&this._subscriptions.release(),this._subscriptions=null},getInitialState:function(){this._subscriptions=new(b("SubscriptionsHandler"))();return{photoData:this._getInitialPhotoData(),open:!0}},_enableSubscriptions:function(){this.props.useloadingindicator&&this._subscriptions.addSubscriptions(this.viewState.subscribe("photo_fetch",this.setState.bind(this,{photoData:null},null)))},render:function(){var a=this.getMedia(),c=this.getStageDimensions(),d=this.props.useloadingindicator&&!this.state.photoData;return b("React").jsx(b("SpotlightViewer"),{open:this.state.open,onHide:this.close,children:b("React").jsxs(b("SpotlightViewport"),{media:a,showLoadingIndicator:d,stageDimensions:c,onClick:this._onClickViewport,children:[b("React").jsx(b("SpotlightViewerClose"),{onClick:this.close}),this.props.disablepaging?null:b("React").jsx(b("SpotlightViewerPagers"),{})]})})}});e.exports=a}),null);
__d("CampfireImageViewer",["DOM","Event","React","ReactDOM","SpotlightSnowflakePhotoViewer","ge"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={registerPopup:function(a,c){b("Event").listen(a,"click",function(a){g.bootstrap({src:c.src,fbid:c.id,dimensions:[c.width,c.height].join(","),disablePaging:!0})})},bootstrap:function(a){a=b("React").jsx(b("SpotlightSnowflakePhotoViewer"),{dimensions:[a.dimensions],open:!0,disablepaging:!0,photoid:a.fbid,reverse:!1,rootClassName:a.rootClassName,thumbsrc:a.src});g.render(a)},render:function(a){var c=b("ge")("campfire_viewer");c||(c=b("DOM").create("div",{id:"messages_viewer"}),document.body.appendChild(c));a=b("ReactDOM").render(a,c);a.subscribeOnce("close",function(){b("ReactDOM").unmountComponentAtNode(c)})}};e.exports=g}),null);