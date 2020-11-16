
// Palauttaa aina luvun 1 (jos param = array)
const dummy = (blogs) => {
  if (Array.isArray(blogs)) { return 1 } else { return 0 }
}

// Blogien likejen yhteenlaskettu lkm
const totalLikes = (blogs) => {
  const reducer = (acc, item) => {
    return acc + item.likes
  }
  const likeCount = blogs.reduce(reducer, 0)

  return likeCount
}

const favoriteBlog = (blogs) => {
  const maxBlog = blogs.reduce(function (prev, current) {
    return (prev.likes > current.likes) ? prev : current
  })
  return { title: maxBlog.title, author: maxBlog.author, likes: maxBlog.likes }
}

// Palauttaa authorin, jolla lkm eniten blogeja
const mostBlogs = (blogs) => {
  const authorObject = {}
  let authorWithMostBlogs = { author: null, blogs: 0 }

  for (const blog of blogs) {
    if (authorObject[blog.author] == null) {
      authorObject[blog.author] = 1
    } else {
      authorObject[blog.author]++
    }

    if (authorObject[blog.author] > authorWithMostBlogs.blogs) {
      authorWithMostBlogs = { author: blog.author, blogs: authorObject[blog.author] }
    }
  }
  return authorWithMostBlogs
}

const mostLikes = (blogs) => {
  const authorObject = {}
  let authorWithMostLikes = { author: null, likes: null }

  for (const blog of blogs) {
    if (authorObject[blog.author] == null) {
      authorObject[blog.author] = blog.likes
    } else {
      authorObject[blog.author] = authorObject[blog.author] + blog.likes
    }

    if (authorObject[blog.author] > authorWithMostLikes.likes || authorWithMostLikes.likes == null) {
      authorWithMostLikes = { author: blog.author, likes: authorObject[blog.author] }
    }
  }
  return authorWithMostLikes
}

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes }
