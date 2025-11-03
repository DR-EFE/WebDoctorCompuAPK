

      tailwind.config = {
        theme: {
          extend: {
            colors: {
              "primary": "#4A90E2",
              "secondary": "#50E3C2",
              "background-light": "#F8F9FA",
              "background-dark": "#101022",
              "text-headings": "#333333",
              "text-body": "#555555",
            },
            fontFamily: {
              "display": ["Manrope", "sans-serif"],
            },
            borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
          },
        },
      }

        document.addEventListener('DOMContentLoaded', () => {
            // --- Translation Logic ---
            const translations = {
                'en': {
                    'title': 'Virtual Medic - Your PC Running Like New',
                    'navLogo': 'Virtual Medic',
                    'navBeneficios': 'Benefits',
                    'navComoFunciona': 'How It Works',
                    'navResultados': 'Results',
                    'navDescargar': 'Download Free',
                    'heroTitle': 'Your PC Running<br><span class="text-primary">Like New</span>',
                    'heroSubtitle': 'Solve any computer problem in minutes, without being a tech expert.',
                    'heroBtnDownload': '<span class="material-symbols-outlined align-middle mr-2">download</span>Download Now',
                    'heroBtnDemo': 'Watch Demo',
                    'diagTitle': 'Diagnosis in Progress...',
                    'diagAnalyzing': 'Analyzing your PC',
                    'diagDetecting': 'Detecting problems...',
                    'diagRam': 'RAM checked',
                    'diagDisk': 'Disk checked',
                    'diagNetwork': 'Analyzing network',
                    'diagOs': 'Operating system',
                    'stepsTitle': 'Fix Your PC in <span class="text-primary">3 Simple Steps</span>',
                    'stepsSubtitle': 'No tech skills needed. Just answer simple questions and get instant solutions.',
                    'step1Title': 'Describe the Problem',
                    'step1Desc': "Choose from 10 common issues. PC won't turn on? Running slow? We have the fix.",
                    'step2Title': 'Answer Questions',
                    'step2Desc': 'Simple questions in plain language. No jargon, no complications.',
                    'step3Title': 'Get Your Plan',
                    'step3Desc': 'A step-by-step list with clear instructions and video guides to fix everything.',
                    'featuresTitle': 'Everything You Can <span class="text-primary">Solve</span>',
                    'featuresSubtitle': 'The most common PC problems, all in one app',
                    'feature1': "Won't turn on",
                    'feature2': 'Runs very slow',
                    'feature3': 'Blue screen',
                    'feature4': 'No internet',
                    'feature5': 'Overheating',
                    'feature6': 'Freezing',
                    'feature7': 'Strange noises',
                    'feature8': "Apps won't open",
                    'feature9': 'Black screen',
                    'feature10': 'Random shutdowns',
                    'resultsTitle': 'Results You <span class="text-primary">Can See</span>',
                    'resultsSubtitle': 'It\'s not just numbers; it\'s your progress towards a faster, more stable PC.',
                    'chartTitle': 'Problems Solved by Severity',
                    'chartLabels': ['Severe', 'Medium', 'Minor'],
                    'chartTooltip': '<strong class="text-text-headings mr-1">This means:</strong> Most problems can be solved without professional technical help.',
                    'resultsSevereTitle': 'Severe Problems',
                    'resultsSevereDesc': "PC won\'t boot or display video. Requires immediate attention.",
                    'resultsSevereCases': '1 out of 5 cases',
                    'resultsMediumTitle': 'Medium Problems',
                    'resultsMediumDesc': 'Slowness, blue screens, freezing. Solved in minutes.',
                    'resultsMediumCases': '3 out of 5 cases',
                    'resultsLightTitle': 'Minor Problems',
                    'resultsLightDesc': 'Simple settings you can fix yourself in seconds.',
                    'resultsLightCases': '1 out of 5 cases',
                    'ctaTitle': 'Ready to Fix Your PC?',
                    'ctaSubtitle': 'Download Virtual Medic for free and solve any problem in minutes. No hassle, no hidden costs.',
                    'ctaButton': '<span class="material-symbols-outlined align-middle mr-2">smartphone</span> Download for Android',
                    'ctaTag1': '100% Free',
                    'ctaTag2': 'No Ads',
                    'ctaTag3': 'Works Offline',
                    'footerLogo': 'Virtual Medic',
                    'footerSubtitle': 'Your PC running like new, always',
                    'footerRights': '&copy; 2025 Virtual Medic. All rights reserved.',
                },
                'es': {
                    'title': 'Médico Virtual - Tu PC Funcionando Como Nuevo',
                    'navLogo': 'Médico Virtual',
                    'navBeneficios': 'Beneficios',
                    'navComoFunciona': 'Cómo Funciona',
                    'navResultados': 'Resultados',
                    'navDescargar': 'Descargar Gratis',
                    'heroTitle': 'Tu PC Funcionando<br><span class="text-primary">Como Nuevo</span>',
                    'heroSubtitle': 'Resuelve cualquier problema de tu computadora en minutos, sin ser experto en tecnología',
                    'heroBtnDownload': '<span class="material-symbols-outlined align-middle mr-2">download</span>Descargar Ahora',
                    'heroBtnDemo': 'Ver Demo',
                    'diagTitle': 'Diagnóstico en Progreso...',
                    'diagAnalyzing': 'Analizando tu PC',
                    'diagDetecting': 'Detectando problemas...',
                    'diagRam': 'RAM verificada',
                    'diagDisk': 'Disco revisado',
                    'diagNetwork': 'Red en análisis',
                    'diagOs': 'Sistema operativo',
                    'stepsTitle': 'Arregla Tu PC en <span class="text-primary">3 Pasos Simples</span>',
                    'stepsSubtitle': 'No necesitas ser técnico. Solo responde preguntas simples y obtén soluciones instantáneas',
                    'step1Title': 'Describe el Problema',
                    'step1Desc': 'Elige entre 10 situaciones comunes. ¿Tu PC no enciende? ¿Va lenta? Tenemos la solución',
                    'step2Title': 'Responde Preguntas',
                    'step2Desc': 'Preguntas simples en lenguaje cotidiano. Sin tecnicismos, sin complicaciones',
                    'step3Title': 'Recibe Tu Plan',
                    'step3Desc': 'Lista paso a paso con instrucciones claras y videos explicativos para solucionar todo',
                    'featuresTitle': 'Todo lo que Puedes <span class="text-primary">Resolver</span>',
                    'featuresSubtitle': 'Los problemas más comunes de PC, todos en una app',
                    'feature1': 'No enciende',
                    'feature2': 'Va muy lenta',
                    'feature3': 'Pantalla azul',
                    'feature4': 'Sin internet',
                    'feature5': 'Sobrecalentamiento',
                    'feature6': 'Se congela',
                    'feature7': 'Ruidos extraños',
                    'feature8': 'Apps no abren',
                    'feature9': 'Pantalla negra',
                    'feature10': 'Apagados aleatorios',
                    'resultsTitle': 'Resultados que <span class="text-primary">Puedes Ver</span>',
                    'resultsSubtitle': 'No solo son números, es tu progreso hacia una PC más rápida y estable',
                    'chartTitle': 'Problemas Resueltos por Gravedad',
                    'chartLabels': ['Problemas Graves', 'Problemas Medios', 'Problemas Leves'],
                    'chartTooltip': '<strong class="text-text-headings mr-1">Esto significa:</strong> La mayoría de los problemas se pueden resolver sin ayuda técnica profesional.',
                    'resultsSevereTitle': 'Problemas Graves',
                    'resultsSevereDesc': 'PC no enciende o no da video. Requieren atención inmediata',
                    'resultsSevereCases': '1 de cada 5 casos',
                    'resultsMediumTitle': 'Problemas Medios',
                    'resultsMediumDesc': 'Lentitud, pantallas azules, congelamientos. Solución en minutos',
                    'resultsMediumCases': '3 de cada 5 casos',
                    'resultsLightTitle': 'Problemas Leves',
                    'resultsLightDesc': 'Configuraciones simples que arreglas tú mismo en segundos',
                    'resultsLightCases': '1 de cada 5 casos',
                    'ctaTitle': '¿Listo para Arreglar Tu PC?',
                    'ctaSubtitle': 'Descarga Médico Virtual gratis y resuelve cualquier problema en minutos. Sin complicaciones, sin costos ocultos',
                    'ctaButton': '<span class="material-symbols-outlined align-middle mr-2">smartphone</span> Descargar para Android',
                    'ctaTag1': '100% Gratis',
                    'ctaTag2': 'Sin Anuncios',
                    'ctaTag3': 'Funciona Sin Internet',
                    'footerLogo': 'Médico Virtual',
                    'footerSubtitle': 'Tu PC funcionando como nuevo, siempre',
                    'footerRights': '&copy; 2025 Médico Virtual. Todos los derechos reservados.',
                }
            };

            const btnEN = document.getElementById('lang-en');
            const btnES = document.getElementById('lang-es');
            let resultsChart;

            function setLanguage(lang) {
                localStorage.setItem('language', lang);
                document.documentElement.lang = lang;

                if (lang === 'en') {
                    btnEN.classList.remove('opacity-60', 'text-text-body');
                    btnEN.classList.add('opacity-100', 'text-primary');
                    btnES.classList.remove('opacity-100', 'text-primary');
                    btnES.classList.add('opacity-60', 'text-text-body');
                } else {
                    btnES.classList.remove('opacity-60', 'text-text-body');
                    btnES.classList.add('opacity-100', 'text-primary');
                    btnEN.classList.remove('opacity-100', 'text-primary');
                    btnEN.classList.add('opacity-60', 'text-text-body');
                }

                document.querySelectorAll('[data-key]').forEach(element => {
                    const key = element.getAttribute('data-key');
                    if (translations[lang] && translations[lang][key]) {
                        element.innerHTML = translations[lang][key];
                    }
                });

                if (resultsChart && translations[lang]['chartLabels']) {
                    resultsChart.data.labels = translations[lang]['chartLabels'];
                    resultsChart.update();
                }
            }

            btnEN.addEventListener('click', () => setLanguage('en'));
            btnES.addEventListener('click', () => setLanguage('es'));

            // --- Intersection Observer for fade-in animations ---
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });

            // --- Chart ---
            const ctx = document.getElementById('resultsChart');
            if (ctx) {
                resultsChart = new Chart(ctx.getContext('2d'), {
                    type: 'doughnut',
                    data: {
                        labels: [], 
                        datasets: [{
                            data: [1, 3, 1],
                            backgroundColor: ['#dc3545', '#ffc107', '#28a745'],
                            borderColor: ['#fff', '#fff', '#fff'],
                            borderWidth: 2
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: {
                                    padding: 15,
                                    font: { 
                                        size: 13,
                                        family: 'Manrope'
                                    }
                                }
                            }
                        }
                    }
                });
            }

            // --- Smooth scroll ---
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });

            // --- Set Initial Language ---
            const savedLang = localStorage.getItem('language') || 'en';
            setLanguage(savedLang);
        });

