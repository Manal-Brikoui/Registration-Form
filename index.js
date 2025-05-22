function checkLogin() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const message = document.getElementById('loginMessage');

  const validEmail = "manalbrikoui@gmail.com";
  const validPassword = "manalbrikoui";

  if (email === validEmail && password === validPassword) {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('mainForm').style.display = 'block';
  } else {
    message.textContent = "Email ou mot de passe incorrect.";
  }
}

function handleSubmit(event) {
  event.preventDefault();

  document.getElementById('mainForm').style.display = 'none';
  const successMsg = document.getElementById('successMessage');
  successMsg.style.display = 'block';
}
