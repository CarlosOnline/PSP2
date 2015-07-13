import { computedFrom, bindable } from 'aurelia-framework';
import { ItemType, ItemViewModel } from './itemViewModel';

export class Component extends ItemViewModel {

  @bindable model: ItemViewModel = null;
  @bindable parent: ItemViewModel = null;
  @bindable element: HTMLElement = null;
  @bindable coverUp: HTMLElement = null;
  @bindable snippet = null;

  constructor(app, eventAggregator, utility) {
    super(app, eventAggregator, utility);
    this.itemType = ItemType.Component;
    this.itemTypeName = ItemType[this.itemType];
  }
  
  getViewStrategy() {
    console.log("component getViewStrategy", "/views/psp/components/" + this.model.url);
    return "/views/psp/components/" + this.model.url;
  }
}
