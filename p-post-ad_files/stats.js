google.maps.__gjsload__('stats', function(_){'use strict';var e3=function(a,b,c){var d=[];_.Oc(a,function(a,c){d.push(c+b+a)});return d.join(c)};var f3=function(a,b,c,d){var e={};e.host=window.document.location&&window.document.location.host||window.location.host;e.v=a;e.r=Math.round(1/b);c&&(e.client=c);d&&(e.key=d);return e};var pca=function(a){var b={};_.Oc(a,function(a,d){b[(0,window.encodeURIComponent)(d)]=(0,window.encodeURIComponent)(a).replace(/%7C/g,"|")});return e3(b,":",",")};var qca=function(){this.j=new _.tB;this.O=0};
var g3=function(a,b){var c=new window.Image,d=a.O++;a.j.set(d,c);c.onload=c.onerror=function(){c.onload=c.onerror=_.sa;a.j.remove(d)};c.src=b};var rca=function(a,b,c,d){var e=_.R.N[23],f=_.R.N[22];this.V=a;this.na=b;this.oa=null!=e?e:500;this.S=null!=f?f:2;this.U=c;this.T=d;this.O=new _.tB;this.j=0;this.P=_.Ba();h3(this)};var h3=function(a){window.setTimeout(function(){sca(a);h3(a)},Math.min(a.oa*Math.pow(a.S,a.j),2147483647))};var i3=function(a,b,c){a.O.set(b,c)};
var sca=function(a){var b=f3(a.na,a.U,a.T,void 0);b.t=a.j+"-"+(_.Ba()-a.P);a.O.forEach(function(a,d){var e=a();0<e&&(b[d]=Number(e.toFixed(2))+(_.Bk()?"":"-if"))});a.V.j({ev:"api_snap"},b);++a.j};var j3=function(a,b,c,d,e){this.T=a;this.V=b;this.S=c;this.O=d;this.P=e;this.j=new _.tB;this.U=_.Ba()};var k3=function(a,b){this.S=b;this.P=a+"/maps/gen_204";this.O=new qca};var l3=function(){this.N=new _.tB};var tca=function(a){var b=0,c=0;a.N.forEach(function(a){b+=a.Kr;c+=a.ir});return c?b/c:0};
var m3=function(a,b,c,d,e){this.U=a;this.V=b;this.T=c;this.P=d;this.S=e;this.O={};this.j=[]};var n3=function(a,b,c,d){this.P=a;_.I.bind(this.P,"set_at",this,this.S);_.I.bind(this.P,"insert_at",this,this.S);this.U=b;this.V=c;this.T=d;this.O=0;this.j={};this.S()};var o3=function(){this.j={}};var uca=function(){this.j=[];this.O=[]};var p3=function(a,b,c){this.j=a;this.O=b;this.P=c};
var vca=function(a,b){a.j.j.push(b);var c=a.O,d=_.nb(b),c=c.j;d in c||(c[d]=0);++c[d];d=a.j;if(d.j.length+d.O.length>a.P){c=a.j;d=c.O;c=c.j;if(!d.length)for(;c.length;)d.push(c.pop());(d=d.pop())&&a.O.remove(d)}};var q3=function(a,b){this.T=new p3(new uca,new o3,100);this.O=null;this.Ba=[];this.S=a;_.I.bind(a,"insert_at",this,this.Se);_.I.bind(a,"set_at",this,this.Se);_.I.bind(a,"remove_at",this,this.Se);this.Se();this.j=0;this.pa=b;this.P=0};
var r3=function(){this.j=_.Ue(_.R);var a;_.uj()?(a=_.Me(_.R).N[11],a=null!=a?a:""):a=_.wx;this.Vc=new k3(a,_.bi);new n3(_.Yh,(0,_.t)(this.Vc.j,this.Vc),_.Jf,!!this.j);a=_.Qe(_.Ye());this.T=a.split(".")[1]||a;_.ai&&(this.O=new rca(this.Vc,this.T,this.na,this.j));this.U={};this.S={};this.P={};this.V={};this.na=_.Te()};
j3.prototype.yh=function(a,b){var c=_.ra(b)?b:1;this.j.isEmpty()&&window.setTimeout((0,_.t)(function(){var a=f3(this.V,this.S,this.O,this.P);a.t=_.Ba()-this.U;var b=this.j;_.uB(b);for(var c={},g=0;g<b.j.length;g++){var h=b.j[g];c[h]=b.pa[h]}_.sA(a,c);this.j.clear();this.T.j({ev:"api_maprft"},a)},this),500);c=this.j.get(a,0)+c;this.j.set(a,c)};
k3.prototype.j=function(a,b){var c=b||{},d=_.fj().toString(36);c.src="apiv3";c.token=this.S;c.ts=d.substr(d.length-6);a.cad=pca(c);c=e3(a,"=","&");g3(this.O,this.P+"?target=api&"+c)};k3.prototype.Fh=function(a){g3(this.O,a)};l3.prototype.update=function(a,b,c){this.N.set(_.nb(a),{Kr:b,ir:c})};m3.prototype.yh=function(a){this.O[a]||(this.O[a]=!0,this.j.push(a),2>this.j.length&&_.NA(this,this.na,500))};
m3.prototype.na=function(){for(var a=f3(this.V,this.T,this.P,this.S),b=0,c;c=this.j[b];++b)a[c]="1";a.hybrid=+(_.Wj()&&_.Xj());this.j.length=0;this.U.j({ev:"api_mapft"},a)};n3.prototype.S=function(){for(var a;a=this.P.removeAt(0);){var b=a.Kq;a=a.timestamp-this.V;++this.O;this.j[b]||(this.j[b]=0);++this.j[b];if(20<=this.O&&!(this.O%5)){var c={};c.s=b;c.sr=this.j[b];c.tr=this.O;c.te=a;c.hc=this.T?"1":"0";this.U({ev:"api_services"},c)}}};o3.prototype.remove=function(a){a=_.nb(a);var b=this.j;a in b&&(--b[a],b[a]||delete b[a])};p3.prototype.contains=function(a){return!!this.O.j[_.nb(a)]};_.y(q3,_.J);_.m=q3.prototype;_.m.Se=function(){_.G(this.Ba,_.I.removeListener);this.Ba.length=0;var a=this.Ba,b=(0,_.t)(this.Eg,this);this.S.forEach(function(c){a.push(_.I.addListener(c.data,"insert",b))});b()};
_.m.Eg=function(){var a=this.get("bounds");if(this.get("projection")&&a&&this.O){var b={};this.S.forEach((0,_.t)(function(c){c.data.forEach((0,_.t)(function(c){var d=c.rawData;if(0==(""+d.layer).indexOf(this.O.substr(0,5))&&d.features){c=d.id.length;for(var e=_.rJ(d.id),d=d.features,k=0,n;n=d[k];k++){var p=n.id,q;a:{q=n;if(!q.latLngCached){var r=q.a;if(!r){q=null;break a}var v=new _.N(r[0],r[1]),r=e,v=[v.x,v.y],x=(1<<c)/8388608;v[0]/=x;v[1]/=x;v[0]+=r.ua;v[1]+=r.ra;v[0]/=8388608;v[1]/=8388608;r=new _.N(v[0],
v[1]);v=this.get("projection");q.latLngCached=v&&v.fromPointToLatLng(r)}q=q.latLngCached}q&&a.contains(q)&&(b[p]=n)}}},this))},this));var c=this.T,d;for(d in b)c.contains(d)||(++this.j,vca(c,d));!this.P&&this.j&&(this.P=_.NA(this,this.To,0))}else _.NA(this,this.Eg,1E3)};_.m.To=function(){this.P=0;this.j&&(_.jl(this.pa,"smni",this.j),this.j=0)};_.m.mapType_changed=function(){var a=this.get("mapType");this.O=a&&a.Tf};_.m.bounds_changed=function(){this.Eg()};_.m=r3.prototype;_.m.Jn=function(a,b){var c=new q3(b,a);c.bindTo("mapType",a.__gm);c.bindTo("zoom",a);c.bindTo("bounds",a);c.bindTo("projection",a)};_.m.ko=function(a){a=_.nb(a);this.U[a]||(this.U[a]=new m3(this.Vc,this.T,this.na,this.j));return this.U[a]};_.m.ho=function(a){a=_.nb(a);this.S[a]||(this.S[a]=new j3(this.Vc,this.T,1,this.j));return this.S[a]};_.m.ff=function(a){if(this.O){this.P[a]||(this.P[a]=new _.yC,i3(this.O,a,function(){return b.jd()}));var b=this.P[a];return b}};
_.m.fo=function(a){if(this.O){this.V[a]||(this.V[a]=new l3,i3(this.O,a,function(){return tca(b)}));var b=this.V[a];return b}};var wca=new r3;_.qc("stats",wca);});
