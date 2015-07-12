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
    var TabItem = (function (_super) {
        __extends(TabItem, _super);
        function TabItem(app, eventAggregator, utility) {
            _super.call(this, app, eventAggregator, utility);
            this.model = null;
            this.parent = null;
            this.element = null;
            this.coverUp = null;
            this.tabs = null;
            this.itemType = itemViewModel_1.ItemType.TabItem;
            this.itemTypeName = itemViewModel_1.ItemType[this.itemType];
        }
        TabItem.prototype.bind = function (context) {
            _super.prototype.bind.call(this, context);
            this.tabs = this.parent;
            if (this.index == 0)
                this.tabs.setActiveTab(this);
            /*
              console.log("tab-item", this.model, this.parent);
          
              var self = this;
              Object.observe(this, function (changes) {
          
                // This asynchronous callback runs
                changes.forEach(function (change) {
          
                  // Letting us know what changed
                  console.log(change.type, change.name, change.oldValue, this);
          
                  if (change.name == "active") {
                    console.log("active", self.active, self.element);
                    if (self.element && false) {
                      self.element.className.replace(" active ", "");
                      if (self.active)
                        self.element.className += " active ";
                    }
                  }
                });
          
              });
          
            */
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], TabItem.prototype, "model");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', itemViewModel_1.ItemViewModel)
        ], TabItem.prototype, "parent");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', HTMLElement)
        ], TabItem.prototype, "element");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', HTMLElement)
        ], TabItem.prototype, "coverUp");
        return TabItem;
    })(itemViewModel_1.ItemViewModel);
    exports.TabItem = TabItem;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3BzcC90YWItaXRlbS50cyJdLCJuYW1lcyI6WyJUYWJJdGVtIiwiVGFiSXRlbS5jb25zdHJ1Y3RvciIsIlRhYkl0ZW0uYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTUE7UUFBNkJBLDJCQUFhQTtRQVN4Q0EsaUJBQVlBLEdBQUdBLEVBQUVBLGVBQWVBLEVBQUVBLE9BQU9BO1lBQ3ZDQyxrQkFBTUEsR0FBR0EsRUFBRUEsZUFBZUEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7WUFSN0JBLFVBQUtBLEdBQVFBLElBQUlBLENBQUNBO1lBQ2xCQSxXQUFNQSxHQUFrQkEsSUFBSUEsQ0FBQ0E7WUFDN0JBLFlBQU9BLEdBQWdCQSxJQUFJQSxDQUFDQTtZQUM1QkEsWUFBT0EsR0FBZ0JBLElBQUlBLENBQUNBO1lBRXRDQSxTQUFJQSxHQUFTQSxJQUFJQSxDQUFDQTtZQUloQkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0Esd0JBQVFBLENBQUNBLE9BQU9BLENBQUNBO1lBQ2pDQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSx3QkFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFDOUNBLENBQUNBO1FBRURELHNCQUFJQSxHQUFKQSxVQUFLQSxPQUFPQTtZQUNWRSxnQkFBS0EsQ0FBQ0EsSUFBSUEsWUFBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7WUFDcEJBLElBQUlBLENBQUNBLElBQUlBLEdBQVVBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO1lBRS9CQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDbEJBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBRWpDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2NBd0JFQTtRQUNGQSxDQUFDQTtRQTdDREY7WUFBQ0EsNEJBQVFBOztXQUFDQSwwQkFBS0EsRUFBYUE7UUFDNUJBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsMkJBQU1BLEVBQXVCQTtRQUN2Q0E7WUFBQ0EsNEJBQVFBOztXQUFDQSw0QkFBT0EsRUFBcUJBO1FBQ3RDQTtZQUFDQSw0QkFBUUE7O1dBQUNBLDRCQUFPQSxFQUFxQkE7UUE0Q3hDQSxjQUFDQTtJQUFEQSxDQWpEQSxBQWlEQ0EsRUFqRDRCLDZCQUFhLEVBaUR6QztJQWpEWSxlQUFPLFVBaURuQixDQUFBIiwiZmlsZSI6InZpZXdzL3BzcC90YWItaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXB1dGVkRnJvbSwgYmluZGFibGUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IFV0aWxpdHkgfSBmcm9tICcuL2NvbW1vbi91dGlsaXR5JztcclxuaW1wb3J0IHsgSXRlbVR5cGUsIEl0ZW1WaWV3TW9kZWwgfSBmcm9tICcuL2l0ZW1WaWV3TW9kZWwnO1xyXG5pbXBvcnQgeyBTbmlwcGV0IH0gZnJvbSAnLi9zbmlwcGV0JztcclxuaW1wb3J0IHsgVGFicyB9IGZyb20gJy4vdGFicyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFiSXRlbSBleHRlbmRzIEl0ZW1WaWV3TW9kZWwge1xyXG5cclxuICBAYmluZGFibGUgbW9kZWw6IGFueSA9IG51bGw7XHJcbiAgQGJpbmRhYmxlIHBhcmVudDogSXRlbVZpZXdNb2RlbCA9IG51bGw7XHJcbiAgQGJpbmRhYmxlIGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbDtcclxuICBAYmluZGFibGUgY292ZXJVcDogSFRNTEVsZW1lbnQgPSBudWxsO1xyXG5cclxuICB0YWJzOiBUYWJzID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoYXBwLCBldmVudEFnZ3JlZ2F0b3IsIHV0aWxpdHkpIHtcclxuICAgIHN1cGVyKGFwcCwgZXZlbnRBZ2dyZWdhdG9yLCB1dGlsaXR5KTtcclxuICAgIHRoaXMuaXRlbVR5cGUgPSBJdGVtVHlwZS5UYWJJdGVtO1xyXG4gICAgdGhpcy5pdGVtVHlwZU5hbWUgPSBJdGVtVHlwZVt0aGlzLml0ZW1UeXBlXTtcclxuICB9XHJcblxyXG4gIGJpbmQoY29udGV4dCkge1xyXG4gICAgc3VwZXIuYmluZChjb250ZXh0KTtcclxuICAgIHRoaXMudGFicyA9IDxUYWJzPiB0aGlzLnBhcmVudDtcclxuXHJcbiAgICBpZiAodGhpcy5pbmRleCA9PSAwKVxyXG4gICAgICB0aGlzLnRhYnMuc2V0QWN0aXZlVGFiKHRoaXMpO1xyXG5cclxuICAvKlxyXG4gICAgY29uc29sZS5sb2coXCJ0YWItaXRlbVwiLCB0aGlzLm1vZGVsLCB0aGlzLnBhcmVudCk7XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgT2JqZWN0Lm9ic2VydmUodGhpcywgZnVuY3Rpb24gKGNoYW5nZXMpIHtcclxuXHJcbiAgICAgIC8vIFRoaXMgYXN5bmNocm9ub3VzIGNhbGxiYWNrIHJ1bnNcclxuICAgICAgY2hhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGFuZ2UpIHtcclxuXHJcbiAgICAgICAgLy8gTGV0dGluZyB1cyBrbm93IHdoYXQgY2hhbmdlZFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoYW5nZS50eXBlLCBjaGFuZ2UubmFtZSwgY2hhbmdlLm9sZFZhbHVlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgaWYgKGNoYW5nZS5uYW1lID09IFwiYWN0aXZlXCIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWN0aXZlXCIsIHNlbGYuYWN0aXZlLCBzZWxmLmVsZW1lbnQpO1xyXG4gICAgICAgICAgaWYgKHNlbGYuZWxlbWVudCAmJiBmYWxzZSkge1xyXG4gICAgICAgICAgICBzZWxmLmVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlIFwiLCBcIlwiKTtcclxuICAgICAgICAgICAgaWYgKHNlbGYuYWN0aXZlKVxyXG4gICAgICAgICAgICAgIHNlbGYuZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYWN0aXZlIFwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICovXHJcbiAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==