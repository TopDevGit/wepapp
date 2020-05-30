"use strict";
exports.__esModule = true;
exports.isMobile = (function () {
    if (typeof navigator === 'undefined' || typeof navigator.userAgent !== 'string') {
        return false;
    }
    return /Mobile/.test(navigator.userAgent);
})();
