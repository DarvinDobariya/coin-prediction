function setupWebGLInput() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("focus", function () {
            window.scrollTo(0, this.offsetTop);
        });
    }
}

// Automatically called by Unity WebGL
Module.onRuntimeInitialized = function () {
    setupWebGLInput();
};
