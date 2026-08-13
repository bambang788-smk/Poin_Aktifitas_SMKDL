// Login Instan via Local Data
function handleLogin(e) {
  e.preventDefault();
  const btn = document.getElementById('btn-login');
  const errDiv = document.getElementById('login-error');
  
  btn.disabled = true;
  btn.innerText = 'Memproses...';
  errDiv.classList.add('hidden');

  const u = document.getElementById('username').value.trim();
  const p = document.getElementById('password').value.trim();

  // Cari user di MASTER_DATA.users
  const userFound = MASTER_DATA.users.find(user => user.username === u && user.password === p);

  if (userFound) {
    currentUser = {
      username: userFound.username,
      nama: userFound.nama,
      role: userFound.role
    };
    localStorage.setItem('user_session', JSON.stringify(currentUser));
    
    // Redirect langsung ke file dashboard
    window.location.href = 'dashboard.html'; // Sesuaikan nama file dashboard Anda
  } else {
    btn.disabled = false;
    btn.innerText = 'Login';
    errDiv.innerText = 'Username atau Password salah!';
    errDiv.classList.remove('hidden');
  }
}
