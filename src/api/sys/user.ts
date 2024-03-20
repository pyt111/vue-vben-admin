import { defHttp, sysHttp } from '@/utils/http/axios';
import { LoginParams, LoginResultModel, GetUserInfoModel, LoginParams2 } from './model/userModel';

import { ErrorMessageMode } from '#/axios';
import type { AxiosResponse } from 'axios';

enum Api {
  Login = '/login',
  Logout = '/logout',
  GetUserInfo = '/getUserInfo',
  GetPermCode = '/getPermCode',
  TestRetry = '/testRetry',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: user login api
 */
export function loginApi2(params: LoginParams2, mode: ErrorMessageMode = 'modal') {
  return sysHttp.post<AxiosResponse<LoginResultModel>>(
    {
      url: '/sys/loginAction/login',
      params,
    },
    {
      errorMessageMode: mode,
      isReturnNativeResponse: true,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

/**
 * @description: getUserInfo2
 */
export function getUserInfo2(params = {}) {
  return sysHttp
    .post<GetUserInfoModel>(
      { url: '/sys/userAction/queryCurrentUser', params },
      { errorMessageMode: 'none' },
    )
    .then((res) => {
      res.roles = res.roleIds;
      res.userId = res.id;
      return res;
    });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}

export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  );
}
