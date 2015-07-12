define(["require", "exports"], function (require, exports) {
    var StringifyValueConverter = (function () {
        function StringifyValueConverter() {
        }
        StringifyValueConverter.prototype.toView = function (obj) {
            try {
                return JSON.stringify(obj, null, 3);
            }
            catch (ex) {
                console.error("Stringify", obj, ex);
            }
        };
        return StringifyValueConverter;
    })();
    exports.StringifyValueConverter = StringifyValueConverter;
    var StringifyShortValueConverter = (function () {
        function StringifyShortValueConverter() {
        }
        StringifyShortValueConverter.prototype.toView = function (obj) {
            try {
                return JSON.stringify(obj, null, 3).substring(0, 200);
            }
            catch (ex) {
                console.error("Stringify", obj, ex);
            }
        };
        return StringifyShortValueConverter;
    })();
    exports.StringifyShortValueConverter = StringifyShortValueConverter;
});
