const trigger = document.querySelector('.select-trigger');
const options = document.querySelector('.select-options');
const valueSpan = document.querySelector('.select-value');

// Открыть/закрыть с плавностью
trigger.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('open');
    options.classList.toggle('show');
});

// Выбрать вариант
options.addEventListener('click', function(e) {
    const li = e.target.closest('li');
    if (li) {
        const value = li.dataset.value;
        const text = li.textContent;
        valueSpan.textContent = text;
        
        this.querySelectorAll('li').forEach(el => el.classList.remove('selected'));
        li.classList.add('selected');
        
        trigger.classList.remove('open');
        options.classList.remove('show');
        
        console.log('Выбрано:', value);
    }
});

// Закрыть при клике вне
document.addEventListener('click', function(e) {
    if (!e.target.closest('.custom-select')) {
        trigger.classList.remove('open');
        options.classList.remove('show');
    }
});