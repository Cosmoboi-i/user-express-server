export class HTTPError extends Error {
  constructor(message, status) {
    super(message);
    this.message = message;
    this.status = status;
  }
}

export class BadInputError extends HTTPError {
  constructor(message) {
    super(message, 400);
  }
}
export class NotFoundError extends HTTPError {
  constructor(message) {
    super(message, 404);
  }
}

export const errorHandler = (err, req, res, next) => {
  if (err instanceof HTTPError) {
    res.status(err.status).json({ message: err.message });
    next();
  }
  res.status(500).json({ message: err.message });
  next();
};

