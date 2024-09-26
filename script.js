document.addEventListener("DOMContentLoaded", function() {

// Obtener elementos del DOM
const modal = document.getElementById("modal-suscripcion");
const closeBtn = document.querySelector(".close-btn");
const subscribeBtn = document.getElementById("subscribe-btn-main");
const subscribeBtnHeader = document.getElementById("subscribe-btn-header");
const form = document.getElementById("subscription-form");
const submitBtn = document.querySelector(".submit-btn");
const confirmationMessage = document.getElementById("confirmation-message");
// Toggle between light and dark theme
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const betaForm = document.getElementById("beta-form");
const betaDisponible = false; // Cambia a true si la beta está disponible
const launchDateEl = document.getElementById("launch-global-date");
// Variable para alternar los textos
let isFirstText = true;

// Función para cambiar el texto repetitivamente
const changeText = () => {
    if (isFirstText) {
        launchDateEl.innerHTML = "Animal AI SE LANZA ESTE 12 DE OCTUBRE."; // Primer texto
    } else {
        launchDateEl.innerHTML = "LANZAMIENTO GLOBAL: 12/10/2024"; // Segundo texto
    }
    isFirstText = !isFirstText; // Alterna el estado
};

// Lista de países donde Animal AI BETA está disponible
const availableCountries = ["United States", "Canada", "Spain", "Brazil"];

// Simulación de un mapa interactivo usando el SVG del mapa del mundo
document.querySelectorAll('.country').forEach(country => {
    const countryName = country.getAttribute('data-name'); // Suponiendo que los países tienen un data-name con el nombre

    // Colorear en verde los países disponibles
    if (availableCountries.includes(countryName)) {
        country.classList.add('available');
    }

    // Añadir un tooltip para los países
    country.addEventListener('mouseover', () => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.innerHTML = countryName;
        document.body.appendChild(tooltip);
        
        country.addEventListener('mousemove', (e) => {
            tooltip.style.left = e.pageX + 'px';
            tooltip.style.top = e.pageY + 'px';
        });
        
        country.addEventListener('mouseleave', () => {
            document.body.removeChild(tooltip);
        });
    });



const links = document.querySelectorAll('.novedad-link');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const id = link.getAttribute('data-id');
        mostrarDetalles(id);
    });
});
});

    // Función para mostrar que la beta no está disponible
    const mostrarNoDisponible = () => {
        subscribeBtnHeader.innerHTML = "Animal AI no está disponible en este momento."; // Mensaje de no acceso
        setTimeout(() => {
        subscribeBtnHeader.classList.add("shrink-button"); // Animación de encogimiento
        }, 1700);
        setTimeout(() => {
            subscribeBtnHeader.style.visibility = "hidden"; // Ocultar el botón después de 2 segundos
        }, 2000);

        // Iniciar la alternancia del texto cada 5 segundos
setInterval(changeText, 5000);

// Restaurar el botón después de unos segundos
setTimeout(() => {
    subscribeBtnHeader.style.visibility = "visible"; // Mostrar de nuevo el botón
    subscribeBtnHeader.innerHTML = "Prueba su beta ahora"; // Restaurar texto original
    subscribeBtnHeader.classList.remove("shrink-button"); // Quitar la clase de encogimiento
    launchDateEl.style.display = "block"; // Mostrar la fecha de lanzamiento
    changeText(); // Iniciar con el primer texto al restaurar
}, 5000);
        setTimeout(() => {
        launchDateEl.style.display = "block"; // Ocultar la fecha de lanzamiento
        launchDateEl.innerHTML = "LANZAMIENTO GLOBAL: 12/10/2024"; // Eliminar el texto de la fecha de lanzamiento
        }, 5000);
    };

    // Mostrar formulario al hacer clic en el botón
    subscribeBtnHeader.addEventListener("click", () => {
        if (betaDisponible) {
            subscribeBtnHeader.style.display = "none"; // Ocultar el botón de suscripción
            betaForm.style.display = "block"; // Mostrar el formulario de la beta
        } else {
            // Si la beta no está disponible, mostrar el mensaje y hacer la animación
            mostrarNoDisponible();
        }
    });



// Mostrar el modal cuando se presiona "Suscríbete Ahora"
subscribeBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Cerrar modal al hacer clic en la X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera de la ventana modal
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Animación en el botón "Confirmar Suscripción"
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevenir envío de formulario por defecto
    
    // Desaparecer el texto del botón
    submitBtn.innerHTML = ''; // Eliminar el texto del botón

    // Crear el icono del cohete y agregarlo al botón
    const rocketIcon = document.createElement('span');
    rocketIcon.innerHTML = '🚀';
    rocketIcon.classList.add('rocket');
    submitBtn.appendChild(rocketIcon);
    
    // Animación del cohete despegando
    setTimeout(() => {
        rocketIcon.style.animation = 'rocketLaunch 1.2s forwards';
    }, 100);
    
    // Transformar el botón en un círculo con la marca de verificación
    setTimeout(() => {
        submitBtn.classList.add('success');
        // Mostrar mensaje de confirmación después de la animación
        setTimeout(() => {
            confirmationMessage.style.display = "block";
            modal.style.display = "none";
        }, 1500);
    }, 1500);
});

 
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.style.backgroundColor = '#333';
        body.style.color = '#fff';
    } else {
        body.style.backgroundColor = '#f4f4f4';
        body.style.color = '#333';
    }
});

// Change language
const languageSelect = document.getElementById('language-select');

const translations = {
    en: {
        welcomeTitle: "Welcome to Animal AI",
        welcomeText: "Explore the intelligence of animals with our advanced technology",
        subscribeBtnHeader: "Subscribe",
        novedadesTitle: "Latest News",
        chatbotTitle: "New Interactive Chatbot",
        chatbotText: "We have launched a new chatbot specialized in animal intelligence. Try it now!",
        premiumTitle: "Premium Update",
        premiumText: "Get exclusive access to new features with the premium subscription. Enjoy additional benefits!",
        personalizacionTitle: "Personalization",
        temaTitle: "Dark/Light Theme",
        idiomaTitle: "Language",
        suscripcionTitle: "Premium Subscription",
        suscripcionText: "Get exclusive access to new functions and content on animal intelligence.",
        subscribeBtnMain: "Subscribe Now",
        footerText: "&copy; 2024 Animal AI. All rights reserved."
    },
    fr: {
        welcomeTitle: "Bienvenue à Animal AI",
        welcomeText: "Explorez l'intelligence des animaux avec notre technologie avancée",
        subscribeBtnHeader: "S'abonner",
        novedadesTitle: "Dernières Nouvelles",
        chatbotTitle: "Nouveau Chatbot Interactif",
        chatbotText: "Nous avons lancé un nouveau chatbot spécialisé dans l'intelligence animale. Essayez-le maintenant !",
        premiumTitle: "Mise à jour Premium",
        premiumText: "Accédez à des fonctionnalités exclusives avec l'abonnement premium. Profitez d'avantages supplémentaires !",
        personalizacionTitle: "Personnalisation",
        temaTitle: "Thème Sombre/Clair",
        idiomaTitle: "Langue",
        suscripcionTitle: "Abonnement Premium",
        suscripcionText: "Accédez à des fonctionnalités et à du contenu exclusifs sur l'intelligence animale.",
        subscribeBtnMain: "S'abonner Maintenant",
        footerText: "&copy; 2024 Animal AI. Tous droits réservés."
    },
    ru: {
        welcomeTitle: "Добро пожаловать в Animal AI",
        welcomeText: "Исследуйте интеллект животных с помощью наших передовых технологий",
        subscribeBtnHeader: "Подписаться",
        novedadesTitle: "Последние новости",
        chatbotTitle: "Новый Интерактивный Чатбот",
        chatbotText: "Мы запустили новый чатбот, специализирующийся на интеллекте животных. Попробуйте его сейчас!",
        premiumTitle: "Премиум обновление",
        premiumText: "Получите эксклюзивный доступ к новым функциям с подпиской премиум. Наслаждайтесь дополнительными преимуществами!",
        personalizacionTitle: "Персонализация",
        temaTitle: "Тема Тёмная/Светлая",
        idiomaTitle: "Язык",
        suscripcionTitle: "Премиум Подписка",
        suscripcionText: "Получите эксклюзивный доступ к новым функциям и контенту о интеллекте животных.",
        subscribeBtnMain: "Подписаться Сейчас",
        footerText: "&copy; 2024 Animal AI. Все права защищены."
    },
    ja: {
        welcomeTitle: "アニマルAIへようこそ",
        welcomeText: "私たちの高度な技術で動物の知性を探求しましょう",
        subscribeBtnHeader: "購読する",
        novedadesTitle: "最新ニュース",
        chatbotTitle: "新しいインタラクティブチャットボット",
        chatbotText: "動物の知性に特化した新しいチャットボットをリリースしました。今すぐ試してください！",
        premiumTitle: "プレミアムアップデート",
        premiumText: "プレミアムサブスクリプションで新機能に独占的にアクセスしましょう。追加の特典をお楽しみください！",
        personalizacionTitle: "パーソナライズ",
        temaTitle: "ダーク/ライトテーマ",
        idiomaTitle: "言語",
        suscripcionTitle: "プレミアムサブスクリプション",
        suscripcionText: "動物の知性に関する新機能やコンテンツに独占的にアクセスできます。",
        subscribeBtnMain: "今すぐ購読",
        footerText: "&copy; 2024 アニマルAI. 全著作権所有."
    },
    zh: {
        welcomeTitle: "欢迎来到 Animal AI",
        welcomeText: "通过我们的先进技术探索动物的智慧",
        subscribeBtnHeader: "订阅",
        novedadesTitle: "最新消息",
        chatbotTitle: "新的互动聊天机器人",
        chatbotText: "我们推出了一款专注于动物智能的新聊天机器人。立即试用！",
        premiumTitle: "高级更新",
        premiumText: "通过高级订阅获得独家功能访问权限。享受更多优惠！",
        personalizacionTitle: "个性化",
        temaTitle: "深色/浅色主题",
        idiomaTitle: "语言",
        suscripcionTitle: "高级订阅",
        suscripcionText: "获得独家功能和关于动物智能的内容的访问权限。",
        subscribeBtnMain: "立即订阅",
        footerText: "&copy; 2024 Animal AI. 保留所有权利."
    },
    ko: {
        welcomeTitle: "애니멀 AI에 오신 것을 환영합니다",
        welcomeText: "우리의 고급 기술을 통해 동물의 지능을 탐구하십시오",
        subscribeBtnHeader: "구독하기",
        novedadesTitle: "최신 소식",
        chatbotTitle: "새로운 대화형 챗봇",
        chatbotText: "동물 지능에 특화된 새로운 챗봇을 출시했습니다. 지금 시도해보세요!",
        premiumTitle: "프리미엄 업데이트",
        premiumText: "프리미엄 구독으로 새로운 기능에 독점적으로 액세스하세요. 추가 혜택을 누리세요!",
        personalizacionTitle: "개인화",
        temaTitle: "어두운/밝은 테마",
        idiomaTitle: "언어",
        suscripcionTitle: "프리미엄 구독",
        suscripcionText: "동물 지능에 대한 새로운 기능 및 콘텐츠에 독점적으로 액세스하세요.",
        subscribeBtnMain: "지금 구독하기",
        footerText: "&copy; 2024 애니멀 AI. 판권 소유."
    },
    pt: {
        welcomeTitle: "Bem-vindo ao Animal AI",
        welcomeText: "Explore a inteligência dos animais com a nossa tecnologia avançada",
        subscribeBtnHeader: "Assinar",
        novedadesTitle: "Últimas Novidades",
        chatbotTitle: "Novo Chatbot Interativo",
        chatbotText: "Lançamos um novo chatbot especializado em inteligência animal. Experimente agora!",
        premiumTitle: "Atualização Premium",
        premiumText: "Obtenha acesso exclusivo a novos recursos com a assinatura premium. Aproveite benefícios adicionais!",
        personalizacionTitle: "Personalização",
        temaTitle: "Tema Escuro/Claro",
        idiomaTitle: "Idioma",
        suscripcionTitle: "Assinatura Premium",
        suscripcionText: "Obtenha acesso exclusivo a novas funções e conteúdos sobre inteligência animal.",
        subscribeBtnMain: "Assine Agora",
        footerText: "&copy; 2024 Animal AI. Todos os direitos reservados."
    },
    vi: {
        welcomeTitle: "Chào mừng đến với Animal AI",
        welcomeText: "Khám phá trí thông minh của động vật với công nghệ tiên tiến của chúng tôi",
        subscribeBtnHeader: "Đăng ký",
        novedadesTitle: "Tin Tức Mới Nhất",
        chatbotTitle: "Chatbot Tương Tác Mới",
        chatbotText: "Chúng tôi đã ra mắt chatbot mới chuyên về trí thông minh của động vật. Hãy thử ngay bây giờ!",
        premiumTitle: "Cập Nhật Premium",
        premiumText: "Nhận quyền truy cập độc quyền vào các tính năng mới với gói đăng ký Premium. Tận hưởng nhiều lợi ích hơn!",
        personalizacionTitle: "Tùy Chỉnh",
        temaTitle: "Chủ Đề Tối/Sáng",
        idiomaTitle: "Ngôn Ngữ",
        suscripcionTitle: "Đăng Ký Premium",
        suscripcionText: "Nhận quyền truy cập độc quyền vào các tính năng và nội dung về trí thông minh động vật.",
        subscribeBtnMain: "Đăng Ký Ngay",
        footerText: "&copy; 2024 Animal AI. Mọi quyền được bảo lưu."
    },
    es: {
        welcomeTitle: "Bienvenido a Animal AI",
        welcomeText: "Explora la inteligencia de los animales con nuestra tecnología avanzada",
        subscribeBtnHeader: "Suscribirse",
        novedadesTitle: "Últimas Novedades",
        chatbotTitle: "Nuevo Chatbot Interactivo",
        chatbotText: "Hemos lanzado un nuevo chatbot especializado en la inteligencia animal. ¡Pruébalo ahora!",
        premiumTitle: "Actualización Premium",
        premiumText: "Obtén acceso exclusivo a nuevas funciones con la suscripción premium. ¡Disfruta de beneficios adicionales!",
        personalizacionTitle: "Personalización",
        temaTitle: "Tema Oscuro/Claro",
        idiomaTitle: "Idioma",
        suscripcionTitle: "Suscripción Premium",
        suscripcionText: "Obtén acceso exclusivo a nuevas funciones y contenido sobre inteligencia animal.",
        subscribeBtnMain: "Suscríbete Ahora",
        footerText: "&copy; 2024 Animal AI. Todos los derechos reservados."
    }
};

languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    const translation = translations[selectedLanguage];

    document.getElementById('welcome-title').textContent = translation.welcomeTitle;
    document.getElementById('welcome-text').textContent = translation.welcomeText;
    document.getElementById('subscribe-btn-header').textContent = translation.subscribeBtnHeader;
    document.getElementById('novedades-title').textContent = translation.novedadesTitle;
    document.getElementById('chatbot-title').textContent = translation.chatbotTitle;
    document.getElementById('chatbot-text').textContent = translation.chatbotText;
    document.getElementById('premium-title').textContent = translation.premiumTitle;
    document.getElementById('premium-text').textContent = translation.premiumText;
    document.getElementById('personalizacion-title').textContent = translation.personalizacionTitle;
    document.getElementById('tema-title').textContent = translation.temaTitle;
    document.getElementById('idioma-title').textContent = translation.idiomaTitle;
    document.getElementById('suscripcion-title').textContent = translation.suscripcionTitle;
    document.getElementById('suscripcion-text').textContent = translation.suscripcionText;
    document.getElementById('subscribe-btn-main').textContent = translation.subscribeBtnMain;
    document.getElementById('footer-text').innerHTML = translation.footerText;
});



// Manejo del envío del formulario
betaForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evitar el envío por defecto

    if (betaDisponible) {
        // Si la beta está disponible, permitir acceso al formulario normal
        suscribeBtnHeader.innerHTML = ""; // Limpiar el texto del botón
        suscribeBtnHeader.classList.add("shrink-button"); // Animación de encogimiento

        setTimeout(() => {
            const checkIcon = document.createElement("span");
            checkIcon.classList.add("checkmark-icon");
            checkIcon.innerHTML = "✅"; // Icono de check
            suscribeBtnHeader.appendChild(checkIcon);
        }, 1000);

        // Continuar con la animación del formulario y redirigir
        setTimeout(() => {
            betaForm.classList.add("form-cut-animate");
            setTimeout(() => {
                window.location.href = "https://url-de-la-app-en-beta.com"; // Reemplazar con la URL de la beta
            }, 800);
        }, 3000);
    } else {
        // Si la beta no está disponible, mostrar el mensaje y hacer la animación
        mostrarNoDisponible();
    }
});


function mostrarDetalles(id) {
const detalles = {
    mejora: "Detalles sobre la mejora de visualización y experiencia del usuario: Se han realizado ajustes en la interfaz para optimizar la navegación.",
    funciones: "Detalles sobre nuevas funciones en el sistema de comandos: Se han agregado opciones de personalización y control para los comandos.",
    seguridad: "Detalles sobre mejoras en la seguridad del sistema: Nuevos protocolos y medidas de seguridad implementadas para proteger los datos.",
    actualizacion: "Detalles sobre la actualización de la base de datos: Se ha mejorado la velocidad de respuesta y la eficiencia en el manejo de datos.",
    documentacion: "Detalles sobre la mejora de la documentación: Se han incluido ejemplos más claros y explicativos.",
    cambio: "Detalles sobre el cambio de la lista de comandos: Ahora se manejará automáticamente y podrás cambiar de página con botones."
};

alert(detalles[id]); // Muestra los detalles en una alerta (puedes personalizar esto)
}
});