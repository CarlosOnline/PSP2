import { BaseUtility } from './../../misc/utility';
import { App } from './../../app';
import { ItemType, ItemViewModel } from './../itemViewModel';
import { Snippet } from './../snippet';
import { ComponentForm } from './../component-form';
import { Component } from './../component';

// TODO: Switch to Utility versions
export class Utility extends BaseUtility {

  static findSnippet($elem: JQuery): Snippet {
    var parent;
    do {
      var snippet = $elem.data("item");
      if (snippet != null)
        return snippet;

      $elem = $elem.parent();
      if ($elem[0] == null)
        return null;

      parent = $elem.parent("tr");
    } while (parent);
    return null;
  }

  static findSnippetFromElement(elem: HTMLElement) {
    var parent = $(elem);
    while (parent != null) {
      var snippet = parent.data("item");
      if (snippet != null)
        return snippet;

      parent = Utility.findParent(parent, "tr");
    }
  }
}

function findSnippet($elem: JQuery): Snippet {
  var parent;
  do {
    var snippet = $elem.data("item");
    if (snippet != null)
      return snippet;

    $elem = $elem.parent();
    if ($elem[0] == null)
      return null;

    parent = $elem.parent("tr");
  } while (parent);
  return null;
}

function findSnippetFromElement(elem: HTMLElement) {
  var parent = $(elem);
  while (parent != null) {
    var snippet = parent.data("item");
    if (snippet != null)
      return snippet;

    parent = Utility.findParent(parent, "tr");
  }
}
