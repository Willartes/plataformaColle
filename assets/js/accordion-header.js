document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
  
      // Alterna a expansão e colapso do conteúdo
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
  
      // Alterna a classe para o botão
      button.classList.toggle('active');
    });
  });
  