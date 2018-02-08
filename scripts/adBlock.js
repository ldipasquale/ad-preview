function adBlockDetected() {
  $('.jampp__Body__Content--adBlockDetected').css({ opacity: 1 })
}

function adBlockNotDetected() {
  $('.jampp__Body__Content--adBlockNotDetected').css({ opacity: 1 })
}

fuckAdBlock = new FuckAdBlock()

window.addEventListener('DOMContentLoaded', () => fuckAdBlock.check(), false)

fuckAdBlock.onDetected(adBlockDetected)
fuckAdBlock.onNotDetected(adBlockNotDetected)
