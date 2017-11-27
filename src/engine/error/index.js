class NotFound extends Error {
  constructor(id) {
    super();
    this.statusCode = 404;
    this.payload = {};
    this.payload.code = '003';
    this.payload.message = `The post with ID \`${id}\` could not be found`;
  }
}

export {
  NotFound,
};
