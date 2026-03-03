const byId = (id) => document.getElementById(id);

const DOWNLOAD_CONTENT = {
  "acf-brand-tokens.css": `:root {\n  --acf-main: #006ba0;\n  --acf-secondary: #f37c31;\n  --acf-font: 'Source Sans 3', sans-serif;\n}`,
  "acf-brand.json": JSON.stringify(
    {
      organization: "Athlete Connections Foundation",
      colors: {
        main: "#006ba0",
        secondary: "#f37c31"
      },
      font: "Source Sans 3",
      logo: "assets/acf-logo-primary.png"
    },
    null,
    2
  ),
  "acf-brand.txt": `Athlete Connections Foundation\n\nMain Color: #006BA0\nSecondary Color: #F37C31\nFont: Source Sans 3\nLogo Path: assets/acf-logo-primary.png\n`
};

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.getAttribute("data-copy");
    const copied = await copyText(value);
    const previous = button.textContent;
    button.textContent = copied ? "Copied" : "Copy Failed";
    window.setTimeout(() => {
      button.textContent = previous;
    }, 1200);
  });
});

document.querySelectorAll("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", async () => {
    const id = button.getAttribute("data-copy-target");
    const element = byId(id);
    if (!element) {
      return;
    }
    const copied = await copyText(element.textContent.trim());
    const previous = button.textContent;
    button.textContent = copied ? "Copied" : "Copy Failed";
    window.setTimeout(() => {
      button.textContent = previous;
    }, 1200);
  });
});

document.querySelectorAll("[data-download]").forEach((button) => {
  button.addEventListener("click", () => {
    const filename = button.getAttribute("data-download");
    const content = DOWNLOAD_CONTENT[filename];
    if (!content) {
      return;
    }

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  });
});
