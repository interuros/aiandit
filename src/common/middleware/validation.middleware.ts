import { validate } from 'class-validator';
import { ValidationError } from 'class-validator/types/validation/ValidationError';
import { RequestHandler } from 'express-serve-static-core';

export const validationMiddleware = <T extends object>(type: {
  new (): T;
}): RequestHandler => {
  return (req, res, next) => {
    let payload = req.body;

    if (req.method === 'GET') {
      payload = req.query;
    }

    validatePayload<T>(payload, type).then((errors) => {
      if (errors.length === 0) {
        next();
      } else {
        res.status(400).send(errors);
      }
    });
  };
};

const validatePayload = <T extends object>(
  payload: Object,
  type: { new (): T },
): Promise<ValidationError[]> => {
  const obj = new type();

  Object.keys(payload).forEach((k) => {
    obj[k] = payload[k];
  });

  return validate(obj);
};
