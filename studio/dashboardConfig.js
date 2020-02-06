export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e3c4afc5fc11f343d01099a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vxkdejva',
                  apiId: '956aebe8-a774-4cdc-bf18-8d1e835db383'
                },
                {
                  buildHookId: '5e3c4afdea76ae1b9d26ff7a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-pndxiuqt',
                  apiId: '6c371195-8284-4301-ae51-904ef28b1c1b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shannonistired5/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-pndxiuqt.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
