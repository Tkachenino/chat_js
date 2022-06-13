import Form from './page/login';
import { data } from './page/login';
const main = document.querySelector('main');
const form = Form(data);
main.innerHTML = form;
