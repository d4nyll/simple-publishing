import { v4 as uuid } from 'uuid';
import { NotFound as NotFoundError } from '../error';

const store = {};

function add(entity) {
  const id = uuid();
  store[id] = entity;
  return id;
}

function retrieve(id) {
  const post = store[id];
  return post || new NotFoundError(id);
}

function retrieveAll() {
  return Object.entries(store).map(entry => ({
    _id: entry[0],
    body: entry[1],
  }));
}

function remove(id) {
  if (store[id]) {
    return delete store[id];
  }
  return new NotFoundError(id);
}

export {
  add,
  retrieve,
  retrieveAll,
  remove,
};
