(function( cordova ) {
    
    var SmsPlugin = function () {};

    SmsPlugin.prototype.send = function (phone, message, method, successCallback, failureCallback) {    
        return cordova.exec(successCallback, failureCallback, 'SmsPlugin', "SendSMS", [phone, message, method]);
    };

    if(!window.plugins)	{
        window.plugins = {};
    }

    if (!window.plugins.SmsPlugin) {
    	window.plugins.SmsPlugin = new SmsPlugin();
    }

	var smsPlugin = new SmsPlugin();
	module.exports = smsPlugin;
    
})( window.cordova );