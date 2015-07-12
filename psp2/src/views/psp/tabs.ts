import { computedFrom, bindable } from 'aurelia-framework';
import { Utility } from './common/utility';
import { ItemType, ItemViewModel } from './itemViewModel';
import { Snippet } from './snippet';
import { TabItem } from './tab-item';

export class Tabs extends ItemViewModel {

  @bindable model: Array<any> = null;
  @bindable parent: ItemViewModel = null;
  @bindable tabs = null;
  connectWith: string = null;
  url: string = null;
  commonTab = false;
  tabMode = false;
  activeTab: TabItem = null;

  constructor(app, eventAggregator, utility) {
    super(app, eventAggregator, utility);
    this.itemType = ItemType.Tabs;
    this.itemTypeName = ItemType[this.itemType];
  }

  @computedFrom('items')
  get snippets() {
    return <Array<Snippet>> <any> this.items;
  }

  bind(context: any) {
    super.bind(context);
  }

  tabClick = (event: any, index: number) => {
    if (index < this.items.length) {
      let tab = <TabItem> this.items[index];
      this.setActiveTab(tab);
    }
    else
      console.error("Invalid tab index", index, event);
  }

  setActiveTab(tab: TabItem) {
    if (this.activeTab == tab)
      return;

    if (this.activeTab) {
      this.activeTab.model.active = false;
    }

    if (tab) {
      this.activeTab = tab;
      this.activeTab.model.active = true;
      this.editor.resizeCoverUps();
    }
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
