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
define(["require", "exports", 'aurelia-framework', './../app', './itemViewModel', './common/utility', './common/sortable'], function (require, exports, aurelia_framework_1, app_1, itemViewModel_1, utility_1, sortable_1) {
    (function (FormType) {
        FormType[FormType["None"] = 0] = "None";
        FormType[FormType["Snippet"] = 1] = "Snippet";
        FormType[FormType["Component"] = 2] = "Component";
    })(exports.FormType || (exports.FormType = {}));
    var FormType = exports.FormType;
    ;
    var FormViewModel = (function (_super) {
        __extends(FormViewModel, _super);
        function FormViewModel(app, eventAggregator, utility) {
            _super.call(this, app, eventAggregator, utility);
            this.formType = FormType.None;
            this.formTypeName = FormType[FormType.None];
            this.sort = null;
            this.sort = new sortable_1.SortableViewModel(this);
        }
        FormViewModel.prototype.bind = function (context) {
            _super.prototype.bind.call(this, context);
            if (!this.formType && context.formType)
                this.formType = context.formType;
        };
        FormViewModel.prototype.addItem = function (item) {
            _super.prototype.addItem.call(this, item);
            item.form = this;
        };
        FormViewModel.inject = [app_1.App, utility_1.Utility];
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], FormViewModel.prototype, "formType");
        return FormViewModel;
    })(itemViewModel_1.ItemViewModel);
    exports.FormViewModel = FormViewModel;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3BzcC9mb3JtVmlld01vZGVsLnRzIl0sIm5hbWVzIjpbIkZvcm1UeXBlIiwiRm9ybVZpZXdNb2RlbCIsIkZvcm1WaWV3TW9kZWwuY29uc3RydWN0b3IiLCJGb3JtVmlld01vZGVsLmJpbmQiLCJGb3JtVmlld01vZGVsLmFkZEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU1BLFdBQVksUUFBUTtRQUNsQkEsdUNBQUlBLENBQUFBO1FBQ0pBLDZDQUFPQSxDQUFBQTtRQUNQQSxpREFBU0EsQ0FBQUE7SUFDWEEsQ0FBQ0EsRUFKVyxnQkFBUSxLQUFSLGdCQUFRLFFBSW5CO0lBSkQsSUFBWSxRQUFRLEdBQVIsZ0JBSVgsQ0FBQTtJQUFBLENBQUM7SUFFRjtRQUFtQ0MsaUNBQWFBO1FBUTlDQSx1QkFBWUEsR0FBR0EsRUFBRUEsZUFBZUEsRUFBRUEsT0FBT0E7WUFDdkNDLGtCQUFNQSxHQUFHQSxFQUFFQSxlQUFlQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtZQUx2Q0EsYUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7WUFDekJBLGlCQUFZQSxHQUFHQSxRQUFRQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUN2Q0EsU0FBSUEsR0FBc0JBLElBQUlBLENBQUNBO1lBSTdCQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSw0QkFBaUJBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQzFDQSxDQUFDQTtRQUVERCw0QkFBSUEsR0FBSkEsVUFBS0EsT0FBT0E7WUFDVkUsZ0JBQUtBLENBQUNBLElBQUlBLFlBQUNBLE9BQU9BLENBQUNBLENBQUNBO1lBRXBCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxJQUFJQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQTtnQkFDckNBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBO1FBQ3JDQSxDQUFDQTtRQUVERiwrQkFBT0EsR0FBUEEsVUFBUUEsSUFBbUJBO1lBQ3pCRyxnQkFBS0EsQ0FBQ0EsT0FBT0EsWUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDcEJBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ25CQSxDQUFDQTtRQXRCTUgsb0JBQU1BLEdBQUdBLENBQUNBLFNBQUdBLEVBQUVBLGlCQUFPQSxDQUFDQSxDQUFDQTtRQUUvQkE7WUFBQ0EsNEJBQVFBOztXQUNUQSxtQ0FBUUEsRUFBaUJBO1FBb0IzQkEsb0JBQUNBO0lBQURBLENBeEJBLEFBd0JDQSxFQXhCa0MsNkJBQWEsRUF3Qi9DO0lBeEJZLHFCQUFhLGdCQXdCekIsQ0FBQSIsImZpbGUiOiJ2aWV3cy9wc3AvZm9ybVZpZXdNb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXB1dGVkRnJvbSwgYmluZGFibGUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vLi4vYXBwJztcclxuaW1wb3J0IHsgSXRlbVZpZXdNb2RlbCB9IGZyb20gJy4vaXRlbVZpZXdNb2RlbCc7XHJcbmltcG9ydCB7IFV0aWxpdHkgfSBmcm9tICcuL2NvbW1vbi91dGlsaXR5JztcclxuaW1wb3J0IHsgU29ydGFibGVWaWV3TW9kZWwgfSBmcm9tICcuL2NvbW1vbi9zb3J0YWJsZSc7XHJcblxyXG5leHBvcnQgZW51bSBGb3JtVHlwZSB7XHJcbiAgTm9uZSxcclxuICBTbmlwcGV0LFxyXG4gIENvbXBvbmVudCxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtVmlld01vZGVsIGV4dGVuZHMgSXRlbVZpZXdNb2RlbCB7XHJcbiAgc3RhdGljIGluamVjdCA9IFtBcHAsIFV0aWxpdHldO1xyXG5cclxuICBAYmluZGFibGVcclxuICBmb3JtVHlwZSA9IEZvcm1UeXBlLk5vbmU7XHJcbiAgZm9ybVR5cGVOYW1lID0gRm9ybVR5cGVbRm9ybVR5cGUuTm9uZV07XHJcbiAgc29ydDogU29ydGFibGVWaWV3TW9kZWwgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhcHAsIGV2ZW50QWdncmVnYXRvciwgdXRpbGl0eSkge1xyXG4gICAgc3VwZXIoYXBwLCBldmVudEFnZ3JlZ2F0b3IsIHV0aWxpdHkpO1xyXG4gICAgdGhpcy5zb3J0ID0gbmV3IFNvcnRhYmxlVmlld01vZGVsKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgYmluZChjb250ZXh0KSB7XHJcbiAgICBzdXBlci5iaW5kKGNvbnRleHQpO1xyXG5cclxuICAgIGlmICghdGhpcy5mb3JtVHlwZSAmJiBjb250ZXh0LmZvcm1UeXBlKVxyXG4gICAgICB0aGlzLmZvcm1UeXBlID0gY29udGV4dC5mb3JtVHlwZTtcclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oaXRlbTogSXRlbVZpZXdNb2RlbCkge1xyXG4gICAgc3VwZXIuYWRkSXRlbShpdGVtKTtcclxuICAgIGl0ZW0uZm9ybSA9IHRoaXM7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==