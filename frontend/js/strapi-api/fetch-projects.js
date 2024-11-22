var api = "http://localhost:1337/api/projects?populate=*";

fetch(api)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Zeigt die Daten in der Konsole an

    const projectsContainer = document.getElementById('projects-container');

    if (data && data.data) {
      // Projekte nach Datum sortieren (neuestes zuerst)
      data.data.sort((a, b) => new Date(b.releasedate) - new Date(a.releasedate));

      data.data.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project-card');

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

        projectsContainer.appendChild(projectElement);
      });
    } else {
      console.error('No projects data found.');
    }
  })
  .catch(error => {
    console.error('Error fetching projects:', error);
  });
