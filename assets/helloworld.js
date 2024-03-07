(function() {

const hd = window.hyperdiv;

hd.registerPlugin('HelloWorld', function(key, shadow_root, initial_props) {

    const hello = document.createElement('div');
    hello.textContent = "Hello World";
    shadow_root.appendChild(hello);

    return function(prop_key, prop_value) {};
});

})();
