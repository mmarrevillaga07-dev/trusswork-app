// 1. Multi-lingual Lookups (10 Most Common Languages)
const i18n = {
    en: { brand: "Trusswork™", kanban: "Kanban", grid: "Grid", mode: "Mode", export: "Export", signin: "Sign In", directive: "CORPORATE DIRECTIVE", department: "DEPARTMENT TRACK", deadline: "TARGET DEADLINE", commitTask: "Commit Task", pendingExecution: "PENDING EXECUTION", activeProcessing: "ACTIVE PROCESSING", completedLogs: "COMPLETED LOGS", mTotal: "Total Tasks", mPending: "Pending", mActive: "Active", mCompleted: "Completed", mOverdue: "Overdue", mNetwork: "Network Status",lockApp: "Lock Terminal" },
    zh: { brand: "Trusswork™", kanban: "看板", grid: "网格", mode: "模式", export: "导出", signin: "登录", directive: "公司指令", department: "部门追踪", deadline: "目标截止日期", commitTask: "提交任务", pendingExecution: "待执行", activeProcessing: "进行中", completedLogs: "已完成日志", mTotal: "总任务", mPending: "待处理", mActive: "进行中", mCompleted: "已完成", mOverdue: "逾期", mNetwork: "网络状态", lockApp: "锁定终端" },
    hi: { brand: "Trusswork™", kanban: "कानबान", grid: "ग्रिड", mode: "मोڈ", export: "निर्यात", signin: "साइन इन", directive: "कॉर्पोरेट निर्देश", department: "विभाग ट्रैक", deadline: "अंतिम समय सीमा", commitTask: "कार्य सौंपें", pendingExecution: "لंबित निष्पादन", activeProcessing: "सक्रिय प्रसंस्करण", completedLogs: "पूर्ण लॉग", mTotal: "कुल कार्य", mPending: "لंबित", mActive: "सक्रिय", mCompleted: "पूर्ण", mOverdue: "विलंबित", mNetwork: "नेटवर्क स्थिति", lockApp: "टर्मिनल लॉक करें" },
    es: { brand: "Trusswork™", kanban: "Kanban", grid: "Cuadrícula", mode: "Modo", export: "Exportar", signin: "Ingresar", directive: "DIRECTIVA CORPORATIVA", department: "SEGUIMIENTO", deadline: "FECHA LÍMITE", commitTask: "Asignar Tarea", pendingExecution: "EJECUCIÓN PENDIENTE", activeProcessing: "PROCESAMIENTO ACTIVO", completedLogs: "REGISTROS COMPLETADOS", mTotal: "Tareas Totales", mPending: "Pendientes", mActive: "Activas", mCompleted: "Completadas", mOverdue: "Vencidas", mNetwork: "Estado de Red", lockApp: "Bloquear Terminal" },
    fr: { brand: "Trusswork™", kanban: "Kanban", grid: "Grille", mode: "Mode", export: "Exporter", signin: "Se connecter", directive: "DIRECTIVE D'ENTREPRISE", department: "SUIVI", deadline: "DATE LIMITE", commitTask: "Valider", pendingExecution: "EXÉCUTION EN ATTENTE", activeProcessing: "TRAITEMENT ACTIF", completedLogs: "JOURNAUX TERMINÉS", mTotal: "Total", mPending: "En attente", mActive: "Actives", mCompleted: "Terminées", mOverdue: "En retard", mNetwork: "État du réseau", lockApp: "Verrouiller le terminal" },
    ar: { brand: "Trusswork™", kanban: "كانبان", grid: "شبكة", mode: "وضع", export: "تصدير", signin: "تسجيل الدخول", directive: "التوجيه المؤسسي", department: "مسار القسم", deadline: "الموعد النهائي", commitTask: "تنفيذ المهمة", pendingExecution: "في انتظار التنفيذ", activeProcessing: "المعالجة النشطة", completedLogs: "السجلات المكتملة", mTotal: "إجمالي المهام", mPending: "معلق", mActive: "نشط", mCompleted: "مكتمل", mOverdue: "متأخر", mNetwork: "حالة الشبكة", lockApp: "قفل النهاية" },
    bn: { brand: "Trusswork™", kanban: "কানবান", grid: "গ্রিড", mode: "মোড", export: "রপ্তানি", signin: "সাইন ইন", directive: "কর্পোরেট নির্দেশিকা", department: "বিভাগ ট্র্যাক", deadline: "টার্গেট ডেডলাইন", commitTask: "টাস্ক সাবমিট", pendingExecution: "অপেক্ষমান সম্পাদন", activeProcessing: "সक्रिय প্রক্রিয়াকরণ", completedLogs: "সম্পন্ন লগ", mTotal: "মোট টাস্ক", mPending: "অপেক্ষমান", mActive: "সক্রিয়", mCompleted: "সম্পন্ন", mOverdue: "অতীত ডেডলাইন", mNetwork: "নেটওয়ার্ক স্ট্যাটاس", lockApp: "টার্মিনাল লক করুন" },
    pt: { brand: "Trusswork™", kanban: "Kanban", grid: "Grade", mode: "Modo", export: "Exportar", signin: "Entrar", directive: "DIRETRIZ CORPORATIVA", department: "ACOMPANHAMENTO", deadline: "PRAZO LIMITE", commitTask: "Confirmar", pendingExecution: "EXECUÇÃO PENDENTE", activeProcessing: "PROCESSAMENTO ATIVO", completedLogs: "REGISTROS CONCLUÍDOS", mTotal: "Total", mPending: "Pendentes", mActive: "Ativas", mCompleted: "Concluídas", mOverdue: "Atrasadas", mNetwork: "Status da Rede", lockApp: "Bloquear Terminal" },
    ru: { brand: "Trusswork™", kanban: "Канбан", grid: "Сетка", mode: "Режим", export: "Экспорт", signin: "Войти", directive: "КОРПОРАТИВНАЯ ДИРЕКТИВА", department: "ОТДЕЛ", deadline: "СРОК ВЫПОЛНЕНИЯ", commitTask: "Создать задачу", pendingExecution: "ОЖИДАЕТ ВЫПОЛНЕНИЯ", activeProcessing: "В РАБОТЕ", completedLogs: "ЗАВЕРШЕННЫЕ", mTotal: "Всего задач", mPending: "В ожидании", mActive: "В работе", mCompleted: "Завершено", mOverdue: "Просрочено", mNetwork: "Статус сети", lockApp: "Заблокировать терминал" },
    ur: { brand: "Trusswork™", kanban: "کانبان", grid: "گرڈ", mode: "موڈ", export: "ایکسپورٹ", signin: "سائن ان", directive: "کارپوریٹ ہدایت", department: "شعبہ ٹریک", deadline: "آخری تاریخ", commitTask: "ٹاسک جمع کریں", pendingExecution: "التواء عملدرآمد", activeProcessing: "فعال پروسیسنگ", completedLogs: "مکمل لاگز", mTotal: "کل ٹاسکس", mPending: "التواء", mActive: "فعال", mCompleted: "مکمل", mOverdue: "تاخیر شدہ", mNetwork: "نیٹ ورک کی صورتحال", lockApp: "ٹرمینل کو لاک کریں" }
};

let currentLang = 'en';
let db;

// 2. Persistent Offline Storage Structure (IndexedDB)
const request = indexedDB.open("TrussworkDB", 1);
request.onupgradeneeded = (e) => {
    db = e.target.result;
    if (!db.objectStoreNames.contains("tasks")) {
        db.createObjectStore("tasks", { keyPath: "id", autoIncrement: true });
    }
};
request.onsuccess = (e) => { 
    db = e.target.result; 
    
    // Check if store is empty, if yes, bootstrap database with realistic records
    const checkTransaction = db.transaction("tasks", "readonly");
    const countRequest = checkTransaction.objectStore("tasks").count();
    
    countRequest.onsuccess = () => {
        if (countRequest.result === 0) {
            console.log("Trusswork Data Engine: Empty cache registry recognized. Seeding starter corporate directives...");
            bootstrapMockTasks();
        } else {
            loadTasks();
        }
    };
};

function bootstrapMockTasks() {
    const mockData = [
        { directive: "System Operational Sync", department: "Operations", status: "pending", deadline: new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString().slice(0, 16) },
        { directive: "Security Architecture Audit", department: "Security", status: "active", deadline: new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString().slice(0, 16) },
        { directive: "Database Cluster Maintenance", department: "Engineering", status: "completed", deadline: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().slice(0, 16) }
    ];

    const transaction = db.transaction(["tasks"], "readwrite");
    const store = transaction.objectStore("tasks");
    
    mockData.forEach(task => store.add(task));
    transaction.oncomplete = () => {
        console.log("Trusswork Data Engine: Mock data seeded successfully.");
        loadTasks();
    };
}


// 3. Register Service Worker Environment
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(err => console.log('SW Registration Failed', err));
    });
}

// 4. Global Action Event Listeners
document.getElementById('langSelect').addEventListener('change', (e) => {
    currentLang = e.target.value;
    applyLanguage();
});

document.getElementById('themeToggleBtn').onclick = () => { 
    document.body.classList.toggle('dark-mode'); 
};

const boardContainer = document.getElementById('boardContainer');
document.getElementById('viewKanbanBtn').onclick = () => {
    boardContainer.className = "board-container kanban-view";
    document.getElementById('viewKanbanBtn').classList.add('active');
    document.getElementById('viewGridBtn').classList.remove('active');
};
document.getElementById('viewGridBtn').onclick = () => {
    boardContainer.className = "board-container grid-view";
    document.getElementById('viewGridBtn').classList.add('active');
    document.getElementById('viewKanbanBtn').classList.remove('active');
};

// 4. Gatekeeper Lock Screen Terminal Validation, Manual Log Out, & 15-Min Inactivity Monitor
const PASSCODE_KEY = "TrussworkAuthorizedToken";
const VALID_PASSCODE = "LogicMinds2026";
let inactivityTimeout;

function checkInitialLockState() {
    if (localStorage.getItem(PASSCODE_KEY) === "true") {
        unlockTerminal();
    }
}

// Manual Lock Event Binding
document.getElementById('lockTerminalBtn').onclick = lockTerminal;
document.getElementById('gatekeeperSubmitBtn').onclick = validatePasscode;
document.getElementById('gatekeeperPasscode').onkeydown = (e) => {
    if (e.key === 'Enter') validatePasscode();
};

function validatePasscode() {
    const inputField = document.getElementById('gatekeeperPasscode');
    const errorMsg = document.getElementById('loginError');
    
    if (inputField.value === VALID_PASSCODE) {
        localStorage.setItem(PASSCODE_KEY, "true");
        errorMsg.style.display = "none";
        unlockTerminal();
    } else {
        errorMsg.style.display = "block";
        inputField.value = "";
        inputField.focus();
        inputField.style.borderColor = "var(--badge-overdue)";
        setTimeout(() => inputField.style.borderColor = "var(--border-color)", 1000);
    }
}

function unlockTerminal() {
    document.body.classList.remove('app-locked');
    const overlay = document.getElementById('gatekeeperWindow');
    overlay.style.opacity = "0";
    setTimeout(() => { overlay.style.display = "none"; }, 300);
    
    // Start tracking inactivity timers once app is open
    resetInactivityTimer();
    setupInactivityListeners();
}

function lockTerminal() {
    localStorage.removeItem(PASSCODE_KEY);
    document.body.classList.add('app-locked');
    const overlay = document.getElementById('gatekeeperWindow');
    overlay.style.display = "flex";
    setTimeout(() => { overlay.style.opacity = "1"; }, 10);
    document.getElementById('gatekeeperPasscode').value = "";
    
    // Kill activity background listeners when locked
    removeInactivityListeners();
    clearTimeout(inactivityTimeout);
}

// ⏳ Background Inactivity Tracking Mechanics (15 Minutes)
function resetInactivityTimer() {
    clearTimeout(inactivityTimeout);
    // 15 minutes = 15 * 60 * 1000 milliseconds = 900,000ms
    inactivityTimeout = setTimeout(() => {
        console.log("Terminal inactive for 15 minutes. Executing automatic security logout.");
        lockTerminal();
    }, 900000); 
}

function setupInactivityListeners() {
    window.addEventListener('mousemove', resetInactivityTimer);
    window.addEventListener('keydown', resetInactivityTimer);
    window.addEventListener('click', resetInactivityTimer);
    window.addEventListener('scroll', resetInactivityTimer);
    window.addEventListener('touchstart', resetInactivityTimer);
}

function removeInactivityListeners() {
    window.removeEventListener('mousemove', resetInactivityTimer);
    window.removeEventListener('keydown', resetInactivityTimer);
    window.removeEventListener('click', resetInactivityTimer);
    window.removeEventListener('scroll', resetInactivityTimer);
    window.removeEventListener('touchstart', resetInactivityTimer);
}

window.addEventListener('DOMContentLoaded', checkInitialLockState);


// Check lock configuration state immediately upon runtime initialization
window.addEventListener('DOMContentLoaded', checkInitialLockState);


// 5. Add/Commit New Task Data Routine
document.getElementById('commitTaskBtn').onclick = () => {
    const directive = document.getElementById('directiveInput').value;
    const department = document.getElementById('departmentInput').value;
    const deadline = document.getElementById('deadlineInput').value;

    if (!deadline) { alert("Please provide a valid deadline allocation timestamp."); return; }

    const transaction = db.transaction(["tasks"], "readwrite");
    transaction.objectStore("tasks").add({ directive, department, deadline, status: 'pending', timestamp: Date.now() });
    transaction.oncomplete = () => { 
        loadTasks(); 
        document.getElementById('deadlineInput').value = ''; 
    };
};
// 6. UI Translation Interpolation Engine
function applyLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[currentLang][key]) el.textContent = i18n[currentLang][key];
    });
}

// 7. Network Intercept Listener
window.addEventListener('online', updateNetworkStatus);
window.addEventListener('offline', updateNetworkStatus);
function updateNetworkStatus() {
    const online = navigator.onLine;
    document.getElementById('metricNetwork').textContent = online ? "Online" : "Offline";
    if (online) console.log("Network online sync background engine trigger executed.");
}

// 8. Load & Render Tasks From Local Cache Storage
function loadTasks() {
    if (!db) return;
    const lists = { 
        pending: document.getElementById('pendingList'), 
        active: document.getElementById('activeList'), 
        completed: document.getElementById('completedList') 
    };
    Object.values(lists).forEach(l => l.innerHTML = '');

    let m = { total: 0, pending: 0, active: 0, completed: 0, overdue: 0 };

    db.transaction("tasks", "readonly").objectStore("tasks").openCursor().onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) {
            const task = cursor.value;
            m.total++; m[task.status]++;
            
            if (task.status !== 'completed' && new Date(task.deadline).getTime() < Date.now()) {
                m.overdue++;
            }

            const card = createTaskCard(task);
            lists[task.status].appendChild(card);
            cursor.continue();
        } else {
            // Update Metrics Board Panel Elements
            document.getElementById('metricTotal').textContent = m.total;
            document.getElementById('metricPending').textContent = m.pending;
            document.getElementById('metricActive').textContent = m.active;
            document.getElementById('metricCompleted').textContent = m.completed;
            document.getElementById('metricOverdue').textContent = m.overdue;
        }
    };
}

// 9. Task Card Generation & Time-Delta Badging Rules
function createTaskCard(task) {
    const card = document.createElement('div');
    card.className = 'task-card';
    card.draggable = true;
    card.dataset.id = task.id;

    let bClass = 'badge-safe', bText = 'SAFE';
    if (task.status !== 'completed') {
        const diff = new Date(task.deadline).getTime() - Date.now();
        if (diff < 0) { 
            bClass = 'badge-overdue'; 
            bText = 'OVERDUE'; 
        } else if (diff <= 24 * 60 * 60 * 1000) { 
            bClass = 'badge-soon'; 
            bText = 'DUE SOON'; 
        }
    } else { 
        bText = 'COMPLETED'; 
    }

    card.innerHTML = `
        <div class="card-directive">${task.directive}</div>
        <div class="card-dept">${task.department}</div>
        <div class="card-badge ${bClass}">${bText}</div>
        <div style="font-size:0.75rem; margin-top:4px; color:var(--text-muted);">${new Date(task.deadline).toLocaleString()}</div>
    `;

    card.addEventListener('dragstart', () => card.classList.add('dragging'));
    card.addEventListener('dragend', () => card.classList.remove('dragging'));
    return card;
}

// 10. Drag and Drop Interactive Subsystem Execution
document.querySelectorAll('.board-column').forEach(col => {
    col.addEventListener('dragover', (e) => e.preventDefault());
    col.addEventListener('drop', () => {
        const dragging = document.querySelector('.dragging');
        if (!dragging) return;
        
        const transaction = db.transaction(["tasks"], "readwrite");
        const store = transaction.objectStore("tasks");
        store.get(parseInt(dragging.dataset.id)).onsuccess = (e) => {
            const data = e.target.result;
            data.status = col.dataset.status;
            store.put(data);
        };
        transaction.oncomplete = loadTasks;
    });
});

// Auto-evaluate timelines every 30 seconds 
setInterval(loadTasks, 30000);
updateNetworkStatus();
// ==========================================================================
// 📊 ENTERPRISE INTEGRATION: DATA STREAM EXPORT ROUTINE (EXCEL/CSV PIPELINE)
// ==========================================================================
document.getElementById('exportBtn').onclick = exportDatabaseToCSV;

function exportDatabaseToCSV() {
    if (!db) {
        alert("Database connection is not fully initialized. Please try again.");
        return;
    }

    const taskList = [];
    const transaction = db.transaction("tasks", "readonly");
    const store = transaction.objectStore("tasks");

    store.openCursor().onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) {
            taskList.push(cursor.value);
            cursor.continue();
        } else {
            // Callback execution once all tasks have been gathered from IndexedDB cache
            generateCSVDownloadStream(taskList);
        }
    };
}

function generateCSVDownloadStream(tasks) {
    if (tasks.length === 0) {
        alert("There are currently no documented tasks inside the terminal cache storage registry to export.");
        return;
    }

    // 1. Configure localized document structured array headers 
    const headers = ["Task ID", "Corporate Directive", "Department Track", "Workflow Status", "Target Deadline String"];
    
    // 2. Map and escape special character sequences in cell columns safely
    const csvRows = [
        headers.join(","), // Header row definition
        ...tasks.map(task => [
            task.id,
            `"${task.directive.replace(/"/g, '""')}"`,
            `"${task.department.replace(/"/g, '""')}"`,
            `"${task.status.toUpperCase()}"`,
            `"${new Date(task.deadline).toLocaleString()}"`
        ].join(","))
    ];

    // 3. Compile lines and configure standard raw UTF-8 binary stream data container
    const csvContent = "\uFEFF" + csvRows.join("\n"); // Include BOM tag parameters for flawless native Microsoft Excel column auto-parsing
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    
    // 4. Construct a virtual anchor object element framework to force programmatic file save handling
    const virtualLink = document.createElement("a");
    const fileTimestamp = new Date().toISOString().slice(0, 10);
    
    virtualLink.href = URL.createObjectURL(blob);
    virtualLink.setAttribute("download", `Trusswork_Master_Directives_Export_${fileTimestamp}.csv`);
    virtualLink.style.visibility = 'hidden';
    
    document.body.appendChild(virtualLink);
    virtualLink.click();
    document.body.removeChild(virtualLink);
    
    console.log(`Trusswork Data Engine: Successfully exported ${tasks.length} corporate records directly into download stream logs.`);
}
