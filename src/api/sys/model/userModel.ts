/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}
/**
 * @description: Login interface parameters
 */
export interface LoginParams2 {
  userCode: string;
  userPassword: string;
  platform: number;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  // userId?: string | number;
  // token?: string;
  // roles?: RoleInfo[];
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  roles: RoleInfo[];
  // 用户id
  userId: string | number;
  // 用户名
  username: string;
  // 真实名字
  realName: string;
  // 头像
  avatar: string;
  // 介绍
  desc?: string;

  email: string;
  expire: string;
  forbidden: string;
  gmtCreate: string;
  gmtModified: string;
  headImg: string;
  id: string | number;
  isDelete: string;
  roleIds: RoleInfo[];
  telPhone: string;
  tenantId: number;
  tenantName: string;
  uidCreate: string;
  uidModified: string;
  userCode: string;
  userExplain: string;
  userName: string;
  utype: number;
  vos: any[];
}
