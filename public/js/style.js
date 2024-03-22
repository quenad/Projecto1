 // Adicione o código JavaScript para fechar o dropdown quando o mouse sai do item "Sobre nós"
 const sobreNosDropdown = document.querySelector('.nav-item.dropdown');
 const dropdownMenu = sobreNosDropdown.querySelector('.dropdown-menu');

 sobreNosDropdown.addEventListener('mouseout', () => {
     dropdownMenu.style.display = 'none';
 });