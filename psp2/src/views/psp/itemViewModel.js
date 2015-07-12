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
define(["require", "exports", 'aurelia-framework', 'aurelia-event-aggregator', './../app', './common/utility'], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, app_1, utility_1) {
    (function (ItemType) {
        ItemType[ItemType["None"] = 0] = "None";
        ItemType[ItemType["TemplateEditor"] = 1] = "TemplateEditor";
        ItemType[ItemType["SnippetForm"] = 2] = "SnippetForm";
        ItemType[ItemType["Snippet"] = 3] = "Snippet";
        ItemType[ItemType["ComponentForm"] = 4] = "ComponentForm";
        ItemType[ItemType["Component"] = 5] = "Component";
        ItemType[ItemType["Header"] = 6] = "Header";
        ItemType[ItemType["Tabs"] = 7] = "Tabs";
        ItemType[ItemType["TabItem"] = 8] = "TabItem";
    })(exports.ItemType || (exports.ItemType = {}));
    var ItemType = exports.ItemType;
    ;
    var ItemViewModel = (function () {
        function ItemViewModel(app, eventAggregator, utility) {
            this.itemType = ItemType.None;
            this.itemTypeName = ItemType[ItemType.None];
            this.app = null;
            this.eventAggregator = null;
            this.editor = null;
            this.parent = null;
            this.form = null;
            this.context = null;
            this.index = 0;
            this.utility = null;
            this.baseUrl = null;
            this.model = null;
            this.element = null;
            this.coverUp = null;
            this.items = [];
            this.url = null;
            this.targetMode = false;
            this.readOnly = false;
            //console.log("itemViewModel", (<any>this).__proto__);
            this.app = app;
            this.editor = this.app.editor;
            this.eventAggregator = eventAggregator;
            //this.editor = editor;
            this.utility = utility;
        }
        ItemViewModel.prototype.bind = function (context) {
            //console.log((<any>this).__proto__, "bind", context);
            if (this.itemType == ItemType.SnippetForm)
                console.log(this.__proto__, "bind", context);
            this.editor = this.app.editor || this.editor;
            this.context = context;
            if (!this.parent)
                this.parent = this.context.$parent;
            if (!this.parent)
                this.parent = this.editor || null;
            this.index = this.context.$index;
            if (!this.parent && this.itemType != ItemType.TemplateEditor)
                console.error(this.itemTypeName, "missing parent", this);
            // TODO: Figure out @bindable not working
            if (!this.model && this.context.item)
                this.model = this.context.item;
            if (!this.model && this.itemType != ItemType.TemplateEditor)
                console.error(this.itemTypeName, "missing bound model", this.__proto__, context);
            if (!this.element && this.context.element)
                this.element = this.context.element;
            if (this.element) {
                $(this.element).data("itemViewModel", this);
            }
            if (!this.coverUp && this.context.coverUp)
                this.coverUp = this.context.coverUp;
            if (this.coverUp) {
                $(this.coverUp).data("itemViewModel", this);
            }
            if (this.model && !this.model.hidden) {
                if (this.model.app) {
                    console.error(this.itemTypeName, "bind non model", this.model, this.__proto__);
                }
                //console.log("itemViewModel", "bind", (<any>this).__proto__, this.model);
                if (this.parent) {
                    var self = this;
                    this.utility.loadReference(this.model).then(function (model) {
                        Object.assign(self.model, model);
                        //console.log((<any>this).__proto__, "bind-load", model.title, model, this.model);
                        if (self.parent && self.parent.items) {
                            self.parent.addItem(self);
                        }
                    });
                }
            }
            this.eventAggregator.publish(this.itemTypeName + "-bind", this);
        };
        Object.defineProperty(ItemViewModel.prototype, "fields", {
            get: function () {
                return this.model.fields;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemViewModel.prototype, "id", {
            get: function () {
                return this.element ? this.element.id : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemViewModel.prototype, "debugMode", {
            get: function () {
                return this.app && this.app.debugMode;
            },
            enumerable: true,
            configurable: true
        });
        ItemViewModel.prototype.addItem = function (item) {
            var found = this.items.find(function (cur) { return cur.index == item.index; });
            if (found) {
                var idx = this.items.indexOf(found);
                if (idx != -1)
                    this.items.splice(idx, 1);
            }
            this.items.push(item);
            this.items.sort(function (left, right) {
                if (left.index == right.index)
                    return 0;
                return (left.index < right.index) ? -1 : 1;
            });
        };
        ItemViewModel.inject = [app_1.App, aurelia_event_aggregator_1.EventAggregator, utility_1.Utility];
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', ItemViewModel)
        ], ItemViewModel.prototype, "parent");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], ItemViewModel.prototype, "model");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', HTMLElement)
        ], ItemViewModel.prototype, "element");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', HTMLElement)
        ], ItemViewModel.prototype, "coverUp");
        Object.defineProperty(ItemViewModel.prototype, "fields",
            __decorate([
                aurelia_framework_1.computedFrom('model'), 
                __metadata('design:type', Object)
            ], ItemViewModel.prototype, "fields", Object.getOwnPropertyDescriptor(ItemViewModel.prototype, "fields")));
        Object.defineProperty(ItemViewModel.prototype, "id",
            __decorate([
                aurelia_framework_1.computedFrom('element'), 
                __metadata('design:type', Object)
            ], ItemViewModel.prototype, "id", Object.getOwnPropertyDescriptor(ItemViewModel.prototype, "id")));
        return ItemViewModel;
    })();
    exports.ItemViewModel = ItemViewModel;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3BzcC9pdGVtVmlld01vZGVsLnRzIl0sIm5hbWVzIjpbIkl0ZW1UeXBlIiwiSXRlbVZpZXdNb2RlbCIsIkl0ZW1WaWV3TW9kZWwuY29uc3RydWN0b3IiLCJJdGVtVmlld01vZGVsLmJpbmQiLCJJdGVtVmlld01vZGVsLmZpZWxkcyIsIkl0ZW1WaWV3TW9kZWwuaWQiLCJJdGVtVmlld01vZGVsLmRlYnVnTW9kZSIsIkl0ZW1WaWV3TW9kZWwuYWRkSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBT0EsV0FBWSxRQUFRO1FBQ2xCQSx1Q0FBSUEsQ0FBQUE7UUFDSkEsMkRBQWNBLENBQUFBO1FBQ2RBLHFEQUFXQSxDQUFBQTtRQUNYQSw2Q0FBT0EsQ0FBQUE7UUFDUEEseURBQWFBLENBQUFBO1FBQ2JBLGlEQUFTQSxDQUFBQTtRQUNUQSwyQ0FBTUEsQ0FBQUE7UUFDTkEsdUNBQUlBLENBQUFBO1FBQ0pBLDZDQUFPQSxDQUFBQTtJQUNUQSxDQUFDQSxFQVZXLGdCQUFRLEtBQVIsZ0JBQVEsUUFVbkI7SUFWRCxJQUFZLFFBQVEsR0FBUixnQkFVWCxDQUFBO0lBQUEsQ0FBQztJQUVGO1FBZ0NFQyx1QkFBWUEsR0FBUUEsRUFBRUEsZUFBZ0NBLEVBQUVBLE9BQWdCQTtZQTdCeEVDLGFBQVFBLEdBQUdBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBO1lBQ3pCQSxpQkFBWUEsR0FBR0EsUUFBUUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDdkNBLFFBQUdBLEdBQVFBLElBQUlBLENBQUNBO1lBQ2hCQSxvQkFBZUEsR0FBb0JBLElBQUlBLENBQUNBO1lBQ3hDQSxXQUFNQSxHQUFlQSxJQUFJQSxDQUFDQTtZQUNoQkEsV0FBTUEsR0FBa0JBLElBQUlBLENBQUNBO1lBQ3ZDQSxTQUFJQSxHQUFrQkEsSUFBSUEsQ0FBQ0E7WUFDM0JBLFlBQU9BLEdBQUdBLElBQUlBLENBQUNBO1lBQ2ZBLFVBQUtBLEdBQUdBLENBQUNBLENBQUNB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LElBQUlBLENBQUNBLE9BQU9BLElBQUlBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBO2dCQUN4Q0EsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7WUFFdENBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO2dCQUNqQkEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDOUNBLENBQUNBO1lBRURBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLElBQUlBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBO2dCQUN4Q0EsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7WUFFdENBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO2dCQUNqQkEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDOUNBLENBQUNBO1lBRURBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO2dCQUNyQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ25CQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxnQkFBZ0JBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLEVBQVFBLElBQUtBLENBQUNB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QUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUM3Q0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDTEEsQ0FBQ0E7UUFoSU1OLG9CQUFNQSxHQUFHQSxDQUFDQSxTQUFHQSxFQUFFQSwwQ0FBZUEsRUFBRUEsaUJBQU9BLENBQUNBLENBQUNBO1FBT2hEQTtZQUFDQSw0QkFBUUE7O1dBQUNBLGlDQUFNQSxFQUF1QkE7UUFnQnZDQTtZQUFDQSw0QkFBUUE7O1dBQUNBLGdDQUFLQSxFQUFRQTtRQUN2QkE7WUFBQ0EsNEJBQVFBOztXQUFDQSxrQ0FBT0EsRUFBcUJBO1FBQ3RDQTtZQUFDQSw0QkFBUUE7O1dBQUNBLGtDQUFPQSxFQUFxQkE7UUEyRXRDQSxzQkFDSUEsaUNBQU1BOztnQkFEVEEsZ0NBQVlBLENBQUNBLE9BQU9BLENBQUNBOztlQUNsQkEsaUNBQU1BLGtDQUFOQSxpQ0FBTUEsSUFFVEE7UUFFREEsc0JBQ0lBLDZCQUFFQTs7Z0JBRExBLGdDQUFZQSxDQUFDQSxTQUFTQSxDQUFDQTs7ZUFDcEJBLDZCQUFFQSxrQ0FBRkEsNkJBQUVBLElBRUxBO1FBc0JIQSxvQkFBQ0E7SUFBREEsQ0FuSUEsQUFtSUNBLElBQUE7SUFuSVkscUJBQWEsZ0JBbUl6QixDQUFBIiwiZmlsZSI6InZpZXdzL3BzcC9pdGVtVmlld01vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcHV0ZWRGcm9tLCBiaW5kYWJsZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi8uLi9hcHAnO1xyXG5pbXBvcnQgeyBGb3JtRWRpdG9yIH0gZnJvbSAnLi9mb3JtRWRpdG9yJztcclxuaW1wb3J0IHsgRm9ybVZpZXdNb2RlbCB9IGZyb20gJy4vZm9ybVZpZXdNb2RlbCc7XHJcbmltcG9ydCB7IFV0aWxpdHkgfSBmcm9tICcuL2NvbW1vbi91dGlsaXR5JztcclxuXHJcbmV4cG9ydCBlbnVtIEl0ZW1UeXBlIHtcclxuICBOb25lLFxyXG4gIFRlbXBsYXRlRWRpdG9yLFxyXG4gIFNuaXBwZXRGb3JtLFxyXG4gIFNuaXBwZXQsXHJcbiAgQ29tcG9uZW50Rm9ybSxcclxuICBDb21wb25lbnQsXHJcbiAgSGVhZGVyLFxyXG4gIFRhYnMsXHJcbiAgVGFiSXRlbSxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJdGVtVmlld01vZGVsIHtcclxuICBzdGF0aWMgaW5qZWN0ID0gW0FwcCwgRXZlbnRBZ2dyZWdhdG9yLCBVdGlsaXR5XTtcclxuXHJcbiAgaXRlbVR5cGUgPSBJdGVtVHlwZS5Ob25lO1xyXG4gIGl0ZW1UeXBlTmFtZSA9IEl0ZW1UeXBlW0l0ZW1UeXBlLk5vbmVdO1xyXG4gIGFwcDogQXBwID0gbnVsbDtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvciA9IG51bGw7XHJcbiAgZWRpdG9yOiBGb3JtRWRpdG9yID0gbnVsbDtcclxuICBAYmluZGFibGUgcGFyZW50OiBJdGVtVmlld01vZGVsID0gbnVsbDtcclxuICBmb3JtOiBGb3JtVmlld01vZGVsID0gbnVsbDtcclxuICBjb250ZXh0ID0gbnVsbDtcclxuICBpbmRleCA9IDA7XHJcbiAgdXRpbGl0eTogVXRpbGl0eSA9IG51bGw7XHJcbiAgYmFzZVVybDogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgY29ubmVjdFdpdGg6IHN0cmluZztcclxuICBpc1BsYWNlSG9sZGVyOiBib29sZWFuO1xyXG4gIHNvcnRpbmc6IHtcclxuICAgIHN0b3BwZWQ6IGJvb2xlYW47XHJcbiAgICB0b0JlUmVtb3ZlZDogYm9vbGVhbjtcclxuICAgIHJlY2VpdmVkOiBib29sZWFuO1xyXG4gICAgaWR4U3RhcnQ6IG51bWJlcjtcclxuICB9O1xyXG5cclxuICBAYmluZGFibGUgbW9kZWwgPSBudWxsO1xyXG4gIEBiaW5kYWJsZSBlbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGw7XHJcbiAgQGJpbmRhYmxlIGNvdmVyVXA6IEhUTUxFbGVtZW50ID0gbnVsbDtcclxuICBpdGVtczogQXJyYXk8SXRlbVZpZXdNb2RlbD4gPSBbXTtcclxuICB1cmw6IHN0cmluZyA9IG51bGw7XHJcbiAgdGFyZ2V0TW9kZSA9IGZhbHNlO1xyXG4gIHJlYWRPbmx5ID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvciwgdXRpbGl0eTogVXRpbGl0eSkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIml0ZW1WaWV3TW9kZWxcIiwgKDxhbnk+dGhpcykuX19wcm90b19fKTtcclxuICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgdGhpcy5lZGl0b3IgPSB0aGlzLmFwcC5lZGl0b3I7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGV2ZW50QWdncmVnYXRvcjtcclxuICAgIC8vdGhpcy5lZGl0b3IgPSBlZGl0b3I7XHJcbiAgICB0aGlzLnV0aWxpdHkgPSB1dGlsaXR5O1xyXG4gIH1cclxuXHJcbiAgYmluZChjb250ZXh0KSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCg8YW55PnRoaXMpLl9fcHJvdG9fXywgXCJiaW5kXCIsIGNvbnRleHQpO1xyXG4gICAgaWYgKHRoaXMuaXRlbVR5cGUgPT0gSXRlbVR5cGUuU25pcHBldEZvcm0pXHJcbiAgICAgIGNvbnNvbGUubG9nKCg8YW55PnRoaXMpLl9fcHJvdG9fXywgXCJiaW5kXCIsIGNvbnRleHQpO1xyXG5cclxuICAgIHRoaXMuZWRpdG9yID0gdGhpcy5hcHAuZWRpdG9yIHx8IHRoaXMuZWRpdG9yO1xyXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgIGlmICghdGhpcy5wYXJlbnQpXHJcbiAgICAgIHRoaXMucGFyZW50ID0gdGhpcy5jb250ZXh0LiRwYXJlbnQ7XHJcbiAgICBpZiAoIXRoaXMucGFyZW50KVxyXG4gICAgICB0aGlzLnBhcmVudCA9IHRoaXMuZWRpdG9yIHx8IG51bGw7XHJcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5jb250ZXh0LiRpbmRleDtcclxuXHJcbiAgICBpZiAoIXRoaXMucGFyZW50ICYmIHRoaXMuaXRlbVR5cGUgIT0gSXRlbVR5cGUuVGVtcGxhdGVFZGl0b3IpXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5pdGVtVHlwZU5hbWUsIFwibWlzc2luZyBwYXJlbnRcIiwgdGhpcyk7XHJcblxyXG4gICAgLy8gVE9ETzogRmlndXJlIG91dCBAYmluZGFibGUgbm90IHdvcmtpbmdcclxuICAgIGlmICghdGhpcy5tb2RlbCAmJiB0aGlzLmNvbnRleHQuaXRlbSlcclxuICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuY29udGV4dC5pdGVtO1xyXG5cclxuICAgIGlmICghdGhpcy5tb2RlbCAmJiB0aGlzLml0ZW1UeXBlICE9IEl0ZW1UeXBlLlRlbXBsYXRlRWRpdG9yKVxyXG4gICAgICBjb25zb2xlLmVycm9yKHRoaXMuaXRlbVR5cGVOYW1lLCBcIm1pc3NpbmcgYm91bmQgbW9kZWxcIiwgKDxhbnk+dGhpcykuX19wcm90b19fLCBjb250ZXh0KTtcclxuXHJcbiAgICBpZiAoIXRoaXMuZWxlbWVudCAmJiB0aGlzLmNvbnRleHQuZWxlbWVudClcclxuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5jb250ZXh0LmVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xyXG4gICAgICAkKHRoaXMuZWxlbWVudCkuZGF0YShcIml0ZW1WaWV3TW9kZWxcIiwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmNvdmVyVXAgJiYgdGhpcy5jb250ZXh0LmNvdmVyVXApXHJcbiAgICAgIHRoaXMuY292ZXJVcCA9IHRoaXMuY29udGV4dC5jb3ZlclVwO1xyXG5cclxuICAgIGlmICh0aGlzLmNvdmVyVXApIHtcclxuICAgICAgJCh0aGlzLmNvdmVyVXApLmRhdGEoXCJpdGVtVmlld01vZGVsXCIsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm1vZGVsICYmICF0aGlzLm1vZGVsLmhpZGRlbikge1xyXG4gICAgICBpZiAodGhpcy5tb2RlbC5hcHApIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMuaXRlbVR5cGVOYW1lLCBcImJpbmQgbm9uIG1vZGVsXCIsIHRoaXMubW9kZWwsICg8YW55PnRoaXMpLl9fcHJvdG9fXyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJpdGVtVmlld01vZGVsXCIsIFwiYmluZFwiLCAoPGFueT50aGlzKS5fX3Byb3RvX18sIHRoaXMubW9kZWwpO1xyXG5cclxuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudXRpbGl0eS5sb2FkUmVmZXJlbmNlKHRoaXMubW9kZWwpLnRoZW4oKG1vZGVsOiBhbnkpID0+IHtcclxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oc2VsZi5tb2RlbCwgbW9kZWwpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZygoPGFueT50aGlzKS5fX3Byb3RvX18sIFwiYmluZC1sb2FkXCIsIG1vZGVsLnRpdGxlLCBtb2RlbCwgdGhpcy5tb2RlbCk7XHJcblxyXG4gICAgICAgICAgaWYgKHNlbGYucGFyZW50ICYmIHNlbGYucGFyZW50Lml0ZW1zKSB7XHJcbiAgICAgICAgICAgIHNlbGYucGFyZW50LmFkZEl0ZW0oc2VsZik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKHRoaXMuaXRlbVR5cGVOYW1lICsgXCItYmluZFwiLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIEBjb21wdXRlZEZyb20oJ21vZGVsJylcclxuICBnZXQgZmllbGRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmllbGRzO1xyXG4gIH1cclxuXHJcbiAgQGNvbXB1dGVkRnJvbSgnZWxlbWVudCcpXHJcbiAgZ2V0IGlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudCA/IHRoaXMuZWxlbWVudC5pZCA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgZGVidWdNb2RlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXBwICYmIHRoaXMuYXBwLmRlYnVnTW9kZTtcclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oaXRlbTogSXRlbVZpZXdNb2RlbCkge1xyXG4gICAgdmFyIGZvdW5kID0gdGhpcy5pdGVtcy5maW5kKChjdXIpID0+IGN1ci5pbmRleCA9PSBpdGVtLmluZGV4KTtcclxuICAgIGlmIChmb3VuZCkge1xyXG4gICAgICB2YXIgaWR4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGZvdW5kKTtcclxuICAgICAgaWYgKGlkeCAhPSAtMSlcclxuICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShpZHgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcclxuICAgIHRoaXMuaXRlbXMuc29ydCgobGVmdCwgcmlnaHQpID0+IHtcclxuICAgICAgaWYgKGxlZnQuaW5kZXggPT0gcmlnaHQuaW5kZXgpXHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIHJldHVybiAobGVmdC5pbmRleCA8IHJpZ2h0LmluZGV4KSA/IC0xIDogMTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9