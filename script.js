const passwordInput = document.getElementById('password');
const strengthIndicator = document.querySelector('.strength-indicator');
const body = document.body;
const background = document.getElementById('background');

passwordInput.addEventListener('input', function() {
    const password = this.value;
    const strength = checkPasswordStrength(password);
    updateStrengthIndicator(strength);
    updateBackgroundOverlay(strength);
});

function checkPasswordStrength(password) {
    let strength = 0;
    
    // Verifica o comprimento
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    
    // Verifica caracteres especiais
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
    
    // Verifica números
    if (/[0-9]/.test(password)) strength++;
    
    // Verifica letras maiúsculas e minúsculas
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    
    return strength;
}

function updateStrengthIndicator(strength) {
    strengthIndicator.className = 'strength-indicator';
    
    if (strength <= 2) {
        strengthIndicator.classList.add('weak');
    } else if (strength <= 3) {
        strengthIndicator.classList.add('medium');
    } else if (strength <= 4) {
        strengthIndicator.classList.add('strong');
    } else {
        strengthIndicator.classList.add('very-strong');
    }
}

function updateBackgroundOverlay(strength) {
    body.className = '';
    if (strength <= 2) {
        body.classList.add('weak');
    } else if (strength <= 3) {
        body.classList.add('medium');
    } else if (strength <= 4) {
        body.classList.add('strong');
    } else {
        body.classList.add('very-strong');
    }
}

passwordInput.addEventListener('input', (e) => {
    const input = e.target.value;
    const length = input.length;
    const blurValue = 20 - length * 2;
    background.style.filter = `blur(${blurValue}px)`;
}); 