import { computedFrom, bindable } from 'aurelia-framework';
import { Utility } from './common/utility';
import { ItemType, ItemViewModel } from './itemViewModel';
import { Snippet } from './snippet';

export class SnippetForm extends ItemViewModel {

  connectWith: string = null;
  url: string = null;
  @bindable model: ItemViewModel = null;
  @bindable parent: ItemViewModel = null;
  @bindable element: HTMLElement = null;
  @bindable coverUp: HTMLElement = null;

  constructor(app, eventAggregator, utility) {
    super(app, eventAggregator, utility);
    this.itemType = ItemType.SnippetForm;
    this.itemTypeName = ItemType[this.itemType];
  }

  @computedFrom('items')
  get snippets() {
    return <Array<Snippet>> <any> this.items;
  }

  dumpElements = (label: string) => {
    if (this.targetMode) {
      var children = $(this.element).children();
      console.log(label);
      _.each(children, function (child) {
        console.log(child.id);
      });
    }
  };

  dumpSnippets = (label: string) => {
    if (this.targetMode) {
      console.log(label);
      _.each(this.items, function (child) {
        console.log(child.id);
      });
    }
  };
}
