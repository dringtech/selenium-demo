function loadScript (path) {
  const script = document.createElement('script')
  script.src = path
  script.async = false
  document.head.appendChild(script) // or something of the likes
}

mocha.setup({ ui: 'bdd' })
MochaWebdriverClient.install(mocha)

function loadTests () {
  loadScript('./tests.js')
}
loadTests()

mocha.checkLeaks()
mocha.run()
