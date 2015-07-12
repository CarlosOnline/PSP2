import { computedFrom, bindable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { App } from './../app';
import { FormEditor } from './formEditor';
import { FormViewModel } from './formViewModel';
import { Utility } from './common/utility';

export enum ItemType {
  None,
  TemplateEditor,
  SnippetForm,
  Snippet,
  ComponentForm,
  Component,
  Header,
  Tabs,
  TabItem,
};

export class ItemViewModel {
  static inject = [App, EventAggregator, Utility];

  itemType = ItemType.None;
  itemTypeName = ItemType[ItemType.None];
  app: App = null;
  eventAggregator: EventAggregator = null;
  editor: FormEditor = null;
  @bindable parent: ItemViewModel = null;
  form: FormViewModel = null;
  context = null;
  index = 0;
  utility: Utility = null;
  baseUrl: string = null;

  connectWith: string;
  isPlaceHolder: boolean;
  sorting: {
    stopped: boolean;
    toBeRemoved: boolean;
    received: boolean;
    idxStart: number;
  };

  @bindable model = null;
  @bindable element: HTMLElement = null;
  @bindable coverUp: HTMLElement = null;
  items: Array<ItemViewModel> = [];
  url: string = null;
  targetMode = false;
  readOnly = false;

  constructor(app: App, eventAggregator: EventAggregator, utility: Utility) {
    //console.log("itemViewModel", (<any>this).__proto__);
    this.app = app;
    this.editor = this.app.editor;
    this.eventAggregator = eventAggregator;
    //this.editor = editor;
    this.utility = utility;
  }

  bind(context) {
    //console.log((<any>this).__proto__, "bind", context);
    if (this.itemType == ItemType.SnippetForm)
      console.log((<any>this).__proto__, "bind", context);

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
      console.error(this.itemTypeName, "missing bound model", (<any>this).__proto__, context);

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
        console.error(this.itemTypeName, "bind non model", this.model, (<any>this).__proto__);
      }

      //console.log("itemViewModel", "bind", (<any>this).__proto__, this.model);

      if (this.parent) {
        var self = this;
        this.utility.loadReference(this.model).then((model: any) => {
          Object.assign(self.model, model);
          //console.log((<any>this).__proto__, "bind-load", model.title, model, this.model);

          if (self.parent && self.parent.items) {
            self.parent.addItem(self);
          }
        });
      }
    }

    this.eventAggregator.publish(this.itemTypeName + "-bind", this);
  }

  @computedFrom('model')
  get fields() {
    return this.model.fields;
  }

  @computedFrom('element')
  get id() {
    return this.element ? this.element.id : null;
  }

  get debugMode() {
    return this.app && this.app.debugMode;
  }

  addItem(item: ItemViewModel) {
    var found = this.items.find((cur) => cur.index == item.index);
    if (found) {
      var idx = this.items.indexOf(found);
      if (idx != -1)
        this.items.splice(idx, 1);
    }

    this.items.push(item);
    this.items.sort((left, right) => {
      if (left.index == right.index)
        return 0;
      return (left.index < right.index) ? -1 : 1;
    });
  }

}
