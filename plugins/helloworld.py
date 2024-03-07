
import hyperdiv as hd


class HelloWorld(hd.Plugin):

    # Works:
    # _assets = [('js-link', 'http://localhost:8888/assets/helloworld.js')]
    # Doesn't work:
    _assets = [('js-link', './assets/helloworld.js')]
