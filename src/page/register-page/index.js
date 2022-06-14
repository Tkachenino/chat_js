import template from './template.hbs';
import Handlebars from 'handlebars';
import Input from '../../components/input';
import Button from '../../components/button';
export const inputs = [
  Input({ label: 'Имя', name: 'first_name', type: 'text', value: '' }),
  Input({ label: 'Фамилия', name: 'second_name', type: 'text', value: '' }),
  Input({ label: 'Логин', name: 'login', type: 'text', value: '' }),
  Input({ label: 'Почта', name: 'email', type: 'text', value: '' }),
  Input({ label: 'Телефон', name: 'phone', type: 'text', value: '' }),
  Input({ label: 'Пароль', name: 'password', type: 'password', value: '' }),
  Input({
    label: 'Пароль (ещё раз)',
    name: 'password_repeat',
    type: 'password',
    value: ''
  })
];

export const buttons = [
  Button({ text: 'Зарегистрироваться' }),
  Button({ text: 'Войти', link: '/login' })
];
export const register_data = { inputs, buttons };
const template = ({ inputs, buttons }) =>
  Handlebars.compile(template({ inputs, buttons }, { data: true }))();
export default template;
