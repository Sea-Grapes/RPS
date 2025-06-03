console.log('woah there buckeroo... This is private property.')

import { $ } from './util'

const rps = $('#rps')


Array.from(rps.children).forEach(action => {
  action.addEventListener('click', e => {
    rps.className = 'hidden'
  })
})