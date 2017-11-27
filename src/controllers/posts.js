import * as postEngine from '../engine/post';

function create(req, res, next) {
  const id = postEngine.create(req.body);
  res.send(id);
  next();
}

function retrieve(req, res, next) {
  const result = postEngine.read(req.params.id);
  if (!(result instanceof Error)) {
    res.status(200);
    res.send(result);
  } else if (result.statusCode) {
    res.status(result.statusCode);
    res.send(result.payload);
  } else {
    res.status(500);
  }
  res.end();
  next();
}

function retrieveAll(req, res, next) {
  const posts = postEngine.readAll();
  res.send(posts);
  next();
}

function del(req, res, next) {
  const result = postEngine.destroy(req.params.id);
  if (!(result instanceof Error)) {
    res.status(200);
  } else if (result.statusCode) {
    res.status(result.statusCode);
    res.send(result.payload);
  } else {
    res.status(500);
  }
  res.end();
  next();
}

export {
  create,
  retrieve,
  retrieveAll,
  del,
};
