fetch('http://localhost:1337/api/restaurants')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Zeigt die Daten in der Konsole an

    // Daten dynamisch in HTML einfügen
    const projectsContainer = document.getElementById('projects-container');
    data.data.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.innerHTML = `
        <h2>${project.attributes.title}</h2>
        <p>${project.attributes.description}</p>
      `;
      projectsContainer.appendChild(projectElement);
    });
  })
