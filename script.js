document.addEventListener('DOMContentLoaded', () => {

    // --- !! التخصيص هنا !! ---
    const FRIEND_NAME = "اسم صديقتك"; // <--- اكتب اسم صديقتك هنا
    const FRIEND_AGE = 25; // <--- اكتب عمر صديقتك هنا (عدد الشموع)
    // --- !! نهاية منطقة التخصيص !! ---

    // تعريف العناصر
    const room = document.getElementById('room');
    const gameContainer = document.getElementById('game-container');
    const surpriseContainer = document.getElementById('surprise-container');
    const totalCountEl = document.getElementById('total-count');
    const foundCountEl = document.getElementById('found-count');
    const friendNamePlaceholder = document.getElementById('friend-name-placeholder');

    const foundSound = document.getElementById('found-sound');
    const birthdayMusic = document.getElementById('birthday-music');

    let candlesFound = 0;

    // تهيئة اللعبة
    function initGame() {
        totalCountEl.textContent = FRIEND_AGE;
        friendNamePlaceholder.textContent = `عيد ميلاد سعيد يا ${FRIEND_NAME}!`;

        for (let i = 0; i < FRIEND_AGE; i++) {
            const candle = document.createElement('div');
            candle.classList.add('hidden-candle');

            // تحديد موقع عشوائي للشمعة داخل الغرفة
            candle.style.top = `${Math.random() * 80 + 10}%`; // تجنب الحواف العلوية والسفلية
            candle.style.left = `${Math.random() * 90 + 5}%`; // تجنب الحواف الجانبية

            candle.addEventListener('click', findCandle);
            room.appendChild(candle);
        }
    }

    // وظيفة إيجاد الشمعة
    function findCandle(event) {
        const candle = event.target;
        candle.style.display = 'none'; // إخفاء الشمعة التي تم النقر عليها
        
        candlesFound++;
        foundCountEl.textContent = candlesFound;
        
        // تشغيل صوت احتفالي قصير
        foundSound.currentTime = 0;
        foundSound.play();

        // التحقق من الفوز
        if (candlesFound === FRIEND_AGE) {
            triggerSurprise();
        }
    }

    // وظيفة بدء المفاجأة
    function triggerSurprise() {
        // إخفاء شاشة اللعبة وإظهار شاشة المفاجأة
        gameContainer.classList.add('hidden');
        surpriseContainer.classList.remove('hidden');

        // تشغيل موسيقى عيد الميلاد
        birthdayMusic.play();

        // بدء تساقط الكونفيتي
        startConfetti();
    }
    
    // وظيفة إنشاء الكونفيتي
    function startConfetti() {
        const confettiContainer = document.getElementById('confetti-container');
        const colors = ['#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d', '#43aa8b', '#577590'];
        
        setInterval(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = `${Math.random() * 3 + 4}s`; // مدة السقوط
            confetti.style.opacity = Math.random();
            confetti.style.width = `${Math.random() * 8 + 8}px`;
            confetti.style.height = confetti.style.width;


            confettiContainer.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 7000); // إزالة العنصر بعد انتهاء الأنيميشن
        }, 100); // إنشاء قطعة كل 100 ميللي ثانية
    }


    initGame();
});
