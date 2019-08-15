const Base = require("./base.js");
const jwt = require("jsonwebtoken");
const { isEmptyObj, ERROBJ, JWT_KEY } = require("../const/const");
module.exports = class extends Base {
  constructor(ctx) {
    super(ctx);
    this.modelInstance = this.model("user");
  }
  async loginAction() {
    const { name, password } = this.post();
    const data = await this.modelInstance
      .where({ account: name, password: password.toLocaleUpperCase() })
      .find();
    const flag = await isEmptyObj(data);
    if (!flag) {
      const token = await jwt.sign({ ...data }, JWT_KEY);
      return this.success({
        token
      });
    } else {
      return this.fail(ERROBJ.loginErr2);
    }
  }
};
