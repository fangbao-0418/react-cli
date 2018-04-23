import http from './http'
// wechat part
// 获取微信用户信息
export const fetchWechatUserInfo = () => {
  return http('/api/uaa/user.ashx')
}

// 微信绑定接口
export const wechatBindApi = (payload: {user_name: string, password: string}) => {
  return http('/api/uaa/binduser.ashx', {
    type: 'POST',
    data: payload,
    contentType: 'application/x-www-form-urlencoded',
    processData: true,
    raw: true
  })
}

// 登录
export const loginApi = (params: {userName: string, UserPassWord: string}) => {
  return http('/api/v1/security/login', {type: 'POST', data: params})
}

// uaa退出
export const uaaLoginOutApi = () => {
  return http('/api/uaa/logout.ashx', { // uaa绑定退出
    extension: {
      xhrFields: {
        withCredentials: true
      }
    }
  })
}

// 退出
export const loginOutApi = () => {
  return $.when(
    http('/api/v1/security/logout', {type: 'DELETE'}),
    window.location.hostname !== 'localhost' ? uaaLoginOutApi() : null
  )
}

// 获取当前角色信息
export const fetchCurrentInfo = () => {
  return http('/api/v1/security/current')
}

// 获取我的小组
export const fetchRangInfo = () => {
  return http('/api/v1/security/range')
}

// 获取消息数
export const fetchMessageNum = () => {
  return http('/api/v1/messages/unreads/count')
}

/* 申报列表页面相关接口 */
// 获取列表会计列表
export const fetchAccountants = () => {
  return http('/api/v1/Accountants/getaccountants')
}

// 获取申报列表
export const fetchDeclareList = (params: {companyid: number, relatedate: string}) => {
  return http('/api/v1/declaration/autolist', params)
}

// 获取完税凭证
export const fetchFinishTaxVoucher = (params: {companyid: number, relatedate: string}) => {
  return http('/api/v1/declaration/finishresult', params)
}

// 查看缴费结果
export const fetchcheckpaymentResult = (params: {companyid: number, relatedate: string}) => {
  return http('/api/v1/declaration/payresult', params)
}

// 查看申报结果
export const fetchcheckdeclarationResult = (params: {companyid: number, relatedate: string}) => {
  return http('/api/v1/declaration/declarationresult', params)
}

// 申报作废
export const declearDiscard = (params: {CompanyId: number, RelateDate: string, RemarkCancle: string}) => {
  return http('/api/v1/declaration/declarationcancel', 'POST', params)
}

// 修改密码
export const changePasswd = (params: {OldPassword: string, NewPassword: string, NewPassword2: string}) => {
  return http('/api/v1/security/password/change', 'PUT', params)
}

//
export const fetchAllClientele = (params: {}) => {
  return http('/api/v1/companies/manage', params)
}

// 获取查询公司
export const searchCompanys = (params: {userid: number}) => {
  return http('/api/v1/shareing/company', params)
}

export const fetchAllCompany = () => {
  return http('/api/v1/shareing/company/all2')
}

// 查询驳回信息
export const fetchAllRejected = () => {
  return http('/api/v1/ReceiptOperation/rejectimage?order=asc&limit=10&offset=0')
}

  // 删除驳回信息
export const handleBillDelete = (companyId: number, payload: number[]) => {
  return http(`/api/v1/ReceiptOperation/BillDelete/${companyId}`, 'DELETE', payload)
}

  // 驳回回复
export const fetchRejectedReply = (params: {imgId: number, payload: {DealMessage: string}}) => {
  return http('/api/v1/ReceiptOperation/rejectdeal/' + params.imgId, 'PUT', params.payload)
}

export const fetchRejectedCommunicate = (params: {receiptId: number, tars: number}) => {
  return http('/api/v1/ReceiptOperation/RejectedCommunicate', params)
}

  // 驳回重新上传
export const fetchRejectedReUpload = (params: {companyid: number, receiptid: number}) => {
  return http('/api/v1/security/osssign', params)
}

// 渠道运营入口 - 代理商列表
export const fetchAgencyList = () => {
  return http('/api/v1/dashboard/channelMenu')
}

export const fetchAgencyEnter = (params: {UserId: number}) => {
  return http('/api/v1/security/channel-manager-login', 'POST', params)
}
// 附加税（费）申报表
export const fetchBusinesstax = (params: {companyid: number, relateDate: string}) => {
  return http('/api/v1/statement/businesstax', params)
}

// 印花税纳税申报表
export const fetchStampTax = () => http('/api/v1/statements/stamps/?companyid=3666&relateDate=2017-11-30')

// 获取纳税差异列表
export const fetchTaxDiffInfo = (params: {companyName: string, userid: number}) => {
  return http('/api/v1/filing/TaxDiff', params)
}

// 纳税差异单条同步
export const TaxDiffAloneMerge = (params: {companyid: number, diffType: number, diffItem: number}) => {
  return http('/api/v1/filing/SyncTaxInfo', params)
}

// 纳税差异全部同步
export const TaxDiffAllMerge = () => {
  return http('/api/v1/filing/SyncTaxInfoAll')
}

// 获取版本信息
export const fetchVersion = () => {
  return http('/api/v1/security/getVersion')
}

export const fetchVersionInfo = () => {
  return http('/infocenter/js/v.json')
}

export const fetchVersionContent = (url: string) => {
  return http(url)
}

// 获取所有来源
export const fetchAllChannels = () => http('/api/v1/dashboard/getAllChannels')

// 我的客户-账务信息Account
export const fetchAccountInfo = (params: { relatedate: string, status: number, limit: number, offset: number,
  companyname?: string, uploadstatus: number, citycode: number, taxplayercategory: number, AccountId: number,
  userid: number }) => {
  return http('/api/v1/dashboard/', params)
}

// 获取票据上传完成历史
export const fetchUploadCompleteHistory = (params: {relatedate: string, companyId: number}) => {
  return http('/api/v1/dashboard/uploadcompletehistory', params)
}

// 我的客户-客户信息
export const fetchCustomerInfo = (params: { userId: number, limit: number, offset: number,
  isbalance: number }) => {
  return http('/api/v1/dashboard/ledger', params)
}

// 获取助理列表
export const fetchAssistantsInfo = () => http('/api/v1/Accountants/assistants')

// 获取城市列表
export const fetchCityList = () => http('/api/v1/code/city')

// 待结账列表
export const fetchCloseBookList = (params: { relatdate: string, limit: number, offset: number,
  citycode: number, userid: number, taxplayercategory: number }) => {
  return http('/api/v1/dashboard/closebooklist', params)
}

// 待做账列表
export const fetchMakeList = (params: { relatdate: string, limit: number, offset: number,
  citycode: number, userid: number, taxplayercategory: number }) => {
  return http('/api/v1/dashboard/makelist', params)
}

// 备处理列表
export const fetchSpareList = (params: { relatdate: string, limit: number, offset: number,
  citycode: number, userid: number, taxplayercategory: number }) => {
  return http('/api/v1/dashboard/sparelist', params)
}

// 待确认列表
export const fetchConfirmList = (params: { relatdate: string, limit: number, offset: number,
  userid: number, taxplayercategory: number }) => {
  return http('/api/v1/dashboard/confirm', params)
}

// 待确认时间
export const fetchConfirmDate = () => http('/api/v1/dashboard/confirmdate')

// 待分配列表
export const fetchAssignedList = (params: { businessdate: string, limit: number, offset: number, citycode: number,
  userid: number, comname: string }) => http('/api/v1/dashboard/assignedlist', params)

// 待建账客户列表
export const fetchCompanyAnalysisList = (params: { relatedate: string, companyname: string,
  isrecall: number, limit: number, offset: number, taxplayercategory: number }) => {
  return http('/api/v1/company/guide/getallot', params)
}

// 待建账月份
export const fetchCompanyAnalysisMonth = () => {
  return http('/api/v1/company/guide/getallotdate')
}

// dashboard数据
export const fetchAccountcomCount = () => {
  return http('/api/v1/dashboard/accountcomcount')
}

export const fetchMyWork = (params?: {userid?: number}) => {
  return http('/api/v1/dashboard/mywork', params)
}

export const fetchUsercomCount = (params?: {userid?: number}) => {
  return http('/api/v1/dashboard/usercomcount',params)
}

export const fetchTaxDiffCount = () => {
  return http('/api/v1/filing/TaxDiffCount')
}

export const fetchHangCount = () => {
  return http('/api/v1/dashboard/hangcount')
}

// 客户管理列表
export const fetchManageList = (params: { pageindex: number,
  pagesize: number, unameid: string, name: string, status: number,
  taxplayercategory: number, city: string }) => {
  return http('/api/v1/companies/manage', params)
}

// 账务沟通
export const fetchWorkOrderList = (params: { pageindex: number,
  pagesize: number, name: string }) => {
  return http('/api/v1/messages/accounts/all', params)
}
// 部门管理列表 && 编辑 => 上级部门
export const fetchDepartmentManagementList = (params: { CompanyId?: number }) => {
  return http(`/api/v1/companies/${params.CompanyId}/departments`)
}

  // 新建 || 编辑 上传
export const fetchDepartmentManagementListPostOrPut = (params: {
  CompanyId: number,
  DepartmentCode: string,
  DepartmentId: number,
  DepartmentName: string,
  Description: string,
  ParentId: string
}, type: string) => {
  const CompanyId = params.CompanyId
  delete params.CompanyId
  return http(
    `/api/v1/companies/${CompanyId}/departments${type === 'PUT' ? '/' + params.DepartmentId : ''}`,
    {type, data: params}
  )
}

  // 确认删除
export const TrashManagement = (params: { CompanyId: number, id: number }) => {
  return http(`/api/v1/companies/${params.CompanyId}/departments/${params.id}`, {type: 'DELETE'})
}

// 员工管理列表
export const fetchStaffManagementList = () => {
  return http(`/api/v1/users/user`)
}

  // 角色多选列表
export const fetchRolestList = () => {
  return http(`/api/v1/role/`)
}

  // 确认删除
export const TrashStaff = (params: { UserId: number }) => {
  return http(`/api/v1/users/${params.UserId}`, {type: 'DELETE'})
}

  // 新建 || 编辑 上传
export const TrashStaffPostOrPut = (params: {
  DepartmentID: any,
  Email: any,
  IsManager: any,
  IsVisible: any,
  Password: any,
  Phone: any,
  RealName: any,
  Role: any,
  UserId: any,
  UserName: any
}, type: string) => {
  return http(`/api/v1/users/user`, {type, data: params})
}
// 票据上传列表
export const fetchImageCountList = (params: {
  taxplayercategory: number, relatedate: string }) => {
  return http('/api/v1/shareing/imagecount', params)
}
// 催票列表
export const fetchUrgeList = (params: {
  drumstatus: string, getstatus: string, uploadstatus: string }) => {
  return http('/api/v1/ReceiptOperation/urge', params)
}
// 是零票
export const zero = (params: {CompanyId: number, RelateDate: string, IsSalaryBills?: number}) =>
  http('/api/v1/operations/zero', 'PUT', params)
export const canUpload = (params: {companyid: number}) =>
  http('/api/v1/ReceiptOperation/canupload', params)
export const getIdentCode = (companyid: number) =>
  http(`/api/v1/companies/identcode/${companyid}`)
export const osssign = (params: {companyid: number}) =>
  http('/api/v1/security/osssign', params)
export const urge = (params: {CompanyId: number, RelateDate: string}) =>
  http('/api/v1/ReceiptOperation/urge', 'POST', params)
export const UrgeOfGet = (params: {CompanyId: number, RelateDate: string,
  UrgeId: number}) => http('/api/v1/ReceiptOperation/UrgeOfGet', 'POST', params)
export const urgeremark = (params: {CompanyId: number, RelateDate: string,
  UrgeRemark: any}) => http('/api/v1/ReceiptOperation/urgeremark', 'POST', params)
export const GetImgAll = (params: {relatedate: string}, CompanyId: number, type: number) =>
  http(`/api/v1/ReceiptOperation/GetImgAll/${CompanyId}/${type}`, params)

export const fetchMseegaeList = (params: { pageindex: number, pagesize: number }) => {
  return http('/api/v1/messages/internal', params)
}
export const getBackInfo = (companyid: number, relatedate: string) =>
  http(`/api/v1/shareing/back/getbackinfo?companyid=${companyid}&relatedate=${relatedate}`)
export const businessBackCheck = (params: { ItemId: number, CompanyId: number, BackRelateDate: string,
  Status: number, AuditRemark: string}) =>
  http(`/api/v1/shareing/back/businessbackcheck`, 'POST', params)
export const ossSign = (companyId: number) =>
  http(`/api/v1/Security/stssign?companyid=${companyId}`)
