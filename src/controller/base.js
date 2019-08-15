module.exports = class extends think.Controller {
  __before() {
    // await this.session(data);
    const method = this.method;
    if (method !== "OPTIONS" && method !== "POST") {
      return this.fail("请求方式不允许");
    }
  }
};
