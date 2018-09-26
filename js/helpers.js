function hasClass (element, target) {
    return element.className.match(new RegExp('(\\s|^)' + target + '(\\s|$)'));
}

function addClass (element, target) {
    if (!hasClass(element, target)) {
        element.className += ' ' + target;
    }
}

function removeClass (element, target) {
    if (hasClass(element, target)) {
        let findTarget = new RegExp('(\\s|^)' + target + '(\\s|$)');

        element.className = element.className.replace(findTarget, '');
    }
}

function authenticate (email, password, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].email === email) {
            if (array[i].password === password) {
                return true;
            }
        }
    }
}

function checkEmailExists (email, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].email === email) {
            return true;
        }
    }

    return false;
}

function getUser (email, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].email === email) {
            return array[i];
        }
    }

    return false;
}

function getProjects (email, array) {
    let projects = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].users.length; j++) {
            if (email === array[i].users[j]) {
                projects.push(array[i]);
            }
        }
    }

    return projects;
}

function getTasks (email, array) {
    let tasks = [];
    
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].users.length; j++) {
            if (email === array[i].users[j]) {
                tasks.push(array[i]);
            }
        }
    }

    return tasks;
}

function replaceHash (hash) {
    location.hash = hash;
}

function replaceHTML (target, data) {
    target.innerHTML = data;
}

if (!Object.prototype.watch) {
	Object.defineProperty(Object.prototype, "watch", {
        enumerable: false,
        configurable: true,
        writable: false,
        value: function (property, handler) {
			let oldValue = this[property], newValue = oldValue, getter = function () {
				return newValue;
			}, setter = function (value) {
				oldValue = newValue;
				return newValue = handler.call(this, property, oldValue, value);
			};
			
			if (delete this[property]) {
				Object.defineProperty(this, property, {
                    get: getter,
                    set: setter,
					enumerable: true,
					configurable: true
				});
			}
		}
	});
}

if (!HTMLFormElement.prototype.reportValidity) {
    HTMLFormElement.prototype.reportValidity = function () {
        let submitButtons = this.querySelectorAll("button, input[type=submit]");
        for (let i = 0; i < submitButtons.length; i++) {
            if (submitButtons[ i ].type === "submit") {
                submitButtons[ i ].click();
                return;
            }
        }
    }
}