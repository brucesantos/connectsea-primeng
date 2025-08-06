# ConnectSea PrimeNG - Apollo Template

Uma aplicação Angular moderna para gerenciamento de cotações e Proforma Disbursement Accounts (PDAs) baseada no **template Apollo da PrimeNG**.

## 🚀 Tecnologias Utilizadas

- **Angular 20** - Framework principal (versão mais recente)
- **PrimeNG 20** - Biblioteca de componentes UI
- **Template Apollo** - Template oficial da PrimeNG com mais componentes
- **Tailwind CSS** - Framework CSS utilitário
- **TypeScript** - Linguagem de programação
- **SCSS** - Pré-processador CSS

## 📋 Estrutura do Projeto

### **🏗️ Arquitetura Principal**

```
src/
├── app/
│   ├── layout/                 # Layout principal
│   │   ├── components/         # Componentes de layout
│   │   │   ├── app.layout.ts   # Layout principal
│   │   │   ├── app.sidebar.ts  # Barra lateral
│   │   │   ├── app.topbar.ts   # Barra superior
│   │   │   ├── app.menu.ts     # Menu de navegação
│   │   │   └── app.configurator.ts # Configurador de tema
│   │   └── service/            # Serviços de layout
│   ├── pages/                  # Páginas da aplicação
│   │   ├── dashboards/         # Dashboards
│   │   │   ├── ecommercedashboard.ts
│   │   │   ├── bankingdashboard.ts
│   │   │   └── pda/           # Dashboard PDA personalizado
│   │   ├── auth/              # Autenticação
│   │   ├── ecommerce/         # E-commerce
│   │   ├── uikit/             # Componentes UI
│   │   └── blocks/            # Blocos reutilizáveis
│   ├── apps/                  # Aplicações
│   │   ├── chat/              # Sistema de chat
│   │   ├── mail/              # Sistema de email
│   │   ├── kanban/            # Quadro Kanban
│   │   ├── tasklist/          # Lista de tarefas
│   │   ├── files/             # Gerenciador de arquivos
│   │   └── blog/              # Sistema de blog
│   └── types/                 # Tipos TypeScript
├── assets/                    # Assets da aplicação
│   ├── layout/               # Estilos de layout
│   └── demo/                 # Dados de demonstração
└── public/                   # Arquivos públicos
    └── demo/                 # Imagens e dados demo
```

### **🎯 Funcionalidades Principais**

#### **Dashboards Disponíveis:**
- **E-commerce Dashboard** - Dashboard de vendas
- **Banking Dashboard** - Dashboard bancário
- **PDA Dashboard** - Dashboard personalizado para seu negócio

#### **Menu Customizado (Adaptado para seu negócio):**
```typescript
- Quotations (Cotações)
  ├── Quotations
  ├── Templates
  ├── Clients
  └── Configurations

- Proforma DAs
  ├── PDAs
  ├── Expenses
  ├── Remittances
  └── Configurations

- Disbursement Accounts
  ├── DAs
  ├── Debit Notes
  └── Periodic DAs
```

## 🚀 Como Executar

### **1. Instalar Dependências**
```bash
npm install
```

### **2. Iniciar Desenvolvimento (RECOMENDADO)**
```bash
ng dev
```
**✅ Vantagens do `ng dev`:**
- Build 3x mais rápido
- Hot reload instantâneo
- Melhor performance
- Menos uso de memória
- Compatível com Angular 20

### **3. Alternativa (Compatibilidade)**
```bash
npm start
```

### **4. Acessar a Aplicação**
```
http://localhost:4200
```

## 🎨 Tema e Estilização

### **Tema Apollo da PrimeNG**
- **Modo Escuro/Claro**

### **Configuração do Tema**
```typescript
// src/app/app.config.ts
import Aura from '@primeng/themes/aura';

providePrimeNG({ 
  theme: { 
    preset: Aura, 
    options: { darkModeSelector: '.app-dark' } 
  } 
})
```

## 📱 Funcionalidades da Interface

### **Layout Responsivo**
- **Sidebar** - Navegação principal
- **Topbar** - Barra superior com ações
- **Content Area** - Área de conteúdo principal
- **Configurator** - Configurador de tema

### **Componentes PrimeNG Utilizados**
- `p-table` - Tabelas de dados
- `p-button` - Botões de ação
- `p-inputtext` - Campos de entrada
- `p-tag` - Tags de status
- `p-tooltip` - Tooltips
- `p-paginator` - Paginação
- `p-chart` - Gráficos

## 🔧 Personalização

### **Para Adicionar Novas Páginas:**
1. **Criar componente** em `src/app/pages/`
2. **Adicionar rota** em `src/app.routes.ts`
3. **Adicionar menu** em `src/app/layout/components/app.menu.ts`

### **Para Modificar o Layout:**
- **Sidebar:** `src/app/layout/components/app.sidebar.ts`
- **Topbar:** `src/app/layout/components/app.topbar.ts`
- **Menu:** `src/app/layout/components/app.menu.ts`

### **Para Modificar o Tema:**
- **Configuração:** `src/app/app.config.ts`
- **Configurador:** `src/app/layout/components/app.configurator.ts`

## 📊 Estrutura de Dados

### **Interface PDA**
```typescript
interface PDARecord {
  cod: string;           // Código do PDA
  client: string;        // Cliente
  vessel: string;        // Navio
  port: string;          // Porto
  cargo: string;         // Carga
  voyage: string;        // Viagem
  callStatus: string;    // Status da chamada
  pdaStatus: string;     // Status do PDA
  lastUpdate: string;    // Última atualização
  balance: string;       // Saldo
}
```

## 🎯 Por que o Template Apollo?

O **template Apollo da PrimeNG** foi escolhido porque oferece:

- **✅ Base Sólida** - Estrutura bem organizada
- **✅ Componentes Prontos** - Mais de 80 componentes
- **✅ Temas Profissionais** - Design moderno
- **✅ Responsividade** - Funciona em todos os dispositivos
- **✅ Documentação Completa** - Fácil de customizar
- **✅ Suporte Oficial** - Mantido pela PrimeTek

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido com Angular 20 + PrimeNG Apollo Template** 🚀
