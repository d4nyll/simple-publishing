import * as postEngine from '../engine/post';

function create(req, res) {
  const id = postEngine.create(req.body);
  res.end(id);
}

function retrieve(req, res) {
  const result = postEngine.read(req.params.id);
  if (!(result instanceof Error)) {
    res.status(200);
    res.end(result);
  } else if (result.statusCode) {
    res.status(result.statusCode);
    res.end(result.payload);
  } else {
    res.status(500);
    res.end();
  }
}

function retrieveAll(req, res) {
  const posts = postEngine.readAll();
  res.end(posts);
}

function del(req, res) {
  const result = postEngine.destroy(req.params.id);
  if (!(result instanceof Error)) {
    res.status(200);
    res.end();
  } else if (result.statusCode) {
    res.status(result.statusCode);
    res.end(result.payload);
  } else {
    res.status(500);
    res.end();
  }
}

export {
  create,
  retrieve,
  retrieveAll,
  del,
};
