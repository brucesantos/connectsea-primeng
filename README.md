# PDA Dashboard - Apollo NG

Uma aplicação Angular moderna para gerenciamento de Proforma Disbursement Accounts (PDAs) usando componentes do PrimeNG.

## 🚀 Funcionalidades

- **Dashboard Responsivo**: Interface moderna com sidebar de navegação
- **Tabela de Dados**: Exibição de PDAs com paginação e busca
- **Navegação Intuitiva**: Menu lateral organizado por categorias
- **Ações em Tempo Real**: Botões para editar, excluir, download, upload
- **Design Moderno**: Interface limpa e profissional

## 📋 Estrutura do Projeto

```
src/app/
├── pda-dashboard.component.ts    # Lógica do componente
├── pda-dashboard.component.html  # Template HTML
├── pda-dashboard.component.css   # Estilos CSS
├── app.routes.ts                 # Configuração de rotas
└── app.html                      # Template principal
```

## 🛠️ Tecnologias Utilizadas

- **Angular 17+**: Framework principal
- **PrimeNG**: Componentes de UI
- **TypeScript**: Linguagem de programação
- **CSS3**: Estilização moderna

## 🎨 Componentes PrimeNG Utilizados

- `p-table`: Tabela de dados com paginação
- `p-button`: Botões de ação
- `p-inputtext`: Campo de busca
- `p-tag`: Tags de status
- `p-tooltip`: Tooltips informativos

## 🚀 Como Executar

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Executar em modo de desenvolvimento**:
   ```bash
   npm start
   ```

3. **Acessar a aplicação**:
   ```
   http://localhost:4200
   ```

## 📱 Funcionalidades da Interface

### Sidebar de Navegação
- **Quotations**: Gerenciamento de cotações
- **Proforma DAs**: Seção principal com PDAs ativos
- **Disbursement Accounts**: Contas de desembolso

### Header da Tabela
- **Título**: "Table's Name"
- **Busca**: Campo de pesquisa com filtro
- **Ações**: Download, Upload, Grid View, New

### Tabela de Dados
- **Colunas**: Cod., Client, Vessel, Port, Cargo, Voyage, Call Status, PDA Status, Last Upd., Balance, Actions
- **Paginação**: Controles de navegação
- **Status Tags**: Indicadores visuais de status
- **Ações**: Botões de editar e excluir

## 🎯 Estrutura de Dados

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

## 🔧 Personalização

### Cores
O projeto usa um esquema de cores moderno baseado em:
- **Primária**: `#4f46e5` (Indigo)
- **Secundária**: `#7c3aed` (Purple)
- **Neutra**: Tons de cinza

### Responsividade
A interface é totalmente responsiva e se adapta a:
- **Desktop**: Layout completo com sidebar
- **Tablet**: Sidebar compacta
- **Mobile**: Layout vertical

## 📝 Próximos Passos

- [ ] Implementar funcionalidade de busca
- [ ] Adicionar filtros avançados
- [ ] Integração com backend
- [ ] Autenticação de usuários
- [ ] Exportação de dados
- [ ] Notificações em tempo real

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
