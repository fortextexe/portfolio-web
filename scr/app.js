window.onload = function() {
  setTimeout(function() {
    document.getElementById('start-btn').classList.add('blurry');
  }, 5000);

  
  document.getElementById('start-btn').addEventListener('click', function() {

    this.classList.remove('blurry');

    
    document.getElementById('welcome-screen').style.display = 'none';

    
    document.querySelector('.container').style.display = 'block';
  });
}
