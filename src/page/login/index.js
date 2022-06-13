import template from './template.hbs';
import Handlebars from 'handlebars';
import Input from '../../components/input';
import Button from '../../components/button';
export const inputs = [
  Input({ label: 'Логин', name: 'login', type: 'text' }),
  Input({ label: 'Пароль', name: 'password', type: 'password' })
];

export const buttons = [
  Button({ text: 'Авторизоваться' }),
  Button({ text: 'Нет аккаунта?', link: '/register' })
];
export const data = { inputs, buttons };
const template = ({ inputs }) =>
  Handlebars.compile(template({ inputs }, { data: true }))();
export default template;
