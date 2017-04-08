
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function isNotFalsy(value) {
    return Boolean(value) === true;
  }
  
  var filtered = arr.filter(isNotFalsy);
  return filtered;
}




bouncer([7, "ate", "", false, 9]);
