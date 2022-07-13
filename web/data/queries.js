import { gql } from '@apollo/client'

export const indexPageQuery = gql`
  query indexPageQuery {
    allPost(limit: 3, sort: { _createdAt: ASC }) {
      _createdAt
      title
      mainImage {
        asset {
          url
        }
      }
      slug {
        current
      }
    }
    allProject(limit: 2, sort: { _createdAt: ASC }) {
      _createdAt
      title
      mainImage {
        asset {
          url
        }
      }
      slug {
        current
      }
    }
  }
`

export const projectLandingPageQuery = gql`
  query projectLandingPageQuery {
    allProject {
      title
      mainImage {
        asset {
          url
        }
      }
      slug {
        current
      }
    }
  }
`
export const projectPageQuery = gql`
  query getPostBySlug($slug: SlugFilter) {
    allProject(where: { slug: $slug }) {
      title
      bodyRaw
      mainImage {
        asset {
          url
        }
      }
      slug {
        current
      }
    }
  }
`

export const allProjectsQuery = gql`
  query allProjectsQuery {
    allProject {
      slug {
        current
      }
    }
  }
`

export const blogLandingPageQuery = gql`
  query blogLandingPageQuery {
    allPost {
      title
      slug {
        current
      }
      mainImage {
        asset {
          url
        }
      }
    }
  }
`

export const blogPageQuery = gql`
  query getPostBySlug($slug: SlugFilter) {
    allPost(where: { slug: $slug }) {
      title
      bodyRaw
      mainImage {
        asset {
          url
        }
      }
      slug {
        current
      }
    }
  }
`

export const allPostsQuery = gql`
  query allPostsQuery {
    allPost {
      slug {
        current
      }
    }
  }
`

export const aboutPageQuery = gql`
  query aboutPageQuery {
    allPost {
      slug {
        current
      }
    }
  }
`

export const contactPageQuery = gql`
  query contactPageQuery {
    allPost {
      slug {
        current
      }
    }
  }
`
