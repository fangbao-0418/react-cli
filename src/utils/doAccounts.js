/**
 * Created by zhijian on 2018/1/31.
 */
export default (companyId, companyName, originUrl, targetUrl = '/#compilation/index', target) => {
  const currentCompany = {
    companyID: companyId,
    companyName: companyName
  }
  sessionStorage.setItem('currentCompany', JSON.stringify(currentCompany))
  localStorage.setItem('originUrl', originUrl)
  if (target) {
    window.open(targetUrl, target)
  } else {
    window.location.href = targetUrl
  }
}
