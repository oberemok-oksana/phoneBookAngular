export class LoginResponse {
  constructor(
    public status: 'ok' | 'error',
    public token: string | null,
    public error: string | null
  ) {}

  static fromJSON(json: any) {
    return new LoginResponse(json.status, json.token, json.error);
  }

  isSucceccful() {
    return this.status === 'ok';
  }

  isErrored() {
    return this.status === 'error';
  }
}
