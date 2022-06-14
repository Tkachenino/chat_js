import template from './template.hbs';
import Handlebars from 'handlebars';
import Chat from '../../components/chat-item';
import Message from '../../components/message';
const chat = {
  name: 'Влад',
  image:
    'https://images.unsplash.com/profile-1589352637695-cd91ccd020f0image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
  text: 'Text message',
  date: '11:23',
  count: '12'
};

const message = () => ({
  text: 'GGdgdgdg',
  date: '10:20',
  own: Math.random() > 0.5
});

export const chats = Array.from({ length: 20 }, (k, v) => {
  return Chat(chat);
});

export const messages = Array.from({ length: 20 }, (k, v) => {
  return Message(message());
});

export const chat_page_data = { chats, messages };
const template = ({ chats, messages }) =>
  Handlebars.compile(template({ chats, messages }, { data: true }))();
export default template;
