function setLanguage(language) {
    const titles = {
        'ru': {
            'title': 'EduMath.kg',
            'description': 'Наш проект направлен на углубленное изучение математики. Мы разбираем сложные задачи и книги, чтобы помочь участникам развивать навыки решения проблем и углублять знания.',
            'teamTitle': 'Над проектом работают:',
            'team': [
                'Асанбеков Амантай',
                'Молдомамыт Атакан',
                'Син Анжелина',
                'Ибраимова Альпеим',
                'Джусупова Гаухар',
                'Джайлоева Эльдана',
                'Ишимбаева Маржана',
                'Эльдиярова Эркинай'
            ],
            'soon': 'Скоро'
        },
        'en': {
            'title': 'EduMath.kg',
            'description': 'Our project focuses on in-depth study of mathematics. We tackle complex problems and books to help participants develop problem-solving skills and deepen their knowledge.',
            'teamTitle': 'The project is developed by:',
            'team': [
                'Asanbekov Amantai',
                'Moldomamyt Atakan',
                'Sin Anzhelina',
                'Ibraimova Alpeim',
                'Dzhusupova Gauhar',
                'Dzhayloeva Eldana',
                'Ishimbaeva Marzhana',
                'Eldiyarova Erkinai'
            ],
            'soon': 'Coming Soon'
        },
        'ky': {
            'title': 'EduMath.kg',
            'description': 'Биздин долбоор математиканы терең изилдөөгө багытталган. Биз оор маселелерди жана китептерди талдап, кызыккандарга маселелерди чечүү жөндөмдөрүн өнүктүрүүгө жана жалпы билимин тереңдетүүгө жардам беребиз.',
            'teamTitle': 'Долбоордун жаратман тобу:',
            'team': [
                'Асанбеков Амантай',
                'Молдомамыт Атакан',
                'Син Анжелина',
                'Ибраимова Альпеим',
                'Джусупова Гаухар',
                'Джайлоева Эльдана',
                'Ишимбаева Маржана',
                'Эльдиярова Эркинай'
            ],
            'soon': 'Жакында'
        }
    };

    const selectedLanguage = titles[language];

    document.getElementById('title').textContent = selectedLanguage.title;
    document.getElementById('description').innerHTML = selectedLanguage.description;
    document.getElementById('team-title').textContent = selectedLanguage.teamTitle;
    document.getElementById('soon').textContent = selectedLanguage.soon;

    const teamList = document.getElementById('team-list');
    teamList.innerHTML = '';
    selectedLanguage.team.forEach(member => {
        const li = document.createElement('li');
        li.textContent = member;
        teamList.appendChild(li);
    });
}
