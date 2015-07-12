var __decorate = this.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'aurelia-framework', './../misc/utility', './../app'], function (require, exports, aurelia_framework_1, utility_1, app_1) {
    (function (ItemType) {
        ItemType[ItemType["None"] = 0] = "None";
        ItemType[ItemType["TemplateEditor"] = 1] = "TemplateEditor";
        ItemType[ItemType["Snippet"] = 2] = "Snippet";
        ItemType[ItemType["ComponentForm"] = 3] = "ComponentForm";
        ItemType[ItemType["Component"] = 4] = "Component";
    })(exports.ItemType || (exports.ItemType = {}));
    var ItemType = exports.ItemType;
    ;
    var ItemBase = (function () {
        function ItemBase(app, utility) {
            this.itemType = ItemType.None;
            this.itemTypeName = ItemType[ItemType.None];
            this.app = null;
            this.parent = null;
            this.context = null;
            this.index = 0;
            this.utility = null;
            this.model = null;
            this.items = [];
            this.url = null;
            this.app = app;
            this.utility = utility;
        }
        ItemBase.prototype.bind = function (context) {
            this.context = context;
            if (!this.parent)
                this.parent = this.context.$parent;
            this.index = this.context.$index;
            if (!this.parent)
                console.error(this.itemTypeName, "missing parent", this);
            if (!this.model && this.context.item)
                this.model = this.context.item;
            if (this.model.app) {
                console.error(self.itemTypeName, "bind non model", self.model);
            }
            var self = this;
            this.utility.loadReference(this.model).then(function (model) {
                if (self.parent && self.parent.items) {
                    self.parent.addItem(self);
                }
            });
        };
        Object.defineProperty(ItemBase.prototype, "fields", {
            get: function () {
                return this.model.fields;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemBase.prototype, "debugMode", {
            get: function () {
                return this.app && this.app.debugMode;
            },
            enumerable: true,
            configurable: true
        });
        ItemBase.prototype.addItem = function (item) {
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
        ItemBase.inject = [app_1.App, utility_1.Utility];
        __decorate([
            aurelia_framework_1.bindable
        ], ItemBase.prototype, "model");
        Object.defineProperty(ItemBase.prototype, "fields",
            __decorate([
                aurelia_framework_1.computedFrom('model')
            ], ItemBase.prototype, "fields", Object.getOwnPropertyDescriptor(ItemBase.prototype, "fields")));
        return ItemBase;
    })();
    exports.ItemBase = ItemBase;
});
//# sourceMappingURL=itemBase.js.map