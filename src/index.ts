
// Desarrollador
// Repositorio de código
// Pull Requests
// Issues (bugs o mejoras)
// Proyecto

// Developer
type Role = "backend" | "frontend" | "fullstack" | "devops";
type Seniority = "junior" | "semi senior" | "senior";
type Tecnologias = [string, ...string[]];

// PR
type Estado = "abierto" | "aprobado" | "rechazado" | "emergente";

//issue
type Tipo = "bug" | "mejora";
type Prioridad = 1 | 2 | 3 | 4 | 5;
type EstadoIssue = "abierto" | "en progreso" | "resuelto" | "cerrado";

interface developer {
    readonly id: PropertyKey;
    nombre : string ;
    rol : Role ;
    seniority : Seniority ;
    tecnologias : Tecnologias;
    disponibilidad : boolean;
}

interface repository {
    readonly id: PropertyKey;
    nombre: string;
    url: string;
    rama_principal: string;
    lenguaje_principal: string;
}



interface pullRequest {
    readonly id: PropertyKey;
    titulo: string;
    estado: Estado;
    autor: developer["id"][];
    reviewers: developer["id"][];
    lineas_codigo: number;
}

interface issue {
    readonly id: PropertyKey;
    titulo: string;
    tipo: Tipo;
    prioridad: Prioridad;
    estado: EstadoIssue;
    asignado_a: developer["id"];
}

interface proyecto {
    readonly id : PropertyKey ; 
    nombre: string;
    repositorio: repository["id"];
    lista_issues: issue["id"][];
    lista_pull_requests: pullRequest["id"][];
    equipo_developers: developer["id"][];
}


// 1 desarrollador
// 1 repositorio
// 5 issues
// 4 pull requests
// 1 proyecto

 const developer1 : developer = {
    id: 1,
    nombre: "Carlos Rodriguez",
    rol: "backend",
    seniority: "senior",
    tecnologias: ["TypeScript", "Node.js", "PostgreSQL", "Docker"],
    disponibilidad: true
 }
 
 const developer2 : developer = {
    id: 2,
    nombre: "Ana Martinez",
    rol: "frontend",
    seniority: "senior",
    tecnologias: ["React", "TypeScript", "TailwindCSS", "Next.js"],
    disponibilidad: true
 }
 
 const developer3 : developer = {
    id: 3,
    nombre: "Miguel Sanchez",
    rol: "fullstack",
    seniority: "semi senior",
    tecnologias: ["React", "TypeScript", "Node.js", "MongoDB"],
    disponibilidad: false
 }
 
 const developer4 : developer = {
    id: 4,
    nombre: "Laura Gonzalez",
    rol: "devops",
    seniority: "senior",
    tecnologias: ["Docker", "Kubernetes", "AWS", "Terraform"],
    disponibilidad: true
}

const developer5 : developer = {
    id: 5,
    nombre: "Diego Torres",
    rol: "backend",
    seniority: "junior",
    tecnologias: ["Python", "Django", "PostgreSQL"],
    disponibilidad: true
}

const developer6 : developer = {
    id: 6,
    nombre: "Sofia Herrera",
    rol: "frontend",
    seniority: "semi senior",
    tecnologias: ["Vue.js", "JavaScript", "SASS", "Webpack"],
    disponibilidad: true
}
 
let developers: developer[] = [developer1, developer2, developer3, developer4, developer5, developer6];

const repository1: repository = {
    id: 1,
    nombre: "e-commerce-platform",
    url: "https://github.com/company/e-commerce-platform",
    rama_principal: "main",
    lenguaje_principal: "TypeScript"
}

const issue1 : issue = {
    id: 1,
    titulo: "Error en autenticación con OAuth2",
    tipo: "bug",
    prioridad: 5,
    estado: "abierto",
    asignado_a: developer1.id
}

const issue2 : issue = {
    id: 2,
    titulo: "Implementar sistema de notificaciones push",
    tipo: "mejora",
    prioridad: 3,
    estado: "en progreso",
    asignado_a: developer2.id
}

const issue3 : issue = {
    id: 3,
    titulo: "Vulnerabilidad de seguridad en API",
    tipo: "bug",
    prioridad: 5,
    estado: "resuelto",
    asignado_a: developer3.id
}

const issue4 : issue = {
    id: 4,
    titulo: "Optimizar rendimiento de dashboard",
    tipo: "mejora",
    prioridad: 2,
    estado: "abierto",
    asignado_a: developer4.id
}

const issue5 : issue = {
    id: 5,
    titulo: "Fallo en procesamiento de pagos",
    tipo: "bug",
    prioridad: 4,
    estado: "en progreso",
    asignado_a: developer5.id
}

const issue6 : issue = {
    id: 6,
    titulo: "Agregar modo oscuro a la interfaz",
    tipo: "mejora",
    prioridad: 1,
    estado: "cerrado",
    asignado_a: developer6.id
}

const issue7 : issue = {
    id: 7,
    titulo: "Error en cálculo de impuestos",
    tipo: "bug",
    prioridad: 4,
    estado: "abierto",
    asignado_a: developer1.id
}

let issues: issue[] = [issue1, issue2, issue3, issue4, issue5, issue6, issue7];

const pullRequest1 : pullRequest = {
    id: 1,
    titulo: "Fix: Corrección de autenticación OAuth2",
    estado: "aprobado",
    autor: [developer1.id],
    reviewers: [developer2.id, developer4.id],
    lineas_codigo: 234
}

const pullRequest2 : pullRequest = {
    id: 2,
    titulo: "Feat: Sistema de notificaciones push",
    estado: "abierto",
    autor: [developer2.id, developer6.id],
    reviewers: [developer1.id, developer3.id],
    lineas_codigo: 567
}

const pullRequest3 : pullRequest = {
    id: 3,
    titulo: "Security: Patch vulnerabilidad crítica",
    estado: "aprobado",
    autor: [developer3.id],
    reviewers: [developer1.id, developer4.id],
    lineas_codigo: 145
}

const pullRequest4 : pullRequest = {
    id: 4,
    titulo: "Perf: Optimización dashboard principal",
    estado: "abierto",
    autor: [developer4.id, developer5.id],
    reviewers: [developer2.id],
    lineas_codigo: 89
}

const pullRequest5 : pullRequest = {
    id: 5,
    titulo: "Fix: Error en procesamiento de pagos",
    estado: "emergente",
    autor: [developer5.id],
    reviewers: [developer1.id, developer3.id],
    lineas_codigo: 423
}

const pullRequest6 : pullRequest = {
    id: 6,
    titulo: "Style: Implementación modo oscuro",
    estado: "rechazado",
    autor: [developer6.id],
    reviewers: [developer2.id],
    lineas_codigo: 178
}

let pullRequests: pullRequest[] = [pullRequest1, pullRequest2, pullRequest3, pullRequest4, pullRequest5, pullRequest6];

const proyecto1 : proyecto = {
    id: 1,
    nombre: "Plataforma E-Commerce Empresarial",
    repositorio: repository1.id,
    lista_issues: [1, 2, 4, 5, 7],
    lista_pull_requests: [1, 2, 4, 5],
    equipo_developers: [developer1.id, developer2.id, developer4.id, developer5.id]
}
const developerMap = new Map(developers.map(d =>[d.id, d]));

const obtenerNombresDesarrolladores = (ids: developer["id"][]): string => {
    return ids
        .map(id => developerMap.get(id)?.nombre)
        .filter(Boolean)
        .join(", ");
};

const function_report_team = (proyecto: proyecto) => {
    
    console.log("=== EQUIPO DEL PROYECTO ===");
    for(const dev_id of proyecto.equipo_developers){
        const dev = developerMap.get(dev_id);
        if(dev){
            console.log(`\n  ${dev.nombre}`);
            console.log(`  Rol:         ${dev.rol}`);
            console.log(`  Seniority:   ${dev.seniority}`);
            console.log(`  Tecnologías: ${dev.tecnologias.join(", ")}`);
        }
    }
}

const imprimirPullRequest = (pr: pullRequest) => {
    const nombresAutores = obtenerNombresDesarrolladores(pr.autor);
    const nombresReviewers = obtenerNombresDesarrolladores(pr.reviewers);
    
    console.log(`\n  ${pr.titulo}`);
    console.log(`  Estado:           ${pr.estado}`);
    console.log(`  Autor(es):        ${nombresAutores}`);
    console.log(`  Reviewers:        ${nombresReviewers}`);
    console.log(`  Líneas de código: ${pr.lineas_codigo}`);
};

const function_pull_requests = (proyecto: proyecto, pullRequests: pullRequest[]) => {
    const pullRequestMap = new Map(pullRequests.map(pr => [pr.id, pr]));
    console.log("\n Pull Requests del Proyecto: ");
    
    for(const id_pr of proyecto.lista_pull_requests){
        const pr = pullRequestMap.get(id_pr);
        if(pr) imprimirPullRequest(pr);
    }
}


const mostrarIssue = (issue: issue) => {
    const asignado = developerMap.get(issue.asignado_a)?.nombre || 'Desconocido';
    
    console.log(`\n  ${issue.titulo}`);
    console.log(`  Tipo:        ${issue.tipo}`);
    console.log(`  Prioridad:   ${issue.prioridad}`);
    console.log(`  Estado:      ${issue.estado}`);
    console.log(`  Asignado a:  ${asignado}`);
};

const contarIssuesPorEstado = (issues: issue[]) => {
    const conteo = {
        abierto: 0,
        'en progreso': 0,
        resuelto: 0,
        cerrado: 0
    };
    
    issues.forEach(issue => {
        conteo[issue.estado]++;
    });
    
    return conteo;
};

const contarBugsVsMejoras = (issues: issue[]) => {
    const conteo = { bug: 0, mejora: 0 };
    
    issues.forEach(issue => {
        conteo[issue.tipo]++;
    });
    
    return conteo;
};

const imprimirEstadisticasIssues = (issues: issue[]) => {
    const porEstado = contarIssuesPorEstado(issues);
    console.log("\nPor estado:");
    console.log(`  abierto: ${porEstado.abierto}`);
    console.log(`  en progreso: ${porEstado['en progreso']}`);
    console.log(`  resuelto: ${porEstado.resuelto}`);
    console.log(`  cerrado: ${porEstado.cerrado}`);
    
    const porTipo = contarBugsVsMejoras(issues);
    console.log("\nPor tipo:");
    console.log(`  Bugs: ${porTipo.bug}`);
    console.log(`  Mejoras: ${porTipo.mejora}`);
};

const function_issues = (proyecto: proyecto, issues: issue[]) => {
    const issueMap = new Map(issues.map(issue => [issue.id, issue]));
    const issuesProyecto = proyecto.lista_issues
        .map(id => issueMap.get(id))
        .filter(Boolean) as issue[];
    
    console.log("\n=== ISSUES DEL PROYECTO ===");
    issuesProyecto.forEach(mostrarIssue);
    
    console.log("\n=== ESTADÍSTICAS ===");
    imprimirEstadisticasIssues(issuesProyecto);
}

const detectarPRsConMuchasLineas = (pullRequests: pullRequest[], umbral: number = 500) => {
    return pullRequests.filter(pr => pr.estado === 'abierto' && pr.lineas_codigo > umbral);
};

const detectarIssuesCriticosSinAsignar = (issues: issue[]) => {
    return issues.filter(issue => 
        issue.prioridad >= 4 && 
        issue.estado !== 'cerrado' && 
        issue.estado !== 'resuelto'
    );
};

const contarAsignacionesPorDesarrollador = (issues: issue[], pullRequests: pullRequest[]) => {
    const conteo: Record<developer["id"], number> = {};
    
    issues.forEach(issue => {
        conteo[issue.asignado_a] = (conteo[issue.asignado_a] || 0) + 1;
    });
    
    pullRequests.forEach(pr => {
        pr.autor.forEach(autorId => {
            conteo[autorId] = (conteo[autorId] || 0) + 1;
        });
    });
    
    return conteo;
};

const mostrarAlertasProyecto = (proyecto: proyecto, issues: issue[], pullRequests: pullRequest[]) => {
    const issueMap = new Map(issues.map(issue => [issue.id, issue]));
    const pullRequestMap = new Map(pullRequests.map(pr => [pr.id, pr]));
    
    const issuesProyecto = proyecto.lista_issues
        .map(id => issueMap.get(id))
        .filter(Boolean) as issue[];
    
    const pullRequestsProyecto = proyecto.lista_pull_requests
        .map(id => pullRequestMap.get(id))
        .filter(Boolean) as pullRequest[];
    
    console.log("\n=== ALERTAS DEL PROYECTO ===");
    
    const prsGrandes = detectarPRsConMuchasLineas(pullRequestsProyecto);
    if (prsGrandes.length > 0) {
        console.log("\nPull Requests con muchas lineas:");
        prsGrandes.forEach(pr => {
            console.log(`  ${pr.titulo}: ${pr.lineas_codigo} lineas`);
        });
    }
    
    const issuesCriticos = detectarIssuesCriticosSinAsignar(issuesProyecto);
    if (issuesCriticos.length > 0) {
        console.log("\nIssues criticos sin resolver:");
        issuesCriticos.forEach(issue => {
            console.log(`  ${issue.titulo} (Prioridad: ${issue.prioridad})`);
        });
    }
    
    const asignaciones = contarAsignacionesPorDesarrollador(issuesProyecto, pullRequestsProyecto);
    const sobrecargados: Array<[string, number]> = [];
    
    for (const devId in asignaciones) {
        const count = asignaciones[devId];
        if (count && count > 3) {
            sobrecargados.push([devId, count]);
        }
    }
    
    if (sobrecargados.length > 0) {
        console.log("\nDesarrolladores con muchas asignaciones:");
        sobrecargados.forEach(([devId, count]) => {
            const nombre = developerMap.get(Number(devId))?.nombre || 'Desconocido';
            console.log(`  ${nombre}: ${count} asignaciones`);
        });
    }
};

function_report_team(proyecto1);
function_pull_requests(proyecto1, pullRequests);
function_issues(proyecto1, issues);
mostrarAlertasProyecto(proyecto1, issues, pullRequests);