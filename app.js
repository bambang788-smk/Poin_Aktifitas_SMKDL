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
    
    // Panggil fungsi setup UI dashboard
    setupDashboard();
  } else {
    btn.disabled = false;
    btn.innerText = 'Login';
    errDiv.innerText = 'Username atau Password salah!';
    errDiv.classList.remove('hidden');
  }
}

// TAMBAHKAN FUNGSI INI di app.js agar tidak ReferenceError
function setupDashboard() {
  // 1. Sembunyikan Form Login & Tampilkan Main Dashboard
  const loginSection = document.getElementById('login-section') || document.getElementById('login-card');
  const mainApp = document.getElementById('main-app') || document.getElementById('dashboard-section');
  
  if (loginSection) loginSection.classList.add('hidden');
  if (mainApp) mainApp.classList.remove('hidden');

  // 2. Tampilkan Nama User di Header (jika ada elemennya)
  const userDisplay = document.getElementById('user-display-name');
  if (userDisplay && currentUser) {
    userDisplay.innerText = `${currentUser.nama} (${currentUser.role})`;
  }
}
