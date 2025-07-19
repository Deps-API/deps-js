export class DepsApiError extends Error {
  constructor(public status: number, public statusText: string, message?: string) {
    super(message || `Request failed with status ${status}: ${statusText}`);
    this.name = 'DepsApiError';
  }
}

export class ValidationError extends DepsApiError {
  constructor(status: number, statusText: string, public errors: unknown) {
    super(status, statusText, 'Validation Error');
    this.name = 'ValidationError';
  }
} 