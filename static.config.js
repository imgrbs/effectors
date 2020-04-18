export default {
  getSiteData: () => ({
    title: 'SIT ตาม สาย - Effectors',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '*',
        component: 'src/containers/404',
      },
    ]
  },
}
