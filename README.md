Estrutura completa de pastas e arquivos:

📦 agendamento-ia
├─ 📂 .env.local            # Variáveis de ambiente locais
├─ 📂 .github/workflows     # CI/CD (opcional)
├─ 📂 .husky                # Git hooks (opcional)
├─ 📂 public
│  ├─ 📂 assets
│  │  ├─ 📂 icons           # Ícones SVG
│  │  └─ 📂 images          # Imagens otimizadas
│  └─ 📜 robots.txt
│
├─ 📂 src
│  ├─ 📂 app
│  │  ├─ 📂 (auth)          # Rotas de autenticação
│  │  │  ├─ 📂 login
│  │  │  └─ 📂 signup
│  │  ├─ 📂 dashboard       # Área logada
│  │  │  ├─ 📂 client
│  │  │  └─ 📂 professional
│  │  ├─ 📂 api            # API routes
│  │  │  ├─ 📂 auth
│  │  │  │  └─ 📂 [...nextauth]
│  │  │  └─ 📂 appointments
│  │  ├─ 📂 components      # Componentes compartilhados
│  │  │  ├─ 📂 UI
│  │  │  │  ├─ 📜 Button.tsx
│  │  │  │  ├─ 📜 Card.tsx
│  │  │  │  └─ 📜 Skeleton.tsx
│  │  │  ├─ 📂 Calendar
│  │  │  │  ├─ 📜 CalendarPicker.tsx
│  │  │  │  └─ 📜 TimeSlot.tsx
│  │  │  ├─ 📂 Layout
│  │  │  │  ├─ 📜 Header.tsx
│  │  │  │  └─ 📜 Footer.tsx
│  │  │  └─ 📂 Notifications
│  │  │     └─ 📜 Toast.tsx
│  │  ├─ 📂 context         # Contextos globais
│  │  │  └─ 📜 AuthContext.tsx
│  │  ├─ 📂 hooks           # Custom hooks
│  │  │  ├─ 📜 useAuth.ts
│  │  │  └─ 📜 useSchedule.ts
│  │  ├─ 📂 lib             # Utilitários e helpers
│  │  │  ├─ 📜 api.ts       # Configuração do cliente HTTP
│  │  │  └─ 📜 validators.ts
│  │  ├─ 📂 styles          # Estilos globais
│  │  │  └─ 📜 globals.css
│  │  ├─ 📜 layout.tsx      # Layout principal
│  │  └─ 📜 page.tsx        # Página inicial
│  │
│  ├─ 📂 types              # Tipos TypeScript
│  │  └─ 📜 index.d.ts
│  │
│  └─ 📜 middleware.ts      # Segurança e redirecionamentos
│
├─ 📜 .env.example          # Template de variáveis de ambiente
├─ 📜 .gitignore
├─ 📜 next.config.js        # Configuração do Next.js
├─ 📜 tailwind.config.js    # Configuração do Tailwind
├─ 📜 postcss.config.js     # Processamento CSS
├─ 📜 tsconfig.json         # Configuração TypeScript
└─ 📜 package.json
```

**Principais pontos da estrutura:**

1. **Rotas Organizadas:**
- `(auth)` - Grupo de rotas de autenticação
- `dashboard` - Área protegida para usuários logados
- `api` - Endpoints para integração com backend

2. **Componentização Estratégica:**
- Separação clara entre componentes UI e lógica de negócio
- Componentes complexos divididos em subcomponentes
- Hooks customizados para reutilização de lógica

3. **Segurança:**
- Middleware centralizado para proteção de rotas
- Separação de contextos de autenticação
- Environment variables para dados sensíveis

4. **Estilização:**
- Configuração estendida do Tailwind
- Classes utilitárias globais
- Animações customizadas

5. **Tipagem Forte:**
- Tipos globais na pasta `types`
- Interfaces para dados da API
- Validação de props com TypeScript

**Exemplo de arquivo de tipos (`src/types/index.d.ts`):**

```typescript
declare global {
  type UserRole = 'client' | 'professional' | 'admin'
  
  interface Appointment {
    id: string
    date: Date
    service: string
    user: {
      name: string
      email: string
    }
    status: 'pending' | 'confirmed' | 'canceled'
  }

  interface AuthContextType {
    user: User | null
    signIn: (credentials: Credentials) => Promise<void>
    signOut: () => void
  }
}

Essa estrutura oferece:

1. **Escalabilidade:** Facilita adição de novas features
2. **Manutenibilidade:** Separação clara de responsabilidades
3. **Performance:** Code splitting automático do Next.js
4. **Segurança:** Configurações centralizadas de proteção
5. **Consistência:** Design system unificado