document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});


function validateForm() {
  const cardNumber = document.getElementById('cardNumber').value.trim();
  const securityCode = document.getElementById('securityCode').value.trim();
  const expiryDate = document.getElementById('expiryDate').value.trim();
  const cpf = document.getElementById('cpf').value.trim();

  if (!isValidCardNumber(cardNumber)) {
    alert('Por favor, insira um número de cartão válido (XXXX XXXX XXXX XXXX).');
    return false;
  }

  if (!isValidSecurityCode(securityCode)) {
    alert('Por favor, insira um código de segurança válido (XXX).');
    return false;
  }

  if (!isValidExpiryDate(expiryDate)) {
    alert('Por favor, insira uma data de validade válida (MM/AA).');
    return false;
  }

  if (!isValidCPF(cpf)) {
    alert('Por favor, insira um CPF válido (XXX.XXX.XXX-XX).');
    return false;
  }

  return true;
}
