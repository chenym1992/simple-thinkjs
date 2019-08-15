const { ERROBJ } = require("../const/const");
module.exports = class extends think.Logic {
  loginAction() {
    const rules = {
      name: {
        required: true
      },
      password: {
        required: true
      }
    };
    const flag = this.validate(rules);
    if (!flag) {
      return this.fail(ERROBJ.loginErr);
    }
  }
};
