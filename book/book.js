// array
let book = [
  {
    'id': '1',
    'title': 'Fihi Ma Fihi',
    'link': 'Fihi Ma Fihi.pdf',
    'size': '2.60mb'
  },
  {
    'id': '2',
    'title': 'Al Adzkar Nawawi',
    'link': 'Al Adzkar Nawawi.pdf',
    'size': '8.87mb'
  },
  {
    'id': '3',
    'title': 'Fiqh Madzhab Syafii',
    'link': 'Fiqh Madzhab Syafii.pdf',
    'size': '14.44mb'
  },
  {
    'id': '4',
    'title': 'Syarh Hadits Arbain',
    'link': 'Syarh Hadits Arbain.pdf',
    'size': '1.01mb'
  },
  {
    'id': '5',
    'title': 'Syarh Al Hikam',
    'link': 'Syarh Al Hikam.pdf',
    'size': '17.04mb'
  },
  {
    'id': '6',
    'title': '10 Prinsip Manhaj Salaf',
    'link': '10 Prinsip Manhaj Salaf.pdf',
    'size': '1.63mb'
  },
  {
    'id': '7',
    'title': '40 Hadits Fadhilah Amal',
    'link': '40 Hadits Fadhilah Amal.pdf',
    'size': '1.15mb'
  }
];

// ambil data array
let wrap = document.getElementsByClassName('book')[0];
let html = '';
book.forEach(file => {
  html += `<div class="title">${file.id}. ${file.title} (${file.size}) // <a href="${file.link}" class="link">Download</a></div>`;
});
wrap.innerHTML = html
