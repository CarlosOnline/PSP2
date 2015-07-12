import { computedFrom, bindable } from 'aurelia-framework';
import { App } from './../app';
import { ItemViewModel } from './itemViewModel';
import { Utility } from './common/utility';
import { SortableViewModel } from './common/sortable';

export enum FormType {
  None,
  Snippet,
  Component,
};

export class FormViewModel extends ItemViewModel {
  static inject = [App, Utility];

  @bindable
  formType = FormType.None;
  formTypeName = FormType[FormType.None];
  sort: SortableViewModel = null;

  constructor(app, eventAggregator, utility) {
    super(app, eventAggregator, utility);
    this.sort = new SortableViewModel(this);
  }

  bind(context) {
    super.bind(context);

    if (!this.formType && context.formType)
      this.formType = context.formType;
  }

  addItem(item: ItemViewModel) {
    super.addItem(item);
    item.form = this;
  }
}
