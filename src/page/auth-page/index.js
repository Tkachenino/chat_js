import template from './template.hbs';
import Handlebars from 'handlebars';
import Input from '../../components/input';
import Button from '../../components/button';
export const inputs = [
  Input({ label: 'Логин', name: 'login', type: 'text', value: '' }),
  Input({ label: 'Пароль', name: 'password', type: 'password', value: '' })
];

export const buttons = [
  Button({ text: 'Авторизоваться' }),
  Button({ text: 'Нет аккаунта?', link: '/register' })
];
export const login_data = { inputs, buttons };
const template = ({ inputs, buttons }) =>
  Handlebars.compile(template({ inputs, buttons }, { data: true }))();
export default template;
