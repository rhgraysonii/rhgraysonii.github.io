var iframe = document.getElementsByTagName('iframe')[0];
iframe.contentWindow.postMessage('{"method":"setVolume", "value":0}', '*');