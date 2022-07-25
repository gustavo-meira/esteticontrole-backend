interface IJWTProvider {
  generate(payload: any): string;
  decode<T>(token: string): T | null;
}

export { IJWTProvider };
