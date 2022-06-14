import templateHbs from './template.hbs';
import Handlebars from 'handlebars';
const template = ({ label, name, type, value }) =>
  Handlebars.compile(templateHbs({ label, name, type, value }))();
export default template;
