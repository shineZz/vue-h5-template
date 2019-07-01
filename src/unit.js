export function isweixin() {
    const ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}
export const appID = {
    appid: 'wx193cd692885465e7',
    secret: '5c9c9a075c6bfca3c03710ae9cf028ec'

}
export function urlParse() {
    let url = window.location.search
    let arr1 = url.split("?");
    
    if (arr1!='') {
        let params = arr1[1].split("&");
        let obj = {};//声明对象
        for (var i = 0; i < params.length; i++) {
            var param = params[i].split("=");
            obj[param[0]] = param[1];//为对象赋值
        }

        return obj;
    }else{
        return null
    }

}