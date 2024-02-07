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
    this.value = currentValue;

    /**
     * Lista de oyentes (listeners) que se ejecutarán cuando cambie el estado.
     * @type {Array<Function>}
     */
    this.listeners = {};

    /**
     * Establece un nuevo valor para el estado y notifica a los oyentes.
     * @param {any} new_value - Nuevo valor del estado.
     */
    this.set = function (new_value) {
      if (this.value === new_value) return;
      this.notifyListeners(this.value, new_value);
      this.value = new_value;
    };

    /**
     * Obtiene el valor actual del estado.
     * @returns {any} - Valor actual del estado.
     */
    this.get = function () {
      return this.value;
    };

    /**
     * Agrega un oyente (listener) que se ejecutará cuando cambie el estado.
     * @param {Function} callback - Función a ejecutar cuando cambie el estado.
     */
    this.listen = function (callback) {
      const uid = crypto.randomUUID();
      this.listeners[uid] = callback;
      return uid;
    };

    /**
     * Elimina un oyente (listener).
     * @param {Function} callback - Función a ejecutar cuando cambie el estado.
     */
    this.unlisten = function (uid) {
      delete this.listeners[uid];
    };

    /**
     * Notifica a los oyentes sobre el cambio en el estado.
     */
    this.notifyListeners = function (previous_value, new_value) {
      for (let uid in this.listeners) {
        this.listeners[uid](previous_value, new_value);
      }
    };
  })();
}
