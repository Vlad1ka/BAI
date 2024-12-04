document.addEventListener('DOMContentLoaded', () => {
    const modalWindow = document.querySelector('.modal-window')
    const opacityOverlay = document.querySelector('.opacity')
    const closeButton = modalWindow.querySelector('img')    
    const modalRegWindow = document.querySelector('.modal-window_reg')
    const closeModalRegButton = document.querySelector('.modal-window_reg__close')
    const regInput = document.querySelector('.modal-window_reg-input')
    const inputClear = document.querySelector('.input-clear')
    const checkboxes = document.querySelector('.checkbox')

    const modalTexts = {
        "Территория инноваций": "Территория инноваций – проект Фонда Росконгресс, представляющий собой площадку для диалога, полемики и обсуждения трендов с ведущими экспертами в области инноваций и цифровой трансформации. Проект объединяет на одной площадке представителей федеральных органов власти, крупный технологичный бизнес, инвесторов, корпорации развития, акселераторов, предпринимателей, молодых стартаперов и инноваторов, менторов, представителей СМИ.",
        "ВиноГрад": "Эксклюзивная тематическая площадка «ВиноГрад» от Фонда Росконгресс и Россельхозбанка, посвященная виноделию и виноградарству. Площадка станет логическим продолжением винной повестки на проектах Фонда Росконгресс и объединит производителей и регуляторов винодельческой отрасли, профессионалов и винных ценителей в обсуждении актуальных тем винодельческого рынка. Посетители смогут принять участие в открытых дегустациях, ознакомиться с историей и продукцией ведущих российских дистрибьютеров и винодельческих хозяйств.",
        "Гостиная Губернатора": "Гостиная губернаторов – это особая традиционная площадка на ВЭФ, созданная для проведения деловых встреч и неформального общения глав субъектов Российской Федерации, а также для презентации инвестиционной привлекательности субъектов и формирования их позитивного имиджа. Ежегодно основными посетителями Гостиной губернаторов являются главы субъектов Российской Федерации, полномочные представители Президента Российской Федерации, высшие должностные лица РФ и стран-гостей Форума, руководители органов федеральной и региональной власти. ",
        "Урбан": "Росконгресс Урбан Хаб – это международная дискуссионная платформа, посвященная развитию исследований и деловой кооперации в области урбанистики. Программа Урбан Хаб включает в себя серию дискуссий по ключевым вопросам градостроительства и ознаменуется панельной сессией, в ходе которой участники сформулируют основные вызовы, стоящие перед строительной отраслью. В новом тематическом пространстве обсудят и влияние качества жилья на вопросы демографии и привлечения граждан на Дальний Восток.",
        "Росконгресс клуб": "Закрытый клуб для развития бизнеса, социального партнерства и реализации крупномасштабных проектов, а также коммуникационное пространство, объединяющее успешных предпринимателей, политиков, мировых экспертов, ученых, деятелей культуры и спорта в рамках ключевых мероприятий Фонда Росконгресс. Статус Статус партнера Roscongress Club открывает качественно новый уровень участия в крупнейших конгрессно-выставочных событиях страны, подчеркивает лидирующие позиции вашей компании и принадлежность к деловому истеблишменту. "
    };

    function openModal(cardTitle) {
        modalWindow.style.display = 'block'
        opacityOverlay.style.display = 'block'
        modalWindow.querySelector('p').textContent = modalTexts[cardTitle]
    }

    const buttons = document.querySelectorAll('.cards__wrapper__card__btn');
    console.log(buttons)
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const cardTitle = button.getAttribute('data-title');
            openModal(cardTitle)
        })
    })

    closeButton.addEventListener('click', () => {
        modalWindow.style.display = 'none'
        opacityOverlay.style.display = 'none'
    })
    
    opacityOverlay.addEventListener('click', () => {
        modalWindow.style.display = 'none'
        modalRegWindow.style.display = 'none'
        opacityOverlay.style.display = 'none'
    })

    const regButtons = document.querySelectorAll('.events__event__btn');
    regButtons.forEach(button => {
        button.addEventListener('click', () => {
            openRegModal()
        }) 
    })

    function openRegModal() {
        modalRegWindow.style.display = 'block'
        opacityOverlay.style.display = 'block'
    }


    closeModalRegButton.addEventListener('click', () => {
        modalRegWindow.style.display = "none"
        opacityOverlay.style.display = "none"
    })

    inputClear.addEventListener('click', () => {
        regInput.value = ""
        checkboxes.value = ''
    })

})