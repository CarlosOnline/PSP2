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
    var Snippet = (function (_super) {
        __extends(Snippet, _super);
        function Snippet(app, eventAggregator, utility) {
            _super.call(this, app, eventAggregator, utility);
            this.model = null;
            this.parent = null;
            this.element = null;
            this.coverUp = null;
            this.itemType = itemViewModel_1.ItemType.Snippet;
            this.itemTypeName = itemViewModel_1.ItemType[this.itemType];
        }
        Object.defineProperty(Snippet.prototype, "forms", {
            get: function () {
                return this.items;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', itemViewModel_1.ItemViewModel)
        ], Snippet.prototype, "model");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', itemViewModel_1.ItemViewModel)
        ], Snippet.prototype, "parent");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', HTMLElement)
        ], Snippet.prototype, "element");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', HTMLElement)
        ], Snippet.prototype, "coverUp");
        Object.defineProperty(Snippet.prototype, "forms",
            __decorate([
                aurelia_framework_1.computedFrom('items'), 
                __metadata('design:type', Object)
            ], Snippet.prototype, "forms", Object.getOwnPropertyDescriptor(Snippet.prototype, "forms")));
        return Snippet;
    })(itemViewModel_1.ItemViewModel);
    exports.Snippet = Snippet;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3BzcC9zbmlwcGV0LnRzIl0sIm5hbWVzIjpbIlNuaXBwZXQiLCJTbmlwcGV0LmNvbnN0cnVjdG9yIiwiU25pcHBldC5mb3JtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSUE7UUFBNkJBLDJCQUFhQTtRQU94Q0EsaUJBQVlBLEdBQUdBLEVBQUVBLGVBQWVBLEVBQUVBLE9BQU9BO1lBQ3ZDQyxrQkFBTUEsR0FBR0EsRUFBRUEsZUFBZUEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7WUFON0JBLFVBQUtBLEdBQWlCQSxJQUFJQSxDQUFDQTtZQUMzQkEsV0FBTUEsR0FBa0JBLElBQUlBLENBQUNBO1lBQzdCQSxZQUFPQSxHQUFnQkEsSUFBSUEsQ0FBQ0E7WUFDNUJBLFlBQU9BLEdBQWdCQSxJQUFJQSxDQUFDQTtZQUlwQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0Esd0JBQVFBLENBQUNBLE9BQU9BLENBQUNBO1lBQ2pDQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSx3QkFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFDOUNBLENBQUNBO1FBRURELHNCQUNJQSwwQkFBS0E7aUJBRFRBO2dCQUVFRSxNQUFNQSxDQUE4QkEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7WUFDakRBLENBQUNBOzs7V0FBQUY7UUFkREE7WUFBQ0EsNEJBQVFBOztXQUFDQSwwQkFBS0EsRUFBc0JBO1FBQ3JDQTtZQUFDQSw0QkFBUUE7O1dBQUNBLDJCQUFNQSxFQUF1QkE7UUFDdkNBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsNEJBQU9BLEVBQXFCQTtRQUN0Q0E7WUFBQ0EsNEJBQVFBOztXQUFDQSw0QkFBT0EsRUFBcUJBO1FBUXRDQSxzQkFDSUEsMEJBQUtBOztnQkFEUkEsZ0NBQVlBLENBQUNBLE9BQU9BLENBQUNBOztlQUNsQkEsMEJBQUtBLGtDQUFMQSwwQkFBS0EsSUFFUkE7UUFDSEEsY0FBQ0E7SUFBREEsQ0FqQkEsQUFpQkNBLEVBakI0Qiw2QkFBYSxFQWlCekM7SUFqQlksZUFBTyxVQWlCbkIsQ0FBQSIsImZpbGUiOiJ2aWV3cy9wc3Avc25pcHBldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXB1dGVkRnJvbSwgYmluZGFibGUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEl0ZW1UeXBlLCBJdGVtVmlld01vZGVsIH0gZnJvbSAnLi9pdGVtVmlld01vZGVsJztcclxuaW1wb3J0IHsgQ29tcG9uZW50Rm9ybSB9IGZyb20gJy4vY29tcG9uZW50LWZvcm0nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNuaXBwZXQgZXh0ZW5kcyBJdGVtVmlld01vZGVsIHtcclxuXHJcbiAgQGJpbmRhYmxlIG1vZGVsOkl0ZW1WaWV3TW9kZWwgPSBudWxsO1xyXG4gIEBiaW5kYWJsZSBwYXJlbnQ6IEl0ZW1WaWV3TW9kZWwgPSBudWxsO1xyXG4gIEBiaW5kYWJsZSBlbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGw7XHJcbiAgQGJpbmRhYmxlIGNvdmVyVXA6IEhUTUxFbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoYXBwLCBldmVudEFnZ3JlZ2F0b3IsIHV0aWxpdHkpIHtcclxuICAgIHN1cGVyKGFwcCwgZXZlbnRBZ2dyZWdhdG9yLCB1dGlsaXR5KTtcclxuICAgIHRoaXMuaXRlbVR5cGUgPSBJdGVtVHlwZS5TbmlwcGV0O1xyXG4gICAgdGhpcy5pdGVtVHlwZU5hbWUgPSBJdGVtVHlwZVt0aGlzLml0ZW1UeXBlXTtcclxuICB9XHJcblxyXG4gIEBjb21wdXRlZEZyb20oJ2l0ZW1zJylcclxuICBnZXQgZm9ybXMoKSB7XHJcbiAgICByZXR1cm4gPEFycmF5PENvbXBvbmVudEZvcm0+PiA8YW55PiB0aGlzLml0ZW1zO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=