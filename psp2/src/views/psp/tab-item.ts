import { computedFrom, bindable } from 'aurelia-framework';
import { Utility } from './common/utility';
import { ItemType, ItemViewModel } from './itemViewModel';
import { Snippet } from './snippet';
import { Tabs } from './tabs';

export class TabItem extends ItemViewModel {

  @bindable model: any = null;
  @bindable parent: ItemViewModel = null;
  @bindable element: HTMLElement = null;
  @bindable coverUp: HTMLElement = null;

  tabs: Tabs = null;

  constructor(app, eventAggregator, utility) {
    super(app, eventAggregator, utility);
    this.itemType = ItemType.TabItem;
    this.itemTypeName = ItemType[this.itemType];
  }

  bind(context) {
    super.bind(context);
    this.tabs = <Tabs> this.parent;

    if (this.index == 0)
      this.tabs.setActiveTab(this);

  /*
    console.log("tab-item", this.model, this.parent);

    var self = this;
    Object.observe(this, function (changes) {

      // This asynchronous callback runs
      changes.forEach(function (change) {

        // Letting us know what changed
        console.log(change.type, change.name, change.oldValue, this);

        if (change.name == "active") {
          console.log("active", self.active, self.element);
          if (self.element && false) {
            self.element.className.replace(" active ", "");
            if (self.active)
              self.element.className += " active ";
          }
        }
      });

    });

  */
  }

}