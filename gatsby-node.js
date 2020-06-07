exports.createPages = async ({ actions, graphql }) => {
  const basePath = "/singles"
  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/SinglesTemplate.js"),
  })

  const results = await graphql(`
    {
      allSanitySingle {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const singles = results.data.allSanitySingle.edges.map(({ node }) => node)

  singles.forEach(single => {
    const slug = single.slug.current
    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/SingleTemplate.js"),
      context: {
        slug: slug,
      },
    })
  })
}
