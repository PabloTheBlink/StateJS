/**
 * Crea un objeto de estado con métodos para gestionar y notificar cambios.
 * @param {any} currentValue - Valor inicial del estado.
 * @returns {Object} - Objeto de estado con métodos set, get y listen.
 */
export function State(currentValue) {
  return new (function () {
    /**
     * Valor actual del estado.
     * @type {any}
     */
    let value = currentValue;

    /**
     * Lista de oyentes (listeners) que se ejecutarán cuando cambie el estado.
     * @type {Array<Function>}
     */
    let listeners = {};

    /**
     * Establece un nuevo valor para el estado y notifica a los oyentes.
     * @param {any} new_value - Nuevo valor del estado.
     */
    this.set = function (new_value) {
      if (value === new_value) return;
      const old_value = value;
      value = new_value;
      notifyListeners(old_value, new_value);
    };

    /**
     * Obtiene el valor actual del estado.
     * @returns {any} - Valor actual del estado.
     */
    this.get = function () {
      return value;
    };

    /**
     * Agrega un oyente (listener) que se ejecutará cuando cambie el estado.
     * @param {Function} callback - Función a ejecutar cuando cambie el estado.
     */
    this.listen = function (callback) {
      const uid = crypto.randomUUID();
      listeners[uid] = callback;
      return uid;
    };

    /**
     * Elimina un oyente (listener).
     * @param {Function} callback - Función a ejecutar cuando cambie el estado.
     */
    this.unlisten = function (uid) {
      delete listeners[uid];
    };

    /**
     * Notifica a los oyentes sobre el cambio en el estado.
     */
    const notifyListeners = function (previous_value, new_value) {
      for (let uid in listeners) {
        listeners[uid](previous_value, new_value);
      }
    };
  })();
}
