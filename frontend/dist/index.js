"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Student {
    constructor(username, email, password) {
        this.username = username,
            this.email = email,
            this.password = password;
    }
    greetingNewStudent() {
        return `Hello ${this.username} with email::${this.email}`;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const data = {
            username,
            email,
            password,
        };
        console.log(`data::${data}`);
        try {
            const response = yield fetch('http://localhost:3333/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = yield response.json();
            console.log(result);
        }
        catch (error) {
            console.error('Error:', error);
        }
    }));
});
