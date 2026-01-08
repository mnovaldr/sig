var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KecamatanKedungkandang_1 = new ol.format.GeoJSON();
var features_KecamatanKedungkandang_1 = format_KecamatanKedungkandang_1.readFeatures(json_KecamatanKedungkandang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanKedungkandang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanKedungkandang_1.addFeatures(features_KecamatanKedungkandang_1);
var lyr_KecamatanKedungkandang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecamatanKedungkandang_1, 
                style: style_KecamatanKedungkandang_1,
                popuplayertitle: 'Kecamatan Kedungkandang',
                interactive: true,
                title: '<img src="styles/legend/KecamatanKedungkandang_1.png" /> Kecamatan Kedungkandang'
            });
var format_JalanDesa_2 = new ol.format.GeoJSON();
var features_JalanDesa_2 = format_JalanDesa_2.readFeatures(json_JalanDesa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesa_2.addFeatures(features_JalanDesa_2);
var lyr_JalanDesa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesa_2, 
                style: style_JalanDesa_2,
                popuplayertitle: 'Jalan Desa',
                interactive: true,
                title: '<img src="styles/legend/JalanDesa_2.png" /> Jalan Desa'
            });
var format_FasilitasUmum_3 = new ol.format.GeoJSON();
var features_FasilitasUmum_3 = format_FasilitasUmum_3.readFeatures(json_FasilitasUmum_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasUmum_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasUmum_3.addFeatures(features_FasilitasUmum_3);
var lyr_FasilitasUmum_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasUmum_3, 
                style: style_FasilitasUmum_3,
                popuplayertitle: 'Fasilitas Umum',
                interactive: true,
                title: '<img src="styles/legend/FasilitasUmum_3.png" /> Fasilitas Umum'
            });
var format_JalanGang_4 = new ol.format.GeoJSON();
var features_JalanGang_4 = format_JalanGang_4.readFeatures(json_JalanGang_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanGang_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanGang_4.addFeatures(features_JalanGang_4);
var lyr_JalanGang_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanGang_4, 
                style: style_JalanGang_4,
                popuplayertitle: 'Jalan Gang',
                interactive: true,
                title: '<img src="styles/legend/JalanGang_4.png" /> Jalan Gang'
            });
var format_JalanPerumahan_5 = new ol.format.GeoJSON();
var features_JalanPerumahan_5 = format_JalanPerumahan_5.readFeatures(json_JalanPerumahan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanPerumahan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanPerumahan_5.addFeatures(features_JalanPerumahan_5);
var lyr_JalanPerumahan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanPerumahan_5, 
                style: style_JalanPerumahan_5,
                popuplayertitle: 'Jalan Perumahan',
                interactive: true,
                title: '<img src="styles/legend/JalanPerumahan_5.png" /> Jalan Perumahan'
            });
var format_JalanRaya_6 = new ol.format.GeoJSON();
var features_JalanRaya_6 = format_JalanRaya_6.readFeatures(json_JalanRaya_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanRaya_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanRaya_6.addFeatures(features_JalanRaya_6);
var lyr_JalanRaya_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanRaya_6, 
                style: style_JalanRaya_6,
                popuplayertitle: 'Jalan Raya',
                interactive: true,
                title: '<img src="styles/legend/JalanRaya_6.png" /> Jalan Raya'
            });
var format_JalanProvinsi_7 = new ol.format.GeoJSON();
var features_JalanProvinsi_7 = format_JalanProvinsi_7.readFeatures(json_JalanProvinsi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanProvinsi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanProvinsi_7.addFeatures(features_JalanProvinsi_7);
var lyr_JalanProvinsi_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanProvinsi_7, 
                style: style_JalanProvinsi_7,
                popuplayertitle: 'Jalan Provinsi',
                interactive: true,
                title: '<img src="styles/legend/JalanProvinsi_7.png" /> Jalan Provinsi'
            });
var format_Persawahan_8 = new ol.format.GeoJSON();
var features_Persawahan_8 = format_Persawahan_8.readFeatures(json_Persawahan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Persawahan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Persawahan_8.addFeatures(features_Persawahan_8);
var lyr_Persawahan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Persawahan_8, 
                style: style_Persawahan_8,
                popuplayertitle: 'Persawahan',
                interactive: true,
                title: '<img src="styles/legend/Persawahan_8.png" /> Persawahan'
            });
var format_BuildingAI_9 = new ol.format.GeoJSON();
var features_BuildingAI_9 = format_BuildingAI_9.readFeatures(json_BuildingAI_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BuildingAI_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuildingAI_9.addFeatures(features_BuildingAI_9);
var lyr_BuildingAI_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BuildingAI_9, 
                style: style_BuildingAI_9,
                popuplayertitle: 'BuildingAI',
                interactive: true,
                title: '<img src="styles/legend/BuildingAI_9.png" /> BuildingAI'
            });
var format_LokasiNotaris_10 = new ol.format.GeoJSON();
var features_LokasiNotaris_10 = format_LokasiNotaris_10.readFeatures(json_LokasiNotaris_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiNotaris_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiNotaris_10.addFeatures(features_LokasiNotaris_10);
var lyr_LokasiNotaris_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokasiNotaris_10, 
                style: style_LokasiNotaris_10,
                popuplayertitle: 'Lokasi Notaris',
                interactive: true,
                title: '<img src="styles/legend/LokasiNotaris_10.png" /> Lokasi Notaris'
            });
var format_Pemukiman_11 = new ol.format.GeoJSON();
var features_Pemukiman_11 = format_Pemukiman_11.readFeatures(json_Pemukiman_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_11.addFeatures(features_Pemukiman_11);
var lyr_Pemukiman_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemukiman_11, 
                style: style_Pemukiman_11,
                popuplayertitle: 'Pemukiman',
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_11.png" /> Pemukiman'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_KecamatanKedungkandang_1.setVisible(true);lyr_JalanDesa_2.setVisible(true);lyr_FasilitasUmum_3.setVisible(true);lyr_JalanGang_4.setVisible(true);lyr_JalanPerumahan_5.setVisible(true);lyr_JalanRaya_6.setVisible(true);lyr_JalanProvinsi_7.setVisible(true);lyr_Persawahan_8.setVisible(true);lyr_BuildingAI_9.setVisible(true);lyr_LokasiNotaris_10.setVisible(true);lyr_Pemukiman_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KecamatanKedungkandang_1,lyr_JalanDesa_2,lyr_FasilitasUmum_3,lyr_JalanGang_4,lyr_JalanPerumahan_5,lyr_JalanRaya_6,lyr_JalanProvinsi_7,lyr_Persawahan_8,lyr_BuildingAI_9,lyr_LokasiNotaris_10,lyr_Pemukiman_11];
lyr_KecamatanKedungkandang_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', 'kode pos': 'kode pos', 'penduduk': 'penduduk', });
lyr_JalanDesa_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_FasilitasUmum_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', });
lyr_JalanGang_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_JalanPerumahan_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_JalanRaya_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_JalanProvinsi_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_Persawahan_8.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', });
lyr_BuildingAI_9.set('fieldAliases', {'FID': 'FID', });
lyr_LokasiNotaris_10.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'alamat': 'alamat', 'telphone': 'telphone', });
lyr_Pemukiman_11.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'kode pos': 'kode pos', 'luas': 'luas', });
lyr_KecamatanKedungkandang_1.set('fieldImages', {'id': 'Hidden', 'nama': 'TextEdit', 'luas': 'TextEdit', 'kode pos': 'TextEdit', 'penduduk': 'TextEdit', });
lyr_JalanDesa_2.set('fieldImages', {'id': 'Hidden', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_FasilitasUmum_3.set('fieldImages', {'id': 'Hidden', 'nama': 'TextEdit', 'luas': 'TextEdit', });
lyr_JalanGang_4.set('fieldImages', {'id': 'Hidden', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_JalanPerumahan_5.set('fieldImages', {'id': 'Hidden', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_JalanRaya_6.set('fieldImages', {'id': 'Hidden', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_JalanProvinsi_7.set('fieldImages', {'id': 'Hidden', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_Persawahan_8.set('fieldImages', {'id': 'Hidden', 'nama': 'TextEdit', 'luas': 'TextEdit', });
lyr_BuildingAI_9.set('fieldImages', {'FID': '', });
lyr_LokasiNotaris_10.set('fieldImages', {'id': 'Hidden', 'nama': 'TextEdit', 'alamat': 'TextEdit', 'telphone': 'TextEdit', });
lyr_Pemukiman_11.set('fieldImages', {'id': 'Hidden', 'nama': 'TextEdit', 'kode pos': 'TextEdit', 'luas': 'TextEdit', });
lyr_KecamatanKedungkandang_1.set('fieldLabels', {'nama': 'no label', 'luas': 'no label', 'kode pos': 'no label', 'penduduk': 'no label', });
lyr_JalanDesa_2.set('fieldLabels', {'Nama': 'no label', 'Panjang': 'no label', });
lyr_FasilitasUmum_3.set('fieldLabels', {'nama': 'no label', 'luas': 'no label', });
lyr_JalanGang_4.set('fieldLabels', {'Nama': 'no label', 'Panjang': 'no label', });
lyr_JalanPerumahan_5.set('fieldLabels', {'Nama': 'no label', 'Panjang': 'no label', });
lyr_JalanRaya_6.set('fieldLabels', {'Nama': 'no label', 'Panjang': 'no label', });
lyr_JalanProvinsi_7.set('fieldLabels', {'Nama': 'no label', 'Panjang': 'no label', });
lyr_Persawahan_8.set('fieldLabels', {'nama': 'no label', 'luas': 'no label', });
lyr_BuildingAI_9.set('fieldLabels', {'FID': 'no label', });
lyr_LokasiNotaris_10.set('fieldLabels', {'nama': 'no label', 'alamat': 'no label', 'telphone': 'no label', });
lyr_Pemukiman_11.set('fieldLabels', {'nama': 'no label', 'kode pos': 'no label', 'luas': 'no label', });
lyr_Pemukiman_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});