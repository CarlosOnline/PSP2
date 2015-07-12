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
    var Component = (function (_super) {
        __extends(Component, _super);
        function Component(app, eventAggregator, utility) {
            _super.call(this, app, eventAggregator, utility);
            this.model = null;
            this.parent = null;
            this.element = null;
            this.coverUp = null;
            this.snippet = null;
            this.itemType = itemViewModel_1.ItemType.Component;
            this.itemTypeName = itemViewModel_1.ItemType[this.itemType];
        }
        Component.prototype.getViewStrategy = function () {
            console.log("component getViewStrategy", "/views/psp/components/" + this.model.url);
            return "/views/psp/components/" + this.model.url;
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', itemViewModel_1.ItemViewModel)
        ], Component.prototype, "model");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', itemViewModel_1.ItemViewModel)
        ], Component.prototype, "parent");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', HTMLElement)
        ], Component.prototype, "element");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', HTMLElement)
        ], Component.prototype, "coverUp");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], Component.prototype, "snippet");
        return Component;
    })(itemViewModel_1.ItemViewModel);
    exports.Component = Component;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3BzcC9jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQ29tcG9uZW50LmdldFZpZXdTdHJhdGVneSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR0E7UUFBK0JBLDZCQUFhQTtRQVExQ0EsbUJBQVlBLEdBQUdBLEVBQUVBLGVBQWVBLEVBQUVBLE9BQU9BO1lBQ3ZDQyxrQkFBTUEsR0FBR0EsRUFBRUEsZUFBZUEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7WUFQN0JBLFVBQUtBLEdBQWtCQSxJQUFJQSxDQUFDQTtZQUM1QkEsV0FBTUEsR0FBa0JBLElBQUlBLENBQUNBO1lBQzdCQSxZQUFPQSxHQUFnQkEsSUFBSUEsQ0FBQ0E7WUFDNUJBLFlBQU9BLEdBQWdCQSxJQUFJQSxDQUFDQTtZQUM1QkEsWUFBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFJdkJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLHdCQUFRQSxDQUFDQSxTQUFTQSxDQUFDQTtZQUNuQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0Esd0JBQVFBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO1FBQzlDQSxDQUFDQTtRQUVERCxtQ0FBZUEsR0FBZkE7WUFDRUUsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsMkJBQTJCQSxFQUFFQSx3QkFBd0JBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ3BGQSxNQUFNQSxDQUFDQSx3QkFBd0JBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBO1FBQ25EQSxDQUFDQTtRQWZERjtZQUFDQSw0QkFBUUE7O1dBQUNBLDRCQUFLQSxFQUF1QkE7UUFDdENBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsNkJBQU1BLEVBQXVCQTtRQUN2Q0E7WUFBQ0EsNEJBQVFBOztXQUFDQSw4QkFBT0EsRUFBcUJBO1FBQ3RDQTtZQUFDQSw0QkFBUUE7O1dBQUNBLDhCQUFPQSxFQUFxQkE7UUFDdENBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsOEJBQU9BLEVBQVFBO1FBWTNCQSxnQkFBQ0E7SUFBREEsQ0FsQkEsQUFrQkNBLEVBbEI4Qiw2QkFBYSxFQWtCM0M7SUFsQlksaUJBQVMsWUFrQnJCLENBQUEiLCJmaWxlIjoidmlld3MvcHNwL2NvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXB1dGVkRnJvbSwgYmluZGFibGUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEl0ZW1UeXBlLCBJdGVtVmlld01vZGVsIH0gZnJvbSAnLi9pdGVtVmlld01vZGVsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBJdGVtVmlld01vZGVsIHtcclxuXHJcbiAgQGJpbmRhYmxlIG1vZGVsOiBJdGVtVmlld01vZGVsID0gbnVsbDtcclxuICBAYmluZGFibGUgcGFyZW50OiBJdGVtVmlld01vZGVsID0gbnVsbDtcclxuICBAYmluZGFibGUgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsO1xyXG4gIEBiaW5kYWJsZSBjb3ZlclVwOiBIVE1MRWxlbWVudCA9IG51bGw7XHJcbiAgQGJpbmRhYmxlIHNuaXBwZXQgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhcHAsIGV2ZW50QWdncmVnYXRvciwgdXRpbGl0eSkge1xyXG4gICAgc3VwZXIoYXBwLCBldmVudEFnZ3JlZ2F0b3IsIHV0aWxpdHkpO1xyXG4gICAgdGhpcy5pdGVtVHlwZSA9IEl0ZW1UeXBlLkNvbXBvbmVudDtcclxuICAgIHRoaXMuaXRlbVR5cGVOYW1lID0gSXRlbVR5cGVbdGhpcy5pdGVtVHlwZV07XHJcbiAgfVxyXG4gIFxyXG4gIGdldFZpZXdTdHJhdGVneSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50IGdldFZpZXdTdHJhdGVneVwiLCBcIi92aWV3cy9wc3AvY29tcG9uZW50cy9cIiArIHRoaXMubW9kZWwudXJsKTtcclxuICAgIHJldHVybiBcIi92aWV3cy9wc3AvY29tcG9uZW50cy9cIiArIHRoaXMubW9kZWwudXJsO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=