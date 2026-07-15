const fs = require('fs');
const files = [
  'App.jsx', 'AboutMentor.jsx', 'ProgramsAndServices.jsx', 
  'AuthorPage.jsx', 'RecognitionPage.jsx', 'InsightsPage.jsx', 'ContactPage.jsx'
];
files.forEach(file => {
  const path = './src/' + file;
  let content = fs.readFileSync(path, 'utf8');
  
  // Replace imports to include Navbar
  if (!content.includes('import Navbar')) {
    content = content.replace(/(import .* from 'react';?)/, '$1\nimport Navbar from \'./Navbar\';');
  }

  // Determine if it needs transparent prop
  const isTransparent = content.includes('backgroundColor: \'transparent\'') || file === 'InsightsPage.jsx' || file === 'ContactPage.jsx';
  const navComponent = isTransparent ? '<Navbar transparent={true} />' : '<Navbar />';

  // Remove existing Navbar and mobile menu
  // Usually starts with {/* Navbar */} and ends before <main> or <header> or <div className="hero
  content = content.replace(/\{\/\* Navbar \*\/\}[\s\S]*?(?:\{\/\* Mobile Menu Overlay \*\/\}[\s\S]*?\})?(?:<div className=\"mobile-menu[\s\S]*?<\/div>)?[\s\S]*?(?=<main|<header|<div className=\"about-main|<div className=\"prog-main|<section)/, navComponent + '\n\n      ');

  fs.writeFileSync(path, content);
  console.log('Updated ' + file);
});
