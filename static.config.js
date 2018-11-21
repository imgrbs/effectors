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
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
