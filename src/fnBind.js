define(function() {
  /**
   * fnBind is a super small [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) polyfill.
   *
   * @access private
   * @function fnBind
   * @param {Function} fn - a function you want to change `this` reference to
   * @param {Object} that - the `this` you want to call the function with
   * @returns {Function} The wrapped version of the supplied function
   */
  function fnBind(fn, that) {
    return function() {
      return fn.apply(that, arguments);
    };
  }

  return fnBind;
});
