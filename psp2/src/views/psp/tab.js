var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = this.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'aurelia-framework', './itemViewModel'], function (require, exports, aurelia_framework_1, itemViewModel_1) {
    var Tabs = (function (_super) {
        __extends(Tabs, _super);
        function Tabs(app, utility) {
            var _this = this;
            _super.call(this, app, utility);
            this.connectWith = null;
            this.url = null;
            this.commonTab = false;
            this.tabMode = false;
            this.tab = null;
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
            this.itemType = itemViewModel_1.ItemType.TemplateEditor;
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
            if (!this.tab) {
                console.error(this.__proto__, "missing tab", context);
                return;
            }
            console.log("tab", this.tab);
            this.model = this.tab;
            if (this.model.json) {
                this.tab = true;
                this.commonTab = this.model.name == "Common";
            }
            _super.prototype.bind.call(this, context);
            if (!this.model) {
                console.error(this.__proto__, "missing model", context);
                return;
            }
        };
        __decorate([
            aurelia_framework_1.bindable
        ], Tabs.prototype, "tab");
        Object.defineProperty(Tabs.prototype, "snippets",
            __decorate([
                aurelia_framework_1.computedFrom('items')
            ], Tabs.prototype, "snippets", Object.getOwnPropertyDescriptor(Tabs.prototype, "snippets")));
        return Tabs;
    })(itemViewModel_1.ItemViewModel);
    exports.Tabs = Tabs;
});
//# sourceMappingURL=tab.js.map