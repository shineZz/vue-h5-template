export function isweixin() {
    const ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    } else {
        return false;
    }
}
export const appID={
    appid:'wx9f8d74816fc35815',
    secret:'5c9c9a075c6bfca3c03710ae9cf028ec'

}