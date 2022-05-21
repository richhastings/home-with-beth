require('isomorphic-fetch')

const url = `https://www.instagram.com/graphql/query/?query_hash=d4d88dc1500312af6f937f7b804c68c3&variables={"user_id":"847792","first":6}`

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
