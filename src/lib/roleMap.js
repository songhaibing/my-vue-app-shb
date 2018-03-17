'use strict';
/**
 * 用户角色与随机字母的映射,相当于角色的加密
 * @type {{"1": string, "2": string, "3": string, "4": string}}
 */
const ROLE_MAP = {
  '1': 'wpoeriudfghjtwreioutk',//超级管理员
  '2': 'alh2324adfdghjiloadfasdf',//管理员
  '3': 'aprhglaghdjeritfl',//操作员
  '4': 'aijgdsadfghjdrf52lkj'//托管员
};

export default ROLE_MAP;
