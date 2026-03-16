/* eslint-disable no-console */

function extractConfig(block) {
  const rows = [...block.querySelectorAll(':scope > div')];

  return {
    title: rows[0]?.querySelector('div')?.textContent?.trim() || '',
    body: rows[1]?.querySelector('div')?.innerHTML || '',
  };
}

function buildBlock(block, config) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('simple-text-wrapper');

  if (config.title) {
    const title = document.createElement('h2');
    title.classList.add('simple-text-title');
    title.textContent = config.title;
    wrapper.appendChild(title);
  }

  if (config.body) {
    const body = document.createElement('div');
    body.classList.add('simple-text-body');
    body.innerHTML = config.body;
    wrapper.appendChild(body);
  }
  config.mainEl = wrapper;
}

function updateBlockContent(block, content) {
  block.replaceChildren(content);
}

export default function decorate(block) {
  const config = extractConfig(block);
  buildBlock(block, config);
  updateBlockContent(block, config.mainEl);
}
