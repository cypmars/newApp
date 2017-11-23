cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-apiai.Q",
    "file": "plugins/cordova-plugin-apiai/www/lib/q.js",
    "pluginId": "cordova-plugin-apiai",
    "runs": true
  },
  {
    "id": "cordova-plugin-apiai.ApiAIPlugin",
    "file": "plugins/cordova-plugin-apiai/www/ApiAIPlugin.js",
    "pluginId": "cordova-plugin-apiai",
    "clobbers": [
      "window.ApiAIPlugin"
    ]
  },
  {
    "id": "cordova-plugin-apiai.ApiAIPromises",
    "file": "plugins/cordova-plugin-apiai/www/ApiAIPromises.js",
    "pluginId": "cordova-plugin-apiai",
    "clobbers": [
      "window.ApiAIPromises"
    ]
  },
  {
    "id": "cordova-plugin-speechrecognition.SpeechRecognition",
    "file": "plugins/cordova-plugin-speechrecognition/www/speechRecognition.js",
    "pluginId": "cordova-plugin-speechrecognition",
    "merges": [
      "window.plugins.speechRecognition"
    ]
  },
  {
    "id": "cordova-plugin-tts.tts",
    "file": "plugins/cordova-plugin-tts/www/tts.js",
    "pluginId": "cordova-plugin-tts",
    "clobbers": [
      "TTS"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "ionic-plugin-keyboard.keyboard",
    "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
    "pluginId": "ionic-plugin-keyboard",
    "clobbers": [
      "cordova.plugins.Keyboard"
    ],
    "runs": true
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-apiai": "1.7.4",
  "cordova-plugin-speechrecognition": "1.1.2",
  "cordova-plugin-tts": "0.2.3",
  "cordova-plugin-device": "1.1.4",
  "cordova-plugin-ionic-webview": "1.1.16",
  "cordova-plugin-splashscreen": "4.0.3",
  "cordova-plugin-whitelist": "1.3.1",
  "ionic-plugin-keyboard": "2.2.1"
};
// BOTTOM OF METADATA
});