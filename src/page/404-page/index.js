import template from './template.hbs';
import Handlebars from 'handlebars';
import Button from '../../components/button';

export const link = Button({ text: 'Назад к чатам', link: '/' });
export const not_found_data = { link };
const template = ({ link }) =>
  Handlebars.compile(template({ link }, { data: true }))();
export default template;
