define(["require", "exports"], function (require, exports) {
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .eventAggregator()
            .plugin('aurelia-animator-css');
        aurelia.start().then(function (a) { return a.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2FuaW1hdGlvbi1tYWluLnRzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZSJdLCJtYXBwaW5ncyI6IjtJQUFBLG1CQUEwQixPQUFPO1FBQy9CQSxPQUFPQSxDQUFDQSxHQUFHQTthQUNSQSxxQkFBcUJBLEVBQUVBO2FBRXZCQSxlQUFlQSxFQUFFQTthQUNqQkEsTUFBTUEsQ0FBQ0Esc0JBQXNCQSxDQUFDQSxDQUFDQTtRQUVsQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQUEsQ0FBQ0EsSUFBSUEsT0FBQUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsRUFBRUEsRUFBWEEsQ0FBV0EsQ0FBQ0EsQ0FBQ0E7SUFDekNBLENBQUNBO0lBUmUsaUJBQVMsWUFReEIsQ0FBQSIsImZpbGUiOiJ2aWV3cy9hbmltYXRpb24tbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC8vLmRldmVsb3BtZW50TG9nZ2luZygpXG4gICAgLmV2ZW50QWdncmVnYXRvcigpXG4gICAgLnBsdWdpbignYXVyZWxpYS1hbmltYXRvci1jc3MnKTtcblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbihhID0+IGEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==