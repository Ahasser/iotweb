(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3cf126a"],{7819:function(t,e,i){},f1b3:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"device_page"},[i("div",[i("div",{staticClass:"house"},[i("i",{staticClass:"iconfont icon-fangzi"}),i("div",{staticClass:"msg"},[i("div",{staticClass:"hum"},[i("span",{staticClass:"val"},[t._v(t._s(t.eqp.humiditySet))]),t._m(0)]),i("div",{staticClass:"tem"},[i("span",{staticClass:"val"},[t._v(t._s(t.eqp.temperature1))]),t._m(1)])])]),i("ul",{staticClass:"device_grid"},[i("li",{class:t.eqp.status?"":"forbiden",on:{click:function(e){t.eqp_status(t.eqp.status)}}},[i("i",{staticClass:"iconfont icon-kaiguan"}),i("span",{staticClass:"text"},[t._v("开")])]),i("li",{on:{click:function(e){t.eqp_fanSpeed(t.eqp.fanSpeed)}}},[1==t.eqp.fanSpeed?[i("i",{staticClass:"iconfont icon-yijifeng"}),i("span",{staticClass:"text"},[t._v("风速低")])]:2==t.eqp.fanSpeed||4==t.eqp.fanSpeed?[i("i",{staticClass:"iconfont icon-erjifeng"}),i("span",{staticClass:"text"},[t._v("风速中")])]:3==t.eqp.fanSpeed?[i("i",{staticClass:"iconfont icon-sanjifeng"}),i("span",{staticClass:"text"},[t._v("风速高")])]:t._e()],2),i("li",{on:{click:function(e){t.eqp_fanSpeed_auto(t.eqp.fanSpeed_auto)}}},[t.eqp.fanSpeed_auto?[i("i",{staticClass:"iconfont icon-A"}),i("span",{staticClass:"text"},[t._v("自动")])]:[i("i",{staticClass:"iconfont icon-M"}),i("span",{staticClass:"text"},[t._v("手动")])]],2),t._m(2),t._m(3)])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon"},[i("i",{staticClass:"iconfont icon-shidu"}),i("b",[t._v("%")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon"},[i("i",{staticClass:"iconfont icon-wendu"}),i("b",[t._v("℃")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("i",{staticClass:"iconfont icon-neichushi"}),i("span",{staticClass:"text"},[t._v("内除湿")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("i",{staticClass:"iconfont icon-shezhi"}),i("span",{staticClass:"text"},[t._v("设置")])])}],n=(i("cadf"),i("551c"),i("097d"),i("44be")),u={name:"Device",data:function(){return{Mqtt:null,eqp:{status:1,fanSpeed_auto:!1,fanSpeed_last:1,fanSpeed:1,humiditySet_last:0,humiditySet:80,humidity:0,airFilter:60,temperature1:18,temperature2:0,errorCode:0,slaveNo:null}}},created:function(){var t=this,e=new n["a"]({hostname:"wss://13xt3d9.mqtt.iot.gz.baidubce.com:8884/mqtt",options:{username:"13xt3d9/gh_0ddfb722a565_c9edd422aafdc95f",password:"xY9Y6MQUYdCvrnJK",clientId:"gh_0ddfb722a565_c9edd422aafdc95f"},topic:{sub:"$baidu/iot/shadow/gh_0ddfb722a565_c9edd422aafdc95f/delta",pub:"$baidu/iot/shadow/gh_0ddfb722a565_c9edd422aafdc95f/update"},arrived:function(e){console.log(e);var i=e.message.desired;t.compute_arrrived_data(i)},error:function(t){console.log(t)}});e.mqttParam.options.clientId="gh_0ddfb722a565_c9edd422aafdc95f",this.Mqtt_dev=e,this.Mqtt_dev.startSub(),this.publish("开机",{status:1,airFilter:1e3,errorCode:0,fanSpeed:1,humidity:80,humiditySet:80,temperature1:18,temperature2:15})},methods:{compute_arrrived_data:function(t){if("status"in t&&0<=t.status<=1&&(this.eqp.status=t.status,this.publish(null,{status:t.status})),"fanSpeed"in t&&1<=t.fanSpeed<=4&&(this.eqp.fanSpeed=t.fanSpeed,this.eqp.fanSpeed_auto=4==t.fanSpeed,this.publish(null,{fanSpeed:t.fanSpeed})),"humiditySet"in t&&0<=t.humiditySet<=100&&(this.eqp.humiditySet=t.humiditySet,this.eqp.humiditySet_last=t.humiditySet,this.publish(null,{humiditySet:t.humiditySet,humidity:t.humiditySet})),"humidity"in t&&(this.eqp.humidity=t.humidity),"airFilter"in t&&(this.eqp.airFilter=t.airFilter),"temperature1"in t&&(this.eqp.temperature1=t.temperature1),"temperature2"in t&&(this.eqp.temperature2=t.temperature2),"errorCode"in t){var e=t.errorCode;if(this.eqp.errorCode=e,0==e)return!1;var i="";switch(e){case 1:i="盘管温度传感器故障（E1）";break;case 2:i="湿度传感器故障（E2）";break;case 3:i="排水保护故障（E0）";break;case 4:i="低压报警（E4）";break;case 5:i="高温报警，环境温度 > 41 &#8451;（E8）";break;default:i="未知故障（"+e+"）";break}this.$toast({message:i,duration:1500})}if("slaveNo"in t&&(this.eqp.slaveNo=t.slaveNo),"timing"in t){console.log("timing");var s=t.timing,a={timing_on:s.timing_on,timing_start_hour:s.timing_start_hour,timing_start_min:s.timing_start_min,timing_end_hour:s.timing_end_hour,timing_end_min:s.timing_end_min};this.publish(null,{timing:a})}},publish:function(t,e){if(0==this.eqp.status&&!("status"in e))return this.$toast({message:"设备已关机",duration:1e3}),!1;this.Mqtt_dev.publish({reported:e}),null!=t&&this.$toast({message:t,duration:1e3})},eqp_status:function(t){t=1==t?0:1;var e=1==t?"开机":"关机";this.publish(e,{status:t}),this.eqp.status=t},eqp_fanSpeed:function(t){if(!this.eqp.status)return!1;var e="自动模式无法控制风速";4!=t?(t=++t>3?1:t,e="风速 "+t,this.publish(e,{fanSpeed:t}),this.eqp.fanSpeed=t):this.$toast({message:e,duration:1e3})},eqp_fanSpeed_auto:function(t){if(!this.eqp.status)return!1;this.eqp.fanSpeed_auto=!t,this.eqp.fanSpeed=t?this.eqp.fanSpeed_last:4,t=t?this.eqp.fanSpeed_last:4;var e=4==t?"自动":"手动";this.publish(e,{fanSpeed:t})}},beforeDestroy:function(){this.publish("关机",{status:0})},destroyed:function(){this.Mqtt_dev.closeSub()}},c=u,d=(i("f748"),i("2877")),o=Object(d["a"])(c,s,a,!1,null,"0cebb746",null);o.options.__file="device.vue";e["default"]=o.exports},f748:function(t,e,i){"use strict";var s=i("7819"),a=i.n(s);a.a}}]);
//# sourceMappingURL=chunk-c3cf126a.acb4be36.js.map