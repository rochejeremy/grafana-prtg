"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var regexPattern;
  function isRegex(str) {
    return regexPattern.test(str);
  }

  //Thanks StackOverflow 

  _export("isRegex", isRegex);

  function isNumeric(strValue) {
    return !isNaN(parseFloat(strValue)) && isFinite(strValue);
  }

  _export("isNumeric", isNumeric);

  function isTemplateVariable(str) {
    if (str && str.match(/\$\w+/)) {
      return true;
    }
    return false;
  }

  /**
   * pad date parts and optionally add one
   */

  _export("isTemplateVariable", isTemplateVariable);

  function pad(idx, val) {
    if (val) return ("0" + (idx + 1)).slice(-2);
    return ("0" + idx).slice(-2);
  }

  _export("pad", pad);

  function buildRegex(str) {
    var matches = str.match(regexPattern);
    var pattern = matches[1];
    var flags = matches[2] !== "" ? matches[2] : undefined;
    return new RegExp(pattern, flags);
  }

  // Need for template variables replace
  // From Grafana's templateSrv.js

  _export("buildRegex", buildRegex);

  function escapeRegex(value) {
    return value.replace(/[\\^$*+?.()|[\]{}\/]/g, "\\$&");
  }

  _export("escapeRegex", escapeRegex);

  function filterMatch(findItem, filterStr) {
    var invert = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var result = void 0;
    if (isRegex(filterStr)) {
      var rex = buildRegex(filterStr);
      result = rex.test(findItem);
    } else {
      result = findItem === filterStr;
    }
    if (invert) {
      return !result;
    }
    return result;
  }

  _export("filterMatch", filterMatch);

  return {
    setters: [],
    execute: function () {
      _export("regexPattern", regexPattern = /^\/(.*)\/([gmi]*)$/m);

      _export("regexPattern", regexPattern);
    }
  };
});
//# sourceMappingURL=utils.js.map
