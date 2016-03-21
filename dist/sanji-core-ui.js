!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("angular"),require("angular-cookies"),require("angular-cron-jobs"),require("angular-filter"),require("angular-formly"),require("angular-material"),require("angular-material-data-table"),require("angular-material-icons"),require("angular-messages"),require("angular-moment"),require("angular-sanitize"),require("angular-sanji-window"),require("angular-sparklines"),require("angular-translate"),require("angular-translate-storage-cookie"),require("api-check"),require("jquery"),require("jquery-sparkline"),require("lodash"),require("moment"),require("ngletteravatar"),require("oclazyload"),require("path-to-regexp"),require("sanji-utils-ui")):"function"==typeof define&&define.amd?define(["angular","angular-cookies","angular-cron-jobs","angular-filter","angular-formly","angular-material","angular-material-data-table","angular-material-icons","angular-messages","angular-moment","angular-sanitize","angular-sanji-window","angular-sparklines","angular-translate","angular-translate-storage-cookie","api-check","jquery","jquery-sparkline","lodash","moment","ngletteravatar","oclazyload","path-to-regexp","sanji-utils-ui"],t):"object"==typeof exports?exports.sjCore=t(require("angular"),require("angular-cookies"),require("angular-cron-jobs"),require("angular-filter"),require("angular-formly"),require("angular-material"),require("angular-material-data-table"),require("angular-material-icons"),require("angular-messages"),require("angular-moment"),require("angular-sanitize"),require("angular-sanji-window"),require("angular-sparklines"),require("angular-translate"),require("angular-translate-storage-cookie"),require("api-check"),require("jquery"),require("jquery-sparkline"),require("lodash"),require("moment"),require("ngletteravatar"),require("oclazyload"),require("path-to-regexp"),require("sanji-utils-ui")):e.sjCore=t(e.angular,e["angular-cookies"],e["angular-cron-jobs"],e["angular-filter"],e["angular-formly"],e["angular-material"],e["angular-material-data-table"],e["angular-material-icons"],e["angular-messages"],e["angular-moment"],e["angular-sanitize"],e["angular-sanji-window"],e["angular-sparklines"],e["angular-translate"],e["angular-translate-storage-cookie"],e["api-check"],e.jquery,e["jquery-sparkline"],e.lodash,e.moment,e.ngletteravatar,e.oclazyload,e["path-to-regexp"],e["sanji-utils-ui"])}(this,function(e,t,a,n,o,r,l,i,s,u,_,m,p,d,R,O,M,E,c,f,g,L,A,F){return function(e){function t(n){if(a[n])return a[n].exports;var o=a[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),a(26),a(27);var o=a(32),r=n(o),l=a(25),i=n(l),s=a(28),u=n(s),_=a(29),m=n(_),p=a(10),d=n(p),R=a(20),O=n(R),M=a(11),E=n(M),c=a(15),f=n(c),g=a(18),L=n(g),A=a(17),F=n(A),S=a(14),x=n(S),T=a(23),b=n(T);a(24);var y=a(16),v=n(y),B=a(21),h=n(B),G=a(22),I=n(G),N=a(31),k=n(N),q=a(33),P=n(q);a(30),a(19),a(13),a(12),a(9);var C=a(6),D=n(C),w=a(4),U=n(w),j=a(8),$=n(j),H=a(7),X=n(H),z=a(5),V=n(z),W=a(3),K=n(W),Q=d["default"].module("sanji.core",[O["default"],E["default"],f["default"],L["default"],F["default"],v["default"],"angularMoment","angular.filter",I["default"],x["default"],b["default"],h["default"],k["default"],"ngLetterAvatar","angular-cron-jobs",P["default"]]);Q.constant("pathToRegexp",r["default"]),Q.constant("apiCheck",i["default"]),Q.constant("_",u["default"]),Q.constant("moment",m["default"]),Q.config(D["default"]),Q.config(U["default"]),Q.config($["default"]),Q.config(X["default"]),Q.run(V["default"]),(0,K["default"])(Q),i["default"].globalConfig.disabled=!0,t["default"]=Q=Q.name,e.exports=t["default"]},function(e,t){e.exports={"404_NOT_FOUND":"Not found","404_MESSAGE_1":"Sorry, but the page you were trying to view does not exist.","404_MESSAGE_2":"It looks like this was the result of either:","404_MESSAGE_3":"a mistyped address","404_MESSAGE_4":"an out-of-date link",FORM_PLACEHOLDER_SELECT_DATE:"Select Date",FORM_SELECT_BUTTON:"Select",FORM_LABEL_SWITCH:"Enable",FORM_LABEL_URL:"URL",FORM_LABEL_RANGE:"Range",FORM_LABEL_FILE:"File",FORM_LABEL_DATE:"Date",FORM_LABEL_DATE_TIME:"Date Time",FORM_LABEL_EMAIL:"Email",FORM_LABEL_NUMBER:"Number",FORM_LABEL_RADIO_OPTION:"Radio Option",FORM_LABEL_SELECT_OPTION:"Please Select",FORM_LABEL_CHECKBOX:"Checkbox Label",FORM_LABEL_FLOAT:"Float",FORM_LABEL_IP:"IP",FORM_LABEL_LATITUDE:"Latitude",FORM_LABEL_LONGITUDE:"Longitude",FORM_LABEL_PASSWORD:"Password",FORM_LABEL_NAME:"Name",FORM_LABEL_HOSTNAME:"Hostname",FORM_LABEL_PORT:"Port",FORM_LABEL_MAC:"MAC",FORM_LABEL_HOUR:"Hour",FORM_LABEL_MINUTE:"Minute",FORM_LABEL_TEXTAREA:"Textarea",FORM_FLOAT_ERROR_MSG:"Invalid port format",FORM_MAC_ERROR_MSG:"Invalid MAC format",FORM_HOSTNAME_ERROR_MSG:"Invalid hotname format",FORM_NAME_ERROR_MSG:"Invalid name format",FORM_PASSWORD_ERROR_MSG:"Invalid password format",FORM_LONGITUDE_ERROR_MSG:"Invalid longitude format",FORM_LATITUDE_ERROR_MSG:"Invalid latitude format",FORM_IP_ERROR_MSG:"Invalid IP format",FORM_EMAIL_ERROR_MSG:"Invalid email format",FORM_URL_ERROR_MSG:"Invalid URL format",FORM_REQUIRED_ERROR_MSG:"This field is required",FORM_MINLEN_ERROR_MSG:"Too short",FORM_MINLEN_ERROR_MSG2:"is the minimum length",FORM_MAXLEN_ERROR_MSG:"Too long",FORM_MAXLEN_ERROR_MSG2:"is the maximum length",FORM_MIN_ERROR_MSG:"Too samll",FORM_MIN_ERROR_MSG2:"The min value allowed is",FORM_MAX_ERROR_MSG:"Too big",FORM_MAX_ERROR_MSG2:"The max value allowed is",FORM_PATTERN_ERROR_MSG:"Invalid input format"}},function(e,t){e.exports={"404_NOT_FOUND":"找不到","404_MESSAGE_1":"對不起，你嘗試要瀏覽的頁面不存在","404_MESSAGE_2":"無法瀏覽可能的原因如下:","404_MESSAGE_3":"網址打錯","404_MESSAGE_4":"過時的連結",FORM_PLACEHOLDER_SELECT_DATE:"選擇日期",FORM_SELECT_BUTTON:"選擇",FORM_LABEL_SWITCH:"啟用",FORM_LABEL_URL:"URL",FORM_LABEL_RANGE:"範圍",FORM_LABEL_FILE:"檔案",FORM_LABEL_DATE:"日期",FORM_LABEL_DATE_TIME:"日期時間",FORM_LABEL_EMAIL:"電子信箱",FORM_LABEL_NUMBER:"整數",FORM_LABEL_RADIO_OPTION:"單選選項",FORM_LABEL_SELECT_OPTION:"請選擇",FORM_LABEL_CHECKBOX:"檢查方塊名稱",FORM_LABEL_FLOAT:"浮點數",FORM_LABEL_IP:"網路位址",FORM_LABEL_LATITUDE:"緯度",FORM_LABEL_LONGITUDE:"經度",FORM_LABEL_PASSWORD:"密碼",FORM_LABEL_NAME:"名稱",FORM_LABEL_HOSTNAME:"主機名稱",FORM_LABEL_PORT:"埠號",FORM_LABEL_MAC:"MAC",FORM_LABEL_HOUR:"小時",FORM_LABEL_MINUTE:"分鐘",FORM_LABEL_TEXTAREA:"文字區塊",FORM_FLOAT_ERROR_MSG:"埠格式錯誤",FORM_MAC_ERROR_MSG:"MAC 格式錯誤",FORM_HOSTNAME_ERROR_MSG:"主機名稱格式錯誤",FORM_NAME_ERROR_MSG:"名稱格式錯誤",FORM_PASSWORD_ERROR_MSG:"密碼格式錯誤",FORM_LONGITUDE_ERROR_MSG:"經度格式錯誤",FORM_LATITUDE_ERROR_MSG:"緯度格式錯誤",FORM_IP_ERROR_MSG:"IP 格式錯誤",FORM_EMAIL_ERROR_MSG:"電子郵件格式錯誤",FORM_URL_ERROR_MSG:"URL 格式錯誤",FORM_REQUIRED_ERROR_MSG:"欄位不能為空",FORM_MIN_ERROR_MSG:"輸入值太小",FORM_MIN_ERROR_MSG2:"最小值是",FORM_MAX_ERROR_MSG:"輸入值太大",FORM_MAX_ERROR_MSG2:"最大值是",FORM_MINLEN_ERROR_MSG:"長度太短",FORM_MINLEN_ERROR_MSG2:"是最短長度",FORM_MAXLEN_ERROR_MSG:"長度太長",FORM_MAXLEN_ERROR_MSG2:"是最長長度",FORM_PATTERN_ERROR_MSG:"輸入格式錯誤"}},function(e,t,a){"use strict";function n(e){return/^[+-]?\d+(\.\d+)?$/.test(e)}function o(e){return/^([0-9A-F]{2}[:]){5}([0-9A-F]{2})$/.test(e)}function r(e){return/^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(e)}function l(e){return/^(?![0-9]+$)(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$/.test(e)}function i(e){return/^[A-Za-z0-9_-]{3,255}$/.test(e)}function s(e){return/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/.test(e)}function u(e){return/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/.test(e)}function _(e){return/^(?=.*\d)(?=.*[a-zA-Z]).{6,100}$/.test(e)}function m(e){return"0.0.0.0"===e?!1:/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(e)?/2(?:2[4-9]|3\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d?|0)){3}/.test(e)?!1:!0:!1}function p(e,t){var a=void 0,n=t.length;for(a=0;n>a;a++)e.setType(t[a])}function d(e,t){var a=void 0,n=t.length;for(a=0;n>a;a++)e.setWrapper(t[a])}Object.defineProperty(t,"__esModule",{value:!0});var R=[{name:"datetimepicker",template:'<div layout>\n                <md-datepicker style="margin-top: 15px;"\n                  ng-model="to.date"\n                  md-placeholder="{{to.datePlaceholder | translate}}"\n                  ng-required="to.required"></md-datepicker>\n                <md-input-container flex>\n                  <label translate="{{to.hourLabel}}"></label>\n                  <input type="number" ng-model="to.hour" ng-required="to.required">\n                </md-input-container>\n                <md-input-container flex>\n                  <label translate="{{to.minLabel}}"></label>\n                  <input type="number" ng-model="to.minute" ng-required="to.required">\n                </md-input-container>\n              </div>',controller:function(e){var t=new Date(e.model[e.options.key]);e.options.templateOptions.date=t,e.options.templateOptions.hour=t.getHours(),e.options.templateOptions.minute=t.getMinutes(),e.$watchGroup(["options.templateOptions.date","options.templateOptions.hour","options.templateOptions.minute"],function(e,t,a){var n=e[0];n&&(n.setHours(e[1]),n.setMinutes(e[2]),a.model[a.options.key]=n)})},defaultOptions:{templateOptions:{datePlaceholder:"FORM_PLACEHOLDER_SELECT_DATE",hourLabel:"FORM_LABEL_HOUR",minLabel:"FORM_LABEL_MINUTE"}}},{name:"textarea",template:'<textarea ng-model="model[options.key]"\n                rows="{{to.rows}}" columns="{{to.columns}}"></textarea>',defaultOptions:{templateOptions:{label:"FORM_LABEL_TEXTAREA"}}},{name:"switch",template:'<md-switch class="md-primary"\n                aria-label="Switch"\n                ng-model="model[options.key]">\n                  <span translate="{{to.label}}"></span>\n              </md-switch>',defaultOptions:{templateOptions:{label:"FORM_LABEL_SWITCH"}}},{name:"url",template:'<input type="url" ng-model="model[options.key]">',defaultOptions:{templateOptions:{label:"FORM_LABEL_URL"},validation:{messages:{url:'"FORM_URL_ERROR_MSG"'}}}},{name:"range",template:'<md-slider\n              style="padding: 0 20px;"\n              ng-model="model[options.key]"\n              ng-min="to.min"\n              ng-max="to.max"\n              aria-label="slider"\n              class="md-primary"></md-slider>',defaultOptions:{templateOptions:{label:"FORM_LABEL_RANGE"}}},{name:"input",template:'<input ng-model="model[options.key]">',defaultOptions:{templateOptions:{label:""}}},{name:"file",template:'<div layout>\n                <md-input-container style="width: 70%;">\n                  <label>{{to.label}}</label>\n                  <input style="color: rgba(0,0,0,0.87);" ng-model="model[options.key]" readonly>\n                </md-input-container>\n                <md-input-container>\n                  <md-button class="md-raised" ngf-select"$fileSelect($file, options.key)"\n                   accept="{{to.accept}}" ngf-max-size="{{to.maxSize}}">\n                    <span translate="FORM_SELECT_BUTTON"></span>\n                  </md-button>\n                </md-input-container>\n              </div>',controller:function(e){e.$fileSelect=function(t,a){e.model[a]=t.name,void 0===e.formOptions.files?(e.formOptions.files=[],e.formOptions.files.push({key:a,file:t})):e.formOptions.files.push({key:a,file:t})}},defaultOptions:{templateOptions:{label:"FORM_LABEL_FILE"}}},{name:"date",template:'<input type="date" ng-model="model[options.key]" ng-min="to.min" ng-max="to.max">',defaultOptions:{templateOptions:{label:"FORM_LABEL_DATE"}}},{name:"datetime",template:'<input type="datetime-local" ng-model="model[options.key]" ng-min="to.min" ng-max="to.max">',defaultOptions:{templateOptions:{label:"FORM_LABEL_DATE_TIME"}}},{name:"email",template:'<input type="email" ng-model="model[options.key]">',defaultOptions:{templateOptions:{label:"FORM_LABEL_EMAIL"},validation:{messages:{email:'"FORM_EMAIL_ERROR_MSG"'}}}},{name:"number",template:'<input type="number" ng-model="model[options.key]" min="{{to.min}}" max="{{to.max}}">',defaultOptions:{templateOptions:{label:"FORM_LABEL_NUMBER",min:-65535,max:65535}}},{name:"radio",template:'<md-radio-group ng-model="model[options.key]">\n                  <md-radio-button class="md-primary" aria-label="{{item.label}}"\n                  ng-repeat="item in to.options track by $index"\n                  ng-value="item.value">\n                    <span translate="{{item.label}}"></span>\n                  </md-radio-button>\n              </md-radio-group>',defaultOptions:{templateOptions:{options:[{label:"FORM_LABEL_RADIO_OPTION",value:""}]}}},{name:"datepicker",template:'<md-datepicker\n                ng-model="model[options.key]"\n                md-placeholder="{{to.placeholder}}"\n                md-min-date="to.min"\n                md-max-date="to.max"\n                ng-required="to.required"></md-datepicker>'},{name:"select",template:'<md-option\n                ng-repeat="item in to.options track by $index"\n                ng-value="item.value || item">\n                  <span translate="{{item.label || item}}"></span>\n                </md-option>',defaultOptions:{templateOptions:{options:[{label:"FORM_LABEL_SELECT_OPTION",value:""}]}}},{name:"checkbox",template:'<md-checkbox ng-model="model[options.key]">\n                <span translate="{{to.label}}"></span>\n              </md-checkbox>',defaultOptions:{templateOptions:{label:"FORM_LABEL_CHECKBOX"}}},{name:"ip",defaultOptions:{templateOptions:{label:"FORM_LABEL_IP",placeholder:"127.0.0.1"},validators:{ip:{expression:function(e,t){var a=t||e;return!a||m(a)},message:'"FORM_IP_ERROR_MSG"'}}}},{name:"latitude",defaultOptions:{templateOptions:{label:"FORM_LABEL_LATITUDE"},validators:{latitude:{expression:function(e,t){var a=t||e;return!a||s(a)},message:'"FORM_LATITUDE_ERROR_MSG"'}}}},{name:"longitude",defaultOptions:{templateOptions:{label:"FORM_LABEL_LONGITUDE"},validators:{longitude:{expression:function(e,t){var a=t||e;return!a||u(a)},message:'"FORM_LONITUDE_ERROR_MSG"'}}}},{name:"password",template:'<input type="password" ng-model="model[options.key]">',defaultOptions:{templateOptions:{label:"FORM_LABEL_PASSWORD"},validators:{password:{expression:function(e,t){var a=t||e;return!a||_(a)},message:'"FORM_PASSWORD_ERROR_MSG"'}}}},{name:"aliasName",defaultOptions:{templateOptions:{label:"FORM_LABEL_NAME"},validators:{aliasName:{expression:function(e,t){var a=t||e;return!a||i(a)},message:'"FORM_ALIASNAME_ERROR_MSG"'}}}},{name:"hostname",defaultOptions:{templateOptions:{label:"FORM_LABEL_HOSTNAME"},validators:{hostname:{expression:function(e,t){var a=t||e;return!a||l(a)},message:'"FORM_HOSTNAME_ERROR_MSG"'}}}},{name:"port",defaultOptions:{templateOptions:{label:"FORM_LABEL_PORT"},validators:{port:{expression:function(e,t){var a=t||e;return!a||r(a)},message:'"FORM_PORT_ERROR_MSG"'}}}},{name:"mac",defaultOptions:{templateOptions:{label:"FORM_LABEL_MAC"},validators:{mac:{expression:function(e,t){var a=t||e;return!a||o(a)},message:'"FORM_MAC_ERROR_MSG"'}}}},{name:"float",template:'<input type="number" step="any" ng-model="model[options.key]" min="{{to.min}}" max="{{to.max}}">',defaultOptions:{templateOptions:{label:"FORM_LABEL_FLOAT",min:-65535,max:65535},validators:{"float":{expression:function(e,t){var a=t||e;return!a||n(a)},message:'"FORM_FLOAT_ERROR_MSG"'}}}}],O=[{name:"mdLabel",types:["input","number","date","datetime","email","password","range","url","float","textarea"],template:'<label translate="{{to.label}}"></label>\n              <formly-transclude></formly-transclude>'},{name:"mdSelect",types:["select"],template:'<md-input-container class="md-block">\n                <label translate="{{to.label}}"></label>\n                <md-select ng-model="model[options.key]" aria-label="select" ng-required="{{to.required}}">\n                  <formly-transclude></formly-transclude>\n                </md-select>\n                <div ng-messages="fc.$error" ng-show="showError">\n                  <div ng-repeat="(name, message) in options.validation.messages"\n                  ng-message="{{name}}">\n                    {{message(fc.$viewValue, fc.$modelValue, this) | translate:options}}\n                  </div>\n                </div>\n              </md-input-container>'},{name:"mdInputContainer",types:["input","number","date","datetime","email","password","file","url","float","textarea"],template:'<md-input-container class="md-block">\n                <formly-transclude></formly-transclude>\n                <div ng-messages="fc.$error" ng-show="showError">\n                  <div ng-repeat="(name, message) in options.validation.messages"\n                  ng-message="{{name}}">\n                    {{message(fc.$viewValue, fc.$modelValue, this) | translate:options}}\n                  </div>\n                </div>\n              </md-input-container>'}];t["default"]=function(e){e.config(["formlyConfigProvider",function(e){e.disableWarnings=!0,e.extras.removeChromeAutoComplete=!0,e.extras.explicitAsync=!0,e.extras.ngModelAttrsManipulatorPreferBound=!0}]),e.run(["formlyConfig","formlyValidationMessages",function(e,t){p(e,R),d(e,O),t.addStringMessage("required","FORM_REQUIRED_ERROR_MSG"),t.addTemplateOptionValueMessage("min","min","","FORM_MIN_ERROR_MSG2","FORM_MIN_ERROR_MSG"),t.addTemplateOptionValueMessage("max","max","","FORM_MAX_ERROR_MSG2","FORM_MAX_ERROR_MSG"),t.addTemplateOptionValueMessage("minlength","minlength","","FORM_MINLEN_ERROR_MSG2","FORM_MINLEN_ERROR_MSG"),t.addTemplateOptionValueMessage("maxlength","maxlength","","FORM_MAXLEN_ERROR_MSG2","FORM_MAXLEN_ERROR_MSG"),t.addTemplateOptionValueMessage("pattern","patternValidationMessage","","","FORM_PATTERN_ERROR_MSG")}])},e.exports=t["default"]},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$translateProvider","$provide",function(e,t){"ngInject";var n={key:"en",label:"English"},o={key:"zh-tw",label:"繁體中文"};t.constant("LANG_KEYS",[n,o]),e.translations(n.key,a(1)),e.translations(o.key,a(2)),e.preferredLanguage(n.key).fallbackLanguage(n.key).useCookieStorage().useSanitizeValueStrategy("escape")}],e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["routerHelper",function(e){"ngInject";function t(){return[{state:"404",config:{url:"/404",templateUrl:"404.html",title:"404 Error"}}]}var a="/404";e.configureStates(t(),a)}],e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$mdThemingProvider",function(e){"ngInject";e.definePalette("moxa-material",{50:"#E6F3F3",100:"#B3DBDB",200:"#80C3C3",300:"#55AFAF",400:"#2A9B9B",500:"#008787",600:"#007676",700:"#006565",800:"#006565",900:"#006565",A100:"#006565",A200:"#006565",A400:"#006565",A700:"#006565",contrastDefaultColor:"light",contrastDarkColors:["50","100","200","300","400","A100"],contrastLightColors:void 0}),e.theme("moxa").primaryPalette("moxa-material"),e.setDefaultTheme("moxa")}],e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["toastr",function(e){"ngInject";e.options.timeOut=6e3,e.options.positionClass="toast-bottom-right",e.options.progressBar=!0}],e.exports=t["default"]},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$logProvider","routerHelperProvider","exceptionHandlerProvider",function(e,t,a){"ngInject";var n={appErrorPrefix:"[webapp Error] ",appTitle:"webapp"};e.debugEnabled(!1),a.configure(n.appErrorPrefix),t.configure({docTitle:n.appTitle+": ",defaultRoute:"/"})}],e.exports=t["default"]},function(e,t){var a,n=window.angular;try{a=n.module(["ng"])}catch(o){a=n.module("ng",[])}var r='<div class="container">\n    <div class="text-center" style="padding-top: 10%">\n      <h1 class="text-warning">\n        <i class="fa fa-exclamation-triangle fa-lg fa-5x"></i>\n      </h1>\n      <h1 class="text-primary">404</h1>\n      <h1><small translate="404_NOT_FOUND"></small></h1>\n      <p class="lead" translate="404_MESSAGE_1"></p>\n      <p class="lead" translate="404_MESSAGE_2"></p>\n      <ul class="list-unstyled">\n        <li>1. <span translate="404_MESSAGE_3"></span></li><li>2. <span translate="404_MESSAGE_4"></span></li>\n      </ul>\n    </div>\n  </div>';a.run(["$templateCache",function(e){e.put("404.html",r)}]),e.exports=r},function(t,a){t.exports=e},function(e,a){e.exports=t},function(e,t){e.exports=a},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=r},function(e,t){e.exports=l},function(e,t){e.exports=i},function(e,t){e.exports=s},function(e,t){e.exports=u},function(e,t){e.exports=_},function(e,t){e.exports=m},function(e,t){e.exports=p},function(e,t){e.exports=d},function(e,t){e.exports=R},function(e,t){e.exports=O},function(e,t){e.exports=M},function(e,t){e.exports=E},function(e,t){e.exports=c},function(e,t){e.exports=f},function(e,t){e.exports=g},function(e,t){e.exports=L},function(e,t){e.exports=A},function(e,t){e.exports=F}])});
//# sourceMappingURL=sanji-core-ui.js.map