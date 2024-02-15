document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', function() {
        navLinks.classList.toggle('active'); // This toggles the menu in and out
    });
});


const apiUrl = `https://api.github.com/repos/ftahhan0/ftahhan0.github.io/contents/homeworks`;
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Failed to fetch homework files: ${response.status} ${response.statusText}`,
      );
    }
    return response.json();
  })
  .then((homeworkList) => {
    const homeworkListElement = document.getElementById('homeworkList');
    homeworkList.forEach((file) => {
      console.log(file); /// 1
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = file.html_url;
      link.textContent = file.name;
      listItem.appendChild(link);
      homeworkListElement.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error(`Error fetching homework files: ${error.message}`);
  });



  