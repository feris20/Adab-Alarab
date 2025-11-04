// --- ICONS ---
const ToothLogo = (className = '') => `
  <svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 21C7 18.2386 9.23858 16 12 16C14.7614 16 17 18.2386 17 21M17 10C17 13.3137 14.7614 16 12 16C9.23858 16 7 13.3137 7 10C7 6.68629 9.23858 4 12 4C14.7614 4 17 6.68629 17 10ZM17 10H19C20.1046 10 21 9.10457 21 8C21 6.89543 20.1046 6 19 6C17.8954 6 17 6.89543 17 8V10ZM7 10H5C3.89543 10 3 9.10457 3 8C3 6.89543 3.89543 6 5 6C6.10457 6 7 6.89543 7 8V10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

const ArrowRightIcon = (className = '') => `
  <svg xmlns="http://www.w3.org/2000/svg" class="${className}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l5-5-5-5m-4 5h12" />
  </svg>`;

const InstagramIcon = (className = '') => `
  <svg class="${className}" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" />
  </svg>`;

// --- DATA ---
const generateLectures = (count, subject, stage) => {
    return Array.from({ length: count }, (_, i) => ({
        title: `المحاضرة ${i + 1}`,
        url: (i + 1) % 5 === 0 ? null : `https://t.me/your_bot_link/s${stage}_${subject}_lec${i + 1}`
    }));
};

const STAGES_DATA = [
    { id: 1, title: 'المرحلة الاولى', subjects: [
        { id: 1, title: 'المادة السنية', content: generateLectures(15, 'dental_material', 1) },
        { id: 2, title: 'تشريح الأسنان', content: generateLectures(15, 'tooth_anatomy', 1) },
        { id: 3, title: 'أجهزة الأسنان', content: generateLectures(15, 'dental_appliances', 1) },
    ]},
    { id: 2, title: 'المرحلة الثانية', subjects: [
        { id: 1, title: 'تيجان وجسور', content: generateLectures(20, 'crowns_bridges', 2) },
        { id: 2, title: 'الطقم الكامل', content: generateLectures(20, 'complete_denture', 2) },
        { id: 3, title: 'المادة السنية', content: generateLectures(20, 'dental_material', 2) },
    ]},
    { id: 3, title: 'المرحلة الثالثة', subjects: null },
    { id: 4, title: 'المرحلة الرابعة', subjects: null },
];

const YOUTUBE_DATA = [
    { id: 1, title: 'المرحلة الاولى', subjects: null },
    { id: 2, title: 'المرحلة الثانية', subjects: [
        { id: 1, title: 'طقم كامل', videos: [
            { id: 'dQw4w9WgXcQ', title: 'ريكورد بيس upper وlower' },
            { id: '3JZ_D3ELwOQ', title: 'finishing the record base' },
            { id: 'L_jWHffIx5E', title: 'بايت رم bite rim' },
            { id: 'Y-3L5D8KSdY', title: 'mounting the cast on articulator' },
        ]},
        { id: 2, title: 'تيجان وجسور', videos: [
            { id: 'p2Glb2c_f_0', title: 'مقدمة في التيجان والجسور' },
            { id: 'VyItv3_gK1E', title: 'تحضير السن للتاج' },
        ]},
    ]},
    { id: 3, title: 'المرحلة الثالثة', subjects: null },
    { id: 4, title: 'المرحلة الرابعة', subjects: null },
];

const TECHNICIAN_DAILY_DATA = [
    { id: 1, url: 'https://www.instagram.com/p/C27a-e4sZfQ/', thumbnail: 'https://picsum.photos/seed/1/400/400' },
    { id: 2, url: 'https://www.instagram.com/p/C2yG1ZXM8wT/', thumbnail: 'https://picsum.photos/seed/2/400/400' },
    { id: 3, url: 'https://www.instagram.com/p/C2v8t05Mj3o/', thumbnail: 'https://picsum.photos/seed/3/400/400' },
    { id: 4, url: 'https://www.instagram.com/p/C2tS6h-sD_w/', thumbnail: 'https://picsum.photos/seed/4/400/400' },
    { id: 5, url: 'https://www.instagram.com/p/C2qW-uUMX2r/', thumbnail: 'https://picsum.photos/seed/5/400/400' },
    { id: 6, url: 'https://www.instagram.com/p/C2nhwQDs6Uo/', thumbnail: 'https://picsum.photos/seed/6/400/400' },
];

// --- APP STATE & DOM ---
const app = document.getElementById('app-container');
const modal = document.getElementById('modal');
const modalContent = modal.querySelector('.modal-content');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

let viewStack = [{ name: 'home' }];

// --- MODAL LOGIC ---
const showModal = (title, body) => {
    modalTitle.textContent = title;
    modalBody.innerHTML = body;
    modal.classList.add('is-open');
    modalContent.classList.add('is-open');
};

const hideModal = () => {
    modal.classList.remove('is-open');
    modalContent.classList.remove('is-open');
};

// --- TEMPLATING / COMPONENTS ---
const PageWrapper = (title, children) => `
    <div class="w-full min-h-screen bg-slate-50">
        <header class="sticky top-0 bg-sky-600/90 backdrop-blur-sm text-white p-4 shadow-lg flex items-center justify-between z-10">
            <button data-action="go-back" class="p-2 rounded-full hover:bg-sky-500 transition-colors">
               ${ArrowRightIcon('w-6 h-6 transform')}
            </button>
            <h1 class="text-xl font-bold">${title}</h1>
            <div class="w-10"></div>
        </header>
        <main class="p-4 md:p-6">${children}</main>
    </div>`;

const UnderDevelopment = () => `
    <div class="flex flex-col items-center justify-center text-center p-8 bg-white rounded-xl shadow-md">
        <h2 class="text-2xl font-bold text-sky-700 mb-2">قيد التحديث</h2>
        <p class="text-gray-600">هذا القسم قيد التطوير حاليًا. يرجى التحقق مرة أخرى قريبًا!</p>
    </div>`;

// --- RENDER LOGIC ---
const render = () => {
    const currentView = viewStack[viewStack.length - 1];
    let html = '';

    switch (currentView.name) {
        case 'home':
            html = `
            <div class="min-h-screen bg-gradient-to-b from-sky-400 to-sky-600 text-white flex flex-col justify-between p-6 text-center">
                <div class="flex-grow flex flex-col items-center justify-center">
                    ${ToothLogo('w-24 h-24 mb-4 text-white')}
                    <h1 class="text-4xl font-bold tracking-tight">تقنيات صناعة الأسنان</h1>
                    <p class="text-xl text-sky-100">جامعة دجلة</p>
                    
                    <div class="mt-12 w-full max-w-xs space-y-4">
                        <button data-action="navigate" data-view='{"name": "stages"}' class="w-full bg-white text-sky-600 font-bold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                            اختر المرحلة
                        </button>
                        <button data-action="navigate" data-view='{"name": "youtube_stages"}' class="w-full bg-white/20 text-white font-bold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
                            محاضرات يوتيوب
                        </button>
                        <button data-action="navigate" data-view='{"name": "technician_daily"}' class="w-full bg-white/20 text-white font-bold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
                            Technician Daily
                        </button>
                    </div>
                </div>
                <footer class="text-sky-200 text-sm">@username</footer>
            </div>`;
            break;

        case 'stages':
            const stagesContent = `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${STAGES_DATA.map(stage => `
                        <button data-action="navigate" data-view='{"name": "subjects", "stageId": ${stage.id}}' class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-sky-50 transition-all duration-300 text-right">
                            <h3 class="text-xl font-bold text-sky-800">${stage.title}</h3>
                        </button>
                    `).join('')}
                </div>`;
            html = PageWrapper('اختر المرحلة', stagesContent);
            break;

        case 'subjects':
            const stage = STAGES_DATA.find(s => s.id === currentView.stageId);
            let subjectsContent;
            if (!stage.subjects) {
                subjectsContent = UnderDevelopment();
            } else {
                subjectsContent = `
                    <div class="space-y-4">
                        ${stage.subjects.map(subject => `
                            <button data-action="navigate" data-view='{"name": "lectures", "stageId": ${stage.id}, "subjectId": ${subject.id}}' class="w-full bg-white p-5 rounded-xl shadow-md hover:shadow-lg hover:bg-sky-50 transition-all duration-300 text-right">
                                <h3 class="text-lg font-semibold text-gray-800">${subject.title}</h3>
                            </button>
                        `).join('')}
                    </div>`;
            }
            html = PageWrapper(stage.title, subjectsContent);
            break;

        case 'lectures':
            const lStage = STAGES_DATA.find(s => s.id === currentView.stageId);
            const subject = lStage.subjects.find(s => s.id === currentView.subjectId);
            const lecturesContent = `
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    ${subject.content.map(lecture => `
                        <div class="flex flex-col items-center">
                            <button data-action="lecture-click" data-url="${lecture.url}" class="w-full h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sky-700 font-bold text-lg">
                                ${lecture.title.split(' ')[1]}
                            </button>
                            ${!lecture.url ? '<p class="text-xs text-red-500 mt-1">المحتوى فارغ</p>' : ''}
                        </div>
                    `).join('')}
                </div>`;
            html = PageWrapper(subject.title, lecturesContent);
            break;
            
        case 'youtube_stages':
            const ytStagesContent = `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${YOUTUBE_DATA.map(stage => `
                        <button data-action="navigate" data-view='{"name": "youtube_subjects", "stageId": ${stage.id}}' class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-sky-50 transition-all duration-300 text-right">
                            <h3 class="text-xl font-bold text-sky-800">${stage.title}</h3>
                        </button>
                    `).join('')}
                </div>`;
            html = PageWrapper('محاضرات يوتيوب', ytStagesContent);
            break;

        case 'youtube_subjects':
            const ytStage = YOUTUBE_DATA.find(s => s.id === currentView.stageId);
            let ytSubjectsContent;
            if (!ytStage.subjects) {
                ytSubjectsContent = UnderDevelopment();
            } else {
                ytSubjectsContent = `
                    <div class="space-y-4">
                        ${ytStage.subjects.map(subject => `
                             <button data-action="navigate" data-view='{"name": "youtube_videos", "stageId": ${ytStage.id}, "subjectId": ${subject.id}}' class="w-full bg-white p-5 rounded-xl shadow-md hover:shadow-lg hover:bg-sky-50 transition-all duration-300 text-right">
                                <h3 class="text-lg font-semibold text-gray-800">${subject.title}</h3>
                            </button>
                        `).join('')}
                    </div>`;
            }
            html = PageWrapper(ytStage.title, ytSubjectsContent);
            break;

        case 'youtube_videos':
            const ytvStage = YOUTUBE_DATA.find(s => s.id === currentView.stageId);
            const ytvSubject = ytvStage.subjects.find(s => s.id === currentView.subjectId);
            const videosContent = `
                <div class="space-y-6">
                    ${ytvSubject.videos.map(video => `
                        <div class="bg-white rounded-xl shadow-md overflow-hidden">
                            <div class="aspect-w-16 aspect-h-9" style="padding-bottom: 56.25%; position: relative;">
                                <iframe src="https://www.youtube.com/embed/${video.id}" title="${video.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full h-full" style="position: absolute; top: 0; left: 0;"></iframe>
                            </div>
                            <div class="p-4">
                                <h3 class="font-semibold text-gray-800">${video.title}</h3>
                            </div>
                        </div>
                    `).join('')}
                </div>`;
            html = PageWrapper(ytvSubject.title, videosContent);
            break;
            
        case 'technician_daily':
            const techDailyContent = `
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${TECHNICIAN_DAILY_DATA.map(post => `
                        <a href="${post.url}" target="_blank" rel="noopener noreferrer" class="group block relative aspect-square rounded-xl overflow-hidden shadow-lg">
                            <img src="${post.thumbnail}" alt="Instagram post ${post.id}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                            <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                ${InstagramIcon('w-12 h-12 text-white')}
                            </div>
                        </a>
                    `).join('')}
                </div>`;
            html = PageWrapper('Technician Daily', techDailyContent);
            break;
    }
    app.innerHTML = html;
};

// --- NAVIGATION & EVENT HANDLING ---
const navigateTo = (view) => {
    viewStack.push(view);
    render();
    window.scrollTo(0, 0);
};

const goBack = () => {
    if (viewStack.length > 1) {
        viewStack.pop();
        render();
        window.scrollTo(0, 0);
    }
};

app.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;

    const action = target.dataset.action;
    
    switch (action) {
        case 'navigate':
            navigateTo(JSON.parse(target.dataset.view));
            break;
        case 'go-back':
            goBack();
            break;
        case 'lecture-click':
            const url = target.dataset.url;
            if (url && url !== 'null') {
                window.open(url, '_blank');
            } else {
                showModal('تنبيه', '<p>لا توجد محاضرة بهذا الرقم أو أن المحاضرة لم يتم تحميلها بعد.</p>');
            }
            break;
    }
});

modal.addEventListener('click', hideModal);
document.getElementById('modal-close').addEventListener('click', hideModal);
modalContent.addEventListener('click', (e) => e.stopPropagation());

// --- INITIAL RENDER ---
render();