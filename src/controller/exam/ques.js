const Auth = require("../auth.js");
module.exports = class extends Auth {
  constructor(ctx) {
    super(ctx);
    this.examModal = this.model("exam_ques");
  }
  async addAction() {
    const { ques } = this.post();
    const insertId = await this.examModal.add({ ques: JSON.stringify(ques) });
    return this.success(insertId);
  }
  async editAction() {
    const { id, ques } = this.post();
    const affectedRows = await this.examModal
      .where({ id })
      .update({ ques: JSON.stringify(ques) });
    return this.success(affectedRows);
  }
  async infoAction() {
    const { id } = this.post();
    const data = await this.examModal.where({ id }).find();
    return this.success(data);
  }

  async deleteAction() {
    const { id } = this.post();
    const affectedRows = await this.examModal.where({ id }).delete();
    return this.success(affectedRows);
  }
  async listAction() {
    const { page, pageSize = 50 } = this.post();
    const data = await this.examModal.page(page, pageSize).select();
    data.forEach(v => {
      v.ques = JSON.parse(v.ques);
    });
    return this.success(data);
  }
  async attchAction() {
    const { list } = this.post();
    const params = [];
    list.forEach(v => {
      params.push({ ques: JSON.stringify(v) });
    });
    // console.log(params);
    const affectedRows = await this.examModal.addMany(params);
    return this.success(affectedRows);
  }
};
