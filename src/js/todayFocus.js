const todayFocus = () => {
  // DOM elements
  const $focusWrapper = document.querySelector('.today-focus-wrapper');
  const $focusInput = document.querySelector('.today-focus-input');
  const $todoWrapper = document.querySelector('.focus-todo-wrapper');
  const $focusTodo = document.querySelector('.focus-check-wrapper > label');
  const $focusChkBox = document.getElementById('todayFocus');
  
  const toggleActive = () => {
    $focusWrapper.classList.toggle('focus-active');
    $focusWrapper.classList.toggle('not-active');
    $todoWrapper.classList.toggle('focus-active');
    $todoWrapper.classList.toggle('not-active');
  };

  $focusInput.addEventListener('keyup', e => {
    if (e.key !== 'Enter') return;
    toggleActive();
    $focusTodo.textContent = e.target.value;
  });

  $todoWrapper.addEventListener('click', e => {
    console.log(e.target);
    if (!e.target.classList.contains('remove-today-focus')) return;
    toggleActive();
    $focusInput.focus();
    $focusInput.value = '';
  });

  $focusChkBox.addEventListener('change', e => {
    console.log(e.target.checked);
    if (e.target.checked) $focusTodo.classList.toggle('finished');
    else $focusTodo.classList.toggle('finished');
  });
};

export default todayFocus;