import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.blog')

const header = createHeader()
page.append(header)
const title = createElement('h1', 'blog__title', 'Мій блог')
page.append(title)

const POST_LIST = [
  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс.',
    date: '25/01',
    viewed: false,
  },
  {
    category: [{ text: 'Нова', id: 2 }],
    info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
    date: '15/01',
    viewed: true,
  },
]

const creeatePost = () => {
  const postList = createElement('main', 'blog__main')
  POST_LIST.forEach((postData) => {
    const post = createElement(
      'div',
      postData.viewed
        ? 'blog__section button blog--viewed'
        : 'blog__section button',
    )
    const postHeader = createElement(
      'div',
      'blog__section-header',
    )

    const categoryList = createElement(
      'div',
      'blog__section-category',
    )

    postData.category.forEach((category) => {
      const categorySpan = createElement(
        'span',
        `blog__section__list blog__section__list--${category.id}`,
        category.text,
      )
      categoryList.append(categorySpan)
    })

    const dateSpan = createElement(
      'span',
      'blog__section-date',
      postData.date,
    )
    postHeader.append(categoryList, dateSpan)

    const infoParagraf = createElement(
      'p',
      'blog__section-text',
      postData.info,
    )
    post.append(postHeader, infoParagraf)

    postList.append(post)
  })
  return postList
}

const post=creeatePost()
page.append(post)