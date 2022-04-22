function showOrHideElement(element) {
  let getElement = document.querySelector(`${element}`).classList;
  let insHide = false;
  getElement.forEach(e => {
    if (e == 'collapse') insHide = true;
  })

  switch (insHide) {
    case true:
      getElement.remove('collapse')
      break;
    case false:
      getElement.add('collapse')
      break;
  }

}

function showBody() {
  showOrHideElement('.body')
  showOrHideElement('.button-header')
}

function timeShowBody() {
  setTimeout(function () {
    showBody()
  }, 958000);
}

function startWebSite() {
  timeShowBody()
}

startWebSite()