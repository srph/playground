const data = {
  id: 1,
  username: 'hello',
  password: ''
};

export default function(cb) {
  setTimeout(() => {
    const err = false;
    cb(err, data);
  }, 1000);
}