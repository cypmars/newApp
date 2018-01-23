webpackJsonp([8],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarqueDetailsPageModule", function() { return MarqueDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marqueDetails__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_youtube_video_player__ = __webpack_require__(620);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MarqueDetailsPageModule = (function () {
    function MarqueDetailsPageModule() {
    }
    return MarqueDetailsPageModule;
}());
MarqueDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__marqueDetails__["a" /* MarqueDetailsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__marqueDetails__["a" /* MarqueDetailsPage */])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__marqueDetails__["a" /* MarqueDetailsPage */],
        ]
    })
], MarqueDetailsPageModule);

//# sourceMappingURL=marqueDetails.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(6);
var map_1 = __webpack_require__(216);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeVideoPlayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(44);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Youtube Video Player
 * @description
 * Plays YouTube videos in Native YouTube App
 *
 * @usage
 * For Android 5.0+ you will need to add the following to config.xml
 * ```xml
 * <preference name="YouTubeDataApiKey" value="[YOUR YOUTUBE API]" />
 * ```
 * For more information: https://developers.google.com/youtube/v3/getting-started
 *
 *
 * ```typescript
 * import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
 *
 * constructor(private youtube: YoutubeVideoPlayer) { }
 *
 * ...
 *
 *
 * this.youtube.openVideo('myvideoid');
 *
 * ```
 */
var YoutubeVideoPlayer = (function (_super) {
    __extends(YoutubeVideoPlayer, _super);
    function YoutubeVideoPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Plays a YouTube video
     * @param videoId {string} Video ID
     */
    YoutubeVideoPlayer.prototype.openVideo = function (videoId) { };
    YoutubeVideoPlayer.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    YoutubeVideoPlayer.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], YoutubeVideoPlayer.prototype, "openVideo", null);
    YoutubeVideoPlayer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'YoutubeVideoPlayer',
            plugin: 'cordova-plugin-youtube-video-player',
            pluginRef: 'YoutubeVideoPlayer',
            repo: 'https://github.com/ihadeed/CordovaYoutubeVideoPlayer',
            platforms: ['Android', 'iOS']
        })
    ], YoutubeVideoPlayer);
    return YoutubeVideoPlayer;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LatLng */
/* unused harmony export LatLngBounds */
/* unused harmony export VisibleRegion */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GoogleMapsEvent; });
/* unused harmony export GoogleMapsAnimation */
/* unused harmony export GoogleMapsMapTypeId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMaps; });
/* unused harmony export BaseClass */
/* unused harmony export BaseArrayClass */
/* unused harmony export Circle */
/* unused harmony export Environment */
/* unused harmony export Geocoder */
/* unused harmony export Encoding */
/* unused harmony export Poly */
/* unused harmony export Spherical */
/* unused harmony export GoogleMap */
/* unused harmony export GroundOverlay */
/* unused harmony export HtmlInfoWindow */
/* unused harmony export Marker */
/* unused harmony export MarkerCluster */
/* unused harmony export Polygon */
/* unused harmony export Polyline */
/* unused harmony export TileOverlay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * @hidden
 */
var LatLng = (function () {
    function LatLng(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    LatLng.prototype.equals = function (other) {
        return this.lat === other.lat && this.lng === other.lng;
    };
    LatLng.prototype.toString = function () {
        return this.lat + ',' + this.lng;
    };
    LatLng.prototype.toUrlValue = function (precision) {
        precision = precision || 6;
        return this.lat.toFixed(precision) + ',' + this.lng.toFixed(precision);
    };
    return LatLng;
}());

/**
 * @hidden
 */
var LatLngBounds = (function () {
    function LatLngBounds(points) {
        this._objectInstance = new (GoogleMaps.getPlugin()).LatLngBounds(points);
    }
    /**
     * Converts to string
     * @return {string}
     */
    LatLngBounds.prototype.toString = function () { return; };
    /**
     * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
     * @param precision {number}
     * @return {string}
     */
    LatLngBounds.prototype.toUrlValue = function (precision) { return; };
    /**
     * Extends this bounds to contain the given point.
     * @param LatLng {ILatLng}
     */
    LatLngBounds.prototype.extend = function (LatLng) { };
    /**
     * Returns true if the given lat/lng is in this bounds.
     * @param LatLng {ILatLng}
     */
    LatLngBounds.prototype.contains = function (LatLng) { return; };
    /**
     * Computes the center of this LatLngBounds
     * @return {LatLng}
     */
    LatLngBounds.prototype.getCenter = function () { return; };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
        __metadata("design:type", Object)
    ], LatLngBounds.prototype, "northeast", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
        __metadata("design:type", Object)
    ], LatLngBounds.prototype, "southwest", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
        __metadata("design:type", String)
    ], LatLngBounds.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], LatLngBounds.prototype, "toString", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", String)
    ], LatLngBounds.prototype, "toUrlValue", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LatLngBounds.prototype, "extend", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Boolean)
    ], LatLngBounds.prototype, "contains", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", LatLng)
    ], LatLngBounds.prototype, "getCenter", null);
    return LatLngBounds;
}());

/**
 * @hidden
 */
var VisibleRegion = (function () {
    function VisibleRegion(southwest, northeast, farLeft, farRight, nearLeft, nearRight) {
        this._objectInstance = new (GoogleMaps.getPlugin()).VisibleRegion(southwest, northeast, farLeft, farRight, nearLeft, nearRight);
    }
    /**
     * Converts to string
     * @return {string}
     */
    VisibleRegion.prototype.toString = function () { return; };
    /**
     * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
     * @param precision {number}
     * @return {string}
     */
    VisibleRegion.prototype.toUrlValue = function (precision) { return; };
    /**
     * Returns true if the given lat/lng is in this bounds.
     * @param LatLng {ILatLng}
     */
    VisibleRegion.prototype.contains = function (LatLng) { return; };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
        __metadata("design:type", Object)
    ], VisibleRegion.prototype, "northeast", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
        __metadata("design:type", Object)
    ], VisibleRegion.prototype, "southwest", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
        __metadata("design:type", Object)
    ], VisibleRegion.prototype, "farLeft", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
        __metadata("design:type", Object)
    ], VisibleRegion.prototype, "farRight", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
        __metadata("design:type", Object)
    ], VisibleRegion.prototype, "nearLeft", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
        __metadata("design:type", Object)
    ], VisibleRegion.prototype, "nearRight", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
        __metadata("design:type", String)
    ], VisibleRegion.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], VisibleRegion.prototype, "toString", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", String)
    ], VisibleRegion.prototype, "toUrlValue", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Boolean)
    ], VisibleRegion.prototype, "contains", null);
    return VisibleRegion;
}());

/**
 * @hidden
 * You can listen to these events where appropriate
 */
var GoogleMapsEvent = {
    MAP_READY: 'map_ready',
    MAP_LOADED: 'map_loaded',
    MAP_CLICK: 'map_click',
    MAP_LONG_CLICK: 'map_long_click',
    MY_LOCATION_BUTTON_CLICK: 'my_location_button_click',
    INDOOR_BUILDING_FOCUSED: 'indoor_building_focused',
    INDOOR_LEVEL_ACTIVATED: 'indoor_level_activated',
    CAMERA_MOVE_START: 'camera_move_start',
    CAMERA_MOVE: 'camera_move',
    CAMERA_MOVE_END: 'camera_move_end',
    OVERLAY_CLICK: 'overlay_click',
    POLYGON_CLICK: 'polygon_click',
    POLYLINE_CLICK: 'polyline_click',
    CIRCLE_CLICK: 'circle_click',
    GROUND_OVERLAY_CLICK: 'groundoverlay_click',
    INFO_CLICK: 'info_click',
    INFO_LONG_CLICK: 'info_long_click',
    INFO_CLOSE: 'info_close',
    INFO_OPEN: 'info_open',
    CLUSTER_CLICK: 'cluster_click',
    MARKER_CLICK: 'marker_click',
    MARKER_DRAG: 'marker_drag',
    MARKER_DRAG_START: 'marker_drag_start',
    MARKER_DRAG_END: 'marker_drag_end',
    MAP_DRAG: 'map_drag',
    MAP_DRAG_START: 'map_drag_start',
    MAP_DRAG_END: 'map_drag_end'
};
/**
 * @hidden
 */
var GoogleMapsAnimation = {
    BOUNCE: 'BOUNCE',
    DROP: 'DROP'
};
/**
 * @hidden
 */
var GoogleMapsMapTypeId = {
    NORMAL: 'MAP_TYPE_NORMAL',
    ROADMAP: 'MAP_TYPE_ROADMAP',
    SATELLITE: 'MAP_TYPE_SATELLITE',
    HYBRID: 'MAP_TYPE_HYBRID',
    TERRAIN: 'MAP_TYPE_TERRAIN',
    NONE: 'MAP_TYPE_NONE'
};
/**
 * @name Google Maps
 * @description
 * This plugin uses the native Google Maps SDK
 * Note: As of Ionic native 4.0, this using the 2.0 version of the google maps plugin. Please make sure your plugin is updated
 * @usage
 * ```typescript
 * import {
 *  GoogleMaps,
 *  GoogleMap,
 *  GoogleMapsEvent,
 *  GoogleMapOptions,
 *  CameraPosition,
 *  MarkerOptions,
 *  Marker
 * } from '@ionic-native/google-maps';
 * import { Component } from "@angular/core/";
 *
 * @Component({
 *   selector: 'page-home',
 *   templateUrl: 'home.html'
 * })
 * export class HomePage {
 *   map: GoogleMap;
 *   constructor(private googleMaps: GoogleMaps) { }
 *
 *   ionViewDidLoad() {
 *    this.loadMap();
 *   }
 *
 *  loadMap() {
 *
 *     let mapOptions: GoogleMapOptions = {
 *       camera: {
 *         target: {
 *           lat: 43.0741904,
 *           lng: -89.3809802
 *         },
 *         zoom: 18,
 *         tilt: 30
 *       }
 *     };
 *
 *     this.map = this.googleMaps.create('map_canvas', mapOptions);
 *
 *     // Wait the MAP_READY before using any methods.
 *     this.map.one(GoogleMapsEvent.MAP_READY)
 *       .then(() => {
 *         console.log('Map is ready!');
 *
 *         // Now you can use all methods safely.
 *         this.map.addMarker({
 *             title: 'Ionic',
 *             icon: 'blue',
 *             animation: 'DROP',
 *             position: {
 *               lat: 43.0741904,
 *               lng: -89.3809802
 *             }
 *           })
 *           .then(marker => {
 *             marker.on(GoogleMapsEvent.MARKER_CLICK)
 *               .subscribe(() => {
 *                 alert('clicked');
 *               });
 *           });
 *
 *       });
 *   }
 * }
 *
 * ```
 * @classes
 * GoogleMap
 * Circle
 * Encoding
 * Environment
 * Geocoder
 * GroundOverlay
 * HtmlInfoWindow
 * Geocoder
 * LatLng
 * LatLngBounds
 * Marker
 * MarkerCluster
 * Polygon
 * Polyline
 * Spherical
 * Poly
 * TileOverlay
 * BaseClass
 * BaseArrayClass
 * @interfaces
 * GoogleMapOptions
 * CameraPosition
 * CircleOptions
 * GeocoderRequest
 * GeocoderResult
 * GroundOverlayOptions
 * ILatLng
 * MarkerIcon
 * MarkerOptions
 * MarkerClusterIcon
 * MarkerClusterOptions
 * MyLocation
 * MyLocationOptions
 * PolygonOptions
 * PolylineOptions
 * TileOverlayOptions
 * VisibleRegion
 */
var GoogleMaps = (function (_super) {
    __extends(GoogleMaps, _super);
    function GoogleMaps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleMaps_1 = GoogleMaps;
    /**
     * Creates a new GoogleMap instance
     * @param element {string | HTMLElement} Element ID or reference to attach the map to
     * @param options {any} Options
     * @return {GoogleMap}
     */
    GoogleMaps.create = function (element, options) {
        if (element instanceof HTMLElement) {
            if (element.getAttribute('__pluginMapId')) {
                console.error('GoogleMaps', element.tagName + '[__pluginMapId=\'' + element.getAttribute('__pluginMapId') + '\'] has already map.');
                return;
            }
        }
        else if (typeof element === 'object') {
            options = element;
            element = null;
        }
        var googleMap = new GoogleMap(element, options);
        googleMap.set('_overlays', {});
        return googleMap;
    };
    /**
     * @deprecation
     * @hidden
     */
    GoogleMaps.prototype.create = function (element, options) {
        console.error('GoogleMaps', '[deprecated] Please use GoogleMaps.create()');
        return GoogleMaps_1.create(element, options);
    };
    GoogleMaps.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    GoogleMaps.ctorParameters = function () { return []; };
    GoogleMaps = GoogleMaps_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps',
            plugin: 'cordova-plugin-googlemaps',
            repo: 'https://github.com/mapsplugin/cordova-plugin-googlemaps',
            install: 'ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"',
            installVariables: ['API_KEY_FOR_ANDROID', 'API_KEY_FOR_IOS'],
            platforms: ['Android', 'iOS']
        })
    ], GoogleMaps);
    return GoogleMaps;
    var GoogleMaps_1;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));

/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/BaseClass/README.md
 */
var BaseClass = (function () {
    function BaseClass() {
    }
    /**
     * Adds an event listener.
     *
     * @return {Observable<any>}
     */
    BaseClass.prototype.addEventListener = function (eventName) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.on(eventName, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
                    if (args[args.length - 1].type === 'Map') {
                        args[args.length - 1] = _this;
                    }
                    else if (_this instanceof MarkerCluster) {
                        var overlay = _this.get(args[args.length - 1].getId());
                        if (!overlay) {
                            var markerJS = args[args.length - 1];
                            var markerId_1 = markerJS.getId();
                            var markerCluster = _this;
                            overlay = new Marker(markerCluster.getMap(), markerJS);
                            _this.get('_overlays')[markerId_1] = overlay;
                            markerJS.one(markerJS.getId() + '_remove', function () {
                                _this.get('_overlays')[markerId_1] = null;
                            });
                        }
                        args[args.length - 1] = overlay;
                    }
                    else {
                        args[args.length - 1] = _this._objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
                    }
                }
                observer.next(args);
            });
        });
    };
    /**
     * Adds an event listener that works once.
     *
     * @return {Promise<any>}
     */
    BaseClass.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._objectInstance.one(eventName, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
                    if (args[args.length - 1].type === 'Map') {
                        args[args.length - 1] = _this;
                    }
                    else if (_this instanceof MarkerCluster) {
                        var overlay = _this.get(args[args.length - 1].getId());
                        if (!overlay) {
                            var markerJS = args[args.length - 1];
                            var markerId_2 = markerJS.getId();
                            var markerCluster = _this;
                            overlay = new Marker(markerCluster.getMap(), markerJS);
                            _this.get('_overlays')[markerId_2] = overlay;
                            markerJS.one(markerJS.getId() + '_remove', function () {
                                _this.get('_overlays')[markerId_2] = null;
                            });
                        }
                        args[args.length - 1] = overlay;
                    }
                    else {
                        args[args.length - 1] = _this._objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
                    }
                }
                resolve(args);
            });
        });
    };
    /**
     * Gets a value
     * @param key
     */
    BaseClass.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    BaseClass.prototype.set = function (key, value, noNotify) { };
    /**
     * Bind a key to another object
     * @param key {string}
     * @param target {any}
     * @param targetKey? {string}
     * @param noNotify? {boolean}
     */
    BaseClass.prototype.bindTo = function (key, target, targetKey, noNotify) { };
    /**
     * Listen to a map event.
     *
     * @return {Observable<any>}
     */
    BaseClass.prototype.on = function (eventName) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.on(eventName, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
                    if (args[args.length - 1].type === 'Map') {
                        args[args.length - 1] = _this;
                    }
                    else if (_this instanceof MarkerCluster) {
                        var overlay = _this.get(args[args.length - 1].getId());
                        if (!overlay) {
                            var markerJS = args[args.length - 1];
                            var markerId_3 = markerJS.getId();
                            var markerCluster = _this;
                            overlay = new Marker(markerCluster.getMap(), markerJS);
                            _this.get('_overlays')[markerId_3] = overlay;
                            markerJS.one(markerJS.getId() + '_remove', function () {
                                _this.get('_overlays')[markerId_3] = null;
                            });
                        }
                        args[args.length - 1] = overlay;
                    }
                    else {
                        args[args.length - 1] = _this._objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
                    }
                }
                observer.next(args);
            });
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @return {Promise<any>}
     */
    BaseClass.prototype.one = function (eventName) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._objectInstance.one(eventName, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
                    if (args[args.length - 1].type === 'Map') {
                        args[args.length - 1] = _this;
                    }
                    else if (_this instanceof MarkerCluster) {
                        var overlay = _this.get(args[args.length - 1].getId());
                        if (!overlay) {
                            var markerJS = args[args.length - 1];
                            var markerId_4 = markerJS.getId();
                            var markerCluster = _this;
                            overlay = new Marker(markerCluster.getMap(), markerJS);
                            _this.get('_overlays')[markerId_4] = overlay;
                            markerJS.one(markerJS.getId() + '_remove', function () {
                                _this.get('_overlays')[markerId_4] = null;
                            });
                        }
                        args[args.length - 1] = overlay;
                    }
                    else {
                        args[args.length - 1] = _this._objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
                    }
                }
                resolve(args);
            });
        });
    };
    /**
     * Clears all stored values
     */
    BaseClass.prototype.empty = function () { };
    /**
     * Dispatch event.
     */
    BaseClass.prototype.trigger = function (eventName) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
    };
    /**
     * Executes off() and empty()
     */
    BaseClass.prototype.destroy = function () {
        var map = this._objectInstance.getMap();
        if (map) {
            delete this._objectInstance.getMap().get('_overlays')[this._objectInstance.getId()];
        }
        this._objectInstance.remove();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])({ observable: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], BaseClass.prototype, "addEventListener", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], BaseClass.prototype, "addListenerOnce", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Object)
    ], BaseClass.prototype, "get", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Boolean]),
        __metadata("design:returntype", void 0)
    ], BaseClass.prototype, "set", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, String, Boolean]),
        __metadata("design:returntype", void 0)
    ], BaseClass.prototype, "bindTo", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])({ observable: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], BaseClass.prototype, "on", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], BaseClass.prototype, "one", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BaseClass.prototype, "empty", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", void 0)
    ], BaseClass.prototype, "trigger", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BaseClass.prototype, "destroy", null);
    BaseClass = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            plugin: 'cordova-plugin-googlemaps',
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.BaseClass',
            repo: ''
        })
    ], BaseClass);
    return BaseClass;
}());

/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/BaseArrayClass/README.md
 */
var BaseArrayClass = (function (_super) {
    __extends(BaseArrayClass, _super);
    function BaseArrayClass(initialData) {
        var _this = _super.call(this) || this;
        if (initialData instanceof GoogleMaps.getPlugin().BaseArrayClass) {
            _this._objectInstance = initialData;
        }
        else {
            _this._objectInstance = new (GoogleMaps.getPlugin().BaseArrayClass)(initialData);
        }
        return _this;
    }
    /**
     * Removes all elements from the array.
     * @param noNotify? {boolean} Set true to prevent remove_at events.
     */
    BaseArrayClass.prototype.empty = function (noNotify) { };
    /**
     * Iterate over each element, calling the provided callback.
     * @param fn {Function}
     * @param callback? {Function}
     */
    BaseArrayClass.prototype.forEach = function (fn) { };
    /**
     * Iterate over each element, calling the provided callback.
     * @param fn {Function}
     * @return {Promise<any>}
     */
    BaseArrayClass.prototype.forEachAsync = function (fn) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._objectInstance.forEach(fn, resolve);
        });
    };
    /**
     * Iterate over each element, then return a new value.
     * Then you can get the results of each callback.
     * @param fn {Function}
     * @param callback? {Function}
     * @return {Array<Object>} returns a new array with the results
     */
    BaseArrayClass.prototype.map = function (fn) { return; };
    /**
     * Iterate over each element, calling the provided callback.
     * Then you can get the results of each callback.
     * @param fn {Function}
     * @param callback? {Function}
     * @return {Promise<any>} returns a new array with the results
     */
    BaseArrayClass.prototype.mapAsync = function (fn) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._objectInstance.map(fn, resolve);
        });
    };
    /**
     * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
     * @param fn {Function}
     * @param callback? {Function}
     * @return {Array<Object>} returns a new filtered array
     */
    BaseArrayClass.prototype.filter = function (fn) { return; };
    /**
     * The filterAsync() method creates a new array with all elements that pass the test implemented by the provided function.
     * @param fn {Function}
     * @param callback? {Function}
     * @return {Promise<any>} returns a new filtered array
     */
    BaseArrayClass.prototype.filterAsync = function (fn) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._objectInstance.filter(fn, resolve);
        });
    };
    /**
     * Returns a reference to the underlying Array.
     * @return {Array<Object>}
     */
    BaseArrayClass.prototype.getArray = function () { return; };
    /**
     * Returns the element at the specified index.
     * @param index {number}
     * @return {Object}
     */
    BaseArrayClass.prototype.getAt = function (index) { };
    /**
     * Returns the number of the elements.
     * @return {number}
     */
    BaseArrayClass.prototype.getLength = function () { return; };
    /**
     * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
     * @param element {Object}
     * @return {number}
     */
    BaseArrayClass.prototype.indexOf = function (element) { return; };
    /**
     * The reverse() method reverses an array in place.
     */
    BaseArrayClass.prototype.reverse = function () { };
    /**
     * The sort() method sorts the elements of an array in place and returns the array.
     */
    BaseArrayClass.prototype.sort = function () { };
    /**
     * Inserts an element at the specified index.
     * @param index {number}
     * @param element {Object}
     * @param noNotify? {boolean} Set true to prevent insert_at events.
     * @return {Object}
     */
    BaseArrayClass.prototype.insertAt = function (index, element, noNotify) { };
    /**
     * Removes the last element of the array and returns that element.
     * @param noNotify? {boolean} Set true to prevent remove_at events.
     * @return {Object}
     */
    BaseArrayClass.prototype.pop = function (noNotify) { return; };
    /**
     * Adds one element to the end of the array and returns the new length of the array.
     * @param element {object}
     * @param noNotify? {boolean} Set true to prevent insert_at events.
     */
    BaseArrayClass.prototype.push = function (element, noNotify) { };
    /**
     * Removes an element from the specified index.
     * @param index {number}
     * @param noNotify? {boolean} Set true to prevent insert_at events.
     */
    BaseArrayClass.prototype.removeAt = function (index, noNotify) { };
    /**
     * Sets an element at the specified index.
     * @param index {number}
     * @param element {object}
     * @param noNotify? {boolean} Set true to prevent set_at events.
     */
    BaseArrayClass.prototype.setAt = function (index, element, noNotify) { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], BaseArrayClass.prototype, "empty", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], BaseArrayClass.prototype, "forEach", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", Promise)
    ], BaseArrayClass.prototype, "forEachAsync", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", Array)
    ], BaseArrayClass.prototype, "map", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", Promise)
    ], BaseArrayClass.prototype, "mapAsync", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", Array)
    ], BaseArrayClass.prototype, "filter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", Promise)
    ], BaseArrayClass.prototype, "filterAsync", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Array)
    ], BaseArrayClass.prototype, "getArray", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Object)
    ], BaseArrayClass.prototype, "getAt", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], BaseArrayClass.prototype, "getLength", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Number)
    ], BaseArrayClass.prototype, "indexOf", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BaseArrayClass.prototype, "reverse", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BaseArrayClass.prototype, "sort", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Object, Boolean]),
        __metadata("design:returntype", void 0)
    ], BaseArrayClass.prototype, "insertAt", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Object)
    ], BaseArrayClass.prototype, "pop", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Boolean]),
        __metadata("design:returntype", void 0)
    ], BaseArrayClass.prototype, "push", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Boolean]),
        __metadata("design:returntype", void 0)
    ], BaseArrayClass.prototype, "removeAt", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Object, Boolean]),
        __metadata("design:returntype", void 0)
    ], BaseArrayClass.prototype, "setAt", null);
    BaseArrayClass = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            plugin: 'cordova-plugin-googlemaps',
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.BaseArrayClass',
            repo: ''
        }),
        __metadata("design:paramtypes", [Object])
    ], BaseArrayClass);
    return BaseArrayClass;
}(BaseClass));

/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/Circle/README.md
 */
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    /**
     * Return the ID of instance.
     * @return {string}
     */
    Circle.prototype.getId = function () { return; };
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    Circle.prototype.getMap = function () { return this._map; };
    /**
     * Change the center position.
     * @param latLng {ILatLng}
     */
    Circle.prototype.setCenter = function (latLng) { };
    /**
     * Return the current center position
     * @return {ILatLng}
     */
    Circle.prototype.getCenter = function () { return; };
    /**
     * Return the current circle radius.
     * @return {number}
     */
    Circle.prototype.getRadius = function () { return; };
    /**
     * Change the circle radius.
     * @param radius {number}
     */
    Circle.prototype.setRadius = function (radius) { };
    /**
     * Change the filling color (inner color).
     * @param color {string}
     */
    Circle.prototype.setFillColor = function (color) { };
    /**
     * Return the current circle filling color (inner color).
     * @return {string}
     */
    Circle.prototype.getFillColor = function () { return; };
    /**
     * Change the stroke width.
     * @param strokeWidth {number}
     */
    Circle.prototype.setStrokeWidth = function (strokeWidth) { };
    /**
     * Return the current circle stroke width (unit: pixel).
     * @return {number}
     */
    Circle.prototype.getStrokeWidth = function () { return; };
    /**
     * Change the stroke color (outter color).
     * @param strokeColor {string}
     */
    Circle.prototype.setStrokeColor = function (strokeColor) { };
    /**
     * Return the current circle stroke color (outer color).
     * @return {string}
     */
    Circle.prototype.getStrokeColor = function () { return; };
    /**
     * Change clickablity of the circle.
     * @param clickable {boolean}
     */
    Circle.prototype.setClickable = function (clickable) { };
    /**
     * Return true if the circle is clickable.
     * @return {boolean}
     */
    Circle.prototype.getClickable = function () { return; };
    /**
     * Change the circle zIndex order.
     * @param zIndex {number}
     */
    Circle.prototype.setZIndex = function (zIndex) { };
    /**
     * Return the current circle zIndex.
     * @return {number}
     */
    Circle.prototype.getZIndex = function () { return; };
    /**
     * Remove the circle.
     */
    Circle.prototype.remove = function () { };
    /**
     * Return the latLngBounds (rectangle) that contains the circle.
     * @return {LatLngBounds}
     */
    Circle.prototype.getBounds = function () { return; };
    /**
     * Set circle visibility
     * @param visible {boolean}
     */
    Circle.prototype.setVisible = function (visible) { };
    /**
     * Returns a boolean that indicates whether the circle is visible
     * @return {boolean}
     */
    Circle.prototype.getVisible = function () { return; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Circle.prototype, "getId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setCenter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], Circle.prototype, "getCenter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Circle.prototype, "getRadius", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setRadius", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setFillColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Circle.prototype, "getFillColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setStrokeWidth", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Circle.prototype, "getStrokeWidth", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setStrokeColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Circle.prototype, "getStrokeColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setClickable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Circle.prototype, "getClickable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Circle.prototype, "getZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "remove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", LatLngBounds)
    ], Circle.prototype, "getBounds", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Circle.prototype, "getVisible", null);
    return Circle;
}(BaseClass));

/**
 * @hidden
 */
var Environment = (function () {
    function Environment() {
    }
    Environment_1 = Environment;
    /**
     * Get the open source software license information for Google Maps SDK for iOS.
     * @return {Promise<any>}
     */
    Environment.getLicenseInfo = function () {
        return new Promise(function (resolve) {
            GoogleMaps.getPlugin().environment.getLicenseInfo(function (text) { return resolve(text); });
        });
    };
    /**
     * @deprecation
     * @hidden
     */
    Environment.prototype.getLicenseInfo = function () {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Environment.getLicenseInfo()');
        return Environment_1.getLicenseInfo();
    };
    /**
     * Specifies the background color of the app.
     * @param color
     */
    Environment.setBackgroundColor = function (color) {
        GoogleMaps.getPlugin().environment.setBackgroundColor(color);
    };
    /**
     * @deprecation
     * @hidden
     */
    Environment.prototype.setBackgroundColor = function (color) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Environment.setBackgroundColor()');
        Environment_1.setBackgroundColor(color);
    };
    Environment = Environment_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            plugin: 'cordova-plugin-googlemaps',
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.environment',
            repo: ''
        })
    ], Environment);
    return Environment;
    var Environment_1;
}());

/**
 * @hidden
 */
var Geocoder = (function () {
    function Geocoder() {
    }
    Geocoder_1 = Geocoder;
    /**
     * @deprecation
     * @hidden
     */
    Geocoder.prototype.geocode = function (request) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Geocoder.geocode()');
        return Geocoder_1.geocode(request);
    };
    /**
     * Converts position to address and vice versa
     * @param {GeocoderRequest} request Request object with either an address or a position
     * @return {Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>}
     */
    Geocoder.geocode = function (request) {
        if (request.address instanceof Array || Array.isArray(request.address) ||
            request.position instanceof Array || Array.isArray(request.position)) {
            // -------------------------
            // Geocoder.geocode({
            //   address: [
            //    "Kyoto, Japan",
            //    "Tokyo, Japan"
            //   ]
            // })
            // -------------------------
            return new Promise(function (resolve, reject) {
                GoogleMaps.getPlugin().Geocoder.geocode(request, function (mvcArray) {
                    if (mvcArray) {
                        resolve(new BaseArrayClass(mvcArray));
                    }
                    else {
                        reject();
                    }
                });
            });
        }
        else {
            // -------------------------
            // Geocoder.geocode({
            //   address: "Kyoto, Japan"
            // })
            // -------------------------
            return new Promise(function (resolve, reject) {
                GoogleMaps.getPlugin().Geocoder.geocode(request, function (results) {
                    if (results) {
                        resolve(results);
                    }
                    else {
                        reject();
                    }
                });
            });
        }
    };
    Geocoder = Geocoder_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.Geocoder',
            plugin: 'cordova-plugin-googlemaps',
            repo: ''
        })
    ], Geocoder);
    return Geocoder;
    var Geocoder_1;
}());

/**
 * @hidden
 */
var Encoding = (function () {
    function Encoding() {
    }
    Encoding_1 = Encoding;
    /**
     * @deprecation
     * @hidden
     */
    Encoding.prototype.decodePath = function (encoded, precision) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Encoding.decodePath()');
        return Encoding_1.decodePath(encoded, precision);
    };
    /**
     * @deprecation
     * @hidden
     */
    Encoding.prototype.encodePath = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Encoding.encodePath()');
        return Encoding_1.encodePath(path);
    };
    /**
     * Decodes an encoded path string into a sequence of LatLngs.
     * @param encoded {string} an encoded path string
     * @param precision? {number} default: 5
     * @return {LatLng}
     */
    Encoding.decodePath = function (encoded, precision) { return; };
    /**
     * Encodes a sequence of LatLngs into an encoded path string.
     * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>} a sequence of LatLngs
     * @return {string}
     */
    Encoding.encodePath = function (path) { return; };
    Encoding = Encoding_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.geometry.encoding',
            plugin: 'cordova-plugin-googlemaps',
            repo: ''
        })
    ], Encoding);
    return Encoding;
    var Encoding_1;
}());

/**
 * @hidden
 */
var Poly = (function () {
    function Poly() {
    }
    /**
     * Returns true if the speicified location is in the polygon path
     * @param location {ILatLng}
     * @param path {ILatLng[]}
     * @return {boolean}
     */
    Poly.containsLocation = function (location, path) {
        return GoogleMaps.getPlugin().geometry.poly.containsLocation(location, path);
    };
    /**
     * Returns true if the speicified location is on the polyline path
     * @param location {ILatLng}
     * @param path {ILatLng[]}
     * @return {boolean}
     */
    Poly.isLocationOnEdge = function (location, path) {
        return GoogleMaps.getPlugin().geometry.poly.isLocationOnEdge(location, path);
    };
    Poly = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.geometry.poly',
            plugin: 'cordova-plugin-googlemaps',
            repo: ''
        })
    ], Poly);
    return Poly;
}());

/**
 * @hidden
 */
var Spherical = (function () {
    function Spherical() {
    }
    Spherical_1 = Spherical;
    /**
     * @deprecation
     * @hidden
     */
    Spherical.prototype.computeDistanceBetween = function (from, to) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeDistanceBetween()');
        return Spherical_1.computeDistanceBetween(from, to);
    };
    /**
     * @deprecation
     * @hidden
     */
    Spherical.prototype.computeOffset = function (from, distance, heading) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeOffset()');
        return Spherical_1.computeOffset(from, distance, heading);
    };
    /**
     * @deprecation
     * @hidden
     */
    Spherical.prototype.computeOffsetOrigin = function (to, distance, heading) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeOffsetOrigin()');
        return Spherical_1.computeOffsetOrigin(to, distance, heading);
    };
    /**
     * @deprecation
     * @hidden
     */
    Spherical.prototype.computeLength = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeLength()');
        return Spherical_1.computeLength(path);
    };
    /**
     * @deprecation
     * @hidden
     */
    Spherical.prototype.computeArea = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeArea()');
        return Spherical_1.computeArea(path);
    };
    /**
     * @deprecation
     * @hidden
     */
    Spherical.prototype.computeSignedArea = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeSignedArea()');
        return Spherical_1.computeSignedArea(path);
    };
    /**
     * @deprecation
     * @hidden
     */
    Spherical.prototype.computeHeading = function (from, to) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeHeading()');
        return Spherical_1.computeHeading(from, to);
    };
    /**
     * @deprecation
     * @hidden
     */
    Spherical.prototype.interpolate = function (from, to, fraction) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.interpolate()');
        return Spherical_1.interpolate(from, to, fraction);
    };
    /**
     * Returns the distance, in meters, between two LatLngs.
     * @param locationA {ILatLng}
     * @param locationB {ILatLng}
     * @return {number}
     */
    Spherical.computeDistanceBetween = function (from, to) {
        return GoogleMaps.getPlugin().geometry.spherical.computeDistanceBetween(from, to);
    };
    /**
     * Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north)
     * @param from {ILatLng}
     * @param distance {number}
     * @param heading {number}
     * @return {LatLng}
     */
    Spherical.computeOffset = function (from, distance, heading) {
        return GoogleMaps.getPlugin().geometry.spherical.computeOffset(from, distance, heading);
    };
    /**
     * Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.
     * @param to {ILatLng} The destination LatLng.
     * @param distance {number} The distance travelled, in meters.
     * @param heading {number} The heading in degrees clockwise from north.
     * @return {LatLng}
     */
    Spherical.computeOffsetOrigin = function (to, distance, heading) {
        return GoogleMaps.getPlugin().geometry.spherical.computeOffsetOrigin(to, distance, heading);
    };
    /**
     * Returns the length of the given path.
     * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>}
     * @return {number}
     */
    Spherical.computeLength = function (path) {
        return GoogleMaps.getPlugin().geometry.spherical.computeLength(path);
    };
    /**
     * Returns the area of a closed path. The computed area uses the same units as the radius.
     * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>}.
     * @return {number}
     */
    Spherical.computeArea = function (path) {
        return GoogleMaps.getPlugin().geometry.spherical.computeArea(path);
    };
    /**
     * Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path.
     * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>}.
     * @return {number}
     */
    Spherical.computeSignedArea = function (path) {
        return GoogleMaps.getPlugin().geometry.spherical.computeSignedArea(path);
    };
    /**
     * Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range (-180,180).
     * @param from {ILatLng}
     * @param to {ILatLng}
     * @return {number}
     */
    Spherical.computeHeading = function (from, to) {
        return GoogleMaps.getPlugin().geometry.spherical.computeHeading(from, to);
    };
    /**
     * Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.
     * @param from {ILatLng}     The LatLng from which to start.
     * @param to {ILatLng}       The LatLng toward which to travel.
     * @param fraction {number}  A fraction of the distance to travel from 0.0 to 1.0 .
     * @return {LatLng}
     */
    Spherical.interpolate = function (from, to, fraction) {
        return GoogleMaps.getPlugin().geometry.spherical.interpolate(from, to, fraction);
    };
    Spherical = Spherical_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.geometry.spherical',
            plugin: 'cordova-plugin-googlemaps',
            repo: ''
        })
    ], Spherical);
    return Spherical;
    var Spherical_1;
}());

/**
 * @hidden
 */
var GoogleMap = (function (_super) {
    __extends(GoogleMap, _super);
    function GoogleMap(element, options) {
        var _this = _super.call(this) || this;
        if (Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["i" /* checkAvailability */])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            if (element instanceof HTMLElement) {
                _this._objectInstance = GoogleMaps.getPlugin().Map.getMap(element, options);
            }
            else if (typeof element === 'string') {
                var dummyObj_1 = new (GoogleMaps.getPlugin().BaseClass)();
                _this._objectInstance = dummyObj_1;
                var onListeners_1 = [];
                var oneListeners_1 = [];
                var _origAddEventListener_1 = _this._objectInstance.addEventListener;
                var _origAddEventListenerOnce_1 = _this._objectInstance.addEventListenerOnce;
                _this._objectInstance.addEventListener = function (eventName, fn) {
                    if (eventName === GoogleMapsEvent.MAP_READY) {
                        _origAddEventListener_1.call(dummyObj_1, eventName, fn);
                    }
                    else {
                        onListeners_1.push([dummyObj_1, fn]);
                    }
                };
                _this._objectInstance.on = _this._objectInstance.addEventListener;
                _this._objectInstance.addEventListenerOnce = function (eventName, fn) {
                    if (eventName === GoogleMapsEvent.MAP_READY) {
                        _origAddEventListenerOnce_1.call(dummyObj_1, eventName, fn);
                    }
                    else {
                        oneListeners_1.push([dummyObj_1, fn]);
                    }
                };
                _this._objectInstance.one = _this._objectInstance.addEventListenerOnce;
                (new Promise(function (resolve, reject) {
                    var count = 0;
                    var timer = setInterval(function () {
                        var target = document.querySelector('.show-page #' + element);
                        if (target) {
                            clearInterval(timer);
                            resolve(target);
                        }
                        else {
                            if (count++ < 20) {
                                return;
                            }
                            clearInterval(timer);
                            _this._objectInstance.remove();
                            console.error('Can not find the element [#' + element + ']');
                            reject();
                        }
                    }, 100);
                }))
                    .then(function (target) {
                    _this._objectInstance = GoogleMaps.getPlugin().Map.getMap(target, options);
                    _this._objectInstance.one(GoogleMapsEvent.MAP_READY, function () {
                        _this.set('_overlays', {});
                        onListeners_1.forEach(function (args) {
                            _this.on.apply(_this, args);
                        });
                        oneListeners_1.forEach(function (args) {
                            _this.one.apply(_this, args);
                        });
                        dummyObj_1.trigger(GoogleMapsEvent.MAP_READY);
                    });
                })
                    .catch(function () {
                    _this._objectInstance = null;
                });
            }
            else if (element === null && options) {
                _this._objectInstance = GoogleMaps.getPlugin().Map.getMap(null, options);
            }
        }
        return _this;
    }
    /**
     * Changes the map div
     * @param domNode
     */
    GoogleMap.prototype.setDiv = function (domNode) {
        if (typeof domNode === 'string') {
            this._objectInstance.setDiv(document.querySelector('.show-page #' + domNode));
        }
        else {
            this._objectInstance.setDiv(domNode);
        }
    };
    /**
     * Returns the map HTML element
     * @return {HTMLElement}
     */
    GoogleMap.prototype.getDiv = function () { return; };
    /**
     * Changes the map type id
     * @param mapTypeId {string}
     */
    GoogleMap.prototype.setMapTypeId = function (mapTypeId) { };
    /**
     * Moves the camera with animation
     * @return {Promise<any>}
     */
    GoogleMap.prototype.animateCamera = function (cameraPosition) { return; };
    /**
     * Zooming in the camera with animation
     * @return {Promise<any>}
     */
    GoogleMap.prototype.animateCameraZoomIn = function () { return; };
    /**
     * Zooming out the camera with animation
     * @return {Promise<any>}
     */
    GoogleMap.prototype.animateCameraZoomOut = function () { return; };
    /**
     * Moves the camera without animation
     * @return {Promise<any>}
     */
    GoogleMap.prototype.moveCamera = function (cameraPosition) { return; };
    /**
     * Zooming in the camera without animation
     * @return {Promise<any>}
     */
    GoogleMap.prototype.moveCameraZoomIn = function () { return; };
    /**
     * Zooming out the camera without animation
     * @return {Promise<any>}
     */
    GoogleMap.prototype.moveCameraZoomOut = function () { return; };
    /**
     * Get the position of the camera.
     * @return {CameraPosition}
     */
    GoogleMap.prototype.getCameraPosition = function () { return; };
    /**
     * Get the current camera target position
     * @return {Promise<CameraPosition>}
     */
    GoogleMap.prototype.getCameraTarget = function () { return; };
    /**
     * Get the current camera zoom level
     * @return {number}
     */
    GoogleMap.prototype.getCameraZoom = function () { return; };
    /**
     * Get the current camera bearing
     * @return {number}
     */
    GoogleMap.prototype.getCameraBearing = function () { return; };
    /**
     * Get the current camera tilt (view angle)
     * @return {number}
     */
    GoogleMap.prototype.getCameraTilt = function () { return; };
    /**
     * Set the center position of the camera view
     * @param latLng {ILatLng | Array<ILatLng>}
     */
    GoogleMap.prototype.setCameraTarget = function (latLng) { };
    /**
     * Set zoom level of the camera
     * @param zoomLevel {number} Zoom level
     */
    GoogleMap.prototype.setCameraZoom = function (zoomLevel) { };
    /**
     * Set the camera view angle
     * @param tiltLevel {number} Tilt level
     */
    GoogleMap.prototype.setCameraTilt = function (tiltLevel) { };
    /**
     * Set camera bearing
     * @param bearing {any}
     */
    GoogleMap.prototype.setCameraBearing = function (bearing) { };
    /**
     * Change the center of the map by the given distance in pixels
     * @param x {any}
     * @param y {any}
     */
    GoogleMap.prototype.panBy = function (x, y) { };
    /**
     * Get the current visible region (southWest and northEast)
     * @return {VisibleRegion}
     */
    GoogleMap.prototype.getVisibleRegion = function () { return; };
    /**
     * Get the current device location
     * @return {Promise<MyLocation>}
     */
    GoogleMap.prototype.getMyLocation = function (options) { return; };
    /**
     * Set false to ignore all clicks on the map
     * @param isClickable {boolean}
     */
    GoogleMap.prototype.setClickable = function (isClickable) { };
    /**
     * Destroy a map completely
     * @return {Promise<any>}
     */
    GoogleMap.prototype.remove = function () {
        var _this = this;
        if (this.get('_overlays')) {
            Object.keys(this.get('_overlays')).forEach(function (overlayId) {
                _this.get('_overlays')[overlayId] = null;
                delete _this.get('_overlays')[overlayId];
            });
        }
        return new Promise(function (resolve) {
            _this._objectInstance.remove(function () { return resolve(); });
        });
    };
    /**
     * Remove all overlays, such as marker
     * @return {Promise<any>}
     */
    GoogleMap.prototype.clear = function () {
        var _this = this;
        if (this.get('_overlays')) {
            Object.keys(this.get('_overlays')).forEach(function (overlayId) {
                _this.get('_overlays')[overlayId] = null;
                delete _this.get('_overlays')[overlayId];
            });
        }
        return new Promise(function (resolve) {
            _this._objectInstance.clear(function () { return resolve(); });
        });
    };
    /**
     * Convert the unit from LatLng to the pixels from the left/top of the map div
     * @return {Promise<any>}
     */
    GoogleMap.prototype.fromLatLngToPoint = function (latLng) { return; };
    /**
     * Convert the unit from the pixels from the left/top to the LatLng
     * @return {Promise<LatLng>}
     */
    GoogleMap.prototype.fromPointToLatLng = function (point) { return; };
    /**
     * Set true if you want to show the MyLocation button
     * @param enabled {boolean}
     */
    GoogleMap.prototype.setMyLocationEnabled = function (enabled) { };
    /**
     * Get the currently focused building
     * @return {Promise<any>}
     */
    GoogleMap.prototype.getFocusedBuilding = function () { return; };
    /**
     * Set true if you want to show the indoor map
     * @param enabled {boolean}
     */
    GoogleMap.prototype.setIndoorEnabled = function (enabled) { };
    /**
     * Set true if you want to show the traffic layer
     * @param enabled {boolean}
     */
    GoogleMap.prototype.setTrafficEnabled = function (enabled) { };
    /**
     * Set true if you want to show the compass button
     * @param enabled {boolean}
     */
    GoogleMap.prototype.setCompassEnabled = function (enabled) { };
    /**
     * Sets the preference for whether all gestures should be enabled or disabled
     * @param enabled {boolean}
     */
    GoogleMap.prototype.setAllGesturesEnabled = function (enabled) { };
    /**
     * Set visibility of the map
     * @param visible {boolean}
     */
    GoogleMap.prototype.setVisible = function (visible) { };
    /**
     * Adjust the map padding (same as CSS padding rule)
     * @param top {number}
     * @param right {number}
     * @param left {number}
     * @param bottom {number}
     */
    GoogleMap.prototype.setPadding = function (top, right, bottom, left) { };
    /**
     * Set options
     * @param options
     */
    GoogleMap.prototype.setOptions = function (options) { };
    /**
     * Adds a marker
     * @return {Promise<Marker | any>}
     */
    GoogleMap.prototype.addMarker = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addMarker(options, function (marker) {
                if (marker) {
                    var overlayId_1 = marker.getId();
                    var overlay_1 = new Marker(_this, marker);
                    _this.get('_overlays')[overlayId_1] = overlay_1;
                    marker.one(overlayId_1 + '_remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_1] = null;
                            overlay_1.destroy();
                        }
                    });
                    resolve(overlay_1);
                }
                else {
                    reject();
                }
            });
        });
    };
    GoogleMap.prototype.addMarkerCluster = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addMarkerCluster(options, function (markerCluster) {
                if (markerCluster) {
                    var overlayId_2 = markerCluster.getId();
                    var overlay_2 = new MarkerCluster(_this, markerCluster);
                    _this.get('_overlays')[overlayId_2] = overlay_2;
                    markerCluster.one('remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_2] = null;
                            overlay_2.destroy();
                        }
                    });
                    markerCluster.set('_overlays', new BaseArrayClass());
                    resolve(overlay_2);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * Adds a circle
     * @return {Promise<Circle | any>}
     */
    GoogleMap.prototype.addCircle = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addCircle(options, function (circle) {
                if (circle) {
                    var overlayId_3 = circle.getId();
                    var overlay_3 = new Circle(_this, circle);
                    _this.get('_overlays')[overlayId_3] = overlay_3;
                    circle.one(overlayId_3 + '_remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_3] = null;
                            overlay_3.destroy();
                        }
                    });
                    resolve(overlay_3);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * Adds a polygon
     * @return {Promise<Polygon | any>}
     */
    GoogleMap.prototype.addPolygon = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addPolygon(options, function (polygon) {
                if (polygon) {
                    var overlayId_4 = polygon.getId();
                    var overlay_4 = new Polygon(_this, polygon);
                    _this.get('_overlays')[overlayId_4] = overlay_4;
                    polygon.one(overlayId_4 + '_remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_4] = null;
                            overlay_4.destroy();
                        }
                    });
                    resolve(overlay_4);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     *
     * @return {Promise<Polyline | any>}
     */
    GoogleMap.prototype.addPolyline = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addPolyline(options, function (polyline) {
                if (polyline) {
                    var overlayId_5 = polyline.getId();
                    var overlay_5 = new Polyline(_this, polyline);
                    _this.get('_overlays')[overlayId_5] = overlay_5;
                    polyline.one(overlayId_5 + '_remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_5] = null;
                            overlay_5.destroy();
                        }
                    });
                    resolve(overlay_5);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @return {Promise<TileOverlay | any>}
     */
    GoogleMap.prototype.addTileOverlay = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addTileOverlay(options, function (tileOverlay) {
                if (tileOverlay) {
                    var overlayId_6 = tileOverlay.getId();
                    var overlay_6 = new TileOverlay(_this, tileOverlay);
                    _this.get('_overlays')[overlayId_6] = overlay_6;
                    tileOverlay.one(overlayId_6 + '_remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_6] = null;
                            overlay_6.destroy();
                        }
                    });
                    resolve(overlay_6);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @return {Promise<GroundOverlay | any>}
     */
    GoogleMap.prototype.addGroundOverlay = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addGroundOverlay(options, function (groundOverlay) {
                if (groundOverlay) {
                    var overlayId_7 = groundOverlay.getId();
                    var overlay_7 = new GroundOverlay(_this, groundOverlay);
                    _this.get('_overlays')[overlayId_7] = overlay_7;
                    groundOverlay.one(overlayId_7 + '_remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_7] = null;
                            overlay_7.destroy();
                        }
                    });
                    resolve(overlay_7);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * Refreshes layout.
     * You can execute it, but you don't need to do that. The plugin does this automatically.
     */
    GoogleMap.prototype.refreshLayout = function () { };
    /**
     * @return {Promise<any>}
     */
    GoogleMap.prototype.toDataURL = function () { return; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setDiv", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", HTMLElement)
    ], GoogleMap.prototype, "getDiv", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setMapTypeId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "animateCamera", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "animateCameraZoomIn", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "animateCameraZoomOut", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "moveCamera", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "moveCameraZoomIn", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "moveCameraZoomOut", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], GoogleMap.prototype, "getCameraPosition", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], GoogleMap.prototype, "getCameraTarget", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], GoogleMap.prototype, "getCameraZoom", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], GoogleMap.prototype, "getCameraBearing", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], GoogleMap.prototype, "getCameraTilt", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setCameraTarget", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setCameraZoom", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setCameraTilt", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setCameraBearing", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "panBy", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", VisibleRegion)
    ], GoogleMap.prototype, "getVisibleRegion", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "getMyLocation", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setClickable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "remove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "clear", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "fromLatLngToPoint", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "fromPointToLatLng", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setMyLocationEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "getFocusedBuilding", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setIndoorEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setTrafficEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setCompassEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setAllGesturesEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number, Number, Number]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setPadding", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setOptions", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addMarker", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addMarkerCluster", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addCircle", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addPolygon", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addPolyline", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addTileOverlay", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addGroundOverlay", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "refreshLayout", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "toDataURL", null);
    GoogleMap = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'GoogleMaps',
            plugin: 'cordova-plugin-googlemaps'
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], GoogleMap);
    return GoogleMap;
}(BaseClass));

/**
 * @hidden
 */
var GroundOverlay = (function (_super) {
    __extends(GroundOverlay, _super);
    function GroundOverlay(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    /**
     * Return the ID of instance.
     * @return {string}
     */
    GroundOverlay.prototype.getId = function () { return; };
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    GroundOverlay.prototype.getMap = function () { return this._map; };
    /**
     * Change the bounds of the GroundOverlay
     * @param bounds { ILatLng[]}
     */
    GroundOverlay.prototype.setBounds = function (bounds) { };
    /**
     * Change the bearing of the ground overlay
     * @param bearing {number}
     */
    GroundOverlay.prototype.setBearing = function (bearing) { };
    /**
     * Return the current bearing value
     */
    GroundOverlay.prototype.getBearing = function () { return; };
    /**
     * Change the image of the ground overlay
     * @param image {string} URL of image
     */
    GroundOverlay.prototype.setImage = function (image) { };
    ;
    /**
     * Change the opacity of the ground overlay from 0.0 to 1.0
     * @param opacity {number}
     */
    GroundOverlay.prototype.setOpacity = function (opacity) { };
    /**
     * Return the current opacity
     * @return {number}
     */
    GroundOverlay.prototype.getOpacity = function () { return; };
    /**
     * Change clickablity of the ground overlay
     * @param clickable {boolean}
     */
    GroundOverlay.prototype.setClickable = function (clickable) { };
    /**
     * Return true if the ground overlay is clickable
     * @return {boolean}
     */
    GroundOverlay.prototype.getClickable = function () { return; };
    /**
     * Change visibility of the ground overlay
     * @param visible {boolean}
     */
    GroundOverlay.prototype.setVisible = function (visible) { };
    /**
     * Return true if the ground overlay is visible
     * @return {boolean}
     */
    GroundOverlay.prototype.getVisible = function () { return; };
    /**
     * Change the ground overlay zIndex order
     * @param index {number}
     */
    GroundOverlay.prototype.setZIndex = function (index) { };
    /**
     * Return the current ground overlay zIndex
     * @return {number}
     */
    GroundOverlay.prototype.getZIndex = function () { return; };
    /**
     * Remove the ground overlay
     */
    GroundOverlay.prototype.remove = function () {
        delete this._objectInstance.getMap().get('_overlays')[this.getId()];
        this._objectInstance.remove();
        this.destroy();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], GroundOverlay.prototype, "getId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "setBounds", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "setBearing", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], GroundOverlay.prototype, "getBearing", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "setImage", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "setOpacity", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], GroundOverlay.prototype, "getOpacity", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "setClickable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], GroundOverlay.prototype, "getClickable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "setVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], GroundOverlay.prototype, "getVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "setZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], GroundOverlay.prototype, "getZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "remove", null);
    return GroundOverlay;
}(BaseClass));

/**
 * @hidden
 */
var HtmlInfoWindow = (function (_super) {
    __extends(HtmlInfoWindow, _super);
    function HtmlInfoWindow() {
        var _this = _super.call(this) || this;
        _this._objectInstance = new (GoogleMaps.getPlugin().HtmlInfoWindow)();
        return _this;
    }
    /**
     * Change the backgroundColor
     * @param color {string}
     */
    HtmlInfoWindow.prototype.setBackgroundColor = function (color) { };
    /**
     * Set your HTML contents.
     * @param content {any} String containing text or HTML element
     * @param cssOptions? {any} CSS styles for the container element of HTMLInfoWindow
     */
    HtmlInfoWindow.prototype.setContent = function (content, cssOptions) { };
    /**
     * Open the htmlInfoWindow
     * @param marker {Marker}
     */
    HtmlInfoWindow.prototype.open = function (marker) { };
    /**
     * Close the htmlInfoWindow
     */
    HtmlInfoWindow.prototype.close = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], HtmlInfoWindow.prototype, "setBackgroundColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], HtmlInfoWindow.prototype, "setContent", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], HtmlInfoWindow.prototype, "open", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HtmlInfoWindow.prototype, "close", null);
    HtmlInfoWindow = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            plugin: 'cordova-plugin-googlemaps',
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.HtmlInfoWindow',
            repo: ''
        }),
        __metadata("design:paramtypes", [])
    ], HtmlInfoWindow);
    return HtmlInfoWindow;
}(BaseClass));

/**
 * @hidden
 */
var Marker = (function (_super) {
    __extends(Marker, _super);
    function Marker(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    /**
     * Return the ID of instance.
     * @return {string}
     */
    Marker.prototype.getId = function () { return; };
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    Marker.prototype.getMap = function () { return this._map; };
    /**
     * Set the marker position.
     * @param latLng {ILatLng}
     */
    Marker.prototype.setPosition = function (latLng) { return; };
    /**
     * Return the marker position.
     * @return {ILatLng}
     */
    Marker.prototype.getPosition = function () { return; };
    /**
     * Show the normal infoWindow of the marker.
     */
    Marker.prototype.showInfoWindow = function () { };
    /**
     * Hide the normal infoWindow of the marker.
     */
    Marker.prototype.hideInfoWindow = function () { };
    /**
     * Specify the animation either `DROP` or `BOUNCE`
     * @param animation {string}
     */
    Marker.prototype.setAnimation = function (animation) { };
    /**
     * Set true if you **do not want** to move the map when you click on the marker.
     * @param disableAutoPan {boolean}
     */
    Marker.prototype.setDisableAutoPan = function (disableAutoPan) { };
    /**
     * Set false if you want to hide the marker.
     * @param visible
     */
    Marker.prototype.setVisible = function (visible) { };
    /**
     * Return true if the marker is visible
     */
    Marker.prototype.isVisible = function () { return; };
    /**
     * Change title of the normal infoWindow.
     * @param title {string}
     */
    Marker.prototype.setTitle = function (title) { };
    /**
     * Return the title strings.
     * @return {string}
     */
    Marker.prototype.getTitle = function () { return; };
    /**
     * Change snippet of the normal infoWindow.
     * @param snippet {string}
     */
    Marker.prototype.setSnippet = function (snippet) { };
    /**
     * Return the snippet strings.
     * @return {string}
     */
    Marker.prototype.getSnippet = function () { return; };
    /**
     * Change the marker opacity from 0.0 to 1.0.
     * @param alpha {number} Opacity
     */
    Marker.prototype.setOpacity = function (alpha) { };
    /**
     * Return the marker opacity.
     * @return {number} Opacity
     */
    Marker.prototype.getOpacity = function () { return; };
    /**
     * Remove the marker.
     */
    Marker.prototype.remove = function () {
        delete this._objectInstance.getMap().get('_overlays')[this.getId()];
        this._objectInstance.remove();
        this.destroy();
    };
    /**
     * Change the info window anchor. This defaults to 50% from the left of the image and at the bottom of the image.
     * @param x {number} Distance from left of the icon image in pixels.
     * @param y {number} Distance from top of the icon image in pixels.
     */
    Marker.prototype.setIconAnchor = function (x, y) { };
    /**
     * Change the info window anchor. This defaults to 50% from the left of the image and at the top of the image.
     * @param x {number} Distance from left of the icon image in pixels.
     * @param y {number} Distance from top of the icon image in pixels.
     */
    Marker.prototype.setInfoWindowAnchor = function (x, y) { };
    /**
     * Return true if the infoWindow is shown on the marker
     * @return {boolean}
     */
    Marker.prototype.isInfoWindowShown = function () { return; };
    /**
     * Return the marker hash code.
     * @return {string} Marker hash code
     */
    Marker.prototype.getHashCode = function () { return; };
    /**
     * Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays.
     * @param y {number} z-index
     */
    Marker.prototype.setZIndex = function (zIndex) { };
    /**
     * Get z-index
     * @return {number}
     */
    Marker.prototype.getZIndex = function () { return; };
    /**
     * Set true if you allow all users to drag the marker.
     * @param draggable {boolean}
     */
    Marker.prototype.setDraggable = function (draggable) { };
    /**
     * Return true if the marker drag is enabled.
     * @return {boolean}
     */
    Marker.prototype.isDraggable = function () { return; };
    /**
     * Set true if you want to be flat marker.
     * @param flat {boolean}
     */
    Marker.prototype.setFlat = function (flat) { return; };
    /**
     * Change icon url and/or size
     * @param icon
     */
    Marker.prototype.setIcon = function (icon) { return; };
    /**
     * Set the marker rotation angle.
     * @param rotation {number}
     */
    Marker.prototype.setRotation = function (rotation) { };
    /**
     * Return the marker rotation angle.
     * @return {number}
     */
    Marker.prototype.getRotation = function () { return; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Marker.prototype, "getId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setPosition", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], Marker.prototype, "getPosition", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "showInfoWindow", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "hideInfoWindow", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setAnimation", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setDisableAutoPan", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Marker.prototype, "isVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setTitle", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Marker.prototype, "getTitle", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setSnippet", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Marker.prototype, "getSnippet", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setOpacity", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Marker.prototype, "getOpacity", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "remove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setIconAnchor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setInfoWindowAnchor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Marker.prototype, "isInfoWindowShown", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Marker.prototype, "getHashCode", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Marker.prototype, "getZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setDraggable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Marker.prototype, "isDraggable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setFlat", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setIcon", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setRotation", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Marker.prototype, "getRotation", null);
    return Marker;
}(BaseClass));

/**
 * @hidden
 */
var MarkerCluster = (function (_super) {
    __extends(MarkerCluster, _super);
    function MarkerCluster(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    /**
     * Return the ID of instance.
     * @return {string}
     */
    MarkerCluster.prototype.getId = function () { return; };
    MarkerCluster.prototype.addMarker = function (marker) { };
    MarkerCluster.prototype.addMarkers = function (markers) { };
    MarkerCluster.prototype.remove = function () {
        this._objectInstance.set('_overlays', undefined);
        delete this._objectInstance.getMap().get('_overlays')[this.getId()];
        this._objectInstance.remove();
        this.destroy();
    };
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    MarkerCluster.prototype.getMap = function () { return this._map; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], MarkerCluster.prototype, "getId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MarkerCluster.prototype, "addMarker", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], MarkerCluster.prototype, "addMarkers", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MarkerCluster.prototype, "remove", null);
    return MarkerCluster;
}(BaseClass));

/**
 * @hidden
 */
var Polygon = (function (_super) {
    __extends(Polygon, _super);
    function Polygon(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    /**
     * Return the ID of instance.
     * @return {string}
     */
    Polygon.prototype.getId = function () { return; };
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    Polygon.prototype.getMap = function () { return this._map; };
    /**
     * Change the polygon points.
     * @param points {ILatLng[]}
     */
    Polygon.prototype.setPoints = function (points) { };
    /**
     * Return an instance of the BaseArrayClass.
     * You can modify the points.
     * @return {BaseArrayClass<ILatLng>}
     */
    Polygon.prototype.getPoints = function () {
        return new BaseArrayClass(this._objectInstance.getPoints());
    };
    /**
     * Change the polygon holes.
     * @param holes {ILatLng[][]}
     */
    Polygon.prototype.setHoles = function (holes) { };
    /**
     * Return an instance of the BaseArrayClass.
     * You can modify the holes.
     * @return {BaseArrayClass<ILatLng[]>}
     */
    Polygon.prototype.getHoles = function () {
        var holes = this._objectInstance.getPoints();
        var results = new BaseArrayClass();
        holes.forEach(function (hole) {
            results.push(hole);
        });
        return results;
    };
    /**
     * Change the filling color (inner color)
     * @param fillColor {string}
     */
    Polygon.prototype.setFillColor = function (fillColor) { };
    /**
     * Return the current polygon filling color (inner color).
     * @return {string}
     */
    Polygon.prototype.getFillColor = function () { return; };
    /**
     * Change the stroke color (outer color)
     * @param strokeColor {string}
     */
    Polygon.prototype.setStrokeColor = function (strokeColor) { };
    /**
     * Return the current polygon stroke color (outer color)
     * @return {string}
     */
    Polygon.prototype.getStrokeColor = function () { return; };
    /**
     * Change clickablity of the polygon
     * @param clickable {boolean}
     */
    Polygon.prototype.setClickable = function (clickable) { };
    /**
     * Return true if the polygon is clickable
     */
    Polygon.prototype.getClickable = function () { return; };
    /**
     * Change visibility of the polygon
     * @param visible {boolean}
     */
    Polygon.prototype.setVisible = function (visible) { };
    /**
     * Return true if the polygon is visible
     * @return {boolean}
     */
    Polygon.prototype.getVisible = function () { return; };
    /**
     * Change the polygon zIndex order.
     * @param zIndex {number}
     */
    Polygon.prototype.setZIndex = function (zIndex) { };
    /**
     * Return the current polygon zIndex
     * @return {number}
     */
    Polygon.prototype.getZIndex = function () { return; };
    /**
     * Remove the polygon.
     */
    Polygon.prototype.remove = function () {
        delete this._objectInstance.getMap().get('_overlays')[this.getId()];
        this._objectInstance.remove();
        this.destroy();
    };
    /**
     * Change the polygon stroke width
     */
    Polygon.prototype.setStrokeWidth = function (strokeWidth) { };
    /**
     * Return the polygon stroke width
     */
    Polygon.prototype.getStrokeWidth = function () { return; };
    /**
     * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth.
     * @param geodesic {boolean}
     */
    Polygon.prototype.setGeodesic = function (geodesic) { };
    /**
     * Return true if the polygon is geodesic.
     * @return {boolean}
     */
    Polygon.prototype.getGeodesic = function () { return; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Polygon.prototype, "getId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setPoints", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", BaseArrayClass)
    ], Polygon.prototype, "getPoints", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setHoles", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", BaseArrayClass)
    ], Polygon.prototype, "getHoles", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setFillColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Polygon.prototype, "getFillColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setStrokeColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Polygon.prototype, "getStrokeColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setClickable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Polygon.prototype, "getClickable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Polygon.prototype, "getVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Polygon.prototype, "getZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "remove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setStrokeWidth", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Polygon.prototype, "getStrokeWidth", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setGeodesic", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Polygon.prototype, "getGeodesic", null);
    return Polygon;
}(BaseClass));

/**
 * @hidden
 */
var Polyline = (function (_super) {
    __extends(Polyline, _super);
    function Polyline(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    /**
     * Return the ID of instance.
     * @return {string}
     */
    Polyline.prototype.getId = function () { return; };
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    Polyline.prototype.getMap = function () { return this._map; };
    /**
     * Change the polyline points.
     * @param points {ILatLng[]}
     */
    Polyline.prototype.setPoints = function (points) { };
    /**
     * Return an instance of the BaseArrayClass
     * You can modify the points.
     * @return {BaseArrayClass<ILatLng>}
     */
    Polyline.prototype.getPoints = function () {
        return new BaseArrayClass(this._objectInstance.getPoints());
    };
    /**
     * When true, edges of the polyline are interpreted as geodesic and will follow the curvature of the Earth.
     * @param geoDesic {boolean}
     */
    Polyline.prototype.setGeoDesic = function (geoDesic) { };
    /**
     * Return true if the polyline is geodesic
     */
    Polyline.prototype.getGeodesic = function () { return; };
    /**
     * Change visibility of the polyline
     * @param visible {boolean}
     */
    Polyline.prototype.setVisible = function (visible) { };
    /**
     * Return true if the polyline is visible
     * @return {boolean}
     */
    Polyline.prototype.getVisible = function () { return; };
    /**
     * Change clickablity of the polyline
     * @param clickable {boolean}
     */
    Polyline.prototype.setClickable = function (clickable) { };
    /**
     * Return true if the polyline is clickable
     * @return {boolean}
     */
    Polyline.prototype.getClickable = function () { return; };
    /**
     * Change the polyline color
     * @param strokeColor {string}
     */
    Polyline.prototype.setStrokeColor = function (strokeColor) { };
    /**
     * Return the current polyline color
     * @return {string}
     */
    Polyline.prototype.getStrokeColor = function () { return; };
    /**
     * Change the polyline stroke width
     * @param strokeWidth {number}
     */
    Polyline.prototype.setStrokeWidth = function (strokeWidth) { };
    /**
     * Return the current stroke width (unit: pixel).
     * @return {number}
     */
    Polyline.prototype.getStrokeWidth = function () { return; };
    /**
     * Change the polyline zIndex order.
     * @param index {number}
     */
    Polyline.prototype.setZIndex = function (index) { };
    /**
     * Return the current polyline zIndex
     * @return {number}
     */
    Polyline.prototype.getZIndex = function () { return; };
    /**
     * Remove the polyline
     */
    Polyline.prototype.remove = function () {
        delete this._objectInstance.getMap().get('_overlays')[this.getId()];
        this._objectInstance.remove();
        this.destroy();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Polyline.prototype, "getId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "setPoints", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", BaseArrayClass)
    ], Polyline.prototype, "getPoints", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "setGeoDesic", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Polyline.prototype, "getGeodesic", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "setVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Polyline.prototype, "getVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "setClickable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Polyline.prototype, "getClickable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "setStrokeColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Polyline.prototype, "getStrokeColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "setStrokeWidth", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Polyline.prototype, "getStrokeWidth", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "setZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Polyline.prototype, "getZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "remove", null);
    return Polyline;
}(BaseClass));

/**
 * @hidden
 */
var TileOverlay = (function (_super) {
    __extends(TileOverlay, _super);
    function TileOverlay(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    /**
     * Return the ID of instance.
     * @return {string}
     */
    TileOverlay.prototype.getId = function () { return; };
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    TileOverlay.prototype.getMap = function () { return this._map; };
    /**
     * Set whether the tiles should fade in.
     * @param fadeIn {boolean}
     */
    TileOverlay.prototype.setFadeIn = function (fadeIn) { };
    /**
     * Get whether the tiles should fade in
     * @return {boolean}
     */
    TileOverlay.prototype.getFadeIn = function () { return; };
    /**
     * Set the zIndex of the tile overlay
     * @param zIndex {number}
     */
    TileOverlay.prototype.setZIndex = function (zIndex) { };
    /**
     * Return the zIndex of the tile overlay
     * @return {number}
     */
    TileOverlay.prototype.getZIndex = function () { return; };
    /**
     * Set the opacity of the tile overlay
     * @param opacity {number}
     */
    TileOverlay.prototype.setOpacity = function (opacity) { };
    /**
     * Return the opacity of the tile overlay
     * @return {number}
     */
    TileOverlay.prototype.getOpacity = function () { return; };
    /**
     * Set false if you want to hide
     * @param visible {boolean}
     */
    TileOverlay.prototype.setVisible = function (visible) { };
    /**
     * Return true if the tile overlay is visible
     * @return {boolean}
     */
    TileOverlay.prototype.getVisible = function () { return; };
    /**
     * Get tile size
     */
    TileOverlay.prototype.getTileSize = function () { return; };
    /**
     * Remove the tile overlay
     */
    TileOverlay.prototype.remove = function () {
        delete this._objectInstance.getMap().get('_overlays')[this.getId()];
        this._objectInstance.remove();
        this.destroy();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], TileOverlay.prototype, "getId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], TileOverlay.prototype, "setFadeIn", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], TileOverlay.prototype, "getFadeIn", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], TileOverlay.prototype, "setZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], TileOverlay.prototype, "getZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], TileOverlay.prototype, "setOpacity", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], TileOverlay.prototype, "getOpacity", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], TileOverlay.prototype, "setVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], TileOverlay.prototype, "getVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], TileOverlay.prototype, "getTileSize", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TileOverlay.prototype, "remove", null);
    return TileOverlay;
}(BaseClass));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarqueDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_youtube_video_player__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
var MarqueDetailsPage = (function () {
    function MarqueDetailsPage(navCtrl, navParams, toastCtrl, http, youtube, googleMaps) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.youtube = youtube;
        this.googleMaps = googleMaps;
        this.shownGroup = null;
        this.listShown = false;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.marqueId = navParams.get('marqueId');
        var newsData = http.get('assets/data/news.json').map(function (res) { return res.json().news; });
        newsData.subscribe(function (data) {
            _this.news = data;
        });
        var servData = http.get('assets/data/services.json').map(function (res) { return res.json().services; });
        servData.subscribe(function (data) {
            _this.services = data;
        });
        var brandData = http.get('assets/data/marques.json').map(function (res) { return res.json().marques; });
        brandData.subscribe(function (data) {
            _this.marques = data;
            if (_this.marques[_this.marqueId].videoId != null) {
                var openVideo = true;
                var vlength = _this.navCtrl.getViews().length;
                var index = 0;
                var final = new Array();
                for (var _i = 0, _a = _this.navCtrl.getViews(); _i < _a.length; _i++) {
                    var views = _a[_i];
                    if (views != _this.navCtrl.getViews()[vlength - 1]) {
                        final.push(views);
                    }
                }
                for (var _b = 0, final_1 = final; _b < final_1.length; _b++) {
                    var view = final_1[_b];
                    if (view.id == "MarqueDetailsPage") {
                        openVideo = false;
                    }
                }
                if (openVideo) {
                    _this.youtube.openVideo(_this.marques[_this.marqueId].videoId);
                }
            }
        });
    }
    MarqueDetailsPage.prototype.replayVideo = function () {
        this.youtube.openVideo(this.marques[this.marqueId].videoId);
    };
    MarqueDetailsPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    MarqueDetailsPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    MarqueDetailsPage.prototype.prev = function () {
        this.navCtrl.pop();
    };
    MarqueDetailsPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
        console.log("enter");
        this.loadMap();
    };
    MarqueDetailsPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    MarqueDetailsPage.prototype.showService = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages__["d" /* ServiceDetailsPage */], {
            param1: index
        });
    };
    MarqueDetailsPage.prototype.showServicesList = function () {
        var list = document.getElementsByClassName('list');
        if (this.listShown) {
            list[0].setAttribute("hidden", "true");
        }
        else {
            list[0].removeAttribute("hidden");
        }
        this.listShown = !this.listShown;
    };
    MarqueDetailsPage.prototype.showProduct = function (event, index) {
        console.log(index);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages__["c" /* ProductDetailsPage */], {
            productId: index
        });
    };
    MarqueDetailsPage.prototype.showNews = function (event, index) {
        console.log(index);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages__["b" /* NewsDetailsPage */], {
            param1: index
        });
    };
    MarqueDetailsPage.prototype.show = function (event) {
        if (event.srcElement.style.wordBreak == "normal") {
            event.srcElement.style.wordBreak = "break-word";
            event.srcElement.style.width = "100px";
        }
        else {
            event.srcElement.style.wordBreak = "normal";
            event.srcElement.style.width = "100%";
            event.srcElement.style.minWidth = "100px";
        }
    };
    MarqueDetailsPage.prototype.loadMap = function () {
        var _this = this;
        var mapOptions = {
            camera: {
                target: {
                    lat: this.marques[this.marqueId].contact.address.lat,
                    lng: this.marques[this.marqueId].contact.address.lng
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas', mapOptions);
        // Wait the MAP_READY before using any methods.
        this.map.one(__WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            console.log('Map is ready!');
            // Now you can use all methods safely.
            _this.map.addMarker({
                title: 'Ionic',
                icon: 'blue',
                animation: 'DROP',
                position: {
                    lat: _this.marques[_this.marqueId].contact.address.lat,
                    lng: _this.marques[_this.marqueId].contact.address.lng
                }
            })
                .then(function (marker) {
                marker.on(__WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK)
                    .subscribe(function () {
                    alert('clicked');
                });
            });
        });
    };
    return MarqueDetailsPage;
}());
MarqueDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-marque-details',template:/*ion-inline-start:"C:\Users\Cyprien\Desktop\newApp2\src\pages\marqueDetails\marqueDetails.html"*/'<ion-content *ngIf="marques != null && news != null && services != null" padding style="border-top: 20px solid #488aff">\n\n  <ion-header no-border style="background-color: rgba(0, 0, 0, 0.2)">\n\n    <ion-navbar color="primary" hideBackButton="true">\n\n      <ion-buttons start>\n\n          <button ion-button icon-left (click)="prev()"><ion-icon name="arrow-back"></ion-icon></button> \n\n      </ion-buttons>\n\n      <ion-title>\n\n\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        \n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + marques[marqueId].imgCover +\')\'}"></div>\n\n  <div id="content">\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <div id="profile-info" padding>\n\n          <div style="position: absolute; left:35%; right:35%; z-index: 1000">\n\n              <img id="profile-image" [src]="marques[marqueId].imgProfile">\n\n          </div>\n\n          <h3 id="profile-name">{{marques[marqueId].content.title}}</h3>\n\n          <br>\n\n          <div *ngIf="marques[marqueId].content.citation">\n\n            <h4 style="font-size: 1.4em">{{marques[marqueId].content.citation}}</h4>\n\n            <br>\n\n          </div>\n\n          <div *ngIf="marques[marqueId].videoId" class="button-video">\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col>\n\n                    <button *ngIf="marqueId == 0" ion-button small style="background-color: #0eae15" (click)="replayVideo()">Rejouer la vidéo &nbsp;&nbsp;<ion-icon name="logo-youtube" style="color: white"></ion-icon></button>\n\n                    <button *ngIf="marqueId == 1" ion-button small style="background-color: #d01717" (click)="replayVideo()">Rejouer la vidéo &nbsp;&nbsp;<ion-icon name="logo-youtube" style="color: white"></ion-icon></button>\n\n                    <button *ngIf="marqueId == 2" ion-button small style="background-color: #386ecd" (click)="replayVideo()">Rejouer la vidéo &nbsp;&nbsp;<ion-icon name="logo-youtube" style="color: white"></ion-icon></button>\n\n                    <button *ngIf="marqueId == 3" ion-button small style="background-color: #cbc40e" (click)="replayVideo()">Rejouer la vidéo &nbsp;&nbsp;<ion-icon name="logo-youtube" style="color: white"></ion-icon></button>\n\n                    <button *ngIf="marqueId == 4" ion-button small style="background-color: #cc7136" (click)="replayVideo()">Rejouer la vidéo &nbsp;&nbsp;<ion-icon name="logo-youtube" style="color: white"></ion-icon></button>\n\n                    <button *ngIf="marqueId == 5" ion-button small style="background-color: #962ac8" (click)="replayVideo()">Rejouer la vidéo &nbsp;&nbsp;<ion-icon name="logo-youtube" style="color: white"></ion-icon></button>\n\n                    <button *ngIf="marqueId == 6" ion-button small style="background-color: #d42649" (click)="replayVideo()">Rejouer la vidéo &nbsp;&nbsp;<ion-icon name="logo-youtube" style="color: white"></ion-icon></button>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </div>\n\n          <hr>\n\n\n\n          <div *ngIf="marques[marqueId].content.keys != null" class="keys">\n\n            <ion-scroll zoom="false" scrollX="true" class="scroll">\n\n              <ion-grid>\n\n                <ion-row text-center>\n\n                  <ion-col *ngFor="let key of marques[marqueId].content.keys">\n\n                    <ion-badge *ngIf="marqueId == 0" style="background-color: #0eae15"><div style="margin-top: 35px;">{{key.nb}}</div></ion-badge>\n\n                    <ion-badge *ngIf="marqueId == 1" style="background-color: #d01717"><div style="margin-top: 35px;">{{key.nb}}</div></ion-badge>\n\n                    <ion-badge *ngIf="marqueId == 2" style="background-color: #386ecd"><div style="margin-top: 35px;">{{key.nb}}</div></ion-badge>\n\n                    <ion-badge *ngIf="marqueId == 3" style="background-color: #cbc40e"><div style="margin-top: 35px;">{{key.nb}}</div></ion-badge>\n\n                    <ion-badge *ngIf="marqueId == 4" style="background-color: #cc7136"><div style="margin-top: 35px;">{{key.nb}}</div></ion-badge>\n\n                    <ion-badge *ngIf="marqueId == 5" style="background-color: #962ac8"><div style="margin-top: 35px;">{{key.nb}}</div></ion-badge>\n\n                    <ion-badge *ngIf="marqueId == 6" style="background-color: #d42649"><div style="margin-top: 35px;">{{key.nb}}</div></ion-badge>\n\n                    <div class="descr">\n\n                      <p class="max-width: 150px;">{{key.label}}</p>\n\n                    </div>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n            </ion-scroll>\n\n            <hr>\n\n          </div>\n\n          <div *ngIf="marques[marqueId].content.areas != null">\n\n            <br>\n\n            <div *ngFor="let areasCats of marques[marqueId].content.areas">\n\n              <h3 style="font-size: 1.2em" *ngIf="areasCats.title">{{areasCats.title}}</h3>\n\n              <br>\n\n              <div *ngIf="areasCats.parts">\n\n                <div *ngFor="let part of areasCats.parts">\n\n                  <h4 *ngIf="part.title">{{part.title}}</h4>\n\n                  <p *ngIf="part.subtitle">{{part.subtitle}}</p>\n\n                  <p *ngIf="part.description">{{part.description}}</p>\n\n                  <div *ngIf="part.points" style="margin-bottom:20px;" text-center>\n\n                    <ion-scroll zoom="false" scrollX="true" class="scroll">\n\n                      <ion-row text-center>\n\n                        <div class="mother">\n\n                          <div style="white-space: nowrap;" *ngFor="let area of part.points" class="area" style="margin-right:5px;">\n\n                            <ion-badge style="background-color: #0eae15" *ngIf="marqueId == 0" (click)="show($event)">{{area}}</ion-badge>\n\n                            <ion-badge style="background-color: #d01717" *ngIf="marqueId == 1" (click)="show($event)">{{area}}</ion-badge>\n\n                            <ion-badge style="background-color: #386ecd" *ngIf="marqueId == 2" (click)="show($event)">{{area}}</ion-badge>\n\n                            <ion-badge style="background-color: #cbc40e" *ngIf="marqueId == 3" (click)="show($event)">{{area}}</ion-badge>\n\n                            <ion-badge style="background-color: #cc7136" *ngIf="marqueId == 4" (click)="show($event)">{{area}}</ion-badge>\n\n                            <ion-badge style="background-color: #962ac8" *ngIf="marqueId == 5" (click)="show($event)">{{area}}</ion-badge>\n\n                            <ion-badge style="background-color: #d42649" *ngIf="marqueId == 6" (click)="show($event)">{{area}}</ion-badge>\n\n                          </div>\n\n                        </div>\n\n                      </ion-row>\n\n                    </ion-scroll>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <p *ngIf="areasCats.conclusion"></p>\n\n            </div>\n\n            <hr>\n\n          </div>\n\n          <div *ngIf="marques[marqueId].newsId">\n\n            <h3 style="font-size:1.2em" *ngIf="marques[marqueId].newsId != null">News &amp; Infos</h3>\n\n            <br>\n\n            <div *ngIf="marques[marqueId].newsId != null" style="position: relative; height: 150px; margin-bottom: 20px;">\n\n              <ion-slides pager>\n\n                <ion-slide *ngFor="let index of marques[marqueId].newsId">\n\n                  <div (click)="showNews($event, index)">\n\n                    <img [src]="news[index].img">\n\n                    <div style="position: absolute; top: 20%; right:10%; left:10%; width: 80%; background-color: rgba(0, 0, 0, 0.5); color: white; padding-top:20px; padding-bottom: 20px;">\n\n                      {{news[index].title}}\n\n                    </div>\n\n                  </div>\n\n                </ion-slide>\n\n              </ion-slides>\n\n            </div>\n\n            <hr>\n\n          </div>\n\n          <div *ngIf="marques[marqueId].content.parts != null">\n\n            <div *ngFor="let part of marques[marqueId].content.parts">\n\n              <h3 *ngIf="part.title != null" style="font-size: 1.2em">{{part.title}}</h3>\n\n              <br>\n\n              <div *ngIf="part.paragraphes != null">\n\n                <div *ngFor="let p of part.paragraphes" class="justify-center">\n\n                  <p *ngIf="p.accrPoints">{{p.accrPoints}}</p>\n\n                  <p *ngIf="p.accrPointsBold"><b>{{p.accrPointsBold}}</b></p>\n\n                  <div *ngIf="p.points">\n\n                    <ul style="color:#666" text-justify>\n\n                      <li *ngFor="let point of p.points">\n\n                        {{point.title}}\n\n                        <div *ngIf="point.subpoints">\n\n                          <ul>\n\n                            <li *ngFor="let subpoint of point.subpoints">{{subpoint}}</li>\n\n                          </ul>\n\n                        </div>\n\n                      </li>\n\n                    </ul>\n\n                  </div>\n\n                  <p *ngIf="p.description" text-justify>{{p.description}}</p>\n\n                  <p *ngIf="p.descriptionBold"><b>{{p.descriptionBold}}</b></p>\n\n                  <br>\n\n                </div>\n\n              </div>\n\n              <div *ngIf="part.subparts != null" class="justify-center">\n\n                <div *ngFor="let subpart of part.subparts">\n\n                  <h5 *ngIf="subpart.title != null">{{subpart.title}}</h5>\n\n                  <br>\n\n                  <div *ngIf="subpart.paragraphes != null">\n\n                    <div *ngFor="let p of subpart.paragraphes">\n\n                      <p *ngIf="p.accrPoints">{{p.accrPoints}}</p>\n\n                      <p *ngIf="p.accrPointsBold"><b>{{p.accrPointsBold}}</b></p>\n\n                      <div *ngIf="p.points">\n\n                        <ul>\n\n                          <li *ngFor="let point of p.points">\n\n                            {{point.title}}\n\n                            <div *ngIf="point.subpoints">\n\n                              <ul>\n\n                                <li *ngFor="let subpoint of point.subpoints">{{subpoint}}</li>\n\n                              </ul>\n\n                            </div>\n\n                          </li>\n\n                        </ul>\n\n                      </div>\n\n                      <p *ngIf="p.description">{{p.description}}</p>\n\n                      <p *ngIf="p.descriptionBold"><b>{{p.descriptionBold}}</b></p>\n\n                      <br>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div *ngIf="part.points" class="justify-center" style="color: #666">\n\n                <ul>\n\n                  <li *ngFor="let p of part.points">{{p.title}}</li>\n\n                </ul>\n\n              </div>\n\n            </div>\n\n            <hr>\n\n          </div>\n\n          <h3 style="font-size:1.2em" *ngIf="marques[marqueId].servicesId" (click)="showServicesList(listShown)">Nos Services &nbsp;&nbsp;\n\n            <ion-icon *ngIf="!listShown" name="arrow-up"></ion-icon>\n\n            <ion-icon *ngIf="listShown" name="arrow-down"></ion-icon>\n\n          </h3>\n\n          <br>\n\n          <ion-list hidden>\n\n            <ion-item *ngFor="let index of marques[marqueId].servicesId" (click)="showService(index)">\n\n              <ion-avatar item-start>\n\n                <img [src]="services[index].imgService">\n\n              </ion-avatar>\n\n              <h4>{{services[index].content.title}}</h4>\n\n              <p>{{services[index].content.subtitle}}</p>\n\n            </ion-item>\n\n          </ion-list>\n\n          <hr>\n\n          <div *ngIf="marques[marqueId].contact">\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col col-4>\n\n\n\n                </ion-col>\n\n                <ion-col col-8>\n\n                  <div id="map-canvas">\n\n\n\n                  </div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </div>\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Cyprien\Desktop\newApp2\src\pages\marqueDetails\marqueDetails.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["a" /* GoogleMaps */]])
], MarqueDetailsPage);

//# sourceMappingURL=marqueDetails.js.map

/***/ })

});
//# sourceMappingURL=8.js.map