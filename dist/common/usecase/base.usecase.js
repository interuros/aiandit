'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.BaseUsecase = void 0;
class BaseUsecase {
  constructor(repository) {
    this.repository = repository;
  }
  create(payload) {
    return this.repository.create(payload);
  }
  deleteById(id) {
    return this.repository.deleteById(id);
  }
  getById(id) {
    return this.repository.getById(id);
  }
  update(id, payload) {
    return this.repository.update(id, payload);
  }
}
exports.BaseUsecase = BaseUsecase;
//# sourceMappingURL=base.usecase.js.map
