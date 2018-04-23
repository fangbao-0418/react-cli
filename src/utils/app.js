/* APP :true */
let GA_TRACKING_ID = ''
if (/agent\.pilipa\.cn/.test(window.location.host)) {
  GA_TRACKING_ID = 'UA-103974100-7'
} else if (/(x-agent\.i-counting\.cn|localhost)/.test(window.location.host)) {
  GA_TRACKING_ID = 'UA-103974100-6'
}

const APP = {
  GA_TRACKING_ID
}
window.APP = APP
