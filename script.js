// const checkbox = document.getElementById('checkbox');

//   checkbox.addEventListener('change', () => {
//     document.body.classList.toggle('dark');
//   });

//   cloudinary.uploader().upload(new File("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg"),
//   ObjectUtils.asMap("public_id", "olympic_flag"));

if (localStorage.getItem('dark') === 'true') {
  document.documentElement.classList.add('dark');
}
const toggle = document.querySelector('.checkbox');
toggle.addEventListener('click', () => {
  if (!document.documentElement.classList.contains('dark')){
    document.documentElement.classList.add('dark');
    localStorage.setItem('dark', 'true');
    } else{
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dark', 'false');
    }
  })