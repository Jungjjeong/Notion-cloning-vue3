export default {
  install(app, component) {
    app.config.globalProperties.$fetch = (url, opts) => {
      return fetch(url, opts).then((res) => res.json());
    };
  },
};
