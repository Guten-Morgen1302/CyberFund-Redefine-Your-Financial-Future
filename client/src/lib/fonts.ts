export const fonts = {
  orbitron: "'Orbitron', sans-serif",
  rajdhani: "'Rajdhani', sans-serif",
  exo: "'Exo', sans-serif",
  
  // Add font styles to the document
  addFontStyles: () => {
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --font-orbitron: 'Orbitron', sans-serif;
        --font-rajdhani: 'Rajdhani', sans-serif;
        --font-exo: 'Exo', sans-serif;
      }
      
      h1, h2, h3, .font-orbitron {
        font-family: var(--font-orbitron);
      }
      
      body, p, .font-rajdhani {
        font-family: var(--font-rajdhani);
      }
      
      .font-exo {
        font-family: var(--font-exo);
      }
    `;
    document.head.appendChild(style);
  }
};
