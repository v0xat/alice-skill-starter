# Шаблон проекта навыка для Алисы на Node.js
[![Node CI](https://github.com/v0xat/alice-skill-starter/workflows/Node%20CI/badge.svg)](https://github.com/v0xat/alice-skill-starter/actions)

Готовый к использованию шаблон проекта [навыка для Алисы](https://yandex.ru/dev/dialogs/alice/doc/about-docpage/) на Node.js.  
Это немного измененная версия репозитория [vitalets](https://github.com/vitalets/alice-skill-starter).

## Использование
Проект можно развернуть в облаке на Heroku, а затем продолжить разработку и отладку на своем ПК.

### Деплой на heroku
1. Нажмите на кнопку ниже  
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/v0xat/alice-skill-starter)

2. После развертывания нажмите на кнопку View и скопируйте URL.
3. Создайте новый навык для Алисы в [Яндекс Диалогах](https://dialogs.yandex.ru/).
4. Укажите название навыка и URL вебхука, который вы скопировали.
5. Нажмите "Сохранить" и переходите на вкладку "Тестирование".

## Локальная разработка и обновление
### Интеграция с Heroku
1. Установите [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).
2. Выполните следующие команды в терминале:
```
heroku login
heroku git:clone -a <название вашего приложения на Heroku>
cd <название вашего приложения на Heroku>
git remote add origin https://github.com/v0xat/alice-skill-starter
git pull origin master
```
Как только вы готовы обновить сервер, выполните следующие команды в терминале:
```
git add .
git commit -m "описание изменений"
git push
```
Heroku автоматически соберет и обновит ваш сервер.
### Запуск локально через ngrok
1. Установите [ngrok](https://github.com/bubenshchykov/ngrok) глобально: `npm install ngrok -g`
2. Запустите навык: `make start-d`  
Сервер навыка запустится на 3000 порту:
```
HTTP server started on port: 3000
```
3. В соседнем окне терминала запустите ngrok: `ngrok http 3000`  

4. Скопируйте URL сформированный ngrok `https://XXXXXXXX.ngrok.io` в поле Webhook URL в панели разработчика.

## Тестирование
### Запуск юнит тестов
```bash
make test
```

Результат:
```
  repeat
    ✓ should repeat user message

  welcome
    ✓ should show welcome message


  2 passing (30ms)
```
