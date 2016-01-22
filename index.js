function QeventEmitter() {
  this.events = {};
}

QeventEmitter.prototype.emit = function emit(name) {
  if (!this.events[name]) return;
  this.events[name].forEach(function(cb) {
    cb();
  });
};
  
QeventEmitter.prototype.on = function on(name, callback) {
  this.events[name] = this.events[name] || [];
  this.events[name].push(callback);  
};

QeventEmitter.prototype.off = function off(name) {
  if (!this.events[name]) return;
  delete this.events[name];
  return;
};

module.exports = QeventEmitter;

