class MemeQuizGame {
    constructor() {
        this.currentLevel = 1;
        this.lives = 3;
        this.totalLevels = 50;
        this.gameOver = false;
        this.currentQuestion = null;
         this.hintUsedThisLevel = false; 
        
        this.memes = [
            { //1
                image: "./img/meme-img/Мемы. 1-10/1.Surprise Motherfucka.jpg",
                correct: "Surprise Motherfucka",
                options: ["Surprise Motherfucka", "Ку-ку", "П-п, нааайс!", "It is not a simple"]
            },
            { //2
                image: "./img/meme-img/Мемы. 1-10/2.В стекло не попади.jpg",
                correct: "В стекло не попади",
                options: ["В стекло не попади", "Ну а тепер!", "Прыгай давай", "Не лезь, она тебя сожрёт"]
            },
            { //3
                image: "./img/meme-img/Мемы. 1-10/3.Дережабль.webp",
                correct: "Дережабль, ага",
                options: ["Дережабль, ага", "Дережабль, судак", "Дережабль, тудак", "Я в своём познании на столько преисполнился"]
            },
            { //4
                image: "./img/meme-img/Мемы. 1-10/4.Должен был косарь отдать.jpg",
                correct: "Должен был косарь отдать",
                options: ["Должен был косарь отдать", "Должен был чирик отдать", "Должен был лям отдать", "Должен был рубль отдать"]
            },
            { //5
                image: "./img/meme-img/Мемы. 1-10/5.Дорогой, где ты был.jpg",
                correct: "Дорогой, где ты был?",
                options: ["Дорогой, где ты был?", "Дорогой, где моя прелесть?", "Дорогой, я правда красотка?", "Дорогой, где наш кот?"]
            },
            { //6
                image: "./img/meme-img/Мемы. 1-10/6.Драматичная белка.jpg",
                correct: "Драмматичный взгляд",
                options: ["Драмматичный взгляд", "Испуганный взгляд", "Суслик кричит", "Мордашка-обаяшка"]
            },
             { //7
                image: "./img/meme-img/Мемы. 1-10/7.Очень плохая музыка.jpg",
                correct: "Очень плохая музыка",
                options: ["Очень плохая музыка", "Очень хорошая музыка", "Очень современная музыка", "Очень танцевальная музыка"]
            },
            { //8
                image: "/img/meme-img/Мемы. 1-10/8.Пацан к успеху шел.png",
                correct: "Пацан к успеху шел",
                options: ["Пацан к успеху шел", "Реальные пацаны", "Идущие к реке", "Вот так вот"]
            },
            { //9
                image: "./img/meme-img/Мемы. 1-10/9.Повар.jpg",
                correct: "Повар",
                options: ["Повар", "Пухляш", "Плацкарт", "Верхняя полка"]
            },
            { //10
                image: "./img/meme-img/Мемы. 1-10/10.Салат меня бесит.jpg",                
                correct: "Салат меня бесит",
                options: ["Салат меня бесит", "Чё бежал? А чё догоняли?", "Продаю бананы", "Я тоже хочу шоколадку"]
            },
            { //11
                image: "./img/meme-img/Мемы. 11-20/11.Это печально.webp",
                correct: "Это печально",
                options: ["Это печально", "Это ничего страшного", "В стекло не попади", "Продаю бананы"]
            },
            { //12
                image: "./img/meme-img/Мемы. 11-20/12.Виталя Виталя.jpg",
                correct: "Виталя, Виталя",
                options: ["Виталя, Виталя", "Жека, Жека ", "Славик, Славик", "Серёжа, Серёжа"]
            },
             { //13
                image: "./img/meme-img/Мемы. 11-20/13.Вот это прикол.jpg",
                correct: "Вот это прикол",
                options: ["Вот это прикол", "Обгоняй", "Пацан к успеху шёл", "Это печально"]
            },
            { //14
                image: "./img/meme-img/Мемы. 11-20/14.давай прыгай.webp",
                correct: "Давай прыгай",
                options: ["Давай прыгай", "Ну ты баклажан", "Я просто похлопаю", "Ему хана!"]
            },
            { //15
                image: "./img/meme-img/Мемы. 11-20/15.Доктор Попов.jpg",
                correct: "Доктор Попов",
                options: ["Доктор Попов", "Доктор Иванов", "Доктор Казаков", "Доктор Смирнов"]
            },
            { //16
                image: "./img/meme-img/Мемы. 11-20/16.Кандибобер.jpg",
                correct: "Кандибобер",
                options: ["Кандибобер", "Берет", "Красный убор", "За спецназ!!!"]
            },
            { //17
                image: "./img/meme-img/Мемы. 11-20/17.Красный - это значит красивый.jpg",
                correct: "Красный - это значит красивый",
                options: ["Желтый - это значит солнце", "Синий - это значит небо", "Коричневый - это значит земля", "Красный - это значит красивый"]
            },
            { //18
                image: "/img/meme-img/Мемы. 11-20/18.Никакого праздника.jpg",
                correct: "Никакого праздника",
                options: ["Никакого праздника", "Ну ты баклажан", "Бегай там, кружись", "Адвокат"]
            },
             { //19
                image: "/img/meme-img/Мемы. 11-20/19.Пацаны вообще ребята.jpg",
                correct: "Пацаны вообще ребята",
                options: ["Пацаны вообще ребята", "Игорёк, вызывай прокуратуру", "Я в натуре в шоке", "Пацаны, берегите себя"]
            },
            { //20
                image: "./img/meme-img/Мемы. 11-20/20.С Днём Рождения, Саня.jpg",
                correct: "С днеё рождения, Саня",
                options: ["С днеё рождения, Аня", "С днеё рождения, Маня", "С днеё рождения, Саня", "С днеё рождения, Галя"]
            },
            { //21
                image: "./img/meme-img/Мемы. 21-30/21.Я вас не звал.jpg",
                correct: "Я вас не звал",
                options: ["Я вас не звал", "Вам некуда бежать", "Она тебя сожрёт", "С днеё рождения, Саня"]
            },
            { //22
                image: "./img/meme-img/Мемы. 21-30/22. Тут наши полномочия всё.jpg",
                correct: "Тут наши полномочия всё",
                options: ["Тут наши полномочия не всё", "То сё", "Тут наши полномочия всё", "Тоси боси"]
            },
            { //23
                image: "./img/meme-img/Мемы. 21-30/23.getVideoPreview.webp",
                correct: "Ломай меня полностью",
                options: ["Ломай меня полностью", "Марку хана", "Сущность в виде гномика", "Братуха, это ты?"]
            },
            { //24
                image: "./img/meme-img/Мемы. 21-30/24.Лох.jpg",
                correct: "Лох",
                options: ["Лох", "Неудачник", "Прощай", "Должен был косарь отдать"]
            },
             { //25
                image: "./img/meme-img/Мемы. 21-30/25.Чувак, это репчик.jpg",
                correct: "Чувак, это рэпчик",
                options: ["Чувак, это рэпчик", "С Днем Рождения, Лёха", "Камеру вырубай!", "Отвали со своим этим самым"]
            },
            { //26
                image: "./img/meme-img/Мемы. 21-30/26. Идущий к реке.jpg",
                correct: "Идущий к реке",
                options: ["Идущий к реке", "Дверь мне сделал", "Я ломал стекло", "Очки на-а-до?"]
            },
             { //27
                image: "./img/meme-img/Мемы. 21-30/27.Язь.jpg",
                correct: "Язь",
                options: ["Язь", "Карась", "Щука", "Окунь"]
            },
            { //28
                image: "./img/meme-img/Мемы. 21-30/28. Дверь мне сделал.jpg",
                correct: "Дверь мне сделал",
                options: ["Дверь мне сделал", "Окно мне сделал", "Замок мне сделал", "Дом мне сделал"]
            },
             { //29
                image: "./img/meme-img/Мемы. 21-30/29.Долой уныние.jpg",
                correct: "Долой уныние",
                options: ["Долой уныние", "Привет оскорблениям", "За черёмухой", "Ломай меня полностью"]
            },
            { //30
                image: "./img/meme-img/Мемы. 21-30/30.Я ломал стекло.jpg",
                correct: "Я ломал стекло",
                options: ["Зеленоглазое такси", "Я ломал стекло", "Жаль конечно этого добряка", "Многабукав"]
            },
             { //31
                image: "./img/meme-img/Мемы. 31-40/31.Очки надо.jpg",
                correct: "Очки на-а-до?",
                options: ["Шапку на-а-до?", "Дам леща на-а-до?", "Очки на-а-до?", "Бусы на-а-до?"]
            },
            { //32
                image: "./img/meme-img/Мемы. 31-40/32.Болгарская чайка.jpg",
                correct: "Болгарская чайка",
                options: ["Воробей", "Болгарская чайка", "Белая чайка", "Уха-ха-ха"]
            },
             { //33
                image: "./img/meme-img/Мемы. 31-40/33.На нахер.jpg",
                correct: "Ну нафиг",
                options: ["Ну пойдём", "Ну нафиг", "Ну зачем?", "Ну не медли"]
            },
            { //34
                image: "./img/meme-img/Мемы. 31-40/34.хе-хе бой.jpg",
                correct: "He-he, boy",
                options: ["He-he, girl", "He-he, mom", "He-he, boy", "He-he, girls"]
            },
             { //35
                image: "./img/meme-img/Мемы. 31-40/35.Ну чё, погнали.jpg",
                correct: "Ну чё, погнали!",
                options: ["Давай прыгай", "Нормально!", "Ну чё, погнали!", "Все-го хо-ро-ше-го"]
            },
            { //36
                image: "./img/meme-img/Мемы. 31-40/36. Ну ты баклажан.avif",
                correct: "Ну ты баклажан",
                options: ["Ну ты баклажан", "Ну ты свёкла", "Ну ты кабачок", "За спецназ!!!"]
            },
             { //37
                image: "./img/meme-img/Мемы. 31-40/37.Адвокат.jpg",
                correct: "Адвокат",
                options: ["Адвокат", "Прокурор", "Судья", "Болгарская чайка"]
            },
            { //38
                image: "./img/meme-img/Мемы. 31-40/38.Сущность в виде гномика.webp",
                correct: "Сущность в виде гномика",
                options: ["Сущность в виде гномика", "Вышла черепаха", "Мы не знаем что это такое", "Натальная карта"]
            },
             { //39
                image: "./img/meme-img/Мемы. 31-40/39. Вот это поворот.png",
                correct: "Вот это поворот",
                options: ["Где Кенин?", "Вот это поворот", "Южный парк", "Маккормик"]
            },
            { //40
                image: "./img/meme-img/Мемы. 31-40/40. Это разборка .jpg",
                correct: "Это разборка",
                options: ["Это разборка", "Это переговоры", "Я их не знаю", "Пацаны вообще ребята"]
            },
             { //41
                image: "./img/meme-img/Мемы. 41-50/41.А почему он, а не я.jpg",
                correct: "А почему он, а не я?",
                options: ["А почему он, а не я?", "А почему он, а не вы?", "А почему он, а не мы?", "А почему он, а не жи-ши?"]
            },
            { //42
                image: "./img/meme-img/Мемы. 41-50/42.Анигиляторная пушка.jpg",
                correct: "Анигиляторная пушка",
                options: ["Анигиляторная пушка", "Протонная пушка", "Фешен-пушка", "Просто пушка"]
            },

             { //43
                image: "./img/meme-img/Мемы. 41-50/43.Что это за слово.jpg",
                correct: "Что это за слово",
                options: ["Фешен-дьявол", "Долой уныние", "Что это за слово", "Это разборка"]
            },
            { //44
                image: "./img/meme-img/Мемы. 41-50/44.Всего хо-ро-шего.jpg",
                correct: "Всего хо-ро-шего",
                options: ["Всего хо-ро-шего", "Всего доб-ро-го", "Всего всего", "Всего"]
            },
            { //45
                image: "./img/meme-img/Мемы. 41-50/45.Вот так вот.webp",
                correct: "Вот так вот",
                options: ["Так вот вот", "Вот вот вот", "Вот так вот", "Так"]
            },
            { //46
                image: "./img/meme-img/Мемы. 41-50/46.Толик, это подъезд.jpg",
                correct: "Толик, это подъезд",
                options: ["Толик, это подъезд", "Толик, заходи", "Толик, первый день", "Толик, это дом"]
            },
            { //47
                image: "./img/meme-img/Мемы. 41-50/47.А, я думала сова.jpg",
                correct: "А я думала сова",
                options: ["А я думала сова", "А я думала дятел", "А я думала Николай", "А я думала бобр"]
            },
            { //48
                image: "./img/meme-img/Мемы. 41-50/48.Я просто похлопаю.jpg",
                correct: "Я просто похлопаю",
                options: ["Я просто похлопаю", "Я просто посмеюсь", "Я вас не звал", "Так вот так"]
            },
            { //49
                image: "./img/meme-img/Мемы. 41-50/49.Немножечко шалю.webp",
                correct: "Немножечко шалю",
                options: ["Немножечко шалю", "Немножечко стесняюсь", "Немножечко сомневаюсь", "Долой уныние"]
            },
            { //50
                image: "./img/meme-img/Мемы. 41-50/50.Вы угараете.jpg",
                correct: "Вы чё, угараете",
                options: ["Вы чё, угараете", "Куда вы меня тащите", "Всего хо-ро-шего", "А почему он, а не я?"]
            },
            
        
            
        ];
        
        this.initializeGame();
        this.eventListenersSetup = false; // флаг
        this.initializeGame();
    }
    
    initializeGame() {
        this.currentLevel = 1;
        this.lives = 3;
        this.gameOver = false;
        this.hintUsed = false; //сбрасываем подсказку при рестарте
        this.showLoadingScreen();
    }
    
    showLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        const gameContainer = document.getElementById('gameContainer');
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        
        loadingScreen.style.display = 'flex';
        gameContainer.style.display = 'none';
        
        // Симуляция загрузки
        let progress = 0;
        const loadingInterval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(loadingInterval);
                
                setTimeout(() => {
                    this.hideLoadingScreen();
                }, 1000);
            }
            
            progressFill.style.width = progress + '%';
            progressText.textContent = Math.round(progress) + '%';
        }, 100);
    }
    
    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        const gameContainer = document.getElementById('gameContainer');
        
        loadingScreen.classList.add('fade-out');
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            gameContainer.style.display = 'block';
            this.startGame();
        }, 500);
    }
    
    startGame() {
    this.updateDisplay();
    this.loadQuestion();
    if (!this.eventListenersSetup) {
        this.setupEventListeners();
        this.eventListenersSetup = true;
    }
}
    
    setupEventListeners() {
        const answerButtons = document.querySelectorAll('.answer-btn');
        answerButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleAnswer(e));
        });
        
        const restartBtn = document.getElementById('restartBtn');
        const victoryRestartBtn = document.getElementById('victoryRestartBtn');
        
        restartBtn.addEventListener('click', () => this.restartGame());
        victoryRestartBtn.addEventListener('click', () => this.restartGame());
        

         // Реализуем подсказки
        document.getElementById('hintBtn').addEventListener('click', () => {
    if (this.hintUsedThisLevel || !this.currentQuestion) return;

    const answerButtons = document.querySelectorAll('.answer-btn');
    const correctText = this.currentQuestion.correct;

    // Находим неправильные кнопки
    const wrongButtons = Array.from(answerButtons).filter(btn => btn.textContent !== correctText);

    // Выбираем 2 случайных неправильных и скрываем их текст
    const shuffled = [...wrongButtons].sort(() => 0.5 - Math.random());
    const toHide = shuffled.slice(0, 2);

    toHide.forEach(btn => {
        btn.textContent = ''; // или: btn.style.opacity = '0'; или btn.disabled = true;
    });

    // Отмечаем, что подсказка использована на этом уровне
    this.hintUsedThisLevel = true;
    const hintBtn = document.getElementById('hintBtn');
    if (hintBtn) {
        hintBtn.disabled = true;
        hintBtn.title = "Подсказка уже использована";
    }
});
    }
    
    loadQuestion() {
       if (this.currentLevel > this.totalLevels) {
        this.showVictory();
        return;
    }

    // Сбрасываем подсказку для нового уровня
    this.hintUsedThisLevel = false;
    const hintBtn = document.getElementById('hintBtn');
    if (hintBtn) {
        hintBtn.disabled = false;
        hintBtn.title = "Использовать подсказку (50/50)";
    }

    // Выбираем случайный мем
    const randomIndex = Math.floor(Math.random() * this.memes.length);
    this.currentQuestion = this.memes[randomIndex];

    // Обновляем изображение
    const memeImage = document.getElementById('memeImage');
    memeImage.src = this.currentQuestion.image;
    memeImage.alt = 'Мем';

    // Перемешиваем варианты ответов
    const shuffledOptions = [...this.currentQuestion.options].sort(() => Math.random() - 0.5);

    // Обновляем кнопки
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach((btn, index) => {
        btn.textContent = shuffledOptions[index];
        btn.className = 'answer-btn';
        btn.disabled = false;
    });

    this.updateDisplay();
    }
    
















    handleAnswer(event) {
        if (this.gameOver) return;
        const selectedAnswer = event.target.textContent;
        const answerButtons = document.querySelectorAll('.answer-btn');
        const correctAnswerSample = document.querySelector("#correct-answer-sample");
        const wrongAnswerSample = document.querySelector("#wrong-answer-sample");
        
        // Отключаем все кнопки
        answerButtons.forEach(btn => btn.disabled = true);

        const music = document.querySelector("#soundOn");
         // Правильный ответ
        if (selectedAnswer === this.currentQuestion.correct) {
            
             // Визуальные фанфары
    const visualFanfare = document.getElementById('visual-fanfare');
    visualFanfare.style.display = 'flex';
    // Автоматически скрыть после анимации
    setTimeout(() => {
        visualFanfare.style.display = 'none';
    }, 1200); // чуть дольше анимации

            correctAnswerSample.play(); // Включаем джингл правильного ответа
            music.pause(); // Ставим музыку на паузу
           setTimeout( function () { 
            if (music && userEnabledMusic == true) {
        music.currentTime = 0; // Переводим проигрыватель на 0 секунду и запускаем музыку.
        music.play(); // Включаем музыку через 1500 мс
            }
        }, 1500);

            event.target.classList.add('correct'); // Подсвечиваем правильный ответ зеленым
            setTimeout(() => {
                this.nextLevel();
            }, 1500);

        } else {
            // Неправильный ответ
            wrongAnswerSample.play(); // Включаем джингл неправильного ответа
            music.pause(); // Ставим музыку на паузу
           setTimeout( function () { 
            if (music && userEnabledMusic == true) {
        music.currentTime = 0; // Переводим проигрыватель на 0 секунду и запускаем музыку.
        music.play(); // Включаем музыку через 1500 мс
            }
        }, 1500);

            event.target.classList.add('wrong'); // Подсвечиваем неправильный ответ красным
            // Показываем правильный ответ
            answerButtons.forEach(btn => {
                if (btn.textContent === this.currentQuestion.correct) {
                    btn.classList.add('correct');
                }
            });
            
            this.loseLife();
            
            setTimeout(() => {
                if (this.lives > 0) {
                    this.nextLevel();
                } else {
                    this.showGameOver();
                }
            }, 2000);
        }
    }
    
    loseLife() {
        this.lives--;
        const hearts = document.querySelectorAll('.heart');
        hearts[this.lives].classList.add('lost');
    }
    
    nextLevel() {
        this.currentLevel++;
        this.loadQuestion();
    }
    
    updateDisplay() {
        document.getElementById('currentLevel').textContent = this.currentLevel;
        document.getElementById('totalLevels').textContent = this.totalLevels;
    }
    
    showGameOver() {
        this.gameOver = true;
        document.getElementById('finalLevel').textContent = this.currentLevel - 1;
        document.getElementById('gameOver').style.display = 'block';
        document.querySelector('.game-area').style.display = 'none';
    }
    
    showVictory() {
        this.gameOver = true;
        document.getElementById('victory').style.display = 'block';
        document.querySelector('.game-area').style.display = 'none';
    }
    
    restartGame() {
        document.getElementById('gameOver').style.display = 'none';
        document.getElementById('victory').style.display = 'none';
        document.querySelector('.game-area').style.display = 'block';
        

        
        // Восстанавливаем все сердечки
        const hearts = document.querySelectorAll('.heart');
        hearts.forEach(heart => heart.classList.remove('lost'));
        this.initializeGame();
    }

    
}

// Инициализация игры при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new MemeQuizGame();
});
