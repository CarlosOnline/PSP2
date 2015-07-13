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
    var ComponentForm = (function (_super) {
        __extends(ComponentForm, _super);
        function ComponentForm(app, eventAggregator, utility) {
            _super.call(this, app, eventAggregator, utility);
            this.sort = null;
            this.itemType = itemViewModel_1.ItemType.ComponentForm;
            this.itemTypeName = itemViewModel_1.ItemType[this.itemType];
        }
        Object.defineProperty(ComponentForm.prototype, "components", {
            get: function () {
                return this.items;
            },
            enumerable: true,
            configurable: true
        });
        ComponentForm.prototype.bind = function (context) {
            _super.prototype.bind.call(this, context);
        };
        Object.defineProperty(ComponentForm.prototype, "components",
            __decorate([
                aurelia_framework_1.computedFrom('items'), 
                __metadata('design:type', Object)
            ], ComponentForm.prototype, "components", Object.getOwnPropertyDescriptor(ComponentForm.prototype, "components")));
        return ComponentForm;
    })(itemViewModel_1.ItemViewModel);
    exports.ComponentForm = ComponentForm;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3BzcC9jb21wb25lbnQtZm9ybS50cyJdLCJuYW1lcyI6WyJDb21wb25lbnRGb3JtIiwiQ29tcG9uZW50Rm9ybS5jb25zdHJ1Y3RvciIsIkNvbXBvbmVudEZvcm0uY29tcG9uZW50cyIsIkNvbXBvbmVudEZvcm0uYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS0E7UUFBbUNBLGlDQUFhQTtRQUk5Q0EsdUJBQVlBLEdBQUdBLEVBQUVBLGVBQWVBLEVBQUVBLE9BQU9BO1lBQ3ZDQyxrQkFBTUEsR0FBR0EsRUFBRUEsZUFBZUEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7WUFIdkNBLFNBQUlBLEdBQXNCQSxJQUFJQSxDQUFDQTtZQUk3QkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0Esd0JBQVFBLENBQUNBLGFBQWFBLENBQUNBO1lBQ3ZDQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSx3QkFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFDOUNBLENBQUNBO1FBRURELHNCQUNJQSxxQ0FBVUE7aUJBRGRBO2dCQUVFRSxNQUFNQSxDQUEwQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7WUFDN0NBLENBQUNBOzs7V0FBQUY7UUFFREEsNEJBQUlBLEdBQUpBLFVBQUtBLE9BQU9BO1lBQ1ZHLGdCQUFLQSxDQUFDQSxJQUFJQSxZQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUN0QkEsQ0FBQ0E7UUFQREgsc0JBQ0lBLHFDQUFVQTs7Z0JBRGJBLGdDQUFZQSxDQUFDQSxPQUFPQSxDQUFDQTs7ZUFDbEJBLHFDQUFVQSxrQ0FBVkEscUNBQVVBLElBRWJBO1FBTUhBLG9CQUFDQTtJQUFEQSxDQW5CQSxBQW1CQ0EsRUFuQmtDLDZCQUFhLEVBbUIvQztJQW5CWSxxQkFBYSxnQkFtQnpCLENBQUEiLCJmaWxlIjoidmlld3MvcHNwL2NvbXBvbmVudC1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcHV0ZWRGcm9tLCBiaW5kYWJsZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgSXRlbVR5cGUsIEl0ZW1WaWV3TW9kZWwgfSBmcm9tICcuL2l0ZW1WaWV3TW9kZWwnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvcnRhYmxlVmlld01vZGVsIH0gZnJvbSAnLi9jb21tb24vc29ydGFibGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEZvcm0gZXh0ZW5kcyBJdGVtVmlld01vZGVsIHtcclxuXHJcbiAgc29ydDogU29ydGFibGVWaWV3TW9kZWwgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhcHAsIGV2ZW50QWdncmVnYXRvciwgdXRpbGl0eSkge1xyXG4gICAgc3VwZXIoYXBwLCBldmVudEFnZ3JlZ2F0b3IsIHV0aWxpdHkpO1xyXG4gICAgdGhpcy5pdGVtVHlwZSA9IEl0ZW1UeXBlLkNvbXBvbmVudEZvcm07XHJcbiAgICB0aGlzLml0ZW1UeXBlTmFtZSA9IEl0ZW1UeXBlW3RoaXMuaXRlbVR5cGVdO1xyXG4gIH1cclxuICBcclxuICBAY29tcHV0ZWRGcm9tKCdpdGVtcycpXHJcbiAgZ2V0IGNvbXBvbmVudHMoKSB7XHJcbiAgICByZXR1cm4gPEFycmF5PENvbXBvbmVudD4+IDxhbnk+IHRoaXMuaXRlbXM7XHJcbiAgfVxyXG5cclxuICBiaW5kKGNvbnRleHQpIHtcclxuICAgIHN1cGVyLmJpbmQoY29udGV4dCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=