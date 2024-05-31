// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Geoprocessing/editors/SelectFeatureSetFromLayer.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"inputNode"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"layerChooseNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"featuresetNode"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Deferred dojo/_base/lang dijit/_TemplatedMixin jimu/dijit/SpatialFilterByFeatures jimu/utils ./BaseFeatureSetEditor dojo/text!./SelectFeatureSetFromLayer.html esri/dijit/analysis/utils esri/tasks/query".split(" "),function(e,g,h,k,l,f,m,n,p,q){var r=e(null,{constructor:function(b){this.layerObject=b},layerObject:0,toJson:function(){return this.layerObject}});return e([m,k],{templateString:n,editorName:"SelectFeatureSetFromLayer",postCreate:function(){this.inherited(arguments);
this.spatialFilterByFeatures=new l({map:this.map,types:this.param.defaultValue&&this.param.defaultValue.geometryType?[f.getTypeByGeometryType(this.param.defaultValue.geometryType)]:["point","polyline","polygon"]});this.spatialFilterByFeatures.placeAt(this.layerChooseNode);this.spatialFilterByFeatures.startup()},getGPValue:function(){if(0===this.activeViewIndex){var b=new g,c=this.spatialFilterByFeatures.getSelectedLayer();c?this.spatialFilterByFeatures.getFeatureSet(!0,!0).then(h.hitch(this,function(a){a&&
a.features&&0<a.features.length?b.resolve(a):this.param.useFeatureCollection?c.url?(a=new q,a.where="1\x3d1",c.queryFeatures(a).then(function(d){b.resolve(d)},function(d){b.reject(d)})):(a=f.getFeatureSetByLayerAndFeatures(c,c.graphics),b.resolve(a)):b.resolve(new r(p.constructAnalysisInputLyrObj(c)))}),function(a){b.reject(a)}):b.resolve(null);return b}return this.wrapValueToDeferred(this.getFeatureSet())}})});