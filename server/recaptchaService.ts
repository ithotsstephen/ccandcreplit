export class RecaptchaService {
  private readonly secretKey: string;
  private readonly verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';

  constructor() {
    this.secretKey = process.env.RECAPTCHA_SECRET_KEY || '';
    if (!this.secretKey) {
      console.warn('RECAPTCHA_SECRET_KEY not configured');
    }
  }

  async verifyToken(token: string, remoteIp?: string): Promise<boolean> {
    if (!this.secretKey) {
      console.error('reCAPTCHA verification failed: Secret key not configured');
      return false;
    }

    if (!token) {
      console.error('reCAPTCHA verification failed: No token provided');
      return false;
    }

    try {
      const params = new URLSearchParams({
        secret: this.secretKey,
        response: token,
        ...(remoteIp && { remoteip: remoteIp })
      });

      const response = await fetch(this.verifyUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      const data = await response.json();
      
      if (data.success) {
        console.log('reCAPTCHA verification successful');
        return true;
      } else {
        console.error('reCAPTCHA verification failed:', data['error-codes']);
        return false;
      }
    } catch (error) {
      console.error('reCAPTCHA verification error:', error);
      return false;
    }
  }
}

export const recaptchaService = new RecaptchaService();
