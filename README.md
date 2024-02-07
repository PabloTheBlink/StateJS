# StateJS

`StateJS` es una biblioteca que proporciona una implementación sencilla para gestionar el estado en JavaScript.

### `State(Any current_value)`

Con la función State, puedes crear y manipular fácilmente variables de estado. En el ejemplo dado, se utiliza para crear una variable global llamada counter con un valor inicial de 0.

Uso básico:
counter.get(): Obtiene el valor actual de la variable.
counter.set(x): Actualiza el valor de la variable.
counter.listen(callback(previous_value, new_value)): Permite escuchar cambios en la variable y ejecutar una función de devolución de llamada cuando se produce un cambio.
Ejemplo de uso práctico:

```javascript
import { State } from "https://cdn.devetty.es/StateJS/js";

// variable global
const counter = State(0); // counter.get(), counter.set(x), counter.listen(callback(previous_value, new_value))
setInterval(() => counter.set(counter.get() + 1), 1000);

// en cualquier otro controlador
const listener = counter.listen((x, y) => console.log({ x, y }));

/*
    {"x":0,"y":1}
    {"x":1,"y":2}
    {"x":2,"y":3}
    {"x":3,"y":4}
    {"x":4,"y":5}
    {"x":5,"y":6}
    {"x":6,"y":7}
    {"x":7,"y":8}
    {"x":8,"y":9}
*/

// Eliminar oyente
counter.unlisten(listener);
```
