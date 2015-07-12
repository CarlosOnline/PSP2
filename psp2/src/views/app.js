var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    ///<reference path="../typings/jquery/jquery.d.ts" />
    var App = (function () {
        function App() {
            this.debugMode = false;
            this.editor = null;
            this.model = null;
            g_App = this;
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Aurelia';
            config.map([
                { route: ['abc', 'welcome'], moduleId: './welcome', nav: true, title: 'Welcome' },
                { route: ['', 'Editor'], moduleId: './psp/formEditor', nav: true, title: 'Template Editor' },
            ]);
            this.router = router;
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], App.prototype, "model");
        return App;
    })();
    exports.App = App;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2FwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiLCJBcHAuY29uZmlndXJlUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQSxBQUVBLHFEQUZxRDtJQUlyRDtRQU1FQTtZQUpBQyxjQUFTQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUNsQkEsV0FBTUEsR0FBZUEsSUFBSUEsQ0FBQ0E7WUFDaEJBLFVBQUtBLEdBQUdBLElBQUlBLENBQUNBO1lBR3JCQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNmQSxDQUFDQTtRQUVERCw2QkFBZUEsR0FBZkEsVUFBZ0JBLE1BQU1BLEVBQUVBLE1BQWNBO1lBQ3BDRSxNQUFNQSxDQUFDQSxLQUFLQSxHQUFHQSxTQUFTQSxDQUFDQTtZQUN6QkEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7Z0JBQ1RBLEVBQUVBLEtBQUtBLEVBQUVBLENBQUNBLEtBQUtBLEVBQUVBLFNBQVNBLENBQUNBLEVBQUVBLFFBQVFBLEVBQUVBLFdBQVdBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLFNBQVNBLEVBQUVBO2dCQUNqRkEsRUFBRUEsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsUUFBUUEsQ0FBQ0EsRUFBRUEsUUFBUUEsRUFBRUEsa0JBQWtCQSxFQUFFQSxHQUFHQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxpQkFBaUJBLEVBQUVBO2FBQzdGQSxDQUFDQSxDQUFDQTtZQUVIQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQTtRQUN2QkEsQ0FBQ0E7UUFkREY7WUFBQ0EsNEJBQVFBOztXQUFDQSxzQkFBS0EsRUFBUUE7UUFlekJBLFVBQUNBO0lBQURBLENBbkJBLEFBbUJDQSxJQUFBO0lBbkJZLFdBQUcsTUFtQmYsQ0FBQSIsImZpbGUiOiJ2aWV3cy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wdXRlZEZyb20sIGJpbmRhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5pbXBvcnQgeyBVdGlsaXR5IH0gZnJvbSAnLi9wc3AvY29tbW9uL3V0aWxpdHknO1xyXG5pbXBvcnQgeyBJdGVtVmlld01vZGVsIH0gZnJvbSAnLi9wc3AvaXRlbVZpZXdNb2RlbCc7XHJcbmltcG9ydCB7IEZvcm1FZGl0b3IgfSBmcm9tICcuL3BzcC9mb3JtRWRpdG9yJztcclxuaW1wb3J0IHsgU25pcHBldEZvcm0gfSBmcm9tICcuL3BzcC9zbmlwcGV0LWZvcm0nO1xyXG4vLy88cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2pxdWVyeS9qcXVlcnkuZC50c1wiIC8+XHJcblxyXG5kZWNsYXJlIHZhciBnX0FwcDtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG4gIHJvdXRlcjogUm91dGVyO1xyXG4gIGRlYnVnTW9kZSA9IGZhbHNlO1xyXG4gIGVkaXRvcjogRm9ybUVkaXRvciA9IG51bGw7XHJcbiAgQGJpbmRhYmxlIG1vZGVsID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBnX0FwcCA9IHRoaXM7XHJcbiAgfVxyXG5cclxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgY29uZmlnLnRpdGxlID0gJ0F1cmVsaWEnO1xyXG4gICAgY29uZmlnLm1hcChbXHJcbiAgICAgIHsgcm91dGU6IFsnYWJjJywgJ3dlbGNvbWUnXSwgbW9kdWxlSWQ6ICcuL3dlbGNvbWUnLCBuYXY6IHRydWUsIHRpdGxlOiAnV2VsY29tZScgfSxcclxuICAgICAgeyByb3V0ZTogWycnLCAnRWRpdG9yJ10sIG1vZHVsZUlkOiAnLi9wc3AvZm9ybUVkaXRvcicsIG5hdjogdHJ1ZSwgdGl0bGU6ICdUZW1wbGF0ZSBFZGl0b3InIH0sIC8vIFRPRE86IGRvd25sb2FkZWQgZGF0YSBmcm9tIGRhdGFiYXNlXHJcbiAgICBdKTtcclxuXHJcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9