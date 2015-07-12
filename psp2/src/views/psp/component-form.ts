import { computedFrom, bindable } from 'aurelia-framework';
import { ItemType, ItemViewModel } from './itemViewModel';
import { Component } from './component';
import { SortableViewModel } from './common/sortable';

export class ComponentForm extends ItemViewModel {

  sort: SortableViewModel = null;

  constructor(app, eventAggregator, utility) {
    super(app, eventAggregator, utility);
    this.itemType = ItemType.ComponentForm;
    this.itemTypeName = ItemType[this.itemType];
  }
  
  @computedFrom('items')
  get components() {
    return <Array<Component>> <any> this.items;
  }

  bind(context) {
    super.bind(context);
  }

}
