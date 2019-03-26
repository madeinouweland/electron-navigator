class EventEmitter {
	constructor() {
		this._handlersByName = {};
	}

	emit(name, value) {
		const handlers = this._handlersByName[name];
		if (handlers) {
			for(const h of handlers) {
				h(value);
			}
		}
	}

	on(name, callback) {
		let handlers = this._handlersByName[name];
		if (!handlers) {
			this._handlersByName[name] = handlers = new Set();
		}
		handlers.add(callback);
	}

	off(name, callback) {
		const handlers = this._handlersByName[name];
		if (handlers) {
			handlers.delete(callback);
			if (handlers.length === 0) {
				delete this._handlersByName[name];
			}
		}
	}
}


module.exports = {
  EventEmitter
};
