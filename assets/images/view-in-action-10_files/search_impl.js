google.maps.__gjsload__('search_impl', function(_){var xcb=function(a){_.F.call(this,a)},zcb=function(a){var b=_.sj.Pa;a=a.toArray();ycb||(ycb={M:"sssM",O:["ss"]});return b.call(_.sj,a,ycb)},Acb=function(a,b){_.D(a.o,3,b)},Bcb=function(a){_.F.call(this,a)},Ccb=function(){var a=_.yk,b=_.Mj;this.j=_.xg;this.h=_.ol(_.zu,a,_.bv+"/maps/api/js/LayersService.GetFeature",b)},Fcb=function(a,b,c){var d=_.oE(new Ccb);c.bi=(0,_.Oa)(d.load,d);c.clickable=0!=a.get("clickable");_.iEa(c,_.$K(b));var e=[];e.push(_.L(c,"click",(0,_.Oa)(Dcb,null,a)));_.kb(["mouseover",
"mouseout","mousemove"],function(f){e.push(_.L(c,f,(0,_.Oa)(Ecb,null,a,f)))});e.push(_.L(a,"clickable_changed",function(){a.h.clickable=0!=a.get("clickable")}));a.j=e},Dcb=function(a,b,c,d,e){var f=null;if(e&&(f={status:e.getStatus()},0==e.getStatus())){f.location=_.T(e.o,2)?new _.De(_.hm(_.J(e.o,2,_.wm).o,1),_.hm(_.J(e.o,2,_.wm).o,2)):null;f.fields={};for(var g=_.E(e.o,3),h=0;h<g;++h){var k=_.Jl(e.o,3,_.fL,h);f.fields[k.getKey()]=k.Ga()}}_.N(a,"click",b,c,d,f)},Ecb=function(a,b,c,d,e,f,g){var h=
null;f&&(h={title:f[1].title,snippet:f[1].snippet});_.N(a,b,c,d,e,h,g)},Gcb=function(){};_.B(xcb,_.F);xcb.prototype.j=function(){return _.xd(this.o,2)};var ycb;_.B(Bcb,_.F);Bcb.prototype.getStatus=function(){return _.I(this.o,1,-1)};Ccb.prototype.load=function(a,b){function c(g){g=new Bcb(g);b(g)}var d=new xcb;_.D(d.o,1,a.layerId.split("|")[0]);_.D(d.o,2,a.featureId);Acb(d,_.Cd(_.Hd(this.j)));for(var e in a.parameters){var f=_.ud(d.o,4,_.fL);_.D(f.o,1,e);_.D(f.o,2,a.parameters[e])}a=zcb(d);this.h(a,c,c);return a};Ccb.prototype.cancel=function(){throw Error("Not implemented");};Gcb.prototype.Cv=function(a){if(_.Yi[15]){var b=a.C,c=a.C=a.getMap();b&&a.h&&(a.m?(b=b.__gm.j,b.set(b.get().tf(a.h))):a.h&&_.EEa(a.h,b)&&(_.kb(a.j||[],_.vf),a.j=null));if(c){var d=a.get("layerId"),e=a.get("spotlightDescription"),f=a.get("paintExperimentIds"),g=a.get("styler"),h=a.get("mapsApiLayer"),k=a.get("darkLaunch"),l=a.get("mapFeatures"),m=a.get("travelMapRequest"),p=a.get("searchPipeMetadata"),q=a.get("overlayLayer"),r=a.get("caseExperimentIds"),t=a.get("airQualityPipeMetadata");b=new _.fn;
d=d.split("|");b.layerId=d[0];for(var u=1;u<d.length;++u){var w=_.A(d[u].split(":")),y=w.next().value;w=_.ma(w);b.parameters[y]=w.join(":")}e&&(b.spotlightDescription=new _.Ns(e));f&&(b.paintExperimentIds=f.slice(0));g&&(b.styler=new _.kn(g));m&&(b.travelMapRequest=new _.fu(m));h&&(b.mapsApiLayer=new _.Il(h));l&&(b.mapFeatures=l);p&&(b.searchPipeMetadata=new _.$o(p));q&&(b.overlayLayer=new _.vr(q));r&&(b.caseExperimentIds=r.slice(0));t&&(b.airQualityPipeMetadata=new _.kt(t));b.darkLaunch=!!k;a.h=
b;a.m=a.get("renderOnBaseMap");a.m?(a=c.__gm.j,a.set(a.get().Jd(b))):Fcb(a,c,b);_.R(c,"Lg");_.P(c,148282)}}};_.of("search_impl",new Gcb);});
