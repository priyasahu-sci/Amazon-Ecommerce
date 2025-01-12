function productSearch () {

  document.querySelector('.js-search-button')
  .addEventListener('click', () => {

    const search = document.querySelector('.js-search-bar').value;

    if (search != '') {
      window.location.href = `/?search=${search}`
    } else {
      window.location.href = `/`
    }

  });

  /*
  document.querySelector('.js-search-button')
    .addEventListener('click', () => {
      const search = document.querySelector('.js-search-bar').value;
      window.location.href = `/?search=${search}`;
    });
  */
  
document.querySelector('.js-search-bar')
  .addEventListener('keydown', (event) => {

    const search = document.querySelector('.js-search-bar').value;


    if (event.key === 'Enter') {
      const input = event.target; // Use 'event.target' to reference the input
      if (search != '') {
        window.location.href = `/?search=${search}`;
      } else {
        window.location.href = `/`;
      }
    }
  });
}


export default productSearch;



