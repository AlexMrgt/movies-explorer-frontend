const routesWithoutHeader = [
  '/signin',
  '/signup',
  '/not-found',
];

const routesWithoutFooter = [
  '/signin',
  '/signup',
  '/profile',
  '/not-found',
];

const MOVIES_INFO_MESSAGES = {
  beforeFirstSearchNoMovies: 'Введите фильм в строку поиска',
  onFoundNoMovies: 'По вашему запросу ничего не нашлось',
  noSavedMovies: 'Похоже, вам ничего не нравится',
  onFoundNoSavedMovies: 'По вашему запросу ничего не нашлось',
}

const BUTTON_TEXT = {
  account: 'Аккаунт',
  movies: 'Фильмы',
  savedMovies: 'Сохраненные фильмы',
  edit: 'Редактировать',
  signOut: 'Выйти из аккаунта',
  editSubmit: 'Сохранить',
  editCancel: 'Отмена',
  showAllSaved: 'Показать все сохраненные фильмы',
  shortFilmsFilter: 'Короткометражки',
}

const INFO_POPUP_MESSAGES = {

  signUpBadRequestError: 'В регистрации отказано: отправлены некорректные данные, пожалуйста, введите данные в указанном формате.',
  signUpConflictError:'В регистрации отказано: пользователь с таким email уже существует.',
  successSignUp: 'Регистрация прошла успешно.',

  signInsUnauthorizedError:'Неверный email или пароль.',
  signInBadRequestError: 'В авторизации отказано: отправлены некорректные данные, пожалуйста, введите данные в указанном формате.',

  updateUserConflictError: 'Не удалось обновить профиль : пользователь с таким email уже существует.',
  updateBadRequestError: 'Не удалось обновить профиль: введены некорректные данные',
  successUserUpdate: 'Профиль успешно обновлен.'

}

export {
  routesWithoutHeader,
  routesWithoutFooter,
  MOVIES_INFO_MESSAGES,
  BUTTON_TEXT,
  INFO_POPUP_MESSAGES,
}
