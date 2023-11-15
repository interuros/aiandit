declare class ConfigService {
  private env;
  private requiredKeys;
  constructor(
    env: {
      [k: string]: string | undefined;
    },
    requiredKeys: string[],
  );
  get(key: string): string | undefined;
  private ensureKeys;
}
declare const configService: ConfigService;
export default configService;
