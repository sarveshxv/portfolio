// document.querySelectorAll('.toggle-btn').forEach(button => {
//     button.addEventListener('click', () => {
//         const moreBoard = button.parentElement;
//         const content = moreBoard.querySelector('.content');

//         button.style.opacity = '1'; // Start fading out

//         setTimeout(() => {
//             if (moreBoard.classList.contains('show')) {
//                 content.style.maxHeight = '0';
//                 button.textContent = 'Show More';
//             } else {
//                 content.style.maxHeight = content.scrollHeight + 'px';
//                 button.textContent = 'Hide';
//             }

//             button.style.opacity = '1'; // Fade back in
//         }, 300); // Match the duration of the CSS transition
       
//         moreBoard.classList.toggle('show');
//     });
// });
