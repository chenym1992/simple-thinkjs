const { UNLOGIN_NO, isEmptyObj } = require("../const/const");
// const JWTSession = require("think-session-jwt");
module.exports = class extends think.Controller {
  constructor(ctx) {
    super(ctx);
    this.modelInstance = this.model("user");
  }
  async __before() {
    // await this.session(data);
    const method = this.method;
    if (method !== "OPTIONS" || method !== "POST") {
    }
    const tokenInfo = await this.session();
    // 获取用户的 session 信息，如果为空，返回 false 阻止后续的行为继续执行
    if (isEmptyObj(tokenInfo)) {
      return this.fail(UNLOGIN_NO, "用户未登录");
    } else if (tokenInfo.name === "JsonWebTokenError") {
      return this.fail(UNLOGIN_NO, "登录验证失败");
    } else {
      this.ctx.state.userinfo = tokenInfo;
    }
  }
};
