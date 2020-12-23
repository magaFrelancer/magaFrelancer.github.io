const en = document.querySelector('#en');
const ru = document.querySelector('#ru');
const ruWords = [
    'О компании',
    'Наши услуги',
    'Контакты',
    'Трейдинговая Компания',
    'Мы трейдинговая компания Fias International Industry Limited',
    `Наша команда подходят к крупными и мелкими 
    проектами с усердием, точностью 
    и осмотрительностью, а наши эксперты хорошо 
    известны своим профессионализмом, точностью, 
    быстротой отклика.`,
    'С нами вы не ошибетесь в выборе!',
    'НАШИ УСЛУГИ',
    'Консалтинг',
    'Управление проектами',
    'НАШИ ТОВАРЫ',
    'Трубы',
    'Фитинги',
    'Строительные приборы',
    'Фланец',
    'Одежды безопасности',
    'Электротехническая продукция',
    'Трансформаторы и Реакторы',
    'Тяжелые оборудование',
    'ВИДЕНИЕ',
    `Fias Intl Industry Limited стремится сделать наших клиентов и руководителей одинаково успешными во всех наших деловых сделках. В основе нашего успеха лежат взаимовыгодные долгосрочные деловые отношения между нашими клиентами и руководителями.`,
    `Наша опытная и находчивая команда обучена оказывать техническую поддержку продуктов и способна удовлетворить ваши первоначальные требования с наиболее конкурентоспособной ценой и высококачественными услугами в очень короткие сроки.Мы гарантируем, что Fias Intl Industry Limited предоставит вам материалы и услуги высочайшего качества.`,
    'Мы будем благодарны, если вы рассмотрите нас для всех ваших будущих проектов.',
    'Контактные данные',
    'Адрес:',
    'Номер телефона:',
    'Директор:'
];
const enWords = [
    'About us',
    'Our services',
    'Contacts',
    'Trading Company',
    'We are Fias International Industry Limited Trading Company',
    `Our team is suitable for large and small
    projects with diligence, precision
    and discretion, and our experts are good
    known for their professionalism, accuracy,
    quick response.`,
    `With us you can't make the wrong choice!`,
    'OUR SERVICES',
    'Consulting',
    'Project management',
    'OUR PRODUCTS',
    'Pipes',
    'Fittings',
    'Instrumentation Items',
    'Flanges',
    'Safety Products',
    'Electrical Products',
    'Transformers and Reactors',
    'Heavy equipment',
    'VISION',
    `Fias Intl Industry Limited is committed to make our clients & principals
    equally successful in all our business deals. The core of our success is mutually beneficial long
    term business relationship between our clients & principals.`,
    `Our experienced and resourceful team are trained to give the technical
    supports of the products and
    capable to fulfill your original requirements with most competitive price and high quality services
    in very short time. We assure that Fias Intl Industry Limited will provide you superior quality
    materials and services.`,
    'We would be grateful if you kindly consider us for all your future requirement.',
    'Contact details',
    'Address:',
    'Phone number:',
    'Director:'
];
const changeText = document.querySelectorAll('.change-text');

ru.addEventListener('click', changeLang);
en.addEventListener('click', changeLang)

function changeLang() {
    let atr = this.getAttribute('data-select');
    if (atr === 'ru') {
        changeText.forEach((item, index) => {
            item.innerText = ruWords[index]
        });
    }else if (atr === 'en') {
        changeText.forEach((item, index) => {
            item.innerText = enWords[index]
        });
    }
}