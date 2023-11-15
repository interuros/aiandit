'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
  constructor(model) {
    this.model = model;
  }
  async create(payload) {
    return this.model.create(payload);
  }
  async deleteById(id) {
    return this.model.destroy({
      where: {
        id,
      },
    });
  }
  async getById(id) {
    return this.model.findByPk(id);
  }
  async update(id, payload) {
    await this.model.update(payload, {
      where: {
        id,
      },
    });
    return this.getById(id);
  }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map
