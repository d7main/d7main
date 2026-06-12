/**
 * Mechatronics & Embedded Systems Portfolio - app.js
 * Developer: Demian Zaiats
 */

// --- Project Data ---
const projectsData = [
    {
        title: "COM_fix",
        lang: "C#",
        link: "https://github.com/d7main/COM_fix",
        desc: {
            en: "A lightweight hardware recovery utility to scan, unblock, and repair stuck COM ports and drivers for STM32 and ESP32 developers.",
            uk: "Утиліта для сканування, розблокування та відновлення завислих COM-портів і драйверів для розробників STM32 та ESP32.",
            cs: "Nástroj pro skenování, odblokování a opravu zaseknutých portů COM a ovladačů pro vývojáře STM32 a ESP32."
        }
    },
    {
        title: "vibec-lang",
        lang: "TypeScript",
        link: "https://github.com/d7main/vibec-lang",
        desc: {
            en: "An unconventional, LLM-powered Domain Specific Language (DSL) and VS Code extension that transpiles natural language specifications into clean C code.",
            uk: "Нестандартна мова специфікацій (DSL) на базі LLM та розширення для VS Code для транспіляції в чистий C код.",
            cs: "Netradiční doménově specifický jazyk (DSL) využívající LLM a rozšíření pro VS Code pro transpilaci do čistého C."
        }
    },
    {
        title: "High-Noon-Duel",
        lang: "C",
        link: "https://github.com/d7main/High-Noon-Duel",
        desc: {
            en: "A lightweight, 1985 arcade-style western duel game written in pure C using the Win32 API / GDI.",
            uk: "Легка аркадна гра-дуель 1985 року, написана на чистому C з використанням Win32 API.",
            cs: "Lehká arkádová hra-duel z roku 1985 napsaná v čistém C pomocí Win32 API."
        }
    }
];

// --- i18n Translations Dictionary ---
const translations = {
    en: {
        role: "Mechatronics Student | .NET & IoT Developer",
        nav_about: "Profile Overview",
        nav_stack: "Technical Stack",
        nav_automation: "Automation & Metrology",
        nav_projects: "GitHub Repositories",
        
        about_title: "Profile & Focus",
        about_p1: "I am a Mechatronics student at the Faculty of Mechatronics, Informatics and Interdisciplinary Studies at the Technical University of Liberec (FM TUL). My engineering passion lies at the intersection of robust desktop applications (.NET/WPF) and resource-constrained embedded environments (STM32, ESP32).",
        about_p2: "I actively focus on designing complete mechatronic systems—combining structural firmware in C/C++, reliable communications over industrial buses, and user-friendly desktop utilities that streamline engineering workflows.",
        
        stack_title: "Technical Stack",
        stack_embedded: "Embedded Systems & FPGA",
        stack_desktop: "Desktop & Systems",
        stack_industrial: "Industrial Automation & Metrology",
        
        auto_title: "Automation & Metrology",
        auto_p1: "In industrial automation and metrology, signal conditioning is critical. I work with RTDs (Pt100/500/1000), strain gauges (тензодатчики), 4-20mA current loops, and PLC program structures in Structured Text (ST) within B&R Automation Studio.",
        calc_name: "RTD Temperature-to-Resistance Calculator (IEC 60751)",
        calc_lbl_type: "Sensor Type",
        calc_lbl_temp: "Temperature (°C)",
        calc_lbl_res: "Calculated Resistance",
        
        projects_title: "Featured Projects",
        projects_subtitle: "Dymamically loaded repositories",
        
        sys_status: "SYSTEM STATUS: ACTIVE",
        sys_uptime: "System Uptime:"
    },
    uk: {
        role: "Студент Мехатроніки | .NET & IoT Розробник",
        nav_about: "Огляд Профілю",
        nav_stack: "Технічний Стек",
        nav_automation: "Автоматизація та Метрологія",
        nav_projects: "Репозиторії GitHub",
        
        about_title: "Профіль та Спрямування",
        about_p1: "Я студент факультету мехатроніки, інформатики та міждисциплінарних досліджень Технічного університету в Ліберці (FM TUL). Моя інженерна пристрасть полягає на перетині надійних настільних додатків (.NET/WPF) та вбудованих систем з обмеженими ресурсами (STM32, ESP32).",
        about_p2: "Активно зосереджуюсь на проектуванні повних мехатронних рішень — поєднанні структурної мікропрограми на C/C++, надійного зв'язку через промислові шини та зручних десктопних утиліт для оптимізації робочих процесів.",
        
        stack_title: "Технічний Стек",
        stack_embedded: "Вбудовані системи та FPGA",
        stack_desktop: "Десктоп і Системне програмування",
        stack_industrial: "Промислова Автоматизація та Метрологія",
        
        auto_title: "Автоматизація та Метрологія",
        auto_p1: "У промисловій автоматизації та метрології кондиціювання сигналів є критично важливим. Я працюю з RTD (Pt100/500/1000), тензодатчиками, струмовими петлями 4-20мА та розробкою для ПЛК мовою Structured Text (ST) в B&R Automation Studio.",
        calc_name: "Калькулятор Опору RTD (IEC 60751)",
        calc_lbl_type: "Тип сенсора",
        calc_lbl_temp: "Температура (°C)",
        calc_lbl_res: "Розрахований опір",
        
        projects_title: "Обрані Проекти",
        projects_subtitle: "Динамічно завантажені репозиторії",
        
        sys_status: "СТАТУС СИСТЕМИ: АКТИВНИЙ",
        sys_uptime: "Аптайм Системи:"
    },
    cs: {
        role: "Student Mechatroniky | .NET & IoT Vývojář",
        nav_about: "Přehled Profilu",
        nav_stack: "Technologický Stack",
        nav_automation: "Automatizace a Metrologie",
        nav_projects: "GitHub Repozitáře",
        
        about_title: "Profil a Zaměření",
        about_p1: "Jsem studentem mechatroniky na Fakultě mechatroniky, informatiky a mezioborových studií Technické univerzity v Liberci (FM TUL). Moje inženýrská vášeň leží na pomezí robustních desktopových aplikací (.NET/WPF) a vestavěných systémů (STM32, ESP32).",
        about_p2: "Aktivně se zaměřuji na navrhování kompletních mechatronických systémů — kombinaci strukturovaného firmwaru v C/C++, spolehlivé komunikace přes průmyslové sběrnice a uživatelsky přívětivých desktopových nástrojů.",
        
        stack_title: "Technologický Stack",
        stack_embedded: "Vestavěné systémy a FPGA",
        stack_desktop: "Desktop a Systémy",
        stack_industrial: "Průmyslová Automatizace a Metrologie",
        
        auto_title: "Automatizace a Metrologie",
        auto_p1: "V průmyslové automatizaci a metrologii je úprava signálů klíčová. Pracuji s RTD (Pt100/500/1000), tenzometry, proudovými smyčkami 4-20mA a PLC programovými strukturami v Structured Text (ST) v prostředí B&R Automation Studio.",
        calc_name: "Kalkulátor Odporu RTD (IEC 60751)",
        calc_lbl_type: "Typ senzoru",
        calc_lbl_temp: "Teplota (°C)",
        calc_lbl_res: "Vypočtený odpor",
        
        projects_title: "Vybrané Projekty",
        projects_subtitle: "Dynamicky načtené repozitáře",
        
        sys_status: "STAV SYSTÉMU: AKTIVNÍ",
        sys_uptime: "Doba běhu systému:"
    }
};

let currentLang = 'en';

// --- Initialize Portfolio ---
document.addEventListener("DOMContentLoaded", () => {
    // Detect system preferred language, fallback to EN
    const userLang = navigator.language || navigator.userLanguage;
    const shortLang = userLang.substring(0, 2).toLowerCase();
    if (translations[shortLang]) {
        currentLang = shortLang;
    }
    
    setLanguage(currentLang);
    initUptimeCounter();
    initParallax();
    initSectionSpy();
    initRtdCalculator();
});

// --- Language Toggle Handling ---
function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    
    // Update active state in switcher UI
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    
    // Update translation text for components containing "data-i18n" attribute
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Re-render Dynamic Projects list using the selected language descriptions
    renderProjects();
}

// --- Dynamic Projects Renderer ---
function renderProjects() {
    const container = document.getElementById("projectsContainer");
    if (!container) return;
    
    container.innerHTML = "";
    projectsData.forEach(project => {
        const descText = project.desc[currentLang] || project.desc['en'];
        
        const card = document.createElement("a");
        card.href = project.link;
        card.target = "_blank";
        card.className = "project-card";
        
        card.innerHTML = `
            <div class="project-card-header">
                <span class="project-card-title">${project.title}</span>
                <span class="project-card-lang">${project.lang}</span>
            </div>
            <p class="project-card-body">${descText}</p>
            <div class="project-card-footer">
                <span>git clone ${project.link}.git</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </div>
        `;
        container.appendChild(card);
    });
}

// --- RTD Resistance Calculator (Callendar-Van Dusen Equation) ---
function initRtdCalculator() {
    const sensorTypeSelect = document.getElementById("rtdType");
    const tempInput = document.getElementById("rtdTemp");
    const resultSpan = document.getElementById("rtdResult");
    
    function calculate() {
        const r0 = parseFloat(sensorTypeSelect.value); // Pt100 (100) or Pt1000 (1000)
        const t = parseFloat(tempInput.value) || 0;
        
        // Coefficients based on IEC 60751
        const A = 3.9083e-3;
        const B = -5.775e-7;
        const C = -4.183e-12;
        
        let rt = 0;
        if (t >= 0) {
            rt = r0 * (1 + A * t + B * Math.pow(t, 2));
        } else {
            rt = r0 * (1 + A * t + B * Math.pow(t, 2) + C * (t - 100) * Math.pow(t, 3));
        }
        
        resultSpan.textContent = `${rt.toFixed(3)} Ω`;
    }
    
    if (sensorTypeSelect && tempInput && resultSpan) {
        sensorTypeSelect.addEventListener("change", calculate);
        tempInput.addEventListener("input", calculate);
        calculate(); // initial compute
    }
}

// --- Section Spy Highlight ---
function initSectionSpy() {
    const sections = document.querySelectorAll("section.content-section");
    const navLinks = document.querySelectorAll(".nav-link");
    
    const options = {
        root: null,
        rootMargin: "-20% 0px -60% 0px", // triggers when section occupies central viewport
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                navLinks.forEach(link => {
                    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
                });
            }
        });
    }, options);
    
    sections.forEach(section => observer.observe(section));
}

// --- Live Uptime Counter Simulation ---
function initUptimeCounter() {
    const uptimeVal = document.getElementById("uptimeVal");
    if (!uptimeVal) return;
    
    // Simulate boot time as 2 hours, 14 minutes, and 5 seconds before session start
    let totalSeconds = 8045; 
    
    setInterval(() => {
        totalSeconds++;
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        let uptimeStr = "";
        if (days > 0) uptimeStr += `${days}d `;
        uptimeStr += `${hours.toString().padStart(2, '0')}h `;
        uptimeStr += `${minutes.toString().padStart(2, '0')}m `;
        uptimeStr += `${seconds.toString().padStart(2, '0')}s`;
        
        uptimeVal.textContent = uptimeStr;
    }, 1000);
}

// --- Parallax Effect for Digit 7 ---
function initParallax() {
    const bgDigit = document.getElementById("bgDigit");
    if (!bgDigit) return;
    
    window.addEventListener("mousemove", (e) => {
        // Only run on PC screens (width greater than or equal to 992px)
        if (window.innerWidth >= 992) {
            const x = (e.clientX - window.innerWidth / 2) * -0.015;
            const y = (e.clientY - window.innerHeight / 2) * -0.015;
            
            bgDigit.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        } else {
            bgDigit.style.transform = "translate(-50%, -50%)";
        }
    });
}
