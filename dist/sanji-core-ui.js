!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("angular"),require("angular-cookies"),require("angular-cron-jobs"),require("angular-filter"),require("angular-formly"),require("angular-material"),require("angular-material-data-table"),require("angular-material-icons"),require("angular-messages"),require("angular-moment"),require("angular-sanitize"),require("angular-sanji-window"),require("angular-sparklines"),require("angular-translate"),require("angular-translate-storage-cookie"),require("api-check"),require("jquery"),require("jquery-sparkline"),require("moment"),require("ngletteravatar"),require("oclazyload"),require("path-to-regexp"),require("sanji-utils-ui"),require("webfontloader")):"function"==typeof define&&define.amd?define(["angular","angular-cookies","angular-cron-jobs","angular-filter","angular-formly","angular-material","angular-material-data-table","angular-material-icons","angular-messages","angular-moment","angular-sanitize","angular-sanji-window","angular-sparklines","angular-translate","angular-translate-storage-cookie","api-check","jquery","jquery-sparkline","moment","ngletteravatar","oclazyload","path-to-regexp","sanji-utils-ui","webfontloader"],t):"object"==typeof exports?exports.sjCore=t(require("angular"),require("angular-cookies"),require("angular-cron-jobs"),require("angular-filter"),require("angular-formly"),require("angular-material"),require("angular-material-data-table"),require("angular-material-icons"),require("angular-messages"),require("angular-moment"),require("angular-sanitize"),require("angular-sanji-window"),require("angular-sparklines"),require("angular-translate"),require("angular-translate-storage-cookie"),require("api-check"),require("jquery"),require("jquery-sparkline"),require("moment"),require("ngletteravatar"),require("oclazyload"),require("path-to-regexp"),require("sanji-utils-ui"),require("webfontloader")):e.sjCore=t(e.angular,e["angular-cookies"],e["angular-cron-jobs"],e["angular-filter"],e["angular-formly"],e["angular-material"],e["angular-material-data-table"],e["angular-material-icons"],e["angular-messages"],e["angular-moment"],e["angular-sanitize"],e["angular-sanji-window"],e["angular-sparklines"],e["angular-translate"],e["angular-translate-storage-cookie"],e["api-check"],e.jquery,e["jquery-sparkline"],e.moment,e.ngletteravatar,e.oclazyload,e["path-to-regexp"],e["sanji-utils-ui"],e.webfontloader)}(this,function(e,t,n,a,r,o,i,l,s,u,d,c,p,m,f,R,_,g,O,E,M,L,A,h){return function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,t,n){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=36)}([function(e,t,n){!function(t,n){e.exports=n()}(this,function(){return function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";e.exports="ngFileSaver",angular.module("ngFileSaver",[]).factory("FileSaver",["Blob","SaveAs","FileSaverUtils",n(1)]).factory("FileSaverUtils",[n(2)]).factory("Blob",["$window",n(3)]).factory("SaveAs",[n(5)])},function(e,t){"use strict";e.exports=function(e,t,n){function a(e,a,r){try{t(e,a,r)}catch(e){n.handleErrors(e.message)}}return{saveAs:function(e,t,r){return n.isBlobInstance(e)||n.handleErrors("Data argument should be a blob instance"),n.isString(t)||n.handleErrors("Filename argument should be a string"),a(e,t,r)}}}},function(e,t){"use strict";e.exports=function(){return{handleErrors:function(e){throw new Error(e)},isString:function(e){return"string"==typeof e||e instanceof String},isUndefined:function(e){return"undefined"==typeof e},isBlobInstance:function(e){return e instanceof Blob}}}},function(e,t,n){"use strict";n(4),e.exports=function(e){return e.Blob}},function(e,t){/*! @source http://purl.eligrey.com/github/Blob.js/blob/master/Blob.js */
!function(e){"use strict";if(e.URL=e.URL||e.webkitURL,e.Blob&&e.URL)try{return void new Blob}catch(e){}var t=e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||function(e){var t=function(e){return Object.prototype.toString.call(e).match(/^\[object\s(.*)\]$/)[1]},n=function(){this.data=[]},a=function(e,t,n){this.data=e,this.size=e.length,this.type=t,this.encoding=n},r=n.prototype,o=a.prototype,i=e.FileReaderSync,l=function(e){this.code=this[this.name=e]},s="NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),u=s.length,d=e.URL||e.webkitURL||e,c=d.createObjectURL,p=d.revokeObjectURL,m=d,f=e.btoa,R=e.atob,_=e.ArrayBuffer,g=e.Uint8Array,O=/^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;for(a.fake=o.fake=!0;u--;)l.prototype[s[u]]=u+1;return d.createObjectURL||(m=e.URL=function(e){var t,n=document.createElementNS("http://www.w3.org/1999/xhtml","a");return n.href=e,"origin"in n||("data:"===n.protocol.toLowerCase()?n.origin=null:(t=e.match(O),n.origin=t&&t[1])),n}),m.createObjectURL=function(e){var t,n=e.type;return null===n&&(n="application/octet-stream"),e instanceof a?(t="data:"+n,"base64"===e.encoding?t+";base64,"+e.data:"URI"===e.encoding?t+","+decodeURIComponent(e.data):f?t+";base64,"+f(e.data):t+","+encodeURIComponent(e.data)):c?c.call(d,e):void 0},m.revokeObjectURL=function(e){"data:"!==e.substring(0,5)&&p&&p.call(d,e)},r.append=function(e){var n=this.data;if(g&&(e instanceof _||e instanceof g)){for(var r="",o=new g(e),s=0,u=o.length;s<u;s++)r+=String.fromCharCode(o[s]);n.push(r)}else if("Blob"===t(e)||"File"===t(e)){if(!i)throw new l("NOT_READABLE_ERR");var d=new i;n.push(d.readAsBinaryString(e))}else e instanceof a?"base64"===e.encoding&&R?n.push(R(e.data)):"URI"===e.encoding?n.push(decodeURIComponent(e.data)):"raw"===e.encoding&&n.push(e.data):("string"!=typeof e&&(e+=""),n.push(unescape(encodeURIComponent(e))))},r.getBlob=function(e){return arguments.length||(e=null),new a(this.data.join(""),e,"raw")},r.toString=function(){return"[object BlobBuilder]"},o.slice=function(e,t,n){var r=arguments.length;return r<3&&(n=null),new a(this.data.slice(e,r>1?t:this.data.length),n,this.encoding)},o.toString=function(){return"[object Blob]"},o.close=function(){this.size=0,delete this.data},n}(e);e.Blob=function(e,n){var a=n?n.type||"":"",r=new t;if(e)for(var o=0,i=e.length;o<i;o++)Uint8Array&&e[o]instanceof Uint8Array?r.append(e[o].buffer):r.append(e[o]);var l=r.getBlob(a);return!l.slice&&l.webkitSlice&&(l.slice=l.webkitSlice),l};var n=Object.getPrototypeOf||function(e){return e.__proto__};e.Blob.prototype=n(new e.Blob)}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content||this)},function(e,t,n){"use strict";e.exports=function(){return n(6).saveAs||function(){}}},function(e,t,n){var a,r,o=o||function(e){"use strict";if(!("undefined"==typeof e||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=e.document,n=function(){return e.URL||e.webkitURL||e},a=t.createElementNS("http://www.w3.org/1999/xhtml","a"),r="download"in a,o=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement),l=/CriOS\/[\d]+/.test(navigator.userAgent),s=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},u="application/octet-stream",d=4e4,c=function(e){var t=function(){"string"==typeof e?n().revokeObjectURL(e):e.remove()};setTimeout(t,d)},p=function(e,t,n){t=[].concat(t);for(var a=t.length;a--;){var r=e["on"+t[a]];if("function"==typeof r)try{r.call(e,n||e)}catch(e){s(e)}}},m=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e},f=function(t,s,d){d||(t=m(t));var f,R=this,_=t.type,g=_===u,O=function(){p(R,"writestart progress write writeend".split(" "))},E=function(){if((l||g&&i)&&e.FileReader){var a=new FileReader;return a.onloadend=function(){var t=l?a.result:a.result.replace(/^data:[^;]*;/,"data:attachment/file;"),n=e.open(t,"_blank");n||(e.location.href=t),t=void 0,R.readyState=R.DONE,O()},a.readAsDataURL(t),void(R.readyState=R.INIT)}if(f||(f=n().createObjectURL(t)),g)e.location.href=f;else{var r=e.open(f,"_blank");r||(e.location.href=f)}R.readyState=R.DONE,O(),c(f)};return R.readyState=R.INIT,r?(f=n().createObjectURL(t),void setTimeout(function(){a.href=f,a.download=s,o(a),O(),c(f),R.readyState=R.DONE})):void E()},R=f.prototype,_=function(e,t,n){return new f(e,t||e.name||"download",n)};return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return t=t||e.name||"download",n||(e=m(e)),navigator.msSaveOrOpenBlob(e,t)}:(R.abort=function(){},R.readyState=R.INIT=0,R.WRITING=1,R.DONE=2,R.error=R.onwritestart=R.onprogress=R.onwrite=R.onabort=R.onerror=R.onwriteend=null,_)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);"undefined"!=typeof e&&e.exports?e.exports.saveAs=o:null!==n(7)&&null!==n(8)&&(a=[],r=function(){return o}.apply(t,a),!(void 0!==r&&(e.exports=r)))},function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},function(e,t){(function(t){e.exports=t}).call(t,{})}])})},function(e,t,n){n(33),e.exports="angular-storage"},function(e,t,n){"use strict";function a(e){return/^[+-]?\d+(\.\d+)?$/.test(e)}function r(e){return/^([0-9A-F]{2}[:]){5}([0-9A-F]{2})$/.test(e)}function o(e){return/^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(e)}function i(e){return/^(?![0-9]+$)(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$/.test(e)}function l(e){return/^[A-Za-z0-9_-]{3,255}$/.test(e)}function s(e){return/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/.test(e)}function u(e){return/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/.test(e)}function d(e){return/^(?=.*\d)(?=.*[a-zA-Z]).{6,100}$/.test(e)}function c(e){return"0.0.0.0"!==e&&(!!/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(e)&&!/2(?:2[4-9]|3\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d?|0)){3}/.test(e))}function p(e,t){var n=void 0,a=t.length;for(n=0;n<a;n++)e.setType(t[n])}function m(e,t){var n=void 0,a=t.length;for(n=0;n<a;n++)e.setWrapper(t[n])}Object.defineProperty(t,"__esModule",{value:!0});var f=[{name:"datetimepicker",template:'<div layout>\n                <md-datepicker style="margin-top: 15px;"\n                  ng-model="to.date"\n                  md-placeholder="{{to.datePlaceholder | translate}}"\n                  ng-required="to.required"></md-datepicker>\n                <md-input-container flex>\n                  <label translate="{{to.hourLabel}}"></label>\n                  <input type="number" ng-model="to.hour" ng-required="to.required">\n                </md-input-container>\n                <md-input-container flex>\n                  <label translate="{{to.minLabel}}"></label>\n                  <input type="number" ng-model="to.minute" ng-required="to.required">\n                </md-input-container>\n              </div>',controller:["$scope",function(e){"ngInject";var t=new Date(e.model[e.options.key]);e.options.templateOptions.date=t,e.options.templateOptions.hour=t.getHours(),e.options.templateOptions.minute=t.getMinutes(),e.$watchGroup(["options.templateOptions.date","options.templateOptions.hour","options.templateOptions.minute"],function(e,t,n){var a=e[0];a&&(a.setHours(e[1]),a.setMinutes(e[2]),n.model[n.options.key]=a)})}],defaultOptions:{templateOptions:{datePlaceholder:"FORM_PLACEHOLDER_SELECT_DATE",hourLabel:"FORM_LABEL_HOUR",minLabel:"FORM_LABEL_MINUTE"}}},{name:"textarea",template:'<textarea ng-model="model[options.key]"\n                rows="{{to.rows}}" columns="{{to.columns}}"></textarea>',defaultOptions:{templateOptions:{label:"FORM_LABEL_TEXTAREA"}}},{name:"switch",template:'<md-switch class="md-primary"\n                aria-label="Switch"\n                ng-model="model[options.key]">\n                  <span translate="{{to.label}}"></span>\n              </md-switch>',defaultOptions:{templateOptions:{label:"FORM_LABEL_SWITCH"}}},{name:"url",template:'<input type="url" ng-model="model[options.key]">',defaultOptions:{templateOptions:{label:"FORM_LABEL_URL"},validation:{messages:{url:'"FORM_URL_ERROR_MSG"'}}}},{name:"range",template:'<md-slider\n              style="padding: 0 20px;"\n              ng-model="model[options.key]"\n              ng-min="to.min"\n              ng-max="to.max"\n              aria-label="slider"\n              class="md-primary"></md-slider>',defaultOptions:{templateOptions:{label:"FORM_LABEL_RANGE"}}},{name:"input",template:'<input ng-model="model[options.key]" ng-minlength="to.minlength" ng-maxlength="to.maxlength">',defaultOptions:{templateOptions:{label:""}}},{name:"file",template:'<div layout>\n                <md-input-container style="width: 100%">\n                  <label translate="{{to.label}}"></label>\n                  <input style="color: rgba(0,0,0,0.87);" ng-model="$file.name" readonly>\n                </md-input-container>\n                <md-input-container style="margin-top: 6px;">\n                  <md-button class="md-raised" ngf-select="fileSelect($file, options.key)" ng-model="$file"\n                   ngf-accept="{{to.accept}}" ngf-max-size="{{to.maxSize}}" aria-label="select file">\n                    <span translate="FORM_SELECT_BUTTON"></span>\n                  </md-button>\n                </md-input-container>\n              </div>',controller:["$scope",function(e){"ngInject";e.fileSelect=function(t,n){if(t)if(void 0===e.formOptions.files)e.formOptions.files=[],e.formOptions.files.push({key:n,file:t});else{var a=e.formOptions.files.findIndex(function(e){return e.key===n});-1===a?e.formOptions.files.push({key:n,file:t}):e.formOptions.files[a].file=t}}}],defaultOptions:{templateOptions:{label:"FORM_LABEL_FILE"}}},{name:"date",template:'<input type="date" ng-model="model[options.key]" ng-min="to.min" ng-max="to.max">',defaultOptions:{templateOptions:{label:"FORM_LABEL_DATE"}}},{name:"datetime",template:'<input type="datetime-local" ng-model="model[options.key]" ng-min="to.min" ng-max="to.max">',defaultOptions:{templateOptions:{label:"FORM_LABEL_DATE_TIME"}}},{name:"email",template:'<input type="email" ng-model="model[options.key]">',defaultOptions:{templateOptions:{label:"FORM_LABEL_EMAIL"},validation:{messages:{email:'"FORM_EMAIL_ERROR_MSG"'}}}},{name:"number",template:'<input type="number" ng-model="model[options.key]" min="{{to.min}}" max="{{to.max}}">',defaultOptions:{templateOptions:{label:"FORM_LABEL_NUMBER",min:-65535,max:65535}}},{name:"radio",template:'<md-radio-group ng-model="model[options.key]">\n                  <md-radio-button class="md-primary" aria-label="{{item.label}}"\n                  ng-repeat="item in to.options track by $index"\n                  ng-value="item.value">\n                    <span translate="{{item.label}}"></span>\n                  </md-radio-button>\n              </md-radio-group>',defaultOptions:{templateOptions:{options:[{label:"FORM_LABEL_RADIO_OPTION",value:""}]}}},{name:"datepicker",template:'<md-datepicker\n                ng-model="model[options.key]"\n                md-placeholder="{{to.placeholder}}"\n                md-min-date="to.min"\n                md-max-date="to.max"\n                ng-required="to.required"></md-datepicker>'},{name:"select",template:'<md-option\n                ng-repeat="item in to.options track by $index"\n                ng-value="item.value || item">\n                  <span translate="{{item.label || item}}"></span>\n                </md-option>',defaultOptions:{templateOptions:{options:[{label:"FORM_LABEL_SELECT_OPTION",value:""}]}}},{name:"checkbox",template:'<md-checkbox ng-model="model[options.key]" aria-label="{{::to.label}}">\n                <span translate="{{to.label}}"></span>\n              </md-checkbox>',defaultOptions:{templateOptions:{label:"FORM_LABEL_CHECKBOX"}}},{name:"ip",defaultOptions:{templateOptions:{label:"FORM_LABEL_IP",placeholder:"127.0.0.1"},validators:{ip:{expression:function(e,t){var n=t||e;return!n||c(n)},message:'"FORM_IP_ERROR_MSG"'}}}},{name:"latitude",defaultOptions:{templateOptions:{label:"FORM_LABEL_LATITUDE"},validators:{latitude:{expression:function(e,t){var n=t||e;return!n||s(n)},message:'"FORM_LATITUDE_ERROR_MSG"'}}}},{name:"longitude",defaultOptions:{templateOptions:{label:"FORM_LABEL_LONGITUDE"},validators:{longitude:{expression:function(e,t){var n=t||e;return!n||u(n)},message:'"FORM_LONITUDE_ERROR_MSG"'}}}},{name:"password",template:'<input type="password" ng-model="model[options.key]">',defaultOptions:{templateOptions:{label:"FORM_LABEL_PASSWORD"},validators:{password:{expression:function(e,t){var n=t||e;return!n||d(n)},message:'"FORM_PASSWORD_ERROR_MSG"'}}}},{name:"aliasName",defaultOptions:{templateOptions:{label:"FORM_LABEL_NAME"},validators:{aliasName:{expression:function(e,t){var n=t||e;return!n||l(n)},message:'"FORM_ALIASNAME_ERROR_MSG"'}}}},{name:"hostname",defaultOptions:{templateOptions:{label:"FORM_LABEL_HOSTNAME"},validators:{hostname:{expression:function(e,t){var n=t||e;return!n||i(n)},message:'"FORM_HOSTNAME_ERROR_MSG"'}}}},{name:"port",defaultOptions:{templateOptions:{label:"FORM_LABEL_PORT"},validators:{port:{expression:function(e,t){var n=t||e;return!n||o(n)},message:'"FORM_PORT_ERROR_MSG"'}}}},{name:"mac",defaultOptions:{templateOptions:{label:"FORM_LABEL_MAC"},validators:{mac:{expression:function(e,t){var n=t||e;return!n||r(n)},message:'"FORM_MAC_ERROR_MSG"'}}}},{name:"float",template:'<input type="number" step="any" ng-model="model[options.key]" min="{{to.min}}" max="{{to.max}}">',defaultOptions:{templateOptions:{label:"FORM_LABEL_FLOAT",min:-65535,max:65535},validators:{float:{expression:function(e,t){var n=t||e;return!n||a(n)},message:'"FORM_FLOAT_ERROR_MSG"'}}}},{name:"matchField",defaultOptions:function(e){return{validators:{fieldMatch:{expression:function(t,n,a){var r=n||t,o=a.model;return r===o[e.data.fieldToMatch]},message:e.data.matchFieldMessage||'"Must match!"'}}}}}],R=[{name:"mdLabel",types:["input","number","date","datetime","email","password","range","url","float","textarea"],template:'<label translate="{{to.label}}"></label>\n              <formly-transclude></formly-transclude>'},{name:"mdSelect",types:["select"],template:'<md-input-container class="md-block">\n                <label translate="{{to.label}}"></label>\n                <md-select ng-model="model[options.key]" aria-label="select" ng-required="{{to.required}}">\n                  <formly-transclude></formly-transclude>\n                </md-select>\n                <div ng-messages="fc.$error" ng-show="showError">\n                  <div ng-repeat="(name, message) in options.validation.messages"\n                  ng-message="{{name}}">\n                    {{message(fc.$viewValue, fc.$modelValue, this) | translate:options}}\n                  </div>\n                </div>\n              </md-input-container>'},{name:"mdInputContainer",types:["input","number","date","datetime","email","password","file","url","float","textarea"],template:'<md-input-container class="md-block">\n                <formly-transclude></formly-transclude>\n                <div ng-messages="fc.$error" ng-show="showError">\n                  <div ng-repeat="(name, message) in options.validation.messages"\n                  ng-message="{{name}}">\n                    {{message(fc.$viewValue, fc.$modelValue, this) | translate:options}}\n                  </div>\n                </div>\n              </md-input-container>'}];t.default=function(e){e.config(["formlyConfigProvider",function(e){e.disableWarnings=!0,e.extras.removeChromeAutoComplete=!0,e.extras.explicitAsync=!0,e.extras.ngModelAttrsManipulatorPreferBound=!0}]),e.run(["formlyConfig","formlyValidationMessages","$filter",function(e,t,n){p(e,f),m(e,R),t.addStringMessage("required",n("translate")("FORM_REQUIRED_ERROR_MSG")),t.addTemplateOptionValueMessage("min","min","",n("translate")("FORM_MIN_ERROR_MSG2"),n("translate")("FORM_MIN_ERROR_MSG")),t.addTemplateOptionValueMessage("max","max","",n("translate")("FORM_MAX_ERROR_MSG2"),n("translate")("FORM_MAX_ERROR_MSG")),t.addTemplateOptionValueMessage("minlength","minlength","",n("translate")("FORM_MINLEN_ERROR_MSG2"),n("translate")("FORM_MINLEN_ERROR_MSG")),t.addTemplateOptionValueMessage("maxlength","maxlength","",n("translate")("FORM_MAXLEN_ERROR_MSG2"),n("translate")("FORM_MAXLEN_ERROR_MSG")),t.addTemplateOptionValueMessage("pattern","patternValidationMessage","","",n("translate")("FORM_PATTERN_ERROR_MSG"))}])}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["$translateProvider","$provide",function(e,t){"ngInject";var a={key:"en",label:"English"},r={key:"zh-tw",label:"繁體中文"};t.constant("LANG_KEYS",[a,r]),e.translations(a.key,n(34)),e.translations(r.key,n(35)),e.preferredLanguage(a.key).fallbackLanguage(a.key).useCookieStorage().useSanitizeValueStrategy("escape")}]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["routerHelper",function(e){"ngInject";function t(){return[{state:"404",config:{url:"/404",templateUrl:"404.html",title:"404 Error"}}]}var n="/404";e.configureStates(t(),n)}]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["$mdThemingProvider",function(e){"ngInject";e.definePalette("moxa-material",{50:"#E6F3F3",100:"#B3DBDB",200:"#80C3C3",300:"#55AFAF",400:"#2A9B9B",500:"#008787",600:"#007676",700:"#006565",800:"#006565",900:"#006565",A100:"#006565",A200:"#006565",A400:"#006565",A700:"#006565",contrastDefaultColor:"light",contrastDarkColors:["50","100","200","300","400","A100"],contrastLightColors:void 0}),e.theme("moxa").primaryPalette("moxa-material"),e.setDefaultTheme("moxa")}]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["toastr",function(e){"ngInject";e.options.timeOut=6e3,e.options.positionClass="toast-bottom-right",e.options.progressBar=!0}]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["$httpProvider","$compileProvider","$logProvider","routerHelperProvider","exceptionHandlerProvider","storeProvider",function(e,t,n,a,r,o){"ngInject";var i={appErrorPrefix:"[webapp Error] ",appTitle:"webapp"};e.useApplyAsync(!0),t.debugInfoEnabled(!1),n.debugEnabled(!1),r.configure(i.appErrorPrefix),a.configure({docTitle:i.appTitle+": ",defaultRoute:"/"}),o.setStore("sessionStorage")}]},function(e,t){var n,a=window.angular;try{n=a.module(["ng"])}catch(e){n=a.module("ng",[])}var r='\n<div class="container">\n    <div class="text-center" style="padding-top: 10%">\n      <h1 class="text-warning">\n        <i class="fa fa-exclamation-triangle fa-lg fa-5x"></i>\n      </h1>\n      <h1 class="text-primary">404</h1>\n      <h1><small translate="404_NOT_FOUND"></small></h1>\n      <p class="lead" translate="404_MESSAGE_1"></p>\n      <p class="lead" translate="404_MESSAGE_2"></p>\n      <ul class="list-unstyled">\n        <li>1. <span translate="404_MESSAGE_3"></span></li><li>2. <span translate="404_MESSAGE_4"></span></li>\n      </ul>\n    </div>\n  </div>\n',o="404.html",i=a.element(window.document).injector();i?i.get("$templateCache").put(o,r):n.run(["$templateCache",function(e){e.put(o,r)}]),e.exports=r},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=a},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t){e.exports=l},function(e,t){e.exports=s},function(e,t){e.exports=u},function(e,t){e.exports=d},function(e,t){e.exports=c},function(e,t){e.exports=p},function(e,t){e.exports=m},function(e,t){e.exports=f},function(e,t){e.exports=R},function(e,t){e.exports=_},function(e,t){e.exports=g},function(e,t){e.exports=O},function(e,t){e.exports=E},function(e,t){e.exports=M},function(e,t){e.exports=L},function(e,t){e.exports=A},function(e,t){e.exports=h},function(e,t){!function(){angular.module("angular-storage",["angular-storage.store"]),angular.module("angular-storage.cookieStorage",[]).service("cookieStorage",["$cookies",function(e){this.set=function(t,n){return e.put(t,n)},this.get=function(t){return e.get(t)},this.remove=function(t){return e.remove(t)}}]),angular.module("angular-storage.internalStore",["angular-storage.localStorage","angular-storage.sessionStorage"]).factory("InternalStore",["$log","$injector",function(e,t){function n(e,n,a,r){this.namespace=e||null,(angular.isUndefined(r)||null==r)&&(r=!0),this.useCache=r,this.delimiter=a||".",this.inMemoryCache={},this.storage=t.get(n||"localStorage")}return n.prototype.getNamespacedKey=function(e){return this.namespace?[this.namespace,e].join(this.delimiter):e},n.prototype.set=function(e,t){this.useCache&&(this.inMemoryCache[e]=t),this.storage.set(this.getNamespacedKey(e),JSON.stringify(t))},n.prototype.get=function(t){var n=null;if(this.useCache&&t in this.inMemoryCache)return this.inMemoryCache[t];var a=this.storage.get(this.getNamespacedKey(t));try{n="undefined"==typeof a||"undefined"===a?void 0:JSON.parse(a),this.useCache&&(this.inMemoryCache[t]=n)}catch(n){e.error("Error parsing saved value",n),this.remove(t)}return n},n.prototype.remove=function(e){this.useCache&&(this.inMemoryCache[e]=null),this.storage.remove(this.getNamespacedKey(e))},n}]),angular.module("angular-storage.localStorage",["angular-storage.cookieStorage"]).service("localStorage",["$window","$injector",function(e,t){var n;try{e.localStorage.setItem("testKey","test"),e.localStorage.removeItem("testKey"),n=!0}catch(e){n=!1}if(n)this.set=function(t,n){return e.localStorage.setItem(t,n)},this.get=function(t){return e.localStorage.getItem(t)},this.remove=function(t){return e.localStorage.removeItem(t)},this.clear=function(){e.localStorage.clear()};else{var a=t.get("cookieStorage");this.set=a.set,this.get=a.get,this.remove=a.remove}}]),angular.module("angular-storage.sessionStorage",["angular-storage.cookieStorage"]).service("sessionStorage",["$window","$injector",function(e,t){var n;try{e.sessionStorage.setItem("testKey","test"),e.sessionStorage.removeItem("testKey"),n=!0}catch(e){n=!1}if(n)this.set=function(t,n){return e.sessionStorage.setItem(t,n)},this.get=function(t){return e.sessionStorage.getItem(t)},this.remove=function(t){return e.sessionStorage.removeItem(t)};else{var a=t.get("cookieStorage");this.set=a.set,this.get=a.get,this.remove=a.remove}}]),angular.module("angular-storage.store",["angular-storage.internalStore"]).provider("store",function(){var e="localStorage",t=!0;this.setStore=function(t){t&&angular.isString(t)&&(e=t)},this.setCaching=function(e){t=!!e},this.$get=["InternalStore",function(n){var a=new n(null,e,null,t);return a.getNamespacedStore=function(e,t,a,r){return new n(e,t,a,r)},a}]})}()},function(e,t){e.exports={"404_NOT_FOUND":"Not found","404_MESSAGE_1":"Sorry, but the page you were trying to view does not exist.","404_MESSAGE_2":"It looks like this was the result of either:","404_MESSAGE_3":"a mistyped address","404_MESSAGE_4":"an out-of-date link",FORM_PLACEHOLDER_SELECT_DATE:"Select Date",FORM_SELECT_BUTTON:"Select",FORM_LABEL_SWITCH:"Enable",FORM_LABEL_URL:"URL",FORM_LABEL_RANGE:"Range",FORM_LABEL_FILE:"File",FORM_LABEL_DATE:"Date",FORM_LABEL_DATE_TIME:"Date Time",FORM_LABEL_EMAIL:"Email",FORM_LABEL_NUMBER:"Number",FORM_LABEL_RADIO_OPTION:"Radio Option",FORM_LABEL_SELECT_OPTION:"Please Select",FORM_LABEL_CHECKBOX:"Checkbox Label",FORM_LABEL_FLOAT:"Float",FORM_LABEL_IP:"IP",FORM_LABEL_LATITUDE:"Latitude",FORM_LABEL_LONGITUDE:"Longitude",FORM_LABEL_PASSWORD:"Password",FORM_LABEL_NAME:"Name",FORM_LABEL_HOSTNAME:"Hostname",FORM_LABEL_PORT:"Port",FORM_LABEL_MAC:"MAC",FORM_LABEL_HOUR:"Hour",FORM_LABEL_MINUTE:"Minute",FORM_LABEL_TEXTAREA:"Textarea",FORM_FLOAT_ERROR_MSG:"Invalid port format",FORM_MAC_ERROR_MSG:"Invalid MAC format",FORM_ALIASNAME_ERROR_MSG:"Allowed chars include A-Z,a-z,0-9,_,- and length must between 3 and 255.",FORM_HOSTNAME_ERROR_MSG:"Invalid hotname format",FORM_NAME_ERROR_MSG:"Invalid name format",FORM_PASSWORD_ERROR_MSG:"Invalid password format",FORM_LONGITUDE_ERROR_MSG:"Invalid longitude format",FORM_LATITUDE_ERROR_MSG:"Invalid latitude format",FORM_IP_ERROR_MSG:"Invalid IP format",FORM_EMAIL_ERROR_MSG:"Invalid email format",FORM_URL_ERROR_MSG:"Invalid URL format",FORM_REQUIRED_ERROR_MSG:"This field is required",FORM_MINLEN_ERROR_MSG:"Too short",FORM_MINLEN_ERROR_MSG2:"is the minimum length",FORM_MAXLEN_ERROR_MSG:"Too long",FORM_MAXLEN_ERROR_MSG2:"is the maximum length",FORM_MIN_ERROR_MSG:"Too samll",FORM_MIN_ERROR_MSG2:"The min value allowed is",FORM_MAX_ERROR_MSG:"Too big",FORM_MAX_ERROR_MSG2:"The max value allowed is",FORM_PATTERN_ERROR_MSG:"Invalid input format"}},function(e,t){e.exports={"404_NOT_FOUND":"找不到","404_MESSAGE_1":"對不起，你嘗試要瀏覽的頁面不存在","404_MESSAGE_2":"無法瀏覽可能的原因如下:","404_MESSAGE_3":"網址打錯","404_MESSAGE_4":"過時的連結",FORM_PLACEHOLDER_SELECT_DATE:"選擇日期",FORM_SELECT_BUTTON:"選擇",FORM_LABEL_SWITCH:"啟用",FORM_LABEL_URL:"URL",FORM_LABEL_RANGE:"範圍",FORM_LABEL_FILE:"檔案",FORM_LABEL_DATE:"日期",FORM_LABEL_DATE_TIME:"日期時間",FORM_LABEL_EMAIL:"電子信箱",FORM_LABEL_NUMBER:"整數",FORM_LABEL_RADIO_OPTION:"單選選項",FORM_LABEL_SELECT_OPTION:"請選擇",FORM_LABEL_CHECKBOX:"檢查方塊名稱",FORM_LABEL_FLOAT:"浮點數",FORM_LABEL_IP:"網路位址",FORM_LABEL_LATITUDE:"緯度",FORM_LABEL_LONGITUDE:"經度",FORM_LABEL_PASSWORD:"密碼",FORM_LABEL_NAME:"名稱",FORM_LABEL_HOSTNAME:"主機名稱",FORM_LABEL_PORT:"埠號",FORM_LABEL_MAC:"MAC",FORM_LABEL_HOUR:"小時",FORM_LABEL_MINUTE:"分鐘",FORM_LABEL_TEXTAREA:"文字區塊",FORM_FLOAT_ERROR_MSG:"埠格式錯誤",FORM_MAC_ERROR_MSG:"MAC 格式錯誤",FORM_ALIASNAME_ERROR_MSG:"字元只允許包含 A-Z,a-z,0-9,_,- 並且長度在3-255之間",FORM_HOSTNAME_ERROR_MSG:"主機名稱格式錯誤",FORM_NAME_ERROR_MSG:"名稱格式錯誤",FORM_PASSWORD_ERROR_MSG:"密碼格式錯誤",FORM_LONGITUDE_ERROR_MSG:"經度格式錯誤",FORM_LATITUDE_ERROR_MSG:"緯度格式錯誤",FORM_IP_ERROR_MSG:"IP 格式錯誤",FORM_EMAIL_ERROR_MSG:"電子郵件格式錯誤",FORM_URL_ERROR_MSG:"URL 格式錯誤",FORM_REQUIRED_ERROR_MSG:"欄位不能為空",FORM_MIN_ERROR_MSG:"輸入值太小",FORM_MIN_ERROR_MSG2:"最小值是",FORM_MAX_ERROR_MSG:"輸入值太大",FORM_MAX_ERROR_MSG2:"最大值是",FORM_MINLEN_ERROR_MSG:"長度太短",FORM_MINLEN_ERROR_MSG2:"是最短長度",FORM_MAXLEN_ERROR_MSG:"長度太長",FORM_MAXLEN_ERROR_MSG2:"是最長長度",FORM_PATTERN_ERROR_MSG:"輸入格式錯誤"}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.sjCore=void 0,n(25),n(26);var r=n(32),o=a(r),i=n(30),l=a(i),s=n(24),u=a(s),d=n(27),c=a(d),p=n(9),m=a(p),f=n(19),R=a(f),_=n(10),g=a(_),O=n(14),E=a(O),M=n(17),L=a(M),A=n(16),h=a(A),S=n(13),v=a(S),b=n(1),y=a(b),F=n(22),x=a(F);n(23);var T=n(15),I=a(T),B=n(20),w=a(B),N=n(21),k=a(N),G=n(0),C=a(G),U=n(29),q=a(U),j=n(31);n(28),n(18),n(12),n(11),n(8);var D=n(5),P=a(D),$=n(3),H=a($),z=n(7),X=a(z),W=n(6),K=a(W),V=n(4),Z=a(V),Q=n(2),Y=a(Q);o.default.load({google:{families:["Roboto"]}});var J=m.default.module("sanji.core",[R.default,g.default,E.default,L.default,h.default,I.default,"angularMoment","angular.filter",C.default,k.default,v.default,y.default,x.default,w.default,q.default,"ngLetterAvatar","angular-cron-jobs",j.sjUtils]);J.constant("pathToRegexp",l.default),J.constant("apiCheck",u.default),J.constant("moment",c.default),J.config(P.default),J.config(H.default),J.config(X.default),J.config(K.default),J.filter("trustAsResourceUrl",["$sce",function(e){return function(t){return e.trustAsResourceUrl(t)}}]),J.run(Z.default),J.run(["$state",function(e){"ngInject";e.defaultErrorHandler(function(){})}]),(0,Y.default)(J),u.default.globalConfig.disabled=!0;var ee=J.name;t.sjCore=ee}])});