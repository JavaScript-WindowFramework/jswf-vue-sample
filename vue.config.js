const config = {
  configureWebpack: {
    resolve: { symlinks: false }
  }
};
const rep = process.env.GITHUB_REPOSITORY;
const routerBase = rep
  ? {
      baseUrl: rep.substring(rep.lastIndexOf("/")) + "/"
    }
  : {};
module.exports = { ...config, ...routerBase };
