export declare const validationMiddleware: <T extends object>(
  type: new () => T,
) => (req: any, res: any, next: any) => void;
