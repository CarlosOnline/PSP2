import { computedFrom, bindable } from 'aurelia-framework';
import { Utility } from './utility';
import { App } from './../../app';
import { ItemType, ItemViewModel } from './../itemViewModel';
import { FormType, FormViewModel } from './../formViewModel';
import { FormEditor } from './../formEditor';
import { SnippetForm } from './../snippet-form';
import { Snippet } from './../snippet';
import { ComponentForm } from './../component-form';
import { Component } from './../component';

var g_DebugMode = false;
declare var g_formWidth: number;

export class SortableViewModel {

  form: FormViewModel = null;

  constructor(form: FormViewModel) {
    this.form = form;
  }

  @computedFrom('form')
  get editor(): FormEditor {
    return this.form.editor;
  }

  get targetMode(): boolean {
    return this.form.targetMode;
  }

  get commonTab(): SnippetForm {
    return this.editor.commonTab;
  }

  get readOnly(): boolean {
    return this.form.readOnly;
  }

  get snippets(): ItemViewModel[] {
    return this.form.items;
  }

  get element(): HTMLElement {
    return this.form.element;
  }

  start = (event, ui) => {
    $(".popover").remove();

    var snippet: ItemViewModel = ui.item.data("item");
    if (snippet == null) {
      if (g_DebugMode) console.log("start - missing snippet");
      return;
    }

    if (snippet.model.title == "Null") {
      return;
    }

    snippet.sorting.toBeRemoved = false;

    if (g_DebugMode) console.log("start", snippet.id, this.element.id, $(this.element).sortable("option", "connectWith"));
    $(snippet.connectWith).addClass("snippet-sort-connectWith")

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

  stop = (event, ui) => {
    var snippet: ItemViewModel = ui.item.data("item");
    if (snippet == null) {
      if (g_DebugMode) console.log("stop - missing snippet");
      return;
    }
    snippet.sorting.stopped = true;

    $(snippet.connectWith).removeClass("snippet-sort-connectWith")
    if (g_DebugMode) console.log("stop", snippet.id, this.element.id, snippet.sorting.toBeRemoved);

    if (snippet.isPlaceHolder) {
      $(this.element).sortable("cancel");
    }
    else if (this.commonTab) {
      if (snippet.sorting.toBeRemoved) {
        if (g_DebugMode) console.log("removing snippet", snippet.id, snippet.element.id, this.element.id, snippet.sorting.toBeRemoved);
        var idx = this.snippets.indexOf(snippet);
        this.snippets.remove(snippet);
      }
    }
    else if (this.targetMode) {
      if (snippet.sorting.toBeRemoved) {
        if (g_DebugMode) console.log("removing snippet", snippet.id, snippet.element.id, this.element.id, snippet.sorting.toBeRemoved);
        this.snippets.remove(snippet);
      }
      else if (this.form == snippet.form) {
        // moved
        var idx = <number>ui.item[0].rowIndex;
        var idxStart = snippet.form.items.indexOf(snippet);
        if (idx != idxStart) {
          snippet.form.items.splice(idxStart, 1);
          snippet.form.items.splice(idx, 0, snippet);
        }
      }
    }
    this.refresh();

    this.editor.updateUiElements();
    setTimeout(() => {
      this.editor.updateUiElements();
    }, 250);
  }

  out = (event, ui) => {
    if (this.readOnly || ui.item == null)
      return;

    var snippet: ItemViewModel = ui.item.data("item");
    if (snippet == null) {
      if (g_DebugMode) console.log("out - missing snippet");
      return;
    }

    if (snippet.sorting.stopped)
      return;

    if (g_DebugMode && !snippet.sorting.toBeRemoved)
      console.log("out snippet", snippet.id, snippet.element.id, this.element.id, snippet.sorting.toBeRemoved);

    snippet.sorting.toBeRemoved = true;
  }

  over = (event, ui) => {
    if (this.readOnly || ui.item == null)
      return;

    // TODO: Dynamic acceptsFrom

    var snippet: ItemViewModel = ui.item.data("item");
    if (snippet == null) {
      if (g_DebugMode) console.log("over - missing snippet");
      return;
    }

    if (snippet.sorting.stopped)
      return;

    if (g_DebugMode && snippet.sorting.toBeRemoved)
      console.log("in snippet", snippet.id, snippet.element.id, this.element.id, snippet.sorting.toBeRemoved);

    snippet.sorting.toBeRemoved = false;
  }


  remove = (event, ui) => {
    var snippet: ItemViewModel = ui.item.data("item");
    if (snippet == null) {
      if (g_DebugMode) console.log("remove - missing snippet");
      return;
    }

    if (g_DebugMode) console.log("remove", snippet.id, this.element.id, this.element.id);

    // TODO: don't remove if going to Common Tab
    if (snippet.targetMode) {
      snippet.form.items.remove(snippet);
    }

    this.refresh();
  }


  receive = (event, ui) => {
    var snippet: ItemViewModel = ui.item.data("item");
    if (snippet == null) {
      if (g_DebugMode) console.log("receive - missing snippet");
      return;
    }

    if (snippet.isPlaceHolder) {
      $(this.element).sortable("cancel");
      this.refresh();
      return;
    }

    if (g_DebugMode) console.log("receive", snippet.id, this.element.id, snippet.sorting.toBeRemoved);

    var idx = $(event.target).children().index(ui.item);

    console.error("TODO: Figure out receive for", snippet);
    /* TODO - figure out receive
    var newSnippet = snippet.clone(this.form);
    if (idx != -1) {
      this.snippets.insert(idx, newSnippet);
    }
    */

    this.refresh();
  }

  refresh = () => {
    // Don't use .remove() b/c it kills the .data for the elements too
    // $(this.element).children().remove();
    while (this.element.children.length > 0) {
      this.element.removeChild(this.element.children[0]);
    }

    var save = [];
    var placeHolder = null;
    _.forEach(this.snippets, (snippet) => {
      if (snippet.isPlaceHolder)
        placeHolder = snippet;
      else
        save.push(snippet);
    });
    if (placeHolder != null)
      save.push(placeHolder);

    // TODO: subscriptions
    //this.form.subscriptions.disposeAll();
    this.snippets.length = 0;

    _.forEach(save, (snippet) => {
      this.snippets.push(snippet);
    });

    //TODO: subscribe
    //this.form.subscribe();

    $(this.element).sortable("refresh");

  }

}