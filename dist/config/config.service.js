'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const process = require('process');
const dotenv = require('dotenv');
dotenv.config();
class ConfigService {
  constructor(env, requiredKeys) {
    this.env = env;
    this.requiredKeys = requiredKeys;
    this.ensureKeys();
  }
  get(key) {
    return this.env[key];
  }
  ensureKeys() {
    const missingKeys = this.requiredKeys.filter((key) => {
      const value = this.get(key);
      return !value;
    });
    if (missingKeys.length) {
      throw new Error('Missing env variables: ' + JSON.stringify(missingKeys));
    }
    return this;
  }
}
const configService = new ConfigService(process.env, [
  'DB_USER',
  'DB_PASSWORD',
  'DB_NAME',
  'DB_PORT',
  'DB_OUT_PORT',
  'APP_OUT_PORT',
  'APP_PORT',
]);
exports.default = configService;
//# sourceMappingURL=config.service.js.map
