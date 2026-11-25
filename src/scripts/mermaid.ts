const blocks = document.querySelectorAll<HTMLElement>('.prose pre > code.language-mermaid');

if (blocks.length > 0) {
  void renderDiagrams().catch((error) => console.error('Mermaid 加载失败', error));
}

async function renderDiagrams() {
  const { default: mermaid } = await import('mermaid');
  await document.fonts.ready;

  const root = document.documentElement;
  const diagrams = Array.from(blocks, (code) => {
    const source = code.parentElement!;
    const figure = document.createElement('figure');
    figure.className = 'mermaid-diagram';
    return { source, figure, definition: code.textContent ?? '' };
  });
  let rendering = false;
  let renderId = 0;

  async function update() {
    if (rendering) return;
    rendering = true;

    let theme: string | undefined;
    try {
      do {
        theme = root.dataset.theme;
        const palette = getComputedStyle(root);
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          suppressErrorRendering: true,
          theme: 'base',
          themeVariables: {
            darkMode: theme === 'dark',
            background: palette.getPropertyValue('--bg').trim(),
            primaryColor: palette.getPropertyValue('--surface').trim(),
            primaryTextColor: palette.getPropertyValue('--text').trim(),
            primaryBorderColor: palette.getPropertyValue('--accent').trim(),
            lineColor: palette.getPropertyValue('--muted').trim(),
            fontFamily: palette.getPropertyValue('--font-sans').trim(),
          },
        });

        for (const { source, figure, definition } of diagrams) {
          try {
            const { svg } = await mermaid.render(`post-diagram-${++renderId}`, definition);
            figure.innerHTML = svg;
            if (!figure.isConnected) source.before(figure);
            source.hidden = true;
          } catch (error) {
            console.error('Mermaid 图表渲染失败', error);
          }
        }
      } while (theme !== root.dataset.theme);
    } finally {
      rendering = false;
    }
  }

  const observer = new MutationObserver(() => {
    void update().catch((error) => console.error('Mermaid 主题更新失败', error));
  });
  observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
  await update();
}
