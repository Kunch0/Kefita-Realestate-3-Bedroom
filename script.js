(function(){
    var script = {
 "defaultVRPointer": "laser",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
  "this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
  "this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
  "this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
  "this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3",
  "this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD",
  "this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A",
  "this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C"
 ],
 "scrollBarVisible": "rollOver",
 "start": "this.playAudioList([this.audio_69DBCE39_72E7_2D45_41D9_E6DBDF7963AC]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "layout": "absolute",
 "propagateClick": true,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "minWidth": 20,
 "definitions": [{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "3B_Living 2",
 "hfovMin": "120%",
 "id": "panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA",
 "overlays": [
  "this.overlay_61E4BF9D_72A3_6B7C_41AE_3F8532137332",
  "this.overlay_613A87DC_72A3_3AC3_41B6_BE17D9813866",
  "this.overlay_615D62B7_72A0_D54D_41C0_D0448F8A9BBA",
  "this.overlay_66800ABB_72A1_5545_41D2_695DC906ADE7",
  "this.overlay_66563886_72A1_354F_41C6_60A52977B656",
  "this.overlay_6658AA65_72A1_35CD_41BE_49A39D568DE1",
  "this.panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 49.26,
   "class": "AdjacentPanorama",
   "backwardYaw": 89.18,
   "panorama": "this.panorama_6C05390C_72D1_4246_41D6_1CB45738E597",
   "distance": 1
  },
  {
   "yaw": 126.87,
   "class": "AdjacentPanorama",
   "backwardYaw": 9.94,
   "panorama": "this.panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7",
   "distance": 1
  },
  {
   "yaw": -115.94,
   "class": "AdjacentPanorama",
   "backwardYaw": 52.6,
   "panorama": "this.panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_camera"
},
{
 "initialPosition": {
  "yaw": 15.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_518EEB0A_72A0_EB47_41CD_3D79CD6F0997"
},
{
 "initialPosition": {
  "yaw": -63.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_56E39C13_72A0_ED45_41D8_F7542C383511"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "3B_Living ",
 "hfovMin": "120%",
 "id": "panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20",
 "overlays": [
  "this.overlay_66B04D62_72A0_EFC7_41C6_B9E1EC3CA0E8",
  "this.overlay_66DBCF67_72A1_2BCC_41D3_FBF63FF1E5F6",
  "this.overlay_66C36700_72A1_3B43_41DC_916367B77F3E",
  "this.overlay_67D1335A_72A3_3BC7_41D6_0B0198600E46",
  "this.panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 52.6,
   "class": "AdjacentPanorama",
   "backwardYaw": -115.94,
   "panorama": "this.panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA",
   "distance": 1
  },
  {
   "yaw": 116.52,
   "class": "AdjacentPanorama",
   "backwardYaw": -31.39,
   "panorama": "this.panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_camera"
},
{
 "initialPosition": {
  "yaw": -142.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_59927980_72A0_D743_41D3_63A451B57837"
},
{
 "initialPosition": {
  "yaw": -107.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_58052907_72A0_D74D_41BB_93F0950EBF91"
},
{
 "initialPosition": {
  "yaw": 110.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_517DDB41_72A0_EBC5_41A6_E75287A96CD1"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "3B_Corridor 2",
 "hfovMin": "120%",
 "id": "panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D",
 "overlays": [
  "this.overlay_7D955825_72A3_754C_41D4_FBCE86EF838E",
  "this.overlay_7D7F0046_72A3_F5CF_41D8_1C3BC441183F",
  "this.overlay_62E66993_72A3_3744_41D6_AC668FE5954A",
  "this.overlay_62796243_72A1_D5C5_41DA_68F8A3CDE016",
  "this.overlay_63FD7098_72A1_D543_41BD_5D6E3D0BA9C2",
  "this.overlay_62860EE3_72A1_2AC5_41D9_F53683C3E379",
  "this.panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_tcap0",
  "this.overlay_6B457592_72E1_5F47_41C5_86BCDA47EAC1",
  "this.overlay_69D3B5BD_72E0_DEBD_41CD_420A53088164"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -18.34,
   "class": "AdjacentPanorama",
   "backwardYaw": -71.6,
   "panorama": "this.panorama_6C05390C_72D1_4246_41D6_1CB45738E597",
   "distance": 1
  },
  {
   "yaw": 161.28,
   "class": "AdjacentPanorama",
   "backwardYaw": 46.49,
   "panorama": "this.panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6C04F10C_72D1_C247_41D6_A173F1609A80"
  },
  {
   "yaw": 37.18,
   "class": "AdjacentPanorama",
   "backwardYaw": 105.36,
   "panorama": "this.panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_camera"
},
{
 "initialPosition": {
  "yaw": -156.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5103FBE7_72A0_EACD_41B8_207BEB99D4B5"
},
{
 "initialPosition": {
  "yaw": -18.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_518AFAF8_72A0_EAC3_41D5_C40BBFDC4EE0"
},
{
 "initialPosition": {
  "yaw": -130.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_582668D9_72A0_D6C5_41D0_2D40E44BBF11"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_camera"
},
{
 "initialPosition": {
  "yaw": -32.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_59B0B963_72A0_D7C5_41D8_19AA3D344043"
},
{
 "initialPosition": {
  "yaw": 110.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_51659B50_72A0_EBC3_41A7_CD58FB051E07"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "3B_Kitchen",
 "hfovMin": "120%",
 "id": "panorama_6C04F10C_72D1_C247_41D6_A173F1609A80",
 "overlays": [
  "this.overlay_60CCCFC0_72A1_2AC3_41BD_1F9D7F5FFF23",
  "this.overlay_60184DBD_72A1_EEBC_4168_63FB122E789E",
  "this.overlay_61CB7092_72A0_D547_41DB_6DDE47FF9660",
  "this.overlay_679CFB45_72A3_6BCD_41D4_EE7690204F19",
  "this.panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6C05390C_72D1_4246_41D6_1CB45738E597"
  },
  {
   "yaw": -112.55,
   "class": "AdjacentPanorama",
   "backwardYaw": 147.54,
   "panorama": "this.panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "3B_Master bedroom_2",
 "hfovMin": "120%",
 "id": "panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC",
 "overlays": [
  "this.overlay_6AB94FE1_72E1_2AC5_41A9_C6855419EECC",
  "this.overlay_6A05B249_72E1_35C4_41C5_46915D4805D5",
  "this.overlay_6A8A0D83_72E1_6F45_41C2_7792AD7EBDAA",
  "this.overlay_6BEA1158_72E0_F7F9_41D0_1B73F9676356",
  "this.panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -0.26,
   "class": "AdjacentPanorama",
   "backwardYaw": 31.03,
   "panorama": "this.panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "3B_Entrance",
 "hfovMin": "120%",
 "id": "panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50",
 "overlays": [
  "this.overlay_53099426_72F1_4243_41D3_2323DDCF24F2",
  "this.overlay_676AC605_72E1_5D4D_41C9_1ACB8F9C9D32",
  "this.overlay_6AF7D6E0_72E1_3AC4_41C7_27B23929AB8B",
  "this.overlay_65F0701B_72E1_5545_4195_F9B8170DA1BF",
  "this.panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 8.93,
   "class": "AdjacentPanorama",
   "backwardYaw": -143.95,
   "panorama": "this.panorama_6C05390C_72D1_4246_41D6_1CB45738E597",
   "distance": 1
  },
  {
   "yaw": -65.57,
   "class": "AdjacentPanorama",
   "backwardYaw": 152.37,
   "panorama": "this.panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_camera"
},
{
 "initialPosition": {
  "yaw": -27.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_59FE8926_72A0_D74F_41CC_66AFB1853F04"
},
{
 "initialPosition": {
  "yaw": 148.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_597DD9AE_72A0_D75F_41BE_192780BB0963"
},
{
 "initialPosition": {
  "yaw": -171.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_582C68EA_72A0_D6C7_41C5_691911A72AB4"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "3B_Common Bathroom",
 "hfovMin": "120%",
 "id": "panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3",
 "overlays": [
  "this.overlay_64165AA6_72A1_354F_41D1_CE0C4083CD3E",
  "this.overlay_670632C2_72A1_3AC7_41DC_045777D32629",
  "this.panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -99.86,
   "class": "AdjacentPanorama",
   "backwardYaw": 124.23,
   "panorama": "this.panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 161.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_581AE8F9_72A0_D6C5_41DB_8FEF39F276F1"
},
{
 "initialPosition": {
  "yaw": -133.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_595FD9CA_72A0_D6C7_41D8_A9E16CF643E8"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "3B_Dining",
 "hfovMin": "120%",
 "id": "panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7",
 "overlays": [
  "this.overlay_63277BB2_72A1_2B47_41B3_94CF1419FC66",
  "this.overlay_637C43AD_72A0_DB5D_41A1_5229D08C5CBB",
  "this.overlay_636CC96F_72A0_D7DC_41DB_B9002B319565",
  "this.overlay_6050606F_72A7_35DD_418D_0AAEAD7AC43A",
  "this.panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_tcap0",
  "this.overlay_5342410C_72A1_7743_41CD_BCCE0B4F05CD",
  "this.overlay_536FE718_72A0_DB43_41D9_A61E7130CD89",
  "this.overlay_53703B34_72A3_2B43_41B8_9B80F227FEB3",
  "this.overlay_53414111_72A3_3745_41D4_DF5616AF2816"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 72.37,
   "class": "AdjacentPanorama",
   "backwardYaw": 23.61,
   "panorama": "this.panorama_6C05390C_72D1_4246_41D6_1CB45738E597",
   "distance": 1
  },
  {
   "yaw": 9.94,
   "class": "AdjacentPanorama",
   "backwardYaw": 126.87,
   "panorama": "this.panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA",
   "distance": 1
  },
  {
   "yaw": 147.54,
   "class": "AdjacentPanorama",
   "backwardYaw": -112.55,
   "panorama": "this.panorama_6C04F10C_72D1_C247_41D6_A173F1609A80",
   "distance": 1
  },
  {
   "yaw": -31.39,
   "class": "AdjacentPanorama",
   "backwardYaw": 116.52,
   "panorama": "this.panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -53.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_510F2BF5_72A0_EACD_41CF_54006FDCA683"
},
{
 "initialPosition": {
  "yaw": 61.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_513B3BA9_72A0_EB45_41CA_D5406DF6B87F"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "3b_Maid's room (1)",
 "hfovMin": "120%",
 "id": "panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25",
 "overlays": [
  "this.overlay_670079BC_72E3_F743_41C0_76F36A401785",
  "this.overlay_67181C77_72E1_2DCD_41C0_2B76CA210690",
  "this.overlay_64565C41_72E7_2DC5_41C0_4137C3277987",
  "this.panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 152.37,
   "class": "AdjacentPanorama",
   "backwardYaw": -65.57,
   "panorama": "this.panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50",
   "distance": 1
  },
  {
   "yaw": -167.06,
   "class": "AdjacentPanorama",
   "backwardYaw": -65.57,
   "panorama": "this.panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -55.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_51146BD7_72A0_EACD_41D7_CAD35CFB4E8E"
},
{
 "initialPosition": {
  "yaw": -8.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5982098F_72A0_D75D_41CA_54C80C4DD8BA"
},
{
 "initialPosition": {
  "yaw": 36.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_59F21918_72A0_D743_41B0_448660605A65"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "3B_Master Bathroom",
 "hfovMin": "120%",
 "id": "panorama_6C0CB232_72D6_C642_41D9_470AB1841D98",
 "overlays": [
  "this.overlay_644907FF_72E7_3ABD_41CF_6FB8A8858ED9",
  "this.overlay_654FC9D5_72E7_56CD_41DA_67587D3F92E0",
  "this.panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -118.58,
   "class": "AdjacentPanorama",
   "backwardYaw": 171.46,
   "panorama": "this.panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_camera"
},
{
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "viewerArea": "this.MainViewer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true
},
{
 "items": [
  {
   "media": "this.panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_camera"
  },
  {
   "media": "this.panorama_6C05390C_72D1_4246_41D6_1CB45738E597",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6C05390C_72D1_4246_41D6_1CB45738E597_camera"
  },
  {
   "media": "this.panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_camera"
  },
  {
   "media": "this.panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_camera"
  },
  {
   "media": "this.panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_camera"
  },
  {
   "media": "this.panorama_6C04F10C_72D1_C247_41D6_A173F1609A80",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_camera"
  },
  {
   "media": "this.panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_camera"
  },
  {
   "media": "this.panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_camera"
  },
  {
   "media": "this.panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_camera"
  },
  {
   "media": "this.panorama_6C093896_72D3_4242_41A3_48845B56B926",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6C093896_72D3_4242_41A3_48845B56B926_camera"
  },
  {
   "media": "this.panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_camera"
  },
  {
   "media": "this.panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_camera"
  },
  {
   "media": "this.panorama_6C0CB232_72D6_C642_41D9_470AB1841D98",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_camera"
  },
  {
   "media": "this.panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_camera"
  },
  {
   "media": "this.panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_camera"
  },
  {
   "media": "this.panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_camera"
  },
  {
   "media": "this.panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_camera"
},
{
 "initialPosition": {
  "yaw": 61.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_51201BB9_72A0_EB45_41D9_5BE442F74AA0"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "3B_Corridor",
 "hfovMin": "120%",
 "id": "panorama_6C05390C_72D1_4246_41D6_1CB45738E597",
 "overlays": [
  "this.overlay_7FA41B69_72A7_6BC4_41BE_23CB8ABE16C5",
  "this.overlay_7CB1DF7C_72A1_2BC3_41B9_854A4A269EA3",
  "this.overlay_7C11C310_72A1_5B43_41C0_BE38FD49B21D",
  "this.overlay_7D0BC803_72A1_5544_41D1_687FFF97985B",
  "this.overlay_7DA33101_72A0_D745_41C0_1A17507D9A79",
  "this.overlay_62B8D983_72A1_3745_41C5_05070D0201BD",
  "this.overlay_623FDFD5_72A1_2ACD_41D5_364AEE4FAD19",
  "this.overlay_7C1A8651_72A1_5DC5_41AD_793498121950",
  "this.panorama_6C05390C_72D1_4246_41D6_1CB45738E597_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 89.18,
   "class": "AdjacentPanorama",
   "backwardYaw": 49.26,
   "panorama": "this.panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA",
   "distance": 1
  },
  {
   "yaw": -143.95,
   "class": "AdjacentPanorama",
   "backwardYaw": 8.93,
   "panorama": "this.panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50",
   "distance": 1
  },
  {
   "yaw": -71.6,
   "class": "AdjacentPanorama",
   "backwardYaw": -18.34,
   "panorama": "this.panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D",
   "distance": 1
  },
  {
   "yaw": 23.61,
   "class": "AdjacentPanorama",
   "backwardYaw": 72.37,
   "panorama": "this.panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -57.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5186FAE2_72A0_EAC7_41BA_49C70D25A30D"
},
{
 "initialPosition": {
  "yaw": -148.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_59EBA935_72A0_D74D_41C9_7496631622D5"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6C05390C_72D1_4246_41D6_1CB45738E597_camera"
},
{
 "initialPosition": {
  "yaw": 64.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5973C99D_72A0_D77D_41B3_DF68492D2F79"
},
{
 "initialPosition": {
  "yaw": 114.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_59C66955_72A0_D7CD_41B8_D6778460297C"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "3B_Master Bedroom Closet",
 "hfovMin": "120%",
 "id": "panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197",
 "overlays": [
  "this.overlay_6518C2E5_72E0_FACD_41CE_3D3C4ED01888",
  "this.overlay_6A9BD78C_72E0_DB43_418F_1F695DC9E5D7",
  "this.overlay_65C2DC9B_72E3_2D45_41BC_83B2A9126B2B",
  "this.panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 151.49,
   "class": "AdjacentPanorama",
   "backwardYaw": -69.09,
   "panorama": "this.panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30",
   "distance": 1
  },
  {
   "yaw": -148.72,
   "class": "AdjacentPanorama",
   "backwardYaw": -69.09,
   "panorama": "this.panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_camera"
},
{
 "initialPosition": {
  "yaw": -170.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5157BB6F_72A0_EBDD_41D8_74369A20047D"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "3B_Corridor 3",
 "hfovMin": "120%",
 "id": "panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080",
 "overlays": [
  "this.overlay_62F87C08_72A7_2D43_41D9_44A95EF3A6F7",
  "this.overlay_621D91A6_72A7_D74C_41CC_0DB6491C3BCB",
  "this.overlay_626963E6_72A7_DACF_41BF_079E364A2843",
  "this.overlay_627FE933_72A7_D745_41B5_873D59765DAA",
  "this.overlay_60AAFA0D_72A1_355D_41A9_96B8F035CEC0",
  "this.overlay_620A3438_72A1_FD43_41B8_67449B5DE6E8",
  "this.overlay_637210AB_72A1_3545_41C5_BCA31994FFE2",
  "this.overlay_63460009_72A3_D545_41C6_917F46786DAE",
  "this.overlay_626F0277_72A3_D5CD_41D7_690FFE372113",
  "this.overlay_6333D77C_72A3_5BBC_41BD_5F939FAF70F1",
  "this.panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -105.51,
   "class": "AdjacentPanorama",
   "backwardYaw": 122.97,
   "panorama": "this.panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814",
   "distance": 1
  },
  {
   "yaw": 46.49,
   "class": "AdjacentPanorama",
   "backwardYaw": 161.28,
   "panorama": "this.panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D",
   "distance": 1
  },
  {
   "yaw": -38.31,
   "class": "AdjacentPanorama",
   "backwardYaw": -164.3,
   "panorama": "this.panorama_6C093896_72D3_4242_41A3_48845B56B926",
   "distance": 1
  },
  {
   "yaw": -131.51,
   "class": "AdjacentPanorama",
   "backwardYaw": 140.68,
   "panorama": "this.panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30",
   "distance": 1
  },
  {
   "yaw": 124.23,
   "class": "AdjacentPanorama",
   "backwardYaw": -99.86,
   "panorama": "this.panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "3B_Store",
 "hfovMin": "120%",
 "id": "panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698",
 "overlays": [
  "this.overlay_6A647297_72E3_754D_41D5_2A621C01BE83",
  "this.overlay_6B8C6B20_72E0_EB43_419C_E91536BD7230",
  "this.panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 105.36,
   "class": "AdjacentPanorama",
   "backwardYaw": 37.18,
   "panorama": "this.panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "3B_Bedroom 2",
 "hfovMin": "120%",
 "id": "panorama_6C093896_72D3_4242_41A3_48845B56B926",
 "overlays": [
  "this.overlay_67E9A502_72A7_DF47_41CC_90A9F10D6A8E",
  "this.overlay_67E3B100_72A7_7743_41D8_4D824A7DD0FE",
  "this.panorama_6C093896_72D3_4242_41A3_48845B56B926_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -164.3,
   "class": "AdjacentPanorama",
   "backwardYaw": -38.31,
   "panorama": "this.panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 179.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_514E3B9C_72A0_EB43_41DC_5984D61BBA57"
},
{
 "initialPosition": {
  "yaw": 67.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_56F42C04_72A0_ED43_41A4_9BA83EC7EDC7"
},
{
 "initialPosition": {
  "yaw": 74.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_59A03971_72A0_D7C5_41D5_3C73F101A5B0"
},
{
 "initialPosition": {
  "yaw": 48.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5140DB8D_72A0_EB5D_41D1_06F6C3DB52DC"
},
{
 "initialPosition": {
  "yaw": -39.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5170CB1F_72A0_EB7D_41D3_9DB8B83AFA37"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_69DBCE39_72E7_2D45_41D9_E6DBDF7963AC",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_69DBCE39_72E7_2D45_41D9_E6DBDF7963AC.ogg",
  "mp3Url": "media/audio_69DBCE39_72E7_2D45_41D9_E6DBDF7963AC.mp3"
 },
 "data": {
  "label": "_Non_Copyrighted_Music_LAKEY_INSPIRED_Chill_Day_Hip_Hop_23IiqeIw38w_140"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_camera"
},
{
 "initialPosition": {
  "yaw": -127.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_51584B7E_72A0_EBBF_41B9_2653AAEA8D50"
},
{
 "initialPosition": {
  "yaw": 80.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_517B5B2D_72A0_EB5D_41C9_06DECEB92F48"
},
{
 "initialPosition": {
  "yaw": 141.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_593999E8_72A0_D6C4_41DB_2C88B9BAF52F"
},
{
 "initialPosition": {
  "yaw": 108.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_596D59BB_72A0_D745_41D5_85E7AA4499B3"
},
{
 "initialPosition": {
  "yaw": -28.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_512F9BC7_72A0_EACD_41DC_647562AE99D3"
},
{
 "initialPosition": {
  "yaw": 114.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_59D50945_72A0_D7CD_41B5_385D7479A3FF"
},
{
 "initialPosition": {
  "yaw": -90.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_516FFB5F_72A0_EBFD_41C8_D399425E00DB"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "3B_Bedroom 1",
 "hfovMin": "120%",
 "id": "panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814",
 "overlays": [
  "this.overlay_66672547_72A1_3FCC_41CE_E288915D04FE",
  "this.overlay_65D0FE14_72A0_ED43_41D8_0BDA71264E86",
  "this.panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 122.97,
   "class": "AdjacentPanorama",
   "backwardYaw": -105.51,
   "panorama": "this.panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6C093896_72D3_4242_41A3_48845B56B926_camera"
},
{
 "initialPosition": {
  "yaw": -74.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_594F89DA_72A0_D6C7_41C6_2ADC844C5388"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "3B_Master bedroom",
 "hfovMin": "120%",
 "id": "panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30",
 "overlays": [
  "this.overlay_65DF7116_72E0_F74F_41D0_25FE131429C0",
  "this.overlay_65382D02_72E1_6F47_41CF_A16B41895E49",
  "this.overlay_65FF395F_72E1_F7FD_41A7_5693C6BF7185",
  "this.overlay_6A055CD4_72E1_2EC3_41BA_72206C43F564",
  "this.overlay_6ABEBA73_72E7_75C4_41D7_43F3D24A9113",
  "this.overlay_6A2B5DF0_72E7_2EC3_4164_6F8041370AD8",
  "this.overlay_6BCA0C3F_72FF_6DBD_41C3_6FF95149B555",
  "this.overlay_6B068337_72E0_FB4D_41C7_A70397D952B8",
  "this.overlay_6BB7E42C_72E1_7D5C_4197_0674F8EC4F55",
  "this.panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 140.68,
   "class": "AdjacentPanorama",
   "backwardYaw": -131.51,
   "panorama": "this.panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080",
   "distance": 1
  },
  {
   "yaw": 31.03,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.26,
   "panorama": "this.panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC",
   "distance": 1
  },
  {
   "yaw": 171.46,
   "class": "AdjacentPanorama",
   "backwardYaw": -118.58,
   "panorama": "this.panorama_6C0CB232_72D6_C642_41D9_470AB1841D98",
   "distance": 1
  },
  {
   "yaw": -165.93,
   "class": "AdjacentPanorama",
   "backwardYaw": -118.58,
   "panorama": "this.panorama_6C0CB232_72D6_C642_41D9_470AB1841D98",
   "distance": 1
  },
  {
   "yaw": -69.09,
   "class": "AdjacentPanorama",
   "backwardYaw": 151.49,
   "panorama": "this.panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_camera"
},
{
 "progressBarBorderSize": 6,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#000000",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 55,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipPaddingBottom": 7,
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#FFFFFF",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0,
 "playbackBarHeadShadowVerticalLength": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "top": "0%",
 "scrollBarWidth": 10,
 "height": 641,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--SETTINGS"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
 "left": "2.23%",
 "width": 110,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "class": "HTMLText",
 "top": "4.76%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "height": 47,
 "minWidth": 1,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 3,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Montserrat';\"><B>ENTRANCE</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Entrance"
 },
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
 "left": "2.11%",
 "width": "7.901%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "class": "HTMLText",
 "top": "5.19%",
 "propagateClick": false,
 "height": "5.081%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 3,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Montserrat';\"><B>Living Room</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Living Room"
 },
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
 "left": "2.11%",
 "width": "4.946%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "class": "HTMLText",
 "top": "5.19%",
 "propagateClick": false,
 "height": "4.973%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 3,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Kitchen</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Kitchen"
 },
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
 "left": "2.11%",
 "width": "6.996%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "class": "HTMLText",
 "top": "5.19%",
 "propagateClick": false,
 "height": "4.432%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 3,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bedroom 1</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Bedroom 1"
 },
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3",
 "left": "2.11%",
 "width": "6.996%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "class": "HTMLText",
 "top": "5.19%",
 "propagateClick": false,
 "height": "4.432%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 3,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bedroom 2</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Bedroom 2"
 },
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD",
 "left": "2.11%",
 "width": "6.996%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "class": "HTMLText",
 "top": "5.19%",
 "propagateClick": false,
 "height": "4.432%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 3,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bedroom 3</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Bedroom 3"
 },
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A",
 "left": "2.11%",
 "width": "12.364%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "class": "HTMLText",
 "top": "5.19%",
 "propagateClick": false,
 "height": "6.811%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 3,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bathroom</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Bathroom"
 },
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_6D10649B_7332_5218_41D2_21101FE2809C",
 "left": "2.11%",
 "width": "12.364%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "class": "HTMLText",
 "top": "5.19%",
 "propagateClick": false,
 "height": "6.811%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 3,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Hallway</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Hallway"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 106.25,
   "yaw": -115.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 146
     }
    ]
   },
   "pitch": 2.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20, this.camera_51584B7E_72A0_EBBF_41B9_2653AAEA8D50); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_61E4BF9D_72A3_6B7C_41AE_3F8532137332",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 72.25,
   "yaw": 49.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_1_HS_1_1_0_map.gif",
      "width": 194,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -2.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C05390C_72D1_4246_41D6_1CB45738E597, this.camera_516FFB5F_72A0_EBFD_41C8_D399425E00DB); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_613A87DC_72A3_3AC3_41B6_BE17D9813866",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 68.97,
   "yaw": 126.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0_HS_2_1_0_map.gif",
      "width": 166,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -8.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7, this.camera_5157BB6F_72A0_EBDD_41D8_74369A20047D); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_615D62B7_72A0_D54D_41C0_D0448F8A9BBA",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.51,
   "yaw": -118.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_50457CCA_72A7_2EC7_41D9_99234C22EFE6",
   "pitch": -1.12,
   "hfov": 3.51,
   "yaw": -118.98,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_66800ABB_72A1_5545_41D2_695DC906ADE7",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.64,
   "yaw": 136.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5639A435_72A0_DD4D_41CE_DAB19584539F",
   "pitch": -2,
   "hfov": 2.64,
   "yaw": 136.71,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_66563886_72A1_354F_41C6_60A52977B656",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.64,
   "yaw": 48.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_50467CCB_72A7_2EC5_41D2_ECAB94079927",
   "pitch": -1.86,
   "hfov": 2.64,
   "yaw": 48.55,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6658AA65_72A1_35CD_41BE_49A39D568DE1",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "inertia": false,
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 104.88,
   "yaw": 52.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 196
     }
    ]
   },
   "pitch": -13.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA, this.camera_5973C99D_72A0_D77D_41B3_DF68492D2F79); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_66B04D62_72A0_EFC7_41C6_B9E1EC3CA0E8",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.53,
   "yaw": 116.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_1_HS_1_1_0_map.gif",
      "width": 144,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -1.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7, this.camera_597DD9AE_72A0_D75F_41BE_192780BB0963); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_66DBCF67_72A1_2BCC_41D3_FBF63FF1E5F6",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.5,
   "yaw": 62.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_50452CCB_72A7_2EC5_41D9_7EDE1E739A08",
   "pitch": -6.13,
   "hfov": 3.5,
   "yaw": 62.77,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_66C36700_72A1_3B43_41DC_916367B77F3E",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.49,
   "yaw": 119,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_50455CCB_72A7_2EC5_41B6_508E2F17874E",
   "pitch": -7.23,
   "hfov": 3.49,
   "yaw": 119,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_67D1335A_72A3_3BC7_41D6_0B0198600E46",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "inertia": false,
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.09,
   "yaw": -38.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_1_HS_0_1_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -12.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_7D955825_72A3_754C_41D4_FBCE86EF838E",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.5,
   "yaw": -18.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0_HS_1_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -2.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C05390C_72D1_4246_41D6_1CB45738E597, this.camera_596D59BB_72A0_D745_41D5_85E7AA4499B3); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_7D7F0046_72A3_F5CF_41D8_1C3BC441183F",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 38.01,
   "yaw": 161.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_1_HS_2_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -6.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080, this.camera_595FD9CA_72A0_D6C7_41D8_A9E16CF643E8); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_62E66993_72A3_3744_41D6_AC668FE5954A",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.52,
   "yaw": -19.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_56237428_72A0_DD43_41CF_CA8BBF7AEABF",
   "pitch": -0.98,
   "hfov": 3.52,
   "yaw": -19.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_62796243_72A1_D5C5_41DA_68F8A3CDE016",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.51,
   "yaw": 161.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_50430CC2_72A7_2EC7_41BA_13FA40487734",
   "pitch": -3.96,
   "hfov": 3.51,
   "yaw": 161.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_63FD7098_72A1_D543_41BD_5D6E3D0BA9C2",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.51,
   "yaw": -38.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_50435CC2_72A7_2EC7_41BE_E64DAC5CE284",
   "pitch": 1.13,
   "hfov": 3.51,
   "yaw": -38.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_62860EE3_72A1_2AC5_41D9_F53683C3E379",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_1_HS_6_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_1_HS_6_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_1_HS_6_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_1_HS_6_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698, this.camera_594F89DA_72A0_D6C7_41C6_2ADC844C5388); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_6B457592_72E1_5F47_41C5_86BCDA47EAC1",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.39,
   "yaw": 31.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_1_HS_7_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 14.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_50422CC2_72A7_2EC7_41DA_10D920D214A0",
   "pitch": 14.1,
   "hfov": 6.39,
   "yaw": 31.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_69D3B5BD_72E0_DEBD_41CD_420A53088164",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_1_HS_0_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_1_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7, this.camera_59B0B963_72A0_D7C5_41D8_19AA3D344043); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_60CCCFC0_72A1_2AC3_41BD_1F9D7F5FFF23",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.47,
   "yaw": 10.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_1_HS_1_1_6_map.gif",
      "width": 94,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -7.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_60184DBD_72A1_EEBC_4168_63FB122E789E",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.39,
   "yaw": -114.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_1_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_50467CC4_72A7_2EC3_41CD_89B575E319A9",
   "pitch": -2.31,
   "hfov": 4.39,
   "yaw": -114.7,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_61CB7092_72A0_D547_41DB_6DDE47FF9660",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.08,
   "yaw": 9.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_1_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5046ACC5_72A7_2ECD_41D6_146F13D7CB28",
   "pitch": 0.55,
   "hfov": 3.08,
   "yaw": 9.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_679CFB45_72A3_6BCD_41D4_EE7690204F19",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.25,
   "yaw": 24.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_1_HS_0_1_0_map.gif",
      "width": 152,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -3.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_6AB94FE1_72E1_2AC5_41A9_C6855419EECC",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.23,
   "yaw": -0.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_1_HS_1_1_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -1.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30, this.camera_59EBA935_72A0_D74D_41C9_7496631622D5); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_6A05B249_72E1_35C4_41C5_46915D4805D5",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.64,
   "yaw": 25.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_504E5CD4_72A7_2EC3_41D8_8CC3AB925D0D",
   "pitch": 0.16,
   "hfov": 2.64,
   "yaw": 25.51,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6A8A0D83_72E1_6F45_41C2_7792AD7EBDAA",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.64,
   "yaw": -3.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_504E9CD5_72A7_2ECD_41BB_BC01C54F12F4",
   "pitch": -0.75,
   "hfov": 2.64,
   "yaw": -3.76,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6BEA1158_72E0_F7F9_41D0_1B73F9676356",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "inertia": false,
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 65.67,
   "yaw": 8.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0_HS_0_1_0_map.gif",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -6.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C05390C_72D1_4246_41D6_1CB45738E597, this.camera_59F21918_72A0_D743_41B0_448660605A65); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_53099426_72F1_4243_41D3_2323DDCF24F2",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_1_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_1_HS_1_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_1_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_1_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25, this.camera_59FE8926_72A0_D74F_41CC_66AFB1853F04); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_676AC605_72E1_5D4D_41C9_1ACB8F9C9D32",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.43,
   "yaw": -60.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_1_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.43,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_1_HS_2_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": 9.61,
   "yaw": -60.92,
   "distance": 50
  }
 ],
 "id": "overlay_6AF7D6E0_72E1_3AC4_41C7_27B23929AB8B",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.64,
   "yaw": 1.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5AE81050_72A3_D5C4_41C3_9E7CAA0B6522",
   "pitch": -1.36,
   "hfov": 2.64,
   "yaw": 1.08,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_65F0701B_72E1_5545_4195_F9B8170DA1BF",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "inertia": false,
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_1_HS_0_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_1_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080, this.camera_51146BD7_72A0_EACD_41D7_CAD35CFB4E8E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_64165AA6_72A1_354F_41D1_CE0C4083CD3E",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.36,
   "yaw": -93.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_1_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 12.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.36,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_1_HS_1_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": 12.37,
   "yaw": -93.33,
   "distance": 50
  }
 ],
 "id": "overlay_670632C2_72A1_3AC7_41DC_045777D32629",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 68.9,
   "yaw": 147.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0_HS_0_1_0_map.gif",
      "width": 108,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 4.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C04F10C_72D1_C247_41D6_A173F1609A80, this.camera_56F42C04_72A0_ED43_41A4_9BA83EC7EDC7); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_63277BB2_72A1_2B47_41B3_94CF1419FC66",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.74,
   "yaw": -31.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0_HS_1_1_0_map.gif",
      "width": 103,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -2.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20, this.camera_56E39C13_72A0_ED45_41D8_F7542C383511); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_637C43AD_72A0_DB5D_41A1_5229D08C5CBB",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 65.48,
   "yaw": 72.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0_HS_2_1_0_map.gif",
      "width": 111,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -3.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C05390C_72D1_4246_41D6_1CB45738E597, this.camera_5103FBE7_72A0_EACD_41B8_207BEB99D4B5); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_636CC96F_72A0_D7DC_41DB_B9002B319565",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 52.67,
   "yaw": 9.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0_HS_3_1_0_map.gif",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": 2.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA, this.camera_510F2BF5_72A0_EACD_41CF_54006FDCA683); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_6050606F_72A7_35DD_418D_0AAEAD7AC43A",
 "data": {
  "label": "Polygon"
 }
},
{
 "inertia": false,
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.07,
   "yaw": -30.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5463162E_72BF_3D5F_41DA_20ED11608A0B",
   "pitch": -2.62,
   "hfov": 3.07,
   "yaw": -30.48,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5342410C_72A1_7743_41CD_BCCE0B4F05CD",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.07,
   "yaw": 142.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_585E18B3_72A0_D545_41D2_05FD241FDE26",
   "pitch": -2.32,
   "hfov": 3.07,
   "yaw": 142.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_536FE718_72A0_DB43_41D9_A61E7130CD89",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.63,
   "yaw": 68.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5463962F_72BF_3D5D_41DA_7283B745811A",
   "pitch": -3.19,
   "hfov": 2.63,
   "yaw": 68.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_53703B34_72A3_2B43_41B8_9B80F227FEB3",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.63,
   "yaw": 30.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5462462F_72BF_3D5D_41C5_CE2E68BA693E",
   "pitch": -4.07,
   "hfov": 2.63,
   "yaw": 30.01,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_53414111_72A3_3745_41D4_DF5616AF2816",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_1_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_1_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50, this.camera_59D50945_72A0_D7CD_41B5_385D7479A3FF); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_670079BC_72E3_F743_41C0_76F36A401785",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_1_HS_1_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_1_HS_1_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_1_HS_1_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50, this.camera_59C66955_72A0_D7CD_41B8_D6778460297C); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_67181C77_72E1_2DCD_41C0_2B76CA210690",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.27,
   "yaw": 161.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_1_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 15.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.27,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_1_HS_2_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": 15.39,
   "yaw": 161.66,
   "distance": 50
  }
 ],
 "id": "overlay_64565C41_72E7_2DC5_41C0_4137C3277987",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6C12FCF2_72D1_43C2_41C2_552C76706B25_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 79.46,
   "yaw": -118.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_1_HS_0_1_0_map.gif",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -7.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30, this.camera_5982098F_72A0_D75D_41CA_54C80C4DD8BA); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_644907FF_72E7_3ABD_41CF_6FB8A8858ED9",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.38,
   "yaw": -118.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.38,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_1_HS_1_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": 11.87,
   "yaw": -118.45,
   "distance": 50
  }
 ],
 "id": "overlay_654FC9D5_72E7_56CD_41DA_67587D3F92E0",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6C0CB232_72D6_C642_41D9_470AB1841D98_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_1_HS_0_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_1_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50, this.camera_582C68EA_72A0_D6C7_41C5_691911A72AB4); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_7FA41B69_72A7_6BC4_41BE_23CB8ABE16C5",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 76.95,
   "yaw": -71.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_1_HS_1_1_6_map.gif",
      "width": 86,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -5.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D, this.camera_581AE8F9_72A0_D6C5_41DB_8FEF39F276F1); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_7CB1DF7C_72A1_2BC3_41B9_854A4A269EA3",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 39.57,
   "yaw": 23.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_1_HS_2_1_6_map.gif",
      "width": 101,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -2.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7, this.camera_58052907_72A0_D74D_41BB_93F0950EBF91); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_7C11C310_72A1_5B43_41C0_BE38FD49B21D",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 72.46,
   "yaw": 89.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_1_HS_3_1_6_map.gif",
      "width": 164,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -2.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA, this.camera_582668D9_72A0_D6C5_41D0_2D40E44BBF11); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_7D0BC803_72A1_5544_41D1_687FFF97985B",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.51,
   "yaw": -156.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_1_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_507D2CC1_72A7_2EC5_41D7_30A7BF4A2091",
   "pitch": -3.96,
   "hfov": 3.51,
   "yaw": -156.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7DA33101_72A0_D745_41C0_1A17507D9A79",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.49,
   "yaw": 26.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_1_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_507D5CC1_72A7_2EC5_41AA_0C7AA768E699",
   "pitch": -6.22,
   "hfov": 3.49,
   "yaw": 26.25,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_62B8D983_72A1_3745_41C5_05070D0201BD",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.48,
   "yaw": 103.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_1_HS_6_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_507D8CC1_72A7_2EC5_41C7_C6305EBBBB30",
   "pitch": -7.98,
   "hfov": 3.48,
   "yaw": 103.38,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_623FDFD5_72A1_2ACD_41D5_364AEE4FAD19",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.64,
   "yaw": -70.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_1_HS_7_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_507DDCC1_72A7_2EC5_41D0_45FDE5F74497",
   "pitch": -2.05,
   "hfov": 2.64,
   "yaw": -70.74,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7C1A8651_72A1_5DC5_41AD_793498121950",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "inertia": false,
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6C05390C_72D1_4246_41D6_1CB45738E597_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_1_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_1_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30, this.camera_517DDB41_72A0_EBC5_41A6_E75287A96CD1); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_6518C2E5_72E0_FACD_41CE_3D3C4ED01888",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_1_HS_1_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_1_HS_1_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_1_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_1_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30, this.camera_51659B50_72A0_EBC3_41A7_CD58FB051E07); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_6A9BD78C_72E0_DB43_418F_1F695DC9E5D7",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.39,
   "yaw": -141.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_1_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_50495CCE_72A7_2EDF_41BF_D50F1DD02261",
   "pitch": -1.51,
   "hfov": 4.39,
   "yaw": -141.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_65C2DC9B_72E3_2D45_41BC_83B2A9126B2B",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "inertia": false,
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 31.55,
   "yaw": 46.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0_HS_0_1_0_map.gif",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -6.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D, this.camera_518AFAF8_72A0_EAC3_41D5_C40BBFDC4EE0); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_62F87C08_72A7_2D43_41D9_44A95EF3A6F7",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 35.61,
   "yaw": -131.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_1_HS_1_1_0_map.gif",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -11.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30, this.camera_5170CB1F_72A0_EB7D_41D3_9DB8B83AFA37); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_621D91A6_72A7_D74C_41CC_0DB6491C3BCB",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0_HS_2_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0_HS_2_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0_HS_2_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0_HS_2_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C0FC072_72D2_C2C2_41D9_2B72DE2B63A3, this.camera_517B5B2D_72A0_EB5D_41C9_06DECEB92F48); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_626963E6_72A7_DACF_41BF_079E364A2843",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 100.75,
   "yaw": -38.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_1_HS_3_1_6_map.gif",
      "width": 131,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -13.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C093896_72D3_4242_41A3_48845B56B926, this.camera_518EEB0A_72A0_EB47_41CD_3D79CD6F0997); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_627FE933_72A7_D745_41B5_873D59765DAA",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.48,
   "yaw": -105.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_1_HS_4_1_6_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -15.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814, this.camera_5186FAE2_72A0_EAC7_41BA_49C70D25A30D); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_60AAFA0D_72A1_355D_41A9_96B8F035CEC0",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.55,
   "yaw": -38.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_1_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_50414CC3_72A7_2EC5_41DA_81CBD003AF7F",
   "pitch": 6.57,
   "hfov": 6.55,
   "yaw": -38.28,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_620A3438_72A1_FD43_41B8_67449B5DE6E8",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.39,
   "yaw": -133.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_1_HS_6_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5041FCC3_72A7_2EC5_41C5_456EC1B43802",
   "pitch": 2.31,
   "hfov": 4.39,
   "yaw": -133.12,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_637210AB_72A1_3545_41C5_BCA31994FFE2",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.38,
   "yaw": -106.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_1_HS_7_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_50403CC3_72A7_2EC5_41CD_AC7C77EB8995",
   "pitch": 4.09,
   "hfov": 4.38,
   "yaw": -106.32,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_63460009_72A3_D545_41C6_917F46786DAE",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.29,
   "yaw": 118.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_1_HS_8_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 14.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_1_HS_8_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": 14.63,
   "yaw": 118.45,
   "distance": 50
  }
 ],
 "id": "overlay_626F0277_72A3_D5CD_41D7_690FFE372113",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.2,
   "yaw": 46.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_56268432_72A0_DD47_41B6_E2E08A88BDF7",
   "pitch": -1.47,
   "hfov": 2.2,
   "yaw": 46.6,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6333D77C_72A3_5BBC_41BD_5F939FAF70F1",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "inertia": false,
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 66.56,
   "yaw": 105.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_1_HS_0_1_0_map.gif",
      "width": 110,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -18.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D, this.camera_59927980_72A0_D743_41D3_63A451B57837); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_6A647297_72E3_754D_41D5_2A621C01BE83",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.39,
   "yaw": 108.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_504D7CD5_72A7_2ECD_41B3_83E77E62E23C",
   "pitch": -3.08,
   "hfov": 4.39,
   "yaw": 108.67,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6B8C6B20_72E0_EB43_419C_E91536BD7230",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 32.18,
   "yaw": -164.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_1_HS_0_1_0_map.gif",
      "width": 95,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -4.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080, this.camera_593999E8_72A0_D6C4_41DB_2C88B9BAF52F); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_67E9A502_72A7_DF47_41CC_90A9F10D6A8E",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.37,
   "yaw": -166,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5044BCCC_72A7_2EC3_41B1_C52B07ED2BC7",
   "pitch": 5.66,
   "hfov": 4.37,
   "yaw": -166,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_67E3B100_72A7_7743_41D8_4D824A7DD0FE",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6C093896_72D3_4242_41A3_48845B56B926_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 38.01,
   "yaw": 122.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_1_HS_0_1_0_map.gif",
      "width": 92,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -4.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080, this.camera_59A03971_72A0_D7C5_41D5_3C73F101A5B0); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_66672547_72A1_3FCC_41CE_E288915D04FE",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.37,
   "yaw": 122.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5045DCCC_72A7_2EC3_41B0_0430D3A092A1",
   "pitch": 6.41,
   "hfov": 4.37,
   "yaw": 122.15,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_65D0FE14_72A0_ED43_41D8_0BDA71264E86",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 33.45,
   "yaw": 140.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_1_HS_0_1_0_map.gif",
      "width": 104,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -7.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080, this.camera_5140DB8D_72A0_EB5D_41D1_06F6C3DB52DC); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_65DF7116_72E0_F74F_41D0_25FE131429C0",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.39,
   "yaw": 141.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5049ECCE_72A7_2EDF_41D5_785743B7F3F7",
   "pitch": 2.39,
   "hfov": 4.39,
   "yaw": 141.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_65382D02_72E1_6F47_41CF_A16B41895E49",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.35,
   "yaw": 171.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_1_HS_2_1_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -9.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C0CB232_72D6_C642_41D9_470AB1841D98, this.camera_513B3BA9_72A0_EB45_41CA_D5406DF6B87F); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_65FF395F_72E1_F7FD_41A7_5693C6BF7185",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 32.59,
   "yaw": -165.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_1_HS_3_1_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -8.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C0CB232_72D6_C642_41D9_470AB1841D98, this.camera_51201BB9_72A0_EB45_41D9_5BE442F74AA0); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_6A055CD4_72E1_2EC3_41BA_72206C43F564",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 32.79,
   "yaw": -69.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_1_HS_4_1_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -12.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197, this.camera_512F9BC7_72A0_EACD_41DC_647562AE99D3); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_6ABEBA73_72E7_75C4_41D7_43F3D24A9113",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 69.67,
   "yaw": 31.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0_HS_5_1_0_map.gif",
      "width": 106,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -2.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC, this.camera_514E3B9C_72A0_EB43_41DC_5984D61BBA57); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_6A2B5DF0_72E7_2EC3_4164_6F8041370AD8",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.27,
   "yaw": -73.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_504F7CCF_72A7_2EDD_41DC_52B5BE5F4D31",
   "pitch": -13.84,
   "hfov": 4.27,
   "yaw": -73.57,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6BCA0C3F_72FF_6DBD_41C3_6FF95149B555",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.61,
   "yaw": 29.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_547AB64D_72BF_3DDD_41D2_164AB1298E37",
   "pitch": -8.49,
   "hfov": 2.61,
   "yaw": 29.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6B068337_72E0_FB4D_41C7_A70397D952B8",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.41,
   "yaw": -174.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 10.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.41,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_1_HS_8_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": 10.55,
   "yaw": -174.41,
   "distance": 50
  }
 ],
 "id": "overlay_6BB7E42C_72E1_7D5C_4197_0674F8EC4F55",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "top": "0%",
 "scrollBarWidth": 10,
 "height": 110,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "shadow": false,
 "horizontalAlign": "center",
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "bottom": "0%",
 "height": "85.959%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "gap": 3,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "center",
 "layout": "vertical"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_50457CCA_72A7_2EC7_41D9_99234C22EFE6",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_5639A435_72A0_DD4D_41CE_DAB19584539F",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C0CA11F_72D1_4242_41D0_9D82A67062FA_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_50467CCB_72A7_2EC5_41D2_ECAB94079927",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_50452CCB_72A7_2EC5_41D9_7EDE1E739A08",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C0BB698_72D1_CE4F_4124_825ABD990D20_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_50455CCB_72A7_2EC5_41B6_508E2F17874E",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_56237428_72A0_DD43_41CF_CA8BBF7AEABF",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_50430CC2_72A7_2EC7_41BA_13FA40487734",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_50435CC2_72A7_2EC7_41BE_E64DAC5CE284",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C0A8AE8_72D2_C7CF_41D6_6D17D0092E2D_1_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_50422CC2_72A7_2EC7_41DA_10D920D214A0",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_50467CC4_72A7_2EC3_41CD_89B575E319A9",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C04F10C_72D1_C247_41D6_A173F1609A80_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5046ACC5_72A7_2ECD_41D6_146F13D7CB28",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_504E5CD4_72A7_2EC3_41D8_8CC3AB925D0D",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C095935_72D7_4241_41D6_8ADA90A4F9FC_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_504E9CD5_72A7_2ECD_41BB_BC01C54F12F4",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C0D186F_72D1_C2C2_41B0_575C071AFA50_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_5AE81050_72A3_D5C4_41C3_9E7CAA0B6522",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_5463162E_72BF_3D5F_41DA_20ED11608A0B",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_585E18B3_72A0_D545_41D2_05FD241FDE26",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_5463962F_72BF_3D5D_41DA_7283B745811A",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C08E547_72D1_42C2_41BC_5ED6383E0FB7_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_5462462F_72BF_3D5D_41C5_CE2E68BA693E",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_507D2CC1_72A7_2EC5_41D7_30A7BF4A2091",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_507D5CC1_72A7_2EC5_41AA_0C7AA768E699",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_507D8CC1_72A7_2EC5_41C7_C6305EBBBB30",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C05390C_72D1_4246_41D6_1CB45738E597_1_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_507DDCC1_72A7_2EC5_41D0_45FDE5F74497",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C0D6AA7_72D6_C642_41CB_A61A181B1197_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_50495CCE_72A7_2EDF_41BF_D50F1DD02261",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_50414CC3_72A7_2EC5_41DA_81CBD003AF7F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_1_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5041FCC3_72A7_2EC5_41C5_456EC1B43802",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_1_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_50403CC3_72A7_2EC5_41CD_AC7C77EB8995",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C05DFCB_72D1_3DC2_41CA_ECE52B881080_0_HS_9_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_56268432_72A0_DD47_41B6_E2E08A88BDF7",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C0B1192_72D7_4243_41CB_F3CE7F529698_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_504D7CD5_72A7_2ECD_41B3_83E77E62E23C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C093896_72D3_4242_41A3_48845B56B926_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5044BCCC_72A7_2EC3_41B1_C52B07ED2BC7",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C0CE9D2_72D3_45C3_41DB_C1989EA25814_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5045DCCC_72A7_2EC3_41B0_0430D3A092A1",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5049ECCE_72A7_2EDF_41D5_785743B7F3F7",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_504F7CCF_72A7_2EDD_41DC_52B5BE5F4D31",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C0B0486_72D6_C242_41DB_50A90B34DF30_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_547AB64D_72BF_3DDD_41D2_164AB1298E37",
 "rowCount": 6,
 "frameCount": 22
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "click": "this.openLink('https://www.instagram.com/kefitaaddis/', '_blank')",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "cursor": "hand"
}],
 "desktopMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getKey": function(key){  return window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } }
 },
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "horizontalAlign": "left",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
