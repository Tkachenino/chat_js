import templateHbs from './template.hbs';
import Handlebars from 'handlebars';
const template = ({ label, name, type }) =>
  Handlebars.compile(templateHbs({ label, name, type }))();
export default template;
