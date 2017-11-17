webpackJsonp([1],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_vis__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_vis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_vis__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    return SignupPageModule;
}());
SignupPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3_ng2_vis__["VisModule"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
        ]
    })
], SignupPageModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Vis = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"vis\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var VisNetwork = (function (_super) {
    __extends(VisNetwork, _super);
    function VisNetwork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VisNetwork;
}(Vis.Network));
exports.VisNetwork = VisNetwork;
var VisNodes = (function (_super) {
    __extends(VisNodes, _super);
    function VisNodes(data, options) {
        return _super.call(this, data, options) || this;
    }
    VisNodes.prototype.getLength = function () {
        return this.length;
    };
    VisNodes.prototype.add = function (data, senderId) {
        return _super.prototype.add.call(this, data, senderId);
    };
    VisNodes.prototype.clear = function (senderId) {
        return _super.prototype.clear.call(this, senderId);
    };
    VisNodes.prototype.distinct = function (field) {
        return _super.prototype.distinct.call(this, field);
    };
    VisNodes.prototype.flush = function () {
        _super.prototype.flush.call(this);
    };
    VisNodes.prototype.forEach = function (callback, options) {
        _super.prototype.forEach.call(this, callback, options);
    };
    VisNodes.prototype.getAll = function (options) {
        return _super.prototype.get.call(this, options);
    };
    VisNodes.prototype.getById = function (id, options) {
        return _super.prototype.get.call(this, id, options);
    };
    VisNodes.prototype.getByIds = function (ids, options) {
        return _super.prototype.get.call(this, ids, options);
    };
    VisNodes.prototype.getDataSet = function () {
        return _super.prototype.getDataSet.call(this);
    };
    VisNodes.prototype.getIds = function (options) {
        return _super.prototype.getIds.call(this, options);
    };
    VisNodes.prototype.map = function (callback, options) {
        return _super.prototype.map.call(this, callback, options);
    };
    VisNodes.prototype.max = function (field) {
        return _super.prototype.max.call(this, field);
    };
    VisNodes.prototype.min = function (field) {
        return _super.prototype.min.call(this, field);
    };
    VisNodes.prototype.on = function (event, callback) {
        _super.prototype.on.call(this, event, callback);
    };
    VisNodes.prototype.off = function (event, callback) {
        _super.prototype.off.call(this, event, callback);
    };
    VisNodes.prototype.removeItems = function (ids, senderId) {
        return _super.prototype.remove.call(this, ids, senderId);
    };
    VisNodes.prototype.setOptions = function (options) {
        _super.prototype.setOptions.call(this, options);
    };
    VisNodes.prototype.update = function (data, senderId) {
        return _super.prototype.update.call(this, data, senderId);
    };
    return VisNodes;
}(Vis.DataSet));
exports.VisNodes = VisNodes;
var VisEdges = (function (_super) {
    __extends(VisEdges, _super);
    function VisEdges(data, options) {
        return _super.call(this, data, options) || this;
    }
    VisEdges.prototype.getLength = function () {
        return this.length;
    };
    VisEdges.prototype.add = function (data, senderId) {
        return _super.prototype.add.call(this, data, senderId);
    };
    VisEdges.prototype.clear = function (senderId) {
        return _super.prototype.clear.call(this, senderId);
    };
    VisEdges.prototype.distinct = function (field) {
        return _super.prototype.distinct.call(this, field);
    };
    VisEdges.prototype.flush = function () {
        _super.prototype.flush.call(this);
    };
    VisEdges.prototype.forEach = function (callback, options) {
        _super.prototype.forEach.call(this, callback, options);
    };
    VisEdges.prototype.getAll = function (options) {
        return _super.prototype.get.call(this, options);
    };
    VisEdges.prototype.getById = function (id, options) {
        return _super.prototype.get.call(this, id, options);
    };
    VisEdges.prototype.getByIds = function (ids, options) {
        return _super.prototype.get.call(this, ids, options);
    };
    VisEdges.prototype.getDataSet = function () {
        return _super.prototype.getDataSet.call(this);
    };
    VisEdges.prototype.getIds = function (options) {
        return _super.prototype.getIds.call(this, options);
    };
    VisEdges.prototype.map = function (callback, options) {
        return _super.prototype.map.call(this, callback, options);
    };
    VisEdges.prototype.max = function (field) {
        return _super.prototype.max.call(this, field);
    };
    VisEdges.prototype.min = function (field) {
        return _super.prototype.min.call(this, field);
    };
    VisEdges.prototype.on = function (event, callback) {
        _super.prototype.on.call(this, event, callback);
    };
    VisEdges.prototype.off = function (event, callback) {
        _super.prototype.off.call(this, event, callback);
    };
    VisEdges.prototype.removeItems = function (ids, senderId) {
        return _super.prototype.remove.call(this, ids, senderId);
    };
    VisEdges.prototype.setOptions = function (options) {
        _super.prototype.setOptions.call(this, options);
    };
    VisEdges.prototype.update = function (data, senderId) {
        return _super.prototype.update.call(this, data, senderId);
    };
    return VisEdges;
}(Vis.DataSet));
exports.VisEdges = VisEdges;
__export(__webpack_require__(604));
__export(__webpack_require__(331));


/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Vis = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"vis\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var VisTimelineItems = (function (_super) {
    __extends(VisTimelineItems, _super);
    function VisTimelineItems(data, options) {
        return _super.call(this, data, options) || this;
    }
    VisTimelineItems.prototype.getLength = function () {
        return this.length;
    };
    VisTimelineItems.prototype.add = function (data, senderId) {
        return _super.prototype.add.call(this, data, senderId);
    };
    VisTimelineItems.prototype.clear = function (senderId) {
        return _super.prototype.clear.call(this, senderId);
    };
    VisTimelineItems.prototype.distinct = function (field) {
        return _super.prototype.distinct.call(this, field);
    };
    VisTimelineItems.prototype.flush = function () {
        _super.prototype.flush.call(this);
    };
    VisTimelineItems.prototype.forEach = function (callback, options) {
        _super.prototype.forEach.call(this, callback, options);
    };
    VisTimelineItems.prototype.getAll = function (options) {
        return _super.prototype.get.call(this, options);
    };
    VisTimelineItems.prototype.getById = function (id, options) {
        return _super.prototype.get.call(this, id, options);
    };
    VisTimelineItems.prototype.getByIds = function (ids, options) {
        return _super.prototype.get.call(this, ids, options);
    };
    VisTimelineItems.prototype.getDataSet = function () {
        return _super.prototype.getDataSet.call(this);
    };
    VisTimelineItems.prototype.getIds = function (options) {
        return _super.prototype.getIds.call(this, options);
    };
    VisTimelineItems.prototype.map = function (callback, options) {
        return _super.prototype.map.call(this, callback, options);
    };
    VisTimelineItems.prototype.max = function (field) {
        return _super.prototype.max.call(this, field);
    };
    VisTimelineItems.prototype.min = function (field) {
        return _super.prototype.min.call(this, field);
    };
    VisTimelineItems.prototype.on = function (event, callback) {
        _super.prototype.on.call(this, event, callback);
    };
    VisTimelineItems.prototype.off = function (event, callback) {
        _super.prototype.off.call(this, event, callback);
    };
    VisTimelineItems.prototype.removeItems = function (ids, senderId) {
        return _super.prototype.remove.call(this, ids, senderId);
    };
    VisTimelineItems.prototype.setOptions = function (options) {
        _super.prototype.setOptions.call(this, options);
    };
    VisTimelineItems.prototype.update = function (data, senderId) {
        return _super.prototype.update.call(this, data, senderId);
    };
    return VisTimelineItems;
}(Vis.DataSet));
exports.VisTimelineItems = VisTimelineItems;
var VisTimelineGroups = (function (_super) {
    __extends(VisTimelineGroups, _super);
    function VisTimelineGroups(data, options) {
        return _super.call(this, data, options) || this;
    }
    VisTimelineGroups.prototype.getLength = function () {
        return this.length;
    };
    VisTimelineGroups.prototype.add = function (data, senderId) {
        return _super.prototype.add.call(this, data, senderId);
    };
    VisTimelineGroups.prototype.clear = function (senderId) {
        return _super.prototype.clear.call(this, senderId);
    };
    VisTimelineGroups.prototype.distinct = function (field) {
        return _super.prototype.distinct.call(this, field);
    };
    VisTimelineGroups.prototype.flush = function () {
        _super.prototype.flush.call(this);
    };
    VisTimelineGroups.prototype.forEach = function (callback, options) {
        _super.prototype.forEach.call(this, callback, options);
    };
    VisTimelineGroups.prototype.getAll = function (options) {
        return _super.prototype.get.call(this, options);
    };
    VisTimelineGroups.prototype.getById = function (id, options) {
        return _super.prototype.get.call(this, id, options);
    };
    VisTimelineGroups.prototype.getByIds = function (ids, options) {
        return _super.prototype.get.call(this, ids, options);
    };
    VisTimelineGroups.prototype.getDataSet = function () {
        return _super.prototype.getDataSet.call(this);
    };
    VisTimelineGroups.prototype.getIds = function (options) {
        return _super.prototype.getIds.call(this, options);
    };
    VisTimelineGroups.prototype.map = function (callback, options) {
        return _super.prototype.map.call(this, callback, options);
    };
    VisTimelineGroups.prototype.max = function (field) {
        return _super.prototype.max.call(this, field);
    };
    VisTimelineGroups.prototype.min = function (field) {
        return _super.prototype.min.call(this, field);
    };
    VisTimelineGroups.prototype.on = function (event, callback) {
        _super.prototype.on.call(this, event, callback);
    };
    VisTimelineGroups.prototype.off = function (event, callback) {
        _super.prototype.off.call(this, event, callback);
    };
    VisTimelineGroups.prototype.removeItems = function (ids, senderId) {
        return _super.prototype.remove.call(this, ids, senderId);
    };
    VisTimelineGroups.prototype.setOptions = function (options) {
        _super.prototype.setOptions.call(this, options);
    };
    VisTimelineGroups.prototype.update = function (data, senderId) {
        return _super.prototype.update.call(this, data, senderId);
    };
    return VisTimelineGroups;
}(Vis.DataSet));
exports.VisTimelineGroups = VisTimelineGroups;
var VisTimeline = (function (_super) {
    __extends(VisTimeline, _super);
    function VisTimeline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VisTimeline;
}(Vis.Timeline));
exports.VisTimeline = VisTimeline;
__export(__webpack_require__(332));
__export(__webpack_require__(606));


/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var index_1 = __webpack_require__(303);
/**
 * A service to create, manage and control VisNetwork instances.
 *
 * @export
 * @class VisNetworkService
 */
var VisNetworkService = (function () {
    function VisNetworkService() {
        /**
         * Fired when the user clicks the mouse or taps on a touchscreen device.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.click = new core_1.EventEmitter();
        /**
         * Fired when the user double clicks the mouse or double taps on a touchscreen device.
         * Since a double click is in fact 2 clicks, 2 click events are fired, followed by a double click event.
         * If you do not want to use the click events if a double click event is fired,
         * just check the time between click events before processing them.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.doubleClick = new core_1.EventEmitter();
        /**
         * Fired when the user click on the canvas with the right mouse button.
         * The right mouse button does not select by default.
         * You can use the method getNodeAt to select the node if you want.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.oncontext = new core_1.EventEmitter();
        /**
         * Fired when the user clicks and holds the mouse or taps and holds on a touchscreen device.
         * A click event is also fired in this case.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.hold = new core_1.EventEmitter();
        /**
         * Fired after drawing on the canvas has been completed.
         * Can be used to draw on top of the network.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.release = new core_1.EventEmitter();
        /**
         * Fired when the selection has changed by user action.
         * This means a node or edge has been selected, added to the selection or deselected.
         * All select events are only triggered on click and hold.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.select = new core_1.EventEmitter();
        /**
         * Fired when a node has been selected by the user.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.selectNode = new core_1.EventEmitter();
        /**
         * Fired when a edge has been selected by the user.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.selectEdge = new core_1.EventEmitter();
        /**
         * Fired when a node (or nodes) has (or have) been deselected by the user.
         * The previous selection is the list of nodes and edges that were selected before the last user event.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.deselectNode = new core_1.EventEmitter();
        /**
         * Fired when a edge (or edges) has (or have) been deselected by the user.
         * The previous selection is the list of nodes and edges that were selected before the last user event.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.deselectEdge = new core_1.EventEmitter();
        /**
         * Fired when starting a drag.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.dragStart = new core_1.EventEmitter();
        /**
         * Fired when dragging node(s) or the view.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.dragging = new core_1.EventEmitter();
        /**
         * Fired when the drag has finished.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.dragEnd = new core_1.EventEmitter();
        /**
         * Fired if the option interaction:{hover:true} is enabled and the mouse hovers over a node.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.hoverNode = new core_1.EventEmitter();
        /**
         * Fired if the option interaction:{hover:true} is enabled and
         * the mouse moved away from a node it was hovering over before.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.blurNode = new core_1.EventEmitter();
        /**
         * Fired if the option interaction:{hover:true} is enabled and the mouse hovers over an edge.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.hoverEdge = new core_1.EventEmitter();
        /**
         * Fired if the option interaction:{hover:true} is enabled and
         * the mouse moved away from an edge it was hovering over before.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.blurEdge = new core_1.EventEmitter();
        /**
         * Fired when the user zooms in or out.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.zoom = new core_1.EventEmitter();
        /**
         * Fired when the popup (tooltip) is shown.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.showPopup = new core_1.EventEmitter();
        /**
         * Fired when the popup (tooltip) is hidden.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.hidePopup = new core_1.EventEmitter();
        /**
         * Fired when stabilization starts.
         * This is also the case when you drag a node and the physics
         * simulation restarts to stabilize again.
         * Stabilization does not neccesarily imply 'without showing'.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.startStabilizing = new core_1.EventEmitter();
        /**
         * Fired when a multiple of the updateInterval number of iterations is reached.
         * This only occurs in the 'hidden' stabilization.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.stabilizationProgress = new core_1.EventEmitter();
        /**
         * Fired when the 'hidden' stabilization finishes.
         * This does not necessarily mean the network is stabilized;
         * it could also mean that the amount of iterations defined in the options has been reached.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.stabilizationIterationsDone = new core_1.EventEmitter();
        /**
         * Fired when the 'hidden' stabilization finishes.
         * This does not necessarily mean the network is stabilized;
         * it could also mean that the amount of iterations defined in the options has been reached.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.stabilized = new core_1.EventEmitter();
        /**
         * Fired when the size of the canvas has been resized,
         * either by a redraw call when the container div has changed in size,
         * a setSize() call with new values or a setOptions() with new width and/or height values.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.resize = new core_1.EventEmitter();
        /**
         * Fired before the redrawing begins.
         * The simulation step has completed at this point.
         * Can be used to move custom elements before starting drawing the new frame.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.initRedraw = new core_1.EventEmitter();
        /**
         * Fired after the canvas has been cleared, scaled and translated to
         * the viewing position but before all edges and nodes are drawn.
         * Can be used to draw behind the network.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.beforeDrawing = new core_1.EventEmitter();
        /**
         * Fired after drawing on the canvas has been completed.
         * Can be used to draw on top of the network.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.afterDrawing = new core_1.EventEmitter();
        /**
         * Fired when an animation is finished.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.animationFinished = new core_1.EventEmitter();
        /**
         * Fired when a user changes any option in the configurator.
         * The options object can be used with the setOptions method or stringified using JSON.stringify().
         * You do not have to manually put the options into the network: this is done automatically.
         * You can use the event to store user options in the database.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkService
         */
        this.configChange = new core_1.EventEmitter();
        this.networks = {};
    }
    /**
     * Creates a new network instance.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {HTMLElement} container The HTML element that contains the network view.
     * @param {VisNetworkData} data The initial network nodes and edges.
     * @param {VisNetworkOptions} [options] The network options.
     *
     * @throws {Error} Thrown when a network with the same name already exists.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.create = function (visNetwork, container, data, options) {
        if (this.networks[visNetwork]) {
            throw new Error("Network with id " + visNetwork + " already exists.");
        }
        this.networks[visNetwork] = new index_1.VisNetwork(container, data, options);
    };
    /**
     * Remove the network from the DOM and remove all Hammer bindings and references.
     *
     * @param {string} visNetwork The network name/identifier.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.destroy = function (visNetwork) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].destroy();
            delete this.networks[visNetwork];
        }
    };
    /**
     * Activates an event.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisNetworkEvents} eventName The event name.
     * @param {boolean} preventDefault Stops the default behavior of the event.
     * @returns {boolean} Returns true when the event was activated.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.on = function (visNetwork, eventName, preventDefault) {
        if (this.networks[visNetwork]) {
            var that_1 = this;
            this.networks[visNetwork].on(eventName, function (params) {
                var emitter = that_1[eventName];
                if (emitter) {
                    emitter.emit(params ? [visNetwork].concat(params) : visNetwork);
                }
                if (preventDefault && params.event) {
                    params.event.preventDefault();
                }
            });
            return true;
        }
        return false;
    };
    /**
     * Deactivates an event.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisNetworkEvents} eventName The event name.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.off = function (visNetwork, eventName) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].off(eventName);
        }
    };
    /**
     * Activates an event listener only once.
     * After it has taken place, the event listener will be removed.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisNetworkEvents} eventName The event name.
     * @returns {boolean} Returns true when the event was activated.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.once = function (visNetwork, eventName) {
        var _this = this;
        if (this.networks[visNetwork]) {
            var that_2 = this;
            this.networks[visNetwork].on(eventName, function (params) {
                var emitter = that_2[eventName];
                if (emitter) {
                    emitter.emit(params ? [visNetwork].concat(params) : visNetwork);
                    _this.off(visNetwork, eventName);
                }
            });
            return true;
        }
        return false;
    };
    /**
     * Override all the data in the network.
     * If stabilization is enabled in the physics module,
     * the network will stabilize again.
     * This method is also performed when first initializing the network.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisNetworkData} data The network data.
     *
     * @throws {Error} Thrown when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.setData = function (visNetwork, data) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].setData(data);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * Set the options.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisNetworkOptions} options The network options.
     *
     * @throws {Error} Thrown when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.setOptions = function (visNetwork, options) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].setOptions(options);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * Selects the nodes corresponding to the id's in the input array.
     * This method unselects all other objects before selecting its own objects.
     * Does not fire events.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisId[]} nodeIds The node ids that should be selected.
     * @param {boolean} [highlightEdges] If highlightEdges is true or undefined,
     *                                   the neighbouring edges will also be selected.
     *
     * @throws {Error} Thrown when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.selectNodes = function (visNetwork, nodeIds, highlightEdges) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].selectNodes(nodeIds, highlightEdges);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * Returns an object with selected nodes and edges ids.
     *
     * @param {string} visNetwork The network name/identifier.
     * @returns {{ nodes: VisId[], edges: VisId[] }}
     * The selected node and edge ids or undefined when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.getSelection = function (visNetwork) {
        if (this.networks[visNetwork]) {
            return this.networks[visNetwork].getSelection();
        }
        return undefined;
    };
    /**
     * Returns an array of selected node ids.
     *
     * @param {string} visNetwork The network name/identifier.
     * @returns {VisId[]} The selected node ids or undefined when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.getSelectedNodes = function (visNetwork) {
        if (this.networks[visNetwork]) {
            return this.networks[visNetwork].getSelectedNodes();
        }
        return undefined;
    };
    /**
     * Returns an array of selected edge ids.
     *
     * @param {string} visNetwork The network name/identifier.
     * @returns {VisId[]} The selected edge ids or undefined when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.getSelectedEdges = function (visNetwork) {
        if (this.networks[visNetwork]) {
            return this.networks[visNetwork].getSelectedEdges();
        }
        return undefined;
    };
    /**
     * Unselect all objects.
     * Does not fire events.
     *
     * @param {string} visNetwork The network name/identifier.
     *
     * @throws {Error} Thrown when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.unselectAll = function (visNetwork) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].unselectAll();
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * Zooms out so all nodes fit on the canvas.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisFitOptions} [options] Options to customize.
     *
     * @throws {Error} Thrown when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.fit = function (visNetwork, options) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].fit(options);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * Redraw the network.
     *
     * @param {string} visNetwork The network name/identifier.
     *
     * @throws {Error} Thrown when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.redraw = function (visNetwork) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].redraw();
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * Programatically enable the edit mode.
     * Similar effect to pressing the edit button.
     *
     * @param {string} visNetwork The network name/identifier.
     *
     * @throws {Error} Thrown when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.enableEditMode = function (visNetwork) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].enableEditMode();
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * Go into addEdge mode.
     * The explaination from addNodeMode applies here as well.
     *
     * @param {string} visNetwork The network name/identifier.
     *
     * @throws {Error} Thrown when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.addEdgeMode = function (visNetwork) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].addEdgeMode();
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * Programatically disable the edit mode.
     * Similar effect to pressing the close icon
     * (small cross in the corner of the toolbar).
     *
     * @param {string} visNetwork The network name/identifier.
     *
     * @throws {Error} Thrown when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.disableEditMode = function (visNetwork) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].disableEditMode();
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * Delete selected.
     * Having edit mode or manipulation enabled is not required.
     *
     * @param {string} visNetwork The network name/identifier.
     *
     * @throws {Error} Thrown when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.deleteSelected = function (visNetwork) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].deleteSelected();
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * Makes a cluster.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisClusterOptions} [options] The joinCondition function is presented with all nodes.
     *
     * @throws {Error} Thrown when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.cluster = function (visNetwork, options) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].cluster(options);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * This method looks at the provided node and makes a cluster of it and all it's connected nodes.
     * The behaviour can be customized by proving the options object.
     * All options of this object are explained below.
     * The joinCondition is only presented with the connected nodes.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisId} nodeId the id of the node
     * @param {VisClusterOptions} [options] the cluster options
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.clusterByConnection = function (visNetwork, nodeId, options) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].clusterByConnection(nodeId, options);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * This method checks all nodes in the network and those with a equal or higher
     * amount of edges than specified with the hubsize qualify.
     * If a hubsize is not defined, the hubsize will be determined as the average
     * value plus two standard deviations.
     * For all qualifying nodes, clusterByConnection is performed on each of them.
     * The options object is described for clusterByConnection and does the same here.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {number} [hubsize] optional hubsize
     * @param {VisClusterOptions} [options] optional cluster options
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.clusterByHubsize = function (visNetwork, hubsize, options) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].clusterByHubsize(hubsize, options);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * This method will cluster all nodes with 1 edge with their respective connected node.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisClusterOptions} [options] optional cluster options
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.clusterOutliers = function (visNetwork, options) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].clusterOutliers(options);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * Nodes can be in clusters.
     * Clusters can also be in clusters.
     * This function returns an array of nodeIds showing where the node is.
     *
     * Example:
     * cluster 'A' contains cluster 'B', cluster 'B' contains cluster 'C',
     * cluster 'C' contains node 'fred'.
     *
     * network.clustering.findNode('fred') will return ['A','B','C','fred'].
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisId} nodeId the node id.
     * @returns {VisId[]} an array of nodeIds showing where the node is
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.findNode = function (visNetwork, nodeId) {
        if (this.networks[visNetwork]) {
            return this.networks[visNetwork].findNode(nodeId);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * Similar to findNode in that it returns all the edge ids that were
     * created from the provided edge during clustering.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisId} baseEdgeId the base edge id
     * @returns {VisId[]} an array of edgeIds
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.getClusteredEdges = function (visNetwork, baseEdgeId) {
        if (this.networks[visNetwork]) {
            return this.networks[visNetwork].getClusteredEdges(baseEdgeId);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * When a clusteredEdgeId is available, this method will return the original
     * baseEdgeId provided in data.edges ie.
     * After clustering the 'SelectEdge' event is fired but provides only the clustered edge.
     * This method can then be used to return the baseEdgeId.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisId} clusteredEdgeId
     * @returns {VisId}
     *
     * @memberOf VisNetworkService
     *
     */
    VisNetworkService.prototype.getBaseEdge = function (visNetwork, clusteredEdgeId) {
        if (this.networks[visNetwork]) {
            return this.networks[visNetwork].getBaseEdge(clusteredEdgeId);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * Visible edges between clustered nodes are not the same edge as the ones provided
     * in data.edges passed on network creation. With each layer of clustering, copies of
     * the edges between clusters are created and the previous edges are hidden,
     * until the cluster is opened. This method takes an edgeId (ie. a base edgeId from data.edges)
     * and applys the options to it and any edges that were created from it while clustering.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisId} startEdgeId
     * @param {VisEdgeOptions} [options]
     *
     * @memberOf VisNetworkService
     *
     */
    VisNetworkService.prototype.updateEdge = function (visNetwork, startEdgeId, options) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].updateEdge(startEdgeId, options);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * Clustered Nodes when created are not contained in the original data.nodes
     * passed on network creation. This method updates the cluster node.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisId} clusteredNodeId
     * @param {VisNodeOptions} options
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.updateClusteredNode = function (visNetwork, clusteredNodeId, options) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].updateClusteredNode(clusteredNodeId, options);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * Returns an array of all nodeIds of the nodes that
     * would be released if you open the cluster.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisId} clusterNodeId the id of the cluster node
     * @returns {VisId[]}
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.getNodesInCluster = function (visNetwork, clusterNodeId) {
        if (this.networks[visNetwork]) {
            return this.networks[visNetwork].getNodesInCluster(clusterNodeId);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * Opens the cluster, releases the contained nodes and edges,
     * removing the cluster node and cluster edges.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisId} nodeId The node id that represents the cluster.
     * @param {VisOpenClusterOptions} [options] Cluster options.
     *
     * @throws {Error} Thrown when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.openCluster = function (visNetwork, nodeId, options) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].openCluster(nodeId, options);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * Returns true if the node whose ID has been supplied is a cluster.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisId} nodeId The associated node id.
     * @returns {boolean} True if the node whose ID has been supplied is a cluster.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.isCluster = function (visNetwork, nodeId) {
        if (this.networks[visNetwork]) {
            return this.networks[visNetwork].isCluster(nodeId);
        }
        return false;
    };
    /**
     * If you like the layout of your network and would like it to start in the same way next time,
     * ask for the seed using this method and put it in the layout.randomSeed option.
     *
     * @param {string} visNetwork The network name/identifier.
     * @returns {number} The seed of the current network or -1 when the network is not defined.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.getSeed = function (visNetwork) {
        if (this.networks[visNetwork]) {
            return this.networks[visNetwork].getSeed();
        }
        return -1;
    };
    /**
     * This function converts canvas coordinates to coordinates on the DOM.
     * Input and output are in the form of {x:Number,y:Number}.
     * The DOM values are relative to the network container.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {Position} position The canvas position.
     * @returns {Position} The DOM position.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.canvasToDOM = function (visNetwork, position) {
        return this.networks[visNetwork].canvasToDOM(position);
    };
    /**
     * This function converts DOM coordinates to coordinates on the canvas.
     * Input and output are in the form of {x:Number,y:Number}.
     * The DOM values are relative to the network container.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {Position} position The DOM position.
     * @returns {Position} The canvas position.
     *
     * @memberOf VisNetworkService
     */
    VisNetworkService.prototype.DOMtoCanvas = function (visNetwork, position) {
        return this.networks[visNetwork].DOMtoCanvas(position);
    };
    return VisNetworkService;
}());
VisNetworkService = __decorate([
    core_1.Injectable()
], VisNetworkService);
exports.VisNetworkService = VisNetworkService;


/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var index_1 = __webpack_require__(304);
/**
 * A service to create, manage and control VisTimeline instances.
 *
 * @export
 * @class VisTimelineService
 */
var VisTimelineService = (function () {
    function VisTimelineService() {
        /**
         * Fired when the current time bar redraws.
         * The rate depends on the zoom level.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisTimelineService
         */
        this.currentTimeTick = new core_1.EventEmitter();
        /**
         * Fired when clicked inside the Timeline.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisTimelineService
         */
        this.click = new core_1.EventEmitter();
        /**
         * Fired when right-clicked inside the Timeline.
         * Note that in order to prevent the context menu from showing up,
         * default behavior of the event must be stopped.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisTimelineService
         */
        this.contextmenu = new core_1.EventEmitter();
        /**
         * Fired when double clicked inside the Timeline.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisTimelineService
         */
        this.doubleClick = new core_1.EventEmitter();
        /**
         * 	Fired after the dragging of a group is finished.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisTimelineService
         */
        this.groupDragged = new core_1.EventEmitter();
        /**
         * Fired once after each graph redraw.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisTimelineService
         */
        this.changed = new core_1.EventEmitter();
        /**
         * Fired repeatedly when the timeline window is being changed.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisTimelineService
         */
        this.rangechange = new core_1.EventEmitter();
        /**
         * Fired once after the timeline window has been changed.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisTimelineService
         */
        this.rangechanged = new core_1.EventEmitter();
        /**
         * Fired after the user selects or deselects items by tapping or holding them.
         * When a use taps an already selected item, the select event is fired again.
         * Not fired when the method setSelectionis executed.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisTimelineService
         */
        this.select = new core_1.EventEmitter();
        /**
         * Fired when the user moves the mouse over an item.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisTimelineService
         */
        this.itemover = new core_1.EventEmitter();
        /**
         * Fired when the user moves the mouse out of an item.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisTimelineService
         */
        this.itemout = new core_1.EventEmitter();
        /**
         * Fired repeatedly when the user is dragging the custom time bar.
         * Only available when the custom time bar is enabled.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisTimelineService
         */
        this.timechange = new core_1.EventEmitter();
        /**
         * Fired once after the user has dragged the custom time bar.
         * Only available when the custom time bar is enabled.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisTimelineService
         */
        this.timechanged = new core_1.EventEmitter();
        this.timelines = {};
    }
    /**
     * Creates a new timeline instance.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {HTMLElement} container The HTML element that contains the timeline view.
     * @param {VisTimelineItems} items The initial timeline items.
     * @param {VisTimelineOptions} [options] The timeline options.
     *
     * @throws {Error} Thrown when timeline already exists.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.createWithItems = function (visTimeline, container, items, options) {
        if (this.timelines[visTimeline]) {
            throw new Error(this.alreadyExistsError(visTimeline));
        }
        this.timelines[visTimeline] = new index_1.VisTimeline(container, items, options);
    };
    /**
     * Creates a new timeline instance.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {HTMLElement} container The HTML element that contains the timeline view.
     * @param {VisTimelineItems} items The initial timeline items.
     * @param {VisTimelineGroups} groups The initial timeline groups.
     * @param {VisTimelineOptions} [options] The timeline options.
     *
     * @throws {Error} Thrown when timeline already exists.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.createWithItemsAndGroups = function (visTimeline, container, items, groups, options) {
        if (this.timelines[visTimeline]) {
            throw new Error(this.alreadyExistsError(visTimeline));
        }
        this.timelines[visTimeline] = new index_1.VisTimeline(container, items, groups, options);
    };
    /**
     * Add new vertical bar representing a custom time that can be dragged by the user.
     * The id is added as CSS class name of the custom time bar,
     * allowing to style multiple time bars differently.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisDate} time Parameter time can be a Date, Number, or String, and is new Date() by default.
     * @param {VisId} [id] Parameter id can be Number or String and is undefined by default.
     * @returns {VisId} The method returns id of the created bar.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.addCustomTime = function (visTimeline, time, id) {
        if (this.timelines[visTimeline]) {
            return this.timelines[visTimeline].addCustomTime(time, id);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Adjust the visible window such that it fits all items.
     * See also function focus(id).
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisTimelineFitOptions} [options] Optional options.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.fit = function (visTimeline, options) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].fit(options);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Adjust the visible window such that the selected item is centered on screen.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisId} id The id of the item.
     * @param {VisTimelineFitOptions} [options] Options options.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.focusOnId = function (visTimeline, id, options) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].focus(id, options);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Adjust the visible window such that the selected items are centered on screen.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisId[]} ids The item ids.
     * @param {VisTimelineFitOptions} [options] Optional options.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.focusOnIds = function (visTimeline, ids, options) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].focus(ids, options);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Get the current time.
     * Only applicable when option showCurrentTime is true.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @returns {Date} The current time.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.getCurrentTime = function (visTimeline) {
        if (this.timelines[visTimeline]) {
            return this.timelines[visTimeline].getCurrentTime();
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Retrieve the custom time from the custom time bar with given id.
     * Id is undefined by default.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisId} [id] The time bar id.
     * @returns {Date} The custom time.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.getCustomTime = function (visTimeline, id) {
        if (this.timelines[visTimeline]) {
            return this.timelines[visTimeline].getCustomTime(id);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Returns an Object with relevant properties from an event.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {Event} event The event.
     * @returns {VisTimelineEventPropertiesResult} Properties of an event
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.getEventProperties = function (visTimeline, event) {
        if (this.timelines[visTimeline]) {
            return this.timelines[visTimeline].getEventProperties(event);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Get the range of all the items as an object containing min: Date and max: Date.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @returns {{ min: Date, max: Date }} The min and max dates.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.getItemRange = function (visTimeline) {
        if (this.timelines[visTimeline]) {
            return this.timelines[visTimeline].getItemRange();
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Get an array with the ids of the currently selected items.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @returns {VisId[]} The currently selected items.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.getSelection = function (visTimeline) {
        if (this.timelines[visTimeline]) {
            return this.timelines[visTimeline].getSelection();
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Get an array with the ids of the currently visible items.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @returns {VisId[]} The currently visible items.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.getVisibleItems = function (visTimeline) {
        if (this.timelines[visTimeline]) {
            return this.timelines[visTimeline].getVisibleItems();
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Get the current visible window.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @returns {{ start: Date, end: Date }} Returns an object with properties start: Date and end: Date.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.getWindow = function (visTimeline) {
        if (this.timelines[visTimeline]) {
            return this.timelines[visTimeline].getWindow();
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * 	Move the window such that given time is centered on screen.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisDate} time Parameter time can be a Date, Number, or String.
     * @param {VisTimelineFitOptions} [options] Optional options.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.moveTo = function (visTimeline, time, options) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].moveTo(time, options);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Force a redraw of the Timeline.
     * The size of all items will be recalculated.
     * Can be useful to manually redraw when option autoResize=false and the window has been resized,
     * or when the items CSS has been changed.
     *
     * @param {string} visTimeline The timeline name/identifier.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.redraw = function (visTimeline) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].redraw();
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Remove vertical bars previously added to the timeline via addCustomTime method.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisId} id Parameter id is the ID of the custom vertical bar returned by addCustomTime method.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.removeCustomTime = function (visTimeline, id) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].removeCustomTime(id);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Set a current time.
     * This can be used for example to ensure that a client's time is synchronized
     * with a shared server time.
     * Only applicable when option showCurrentTime is true.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisDate} time time can be a Date object, numeric timestamp, or ISO date string.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.setCurrentTime = function (visTimeline, time) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].setCurrentTime(time);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * 	Adjust the time of a custom time bar.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisDate} time Parameter time can be a Date object, numeric timestamp, or ISO date string.
     * @param {VisId} [id] Parameter id is the id of the custom time bar, and is undefined by default.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.setCustomTime = function (visTimeline, time, id) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].setCustomTime(time, id);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Adjust the title attribute of a custom time bar.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {string} title Parameter title is the string to be set as title.
     *                       Use empty string to hide the title completely.
     * @param {VisId} [id] Parameter id is the id of the custom time bar, and is undefined by default.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.setCustomTimeTitle = function (visTimeline, title, id) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].setCustomTimeTitle(title, id);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Set both groups and items at once.
     * Both properties are optional.
     * This is a convenience method for individually calling both setItems(items) and setGroups(groups).
     * Both items and groups can be an Array with Objects, a DataSet (offering 2 way data binding),
     * or a DataView (offering 1 way data binding).
     * For each of the groups, the items of the timeline are filtered on the property group,
     * which must correspond with the id of the group.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {{ groups?: VisTimelineGroups; items?: VisTimelineItems }} data The new timline data.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.setData = function (visTimeline, data) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].setData(data);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Set a data set with groups for the Timeline.
     * For each of the groups, the items of the timeline are filtered on the property group,
     * which must correspond with the id of the group.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisTimelineGroups} groups a DataSet (offering 2 way data binding)
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.setGroups = function (visTimeline, groups) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].setGroups(groups);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Set a data set with items for the Timeline.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisTimelineItems} items can be an Array with Objects, a DataSet (offering 2 way data binding)
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.setItems = function (visTimeline, items) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].setItems(items);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Set or update options.
     * It is possible to change any option of the timeline at any time.
     * You can for example switch orientation on the fly.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisTimelineOptions} options The new options of the timeline.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.setOptions = function (visTimeline, options) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].setOptions(options);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Select one item by its id.#
     * The currently selected items will be unselected.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisId} id The id of the item that should be selected.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.setSelectionToId = function (visTimeline, id) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].setSelection(id);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Select multiple items by their id.
     * The currently selected items will be unselected.
     * To unselect all selected items, call `setSelection([])`.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisId[]} ids The ids of the irems that should be selected.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.setSelectionToIds = function (visTimeline, ids) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].setSelection(ids);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Set the current visible window.
     *
     * If the parameter value of start or end is null, the parameter will be left unchanged.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisDate} start The parameters start can be a Date, Number, or String.
     * @param {VisDate} end The parameters end can be a Date, Number, or String.
     * @param {VisTimelineFitOptions} [options] Optional options.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.setWindow = function (visTimeline, start, end, options) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].setWindow(start, end, options);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Destroy the Timeline.
     * The timeline is removed from memory.
     * All DOM elements and event listeners are cleaned up.
     *
     * @param {string} visTimeline The timeline name/identifier.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.destroy = function (visTimeline) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].destroy();
            delete this.timelines[visTimeline];
        }
    };
    /**
     * Activates an event.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisTimelineEvents} eventName The event name.
     * @param {boolean} preventDefault Stops the default behavior of the event.
     * @returns {boolean} Returns true when the event was activated.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.on = function (visTimeline, eventName, preventDefault) {
        if (this.timelines[visTimeline]) {
            var that_1 = this;
            this.timelines[visTimeline].on(eventName, function (params) {
                var emitter = that_1[eventName];
                if (emitter) {
                    emitter.emit(params ? [visTimeline].concat(params) : visTimeline);
                }
                if (preventDefault && params.event) {
                    params.event.preventDefault();
                }
            });
            return true;
        }
        return false;
    };
    /**
     * Deactivates an event.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisTimelineEvents} eventName The event name.
     *
     * @memberOf VisTimelineService
     */
    VisTimelineService.prototype.off = function (visTimeline, eventName) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].off(eventName, undefined);
        }
    };
    VisTimelineService.prototype.doesNotExistError = function (visTimeline) {
        return "Timeline with id " + visTimeline + " does not exist.";
    };
    VisTimelineService.prototype.alreadyExistsError = function (visTimeline) {
        return "Timeline with id " + visTimeline + " already exists.";
    };
    return VisTimelineService;
}());
VisTimelineService = __decorate([
    core_1.Injectable()
], VisTimelineService);
exports.VisTimelineService = VisTimelineService;


/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_vis_components_network__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_vis_components_network___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_vis_components_network__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ExampleNetworkData = (function () {
    function ExampleNetworkData() {
    }
    return ExampleNetworkData;
}());
var SignupPage = (function () {
    function SignupPage(navCtrl, formBuilder, toastCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.visNetwork = 'networkId1';
        this.submitAttempt = false;
        this.lastSlide = true;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            name: 'Test Human',
            email: 'test@example.com',
            password: 'test'
        };
        this.slideOneForm = formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            phone: [''],
            email: ['']
        });
        this.slideTwoForm = formBuilder.group({
            company: [''],
            address: [''],
            postcode: [''],
            city: [''],
            job: ['']
        });
        this.slideThreeForm = formBuilder.group({
            activity: ['']
        });
        this.slideFourForm = formBuilder.group({
            client: ['']
        });
        this.slideFiveForm = formBuilder.group({
            need: ['']
        });
    }
    SignupPage.prototype.next = function () {
        console.log(this.signupSlider._activeIndex);
        if (this.signupSlider._activeIndex == 1) {
        }
        if (this.signupSlider._activeIndex == 4)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages__["f" /* WelcomePage */]);
        else if (this.signupSlider._activeIndex == 3) {
            this.lastSlide = false;
            this.signupSlider.slideNext();
        }
        else {
            this.lastSlide = true;
            this.signupSlider.slideNext();
        }
    };
    SignupPage.prototype.prev = function () {
        console.log(this.signupSlider._activeIndex);
        if (this.signupSlider._activeIndex == 0)
            this.navCtrl.pop();
        else {
            this.lastSlide = true;
            this.signupSlider.slidePrev();
        }
    };
    SignupPage.prototype.save = function () {
        this.submitAttempt = true;
        if (!this.slideOneForm.valid) {
            this.signupSlider.slideTo(0);
            this.lastSlide = true;
        }
        else if (!this.slideTwoForm.valid) {
            this.signupSlider.slideTo(1);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages__["a" /* MainPage */]);
        }
    };
    SignupPage.prototype.addNode = function () {
        var newId = this.visNetworkData.nodes.getLength() + 1;
        this.visNetworkData.nodes.add({ id: newId.toString(), label: 'Node ' + newId });
    };
    SignupPage.prototype.networkInitialized = function () {
    };
    SignupPage.prototype.ngOnInit = function () {
        var nodes = new __WEBPACK_IMPORTED_MODULE_3_ng2_vis_components_network__["VisNodes"]([
            { id: '1', label: 'Node 1' },
            { id: '2', label: 'Node 2' },
            { id: '3', label: 'Node 3' },
            { id: '4', label: 'Node 4' },
            { id: '5', label: 'Node 5', title: 'Title of Node 5' }
        ]);
        var edges = new __WEBPACK_IMPORTED_MODULE_3_ng2_vis_components_network__["VisEdges"]();
        this.visNetworkData = {
            nodes: nodes,
            edges: edges,
        };
        this.visNetworkOptions = {
            nodes: { borderWidth: 0, shape: "circle", color: { background: '#F92C55', highlight: { background: '#F92C55', border: '#F92C55' } }, font: { color: '#fff' } },
            physics: {
                stabilization: false,
                minVelocity: 0.01,
                solver: "repulsion",
                repulsion: {
                    nodeDistance: 40
                }
            }
        };
    };
    SignupPage.prototype.ngOnDestroy = function () {
        this.visNetworkService.off(this.visNetwork, 'click');
    };
    return SignupPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('signupSlider'),
    __metadata("design:type", Object)
], SignupPage.prototype, "signupSlider", void 0);
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Cyprien\Desktop\newApp2\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar color="primary" hideBackButton="true">\n\n    <ion-buttons start>\n\n        <button ion-button icon-left (click)="prev()"><ion-icon name="arrow-back"></ion-icon> Prev</button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      S\'inscrire\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button *ngIf="lastSlide" ion-button icon-right (click)="next()">Next <ion-icon name="arrow-forward"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="splash-bg">\n\n     <ion-slides pager #signupSlider>\n\n  \n\n       <ion-slide>\n\n        <p *ngIf="submitAttempt" style="color: #ea6153;">S\'il-vous-plait, remplissez les champs suivants.</p>\n\n          <form [formGroup]="slideOneForm">\n\n      \n\n              <ion-item>\n\n                  <ion-label floating class="white-text">Nom *</ion-label>\n\n                  <ion-input formControlName="firstName" type="text"></ion-input>\n\n              </ion-item>\n\n      \n\n              <ion-item>\n\n                  <ion-label floating class="white-text">Prénom *</ion-label>\n\n                  <ion-input formControlName="lastName" type="text"></ion-input>\n\n              </ion-item>\n\n      \n\n              <ion-item>\n\n                  <ion-label floating class="white-text">Téléphone *</ion-label>\n\n                  <ion-input formControlName="phone" type="number"></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label floating class="white-text">E-Mail *</ion-label>\n\n                  <ion-input formControlName="email" type="email"></ion-input>\n\n              </ion-item>\n\n          </form>\n\n       </ion-slide>\n\n       <ion-slide>\n\n          <ion-list>\n\n            <form [formGroup]="slideTwoForm">\n\n\n\n              <ion-item>\n\n                  <ion-label floating class="white-text">Société</ion-label>\n\n                  <ion-input formControlName="company" type="text"></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label floating class="white-text">Adresse</ion-label>\n\n                  <ion-textarea formControlName="address"></ion-textarea>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label floating class="white-text">Code Postal</ion-label>\n\n                  <ion-input formControlName="postcode" type="text"></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label floating class="white-text">Ville</ion-label>\n\n                  <ion-input formControlName="postcode" type="text"></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label floating class="white-text">Fonction</ion-label>\n\n                  <ion-input formControlName="job" type="text"></ion-input>\n\n              </ion-item>\n\n            </form>\n\n        </ion-list>\n\n       </ion-slide>\n\n       <ion-slide>\n\n          <ion-list>\n\n            <p>Quels sont vos secteurs d\'activités/métiers ?</p>\n\n            <div class="chart-container">\n\n                <div class="network-canvas" [visNetwork]="visNetwork" [visNetworkData]="visNetworkData" [visNetworkOptions]="visNetworkOptions" (initialized)="networkInitialized()"></div>\n\n            </div>\n\n            <button type="button" class="btn btn-default" (click)="addNode()">Add node</button>\n\n            <form [formGroup]="slideThreeForm">\n\n              <ion-item hidden>\n\n                  <ion-label floating class="white-text">Métier</ion-label>\n\n                  <ion-input formControlName="activity" type="text"></ion-input>\n\n              </ion-item>\n\n            </form>\n\n        </ion-list>\n\n       </ion-slide>\n\n       <ion-slide>\n\n          <ion-list>\n\n            <p>Êtes-vous déjà client ?</p>\n\n            <form [formGroup]="slideFourForm">\n\n              <ion-item hidden>\n\n                  <ion-label floating class="white-text">Client</ion-label>\n\n                  <ion-input formControlName="client" type="text"></ion-input>\n\n              </ion-item>\n\n            </form>\n\n        </ion-list>\n\n       </ion-slide>\n\n\n\n       <ion-slide>\n\n          <ion-list>\n\n              <p>Quels sont vos besoins ?</p>\n\n              <form [formGroup]="slideFiveForm">\n\n                <ion-item hidden>\n\n                    <ion-label floating class="white-text">Besoins</ion-label>\n\n                    <ion-input formControlName="need" type="text"></ion-input>\n\n                </ion-item>\n\n              </form>\n\n          </ion-list>\n\n          <button ion-button full color="primary" (click)="save()">Create Account!</button>\n\n       </ion-slide>\n\n  \n\n     </ion-slides>\n\n    </div>\n\n </ion-content>\n\n \n\n<!-- <ion-content>\n\n  <div class="splash-bg">\n\n      <div class="splash-relative">\n\n        <form (submit)="doSignup()">\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label fixed>Nom *</ion-label>\n\n                  <ion-input type="text" [(ngModel)]="account.name" name="name"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label fixed>Prénom *</ion-label>\n\n                  <ion-input type="text" [(ngModel)]="account.firstName" name="firstName"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label fixed>Phone *</ion-label>\n\n                  <ion-input type="number" [(ngModel)]="account.phone" name="phone"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label fixed>Fax</ion-label>\n\n                  <ion-input type="number" [(ngModel)]="account.fax" name="fax"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label fixed>E-Mail *</ion-label>\n\n                  <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label fixed>Adresse</ion-label>\n\n                  <ion-input type="text" [(ngModel)]="account.address" name="address"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label fixed>Code Postal</ion-label>\n\n                  <ion-input type="number" [(ngModel)]="account.postcode" name="postcode"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label fixed>Ville</ion-label>\n\n                  <ion-input type="text" [(ngModel)]="account.city" name="city"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label fixed>Société</ion-label>\n\n                  <ion-input type="text" [(ngModel)]="account.company" name="company"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label fixed>Fonction</ion-label>\n\n                  <ion-input type="text" [(ngModel)]="account.job" name="job"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n                \n\n          </ion-grid>\n\n          <div padding>\n\n            <button ion-button color="primary" block>{{ \'SIGNUP_BUTTON\' }}</button>\n\n          </div>\n\n        </form>\n\n      </div>\n\n  </div>\n\n</ion-content> -->'/*ion-inline-end:"C:\Users\Cyprien\Desktop\newApp2\src\pages\signup\signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var vis_network_service_1 = __webpack_require__(331);
/**
 * Use this directive with a div container to show network data.
 *
 * @export
 * @class VisNetworkDirective
 * @implements {OnInit}
 * @implements {OnDestroy}
 * @implements {OnChanges}
 */
var VisNetworkDirective = (function () {
    /**
     * Creates an instance of VisNetworkDirective.
     *
     * @param {ElementRef} elementRef The HTML element reference.
     * @param {VisNetworkService} visNetworkService The VisNetworkService.
     *
     * @memberOf VisNetworkDirective
     */
    function VisNetworkDirective(elementRef, visNetworkService) {
        this.elementRef = elementRef;
        this.visNetworkService = visNetworkService;
        /**
         * This event will be raised when the network is initialized.
         * At this point of time the network is successfully registered
         * with the VisNetworkService and you can register to events.
         * The event data is the name of the network as a string.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisNetworkDirective
         */
        this.initialized = new core_1.EventEmitter();
        this.isInitialized = false;
        this.visNetworkContainer = elementRef.nativeElement;
    }
    /**
     * Create the network when at least visNetwork and visNetworkData
     * are defined.
     *
     * @memberOf VisNetworkDirective
     */
    VisNetworkDirective.prototype.ngOnInit = function () {
        if (!this.isInitialized && this.visNetwork && this.visNetworkData) {
            this.createNetwork();
        }
    };
    /**
     * Update the network data or options on reference changes to
     * the visNetworkData or visNetworkOptions properties.
     *
     * @param {{[propName: string]: SimpleChange}} changes
     *
     * @memberOf VisNetworkDirective
     */
    VisNetworkDirective.prototype.ngOnChanges = function (changes) {
        if (!this.isInitialized && this.visNetwork && this.visNetworkData) {
            this.createNetwork();
        }
        for (var propertyName in changes) {
            if (changes.hasOwnProperty(propertyName)) {
                var change = changes[propertyName];
                if (!change.isFirstChange()) {
                    if (propertyName === 'visNetworkData') {
                        this.visNetworkService.setData(this.visNetwork, changes[propertyName].currentValue);
                    }
                    if (propertyName === 'visNetworkOptions') {
                        this.visNetworkService.setOptions(this.visNetwork, changes[propertyName].currentValue);
                    }
                }
            }
        }
    };
    /**
     * Calls the destroy function for this network instance.
     *
     * @memberOf VisNetworkDirective
     */
    VisNetworkDirective.prototype.ngOnDestroy = function () {
        this.isInitialized = false;
        this.visNetworkService.destroy(this.visNetwork);
    };
    VisNetworkDirective.prototype.createNetwork = function () {
        this.visNetworkService.create(this.visNetwork, this.visNetworkContainer, this.visNetworkData, this.visNetworkOptions);
        this.isInitialized = true;
        this.initialized.emit(this.visNetwork);
    };
    return VisNetworkDirective;
}());
__decorate([
    core_1.Input('visNetwork'),
    __metadata("design:type", String)
], VisNetworkDirective.prototype, "visNetwork", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VisNetworkDirective.prototype, "visNetworkData", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VisNetworkDirective.prototype, "visNetworkOptions", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], VisNetworkDirective.prototype, "initialized", void 0);
VisNetworkDirective = __decorate([
    core_1.Directive({
        selector: '[visNetwork]',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, vis_network_service_1.VisNetworkService])
], VisNetworkDirective);
exports.VisNetworkDirective = VisNetworkDirective;


/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var index_1 = __webpack_require__(303);
var index_2 = __webpack_require__(304);
__export(__webpack_require__(607));
var VisModule = (function () {
    function VisModule() {
    }
    return VisModule;
}());
VisModule = __decorate([
    core_1.NgModule({
        declarations: [index_1.VisNetworkDirective, index_2.VisTimelineDirective],
        exports: [index_1.VisNetworkDirective, index_2.VisTimelineDirective],
        providers: [index_1.VisNetworkService, index_2.VisTimelineService],
    })
], VisModule);
exports.VisModule = VisModule;


/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var vis_timeline_service_1 = __webpack_require__(332);
var index_1 = __webpack_require__(304);
/**
 * Use this directive with a div container to show timeline data.
 *
 * @export
 * @class VisTimelineDirective
 * @implements {OnInit}
 * @implements {OnDestroy}
 * @implements {OnChanges}
 */
var VisTimelineDirective = (function () {
    /**
     * Creates an instance of VisTimelineDirective.
     *
     * @param {ElementRef} elementRef The HTML element reference.
     * @param {VisTimelineService} visTimelineService The VisTimelineService.
     *
     * @memberOf VisTimelineDirective
     */
    function VisTimelineDirective(elementRef, visTimelineService) {
        this.elementRef = elementRef;
        this.visTimelineService = visTimelineService;
        /**
         * This event will be raised when the timline is initialized.
         * At this point of time the timeline is successfully registered
         * with the VisNetworkService and you can register to events.
         * The event data is the name of the timeline as a string.
         *
         * @type {EventEmitter<any>}
         * @memberOf VisTimelineDirective
         */
        this.initialized = new core_1.EventEmitter();
        this.isInitialized = false;
        this.visTimelineContainer = elementRef.nativeElement;
    }
    /**
     * Create the timeline when at least visNetwork and visNetworkData
     * are defined.
     *
     * @memberOf VisTimelineDirective
     */
    VisTimelineDirective.prototype.ngOnInit = function () {
        if (!this.isInitialized && this.visTimeline && this.visTimelineItems) {
            this.createTimeline();
        }
    };
    /**
     * Update the timeline data, groups or options on reference changes to
     * the visTimelineItems, visTimelineGroups or visTimelineOptions properties.
     *
     * @param {{[propName: string]: SimpleChange}} changes
     *
     * @memberOf VisTimelineDirective
     */
    VisTimelineDirective.prototype.ngOnChanges = function (changes) {
        if (!this.isInitialized && this.visTimeline && this.visTimelineItems) {
            this.createTimeline();
        }
        for (var propertyName in changes) {
            if (changes.hasOwnProperty(propertyName)) {
                var change = changes[propertyName];
                if (!change.isFirstChange()) {
                    if (propertyName === 'visTimelineItems') {
                        this.visTimelineService.setItems(this.visTimeline, changes[propertyName].currentValue);
                    }
                    if (propertyName === 'visTimelineOptions') {
                        this.visTimelineService.setOptions(this.visTimeline, changes[propertyName].currentValue);
                    }
                    if (propertyName === 'visTimelineGroups') {
                        this.visTimelineService.setGroups(this.visTimeline, changes[propertyName].currentValue);
                    }
                }
            }
        }
    };
    /**
     * Calls the destroy function for this timeline instance.
     *
     *
     * @memberOf VisTimelineDirective
     */
    VisTimelineDirective.prototype.ngOnDestroy = function () {
        this.isInitialized = false;
        this.visTimelineService.destroy(this.visTimeline);
    };
    VisTimelineDirective.prototype.createTimeline = function () {
        if (this.visTimelineGroups) {
            this.visTimelineService.createWithItemsAndGroups(this.visTimeline, this.visTimelineContainer, this.visTimelineItems, this.visTimelineGroups, this.visTimelineOptions);
        }
        else {
            this.visTimelineService.createWithItems(this.visTimeline, this.visTimelineContainer, this.visTimelineItems, this.visTimelineOptions);
        }
        this.isInitialized = true;
        this.initialized.emit(this.visTimeline);
    };
    return VisTimelineDirective;
}());
__decorate([
    core_1.Input('visTimeline'),
    __metadata("design:type", String)
], VisTimelineDirective.prototype, "visTimeline", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", index_1.VisTimelineItems)
], VisTimelineDirective.prototype, "visTimelineItems", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", index_1.VisTimelineGroups)
], VisTimelineDirective.prototype, "visTimelineGroups", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VisTimelineDirective.prototype, "visTimelineOptions", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], VisTimelineDirective.prototype, "initialized", void 0);
VisTimelineDirective = __decorate([
    core_1.Directive({
        selector: '[visTimeline]',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, vis_timeline_service_1.VisTimelineService])
], VisTimelineDirective);
exports.VisTimelineDirective = VisTimelineDirective;


/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(304));
__export(__webpack_require__(303));


/***/ })

});
//# sourceMappingURL=1.js.map