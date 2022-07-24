abstract class HttpErrorBase extends Error {
  abstract readonly statusCode: number;
}

export { HttpErrorBase };
