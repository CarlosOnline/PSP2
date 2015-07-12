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
    var Tabs = (function (_super) {
        __extends(Tabs, _super);
        function Tabs(app, eventAggregator, utility) {
            var _this = this;
            _super.call(this, app, eventAggregator, utility);
            this.model = null;
            this.parent = null;
            this.tabs = null;
            this.connectWith = null;
            this.url = null;
            this.commonTab = false;
            this.tabMode = false;
            this.activeTab = null;
            this.tabClick = function (event, index) {
                if (index < _this.items.length) {
                    var tab = _this.items[index];
                    _this.setActiveTab(tab);
                }
                else
                    console.error("Invalid tab index", index, event);
            };
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
            this.itemType = itemViewModel_1.ItemType.Tabs;
            this.itemTypeName = itemViewModel_1.ItemType[this.itemType];
        }
        Object.defineProperty(Tabs.prototype, "snippets", {
            get: function () {
                return this.items;
            },
            enumerable: true,
            configurable: true
        });
        Tabs.prototype.bind = function (context) {
            _super.prototype.bind.call(this, context);
        };
        Tabs.prototype.setActiveTab = function (tab) {
            if (this.activeTab == tab)
                return;
            if (this.activeTab) {
                this.activeTab.model.active = false;
            }
            if (tab) {
                this.activeTab = tab;
                this.activeTab.model.active = true;
                this.editor.resizeCoverUps();
            }
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Array)
        ], Tabs.prototype, "model");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', itemViewModel_1.ItemViewModel)
        ], Tabs.prototype, "parent");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], Tabs.prototype, "tabs");
        Object.defineProperty(Tabs.prototype, "snippets",
            __decorate([
                aurelia_framework_1.computedFrom('items'), 
                __metadata('design:type', Object)
            ], Tabs.prototype, "snippets", Object.getOwnPropertyDescriptor(Tabs.prototype, "snippets")));
        return Tabs;
    })(itemViewModel_1.ItemViewModel);
    exports.Tabs = Tabs;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3BzcC90YWJzLnRzIl0sIm5hbWVzIjpbIlRhYnMiLCJUYWJzLmNvbnN0cnVjdG9yIiwiVGFicy5zbmlwcGV0cyIsIlRhYnMuYmluZCIsIlRhYnMuc2V0QWN0aXZlVGFiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNQTtRQUEwQkEsd0JBQWFBO1FBV3JDQSxjQUFZQSxHQUFHQSxFQUFFQSxlQUFlQSxFQUFFQSxPQUFPQTtZQVgzQ0MsaUJBb0VDQTtZQXhER0Esa0JBQU1BLEdBQUdBLEVBQUVBLGVBQWVBLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO1lBVjdCQSxVQUFLQSxHQUFlQSxJQUFJQSxDQUFDQTtZQUN6QkEsV0FBTUEsR0FBa0JBLElBQUlBLENBQUNBO1lBQzdCQSxTQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtZQUN0QkEsZ0JBQVdBLEdBQVdBLElBQUlBLENBQUNBO1lBQzNCQSxRQUFHQSxHQUFXQSxJQUFJQSxDQUFDQTtZQUNuQkEsY0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0E7WUFDbEJBLFlBQU9BLEdBQUdBLEtBQUtBLENBQUNBO1lBQ2hCQSxjQUFTQSxHQUFZQSxJQUFJQSxDQUFDQTtZQWlCMUJBLGFBQVFBLEdBQUdBLFVBQUNBLEtBQVVBLEVBQUVBLEtBQWFBO2dCQUNuQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQzlCQSxJQUFJQSxHQUFHQSxHQUFhQSxLQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDdENBLEtBQUlBLENBQUNBLFlBQVlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO2dCQUN6QkEsQ0FBQ0E7Z0JBQ0RBLElBQUlBO29CQUNGQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxtQkFBbUJBLEVBQUVBLEtBQUtBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1lBQ3JEQSxDQUFDQSxDQUFBQTtZQWlCREEsaUJBQVlBLEdBQUdBLFVBQUNBLEtBQWFBO2dCQUMzQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3BCQSxJQUFJQSxRQUFRQSxHQUFHQSxDQUFDQSxDQUFDQSxLQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtvQkFDMUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO29CQUNuQkEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsVUFBVUEsS0FBS0E7d0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN4QixDQUFDLENBQUNBLENBQUNBO2dCQUNMQSxDQUFDQTtZQUNIQSxDQUFDQSxDQUFDQTtZQUVGQSxpQkFBWUEsR0FBR0EsVUFBQ0EsS0FBYUE7Z0JBQzNCQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDcEJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO29CQUNuQkEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsVUFBVUEsS0FBS0E7d0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN4QixDQUFDLENBQUNBLENBQUNBO2dCQUNMQSxDQUFDQTtZQUNIQSxDQUFDQSxDQUFDQTtZQXREQUEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0Esd0JBQVFBLENBQUNBLElBQUlBLENBQUNBO1lBQzlCQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSx3QkFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFDOUNBLENBQUNBO1FBRURELHNCQUNJQSwwQkFBUUE7aUJBRFpBO2dCQUVFRSxNQUFNQSxDQUF3QkEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7WUFDM0NBLENBQUNBOzs7V0FBQUY7UUFFREEsbUJBQUlBLEdBQUpBLFVBQUtBLE9BQVlBO1lBQ2ZHLGdCQUFLQSxDQUFDQSxJQUFJQSxZQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUN0QkEsQ0FBQ0E7UUFXREgsMkJBQVlBLEdBQVpBLFVBQWFBLEdBQVlBO1lBQ3ZCSSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxJQUFJQSxHQUFHQSxDQUFDQTtnQkFDeEJBLE1BQU1BLENBQUNBO1lBRVRBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNuQkEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0E7WUFDdENBLENBQUNBO1lBRURBLEVBQUVBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO2dCQUNSQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxHQUFHQSxDQUFDQTtnQkFDckJBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBO2dCQUNuQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7WUFDL0JBLENBQUNBO1FBQ0hBLENBQUNBO1FBOUNESjtZQUFDQSw0QkFBUUE7O1dBQUNBLHVCQUFLQSxFQUFvQkE7UUFDbkNBO1lBQUNBLDRCQUFRQTs7V0FBQ0Esd0JBQU1BLEVBQXVCQTtRQUN2Q0E7WUFBQ0EsNEJBQVFBOztXQUFDQSxzQkFBSUEsRUFBUUE7UUFhdEJBLHNCQUNJQSwwQkFBUUE7O2dCQURYQSxnQ0FBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7O2VBQ2xCQSwwQkFBUUEsa0NBQVJBLDBCQUFRQSxJQUVYQTtRQWdESEEsV0FBQ0E7SUFBREEsQ0FwRUEsQUFvRUNBLEVBcEV5Qiw2QkFBYSxFQW9FdEM7SUFwRVksWUFBSSxPQW9FaEIsQ0FBQSIsImZpbGUiOiJ2aWV3cy9wc3AvdGFicy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXB1dGVkRnJvbSwgYmluZGFibGUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IFV0aWxpdHkgfSBmcm9tICcuL2NvbW1vbi91dGlsaXR5JztcclxuaW1wb3J0IHsgSXRlbVR5cGUsIEl0ZW1WaWV3TW9kZWwgfSBmcm9tICcuL2l0ZW1WaWV3TW9kZWwnO1xyXG5pbXBvcnQgeyBTbmlwcGV0IH0gZnJvbSAnLi9zbmlwcGV0JztcclxuaW1wb3J0IHsgVGFiSXRlbSB9IGZyb20gJy4vdGFiLWl0ZW0nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhYnMgZXh0ZW5kcyBJdGVtVmlld01vZGVsIHtcclxuXHJcbiAgQGJpbmRhYmxlIG1vZGVsOiBBcnJheTxhbnk+ID0gbnVsbDtcclxuICBAYmluZGFibGUgcGFyZW50OiBJdGVtVmlld01vZGVsID0gbnVsbDtcclxuICBAYmluZGFibGUgdGFicyA9IG51bGw7XHJcbiAgY29ubmVjdFdpdGg6IHN0cmluZyA9IG51bGw7XHJcbiAgdXJsOiBzdHJpbmcgPSBudWxsO1xyXG4gIGNvbW1vblRhYiA9IGZhbHNlO1xyXG4gIHRhYk1vZGUgPSBmYWxzZTtcclxuICBhY3RpdmVUYWI6IFRhYkl0ZW0gPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhcHAsIGV2ZW50QWdncmVnYXRvciwgdXRpbGl0eSkge1xyXG4gICAgc3VwZXIoYXBwLCBldmVudEFnZ3JlZ2F0b3IsIHV0aWxpdHkpO1xyXG4gICAgdGhpcy5pdGVtVHlwZSA9IEl0ZW1UeXBlLlRhYnM7XHJcbiAgICB0aGlzLml0ZW1UeXBlTmFtZSA9IEl0ZW1UeXBlW3RoaXMuaXRlbVR5cGVdO1xyXG4gIH1cclxuXHJcbiAgQGNvbXB1dGVkRnJvbSgnaXRlbXMnKVxyXG4gIGdldCBzbmlwcGV0cygpIHtcclxuICAgIHJldHVybiA8QXJyYXk8U25pcHBldD4+IDxhbnk+IHRoaXMuaXRlbXM7XHJcbiAgfVxyXG5cclxuICBiaW5kKGNvbnRleHQ6IGFueSkge1xyXG4gICAgc3VwZXIuYmluZChjb250ZXh0KTtcclxuICB9XHJcblxyXG4gIHRhYkNsaWNrID0gKGV2ZW50OiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIGlmIChpbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgIGxldCB0YWIgPSA8VGFiSXRlbT4gdGhpcy5pdGVtc1tpbmRleF07XHJcbiAgICAgIHRoaXMuc2V0QWN0aXZlVGFiKHRhYik7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIHRhYiBpbmRleFwiLCBpbmRleCwgZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgc2V0QWN0aXZlVGFiKHRhYjogVGFiSXRlbSkge1xyXG4gICAgaWYgKHRoaXMuYWN0aXZlVGFiID09IHRhYilcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIGlmICh0aGlzLmFjdGl2ZVRhYikge1xyXG4gICAgICB0aGlzLmFjdGl2ZVRhYi5tb2RlbC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFiKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gdGFiO1xyXG4gICAgICB0aGlzLmFjdGl2ZVRhYi5tb2RlbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmVkaXRvci5yZXNpemVDb3ZlclVwcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHVtcEVsZW1lbnRzID0gKGxhYmVsOiBzdHJpbmcpID0+IHtcclxuICAgIGlmICh0aGlzLnRhcmdldE1vZGUpIHtcclxuICAgICAgdmFyIGNoaWxkcmVuID0gJCh0aGlzLmVsZW1lbnQpLmNoaWxkcmVuKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGxhYmVsKTtcclxuICAgICAgXy5lYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGlsZC5pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGR1bXBTbmlwcGV0cyA9IChsYWJlbDogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAodGhpcy50YXJnZXRNb2RlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGxhYmVsKTtcclxuICAgICAgXy5lYWNoKHRoaXMuaXRlbXMsIGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoaWxkLmlkKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=