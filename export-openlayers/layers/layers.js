var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_gebco_2020_n48109130859375_s38551025390625_w53964843750000014_e46076660156250014_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "gebco_2020_n48.109130859375_s38.551025390625_w-53.964843750000014_e-46.076660156250014",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/gebco_2020_n48109130859375_s38551025390625_w53964843750000014_e46076660156250014_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6007541.853144, 4657416.390682, -5129045.538300, 6124896.601971]
                            })
                        });
var format_contours_2 = new ol.format.GeoJSON();
var features_contours_2 = format_contours_2.readFeatures(json_contours_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_contours_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contours_2.addFeatures(features_contours_2);
var lyr_contours_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_contours_2, 
                style: style_contours_2,
                interactive: true,
                title: '<img src="styles/legend/contours_2.png" /> contours'
            });
var lyr_TitanicMap_Reav4_modified_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "TitanicMap_Reav4_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TitanicMap_Reav4_modified_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5560585.249059, 5119712.315113, -5559616.649067, 5121305.288488]
                            })
                        });
var lyr_tmip3su4a6551_with_labels_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "tmip3su4a6551_with_labels",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/tmip3su4a6551_with_labels_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-49.949627, 41.724197, -49.942922, 41.734061]
                            })
                        });
var lyr_debris_field_whoi_north_up_modified_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "debris_field_whoi_north_up_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/debris_field_whoi_north_up_modified_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5561294.358682, 5118827.679828, -5558840.277402, 5122476.223290]
                            })
                        });
var format_titanicmapmarkers_6 = new ol.format.GeoJSON();
var features_titanicmapmarkers_6 = format_titanicmapmarkers_6.readFeatures(json_titanicmapmarkers_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titanicmapmarkers_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titanicmapmarkers_6.addFeatures(features_titanicmapmarkers_6);
var lyr_titanicmapmarkers_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_titanicmapmarkers_6, 
                style: style_titanicmapmarkers_6,
                interactive: true,
                title: '<img src="styles/legend/titanicmapmarkers_6.png" /> titanic-map-markers'
            });
var format_dive03mapmarkers_7 = new ol.format.GeoJSON();
var features_dive03mapmarkers_7 = format_dive03mapmarkers_7.readFeatures(json_dive03mapmarkers_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dive03mapmarkers_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dive03mapmarkers_7.addFeatures(features_dive03mapmarkers_7);
var lyr_dive03mapmarkers_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dive03mapmarkers_7, 
                style: style_dive03mapmarkers_7,
                interactive: true,
                title: '<img src="styles/legend/dive03mapmarkers_7.png" /> dive03-map-markers'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_gebco_2020_n48109130859375_s38551025390625_w53964843750000014_e46076660156250014_1.setVisible(true);lyr_contours_2.setVisible(true);lyr_TitanicMap_Reav4_modified_3.setVisible(true);lyr_tmip3su4a6551_with_labels_4.setVisible(true);lyr_debris_field_whoi_north_up_modified_5.setVisible(true);lyr_titanicmapmarkers_6.setVisible(true);lyr_dive03mapmarkers_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_gebco_2020_n48109130859375_s38551025390625_w53964843750000014_e46076660156250014_1,lyr_contours_2,lyr_TitanicMap_Reav4_modified_3,lyr_tmip3su4a6551_with_labels_4,lyr_debris_field_whoi_north_up_modified_5,lyr_titanicmapmarkers_6,lyr_dive03mapmarkers_7];
lyr_contours_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_titanicmapmarkers_6.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Depth': 'Depth', 'URL': 'URL', 'Description': 'Description', });
lyr_dive03mapmarkers_7.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'field_5': 'field_5', 'field_6': 'field_6', });
lyr_contours_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_titanicmapmarkers_6.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Depth': 'TextEdit', 'URL': 'TextEdit', 'Description': 'TextEdit', });
lyr_dive03mapmarkers_7.set('fieldImages', {'field_1': '', 'field_2': '', 'field_3': '', 'field_4': '', 'field_5': '', 'field_6': '', });
lyr_contours_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_titanicmapmarkers_6.set('fieldLabels', {'Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Depth': 'no label', 'URL': 'no label', 'Description': 'no label', });
lyr_dive03mapmarkers_7.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', 'field_4': 'no label', 'field_5': 'no label', 'field_6': 'no label', });
lyr_dive03mapmarkers_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});