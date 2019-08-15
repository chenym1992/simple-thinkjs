const UNLOGIN_NO = 1001;
const JWT_KEY = "baby-mgy";
const ERROBJ = {
  loginErr: "用户名和密码不能为空",
  loginErr2: "用户名或密码错误"
};
const isEmptyObj = o => {
  let i = true;
  for (i in o) {
    i = false;
    break;
  }
  return i;
};
module.exports = {
  UNLOGIN_NO,
  JWT_KEY,
  isEmptyObj,
  ERROBJ
};
