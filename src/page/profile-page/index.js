import template from './template.hbs';
import Handlebars from 'handlebars';
import Info from '../../components/info';
import Input from '../../components/input';
import Button from '../../components/button';

const profile_settings = [
  { label: 'Почта', name: 'email', value: 'pochta@yandex.ru' },
  { label: 'Логин', name: 'login', value: 'ivanivanov' },
  { label: 'Имя', name: 'first_name', value: 'Иван' },
  { label: 'Фамилия', name: 'second_name', value: 'Иванов' },
  { label: 'Имя в чате', name: 'display_name', value: 'Иван' },
  { label: 'Телефон', name: 'phone', value: '+7-(909)-967-30-30' }
];

const avatar = { label: 'Аватар', name: 'avatar', value: '' };

const password_settings = [
  { label: 'Старый пароль', name: 'oldPassword', value: '12324' },
  { label: 'Новый пароль', name: 'newPassword', value: '' }
];

export const info_items = profile_settings.map((item) => {
  return Info(item);
});

export const inputs = profile_settings.map((item) => {
  return Input({ ...item, type: 'text' });
});

export const password = password_settings.map((item) => {
  return Input({ ...item, type: 'password' });
});

export const buttons = [
  Button({ text: 'Зарегистрироваться' }),
  Button({ text: 'Войти', link: '/login' })
];
export const profile_page_data = {
  info: info_items,
  inputs,
  password,
  changeProfile: Button({ text: 'Изменить данные' }),
  changePassword: Button({ text: 'Изменить пароль' }),
  logout: Button({ text: 'Выйти' })
};
const template = ({
  info,
  inputs,
  password,
  changeProfile,
  changePassword,
  logout
}) =>
  Handlebars.compile(
    template(
      { inputs, info, password, changeProfile, changePassword, logout },
      { data: true }
    )
  )();
export default template;
