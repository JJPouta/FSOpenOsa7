const listHelper = require('../utils/list_helper')

const multiBlogs = [{ _id: '5a422a851b54a676234d17f7', title: 'React patterns', author: 'Michael Chan', url: 'https://reactpatterns.com/', likes: 7, __v: 0 },
  { _id: '5a422aa71b54a676234d17f8', title: 'Go To Statement Considered Harmful', author: 'Edsger W. Dijkstra', url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html', likes: 5, __v: 0 },
  { _id: '5a422b3a1b54a676234d17f9', title: 'Canonical string reduction', author: 'Edsger W. Dijkstra', url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html', likes: 12, __v: 0 }]

const multiBlogs2 = [{ _id: '5a422a851b54a676234d17f7', title: 'React patterns', author: 'Michael Chan', url: 'https://reactpatterns.com/', likes: 7, __v: 0 },
  { _id: '5a422aa71b54a676234d17f8', title: 'Go To Statement Considered Harmful', author: 'Edsger W. Dijkstra', url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html', likes: 5, __v: 0 },
  { _id: '5a422b3a1b54a676234d17f9', title: 'Canonical string reduction', author: 'Edsger W. Dijkstra', url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html', likes: 12, __v: 0 },
  { _id: 'x66', title: 'NHL game series 1994-2020', author: 'Mike Lalor', url: 'www.ea.com/blog', likes: 44, __v: 0 }, { _id: 'x55', title: 'NHL 1994.. the beginning', author: 'Mike Lalor', url: 'www.ea.com/blog', likes: 440, __v: 0 },
  { _id: 'x8', title: 'NHL 2001.. most memorable', author: 'Mike Lalor', url: 'www.ea.com/blog', likes: 5, __v: 0 }]

const trioBlog = [{ _id: '5a422b3a1b54a676234d17f9', title: 'Canonical string reduction', author: 'Edsger W. Dijkstra', url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html', likes: 12, __v: 0 },
  { _id: 'x66', title: 'NHL game series 1994-2020', author: 'Mike Lalor', url: 'www.ea.com/blog', likes: 44, __v: 0 }, { _id: 'x55', title: 'NHL 1994.. the beginning', author: 'Mike Lalor', url: 'www.ea.com/blog', likes: 440, __v: 0 }
]
const duoBlogNegative = [
  { _id: '5x6', title: 'How to not make cat videos', author: 'Nelson Q', url: 'catsnot.to', likes: -10, __v: 0 }, { _id: '577x6o', title: 'How to make cat videos', author: 'Nelson P', url: 'cats.nz', likes: -2, __v: 0 }]

const singleBlog = [
  { _id: '5x6', title: 'How to make cat videos', author: 'Nelson P', url: 'cats.nz', likes: 555, __v: 0 }]

// 4.3
test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

// 4.4
describe('totalikes count', () => {
  // Testataan useampaa blogia
  test('multiBlog', () => {
    const result = listHelper.totalLikes(multiBlogs)

    expect(result).toBe(24)
  })

  test('singleBlog', () => {
    const result = listHelper.totalLikes(singleBlog)

    expect(result).toBe(555)
  })
})

// 4.5
describe('favorite blog', () => {
  test('multiBlog', () => {
    const result = listHelper.favoriteBlog(multiBlogs)

    expect(result).toEqual({ title: multiBlogs[2].title, author: multiBlogs[2].author, likes: multiBlogs[2].likes })
  })

  test('NegativeBlogs', () => {
    const result = listHelper.favoriteBlog(duoBlogNegative)

    expect(result).toEqual({ title: duoBlogNegative[1].title, author: duoBlogNegative[1].author, likes: duoBlogNegative[1].likes })
  })
})

// 4.6
describe('author with most blogs', () => {
  test('multiblog2', () => {
    const result = listHelper.mostBlogs(multiBlogs2)

    const expectedResult = { author: 'Mike Lalor', blogs: 3 }

    expect(result).toEqual(expectedResult)
  })

  test('trioblog', () => {
    const result = listHelper.mostBlogs(trioBlog)
    const expectedResult = { author: 'Mike Lalor', blogs: 2 }

    expect(result).toEqual(expectedResult)
  })
})

// 4.7
describe('author with most likes', () => {
  test('multiblog most likes', () => {
    const result = listHelper.mostLikes(multiBlogs)
    const expectedResult = { author: 'Edsger W. Dijkstra', likes: 17 }

    expect(result).toEqual(expectedResult)
  })

  test('negativeblogs least dislikes', () => {
    const result = listHelper.mostLikes(duoBlogNegative)
    const expectedResult = { author: 'Nelson P', likes: -2 }

    expect(result).toEqual(expectedResult)
  })
})
