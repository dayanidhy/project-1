async function includeHTML(id, file) {
  const el = document.getElementById(id);
  try {
    const res = await fetch(file);
    const html = await res.text();
    el.innerHTML = html;
  } catch (err) {
    el.innerHTML = `<p style="color:red;">Error loading ${file}</p>`;
    console.error(err);
  }
}
