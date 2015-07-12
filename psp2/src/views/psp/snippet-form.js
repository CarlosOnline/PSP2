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
    var SnippetForm = (function (_super) {
        __extends(SnippetForm, _super);
        function SnippetForm(app, eventAggregator, utility) {
            var _this = this;
            _super.call(this, app, eventAggregator, utility);
            this.connectWith = null;
            this.url = null;
            this.model = null;
            this.parent = null;
            this.element = null;
            this.coverUp = null;
            this.dumpElements = function (label) {
                if (_this.targetMode) {
                    var children = $(_this.element).children();
                    console.log(label);
                    _.each(children, function (child) {
                        console.log(child.id);
                    });
                }
            };
            this.dumpSnippets = function (label) {
                if (_this.targetMode) {
                    console.log(label);
                    _.each(_this.items, function (child) {
                        console.log(child.id);
                    });
                }
            };
            this.itemType = itemViewModel_1.ItemType.SnippetForm;
            this.itemTypeName = itemViewModel_1.ItemType[this.itemType];
        }
        Object.defineProperty(SnippetForm.prototype, "snippets", {
            get: function () {
                return this.items;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', itemViewModel_1.ItemViewModel)
        ], SnippetForm.prototype, "model");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', itemViewModel_1.ItemViewModel)
        ], SnippetForm.prototype, "parent");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', HTMLElement)
        ], SnippetForm.prototype, "element");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', HTMLElement)
        ], SnippetForm.prototype, "coverUp");
        Object.defineProperty(SnippetForm.prototype, "snippets",
            __decorate([
                aurelia_framework_1.computedFrom('items'), 
                __metadata('design:type', Object)
            ], SnippetForm.prototype, "snippets", Object.getOwnPropertyDescriptor(SnippetForm.prototype, "snippets")));
        return SnippetForm;
    })(itemViewModel_1.ItemViewModel);
    exports.SnippetForm = SnippetForm;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3BzcC9zbmlwcGV0LWZvcm0udHMiXSwibmFtZXMiOlsiU25pcHBldEZvcm0iLCJTbmlwcGV0Rm9ybS5jb25zdHJ1Y3RvciIsIlNuaXBwZXRGb3JtLnNuaXBwZXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLQTtRQUFpQ0EsK0JBQWFBO1FBUzVDQSxxQkFBWUEsR0FBR0EsRUFBRUEsZUFBZUEsRUFBRUEsT0FBT0E7WUFUM0NDLGlCQXNDQ0E7WUE1QkdBLGtCQUFNQSxHQUFHQSxFQUFFQSxlQUFlQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtZQVJ2Q0EsZ0JBQVdBLEdBQVdBLElBQUlBLENBQUNBO1lBQzNCQSxRQUFHQSxHQUFXQSxJQUFJQSxDQUFDQTtZQUNUQSxVQUFLQSxHQUFrQkEsSUFBSUEsQ0FBQ0E7WUFDNUJBLFdBQU1BLEdBQWtCQSxJQUFJQSxDQUFDQTtZQUM3QkEsWUFBT0EsR0FBZ0JBLElBQUlBLENBQUNBO1lBQzVCQSxZQUFPQSxHQUFnQkEsSUFBSUEsQ0FBQ0E7WUFhdENBLGlCQUFZQSxHQUFHQSxVQUFDQSxLQUFhQTtnQkFDM0JBLEVBQUVBLENBQUNBLENBQUNBLEtBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO29CQUNwQkEsSUFBSUEsUUFBUUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7b0JBQzFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDbkJBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLFVBQVVBLEtBQUtBO3dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDeEIsQ0FBQyxDQUFDQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7WUFDSEEsQ0FBQ0EsQ0FBQ0E7WUFFRkEsaUJBQVlBLEdBQUdBLFVBQUNBLEtBQWFBO2dCQUMzQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3BCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDbkJBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUlBLENBQUNBLEtBQUtBLEVBQUVBLFVBQVVBLEtBQUtBO3dCQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDeEIsQ0FBQyxDQUFDQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7WUFDSEEsQ0FBQ0EsQ0FBQ0E7WUExQkFBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLHdCQUFRQSxDQUFDQSxXQUFXQSxDQUFDQTtZQUNyQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0Esd0JBQVFBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO1FBQzlDQSxDQUFDQTtRQUVERCxzQkFDSUEsaUNBQVFBO2lCQURaQTtnQkFFRUUsTUFBTUEsQ0FBd0JBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO1lBQzNDQSxDQUFDQTs7O1dBQUFGO1FBZERBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsOEJBQUtBLEVBQXVCQTtRQUN0Q0E7WUFBQ0EsNEJBQVFBOztXQUFDQSwrQkFBTUEsRUFBdUJBO1FBQ3ZDQTtZQUFDQSw0QkFBUUE7O1dBQUNBLGdDQUFPQSxFQUFxQkE7UUFDdENBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsZ0NBQU9BLEVBQXFCQTtRQVF0Q0Esc0JBQ0lBLGlDQUFRQTs7Z0JBRFhBLGdDQUFZQSxDQUFDQSxPQUFPQSxDQUFDQTs7ZUFDbEJBLGlDQUFRQSxrQ0FBUkEsaUNBQVFBLElBRVhBO1FBb0JIQSxrQkFBQ0E7SUFBREEsQ0F0Q0EsQUFzQ0NBLEVBdENnQyw2QkFBYSxFQXNDN0M7SUF0Q1ksbUJBQVcsY0FzQ3ZCLENBQUEiLCJmaWxlIjoidmlld3MvcHNwL3NuaXBwZXQtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXB1dGVkRnJvbSwgYmluZGFibGUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IFV0aWxpdHkgfSBmcm9tICcuL2NvbW1vbi91dGlsaXR5JztcclxuaW1wb3J0IHsgSXRlbVR5cGUsIEl0ZW1WaWV3TW9kZWwgfSBmcm9tICcuL2l0ZW1WaWV3TW9kZWwnO1xyXG5pbXBvcnQgeyBTbmlwcGV0IH0gZnJvbSAnLi9zbmlwcGV0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTbmlwcGV0Rm9ybSBleHRlbmRzIEl0ZW1WaWV3TW9kZWwge1xyXG5cclxuICBjb25uZWN0V2l0aDogc3RyaW5nID0gbnVsbDtcclxuICB1cmw6IHN0cmluZyA9IG51bGw7XHJcbiAgQGJpbmRhYmxlIG1vZGVsOiBJdGVtVmlld01vZGVsID0gbnVsbDtcclxuICBAYmluZGFibGUgcGFyZW50OiBJdGVtVmlld01vZGVsID0gbnVsbDtcclxuICBAYmluZGFibGUgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsO1xyXG4gIEBiaW5kYWJsZSBjb3ZlclVwOiBIVE1MRWxlbWVudCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFwcCwgZXZlbnRBZ2dyZWdhdG9yLCB1dGlsaXR5KSB7XHJcbiAgICBzdXBlcihhcHAsIGV2ZW50QWdncmVnYXRvciwgdXRpbGl0eSk7XHJcbiAgICB0aGlzLml0ZW1UeXBlID0gSXRlbVR5cGUuU25pcHBldEZvcm07XHJcbiAgICB0aGlzLml0ZW1UeXBlTmFtZSA9IEl0ZW1UeXBlW3RoaXMuaXRlbVR5cGVdO1xyXG4gIH1cclxuXHJcbiAgQGNvbXB1dGVkRnJvbSgnaXRlbXMnKVxyXG4gIGdldCBzbmlwcGV0cygpIHtcclxuICAgIHJldHVybiA8QXJyYXk8U25pcHBldD4+IDxhbnk+IHRoaXMuaXRlbXM7XHJcbiAgfVxyXG5cclxuICBkdW1wRWxlbWVudHMgPSAobGFiZWw6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKHRoaXMudGFyZ2V0TW9kZSkge1xyXG4gICAgICB2YXIgY2hpbGRyZW4gPSAkKHRoaXMuZWxlbWVudCkuY2hpbGRyZW4oKTtcclxuICAgICAgY29uc29sZS5sb2cobGFiZWwpO1xyXG4gICAgICBfLmVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoaWxkLmlkKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZHVtcFNuaXBwZXRzID0gKGxhYmVsOiBzdHJpbmcpID0+IHtcclxuICAgIGlmICh0aGlzLnRhcmdldE1vZGUpIHtcclxuICAgICAgY29uc29sZS5sb2cobGFiZWwpO1xyXG4gICAgICBfLmVhY2godGhpcy5pdGVtcywgZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2hpbGQuaWQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==