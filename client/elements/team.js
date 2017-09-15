const html = require('choo/html')
const teamInfo = require('../team-info')

module.exports = function () {
  const flexClass = 'flex flex-wrap flex-row justify-between items-stretch'

  return html`
    <div>
      <h2 class="horizontal-rule">Development Team</h2>
      <div class="${flexClass} w-100">
        ${teamInfo.current.map((person) => {
          return personBox(person)
        })}
      </div>
      <h2 class="horizontal-rule">Advisors</h2>
      <div class="${flexClass} w-100">
        ${teamInfo.advisors.map((person) => {
          return personBox(person)
        })}
      </div>
      <h2 class="horizontal-rule">Alumni</h2>
      <div class="${flexClass} w-100">
        ${teamInfo.alumni.map((person) => {
          return personBox(person)
        })}
      </div>
    </div>
  `

  function personBox (info) {
    const description = html`<div class="gallery-item-subtitle"></div>`
    description.innerHTML = info.description
    return html`
      <div class="inline-flex w-100 w-third-ns pa3">
        <div class="bg-white w-100 pa3 pa4-ns b--dat-blue ba bw2">
          <div class="tc">
            <a href="http://github.com/${info.github}"><img src="${avatar(info.github)}" class="br-100 h3 w3 dib" title="${info.name}" alt="${info.name}"></a>
            <h4 class="f4">${info.name}</h4>
            <hr class="mw3 bb bw1 b--black-10">
          </div>
          <p class="lh-copy measure center f6 black-70">
            ${description}
          </p>
        </div>
      </div>
    `
  }

  function avatar (username) {
    return `https://github.com/${username}.png`
  }
}
