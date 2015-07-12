define(["require", "exports"], function (require, exports) {
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging();
        aurelia.start().then(function (a) { return a.setRoot('views/app'); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL21haW4udHMiXSwibmFtZXMiOlsiY29uZmlndXJlIl0sIm1hcHBpbmdzIjoiO0lBQUEsbUJBQTBCLE9BQU87UUFDL0JBLE9BQU9BLENBQUNBLEdBQUdBO2FBQ1JBLHFCQUFxQkEsRUFBRUE7YUFDdkJBLGtCQUFrQkEsRUFBRUEsQ0FBQ0E7UUFFeEJBLE9BQU9BLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLFVBQUFBLENBQUNBLElBQUlBLE9BQUFBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLFdBQVdBLENBQUNBLEVBQXRCQSxDQUFzQkEsQ0FBQ0EsQ0FBQ0E7SUFDcERBLENBQUNBO0lBTmUsaUJBQVMsWUFNeEIsQ0FBQSIsImZpbGUiOiJ2aWV3cy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhKSB7XG4gIGF1cmVsaWEudXNlXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgLmRldmVsb3BtZW50TG9nZ2luZygpO1xuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKGEgPT4gYS5zZXRSb290KCd2aWV3cy9hcHAnKSk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=