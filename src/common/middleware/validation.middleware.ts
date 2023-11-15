import { validate } from 'class-validator';
import { ValidationError } from 'class-validator/types/validation/ValidationError';

export const validationMiddleware = <T extends object>(type: { new (): T }) => {
  return (req, res, next) => {
    validatePayload<T>(req.body, type).then((errors) => {
      if (errors.length === 0) {
        next();
      } else {
        console.log('Promise rejected (validation failed). Errors: ', errors);
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
