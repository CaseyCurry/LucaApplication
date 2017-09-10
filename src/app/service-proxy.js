const loadCss = (url) => {
  const sheet = document.createElement("link");
  sheet.rel = "stylesheet";
  sheet.href = url;
  document.head.appendChild(sheet);
};

const loadScript = (url) => {
  const script = document.createElement("script");
  script.src = url;
  document.body.appendChild(script);
};

export default {
  loadResources: () => {
    loadCss("http://192.168.56.110/client/checkingaccount/checking-account.css");
    loadScript("http://192.168.56.110/client/checkingaccount/app.min.js");
    loadScript("http://192.168.56.110/client/users/app.min.js");
  }
};
