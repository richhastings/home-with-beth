import { gql } from '@apollo/client'

export const indexPageQuery = gql`
  query indexPageQuery($key: StringFilter) {
    allPost(limit: 3, sort: { _createdAt: DESC }) {
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
      publishedAt
    }
    allLockup(where: { key: $key }) {
      title
      descriptionRaw
    }
    allQuote(limit: 3, sort: { _createdAt: DESC }) {
      _createdAt
      name
      location
      body
    }
  }
`

export const indexPageQuery2 = gql`
  query indexPageQuery($key: StringFilter) {
    allLockup(where: { key: $key }) {
      title
      descriptionRaw
    }
  }
`

export const blogLandingPageQuery = gql`
  query blogLandingPageQuery {
    allPost(sort: { _createdAt: DESC }) {
      title
      slug {
        current
      }
      mainImage {
        asset {
          url
        }
      }
      bodyRaw
      publishedAt
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
      publishedAt
    }
  }
`

export const allPostsQuery = gql`
  query allPostsQuery {
    allPost(sort: { _createdAt: DESC }) {
      slug {
        current
      }
    }
  }
`

export const allServicesQuery = gql`
  query allServiceQuery($key: StringFilter) {
    allService(sort: { price: ASC }) {
      title
      price
      mainImage {
        asset {
          url
        }
      }
      bodyRaw
    }
    allAdditionalService {
      title
      description
      icon
    }
    allLockup(where: { key: $key }) {
      title
      descriptionRaw
    }
  }
`

export const allTestimonialsQuery = gql`
  query allServiceQuery {
    allTestimonial(sort: { _createdAt: DESC }) {
      name
      location
      body
    }
  }
`

export const aboutPageQuery = gql`
  query aboutPageQuery($key: StringFilter) {
    allLockup(where: { key: $key }) {
      title
      descriptionRaw
    }
  }
`

export const contactPageQuery = gql`
  query contactPageQuery($key: StringFilter) {
    allLockup(where: { key: $key }) {
      title
      descriptionRaw
    }
  }
`
