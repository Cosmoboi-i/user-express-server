import Joi from 'joi';
import { BadInputError } from '../../utils/errors.js';

const id = Joi.object({
  id: Joi.string().required(),
});

const user = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  dob: Joi.date().required(),
});

export const userValidation = (req, res, next) => {
  const { error } = user.validate(req.body);
  if (error) {
    throw new BadInputError(error.message);
  }
  next();
};

export const idValidation = (req, res, next) => {
  const { error } = id.validate(req.params);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

