export function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue}${
    window.location.host !== `localhost:${process.env.APP_PORT}`
      ? ';secure'
      : ''
  };${expires};path=/`;
}

export function removeCookie(cname) {
  const expires = `expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  document.cookie = `${cname}=;${
    window.location.host !== `localhost:${process.env.APP_PORT}`
      ? ';secure'
      : ''
  };${expires};path=/`;
}

export function getCookie(cname) {
  const name = `${cname}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
