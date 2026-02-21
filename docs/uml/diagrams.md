# Employee Management System UML

## 1) System Component Diagram

```mermaid
flowchart LR
    A[AppComponent] --> B[RouterOutlet]
    A --> C[SideBarComponent]

    B --> D[LoginComponent]
    B --> E[Admin Feature Routes]
    B --> F[HR Feature Routes]
    B --> G[Manager Feature Routes]
    B --> H[Employee Feature Routes]

    E --> E1[AdminDashboardComponent]
    F --> F1[HrDashboardComponent]
    G --> G1[ManagerDashboardComponent]
    H --> H1[EmployeeDashboardComponent]

    E --> I[CalendarComponent]
    E --> J[PayrollComponent]
    E --> K[SurveyComponent]
    E --> L[FeaturePlaceholderComponent]

    F --> I
    F --> J
    F --> K
    F --> L

    G --> I
    G --> J
    G --> K
    G --> L

    H --> I
    H --> J
    H --> K
    H --> L

    M[AuthGuard] --> E
    M --> F
    M --> G
    M --> H

    N[RoleGuard] --> E
    N --> F
    N --> G
    N --> H
```

## 2) Class Diagram (Core + Shared + Auth)

```mermaid
classDiagram
    class AppComponent {
      +showSidebar() boolean
    }

    class SideBarComponent {
      -sessionService: SessionService
      -authService: AuthService
      +sections: MenuSection[]
      +ngOnInit() void
      +toggle(item: MenuItem) void
    }

    class LoginComponent {
      -authDataService: AuthDataService
      -sessionService: SessionService
      +loginForm
      +submit() void
    }

    class AuthService {
      -TOKEN_KEY: string
      +login(credentials) Observable
      +getRoles() string[]
      +isLoggedIn() boolean
      +logout() void
    }

    class AuthGuard {
      -auth: AuthService
      +canActivate() boolean
    }

    class RoleGuard {
      -auth: AuthService
      +canActivate(route) boolean
    }

    class HttpService {
      +addRequestHttpHeader() HttpHeaders
      +addRequestHttpParams(params) HttpParams
      +handleResponse(res) any
      +handleError(error) Observable
    }

    class AuthDataService {
      +userSecurityLogin(req) Observable
    }

    class ManagerDataService {
      +getAllManagerEmployees(managerId) Observable
    }

    class SessionService {
      -_roles: string[]
      +roles: string[]
    }

    class JwtInterceptor {
      +intercept(req,next) Observable
    }

    class MenuSection
    class MenuItem

    AppComponent --> AuthService
    AppComponent --> SideBarComponent
    LoginComponent --> AuthDataService
    LoginComponent --> SessionService
    SideBarComponent --> SessionService
    SideBarComponent --> AuthService
    SideBarComponent --> MenuSection
    SideBarComponent --> MenuItem
    AuthGuard --> AuthService
    RoleGuard --> AuthService
    AuthDataService --|> HttpService
    ManagerDataService --|> HttpService
```

## 3) Login + Role-Based Navigation Sequence

```mermaid
sequenceDiagram
    participant U as User
    participant L as LoginComponent
    participant ADS as AuthDataService
    participant API as /auth/login API
    participant SS as SessionService
    participant R as Router

    U->>L: Submit username/password
    L->>L: Validate form
    L->>ADS: userSecurityLogin(payload)
    ADS->>API: POST /auth/login
    API-->>ADS: token + roles
    ADS-->>L: response

    L->>L: localStorage.setItem("token", token)
    L->>SS: roles = response.roles

    alt role contains ADMIN
      L->>R: navigate('/admin')
    else role contains HR
      L->>R: navigate('/hr')
    else role contains MANAGER
      L->>R: navigate('/manager')
    else role contains EMPLOYEE
      L->>R: navigate('/employee')
    end
```

## 4) Route + Guard Diagram

```mermaid
flowchart TD
    S[/ /] -->|redirect| LG[/login/]
    LG --> LC[LoginComponent]

    A[/admin/**/] --> AG[AuthGuard]
    A --> RG[RoleGuard roles: ADMIN]
    A --> AR[ADMIN_ROUTES]

    H[/hr/**/] --> AG
    H --> RG2[RoleGuard roles: HR]
    H --> HR[HR_ROUTES]

    M[/manager/**/] --> AG
    M --> RG3[RoleGuard roles: MANAGER]
    M --> MR[MANAGER_ROUTES]

    E[/employee/**/] --> AG
    E --> RG4[RoleGuard roles: EMPLOYEE]
    E --> ER[EMPLOYEE_ROUTES]
```

## Source Files

- `src/app/app.routes.ts`
- `src/app/core/guards/auth.guard.ts`
- `src/app/core/guards/role.guard.ts`
- `src/app/auth/components/login/login.component.ts`
- `src/app/shared/components/side-bar/side-bar.component.ts`
- `src/app/shared/services/HttpService.ts`
- `src/app/shared/services/auth-data.service.ts`
- `src/app/core/services/auth.service.ts`
