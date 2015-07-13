import { computedFrom, bindable } from 'aurelia-framework';
import { Utility } from './common/utility';
import { ItemType, ItemViewModel } from './itemViewModel';
import { SnippetForm } from './snippet-form';
import { Snippet } from './snippet';
import { ComponentForm } from './component-form';
import { Component } from './component';
import { Header } from './header';
import { Tabs } from './tabs';

declare var g_Editor;

enum FormEditorType {
    None,
    Target,
    Common,
    Generic,
}

interface FormEditorData {
    url: string;
    form: FormEditor;
    type: FormEditorType;
}

export class FormEditor extends ItemViewModel {

    connectWith: string = null;
    url: string = null;
    target = {
        url: "views/psp/data/test.json",
        model: null,
        item: <SnippetForm> null,
    };
    tabs = {
        url: "views/psp/data/tabs.json",
        model: null,
        item: <Tabs> null,
    };

    template: SnippetForm = null;
    commonTab: SnippetForm = null;

    constructor(app, eventAggregator, utility) {
        super(app, eventAggregator, utility);
        this.itemType = ItemType.TemplateEditor;
        this.itemTypeName = ItemType[this.itemType];
        this.app.editor = this;

        g_Editor = this;
        var self = this;
        this.eventAggregator.subscribe("Snippet-bind", item => { this.onSnippetBind(item); });
        this.eventAggregator.subscribe("Component-bind", item => { this.onComponentBind(item); });
        this.eventAggregator.subscribe("SnippetForm-bind", item => { this.onSnippetFormBind(item); });
        this.eventAggregator.subscribe("ComponentForm-bind", item => { this.onComponentFormBind(item); });
        this.eventAggregator.subscribe("Header-bind", item => { this.onHeaderBind(item); });
    }

    activate(params, queryParams, config) {
        console.log("activate", params, queryParams);
        //TODO: get model from data, download data
        var self = this;

        this.utility.loadUrl(this.target.url).then(function (model) {
            model.targetMode = true;
            self.target.model = model;
        });

        this.utility.loadAllTabs(this.tabs.url).then(function (model) {
            self.tabs.model = model;
        });

        var $sortables = $(".sortable");
        if ($sortables.sortable) {
            console.log("Apply sortables");
            $sortables.sortable();
        }
    }

    updateUiElements() {
        console.error("TODO updateUiElements");
    }

    resizeCoverUp(elem: HTMLElement) {
        // just make the inputs read only
        // TODO: Remove on render
        //console.log("resizeCoverUp", elem);
        $(".control-component input").prop('readonly', true);
        $(".control-component :checkbox").prop('readonly', true);
        $(".control-component input").addClass("input-cover-up");
        $(".control-component :checkbox").addClass("input-cover-up");
        $(".control-component span.name").addClass("input-cover-up");
        return; // TODO:

        var $elem = $(elem);
        var item = <ItemViewModel> $elem.data("itemViewModel");
        if (!item) {
            console.error("missing itemViewModel", elem);
            return;
        }

        var container = item.element;
        if (!container) {
            console.error("missing itemViewModel element", elem);
            return;
        }

        var $container = $(container);
        var position = $container.offset();

        $elem.offset({ left: position.left, top: position.top, });
        $elem.width($container.width());
        $elem.height($container.height());

        //console.log("resizeCoverUp", position.left, position.top, $container.width(), $container.height(), item.element, elem);
    }

    resizeCoverUps() {
        var self = this;
        $(".cover-up").each((idx, elem: HTMLElement) => {
            self.resizeCoverUp(elem);
        });
    }

    resizeItemCoverUp(item: ItemViewModel) {
        return;
        if (!item.coverUp)
            return;

        var self = this;
        setTimeout(function () {
            self.resizeCoverUp(item.coverUp);
        }, 0);
    }

    onSnippetFormBind(item: SnippetForm) {
        //console.log("onSnippetFormBind", item);

        if (item.model.targetMode) {
            this.target.item = item;
        }

        $(".sortable").sortable();

        this.resizeCoverUps();
    }

    onSnippetBind(item: Snippet) {
        //console.log("onSnippetBind", item);
        this.resizeItemCoverUp(item);
    }

    onComponentFormBind(item: ComponentForm) {
        //console.log("onComponentFormBind", item);
        $(".sortable").sortable();
        this.resizeCoverUps();
    }

    onComponentBind(item: Component) {
        //console.log("onComponentBind", component, component.element);
        this.resizeItemCoverUp(item);
    }

    onHeaderBind(item: Header) {
        this.resizeItemCoverUp(item);
    }
}
