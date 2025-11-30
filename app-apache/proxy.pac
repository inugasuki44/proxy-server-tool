function FindProxyForURL(url, host) {

    if(shExpMatch(host, "*.yahoo.co.jp")) {

        return "PROXY 192.168.132.128:3128";

    }
    return "DIRECT";

}

