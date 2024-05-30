# StateJS

`StateJS` es una biblioteca que proporciona una implementación sencilla para gestionar el estado en JavaScript.

### `State(Any current_value)`

Con la función State, puedes crear y manipular fácilmente variables de estado. En el ejemplo dado, se utiliza para crear una variable global llamada counter con un valor inicial de 0.

Uso básico:
counter.get(): Obtiene el valor actual de la variable.
counter.set(x): Actualiza el valor de la variable.
counter.listen(callback(previous_value, new_value)): Permite escuchar cambios en la variable y ejecutar una función de devolución de llamada cuando se produce un cambio. Devuelve un identificador del evento.
counter.unlisten(listener): Permite dejar de escuchar cambios en la variable eliminando el callback asociado.
Ejemplo de uso práctico:

```javascript
import { State } from "https://cdn.devetty.es/StateJS/js";

// variable global
const counter = State(0); // counter.get(), counter.set(x), counter.listen(callback(previous_value, new_value))
setInterval(() => counter.set(counter.get() + 1), 1000);

// en cualquier otro controlador
const listener = counter.listen((old_value, new_value) => console.log({ old_value, new_value }));

/*
    {"old_value":0,"new_value":1}
    {"old_value":1,"new_value":2}
    {"old_value":2,"new_value":3}
    {"old_value":3,"new_value":4}
    {"old_value":4,"new_value":5}
    {"old_value":5,"new_value":6}
    {"old_value":6,"new_value":7}
    {"old_value":7,"new_value":8}
    {"old_value":8,"new_value":9}
*/

// Eliminar oyente
counter.unlisten(listener);
```
