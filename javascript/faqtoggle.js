
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-item__question');
    const answer = item.querySelector('.faq-item__answer');
    const toggleButton = item.querySelector('.faq-toggle-button');

    question.addEventListener('click', () => {
        answer.classList.toggle('hidden');
        toggleButton.textContent = answer.classList.contains('hidden') ? '+' : '−'; // Change button text based on visibility
    });
});