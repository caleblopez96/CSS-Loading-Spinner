// selectors
const btn = document.querySelector('button');
const spinner = document.querySelector('.spinner');

// click event listener
btn.addEventListener('click', e => {
    displaySpinner();
})

//changes to button when spinner is displayed
const displaySpinner = () => {
    btn.innerText = "loading...";
    spinner.style.display = 'block';
}