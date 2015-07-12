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
define(["require", "exports", 'aurelia-framework', './../formEditor'], function (require, exports, aurelia_framework_1, formEditor_1) {
    var g_DebugMode = false;
    var SortableViewModel = (function () {
        function SortableViewModel(form) {
            var _this = this;
            this.form = null;
            this.start = function (event, ui) {
                $(".popover").remove();
                var snippet = ui.item.data("item");
                if (snippet == null) {
                    if (g_DebugMode)
                        console.log("start - missing snippet");
                    return;
                }
                if (snippet.model.title == "Null") {
                    return;
                }
                snippet.sorting.toBeRemoved = false;
                if (g_DebugMode)
                    console.log("start", snippet.id, _this.element.id, $(_this.element).sortable("option", "connectWith"));
                $(snippet.connectWith).addClass("snippet-sort-connectWith");
                if (snippet.isPlaceHolder)
                    return;
                ui.item.data("form", self);
                ui.item.addClass("snippet-sort-hover");
                var elem = document.getElementById("placeholder-drop-target");
                if (elem != null)
                    ui.placeholder.html(elem.innerHTML);
                else
                    ui.placeholder.html('<td class="target" colspan="2" style="width: 100%;" >&nbsp;</td>');
                ui.placeholder.width(g_formWidth);
            };
            this.stop = function (event, ui) {
                var snippet = ui.item.data("item");
                if (snippet == null) {
                    if (g_DebugMode)
                        console.log("stop - missing snippet");
                    return;
                }
                snippet.sorting.stopped = true;
                $(snippet.connectWith).removeClass("snippet-sort-connectWith");
                if (g_DebugMode)
                    console.log("stop", snippet.id, _this.element.id, snippet.sorting.toBeRemoved);
                if (snippet.isPlaceHolder) {
                    $(_this.element).sortable("cancel");
                }
                else if (_this.commonTab) {
                    if (snippet.sorting.toBeRemoved) {
                        if (g_DebugMode)
                            console.log("removing snippet", snippet.id, snippet.element.id, _this.element.id, snippet.sorting.toBeRemoved);
                        var idx = _this.snippets.indexOf(snippet);
                        _this.snippets.remove(snippet);
                    }
                }
                else if (_this.targetMode) {
                    if (snippet.sorting.toBeRemoved) {
                        if (g_DebugMode)
                            console.log("removing snippet", snippet.id, snippet.element.id, _this.element.id, snippet.sorting.toBeRemoved);
                        _this.snippets.remove(snippet);
                    }
                    else if (_this.form == snippet.form) {
                        // moved
                        var idx = ui.item[0].rowIndex;
                        var idxStart = snippet.form.items.indexOf(snippet);
                        if (idx != idxStart) {
                            snippet.form.items.splice(idxStart, 1);
                            snippet.form.items.splice(idx, 0, snippet);
                        }
                    }
                }
                _this.refresh();
                _this.editor.updateUiElements();
                setTimeout(function () {
                    _this.editor.updateUiElements();
                }, 250);
            };
            this.out = function (event, ui) {
                if (_this.readOnly || ui.item == null)
                    return;
                var snippet = ui.item.data("item");
                if (snippet == null) {
                    if (g_DebugMode)
                        console.log("out - missing snippet");
                    return;
                }
                if (snippet.sorting.stopped)
                    return;
                if (g_DebugMode && !snippet.sorting.toBeRemoved)
                    console.log("out snippet", snippet.id, snippet.element.id, _this.element.id, snippet.sorting.toBeRemoved);
                snippet.sorting.toBeRemoved = true;
            };
            this.over = function (event, ui) {
                if (_this.readOnly || ui.item == null)
                    return;
                // TODO: Dynamic acceptsFrom
                var snippet = ui.item.data("item");
                if (snippet == null) {
                    if (g_DebugMode)
                        console.log("over - missing snippet");
                    return;
                }
                if (snippet.sorting.stopped)
                    return;
                if (g_DebugMode && snippet.sorting.toBeRemoved)
                    console.log("in snippet", snippet.id, snippet.element.id, _this.element.id, snippet.sorting.toBeRemoved);
                snippet.sorting.toBeRemoved = false;
            };
            this.remove = function (event, ui) {
                var snippet = ui.item.data("item");
                if (snippet == null) {
                    if (g_DebugMode)
                        console.log("remove - missing snippet");
                    return;
                }
                if (g_DebugMode)
                    console.log("remove", snippet.id, _this.element.id, _this.element.id);
                // TODO: don't remove if going to Common Tab
                if (snippet.targetMode) {
                    snippet.form.items.remove(snippet);
                }
                _this.refresh();
            };
            this.receive = function (event, ui) {
                var snippet = ui.item.data("item");
                if (snippet == null) {
                    if (g_DebugMode)
                        console.log("receive - missing snippet");
                    return;
                }
                if (snippet.isPlaceHolder) {
                    $(_this.element).sortable("cancel");
                    _this.refresh();
                    return;
                }
                if (g_DebugMode)
                    console.log("receive", snippet.id, _this.element.id, snippet.sorting.toBeRemoved);
                var idx = $(event.target).children().index(ui.item);
                console.error("TODO: Figure out receive for", snippet);
                /* TODO - figure out receive
                var newSnippet = snippet.clone(this.form);
                if (idx != -1) {
                  this.snippets.insert(idx, newSnippet);
                }
                */
                _this.refresh();
            };
            this.refresh = function () {
                // Don't use .remove() b/c it kills the .data for the elements too
                // $(this.element).children().remove();
                while (_this.element.children.length > 0) {
                    _this.element.removeChild(_this.element.children[0]);
                }
                var save = [];
                var placeHolder = null;
                _.forEach(_this.snippets, function (snippet) {
                    if (snippet.isPlaceHolder)
                        placeHolder = snippet;
                    else
                        save.push(snippet);
                });
                if (placeHolder != null)
                    save.push(placeHolder);
                // TODO: subscriptions
                //this.form.subscriptions.disposeAll();
                _this.snippets.length = 0;
                _.forEach(save, function (snippet) {
                    _this.snippets.push(snippet);
                });
                //TODO: subscribe
                //this.form.subscribe();
                $(_this.element).sortable("refresh");
            };
            this.form = form;
        }
        Object.defineProperty(SortableViewModel.prototype, "editor", {
            get: function () {
                return this.form.editor;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SortableViewModel.prototype, "targetMode", {
            get: function () {
                return this.form.targetMode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SortableViewModel.prototype, "commonTab", {
            get: function () {
                return this.editor.commonTab;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SortableViewModel.prototype, "readOnly", {
            get: function () {
                return this.form.readOnly;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SortableViewModel.prototype, "snippets", {
            get: function () {
                return this.form.items;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SortableViewModel.prototype, "element", {
            get: function () {
                return this.form.element;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SortableViewModel.prototype, "editor",
            __decorate([
                aurelia_framework_1.computedFrom('form'), 
                __metadata('design:type', formEditor_1.FormEditor)
            ], SortableViewModel.prototype, "editor", Object.getOwnPropertyDescriptor(SortableViewModel.prototype, "editor")));
        return SortableViewModel;
    })();
    exports.SortableViewModel = SortableViewModel;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3BzcC9jb21tb24vc29ydGFibGUudHMiXSwibmFtZXMiOlsiU29ydGFibGVWaWV3TW9kZWwiLCJTb3J0YWJsZVZpZXdNb2RlbC5jb25zdHJ1Y3RvciIsIlNvcnRhYmxlVmlld01vZGVsLmVkaXRvciIsIlNvcnRhYmxlVmlld01vZGVsLnRhcmdldE1vZGUiLCJTb3J0YWJsZVZpZXdNb2RlbC5jb21tb25UYWIiLCJTb3J0YWJsZVZpZXdNb2RlbC5yZWFkT25seSIsIlNvcnRhYmxlVmlld01vZGVsLnNuaXBwZXRzIiwiU29ydGFibGVWaWV3TW9kZWwuZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBV0EsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBR3hCO1FBSUVBLDJCQUFZQSxJQUFtQkE7WUFKakNDLGlCQXNPQ0E7WUFwT0NBLFNBQUlBLEdBQWtCQSxJQUFJQSxDQUFDQTtZQStCM0JBLFVBQUtBLEdBQUdBLFVBQUNBLEtBQUtBLEVBQUVBLEVBQUVBO2dCQUNoQkEsQ0FBQ0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7Z0JBRXZCQSxJQUFJQSxPQUFPQSxHQUFrQkEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xEQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDcEJBLEVBQUVBLENBQUNBLENBQUNBLFdBQVdBLENBQUNBO3dCQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSx5QkFBeUJBLENBQUNBLENBQUNBO29CQUN4REEsTUFBTUEsQ0FBQ0E7Z0JBQ1RBLENBQUNBO2dCQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxJQUFJQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDbENBLE1BQU1BLENBQUNBO2dCQUNUQSxDQUFD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Q0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2hDQSxFQUFFQSxDQUFDQSxDQUFDQSxXQUFXQSxDQUFDQTs0QkFBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxFQUFFQSxPQUFPQSxDQUFDQSxFQUFFQSxFQUFFQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFFQSxFQUFFQSxLQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFFQSxFQUFFQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTt3QkFDL0hBLElBQUlBLEdBQUdBLEdBQUdBLEtBQUlBLENBQUNBLFFBQVFBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO3dCQUN6Q0EsS0FBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2hDQSxDQUFDQTtnQkFDSEEsQ0FBQ0E7Z0JBQ0RBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLEtBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO29CQUN6QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2hDQSxFQUFFQSxDQUFDQSxDQUFDQSxXQUFXQSxDQUFDQTs0QkFBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxFQUFFQSxPQUFPQSxDQUFDQSxFQUFFQSxFQUFFQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFFQSxFQUFFQSxLQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFFQSxFQUFFQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTt3QkFDL0hBLEtBQUlBLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO29CQUNoQ0EsQ0FBQ0E7b0JBQ0RBLElB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Q0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xEQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDcEJBLEVBQUVBLENBQUNBLENBQUNBLFdBQVdBLENBQUNBO3dCQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSx3QkFBd0JBLENBQUNBLENBQUNBO29CQUN2REEsTUFBTUEsQ0FBQ0E7Z0JBQ1RBLENBQUNBO2dCQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQTtvQkFDMUJBLE1BQU1BLENBQUNBO2dCQUVUQSxFQUFFQSxDQUFDQSxDQUFDQSxXQUFXQSxJQUFJQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxXQUFXQSxDQUFDQTtvQkFDN0NBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLFlBQVlBLEVBQUVBLE9BQU9BLENBQUNBLEVBQUVBLEVBQUVBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLEVBQUVBLEVBQUVBLEtBQUlBLENBQUNBLE9BQU9BLENBQUNBLEVBQUVBLEVBQUVBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO2dCQUUxR0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsV0FBV0EsR0FBR0EsS0FBS0EsQ0FBQ0E7WUFDdENBLENBQUNBLENBQUFBO1lBR0RBLFdBQU1BLEdBQUdBLFVBQUNBLEtBQUtBLEVBQUVBLEVBQUVBO2dCQUNqQkEsSUFBSUEsT0FBT0EsR0FBa0JBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUNsREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsSUFBSUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3BCQSxFQUFFQSxDQUFDQSxDQUFDQSxXQUFXQSxDQUFDQTt3QkFBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsMEJBQTBC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QUNBO1lBQzlCQSxDQUFDQTs7O1dBQUFIO1FBRURBLHNCQUFJQSx3Q0FBU0E7aUJBQWJBO2dCQUNFSSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQTtZQUMvQkEsQ0FBQ0E7OztXQUFBSjtRQUVEQSxzQkFBSUEsdUNBQVFBO2lCQUFaQTtnQkFDRUssTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDNUJBLENBQUNBOzs7V0FBQUw7UUFFREEsc0JBQUlBLHVDQUFRQTtpQkFBWkE7Z0JBQ0VNLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO1lBQ3pCQSxDQUFDQTs7O1dBQUFOO1FBRURBLHNCQUFJQSxzQ0FBT0E7aUJBQVhBO2dCQUNFTyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQTtZQUMzQkEsQ0FBQ0E7OztXQUFBUDtRQXZCREEsc0JBQ0lBLHFDQUFNQTs7Z0JBRFRBLGdDQUFZQSxDQUFDQSxNQUFNQSxDQUFDQTs7ZUFDakJBLHFDQUFNQSxrQ0FBTkEscUNBQU1BLElBRVRBO1FBMk5IQSx3QkFBQ0E7SUFBREEsQ0F0T0EsQUFzT0NBLElBQUE7SUF0T1kseUJBQWlCLG9CQXNPN0IsQ0FBQSIsImZpbGUiOiJ2aWV3cy9wc3AvY29tbW9uL3NvcnRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcHV0ZWRGcm9tLCBiaW5kYWJsZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgVXRpbGl0eSB9IGZyb20gJy4vdXRpbGl0eSc7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vLi4vLi4vYXBwJztcclxuaW1wb3J0IHsgSXRlbVR5cGUsIEl0ZW1WaWV3TW9kZWwgfSBmcm9tICcuLy4uL2l0ZW1WaWV3TW9kZWwnO1xyXG5pbXBvcnQgeyBGb3JtVHlwZSwgRm9ybVZpZXdNb2RlbCB9IGZyb20gJy4vLi4vZm9ybVZpZXdNb2RlbCc7XHJcbmltcG9ydCB7IEZvcm1FZGl0b3IgfSBmcm9tICcuLy4uL2Zvcm1FZGl0b3InO1xyXG5pbXBvcnQgeyBTbmlwcGV0Rm9ybSB9IGZyb20gJy4vLi4vc25pcHBldC1mb3JtJztcclxuaW1wb3J0IHsgU25pcHBldCB9IGZyb20gJy4vLi4vc25pcHBldCc7XHJcbmltcG9ydCB7IENvbXBvbmVudEZvcm0gfSBmcm9tICcuLy4uL2NvbXBvbmVudC1mb3JtJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi8uLi9jb21wb25lbnQnO1xyXG5cclxudmFyIGdfRGVidWdNb2RlID0gZmFsc2U7XHJcbmRlY2xhcmUgdmFyIGdfZm9ybVdpZHRoOiBudW1iZXI7XHJcblxyXG5leHBvcnQgY2xhc3MgU29ydGFibGVWaWV3TW9kZWwge1xyXG5cclxuICBmb3JtOiBGb3JtVmlld01vZGVsID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoZm9ybTogRm9ybVZpZXdNb2RlbCkge1xyXG4gICAgdGhpcy5mb3JtID0gZm9ybTtcclxuICB9XHJcblxyXG4gIEBjb21wdXRlZEZyb20oJ2Zvcm0nKVxyXG4gIGdldCBlZGl0b3IoKTogRm9ybUVkaXRvciB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmVkaXRvcjtcclxuICB9XHJcblxyXG4gIGdldCB0YXJnZXRNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS50YXJnZXRNb2RlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbW1vblRhYigpOiBTbmlwcGV0Rm9ybSB7XHJcbiAgICByZXR1cm4gdGhpcy5lZGl0b3IuY29tbW9uVGFiO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlYWRPbmx5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS5yZWFkT25seTtcclxuICB9XHJcblxyXG4gIGdldCBzbmlwcGV0cygpOiBJdGVtVmlld01vZGVsW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS5pdGVtcztcclxuICB9XHJcblxyXG4gIGdldCBlbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uZWxlbWVudDtcclxuICB9XHJcblxyXG4gIHN0YXJ0ID0gKGV2ZW50LCB1aSkgPT4ge1xyXG4gICAgJChcIi5wb3BvdmVyXCIpLnJlbW92ZSgpO1xyXG5cclxuICAgIHZhciBzbmlwcGV0OiBJdGVtVmlld01vZGVsID0gdWkuaXRlbS5kYXRhKFwiaXRlbVwiKTtcclxuICAgIGlmIChzbmlwcGV0ID09IG51bGwpIHtcclxuICAgICAgaWYgKGdfRGVidWdNb2RlKSBjb25zb2xlLmxvZyhcInN0YXJ0IC0gbWlzc2luZyBzbmlwcGV0XCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNuaXBwZXQubW9kZWwudGl0bGUgPT0gXCJOdWxsXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNuaXBwZXQuc29ydGluZy50b0JlUmVtb3ZlZCA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChnX0RlYnVnTW9kZSkgY29uc29sZS5sb2coXCJzdGFydFwiLCBzbmlwcGV0LmlkLCB0aGlzLmVsZW1lbnQuaWQsICQodGhpcy5lbGVtZW50KS5zb3J0YWJsZShcIm9wdGlvblwiLCBcImNvbm5lY3RXaXRoXCIpKTtcclxuICAgICQoc25pcHBldC5jb25uZWN0V2l0aCkuYWRkQ2xhc3MoXCJzbmlwcGV0LXNvcnQtY29ubmVjdFdpdGhcIilcclxuXHJcbiAgICBpZiAoc25pcHBldC5pc1BsYWNlSG9sZGVyKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdWkuaXRlbS5kYXRhKFwiZm9ybVwiLCBzZWxmKTtcclxuICAgIHVpLml0ZW0uYWRkQ2xhc3MoXCJzbmlwcGV0LXNvcnQtaG92ZXJcIik7XHJcblxyXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYWNlaG9sZGVyLWRyb3AtdGFyZ2V0XCIpO1xyXG4gICAgaWYgKGVsZW0gIT0gbnVsbClcclxuICAgICAgdWkucGxhY2Vob2xkZXIuaHRtbChlbGVtLmlubmVySFRNTCk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHVpLnBsYWNlaG9sZGVyLmh0bWwoJzx0ZCBjbGFzcz1cInRhcmdldFwiIGNvbHNwYW49XCIyXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIiA+Jm5ic3A7PC90ZD4nKTtcclxuXHJcbiAgICB1aS5wbGFjZWhvbGRlci53aWR0aChnX2Zvcm1XaWR0aCk7XHJcbiAgfTtcclxuXHJcbiAgc3RvcCA9IChldmVudCwgdWkpID0+IHtcclxuICAgIHZhciBzbmlwcGV0OiBJdGVtVmlld01vZGVsID0gdWkuaXRlbS5kYXRhKFwiaXRlbVwiKTtcclxuICAgIGlmIChzbmlwcGV0ID09IG51bGwpIHtcclxuICAgICAgaWYgKGdfRGVidWdNb2RlKSBjb25zb2xlLmxvZyhcInN0b3AgLSBtaXNzaW5nIHNuaXBwZXRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNuaXBwZXQuc29ydGluZy5zdG9wcGVkID0gdHJ1ZTtcclxuXHJcbiAgICAkKHNuaXBwZXQuY29ubmVjdFdpdGgpLnJlbW92ZUNsYXNzKFwic25pcHBldC1zb3J0LWNvbm5lY3RXaXRoXCIpXHJcbiAgICBpZiAoZ19EZWJ1Z01vZGUpIGNvbnNvbGUubG9nKFwic3RvcFwiLCBzbmlwcGV0LmlkLCB0aGlzLmVsZW1lbnQuaWQsIHNuaXBwZXQuc29ydGluZy50b0JlUmVtb3ZlZCk7XHJcblxyXG4gICAgaWYgKHNuaXBwZXQuaXNQbGFjZUhvbGRlcikge1xyXG4gICAgICAkKHRoaXMuZWxlbWVudCkuc29ydGFibGUoXCJjYW5jZWxcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmNvbW1vblRhYikge1xyXG4gICAgICBpZiAoc25pcHBldC5zb3J0aW5nLnRvQmVSZW1vdmVkKSB7XHJcbiAgICAgICAgaWYgKGdfRGVidWdNb2RlKSBjb25zb2xlLmxvZyhcInJlbW92aW5nIHNuaXBwZXRcIiwgc25pcHBldC5pZCwgc25pcHBldC5lbGVtZW50LmlkLCB0aGlzLmVsZW1lbnQuaWQsIHNuaXBwZXQuc29ydGluZy50b0JlUmVtb3ZlZCk7XHJcbiAgICAgICAgdmFyIGlkeCA9IHRoaXMuc25pcHBldHMuaW5kZXhPZihzbmlwcGV0KTtcclxuICAgICAgICB0aGlzLnNuaXBwZXRzLnJlbW92ZShzbmlwcGV0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy50YXJnZXRNb2RlKSB7XHJcbiAgICAgIGlmIChzbmlwcGV0LnNvcnRpbmcudG9CZVJlbW92ZWQpIHtcclxuICAgICAgICBpZiAoZ19EZWJ1Z01vZGUpIGNvbnNvbGUubG9nKFwicmVtb3Zpbmcgc25pcHBldFwiLCBzbmlwcGV0LmlkLCBzbmlwcGV0LmVsZW1lbnQuaWQsIHRoaXMuZWxlbWVudC5pZCwgc25pcHBldC5zb3J0aW5nLnRvQmVSZW1vdmVkKTtcclxuICAgICAgICB0aGlzLnNuaXBwZXRzLnJlbW92ZShzbmlwcGV0KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLmZvcm0gPT0gc25pcHBldC5mb3JtKSB7XHJcbiAgICAgICAgLy8gbW92ZWRcclxuICAgICAgICB2YXIgaWR4ID0gPG51bWJlcj51aS5pdGVtWzBdLnJvd0luZGV4O1xyXG4gICAgICAgIHZhciBpZHhTdGFydCA9IHNuaXBwZXQuZm9ybS5pdGVtcy5pbmRleE9mKHNuaXBwZXQpO1xyXG4gICAgICAgIGlmIChpZHggIT0gaWR4U3RhcnQpIHtcclxuICAgICAgICAgIHNuaXBwZXQuZm9ybS5pdGVtcy5zcGxpY2UoaWR4U3RhcnQsIDEpO1xyXG4gICAgICAgICAgc25pcHBldC5mb3JtLml0ZW1zLnNwbGljZShpZHgsIDAsIHNuaXBwZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5yZWZyZXNoKCk7XHJcblxyXG4gICAgdGhpcy5lZGl0b3IudXBkYXRlVWlFbGVtZW50cygpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZWRpdG9yLnVwZGF0ZVVpRWxlbWVudHMoKTtcclxuICAgIH0sIDI1MCk7XHJcbiAgfVxyXG5cclxuICBvdXQgPSAoZXZlbnQsIHVpKSA9PiB7XHJcbiAgICBpZiAodGhpcy5yZWFkT25seSB8fCB1aS5pdGVtID09IG51bGwpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB2YXIgc25pcHBldDogSXRlbVZpZXdNb2RlbCA9IHVpLml0ZW0uZGF0YShcIml0ZW1cIik7XHJcbiAgICBpZiAoc25pcHBldCA9PSBudWxsKSB7XHJcbiAgICAgIGlmIChnX0RlYnVnTW9kZSkgY29uc29sZS5sb2coXCJvdXQgLSBtaXNzaW5nIHNuaXBwZXRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc25pcHBldC5zb3J0aW5nLnN0b3BwZWQpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICBpZiAoZ19EZWJ1Z01vZGUgJiYgIXNuaXBwZXQuc29ydGluZy50b0JlUmVtb3ZlZClcclxuICAgICAgY29uc29sZS5sb2coXCJvdXQgc25pcHBldFwiLCBzbmlwcGV0LmlkLCBzbmlwcGV0LmVsZW1lbnQuaWQsIHRoaXMuZWxlbWVudC5pZCwgc25pcHBldC5zb3J0aW5nLnRvQmVSZW1vdmVkKTtcclxuXHJcbiAgICBzbmlwcGV0LnNvcnRpbmcudG9CZVJlbW92ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb3ZlciA9IChldmVudCwgdWkpID0+IHtcclxuICAgIGlmICh0aGlzLnJlYWRPbmx5IHx8IHVpLml0ZW0gPT0gbnVsbClcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIC8vIFRPRE86IER5bmFtaWMgYWNjZXB0c0Zyb21cclxuXHJcbiAgICB2YXIgc25pcHBldDogSXRlbVZpZXdNb2RlbCA9IHVpLml0ZW0uZGF0YShcIml0ZW1cIik7XHJcbiAgICBpZiAoc25pcHBldCA9PSBudWxsKSB7XHJcbiAgICAgIGlmIChnX0RlYnVnTW9kZSkgY29uc29sZS5sb2coXCJvdmVyIC0gbWlzc2luZyBzbmlwcGV0XCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNuaXBwZXQuc29ydGluZy5zdG9wcGVkKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgaWYgKGdfRGVidWdNb2RlICYmIHNuaXBwZXQuc29ydGluZy50b0JlUmVtb3ZlZClcclxuICAgICAgY29uc29sZS5sb2coXCJpbiBzbmlwcGV0XCIsIHNuaXBwZXQuaWQsIHNuaXBwZXQuZWxlbWVudC5pZCwgdGhpcy5lbGVtZW50LmlkLCBzbmlwcGV0LnNvcnRpbmcudG9CZVJlbW92ZWQpO1xyXG5cclxuICAgIHNuaXBwZXQuc29ydGluZy50b0JlUmVtb3ZlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG4gIHJlbW92ZSA9IChldmVudCwgdWkpID0+IHtcclxuICAgIHZhciBzbmlwcGV0OiBJdGVtVmlld01vZGVsID0gdWkuaXRlbS5kYXRhKFwiaXRlbVwiKTtcclxuICAgIGlmIChzbmlwcGV0ID09IG51bGwpIHtcclxuICAgICAgaWYgKGdfRGVidWdNb2RlKSBjb25zb2xlLmxvZyhcInJlbW92ZSAtIG1pc3Npbmcgc25pcHBldFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChnX0RlYnVnTW9kZSkgY29uc29sZS5sb2coXCJyZW1vdmVcIiwgc25pcHBldC5pZCwgdGhpcy5lbGVtZW50LmlkLCB0aGlzLmVsZW1lbnQuaWQpO1xyXG5cclxuICAgIC8vIFRPRE86IGRvbid0IHJlbW92ZSBpZiBnb2luZyB0byBDb21tb24gVGFiXHJcbiAgICBpZiAoc25pcHBldC50YXJnZXRNb2RlKSB7XHJcbiAgICAgIHNuaXBwZXQuZm9ybS5pdGVtcy5yZW1vdmUoc25pcHBldCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmVjZWl2ZSA9IChldmVudCwgdWkpID0+IHtcclxuICAgIHZhciBzbmlwcGV0OiBJdGVtVmlld01vZGVsID0gdWkuaXRlbS5kYXRhKFwiaXRlbVwiKTtcclxuICAgIGlmIChzbmlwcGV0ID09IG51bGwpIHtcclxuICAgICAgaWYgKGdfRGVidWdNb2RlKSBjb25zb2xlLmxvZyhcInJlY2VpdmUgLSBtaXNzaW5nIHNuaXBwZXRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc25pcHBldC5pc1BsYWNlSG9sZGVyKSB7XHJcbiAgICAgICQodGhpcy5lbGVtZW50KS5zb3J0YWJsZShcImNhbmNlbFwiKTtcclxuICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ19EZWJ1Z01vZGUpIGNvbnNvbGUubG9nKFwicmVjZWl2ZVwiLCBzbmlwcGV0LmlkLCB0aGlzLmVsZW1lbnQuaWQsIHNuaXBwZXQuc29ydGluZy50b0JlUmVtb3ZlZCk7XHJcblxyXG4gICAgdmFyIGlkeCA9ICQoZXZlbnQudGFyZ2V0KS5jaGlsZHJlbigpLmluZGV4KHVpLml0ZW0pO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoXCJUT0RPOiBGaWd1cmUgb3V0IHJlY2VpdmUgZm9yXCIsIHNuaXBwZXQpO1xyXG4gICAgLyogVE9ETyAtIGZpZ3VyZSBvdXQgcmVjZWl2ZVxyXG4gICAgdmFyIG5ld1NuaXBwZXQgPSBzbmlwcGV0LmNsb25lKHRoaXMuZm9ybSk7XHJcbiAgICBpZiAoaWR4ICE9IC0xKSB7XHJcbiAgICAgIHRoaXMuc25pcHBldHMuaW5zZXJ0KGlkeCwgbmV3U25pcHBldCk7XHJcbiAgICB9XHJcbiAgICAqL1xyXG5cclxuICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaCA9ICgpID0+IHtcclxuICAgIC8vIERvbid0IHVzZSAucmVtb3ZlKCkgYi9jIGl0IGtpbGxzIHRoZSAuZGF0YSBmb3IgdGhlIGVsZW1lbnRzIHRvb1xyXG4gICAgLy8gJCh0aGlzLmVsZW1lbnQpLmNoaWxkcmVuKCkucmVtb3ZlKCk7XHJcbiAgICB3aGlsZSAodGhpcy5lbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudC5jaGlsZHJlblswXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNhdmUgPSBbXTtcclxuICAgIHZhciBwbGFjZUhvbGRlciA9IG51bGw7XHJcbiAgICBfLmZvckVhY2godGhpcy5zbmlwcGV0cywgKHNuaXBwZXQpID0+IHtcclxuICAgICAgaWYgKHNuaXBwZXQuaXNQbGFjZUhvbGRlcilcclxuICAgICAgICBwbGFjZUhvbGRlciA9IHNuaXBwZXQ7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBzYXZlLnB1c2goc25pcHBldCk7XHJcbiAgICB9KTtcclxuICAgIGlmIChwbGFjZUhvbGRlciAhPSBudWxsKVxyXG4gICAgICBzYXZlLnB1c2gocGxhY2VIb2xkZXIpO1xyXG5cclxuICAgIC8vIFRPRE86IHN1YnNjcmlwdGlvbnNcclxuICAgIC8vdGhpcy5mb3JtLnN1YnNjcmlwdGlvbnMuZGlzcG9zZUFsbCgpO1xyXG4gICAgdGhpcy5zbmlwcGV0cy5sZW5ndGggPSAwO1xyXG5cclxuICAgIF8uZm9yRWFjaChzYXZlLCAoc25pcHBldCkgPT4ge1xyXG4gICAgICB0aGlzLnNuaXBwZXRzLnB1c2goc25pcHBldCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1RPRE86IHN1YnNjcmliZVxyXG4gICAgLy90aGlzLmZvcm0uc3Vic2NyaWJlKCk7XHJcblxyXG4gICAgJCh0aGlzLmVsZW1lbnQpLnNvcnRhYmxlKFwicmVmcmVzaFwiKTtcclxuXHJcbiAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==