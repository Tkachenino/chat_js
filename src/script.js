import LoginPage from './page/auth-page';
import RegisterPage from './page/register-page';
import NotFoundPage from './page/404-page';
import ServerErrorPage from './page/500-page';
import ChatPage from './page/chat-page';
import ProfilePage from './page/profile-page';

import { login_data } from './page/auth-page';
import { register_data } from './page/register-page';
import { not_found_data } from './page/404-page';
import { server_error_data } from './page/500-page';
import { chat_page_data } from './page/chat-page';
import { profile_page_data } from './page/profile-page';

const login_form = LoginPage(login_data);
const register_form = RegisterPage(register_data);
const not_found_page = NotFoundPage(not_found_data);
const server_error_page = ServerErrorPage(server_error_data);
const chat_page = ChatPage(chat_page_data);
const profile_page = ProfilePage(profile_page_data);

const body = document.querySelector('body');
body.innerHTML = register_form;
body.innerHTML = login_form;
body.innerHTML = not_found_page;
body.innerHTML = server_error_page;
body.innerHTML = chat_page;
body.innerHTML = profile_page;
