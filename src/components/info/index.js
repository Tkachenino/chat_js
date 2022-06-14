import templateHbs from './template.hbs';
import Handlebars from 'handlebars';
const template = ({ label, value }) =>
  Handlebars.compile(templateHbs({ label, value }))();
export default template;
