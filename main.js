(function () {
    "use strict";
    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var isFirstActivation = true;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.voiceCommand) {
        }
        else if (args.detail.kind === activation.ActivationKind.launch) {
             if (args.detail.arguments) {
            }
            else if (args.detail.previousExecutionState === activation.ApplicationExecutionState.terminated) {
            }
        }
        if (!args.detail.prelaunchActivated) {
        }
        if (isFirstActivation) {
            document.addEventListener("visibilitychange", onVisibilityChanged);
            startInterstitial();
            args.setPromise(WinJS.UI.processAll());
        }
        isFirstActivation = false;
    };
    function onVisibilityChanged(args) {
        if (!document.hidden) {
            // TODO: The app just became visible. This may be a good time to refresh the view.
        }
    }
    app.oncheckpoint = function (args) {
    };
    app.start();
})();
