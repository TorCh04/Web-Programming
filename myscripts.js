function showSection(sectionNumber) {
    // Hide all sections
    var sections = document.querySelectorAll('section');
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = 'none';
    }
  
    // Show the selected section
    var section = document.querySelector('#R' + sectionNumber);
    section.style.display = 'block';
  }

function hideSection()
{
    // Hide all sections except the 1st
    var sections = document.querySelectorAll('section');
    for (var i = 1; i < sections.length; i++) {
      sections[i].style.display = 'none';
    }
}