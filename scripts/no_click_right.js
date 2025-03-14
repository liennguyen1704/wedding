var message = "NoRightClicking";
function defeatIE() {
  if (document.all) {
    message;
    return false;
  }
}
function defeatNS(e) {
  if (document.layers || (document.getElementById && !document.all)) {
    if (e.which == 2 || e.which == 3) {
      message;
      return false;
    }
  }
}
if (document.layers) {
  document.captureEvents(Event.MOUSEDOWN);
  document.onmousedown = defeatNS;
} else {
  document.onmouseup = defeatNS;
  document.oncontextmenu = defeatIE;
}
document.oncontextmenu = new Function("return false");

document.onkeydown = function (e) {
  if (
    e.ctrlKey &&
    (e.keyCode === 67 ||
      e.keyCode === 86 ||
      e.keyCode === 85 ||
      e.keyCode === 117)
  ) {
    return false;
  } else {
    return true;
  }
};
$(document).keypress("u", function (e) {
  if (e.ctrlKey) {
    return false;
  } else {
    return true;
  }
});
