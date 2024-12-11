document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('main section');
    const buttons = {
        home: document.getElementById('home-btn'),
        register: document.getElementById('register-btn'),
        dataEntry: document.getElementById('data-entry-btn'),
        viewData: document.getElementById('view-data-btn'),
    };

    Object.keys(buttons).forEach(key => {
        buttons[key].addEventListener('click', () => {
            sections.forEach(section => section.classList.add('hidden'));
            document.getElementById(key).classList.remove('hidden');
        });
    });

    const totalWaste = document.getElementById('total-waste');
    let wasteCounter = 0;

    const dataEntryForm = document.getElementById('data-entry-form');
    dataEntryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const weight = parseInt(dataEntryForm.querySelector('input[placeholder="Ağırlık (kg)"]').value);
        wasteCounter += weight;
        totalWaste.textContent = wasteCounter;
        alert('Atık başarıyla kaydedildi!');
    });

    const viewDataForm = document.getElementById('view-data-form');
    viewDataForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Verileriniz başarıyla yüklendi!');
    });
});
