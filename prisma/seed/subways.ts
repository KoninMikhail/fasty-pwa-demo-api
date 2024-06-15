const subways = [
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Парк культуры'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Преображенская площадь'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Проспект Вернадского'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Сокольники'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Спортивная'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Чистые пруды'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Бульвар Рокоссовского'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Университет'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Фрунзенская'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Черкизовская'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Юго-Западная'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Воробьевы горы'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Библиотека им.Ленина'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Тропарево'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Румянцево'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Саларьево'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Комсомольская'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Красносельская'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Красные ворота'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Кропоткинская'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Лубянка'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Филатов луг'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Прокшино'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Ольховая'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Коммунарка'
  },
  {
    line_id: '1',
    line_name: 'Сокольническая',
    line_color: 'E42313',
    name: 'Охотный ряд'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Печатники'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Римская'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Сретенский бульвар'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Трубная'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Достоевская'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Марьина Роща'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Зябликово'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Борисово'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Шипиловская'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Братиславская'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Волжская'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Дубровка'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Кожуховская'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Бутырская '
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Фонвизинская'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Петровско-Разумовская'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Окружная'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Селигерская'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Верхние Лихоборы'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Крестьянская застава'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Чкаловская'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Люблино'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Марьино'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Физтех'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Лианозово'
  },
  {
    line_id: '10',
    line_name: 'Люблинско-Дмитровская',
    line_color: 'BED12C',
    name: 'Яхромская'
  },
  {
    line_id: '11',
    line_name: 'Каховская',
    line_color: '88CDCF',
    name: 'Варшавская'
  },
  {
    line_id: '11',
    line_name: 'Каховская',
    line_color: '88CDCF',
    name: 'Каховская'
  },
  {
    line_id: '11',
    line_name: 'Каховская',
    line_color: '88CDCF',
    name: 'Каширская'
  },
  {
    line_id: '12',
    line_name: 'Бутовская',
    line_color: 'BAC8E8',
    name: 'Улица Скобелевская'
  },
  {
    line_id: '12',
    line_name: 'Бутовская',
    line_color: 'BAC8E8',
    name: 'Бунинская аллея'
  },
  {
    line_id: '12',
    line_name: 'Бутовская',
    line_color: 'BAC8E8',
    name: 'Улица Горчакова'
  },
  {
    line_id: '12',
    line_name: 'Бутовская',
    line_color: 'BAC8E8',
    name: 'Бульвар Адмирала Ушакова'
  },
  {
    line_id: '12',
    line_name: 'Бутовская',
    line_color: 'BAC8E8',
    name: 'Улица Старокачаловская'
  },
  {
    line_id: '12',
    line_name: 'Бутовская',
    line_color: 'BAC8E8',
    name: 'Лесопарковая'
  },
  {
    line_id: '12',
    line_name: 'Бутовская',
    line_color: 'BAC8E8',
    name: 'Битцевский Парк'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Лобня'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Шереметьевская'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Хлебниково'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Водники'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Долгопрудная'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Новодачная'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Марк'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Лианозово'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Бескудниково'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Дегунино'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Окружная'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Тимирязевская'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Савёловская'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Белорусская'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Беговая'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Тестовская'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Фили'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Кунцевская'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Рабочий Посёлок'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Сетунь'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Немчиновка'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Сколково'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Баковка'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Одинцово'
  },
  {
    line_id: 'D1',
    line_name: 'МЦД-1',
    line_color: 'F5A528',
    name: 'Славянский бульвар'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Нахабино'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Аникеевка'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Опалиха'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Красногорская'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Павшино'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Пенягино'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Волоколамская'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Тушинская'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Покровское-Стрешнево'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Стрешнево'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Красный Балтиец'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Гражданская'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Дмитровская'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Рижская'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Площадь трёх вокзалов'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Курская'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Москва Товарная'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Калитники'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Новохохловская'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Текстильщики'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Люблино'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Депо'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Перерва'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Москворечье'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Царицыно'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Покровское'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Красный строитель'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Битца'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Бутово'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Щербинка'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Остафьево'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Силикатная'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Подольск'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Трикотажная'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Курьяново'
  },
  {
    line_id: 'D2',
    line_name: 'МЦД-2',
    line_color: 'E74683',
    name: 'Марьина Роща'
  },
  {
    line_id: '8',
    line_name: 'Солнцевская',
    line_color: 'FFCD1C',
    name: 'Деловой центр'
  },
  {
    line_id: '8',
    line_name: 'Солнцевская',
    line_color: 'FFCD1C',
    name: 'Парк Победы'
  },
  {
    line_id: '8',
    line_name: 'Солнцевская',
    line_color: 'FFCD1C',
    name: 'Минская'
  },
  {
    line_id: '8',
    line_name: 'Солнцевская',
    line_color: 'FFCD1C',
    name: 'Ломоносовский проспект'
  },
  {
    line_id: '8',
    line_name: 'Солнцевская',
    line_color: 'FFCD1C',
    name: 'Раменки'
  },
  {
    line_id: '8',
    line_name: 'Солнцевская',
    line_color: 'FFCD1C',
    name: 'Мичуринский проспект'
  },
  {
    line_id: '8',
    line_name: 'Солнцевская',
    line_color: 'FFCD1C',
    name: 'Озёрная'
  },
  {
    line_id: '8',
    line_name: 'Солнцевская',
    line_color: 'FFCD1C',
    name: 'Говорово'
  },
  {
    line_id: '8',
    line_name: 'Солнцевская',
    line_color: 'FFCD1C',
    name: 'Солнцево'
  },
  {
    line_id: '8',
    line_name: 'Солнцевская',
    line_color: 'FFCD1C',
    name: 'Боровское шоссе'
  },
  {
    line_id: '8',
    line_name: 'Солнцевская',
    line_color: 'FFCD1C',
    name: 'Новопеределкино'
  },
  {
    line_id: '8',
    line_name: 'Солнцевская',
    line_color: 'FFCD1C',
    name: 'Рассказовка'
  },
  {
    line_id: '8',
    line_name: 'Солнцевская',
    line_color: 'FFCD1C',
    name: 'Пыхтино'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Крюково'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Малино'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Фирсановская'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Сходня'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Подрезково'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Новоподрезково'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Молжаниново'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Химки'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Левобережная'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Ховрино'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Грачёвская'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Моссельмаш'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Лихоборы'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Петровско-Разумовская'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Останкино'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Рижская'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Митьково'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Электрозаводская'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Сортировочная'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Авиамоторная'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Андроновка'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Перово'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Плющево'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Вешняки'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Выхино'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Косино'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Ухтомская'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Люберцы I'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Панки'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Томилино'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Красково'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Малаховка'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Удельная'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Быково'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Ильинская'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Отдых'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Кратово'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Есенинская'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Фабричная'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Раменское'
  },
  {
    line_id: 'D3',
    line_name: 'МЦД-3',
    line_color: 'EA5B04',
    name: 'Ипподром'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Железнодорожная'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Ольгино'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Кучино'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Салтыковская'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Никольское'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Реутово'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Новогиреево'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Кусково'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Чухлинка'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Нижегородская'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Серп и Молот'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Курская'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Площадь трёх вокзалов'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Рижская'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Марьина Роща'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Савёловская'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Белорусская'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Беговая'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Ермакова Роща'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Тестовская'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Кутузовская'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Поклонная'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Минская'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Матвеевское'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Аминьевская'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Очаково I'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Мещерская'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Солнечная'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Новопеределкино'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Переделкино'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Мичуринец'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Внуково'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Лесной Городок'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Толстопальцево'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Кокошкино'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Санино'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Крёкшино'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Победа'
  },
  {
    line_id: 'D4',
    line_name: 'МЦД-4',
    line_color: '00CC66',
    name: 'Апрелевка'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Павелецкая'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Аэропорт'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Тверская'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Речной вокзал'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Сокол'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Царицыно'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Белорусская'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Автозаводская'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Алма-Атинская'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Водный стадион'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Войковская'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Динамо'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Домодедовская'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Кантемировская'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Каширская'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Технопарк'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Коломенская'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Ховрино'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Красногвардейская'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Беломорская'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Маяковская'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Новокузнецкая'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Орехово'
  },
  {
    line_id: '2',
    line_name: 'Замоскворецкая',
    line_color: '4FB04F',
    name: 'Театральная'
  },
  {
    line_id: '3',
    line_name: 'Арбатско-Покровская',
    line_color: '0072BA',
    name: 'Площадь Революции'
  },
  {
    line_id: '3',
    line_name: 'Арбатско-Покровская',
    line_color: '0072BA',
    name: 'Партизанская'
  },
  {
    line_id: '3',
    line_name: 'Арбатско-Покровская',
    line_color: '0072BA',
    name: 'Первомайская'
  },
  {
    line_id: '3',
    line_name: 'Арбатско-Покровская',
    line_color: '0072BA',
    name: 'Семеновская'
  },
  {
    line_id: '3',
    line_name: 'Арбатско-Покровская',
    line_color: '0072BA',
    name: 'Смоленская'
  },
  {
    line_id: '3',
    line_name: 'Арбатско-Покровская',
    line_color: '0072BA',
    name: 'Щелковская'
  },
  {
    line_id: '3',
    line_name: 'Арбатско-Покровская',
    line_color: '0072BA',
    name: 'Электрозаводская'
  },
  {
    line_id: '3',
    line_name: 'Арбатско-Покровская',
    line_color: '0072BA',
    name: 'Бауманская'
  },
  {
    line_id: '3',
    line_name: 'Арбатско-Покровская',
    line_color: '0072BA',
    name: 'Парк Победы'
  },
  {
    line_id: '3',
    line_name: 'Арбатско-Покровская',
    line_color: '0072BA',
    name: 'Строгино'
  },
  {
    line_id: '3',
    line_name: 'Арбатско-Покровская',
    line_color: '0072BA',
    name: 'Славянский бульвар'
  },
  {
    line_id: '3',
    line_name: 'Арбатско-Покровская',
    line_color: '0072BA',
    name: 'Мякинино'
  },
  {
    line_id: '3',
    line_name: 'Арбатско-Покровская',
    line_color: '0072BA',
    name: 'Волоколамская'
  },
  {
    line_id: '3',
    line_name: 'Арбатско-Покровская',
    line_color: '0072BA',
    name: 'Митино'
  },
  {
    line_id: '3',
    line_name: 'Арбатско-Покровская',
    line_color: '0072BA',
    name: 'Измайловская'
  },
  {
    line_id: '3',
    line_name: 'Арбатско-Покровская',
    line_color: '0072BA',
    name: 'Пятницкое шоссе'
  },
  {
    line_id: '3',
    line_name: 'Арбатско-Покровская',
    line_color: '0072BA',
    name: 'Киевская'
  },
  {
    line_id: '3',
    line_name: 'Арбатско-Покровская',
    line_color: '0072BA',
    name: 'Арбатская'
  },
  {
    line_id: '3',
    line_name: 'Арбатско-Покровская',
    line_color: '0072BA',
    name: 'Крылатское'
  },
  {
    line_id: '3',
    line_name: 'Арбатско-Покровская',
    line_color: '0072BA',
    name: 'Кунцевская'
  },
  {
    line_id: '3',
    line_name: 'Арбатско-Покровская',
    line_color: '0072BA',
    name: 'Курская'
  },
  {
    line_id: '3',
    line_name: 'Арбатско-Покровская',
    line_color: '0072BA',
    name: 'Молодежная'
  },
  {
    line_id: '4',
    line_name: 'Филевская',
    line_color: '1EBCEF',
    name: 'Арбатская'
  },
  {
    line_id: '4',
    line_name: 'Филевская',
    line_color: '1EBCEF',
    name: 'Пионерская'
  },
  {
    line_id: '4',
    line_name: 'Филевская',
    line_color: '1EBCEF',
    name: 'Смоленская'
  },
  {
    line_id: '4',
    line_name: 'Филевская',
    line_color: '1EBCEF',
    name: 'Студенческая'
  },
  {
    line_id: '4',
    line_name: 'Филевская',
    line_color: '1EBCEF',
    name: 'Багратионовская'
  },
  {
    line_id: '4',
    line_name: 'Филевская',
    line_color: '1EBCEF',
    name: 'Филевский парк'
  },
  {
    line_id: '4',
    line_name: 'Филевская',
    line_color: '1EBCEF',
    name: 'Фили'
  },
  {
    line_id: '4',
    line_name: 'Филевская',
    line_color: '1EBCEF',
    name: 'Выставочная'
  },
  {
    line_id: '4',
    line_name: 'Филевская',
    line_color: '1EBCEF',
    name: 'Международная'
  },
  {
    line_id: '4',
    line_name: 'Филевская',
    line_color: '1EBCEF',
    name: 'Кунцевская'
  },
  {
    line_id: '4',
    line_name: 'Филевская',
    line_color: '1EBCEF',
    name: 'Киевская'
  },
  {
    line_id: '4',
    line_name: 'Филевская',
    line_color: '1EBCEF',
    name: 'Александровский сад'
  },
  {
    line_id: '4',
    line_name: 'Филевская',
    line_color: '1EBCEF',
    name: 'Кутузовская'
  },
  {
    line_id: '5',
    line_name: 'Кольцевая',
    line_color: '915133',
    name: 'Павелецкая'
  },
  {
    line_id: '5',
    line_name: 'Кольцевая',
    line_color: '915133',
    name: 'Парк культуры'
  },
  {
    line_id: '5',
    line_name: 'Кольцевая',
    line_color: '915133',
    name: 'Проспект Мира'
  },
  {
    line_id: '5',
    line_name: 'Кольцевая',
    line_color: '915133',
    name: 'Белорусская'
  },
  {
    line_id: '5',
    line_name: 'Кольцевая',
    line_color: '915133',
    name: 'Добрынинская'
  },
  {
    line_id: '5',
    line_name: 'Кольцевая',
    line_color: '915133',
    name: 'Киевская'
  },
  {
    line_id: '5',
    line_name: 'Кольцевая',
    line_color: '915133',
    name: 'Комсомольская'
  },
  {
    line_id: '5',
    line_name: 'Кольцевая',
    line_color: '915133',
    name: 'Краснопресненская'
  },
  {
    line_id: '5',
    line_name: 'Кольцевая',
    line_color: '915133',
    name: 'Курская'
  },
  {
    line_id: '5',
    line_name: 'Кольцевая',
    line_color: '915133',
    name: 'Таганская'
  },
  {
    line_id: '5',
    line_name: 'Кольцевая',
    line_color: '915133',
    name: 'Новослободская'
  },
  {
    line_id: '5',
    line_name: 'Кольцевая',
    line_color: '915133',
    name: 'Октябрьская'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Проспект Мира'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Профсоюзная'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Рижская'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Свиблово'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Бабушкинская'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Сухаревская'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Теплый Стан'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Тургеневская'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Шаболовская'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Ясенево'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Беляево'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Новоясеневская'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Ботанический сад'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'ВДНХ'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Академическая'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Калужская'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Китай-город'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Коньково'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Ленинский проспект'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Алексеевская'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Медведково'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Третьяковская'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Новые Черемушки'
  },
  {
    line_id: '6',
    line_name: 'Калужско-Рижская',
    line_color: 'F07E24',
    name: 'Октябрьская'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Планерная'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Полежаевская'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Пушкинская'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Рязанский проспект'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Сходненская'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Текстильщики'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Тушинская'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Улица 1905 года'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Баррикадная'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Щукинская'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Беговая'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Волгоградский проспект'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Выхино'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Лермонтовский проспект'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Жулебино'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Спартак'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Котельники'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Китай-город'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Пролетарская'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Кузнецкий мост'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Кузьминки'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Таганская'
  },
  {
    line_id: '7',
    line_name: 'Таганско-Краснопресненская',
    line_color: '943E90',
    name: 'Октябрьское поле'
  },
  {
    line_id: '8',
    line_name: 'Калининская',
    line_color: 'FFCD1C',
    name: 'Авиамоторная'
  },
  {
    line_id: '8',
    line_name: 'Калининская',
    line_color: 'FFCD1C',
    name: 'Перово'
  },
  {
    line_id: '8',
    line_name: 'Калининская',
    line_color: 'FFCD1C',
    name: 'Площадь Ильича'
  },
  {
    line_id: '8',
    line_name: 'Калининская',
    line_color: 'FFCD1C',
    name: 'Шоссе Энтузиастов'
  },
  {
    line_id: '8',
    line_name: 'Калининская',
    line_color: 'FFCD1C',
    name: 'Новокосино'
  },
  {
    line_id: '8',
    line_name: 'Калининская',
    line_color: 'FFCD1C',
    name: 'Марксистская'
  },
  {
    line_id: '8',
    line_name: 'Калининская',
    line_color: 'FFCD1C',
    name: 'Новогиреево'
  },
  {
    line_id: '8',
    line_name: 'Калининская',
    line_color: 'FFCD1C',
    name: 'Третьяковская'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Аннино'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Петровско-Разумовская'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Полянка'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Пражская'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Чеховская'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Савёловская'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Тимирязевская'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Тульская'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Улица Академика Янгеля'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Цветной бульвар'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Чертановская'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Южная'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Бульвар Дмитрия Донского'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Бибирево'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Владыкино'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Дмитровская'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Серпуховская'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Севастопольская'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Боровицкая'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Менделеевская'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Нагатинская'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Нагорная'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Нахимовский проспект'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Алтуфьево'
  },
  {
    line_id: '9',
    line_name: 'Серпуховско-Тимирязевская',
    line_color: 'ADACAC',
    name: 'Отрадное'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Окружная'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Владыкино'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Ботанический сад'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Ростокино'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Белокаменная'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Бульвар Рокоссовского'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Локомотив'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Измайлово'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Соколиная Гора'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Шоссе Энтузиастов'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Андроновка'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Нижегородская'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Новохохловская'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Угрешская'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Дубровка'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Автозаводская'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'ЗИЛ'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Верхние Котлы'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Крымская'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Площадь Гагарина'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Лужники'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Кутузовская'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Деловой центр'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Шелепиха'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Хорошево'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Зорге'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Панфиловская'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Стрешнево'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Балтийская'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Коптево'
  },
  {
    line_id: '14',
    line_name: 'МЦК',
    line_color: 'CC4C6E',
    name: 'Лихоборы'
  },
  {
    line_id: '13',
    line_name: 'Монорельс',
    line_color: '006DA8',
    name: 'Тимирязевская'
  },
  {
    line_id: '13',
    line_name: 'Монорельс',
    line_color: '006DA8',
    name: 'Улица Милашенкова'
  },
  {
    line_id: '13',
    line_name: 'Монорельс',
    line_color: '006DA8',
    name: 'Телецентр'
  },
  {
    line_id: '13',
    line_name: 'Монорельс',
    line_color: '006DA8',
    name: 'Улица Академика Королёва'
  },
  {
    line_id: '13',
    line_name: 'Монорельс',
    line_color: '006DA8',
    name: 'Выставочный центр'
  },
  {
    line_id: '13',
    line_name: 'Монорельс',
    line_color: '006DA8',
    name: 'Улица Сергея Эйзенштейна'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Петровский парк'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'ЦСКА'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Хорошевская'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Шелепиха'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Деловой центр'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Савёловская'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Электрозаводская'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Мнёвники'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Народное Ополчение'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Терехово'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Кунцевская'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Давыдково'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Аминьевская'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Мичуринский проспект'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Проспект Вернадского'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Новаторская'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Воронцовская'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Зюзино'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Каховская'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Марьина Роща'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Рижская'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Сокольники'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Варшавская'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Лефортово'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Авиамоторная'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Нижегородская'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Текстильщики'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Печатники'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Нагатинский Затон'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Кленовый бульвар'
  },
  {
    line_id: '11',
    line_name: 'Большая кольцевая линия',
    line_color: '88CDCF',
    name: 'Каширская'
  },
  {
    line_id: '15',
    line_name: 'Некрасовская',
    line_color: 'CC0066',
    name: 'Некрасовка'
  },
  {
    line_id: '15',
    line_name: 'Некрасовская',
    line_color: 'CC0066',
    name: 'Косино'
  },
  {
    line_id: '15',
    line_name: 'Некрасовская',
    line_color: 'CC0066',
    name: 'Улица Дмитриевского'
  },
  {
    line_id: '15',
    line_name: 'Некрасовская',
    line_color: 'CC0066',
    name: 'Лухмановская'
  },
  {
    line_id: '15',
    line_name: 'Некрасовская',
    line_color: 'CC0066',
    name: 'Юго-Восточная'
  },
  {
    line_id: '15',
    line_name: 'Некрасовская',
    line_color: 'CC0066',
    name: 'Окская'
  },
  {
    line_id: '15',
    line_name: 'Некрасовская',
    line_color: 'CC0066',
    name: 'Стахановская'
  },
  {
    line_id: '15',
    line_name: 'Некрасовская',
    line_color: 'CC0066',
    name: 'Нижегородская'
  },
  {
    line_id: '15',
    line_name: 'Некрасовская',
    line_color: 'CC0066',
    name: 'Лефортово'
  },
  {
    line_id: '15',
    line_name: 'Некрасовская',
    line_color: 'CC0066',
    name: 'Электрозаводская'
  },
  {
    line_id: '15',
    line_name: 'Некрасовская',
    line_color: 'CC0066',
    name: 'Авиамоторная'
  }
];

export default subways;
