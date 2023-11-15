import * as process from 'process';
import * as dotenv from 'dotenv';

dotenv.config();

class ConfigService {
  constructor(
    private env: { [k: string]: string | undefined },
    private requiredKeys: string[],
  ) {
    this.ensureKeys();
  }

  public get(key: string): string | undefined {
    return this.env[key];
  }

  private ensureKeys() {
    const missingKeys: string[] = this.requiredKeys.filter((key) => {
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

export default configService;
