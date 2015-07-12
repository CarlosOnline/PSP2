import { HttpClient } from 'aurelia-http-client';

export class BaseUtility {
  static inject = [HttpClient];

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  loadUrl(url: string) {
    var self = this;

    return this.http.get(url).then(response => {
      var model = response.content;
      return this.loadReference(model);
    });
  }

  loadReference(model) {
    return new Promise((resolve, reject) => {

      if (!model || !model.reference || model.url) {
        resolve(model);
        return;
      }

      this.http.get('/views/psp/data/' + model.reference).then(response => {
        var data = <Array<any>> response.content;
        var found = data.find((item) => item.title == model.title);
        if (!found) {
          console.error('missing component ' + model.reference + "!" + model.title);
          reject('missing component ' + model.reference + "!" + model.title);
        }

        if (found.hidden) {
          resolve(null);
        }

        Object.assign(model, found);
        resolve(model);
      });
    });
  }

  loadTabUrl(url: string, index: number, tabModel: any) {
    var self = this;
    return this.http.get(url).then(response => {
      var model = response.content;
      return model.hidden ? null : model;
    })
    .then(model => {
      if (model == null)
        return null;

      var models = <Array<any>> model;
      models = models.filter(item => {
        return !item.hidden;
      });

      return self.loadReference(model).then(response => {
        var model: any = response;
        if (model.hidden)
          return null;
        model.index = index;

        var models = <Array<any>> model;
        models = models.filter(item => {
          return !item.hidden;
        });

        tabModel.tabs = models;
        return tabModel;
      });
    });
  }

  loadAllTabs(url) {
    //console.log("loadAllTabs", url);

    var self = this;

    // load tabs.json
    return this.http.get(url).then(response => {
      var data = response.content;
      var promises = [];

      for (let idx = 0; idx < data.length; idx++) {
        let model = data[idx];
        if (model.hidden)
          continue;

        // load test.json
        let url = "./views/psp/data/" + model.json;
        promises.push(self.loadTabUrl(url, idx, model));
      };

      return Promise.all(promises).then(results => {
        let models = [];
        for (var result of results) {
          if (result && !result.hidden)
            models.push(result);
        }

        models.sort((left, right) => {
          if (left.index == right.index)
            return 0;
          return (left.index < right.index) ? -1 : 1;
        });

        return models;
      });
    });
  }

  static findParent($elem: JQuery, selector: string) {
    var parent = $elem.parent(selector);
    while (parent && parent[0] == null) {
      $elem = $elem.parent();
      if ($elem[0] == null)
        return null;

      parent = $elem.parent(selector);
    }
    return parent;
  }
}

module Extensions {
  export module ArrayExt {
    export function insert(index, item) {
      this.splice(index, 0, item);
    };

    export function removeAll<T>(thisArg?: Array<T>) {
      thisArg = thisArg || this;
      while (thisArg.length > 0)
        thisArg.pop();
    }

    // TODO: Fix?
    export function remove<T>(elem: T, thisArg?: Array<T>): Array<T> {
      thisArg = thisArg || this;
      var idx = thisArg.indexOf(elem);
      if (idx >= 0 && idx < thisArg.length)
        return thisArg.slice(idx, 1);
      return null;
    }

    export function indexOf<T>(elem: T, thisArg?: Array<T>) {
      thisArg = thisArg || this;
      var idx = thisArg.indexOf(elem);
      return idx;
    }

    //Array.prototype.insert = ArrayExt.insert;
    //Array.prototype.first = ArrayExt.first;
    Array.prototype.remove = ArrayExt.remove;
    //Array.prototype.removeAll = ArrayExt.removeAll;
  }

  export module StringExt {
    export function hashCode() {
      var hash = 0, i, chr, len;
      if (this.length == 0) return hash;
      for (i = 0, len = this.length; i < len; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
      }
      return hash;
    };
  }
}

