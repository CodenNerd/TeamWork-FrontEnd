import Cookies from 'universal-cookie';

function userAuth(data) {
    const cookies = new Cookies();

    if(!data) return cookies.get('user');
    
    if(data=="destroy") return cookies.remove('user', {path: '/'})


    let d = new Date();
    d.setTime(d.getTime() + (2*24* 60 * 60 * 1000));
    cookies.set('user', data, { path: '/', expires: d })
}

export default userAuth;
