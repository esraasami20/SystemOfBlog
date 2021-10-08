export const prefixRoute = 'http://localhost:25342/api';
export const ApiEnspoints = {
  Endpoints: {
    login: `${prefixRoute}/Authentication/login`,
    registerAdmin: `${prefixRoute}/Authentication/register-admin`,
    registerVistor: `${prefixRoute}/Authentication/register-vistor`,
    registerModerator: `${prefixRoute}/Authentication/register-moderator`,

    blogsData: `${prefixRoute}/Blog`,
    searchBlog: `${prefixRoute}/Blog/search`,

    categoryData: `${prefixRoute}/Category`,
    searchCategory: `${prefixRoute}/Category/search`,

    getApprovedComment: `${prefixRoute}/Comment/approved-comment`,
    getNotApprovedComment: `${prefixRoute}/Comment/notApp-comment`,
    getVistorNotAppComment: `${prefixRoute}/Comment/vistorNotApp-comment`,
    getVistorApprovedComment: `${prefixRoute}Comment/vistorApp-comment`,
    addNewComment: `${prefixRoute}Comment`,
  },
};