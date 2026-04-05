const translations = {
    en: {
        heroGreeting: "Hello, I am",
        heroSubtitle: "Software Engineering Student",
        heroDesc: "A passionate student seeking to advance in the field, dedicated to building secure systems using Python, Docker, and PostgreSQL, with practical experience in cybersecurity.",
        btnProjects: "See My Projects",
        btnGithub: "GitHub",

        skillsTitle: "Tech Stack & Skills",
        projectsTitle: "Featured Projects",

        // Category A
        catA_Title: "Cybersecurity Field Achievements",
        proj1Title: "Cyber Recon & Ethical Reporting",
        proj1Desc: "Detected a critical vulnerability allowing unauthorized access to sensitive data on a national IP address utilizing Shodan and OSINT tools. Reported the finding ethically via HackerOne and USOM.",

        proj2Title: "ESP32 Physical Pentest Tool",
        proj2Desc: "Compiled a custom firmware in C++ for the ESP32-S3 chip to develop an offensive network analysis station targeting Wi-Fi and BLE protocols (Deauth, Packet Sniffing).",

        proj3Title: "Professional Web Pentest",
        proj3Desc: "Proved a critical client-side \"Subscription Bypass\" vulnerability on Next.js and Clerk architectures by manipulating HTTP requests with Burp Suite.",

        // Category B
        catB_Title: "Developed Tools & Projects",
        proj4Title: "S3M_NAC_Project",
        proj4Desc: "A Network Access Control (NAC) management engine developed with Python & PostgreSQL, running on Docker.",

        proj5Title: "Siber-NetSpider",
        proj5Desc: "A tool for scanning devices on networks and performing network tests using a Wi-Fi adapter.",

        proj6Title: "Siber-VenomintelOsint",
        proj6Desc: "Comprehensive OSINT automation for gathering intelligence via usernames, emails, and metadata.",

        proj7Title: "Siber-Scamp",
        proj7Desc: "A custom keylogger and surveillance tool developed for covert data collection.",

        proj8Title: "Siber-QuiteCat",
        proj8Desc: "A scenario-based Python tool automating Metasploit listener management.",

        proj9Title: "Siber-Owl",
        proj9Desc: "An automation tool built to ensure privacy and leave no trace on the internet.",

        proj10Title: "Siber-IrisIp",
        proj10Desc: "An open-port scanner and information gathering tool targeting specific IP addresses.",

        btnViewAllGithub: "View on GitHub",

        footerTitle: "Get In Touch",
        footerDesc: "I'm currently looking for new opportunities in software engineering and cybersecurity."
    },
    tr: {
        heroGreeting: "Merhaba, ben",
        heroSubtitle: "Yazılım Mühendisliği Öğrencisi",
        heroDesc: "Python, Docker ve PostgreSQL mimarileri ile güvenli sistemler inşa etmeye tutkulu, siber güvenlik alanında saha deneyimine sahip ve kendini geliştirmek isteyen bir öğrenciyim.",
        btnProjects: "Projelerimi Gör",
        btnGithub: "GitHub",

        skillsTitle: "Yetenekler & Teknolojiler",
        projectsTitle: "Öne Çıkan Projeler ",

        // Category A
        catA_Title: "Siber Güvenlik Saha Başarıları",
        proj1Title: "Siber Keşif ve Etik Raporlama",
        proj1Desc: "Shodan ve OSINT araçlarıyla ulusal bir IP adresi üzerinde hassas verilere yetkisiz erişim sağlayan kritik bir zafiyet tespit ettim. Bu bulguyu HackerOne ve USOM üzerinden sorumlu ifşa ile raporladım.",

        proj2Title: "ESP32 Fiziksel Sızma Testi Aracı",
        proj2Desc: "ESP32-S3 çipi üzerinde C++ ile özel bir firmware derleyerek; Wi-Fi ve BLE protokollerine yönelik ofansif bir ağ analiz istasyonu geliştirdim (Deauth, Packet Sniffing).",

        proj3Title: "Profesyonel Web Sızma Testi (Pentest)",
        proj3Desc: "Next.js ve Clerk tabanlı mimarilerde Burp Suite ile HTTP isteklerini manipüle ederek istemci taraflı kritik \"Subscription Bypass\" zafiyetini kanıtladım.",

        // Category B
        catB_Title: "Geliştirdiğim Araçlar ve Projeler",
        proj4Title: "S3M_NAC_Project",
        proj4Desc: "Python & PostgreSQL ile geliştirilen, Docker üzerinde koşan Ağ Erişim Kontrolü (NAC) yönetim motoru.",

        proj5Title: "Siber-NetSpider",
        proj5Desc: "Wi-Fi adaptörü kullanarak ağdaki cihazları tarama ve ağ testleri yapma aracı.",

        proj6Title: "Siber-VenomintelOsint",
        proj6Desc: "Kullanıcı adı, e-posta ve meta veri üzerinden istihbarat toplayan kapsamlı OSINT otomasyonu.",

        proj7Title: "Siber-Scamp",
        proj7Desc: "Gizli veri toplama ve dinleme süreçleri için geliştirilmiş Keylogger ve dinleme aracı.",

        proj8Title: "Siber-QuiteCat",
        proj8Desc: "Metasploit dinleyici yönetimini otomatikleştiren senaryo bazlı Python aracı.",

        proj9Title: "Siber-Owl",
        proj9Desc: "İnternette iz bırakmamak ve gizlilik sağlamak için geliştirilmiş otomasyon aracı.",

        proj10Title: "Siber-IrisIp",
        proj10Desc: "Belirlenen IP adresi üzerinden açık port tarama ve bilgi toplama aracı.",

        btnViewAllGithub: "GitHub'da Gör",

        footerTitle: "İletişime Geç",
        footerDesc: "Yazılım mühendisliği ve siber güvenlik alanlarında yeni fırsatlara her zaman açığım."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Theme setup
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlEl = document.documentElement;

    const svgSun = `<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>`;
    const svgMoon = `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>`;

    // Check saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlEl.setAttribute('data-theme', savedTheme);
    themeIcon.innerHTML = savedTheme === 'dark' ? svgSun : svgMoon;

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeIcon.innerHTML = newTheme === 'dark' ? svgSun : svgMoon;
    });

    // Language setup
    const langToggle = document.getElementById('lang-toggle');
    const langLabel = document.getElementById('lang-label');

    let currentLang = localStorage.getItem('lang') || 'en';

    const applyLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
        langLabel.textContent = lang === 'en' ? 'TR' : 'EN';
    };

    applyLanguage(currentLang);

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'tr' : 'en';
        localStorage.setItem('lang', currentLang);
        applyLanguage(currentLang);
    });

    // Email Copy Functionality
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = 'osmanbayram2882@gmail.com';
            navigator.clipboard.writeText(email).then(() => {
                const msg = currentLang === 'en' ? 'Email copied!' : 'Email kopyalandı!';
                
                // Create a sleek toast notification
                const toast = document.createElement('div');
                toast.textContent = msg;
                toast.style.position = 'fixed';
                toast.style.bottom = '20px';
                toast.style.right = '20px';
                toast.style.backgroundColor = '#a855f7';
                toast.style.color = '#fff';
                toast.style.padding = '12px 24px';
                toast.style.borderRadius = '8px';
                toast.style.zIndex = '9999';
                toast.style.fontFamily = "'Inter', sans-serif";
                toast.style.fontSize = '14px';
                toast.style.fontWeight = '500';
                toast.style.boxShadow = '0 4px 12px rgba(168, 85, 247, 0.4)';
                
                // Initial animation state
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(15px)';
                toast.style.transition = 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)';
                
                document.body.appendChild(toast);

                // Force reflow
                void toast.offsetWidth;

                // Trigger soft fade-in & slide-up
                toast.style.opacity = '1';
                toast.style.transform = 'translateY(0)';

                // Soft fade-out and remove
                setTimeout(() => {
                    toast.style.opacity = '0';
                    toast.style.transform = 'translateY(15px)';
                    setTimeout(() => toast.remove(), 400);
                }, 2500);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }

    // Logo Scroll to Top
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Category B Project Cards Clickable
    const catBContainer = document.querySelectorAll('.projects-category')[1];
    if (catBContainer) {
        const catBCards = catBContainer.querySelectorAll('.project-card');
        catBCards.forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', (e) => {
                // Ignore if clicked directly on an anchor tag to prevent double firing
                if (!e.target.closest('a')) {
                    const githubLink = card.querySelector('.github-link');
                    if (githubLink && githubLink.href) {
                        window.open(githubLink.href, '_blank', 'noopener,noreferrer');
                    }
                }
            });
        });
    }
});
