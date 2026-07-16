fetch('https://probizindia.in/')
  .then(res => res.text())
  .then(html => {
    const fonts = html.match(/fonts\.googleapis\.com[^"']+/g);
    console.log("Fonts:", fonts);
    const styles = html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
    if(styles) {
      styles.forEach(s => {
        const fontFam = s.match(/font-family:[^;]+/g);
        if(fontFam) console.log("Inline fonts:", fontFam);
      });
    }
  }).catch(e => console.error(e));
