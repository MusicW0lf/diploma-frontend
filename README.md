# 📘 AlgoLib 

> Фронтенд веб-застосуноку для програмування з авторизацією користувача.

---

## 👤 Автор

- **ПІБ**: Мінькач Валентин
- **Група**: ФЕІ-42
- **Керівник**: ас. Кулик П.Р.
- **Дата виконання**: [07.06.2025]

---

## 📌 Загальна інформація

- **Тип проєкту**: Вебсайт
- **Мова програмування**: HTML, CSS, TS
- **Фреймворки / Бібліотеки**: Наведені у файлі package.json

---

## 🧠 Опис головного функціоналу

- 🔐 Реєстрація та авторизація користувачів
- 🗒️ Створення, редагування, видалення проектів на вкладці Laboratory
- 📱 Інтерфейс для програмування проектів на сайті

---

## 🧱 Опис основних класів / файлів

| Клас / Файл              | Призначення |
|--------------------------|-------------|
| `main.ts`                | Точка входу Angular-застосунку |
| `index.html`             | Базовий HTML-файл, у який вбудовується інтерфейс Angular |
| `app.component.ts`       | Головний компонент застосунку; відповідає за ініціалізацію інтерфейсу |
| `app.config.ts`          | Конфігурація маршрутизатора; визначає маршрути та їх компоненти |
| `app.routes.ts`          | Файл з описом навігаційних маршрутів між сторінками |
| `styles.css`             | Глобальні стилі, які застосовуються до всього застосунку |
| `src/app/`               | Основна директорія з функціональними модулями (уроки, лабораторії, алгоритми, реєстрація, підписка тощо) |
| `angular.json`           | Конфігураційний файл Angular CLI; містить налаштування збірки, стилів, ресурсів |
| `package.json`           | Список залежностей, скрипти для запуску й збірки проєкту |
| `tsconfig.json`          | Конфігурація TypeScript; визначає правила компіляції коду |
| `.editorconfig`          | Налаштування стилю коду (відступи, кодування тощо) |
| `.gitignore`             | Файл для виключення службових файлів із системи контролю версій Git |

---

## ▶️ Як запустити проєкт "з нуля"

### 1. Встановлення інструментів
 - Python 3.11+
 - pip
 - PostgreSQL (або SQLite для локального запуску)

### 2. Зайти в головну папку проекту
```bash
cd .\diploma-frontend\
```

### 3. Скачати потрібні бібліотеки
```bash
npm install
```

### 4. Запустити django сервер
Інструкція знаходиться у відповідному репозиторії:
https://github.com/MusicW0lf/django-restApi13

### 5. Запустити angular сервер
```bash
ng serve
```

### 6. Перейти за посиланням
http://localhost:4200/

---

## 🔌 Примітки до серверної частини чайту

> Весь зв'язок сайту з backend знаходиться у відповідному репозиторії:
https://github.com/MusicW0lf/django-restApi13

## 🖱️ Інструкція для користувача зі сторони фронту
1. За посиланням http://localhost:4200/ можна потрапити на головну сторінку.
2. Є пересилання між сторінками сайту на інші:
   - `Головна сторінка`
   - `Теми алгоритмів`
   - `Підписка на сайт`
   - `Лабораторія`
   - `Логінація та Реєстрація`
3. При вході на сторінку Laboratory ми можемо створити проект та перейти на сторінку Code, де можна програмувати код із підствіткою.

---

## 🖱️ Інструкція для користувача зі сторони беку
1. **Зареєструйтесь** або **увійдіть** на http://localhost:4200/auth?mode=signup або http://localhost:4200/auth?mode=login
2. Зайдіть на вкладку Laboratory і використовуючи візуальну панель:
   - `➕ Створити проект`
   - `📄 перейти на створені проекти`
3. Зайдіть на певний проект і використовуючи візуальну панель можна робити наступні дії:
   - `📄 Перегляд назви проекту та його коду`
   - `✏️ Перейменувати проект`, `🗑️ Видалити проект`
   - `▶️ Виконати код`

---

## 🧪 Тестування навантаження

Для тестування сайту достатньо перейти на якусь сторінку, увімкнути Інспектор (Ctrl+Shift+I), перейти у вкладки Network та Performance та натиснути Record and Reaload (Ctrl+Shift+E)

---

## 📷 Приклади / скриншоти

Головні скриншоти інтерфейсу та тестування знаходяться у папці `/screenshots/`

---

## 🧪 Проблеми і рішення

| Проблема              | Рішення                            |
|----------------------|------------------------------------|
| Помилка з взаємодією | Перезавантажити сторінку і знову увійти в профіль |
| Помилка з виходом | Перезавантажити сторінку, можливо у іншому вікні відкрити сайт |
| Не працює сайт    | Увімкнути backend сайту, або вимкнути інший, що працює на тому ж порті   |

---

## 🧾 Використані джерела / література

- Angular офіційна документація (https://angular.io/docs)
- TypeScript документація (https://www.typescriptlang.org/docs)
- RxJS документація (https://rxjs.dev/guide/overview)
- Angular CLI гайд (https://angular.io/cli)
- Bootstrap 5 документація (https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- Prism.js документація (https://prismjs.com/)
- StackOverflow — приклади, рішення помилок і best practices

---
