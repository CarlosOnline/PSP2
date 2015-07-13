import { computedFrom, bindable } from 'aurelia-framework';
import {Router} from 'aurelia-router';
import { Utility } from './views/common/utility';
import { ItemViewModel } from './views/itemViewModel';
import { FormEditor } from './views/formEditor';
import { SnippetForm } from './views/snippet-form';
///<reference path="../typings/jquery/jquery.d.ts" />

declare var g_App;

export class App {
    router: Router;
    debugMode = false;
    editor: FormEditor = null;
    @bindable model = null;

    constructor() {
        g_App = this;
    }

    configureRouter(config, router: Router) {
        config.title = 'Aurelia';
        config.map([
            { route: ['abc', 'welcome'], moduleId: './welcome', nav: true, title: 'Welcome' },
            { route: ['', 'Editor'], moduleId: './psp/formEditor', nav: true, title: 'Template Editor' }, // TODO: downloaded data from database
        ]);

        this.router = router;
    }
}
