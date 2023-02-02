import { v4 as uuid } from 'uuid';
let users = [];

export const getAllUsers = (req, res) => {
  res.status(200).json(users);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  res.status(200).json(user);
};

export const createUser = (req, res, next) => {
  try {
    const user = { ...req.body, id: users.length + 1 };
    console.log(user);
    users.push(user);
    res.status(201).json('New user successfully created.');
  } catch (error) {
    next(error);
  }
};
