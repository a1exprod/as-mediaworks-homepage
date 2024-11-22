var api = "http://localhost:1337/api/webdevelopments?populate[projects][populate]=thumbnail";

fetch(api)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Zeigt die Daten in der Konsole an

    const webDevelopmentContainer = document.getElementById('webdevelopment-container');

    if (data && data.data) {
      // Gehe durch alle Webdevelopment-Einträge und deren zugehörige Projekte
      data.data.forEach(entry => {
        if (entry.projects && entry.projects.length) {
          entry.projects
            .sort((a, b) => new Date(b.releasedate) - new Date(a.releasedate)) // Sortiere nach Datum
            .forEach(project => {
              const projectElement = document.createElement('div');
              projectElement.classList.add('project-card');

              // URL für Thumbnail erstellen (falls vorhanden)
              const thumbnailUrl = project.thumbnail ? "http://localhost:1337" + project.thumbnail.url : '';

              // Datum formatieren (Tag/Monat/Jahr)
              const formattedDate = new Date(project.releasedate).toLocaleDateString('de-DE', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              });

              // Hintergrundbild setzen
              if (thumbnailUrl) {
                projectElement.style.backgroundImage = `url(${thumbnailUrl})`;
                projectElement.style.backgroundSize = 'cover';
                projectElement.style.backgroundPosition = 'center';
              }

              projectElement.innerHTML = `
                <h3 class='project-preview'>${project.title}</h3>
                <p class='project-preview projecttype'>${project.projecttype}</p>
                <p class='project-preview intro'>${project.intro}</p>
                <br>
                <p class='project-preview date'>${formattedDate}</p>
              `;

              webDevelopmentContainer.appendChild(projectElement);
            });
        }
      });
    } else {
      console.error('No web development data found.');
    }
  })
  .catch(error => {
    console.error('Error fetching web development projects:', error);
  });
