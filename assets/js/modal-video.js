// document.addEventListener('DOMContentLoaded', () => {
//     const openButtons = document.querySelectorAll('.open-video');
//     const modal = document.getElementById('video-modal');
//     const video = document.getElementById('modal-video');
//     const closeModal = document.getElementById('close-modal');
  
//     openButtons.forEach(button => {
//       button.addEventListener('click', () => {
//         const videoSrc = button.getAttribute('data-video');
//         video.querySelector('source').src = videoSrc;
//         video.load();
//         modal.style.display = 'flex';  
//       });
//     });
  
//     closeModal.addEventListener('click', () => {
//       modal.style.display = 'none'; 
//       video.pause();  
//       video.currentTime = 0;  
//     });
  
//     window.addEventListener('click', (e) => {
//       if (e.target === modal) {
//         modal.style.display = 'none';  
//         video.pause();
//         video.currentTime = 0;
//       }
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
  const openButtons = document.querySelectorAll('.open-video');
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('modal-video');
  const closeModal = document.getElementById('close-modal');

  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      const videoSrc = button.getAttribute('data-video');
      // Modificando o link para o formato de embed do Google Drive
      const embedSrc = `https://drive.google.com/file/d/${videoSrc}/preview`;
      iframe.src = embedSrc;  // Atribuindo o link do Google Drive no formato embed
      modal.style.display = 'flex';  
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; 
    iframe.src = '';  // Limpa o src do iframe para pausar o vídeo
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';  
      iframe.src = '';  // Limpa o src do iframe para pausar o vídeo
    }
  });
});

