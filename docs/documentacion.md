# API
URL base: `api/v1.0`
## Usuarios
### GET /usuarios/
Devuelve todos los usuarios del sitio web
#### Respuestas
- 200 OK
```
[
    {
        "id": 1,
        "nombre": "usuario",
        "rol": "admin" 
    }
]
```

### GET /usuarios/{id}
Devuelve el usuario con esa id
#### Parámetros
Path
- {id} - `int` - ID del usuario

##Sesión

#### POST /sesión/
Crea una sesión en el servidor

Body:


- nombre`*` - `string` - Nombre del usuario
- contrasenya`*` - `string` - Contraseña del usuario

Respuestas:
- 200 ok
---
{
    "id": 1,
    "nombre": "admin",
    "rol": "admin"
}
---
- 401 no autorizado

#### GET /sesión/

#### DELETE /sesión/