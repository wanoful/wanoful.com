import './style.css';
import { profileData, type Lang } from './data/profile';

const savedLang = localStorage.getItem('wanoful_lang') as Lang | null;
const browserLang: Lang = navigator.language?.toLowerCase().startsWith('zh') ? 'zh' : 'en';
const savedTheme =
  (localStorage.getItem('wanoful_theme') as 'dark' | 'light' | null) ||
  (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

let lang: Lang = savedLang === 'zh' || savedLang === 'en' ? savedLang : browserLang;
let theme: 'dark' | 'light' = savedTheme;

document.documentElement.setAttribute('data-theme', theme);
document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

const labels = {
  education: { en: 'Education', zh: '教育背景' },
  experience: { en: 'Research Experience', zh: '科研经历' },
  projects: { en: 'Selected Projects', zh: '精选项目' },
  teaching: { en: 'Teaching', zh: '课程助教' },
  honors: { en: 'Honors', zh: '荣誉奖项' },
  cv: { en: 'CV', zh: '简历' },
  email: { en: 'Email', zh: '邮箱' },
};

function render() {
  const app = document.getElementById('app');
  if (!app) return;

  const d = profileData;

  app.innerHTML = `
    <main class="page">
      <header class="header">
        <div>
          <div class="name-group">
            <h1 class="name">${d.name[lang]}</h1>
            <span class="subname">${d.subName[lang]}</span>
          </div>
          <div class="affiliation">${d.affiliation[lang]}</div>
        </div>

        <div class="controls">
          <button type="button" class="text-toggle" id="lang-btn" aria-label="Switch language">
            ${lang === 'en' ? '中' : 'EN'}
          </button>
          <button type="button" class="dot-toggle" id="theme-btn" aria-label="Toggle theme" title="Toggle theme"></button>
        </div>
      </header>

      <section class="bio">
        ${d.bio[lang].map((p) => `<p>${p}</p>`).join('')}
      </section>

      <nav class="links-row">
        <a href="mailto:${d.email}">${d.email} <span class="arrow">↗</span></a>
        <a href="${d.github}" target="_blank" rel="noopener">GitHub <span class="arrow">↗</span></a>
        <a href="${d.cvUrl[lang]}" target="_blank" rel="noopener">${labels.cv[lang]} <span class="arrow">↗</span></a>
      </nav>

      <!-- Education -->
      <section class="section">
        <h2 class="section-title">${labels.education[lang]}</h2>
        <div class="list">
          <div>
            <div class="item-head">
              <span class="item-title">${d.education.school[lang]}</span>
              <span class="item-meta">${d.education.period[lang]}</span>
            </div>
            <p class="item-desc">
              ${d.education.degree[lang]}<br />
              <span style="color:var(--fg-muted);font-size:0.87rem;">${d.education.prevTrack[lang]}</span>
            </p>
            <p class="item-desc" style="color:var(--fg-muted);font-size:0.85rem;margin-top:0.4rem;">
              ${d.education.coursework[lang]}
            </p>
          </div>
        </div>
      </section>

      <!-- Research Experience -->
      <section class="section">
        <h2 class="section-title">${labels.experience[lang]}</h2>
        <div class="list">
          ${d.experience
            .map(
              (exp) => `
            <div>
              <div class="item-head">
                <div>
                  <a href="${exp.orgUrl}" target="_blank" rel="noopener" class="item-title">
                    ${exp.org[lang]} <span class="arrow">↗</span>
                  </a>
                  <span class="item-subtitle"> · ${exp.role[lang]}</span>
                </div>
                <span class="item-meta">${exp.period[lang]}</span>
              </div>
              <p class="item-desc">${exp.description[lang]}</p>
            </div>
          `
            )
            .join('')}
        </div>
      </section>

      <!-- Selected Projects -->
      <section class="section">
        <h2 class="section-title">${labels.projects[lang]}</h2>
        <div class="list">
          ${d.projects
            .map(
              (proj) => `
            <div>
              <div class="item-head">
                <div>
                  ${
                    proj.mainUrl
                      ? `<a href="${proj.mainUrl}" target="_blank" rel="noopener" class="item-title">${proj.title[lang]} <span class="arrow">↗</span></a>`
                      : `<span class="item-title">${proj.title[lang]}</span>`
                  }
                  ${
                    proj.extraLinks
                      ? proj.extraLinks
                          .map(
                            (l) =>
                              `<a href="${l.url}" target="_blank" rel="noopener" class="extra-link">${l.label[lang]} <span class="arrow">↗</span></a>`
                          )
                          .join('')
                      : ''
                  }
                </div>
                <span class="item-meta">${proj.tech} · ${proj.year}</span>
              </div>
              <p class="item-desc">${proj.description[lang]}</p>
            </div>
          `
            )
            .join('')}
        </div>
      </section>

      <!-- Teaching -->
      <section class="section">
        <h2 class="section-title">${labels.teaching[lang]}</h2>
        <div class="list">
          ${d.teaching
            .map(
              (t) => `
            <div>
              <div class="item-head">
                <div>
                  ${
                    t.url
                      ? `<a href="${t.url}" target="_blank" rel="noopener" class="item-title">${t.course[lang]} <span class="arrow">↗</span></a>`
                      : `<span class="item-title">${t.course[lang]}</span>`
                  }
                  <span class="item-subtitle"> · ${t.role[lang]}</span>
                </div>
                <span class="item-meta">${t.period[lang]}</span>
              </div>
              <p class="item-desc">${t.detail[lang]}</p>
            </div>
          `
            )
            .join('')}
        </div>
      </section>

      <!-- Honors -->
      <section class="section">
        <h2 class="section-title">${labels.honors[lang]}</h2>
        <div class="compact-list">
          ${d.honors
            .map(
              (h) => `
            <div class="compact-row">
              <span class="compact-year">${h.year}</span>
              <span class="compact-title">${h.title[lang]}</span>
              <span class="compact-note">${h.note[lang]}</span>
            </div>
          `
            )
            .join('')}
        </div>
      </section>

      <footer class="footer">
        <span>Zhaoyuan Wan</span>
        <span>wanoful.com</span>
      </footer>
    </main>
  `;

  document.getElementById('lang-btn')?.addEventListener('click', () => {
    lang = lang === 'en' ? 'zh' : 'en';
    localStorage.setItem('wanoful_lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    render();
  });

  document.getElementById('theme-btn')?.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('wanoful_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  });
}

render();
