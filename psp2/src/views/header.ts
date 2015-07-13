import { computedFrom, bindable } from 'aurelia-framework';
import { ItemType, ItemViewModel } from './itemViewModel';
import { ComponentForm } from './component-form';

export class Header extends ItemViewModel {

    @bindable model: ItemViewModel = null;
    @bindable parent: ItemViewModel = null;
    @bindable element: HTMLElement = null;
    @bindable coverUp: HTMLElement = null;

    constructor(app, eventAggregator, utility) {
        super(app, eventAggregator, utility);
        this.itemType = ItemType.Header;
        this.itemTypeName = ItemType[this.itemType];
    }

    activate() {
        console.log("header activate");
    }
}
