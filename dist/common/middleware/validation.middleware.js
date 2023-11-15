'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.validationMiddleware = void 0;
const class_validator_1 = require('class-validator');
const validationMiddleware = (type) => {
  return (req, res, next) => {
    validatePayload(req.body, type).then((errors) => {
      if (errors.length === 0) {
        next();
      } else {
        console.log('Promise rejected (validation failed). Errors: ', errors);
      }
    });
  };
};
exports.validationMiddleware = validationMiddleware;
const validatePayload = (payload, type) => {
  const obj = new type();
  Object.keys(payload).forEach((k) => {
    obj[k] = payload[k];
  });
  return (0, class_validator_1.validate)(obj);
};
//# sourceMappingURL=validation.middleware.js.map
