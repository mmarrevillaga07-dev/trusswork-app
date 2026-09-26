// =========================================================================
// 🌐 GLOBAL STATE REGISTRY & CORE CONFIGURATION
// =========================================================================
const PASSCODE_KEY = "TrussworkAuthorizedToken";
const LICENSED_TIER_KEY = "TrussworkLicensedTier";
const CUSTOM_PASSCODES_PREFIX = "TrussworkCustomPass_";
const CUSTOM_TIMEOUT_KEY = "TrussworkCustomTimeoutMinutes";

const DEFAULT_TIERS = {
    "TrussworkCore2026": "CORE",
    "TrussworkScale2026": "SCALE",
    "TrussworkEnterprise2026": "ENTERPRISE"
};

const i18n = {
    en: { brand: "Trusswork™", kanban: "Kanban", grid: "Grid", mode: "Mode", export: "Export", signin: "Sign In", directive: "CORPORATE DIRECTIVE", department: "DEPARTMENT TRACK", deadline: "TARGET DEADLINE", commitTask: "Commit Task", pendingExecution: "PENDING EXECUTION", activeProcessing: "ACTIVE PROCESSING", completedLogs: "COMPLETED LOGS", mTotal: "Total Tasks", mPending: "Pending", mActive: "Active", mCompleted: "Completed", mOverdue: "Overdue", mNetwork: "Network Status",lockApp: "Lock Terminal" },
    zh: { brand: "Trusswork™", kanban: "看板", grid: "网格", mode: "模式", export: "导出", signin: "登录", directive: "公司指令", department: "部门追踪", deadline: "目标截止日期", commitTask: "提交任务", pendingExecution: "待执行", activeProcessing: "进行中", completedLogs: "已完成日志", mTotal: "总任务", mPending: "待处理", mActive: "进行中", mCompleted: "已完成", mOverdue: "逾期", mNetwork: "网络状态", lockApp: "锁定终端" },
    hi: { brand: "Trusswork™", kanban: "कानबान", grid: "ग्रिड", mode: "मोड", export: "निर्यात", signin: "साइन इन", directive: "कॉर्पोरेट निर्देश", department: "विभाग ट्रैक", deadline: "अंतिम समय सीमा", commitTask: "कार्य सौंपें", pendingExecution: "لंबित निष्पादन", activeProcessing: "सक्रिय प्रसंस्करण", completedLogs: "पूर्ण लॉग", mTotal: "कुल कार्य", mPending: "لंबित", mActive: "सक्रिय", mCompleted: "पूर्ण", mOverdue: "विलंबित", mNetwork: "नेटवर्क स्थिति", lockApp: "टर्मिनल लॉक करें" },
    es: { brand: "Trusswork™", kanban: "Kanban", grid: "Cuadrícula", mode: "Modo", export: "Exportar", signin: "Ingresar", directive: "DIRECTIVA CORPORATIVA", department: "SEGUIMIENTO", deadline: "FECHA LÍMITE", commitTask: "Asignar Tarea", pendingExecution: "EJECUCIÓN PENDIENTE", activeProcessing: "PROCESAMIENTO ACTIVO", completedLogs: "REGISTROS COMPLETADOS", mTotal: "Tareas Totales", mPending: "Pendientes", mActive: "Activas", mCompleted: "Completadas", mOverdue: "Vencidas", mNetwork: "Estado de Red", lockApp: "Bloquear Terminal" },
    fr: { brand: "Trusswork™", kanban: "Kanban", grid: "Grille", mode: "Mode", export: "Exporter", signin: "Se connecter", directive: "DIRECTIVE D'ENTREPRISE", department: "SUIVI", deadline: "DATE LIMITE", commitTask: "Valider", pendingExecution: "EXÉCUTION EN ATTENTE", activeProcessing: "TRAITEMENT ACTIF", completedLogs: "JOURNAUX TERMINÉS", mTotal: "Total", mPending: "En attente", mActive: "Actives", mCompleted: "Terminées", mOverdue: "En retard", mNetwork: "État du réseau", lockApp: "Verrouiller le terminal" },
    ar: { brand: "Trusswork™", kanban: "كانبان", grid: "شبكة", mode: "وضع", export: "تصدير", signin: "تسجيل الدخول", directive: "التوجيه المؤسسي", department: "مسار القسم", deadline: "الموعد النهائي", commitTask: "تنفيذ المهمة", pendingExecution: "في انتظار التنفيذ", activeProcessing: "المعالجة النشطة", completedLogs: "السجلات المكتملة", mTotal: "إجمالي المهام", mPending: "معلق", mActive: "نشط", mCompleted: "مكتمل", mOverdue: "متأخر", mNetwork: "حالة الشبكة", lockApp: "قفل النهاية" },
    bn: { brand: "Trusswork™", kanban: "কানবান", grid: "গ্রিড", mode: "মোড", export: "রপ্তানি", signin: "সাইন ইন", directive: "কর্পোরেট নির্দেশিকা", department: "বিভাগ ট্র্যাক", deadline: "টার্গেট ডেডলাইন", commitTask: "টাস্ক সাবমিট", pendingExecution: "অপেক্ষমান সম্পাদন", activeProcessing: "সক্রিয় প্রক্রিয়াকরণ", completedLogs: "সম্পন্ন লগ", mTotal: "মোট টাস্ক", mPending: "অপেক্ষমান", mActive: "সক্রিয়", mCompleted: "সম্পন্ন", mOverdue: "অতীত ডেডলাইন", mNetwork: "নেটওয়ার্ক স্ট্যাটাস", lockApp: "টার্মিনাল লক করুন" },
    pt: { brand: "Trusswork™", kanban: "Kanban", grid: "Grade", mode: "Modo", export: "Exportar", signin: "Entrar", directive: "DIRETRIZ CORPORATIVA", department: "ACOMPANHAMENTO", deadline: "PRAZO LIMITE", commitTask: "Confirmar", pendingExecution: "EXECUÇÃO PENDENTE", activeProcessing: "PROCESSAMENTO ATIVO", completedLogs: "REGISTROS CONCLUÍDOS", mTotal: "Total", mPending: "Pendentes", mActive: "Ativas", mCompleted: "Concluídas", mOverdue: "Atrasadas", mNetwork: "Status da Rede", lockApp: "Bloquear Terminal" },
    ru: { brand: "Trusswork™", kanban: "Канбан", grid: "Сетка", mode: "Режим", export: "Экспорт", signin: "Войти", directive: "КОРПОРАТИВНАЯ ДИРЕКТИВА", department: "ОТДЕЛ", deadline: "СРОК ВЫПОЛНЕНИЯ", commitTask: "Создать задачу", pendingExecution: "ОЖИДАЕТ ВЫПОЛНЕНИЯ", activeProcessing: "В РАБОТЕ", completedLogs: "ЗАВЕРШЕННЫЕ", mTotal: "Всего задач", mPending: "В ожидании", mActive: "В работе", mCompleted: "Завершено", mOverdue: "Просрочено", mNetwork: "Статус сети", lockApp: "Заблокировать терминал" },
    ur: { brand: "Trusswork™", kanban: "کانبان", grid: "گرڈ", mode: "موڈ", export: "ایکسپورٹ", signin: "سائن ان", directive: "کارپوریٹ ہدایت", department: "شعبہ ٹریک", deadline: "آخری تاریخ", commitTask: "ٹاسک جمع کریں", pendingExecution: "التواء عملدرآمد", activeProcessing: "فعال پروسیسنگ", completedLogs: "مکمل لاگز", mTotal: "کل ٹاسکس", mPending: "التواء", mActive: "فعال", mCompleted: "مکمل", mOverdue: "تاخیر شدہ", mNetwork: "نیٹ ورک کی صورتحال", lockApp: "ٹرمینل کو لاک کریں" }
};

let currentLang = 'en';
let db;
let inactivityTimeout;
window.archivedTasks = [];

const editIcon = `<svg xmlns="http://w3.org" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`;
const saveIcon = `<svg xmlns="http://w3.org" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>`;
// =========================================================================
// 📦 PERSISTENT STORAGE ENGINE (INDEXEDDB)
// =========================================================================
const request = indexedDB.open("TrussworkDB", 1);
request.onupgradeneeded = (e) => {
    db = e.target.result;
    if (!db.objectStoreNames.contains("tasks")) {
        db.createObjectStore("tasks", { keyPath: "id" }); 
    }
};
request.onsuccess = (e) => { 
    db = e.target.result; 
    const checkTransaction = db.transaction("tasks", "readonly");
    const countRequest = checkTransaction.objectStore("tasks").count();
    
    countRequest.onsuccess = () => {
        if (countRequest.result === 0) {
            bootstrapMockTasks();
        } else {
            loadTasks();
        }
    };
};

function bootstrapMockTasks() {
    const mockData = [
        { id: Date.now(), directive: "System Operational Sync", department: "Operations", status: "pending", createdTimestamp: Date.now(), deadline: new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString().slice(0, 16) },
        { id: Date.now() + 1, directive: "Security Architecture Audit", department: "Security", status: "active", createdTimestamp: Date.now(), deadline: new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString().slice(0, 16) },
        { id: Date.now() + 2, directive: "Database Cluster Maintenance", department: "Engineering", status: "completed", createdTimestamp: Date.now(), deadline: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().slice(0, 16) }
    ];

    const transaction = db.transaction(["tasks"], "readwrite");
    const store = transaction.objectStore("tasks");
    mockData.forEach(task => store.add(task));
    transaction.oncomplete = () => { loadTasks(); };
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then((reg) => {
            reg.onupdatefound = () => {
                const installingWorker = reg.installing;
                if (installingWorker == null) return;
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                        console.log('New updates detected! Refreshing logic framework.');
                    }
                };
            };
        }).catch(err => console.log('SW Registration Failed', err));
    });

    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) { refreshing = true; window.location.reload(); }
    });
}
// =========================================================================
// 🔒 LOCK ENGINE, SECURE AUTHENTICATION & LICENSE TIERS
// =========================================================================
function checkInitialLockState() {
    if (localStorage.getItem(PASSCODE_KEY) === "true") {
        unlockTerminal(localStorage.getItem(LICENSED_TIER_KEY));
    }
}

function getActiveTierFromPasscode(passcode) {
    for (const [defaultPass, tier] of Object.entries(DEFAULT_TIERS)) {
        const storedOverride = localStorage.getItem(CUSTOM_PASSCODES_PREFIX + tier);
        if (storedOverride && storedOverride === passcode) return tier;
        if (!storedOverride && defaultPass === passcode) return tier;
    }
    return null;
}

function validatePasscode() {
    const inputField = document.getElementById('gatekeeperPasscode');
    const errorMsg = document.getElementById('loginError');
    if (!inputField) return;
    
    const enteredPass = inputField.value.trim();
    const verifiedTier = getActiveTierFromPasscode(enteredPass);
    
    if (verifiedTier) {
        localStorage.setItem(PASSCODE_KEY, "true");
        localStorage.setItem(LICENSED_TIER_KEY, verifiedTier);
        if (errorMsg) errorMsg.style.display = "none";
        unlockTerminal(verifiedTier);
    } else {
        if (errorMsg) errorMsg.style.display = "block";
        inputField.value = "";
        inputField.focus();
        inputField.style.borderColor = "var(--badge-overdue)";
        setTimeout(() => { inputField.style.borderColor = "var(--border-color)"; }, 1000);
    }
}

function unlockTerminal(tier) {
    document.body.classList.remove('app-locked');
    const overlay = document.getElementById('gatekeeperWindow');
    if (overlay) {
        overlay.style.opacity = "0";
        setTimeout(() => { overlay.style.display = "none"; }, 300);
    }
    enforceTierLayoutRestrictions(tier);
}

function enforceTierLayoutRestrictions(tier) {
    const exportBtn = document.getElementById('exportBtn');
    const lockBtn = document.getElementById('lockTerminalBtn');
    
    if (tier === "CORE") {
        if (exportBtn) exportBtn.style.display = "none";
        if (lockBtn) lockBtn.style.display = "none";
        removeInactivityListeners();
        clearTimeout(inactivityTimeout);
    } else {
        if (exportBtn) exportBtn.style.display = "block";
        if (lockBtn) lockBtn.style.display = "block";
        resetInactivityTimer();
        setupInactivityListeners();
        if (tier === "ENTERPRISE") injectSSOBadge(); else removeSSOBanner();
    }
}

function lockTerminal() {
    localStorage.removeItem(PASSCODE_KEY);
    localStorage.removeItem(LICENSED_TIER_KEY);
    document.body.classList.add('app-locked');
    const overlay = document.getElementById('gatekeeperWindow');
    if (overlay) {
        overlay.style.display = "flex";
        setTimeout(() => { overlay.style.opacity = "1"; }, 10);
    }
    const gkPass = document.getElementById('gatekeeperPasscode');
    if (gkPass) gkPass.value = "";
    
    removeInactivityListeners();
    clearTimeout(inactivityTimeout);
    removeSSOBanner();
}

function resetInactivityTimer() {
    const activeTier = localStorage.getItem(LICENSED_TIER_KEY);
    if (activeTier === "CORE") return;
    
    clearTimeout(inactivityTimeout);
    const customMinutes = parseInt(localStorage.getItem(CUSTOM_TIMEOUT_KEY)) || 15;
    inactivityTimeout = setTimeout(() => { lockTerminal(); }, customMinutes * 60 * 1000); 
}

function setupInactivityListeners() {
    removeInactivityListeners();
    ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'].forEach(event => {
        window.addEventListener(event, resetInactivityTimer);
    });
}

function removeInactivityListeners() {
    ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'].forEach(event => {
        window.removeEventListener(event, resetInactivityTimer);
    });
}

function injectSSOBadge() {
    if (document.getElementById('enterpriseSSOBadge')) return;
    const header = document.querySelector('.brand-container');
    if (!header) return;
    const badge = document.createElement('span');
    badge.id = "enterpriseSSOBadge";
    badge.textContent = "SSO SECURED";
    badge.style.cssText = "font-size:0.65rem; background:#0d6efd; color:white; padding:2px 6px; border-radius:10px; font-weight:bold; margin-left:8px; letter-spacing:0.05em;";
    header.appendChild(badge);
}

function removeSSOBanner() {
    const badge = document.getElementById('enterpriseSSOBadge');
    if (badge) badge.remove();
}
// =========================================================================
// 📊 ENTERPRISE INTEGRATION ROUTINE (CSV STREAMER)
// =========================================================================
function exportDatabaseToCSV() {
    if (!db) { alert("Database connection is not fully initialized."); return; }
    const taskList = [];
    const transaction = db.transaction("tasks", "readonly");
    transaction.objectStore("tasks").openCursor().onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) { taskList.push(cursor.value); cursor.continue(); } 
        else { generateCSVDownloadStream(taskList); }
    };
}

function generateCSVDownloadStream(tasks) {
    const activeTasks = tasks.filter(t => t.status !== 'archived' && !t.isDeleted);
    if (activeTasks.length === 0) { alert("No items inside the cache registry to export."); return; }

    const headers = ["Task ID", "Corporate Directive", "Department Track", "Workflow Status", "Target Deadline"];
    const csvRows = [
        headers.join(","),
        ...activeTasks.map(t => [
            t.id,
            `"${(t.directive || "").replace(/"/g, '""')}"`,
            `"${(t.department || "").replace(/"/g, '""')}"`,
            `"${t.status.toUpperCase()}"`,
            `"${new Date(t.deadline).toLocaleString()}"`
        ].join(","))
    ];

    const csvContent = "\uFEFF" + csvRows.join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const virtualLink = document.createElement("a");
    
    virtualLink.href = URL.createObjectURL(blob);
    virtualLink.setAttribute("download", `Trusswork_Directives_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(virtualLink);
    virtualLink.click();
    document.body.removeChild(virtualLink);
}

// =========================================================================
// 📋 RENDERING PIPELINE & METRICS INTERPOLATION
// =========================================================================
function loadTasks() {
    if (!db) return;
    const lists = { 
        pending: document.getElementById('pendingList'), 
        active: document.getElementById('activeList'), 
        completed: document.getElementById('completedList') 
    };
    if (!lists.pending || !lists.active || !lists.completed) return;
    Object.values(lists).forEach(l => l.innerHTML = '');

    let m = { total: 0, pending: 0, active: 0, completed: 0, overdue: 0 };

    db.transaction("tasks", "readonly").objectStore("tasks").openCursor().onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) {
            const task = cursor.value;
            if (task.status === 'archived' || task.isDeleted) { cursor.continue(); return; }

            m.total++;
            m[task.status]++;

            if (task.status !== 'completed' && new Date(task.deadline).getTime() < Date.now()) m.overdue++;

            const card = createTaskCard(task);
            if (lists[task.status]) lists[task.status].appendChild(card);
            cursor.continue();
        } else {
            if(document.getElementById('metricTotal')) document.getElementById('metricTotal').textContent = m.total;
            if(document.getElementById('metricPending')) document.getElementById('metricPending').textContent = m.pending;
            if(document.getElementById('metricActive')) document.getElementById('metricActive').textContent = m.active;
            if(document.getElementById('metricCompleted')) document.getElementById('metricCompleted').textContent = m.completed;
            if(document.getElementById('metricOverdue')) document.getElementById('metricOverdue').textContent = m.overdue;
        }
    };
}
function createTaskCard(task) {
    const safeTask = {
        id: task?.id || Date.now(),
        directive: task?.directive || 'Untitled Task Directive',
        department: task?.department || 'General',
        createdTimestamp: task?.createdTimestamp || Date.now(),
        deadline: task?.deadline || new Date(Date.now() + 86400000).toISOString()
    };

    const card = document.createElement('div');
    card.className = 'task-card';
    card.draggable = true;
    card.dataset.id = safeTask.id;

    let bClass = 'badge-safe'; let bText = 'SAFE';
    if (task?.status !== 'completed') {
        const diff = new Date(safeTask.deadline).getTime() - Date.now();
        if (diff < 0) { bClass = 'badge-overdue'; bText = 'OVERDUE'; }
        else if (diff <= 86400000) { bClass = 'badge-soon'; bText = 'DUE SOON'; }
    }

    card.innerHTML = `
        <div class="task-card-inner" style="position: relative; display: flex; flex-direction: column; gap: 8px; width: 100%; padding: 14px 16px; background: rgba(255,255,255,0.05); border-radius: 6px;">
            <div style="position: absolute; right: 14px; top: 14px; display: flex; gap: 8px; z-index: 99;">
                <button class="card-edit-trigger" title="Edit Task" style="background: none; border: none; cursor: pointer; color: #fff; opacity: 0.7;">
                    <span style="display: flex; align-items: center; justify-content: center; width: 16px; height: 16px;">${editIcon}</span>
                </button>
                <button class="card-delete-trigger" title="Archive Task" style="background: none; border: none; cursor: pointer; color: #ff4d4d; opacity: 0.7;">✕</button>
            </div>
            <div style="padding-right: 45px; width: 100%; box-sizing: border-box;">
                <div class="card-display-view" style="display: block;">
                    <div class="card-directive" style="font-size: 15px; font-weight: 500; word-break: break-word;">${safeTask.directive}</div>
                </div>
                <div class="card-edit-view" style="display: none; width: 100%;">
                    <textarea class="card-directive-input" style="width: 100%; background: #000; color: #fff; border-radius: 4px;">${safeTask.directive}</textarea>
                </div>
                <div class="card-dept" style="font-size: 13px; opacity: 0.7; margin-top: 4px;">${safeTask.department}</div>
                <div class="card-badge ${bClass}" style="width: max-content; margin-top: 4px;">${bText}</div>
            </div>
            <div style="font-size: 11px; opacity: 0.6; margin-top: 8px; border-top: 1px solid rgba(128,128,128,0.15); padding-top: 6px;">
                <div>Created: ${new Date(safeTask.createdTimestamp).toLocaleString()}</div>
                <div>Deadline: ${new Date(safeTask.deadline).toLocaleString()}</div>
            </div>
        </div>
    `;

    const editBtn = card.querySelector('.card-edit-trigger');
    const deleteBtn = card.querySelector('.card-delete-trigger');
    const displayView = card.querySelector('.card-display-view');
    const editView = card.querySelector('.card-edit-view');
    const directiveInput = card.querySelector('.card-directive-input');

    if (editBtn && displayView && editView && directiveInput) {
        editBtn.onclick = (e) => {
            e.stopPropagation();
            if (editView.style.display !== 'block') {
                displayView.style.display = 'none'; editView.style.display = 'block';
                editBtn.innerHTML = saveIcon; directiveInput.focus();
            } else {
                const updatedText = directiveInput.value.trim();
                if (!updatedText) return alert('Task directive cannot be blank!');
                task.directive = updatedText;
                const transaction = db.transaction(["tasks"], "readwrite");
                transaction.objectStore("tasks").put(task).onsuccess = () => {
                    card.querySelector('.card-directive').textContent = updatedText;
                    displayView.style.display = 'block'; editView.style.display = 'none';
                    editBtn.innerHTML = editIcon;
                };
            }
        };
    }

    if (deleteBtn) {
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.archivedTasks.push(task);
            task.status = 'archived';
            const transaction = db.transaction(["tasks"], "readwrite");
            transaction.objectStore("tasks").put(task).onsuccess = () => { card.remove(); loadTasks(); };
        });
    }

    card.addEventListener('dragstart', () => card.classList.add('dragging'));
    card.addEventListener('dragend', () => card.classList.remove('dragging'));
    return card;
}
// =========================================================================
// 🛒 INITIALIZATION AND EVENT COORDINATOR
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    if (window.appInitialized) return;
    window.appInitialized = true;

    const boardContainer = document.getElementById('boardContainer');
    const viewKanbanBtn = document.getElementById('viewKanbanBtn');
    const viewGridBtn = document.getElementById('viewGridBtn');

    if (viewKanbanBtn && boardContainer) {
        viewKanbanBtn.onclick = () => {
            boardContainer.className = "board-container kanban-view";
            viewKanbanBtn.classList.add('active');
            if (viewGridBtn) viewGridBtn.classList.remove('active');
        };
    }
    if (viewGridBtn && boardContainer) {
        viewGridBtn.onclick = () => {
            boardContainer.className = "board-container grid-view";
            viewGridBtn.classList.add('active');
            if (viewKanbanBtn) viewKanbanBtn.classList.remove('active');
        };
    }

    const loginSubmit = document.getElementById('gatekeeperSubmitBtn');
    const loginInput = document.getElementById('gatekeeperPasscode');
    const lockBtn = document.getElementById('lockTerminalBtn');
    const exportBtn = document.getElementById('exportBtn');
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
        themeBtn.onclick = () => { 
            document.body.classList.toggle('dark-mode'); 
            console.log("Trusswork Engine: Core UI appearance state toggled.");
        };
    }

    if (loginSubmit) loginSubmit.onclick = validatePasscode;
    if (lockBtn) lockBtn.onclick = lockTerminal;
    if (exportBtn) exportBtn.onclick = exportDatabaseToCSV;
    if (loginInput) {
        loginInput.onkeydown = (e) => { if (e.key === 'Enter') { e.preventDefault(); validatePasscode(); } };
    }

    const langSelect = document.getElementById('langSelect');
    if (langSelect) langSelect.addEventListener('change', (e) => { currentLang = e.target.value; applyLanguage(); });

    const adminDrawer = document.getElementById('adminPanelDrawer');
    const openAdminBtn = document.getElementById('openAdminDrawerBtn');
    const closeAdminBtn = document.getElementById('closeAdminDrawerBtn');
    const saveAdminBtn = document.getElementById('saveAdminConfigBtn');

    if (openAdminBtn) {
        openAdminBtn.onclick = () => {
            const activeTier = localStorage.getItem(LICENSED_TIER_KEY) || "CORE";
            const currentPass = localStorage.getItem(CUSTOM_PASSCODES_PREFIX + activeTier) || DEFAULT_TIERS[activeTier] || "TrussworkCore2026";
            const currentTimeout = localStorage.getItem(CUSTOM_TIMEOUT_KEY) || "15";
            document.getElementById('adminPasscodeOverride').value = currentPass;
            document.getElementById('adminTimeoutOverride').value = currentTimeout;
            if (adminDrawer) adminDrawer.style.display = "flex";
        };
    }
    if (closeAdminBtn) { closeAdminBtn.onclick = () => { if (adminDrawer) adminDrawer.style.display = "none"; }; }
    if (saveAdminBtn) {
        saveAdminBtn.onclick = () => {
            const activeTier = localStorage.getItem(LICENSED_TIER_KEY) || "CORE";
            const newPass = document.getElementById('adminPasscodeOverride').value.trim();
            const newTimeout = document.getElementById('adminTimeoutOverride').value;
            if(!newPass) return alert("Passcode parameter cannot be left blank.");
            localStorage.setItem(CUSTOM_PASSCODES_PREFIX + activeTier, newPass);
            localStorage.setItem(CUSTOM_TIMEOUT_KEY, newTimeout);
            alert("System Admin Patch Saved!");
            if (adminDrawer) adminDrawer.style.display = "none";
            resetInactivityTimer();
        };
    }

    const commitBtn = document.getElementById('commitTaskBtn');
    if (commitBtn) {
        commitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const directiveSelect = document.getElementById('directiveInput') || document.querySelector('select');
            const deptSelect = document.getElementById('departmentInput');
            const deadlineInput = document.getElementById('deadlineInput');

            if (!directiveSelect || !directiveSelect.value) return alert("Select a valid Corporate Directive.");

            const newTask = {
                id: Date.now(),
                directive: directiveSelect.value,
                department: deptSelect ? deptSelect.value : 'Operations',
                status: 'pending',
                createdTimestamp: Date.now(),
                deadline: deadlineInput && deadlineInput.value ? deadlineInput.value : new Date(Date.now() + 86400000).toISOString()
            };

            const transaction = db.transaction(["tasks"], "readwrite");
            transaction.objectStore("tasks").add(newTask).onsuccess = () => {
                if (deadlineInput) deadlineInput.value = '';
                loadTasks();
            };
        });
    }

    document.querySelectorAll('.board-column').forEach(col => {
        col.addEventListener('dragover', (e) => e.preventDefault());
        col.addEventListener('drop', () => {
            const dragging = document.querySelector('.dragging');
            if (!dragging) return;
            const transaction = db.transaction(["tasks"], "readwrite");
            const store = transaction.objectStore("tasks");
            store.get(parseInt(dragging.dataset.id)).onsuccess = (e) => {
                const data = e.target.result;
                if(data) { data.status = col.dataset.status; store.put(data); }
            };
            transaction.oncomplete = loadTasks;
        });
    });
    const trashBinElement = document.getElementById('trashBin');
    const archiveModal = document.getElementById('archiveModal');
    const archiveList = document.getElementById('archiveList');
    const closeArchiveModalBtn = document.getElementById('closeArchiveModal');

    if (trashBinElement && archiveModal && archiveList) {
        trashBinElement.addEventListener('click', () => {
            archiveList.innerHTML = '';
            if (!window.archivedTasks || window.archivedTasks.length === 0) {
                archiveList.innerHTML = '<li style="text-align:center; color:#6c757d; padding:20px; list-style:none;">Your archive is currently empty!</li>';
            } else {
                window.archivedTasks.forEach((task, index) => {
                    const li = document.createElement('li');
                    li.className = 'archive-item';
                    li.innerHTML = `
                        <div style="display:flex; justify-content:space-between; align-items:center; padding: 8px 12px; border-bottom:1px solid rgba(255,255,255,0.1);">
                            <div>
                                <strong>${task.directive || "Untitled Task"}</strong><br>
                                <small style="color:#6c757d">${task.department || "General"}</small>
                            </div>
                            <button class="restore-btn" data-index="${index}" style="background:#28a745; color:#fff; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">Restore</button>
                        </div>
                    `;
                    
                    li.querySelector('.restore-btn').addEventListener('click', (ev) => {
                        const itemIndex = parseInt(ev.target.getAttribute('data-index'));
                        const [taskToRestore] = window.archivedTasks.splice(itemIndex, 1);
                        taskToRestore.status = 'pending'; 
                        
                        const trans = db.transaction(["tasks"], "readwrite");
                        trans.objectStore("tasks").put(taskToRestore);
                        trans.oncomplete = () => {
                            loadTasks();
                            trashBinElement.click(); 
                        };
                    });
                    archiveList.appendChild(li);
                });
            }
            archiveModal.style.display = "flex";
        });
    }

    if (closeArchiveModalBtn && archiveModal) {
        closeArchiveModalBtn.onclick = () => { archiveModal.style.display = "none"; };
    }

    window.addEventListener('click', (event) => {
        if (archiveModal && event.target === archiveModal) {
            archiveModal.style.display = 'none';
        }
    });

    const trashTarget = document.getElementById('trashBin');
    if (trashTarget) {
        trashTarget.addEventListener('dragover', (e) => {
            e.preventDefault();
            trashTarget.style.transform = 'scale(1.25)';
            trashTarget.style.transition = 'transform 0.2s ease';
            trashTarget.style.boxShadow = '0 0 15px rgba(220, 53, 69, 0.6)';
        });

        trashTarget.addEventListener('dragleave', () => {
            trashTarget.style.transform = 'scale(1)';
            trashTarget.style.boxShadow = 'none';
        });

        trashTarget.addEventListener('drop', (e) => {
            e.preventDefault();
            trashTarget.style.transform = 'scale(1)';
            trashTarget.style.boxShadow = 'none';

            const activeCard = document.querySelector('.task-card.dragging');
            if (activeCard) {
                const deleteBtn = activeCard.querySelector('.card-delete-trigger');
                activeCard.style.transition = 'all 0.2s ease-out';
                activeCard.style.opacity = '0';
                activeCard.style.transform = 'scale(0.5)';
                
                setTimeout(() => {
                    if (deleteBtn) {
                        deleteBtn.click();
                    } else {
                        const idToPurge = parseInt(activeCard.dataset.id);
                        executeTaskDeletion(idToPurge);
                    }
                }, 200);
            }
        });
    }

    checkInitialLockState();
});

function applyLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[currentLang] && i18n[currentLang][key]) el.textContent = i18n[currentLang][key];
    });
}

function updateNetworkStatus() {
    const metric = document.getElementById('metricNetwork');
    if (metric) metric.textContent = navigator.onLine ? "Online" : "Offline";
}

function executeTaskDeletion(taskId) {
    const transaction = db.transaction(["tasks"], "readwrite");
    transaction.objectStore("tasks").delete(taskId);
    transaction.oncomplete = () => { loadTasks(); };
}

window.addEventListener('online', updateNetworkStatus);
window.addEventListener('offline', updateNetworkStatus);
setInterval(loadTasks, 30000);
