import templateHbs from './template.hbs';
import Handlebars from 'handlebars';
const template = ({ image, name, text, date, count }) =>
  Handlebars.compile(templateHbs({ image, name, text, date, count }))();
export default template;
