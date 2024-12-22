function getLastSeenTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const timeString = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  return timeString;
}

window.onload = function() {
  const lastSeenElement = document.getElementById('last-seen');
  lastSeenElement.textContent = `Son görülme: ${getLastSeenTime()}`;

  window.addEventListener('focus', () => {
    lastSeenElement.textContent = `Aktif: ${getLastSeenTime()}`;
  });

  window.addEventListener('blur', () => {
    lastSeenElement.textContent = `Son görülme: ${getLastSeenTime()}`;
  });

  let viewCount = localStorage.getItem('viewCount');
  if (!viewCount) {
    viewCount = 0;
  }
  viewCount++;

  localStorage.setItem('viewCount', viewCount);

  const viewCountElement = document.getElementById('view-count');
  viewCountElement.innerHTML = `<i class="fas fa-eye"></i> ${viewCount}`;
}
