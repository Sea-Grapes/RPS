console.log('woah there buckeroo... This is private property.')

import { $ } from './util'

const rps = $('#rps')

const actions = Array.from(rps.children)

actions.forEach((action, i) => {
  action.addEventListener('click', (e) => {
    Object.keys(actions)
      .toSpliced(i, 1)
      .map((i) => actions[i])
      .forEach((e) => {
        e.style.opacity = 0
        e.style.maxWidth = 0
      })
  })
})
