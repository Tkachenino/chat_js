import templateHbs from './template.hbs';
import Handlebars from 'handlebars';
const template = ({ link, text }) =>
  Handlebars.compile(templateHbs({ link, text }))();
export default template;
