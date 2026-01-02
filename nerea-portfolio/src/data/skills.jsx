// nereallugany.com/data/skills.js

export const skillsMeters = [
  { label: '2D & 3D rigs, cycles, timing and production', pct: 95 },
  { label: 'HTML/CSS/JS, React, Flutter, responsive UI', pct: 85 },
  { label: 'APIs, databases, simple servers and integrations', pct: 75 },
  { label: 'Brand identity, campaigns, packaging, print', pct: 92 },
  { label: 'Game logic, prototyping in Unity/Unreal', pct: 80 },
  { label: 'Android / iOS fundamentals, app prototypes', pct: 70 },
  { label: 'AE pipelines, compositing, color grade', pct: 88 },
];

export const skillCategories = [
  { id: 'design', label: 'Design' },
  { id: 'animation', label: 'Animation' },
  { id: 'games', label: 'Games' },
  { id: 'web', label: 'Web/apps' },
  { id: 'devops', label: 'DevOps' },
  { id: 'audio', label: 'Audio' },
];

// Complete list with IDs matching your HTML block
export const skillsList = [
  // --- DESIGN ---
  { id: 'ps', cat: 'design', color: '#31A8FF', name: 'Photoshop', logo: '/nereallugany.com/assets/logos/photoshop.svg' },
  { id: 'ai', cat: 'design', color: '#FF9A00', name: 'Illustrator', logo: '/nereallugany.com/assets/logos/illustrator.svg' },
  { id: 'fig', cat: 'design', color: '#ff7262', name: 'Figma', logo: '/nereallugany.com/assets/logos/figma.svg' },
  { id: 'can', cat: 'design', color: '#00C4CC', name: 'Canva', logo: '/nereallugany.com/assets/logos/canva.svg' },

  // --- ANIMATION ---
  { id: 'ae', cat: 'animation', color: '#CF96FD', name: 'After Effects', logo: '/nereallugany.com/assets/logos/ae.svg' },
  { id: 'pr', cat: 'animation', color: '#D88EF1', name: 'Premiere Pro', logo: '/nereallugany.com/assets/logos/premiere.svg' },
  { id: 'bl-a', cat: 'animation', color: '#F5792A', name: 'Blender', logo: '/nereallugany.com/assets/logos/blender.svg' },
  { id: 'p5', cat: 'animation', color: '#ED225D', name: 'p5.js', logo: '/nereallugany.com/assets/logos/p5.svg' },
  { id: 'proc', cat: 'animation', color: '#0468ff', name: 'Processing', logo: '/nereallugany.com/assets/logos/processing.svg' },

  // --- GAMES ---
  { id: 'unity', cat: 'games', color: '#e6e6e6', textColor: '#000', name: 'Unity', logo: '/nereallugany.com/assets/logos/unity.svg' },
  { id: 'ue', cat: 'games', color: '#465a65', name: 'Unreal Engine', logo: '/nereallugany.com/assets/logos/unreal.svg' },
  { id: 'bl-g', cat: 'games', color: '#EA7600', name: 'Blender', logo: '/nereallugany.com/assets/logos/blender.svg' },
  { id: 'ard', cat: 'games', color: '#00979c', name: 'Arduino', logo: '/nereallugany.com/assets/logos/arduino.svg' },
  { id: 'p5-g', cat: 'games', color: '#ED225D', name: 'p5.js (games)', logo: '/nereallugany.com/assets/logos/p5.svg' },
  { id: 'proc-g', cat: 'games', color: '#0468ff', name: 'Processing (games)', logo: '/nereallugany.com/assets/logos/processing.svg' },

  // --- WEB / APPS ---
  { id: 'html', cat: 'web', color: '#E34F26', name: 'HTML', logo: '/nereallugany.com/assets/logos/html.svg' },
  { id: 'css', cat: 'web', color: '#264DE4', name: 'CSS', logo: '/nereallugany.com/assets/logos/css.svg' },
  { id: 'js', cat: 'web', color: '#F7DF1E', textColor: '#000', name: 'JavaScript', logo: '/nereallugany.com/assets/logos/js.svg' },
  { id: 'react', cat: 'web', color: '#61DAFB', textColor: '#000', name: 'React', logo: '/nereallugany.com/assets/logos/react.svg' },
  { id: 'ang', cat: 'web', color: '#DD0031', name: 'Angular', logo: '/nereallugany.com/assets/logos/angular.svg' },
  { id: 'flut', cat: 'web', color: '#02569B', name: 'Flutter', logo: '/nereallugany.com/assets/logos/flutter.svg' },
  { id: 'and', cat: 'web', color: '#3DDC84', textColor: '#000', name: 'Android Studio', logo: '/nereallugany.com/assets/logos/android.svg' },
  { id: 'xcode', cat: 'web', color: '#0A84FF', name: 'Xcode', logo: '/nereallugany.com/assets/logos/xcode.svg' },
  { id: 'fire', cat: 'web', color: '#FFCA28', textColor: '#000', name: 'Firebase', logo: '/nereallugany.com/assets/logos/firebase.svg' },
  { id: 'wp', cat: 'web', color: '#21759B', name: 'WordPress', logo: '/nereallugany.com/assets/logos/wordpress.svg' },
  { id: 'elem', cat: 'web', color: '#0C8AFF', name: 'Elementor', logo: '/nereallugany.com/assets/logos/elementor.svg' },
  { id: 'fig-h', cat: 'web', color: '#ff7262', name: 'Figma handoff', logo: '/nereallugany.com/assets/logos/figma.svg' },
  { id: 'snip', cat: 'web', color: '#E34F26', name: 'HTML/CSS/JS snippets', logo: '/nereallugany.com/assets/logos/html.svg' },

  // --- DEVOPS ---
  { id: 'git', cat: 'devops', color: '#F05032', name: 'Git', logo: '/nereallugany.com/assets/logos/git.svg' },
  { id: 'php', cat: 'devops', color: '#777BB4', name: 'PHP', logo: '/nereallugany.com/assets/logos/php.svg' },
  { id: 'fire-d', cat: 'devops', color: '#FFCA28', textColor: '#000', name: 'Firebase (devops)', logo: '/nereallugany.com/assets/logos/firebase.svg' },
  { id: 'qt', cat: 'devops', color: '#2CDE85', textColor: '#000', name: 'Qt', logo: '/nereallugany.com/assets/logos/qt.svg' },

  // --- AUDIO ---
  { id: 'reaper', cat: 'audio', color: '#8c6e63', name: 'Reaper', logo: '/nereallugany.com/assets/logos/reaper.svg' },
  { id: 'aud', cat: 'audio', color: '#0000ff', name: 'Audacity', logo: '/nereallugany.com/assets/logos/audacity.svg' },
];