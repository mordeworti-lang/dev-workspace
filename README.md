# Developer Management System

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

## Overview

A comprehensive TypeScript-based system for managing software development teams, projects, issues, and pull requests. This system provides detailed analytics, team reporting, and project monitoring capabilities designed for modern software development workflows.

## Features

### Core Functionality
- **Team Management**: Complete developer profiles with roles, seniority levels, and technology stacks
- **Project Tracking**: Repository and project management with issue and PR integration
- **Issue Management**: Bug tracking and feature requests with priority-based categorization
- **Pull Request Monitoring**: Code review workflow with line count tracking and status management
- **Analytics Dashboard**: Comprehensive statistics and alerts for project health

### Analytics & Reporting
- **Team Composition Analysis**: Role distribution and seniority breakdown
- **Issue Statistics**: Status tracking by type (bugs vs improvements) and priority levels
- **Performance Metrics**: Pull request size analysis and developer workload monitoring
- **Alert System**: Automated detection of critical issues and team overload situations

### Technical Features
- **Type-Safe Architecture**: Full TypeScript implementation with strict type checking
- **Modular Design**: Clean separation of concerns with reusable components
- **Data Validation**: Comprehensive type definitions for all entities
- **Scalable Structure**: Designed for easy extension and maintenance

## Technology Stack

- **Language**: TypeScript 6.0.2
- **Target Runtime**: Node.js
- **Build System**: TypeScript Compiler
- **Version Control**: Git
- **Package Manager**: npm

## Project Structure

```
twoClass_ts/
├── src/
│   └── index.ts          # Main application logic
├── dist/                 # Compiled JavaScript output
├── .gitignore           # Git ignore configuration
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md           # This documentation
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mordeworti-lang/dev-workspace.git
   cd dev-workspace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Run the application**
   ```bash
   npm start
   ```

### Development Mode

For development with automatic compilation and execution:
```bash
npm run dev
```

## Data Models

### Developer
```typescript
interface developer {
    readonly id: PropertyKey;
    nombre: string;
    rol: "backend" | "frontend" | "fullstack" | "devops";
    seniority: "junior" | "semi senior" | "senior";
    tecnologias: [string, ...string[]];
    disponibilidad: boolean;
}
```

### Project
```typescript
interface proyecto {
    readonly id: PropertyKey;
    nombre: string;
    repositorio: repository["id"];
    lista_issues: issue["id"][];
    lista_pull_requests: pullRequest["id"][];
    equipo_developers: developer["id"][];
}
```

### Issue & Pull Request
- **Issues**: Bug tracking and feature management with priority-based workflows
- **Pull Requests**: Code review management with author/reviewer assignment and line tracking

## Usage Examples

### Basic Team Reporting
```typescript
function_report_team(proyecto1);
```

### Issue Analysis
```typescript
function_issues(proyecto1, issues);
```

### Alert Monitoring
```typescript
mostrarAlertasProyecto(proyecto1, issues, pullRequests);
```

## Sample Output

The system generates comprehensive reports including:
- Team member profiles with technology stacks
- Pull request status and code review assignments
- Issue tracking with priority and status breakdown
- Automated alerts for critical issues and workload management

## Configuration

### TypeScript Settings
- **Target**: ES6
- **Module System**: CommonJS
- **Strict Mode**: Enabled
- **Output Directory**: `./dist`
- **Source Directory**: `./src`

### Available Scripts
- `npm run build`: Compile TypeScript to JavaScript
- `npm start`: Execute the compiled application
- `npm run dev`: Compile and run in development mode

## Contributing

This project was developed as part of a collaborative software engineering initiative.

### Development Team

**Lead Developers:**
- **Jhon Stiven Zuluaga Jaramillo** - *Backend Architecture & System Design*
- **Juan José Giraldo Muñoz** - *Frontend Integration & Data Analytics*

### Development Philosophy
- **Code Quality**: Strict TypeScript typing and comprehensive error handling
- **Maintainability**: Clean code principles and modular architecture
- **Performance**: Optimized data structures and efficient algorithms
- **Documentation**: Comprehensive inline documentation and external guides

## License

This project is licensed under the ISC License - see the package.json file for details.

## Future Enhancements

### Planned Features
- [ ] Web-based dashboard interface
- [ ] Real-time collaboration features
- [ ] Advanced analytics and machine learning insights
- [ ] Integration with popular project management tools
- [ ] Multi-project support
- [ ] Role-based access control
- [ ] API endpoints for external integrations

### Technical Improvements
- [ ] Database persistence layer
- [ ] RESTful API implementation
- [ ] Caching mechanisms
- [ ] Unit testing framework
- [ ] CI/CD pipeline integration
- [ ] Docker containerization

## Support

For questions, issues, or contributions regarding this project, please refer to the GitHub repository issues section or contact the development team directly.

---

**© 2026 Developer Management System** - Built with passion by [Jhon Stiven Zuluaga Jaramillo](https://github.com/mordeworti-lang) and [Juan José Giraldo Muñoz](https://github.com/juanjosegiraldo)
