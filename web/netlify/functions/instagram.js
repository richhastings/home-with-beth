require('isomorphic-fetch')

const url = `https://www.instagram.com/graphql/query/?query_hash=69cba40317214236af40e7efa697781d&variables=%7B%22id%22%3A%22847792%22%2C%22first%22%3A12%2C%22after%22%3A%22QVFEc3BJYjhBM0x1M0dLdXdsTGw4VW1kTF9PZC1IZ1IxczlCUGhsOUlENkdQUXlaV1R0QXVwaEhsVXVrV3lKdERBdDhqaC0zY1FETG0wUVJUclpNWkRMXw%3D%3D%22%7D`

const getPosts = async () => {
  const data = await fetch(url).then((res) => res.json())
  return data
}

exports.handler = async function (event, context) {
  const posts = await getPosts()
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(posts),
  }
}
