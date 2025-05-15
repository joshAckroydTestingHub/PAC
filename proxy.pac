
function FindProxyForURL(url, host) {
    var allowed = [
        "*.microsoft.com",
        "*.windowsupdate.com",
        "*.azure.com",
        "*.azure.net",
        "*.azurewebsites.net",
        "*.msauth.net",
        "*.msauthimages.net",
        "*.office.com",
        "*.microsoftonline.com",
        "*.windows.net",
        "*.windows.com",
        "*.office365.com",
        "*.msftconnecttest.com"
    ];

    for (var i = 0; i < allowed.length; i++) {
        if (shExpMatch(host, allowed[i])) {
            return "DIRECT";
        }
    }

    return "PROXY 127.0.0.2:8080";
}
