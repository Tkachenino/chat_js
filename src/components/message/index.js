import templateHbs from './template.hbs';
import Handlebars from 'handlebars';
const template = ({ own, text, date }) =>
  Handlebars.compile(templateHbs({ own, text, date }))();
export default template;
