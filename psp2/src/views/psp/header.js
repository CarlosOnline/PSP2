var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', './itemViewModel'], function (require, exports, aurelia_framework_1, itemViewModel_1) {
    var Header = (function (_super) {
        __extends(Header, _super);
        function Header(app, eventAggregator, utility) {
            _super.call(this, app, eventAggregator, utility);
            this.model = null;
            this.parent = null;
            this.element = null;
            this.coverUp = null;
            this.itemType = itemViewModel_1.ItemType.Header;
            this.itemTypeName = itemViewModel_1.ItemType[this.itemType];
        }
        Header.prototype.activate = function () {
            console.log("header activate");
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', itemViewModel_1.ItemViewModel)
        ], Header.prototype, "model");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', itemViewModel_1.ItemViewModel)
        ], Header.prototype, "parent");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', HTMLElement)
        ], Header.prototype, "element");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', HTMLElement)
        ], Header.prototype, "coverUp");
        return Header;
    })(itemViewModel_1.ItemViewModel);
    exports.Header = Header;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3BzcC9oZWFkZXIudHMiXSwibmFtZXMiOlsiSGVhZGVyIiwiSGVhZGVyLmNvbnN0cnVjdG9yIiwiSGVhZGVyLmFjdGl2YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJQTtRQUE0QkEsMEJBQWFBO1FBT3JDQSxnQkFBWUEsR0FBR0EsRUFBRUEsZUFBZUEsRUFBRUEsT0FBT0E7WUFDckNDLGtCQUFNQSxHQUFHQSxFQUFFQSxlQUFlQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtZQU4vQkEsVUFBS0EsR0FBa0JBLElBQUlBLENBQUNBO1lBQzVCQSxXQUFNQSxHQUFrQkEsSUFBSUEsQ0FBQ0E7WUFDN0JBLFlBQU9BLEdBQWdCQSxJQUFJQSxDQUFDQTtZQUM1QkEsWUFBT0EsR0FBZ0JBLElBQUlBLENBQUNBO1lBSWxDQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSx3QkFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7WUFDaENBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLHdCQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtRQUNoREEsQ0FBQ0E7UUFFREQseUJBQVFBLEdBQVJBO1lBQ0lFLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0E7UUFDbkNBLENBQUNBO1FBYkRGO1lBQUNBLDRCQUFRQTs7V0FBQ0EseUJBQUtBLEVBQXVCQTtRQUN0Q0E7WUFBQ0EsNEJBQVFBOztXQUFDQSwwQkFBTUEsRUFBdUJBO1FBQ3ZDQTtZQUFDQSw0QkFBUUE7O1dBQUNBLDJCQUFPQSxFQUFxQkE7UUFDdENBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsMkJBQU9BLEVBQXFCQTtRQVcxQ0EsYUFBQ0E7SUFBREEsQ0FoQkEsQUFnQkNBLEVBaEIyQiw2QkFBYSxFQWdCeEM7SUFoQlksY0FBTSxTQWdCbEIsQ0FBQSIsImZpbGUiOiJ2aWV3cy9wc3AvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcHV0ZWRGcm9tLCBiaW5kYWJsZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgSXRlbVR5cGUsIEl0ZW1WaWV3TW9kZWwgfSBmcm9tICcuL2l0ZW1WaWV3TW9kZWwnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRGb3JtIH0gZnJvbSAnLi9jb21wb25lbnQtZm9ybSc7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgSXRlbVZpZXdNb2RlbCB7XHJcblxyXG4gICAgQGJpbmRhYmxlIG1vZGVsOiBJdGVtVmlld01vZGVsID0gbnVsbDtcclxuICAgIEBiaW5kYWJsZSBwYXJlbnQ6IEl0ZW1WaWV3TW9kZWwgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbDtcclxuICAgIEBiaW5kYWJsZSBjb3ZlclVwOiBIVE1MRWxlbWVudCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXBwLCBldmVudEFnZ3JlZ2F0b3IsIHV0aWxpdHkpIHtcclxuICAgICAgICBzdXBlcihhcHAsIGV2ZW50QWdncmVnYXRvciwgdXRpbGl0eSk7XHJcbiAgICAgICAgdGhpcy5pdGVtVHlwZSA9IEl0ZW1UeXBlLkhlYWRlcjtcclxuICAgICAgICB0aGlzLml0ZW1UeXBlTmFtZSA9IEl0ZW1UeXBlW3RoaXMuaXRlbVR5cGVdO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVhZGVyIGFjdGl2YXRlXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==