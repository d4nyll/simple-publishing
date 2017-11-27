import * as storage from '../storage';

function create(post) {
  return storage.add(post);
}

function read(id) {
  return storage.retrieve(id);
}

function readAll() {
  return storage.retrieveAll();
}

function destroy(id) {
  return storage.remove(id);
}

export {
  create,
  read,
  readAll,
  destroy,
};
