// API-Endpoint für das Abrufen der Projekte
const apiUrl = 'http://localhost:1337/api/linked-in-blogs';  // Passe den URL auf deinen Strapi-Server an

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const projekts = data.data;
    projekts.forEach(LinkedInBlog => {
      // Für jedes Projekt HTML-Elemente erzeugen
      const blogElement = document.createElement('div');
      blogElement.classList.add('LinkedInBlogs');
      
      blogElement.innerHTML = `
        <div class="blog-card">
            <h3 class='project-preview'>${LinkedInBlog.title}</h3>
            <p class='project-preview intro'>${LinkedInBlog.intro}</p>
        </div>
      `;

      document.getElementById('blogs-container').appendChild(blogElement);
    });
  })
  .catch(error => console.log('Error fetching projects:', error));
