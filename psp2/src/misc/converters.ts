import {inject, customAttribute} from 'aurelia-framework';

export class StringifyValueConverter {
  toView(obj) {
    try {
      return JSON.stringify(obj, null, 3);
    } catch(ex) {
      console.error("Stringify", obj, ex);
    }
  }
}

export class StringifyShortValueConverter {
  toView(obj) {
    try {
      return JSON.stringify(obj, null, 3).substring(0, 200);
    } catch (ex) {
      console.error("Stringify", obj, ex);
    }
  }
}
