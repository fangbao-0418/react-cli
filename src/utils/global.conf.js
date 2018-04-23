/* global gtag APP:true dataLayer:true */

// gtag
window.dataLayer = window.dataLayer || []
function gtag () {
  dataLayer.push(arguments)
}
gtag('js', new Date())
gtag('config', APP['GA_TRACKING_ID'], {
  'custom_map': {
    'dimension1': 'account_category_id',
    'metric5': 'avg_page_load_time'
  }
})
APP['gtag'] = gtag
