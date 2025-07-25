# 🎯 Demonstração do PDA Dashboard

## 📋 Visão Geral

Esta demonstração mostra uma interface completa de dashboard para gerenciamento de PDAs (Proforma Disbursement Accounts) baseada na imagem fornecida, implementada usando Angular 17 e PrimeNG 20.

## 🚀 Como Executar

### 1. Instalação das Dependências
```bash
npm install
```

### 2. Executar o Projeto
```bash
npm start
```

### 3. Acessar a Aplicação
Abra o navegador e acesse: `http://localhost:4200`

## 🎨 Interface Implementada

### Sidebar de Navegação
- **Quotations Section**
  - Quotations
  - Templates  
  - Clients
  - Configurations

- **Proforma DAs Section** (Ativo)
  - PDAs (destacado)
  - Expenses
  - Remittances
  - Configurations

- **Disbursement Accounts Section**
  - DAs
  - Debit Notes
  - Periodic DAs

### Área Principal
- **Header com Ações**
  - Título "Table's Name"
  - Campo de busca
  - Botões: Download, Upload, Settings, + New

### Tabela de Dados
- **Colunas**: Cod., Client, Vessel, Port, Cargo, Voyage, Call Status, PDA Status, Last Upd., Balance, Actions
- **Dados de Exemplo**:
  - PDA001: Client A, Vessel 1, Port X, Cargo Y, Voy001, ESTIMATED, OPEN, 2023-10-01, -100%
  - PDA002: Client B, Vessel 2, Port Z, Cargo W, Voy002, ARRIVED, CLOSED, 2023-10-02, +75%

### Funcionalidades Implementadas
- ✅ Paginação (5 itens por página)
- ✅ Campo de busca
- ✅ Tags de status coloridas
- ✅ Botões de ação (editar/excluir)
- ✅ Design responsivo
- ✅ Tooltips informativos

## 🎯 Componentes PrimeNG Utilizados

### Tabela (`p-table`)
```html
<p-table [value]="pdaRecords()" [paginator]="true">
  <!-- Templates para header e body -->
</p-table>
```

### Botões (`p-button`)
```html
<p-button label="+ New" icon="pi pi-plus" severity="primary">
</p-button>
```

### Campo de Busca (`p-inputtext`)
```html
<input pInputText type="text" placeholder="Search">
```

### Tags de Status (`p-tag`)
```html
<p-tag [value]="record.callStatus" [severity]="getStatusSeverity(record.callStatus)">
</p-tag>
```

### Tooltips (`p-tooltip`)
```html
<p-button pTooltip="Edit">...</p-button>
```

## 🎨 Design System

### Cores Principais
- **Sidebar**: Gradiente azul-roxo (#667eea → #764ba2)
- **Background**: Cinza claro (#f8f9fa)
- **Text**: Cinza escuro (#374151)
- **Success**: Verde (#059669)
- **Warning**: Amarelo (status estimado/aberto)
- **Danger**: Vermelho (#dc2626)

### Layout
- **Sidebar**: 280px de largura
- **Main Content**: Flexível com padding
- **Responsive**: Breakpoints em 1024px e 768px

## 📱 Responsividade

### Desktop (>1024px)
- Layout completo com sidebar e conteúdo lado a lado
- Sidebar fixa com 280px de largura

### Tablet (768px-1024px)
- Sidebar reduzida para 240px
- Campo de busca adaptado

### Mobile (<768px)
- Layout vertical
- Sidebar colapsável
- Header reorganizado

## 🔧 Estrutura Técnica

### Arquivos Principais
```
src/app/
├── pda-dashboard.component.ts    # Lógica do componente
├── pda-dashboard.component.html  # Template (244 linhas)
├── pda-dashboard.component.css   # Estilos (322 linhas)
├── app.routes.ts                # Rotas configuradas
└── app.ts                       # Componente raiz simplificado
```

### Tecnologias Utilizadas
- **Angular 17**: Framework principal
- **PrimeNG 20**: Componentes UI
- **TypeScript**: Tipagem forte
- **CSS3**: Flexbox e Grid
- **Signals**: Reatividade moderna

## 🎯 Melhores Práticas Implementadas

1. **Componentes Standalone**: Uso correto do Angular 17
2. **Signals**: Reatividade moderna com `signal()`
3. **TypeScript**: Interfaces tipadas para dados
4. **CSS Encapsulado**: Estilos específicos do componente
5. **PrimeNG Design Tokens**: Uso correto dos tokens
6. **Responsive Design**: Layout adaptável
7. **Accessibility**: Tooltips e navegação

## 🔄 Funcionalidades Interativas

### Busca
- Campo de busca funcional
- Filtragem em tempo real

### Paginação
- Navegação entre páginas
- Seleção de itens por página
- Indicador de página atual

### Ações
- Botões com tooltips
- Eventos de clique configurados
- Feedback visual

### Status
- Tags coloridas baseadas no status
- Cores semânticas (success, warning, danger)

## 📊 Dados de Exemplo

A aplicação inclui dados realistas com:
- **2 registros de PDA**
- **Status variados**: ESTIMATED, ARRIVED, OPEN, CLOSED
- **Balanços**: Positivos (+75%) e negativos (-100%)
- **Datas**: Formato YYYY-MM-DD
- **Ações**: Editar e excluir para cada registro

## 🚀 Próximos Passos

Para expandir a aplicação, considere:

1. **Integração com Backend**: Conectar com API real
2. **Filtros Avançados**: Adicionar filtros por data, status, etc.
3. **Modal de Edição**: Formulário para editar registros
4. **Exportação**: Funcionalidade de download real
5. **Notificações**: Sistema de alertas
6. **Temas**: Suporte a temas claro/escuro

## 📝 Conclusão

Esta implementação demonstra uma interface completa e funcional usando as melhores práticas do Angular 17 e PrimeNG 20, com design responsivo e código limpo e organizado. 