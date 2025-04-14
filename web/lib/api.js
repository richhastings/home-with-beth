const POST_GRAPHQL_FIELDS = `
  title
  publishDate
  slug
`

const SERVICE_GRAPHQL_FIELDS = `
  title
  description {
    json
  }
  price
`

const PAGE_GRAPHQL_FIELDS = `
  title
  strapline
  subtitle
  description {
    json
  }
  buttonLabel
  buttonUrl
  additionalSubtitle
  additionalDescription {
    json
  }
  additionalButtonLabel
  additionalButtonUrl
  hypeStripTitle
  hypeStripButtonLabel
  hypeStripButtonUrl
`

const QUOTE_GRAPHQL_FIELDS = `
  shortText
  longText
  author
`

async function fetchGraphQL(query) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ['posts'] },
    }
  ).then((response) => response.json())
}

function extractPost(fetchResponse) {
  return fetchResponse?.data?.blogPostCollection?.items?.[0]
}

export async function getNavigation() {
  const entry = await fetchGraphQL(
    `query {
      navigationCollection {
        items {
          navigation
        }
      }
    }`
  )

  return entry?.data?.navigationCollection?.items[0].navigation
}

export async function getAllPosts(limit) {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(where: { title_exists: true }, order: publishDate_DESC, ${
        limit && `limit: ${limit}`
      }) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return entries?.data?.blogPostCollection?.items
}

export async function getAllServices() {
  const entries = await fetchGraphQL(
    `query {
      serviceCollection(order: price_ASC) {
        items {
          ${SERVICE_GRAPHQL_FIELDS}
        }
      }
    }`
  )

  console.log(22222, entries)

  return entries?.data?.serviceCollection?.items
}

export async function getAllQuotes(limit) {
  const entries = await fetchGraphQL(
    `query {
      testimonialCollection(${limit && `limit: ${limit}`}) {
        items {
          ${QUOTE_GRAPHQL_FIELDS}
        }
      }
    }`
  )

  return entries?.data?.testimonialCollection?.items
}

export async function getPage(slug) {
  const entry = await fetchGraphQL(
    `query {
      pageCollection(where: { slug: "${slug}" }, preview: ${'false'}, limit: 1) {
        items {
          ${PAGE_GRAPHQL_FIELDS}
        }
      }
    }`
  )

  return entry?.data?.pageCollection?.items[0]
}

export async function getAllPages() {
  const entries = await fetchGraphQL(
    `query {
      pageCollection(where: { title_exists: true }, order: publishDate_DESC, preview: ${'false'}) {
        items {
          ${PAGE_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return entries?.data?.pageCollection?.items
}

export async function getPostAndMorePosts(slug) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${'false'}, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${'false'}, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  }
}
