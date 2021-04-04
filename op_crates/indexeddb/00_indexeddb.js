// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.
"use strict";

// @ts-check
/// <reference path="../../core/lib.deno_core.d.ts" />
/// <reference path="../web/internal.d.ts" />
/// <reference path="../web/lib.deno_web.d.ts" />
/// <reference path="./lib.deno_indexeddb.d.ts" />

((window) => {
  const {
    Deno: { core },
    __bootstrap: { event: { Event }, eventTarget: { EventTarget } },
  } = window;

  /**
   * @template T
   */
  class IDBRequest extends EventTarget {
    /**
     * @type {T}
     */
    get result() {}

    /**
     * @type {DOMException | null}
     */
    get error() {}

    /**
     * @type {IDBObjectStore | IDBIndex | IDBCursor}
     */
    get source() {}

    /**
     * @type {IDBTransaction | null}
     */
    get transaction() {}

    /**
     * @type {IDBRequestReadyState}
     */
    get readyState() {}

    /**
     * @type {((this: IDBRequest<T>, ev: Event) => any) | null}
     */
    get onerror() {}
    set onerror(value) {}

    /**
     * @type {((this: IDBRequest<T>, ev: Event) => any) | null}
     */
    get onsuccess() {}
    set onsuccess(value) {}
  }

  class IDBOpenDBRequest extends IDBRequest {
    /** @type {((this: IDBOpenDBRequest, ev: Event) => any) | null} */
    get onblocked() {}
    set onblocked(value) {}

    /** @type {((this: IDBOpenDBRequest, ev: Event) => any) | null} */
    get onupgradeneeded() {}
    set onupgradeneeded(value) {}
  }

  class IDBVersionChangeEvent extends Event {
    /**
     *
     * @param {string} type
     * @param {IDBVersionChangeEventInit=} eventInitDict
     */
    constructor(type, eventInitDict) {
      super(type, eventInitDict);
    }
    /**
     * @type {number | null}
     */
    get newVersion() {}
    /**
     * @type {number}
     */
    get oldVersion() {}
  }

  class IDBFactory {
    /**
     * @param {any} first
     * @param {any} second
     * @returns {number}
     */
    cmp(first, second) {}

    /**
     * @param {string} name
     * @returns {IDBOpenDBRequest}
     */
    deleteDatabase(name) {}

    /**
     * @param {string} name
     * @param {number=} version
     * @returns {IDBOpenDBRequest}
     */
    open(name, version) {}
  }

  class IDBDatabase extends EventTarget {
    /** @type {string} */
    get name() {}

    /** @type {DOMStringList} */
    get objectStoreNames() {}

    /**
     * @type {((this: IDBDatabase, ev: Event) => any) | null}
     */
    get onabort() {}
    set onabort(value) {}

    /**
     * @type {((this: IDBDatabase, ev: Event) => any) | null}
     */
    get onclose() {}
    set onclose(value) {}

    /**
     * @type {((this: IDBDatabase, ev: Event) => any) | null}
     */
    get onerror() {}
    set onerror(value) {}

    /**
     * @type {((this: IDBDatabase, ev: Event) => any) | null}
     */
    get onversionchange() {}
    set onversionchange(value) {}

    /** @type {number} */
    get version() {}

    /** @returns {void} */
    close() {}

    /**
     * @param {string} name
     * @param {IDBObjectStoreParameters=} options
     * @returns {void}
     */
    createObjectStore(name, options) {}

    /**
     * @param {string} name
     * @returns {void}
     */
    deleteObjectStore(name) {}

    /**
     *
     * @param {string | string[]} storeNames
     * @param {IDBTransactionMode=} mode
     * @returns {IDBTransaction}
     */
    transaction(storeNames, mode) {}
  }

  class IDBObjectStore {
    /** @type {boolean} */
    get autoIncrement() {}

    /** @type {DOMStringList} */
    get indexNames() {}

    /** @type {string | string[]} */
    get keyPath() {}

    /** @type {string} */
    get name() {}
    set name(value) {}

    /** @type {IDBTransaction} */
    get transaction() {}

    /**
     *
     * @param {any} value
     * @param {IDBValidKey=} key
     * @returns {IDBRequest<IDBValidKey>}
     */
    add(value, key) {}

    /** @returns {IDBRequest<undefined>} */
    clear() {}

    /**
     * @param {IDBValidKey | IDBKeyRange} key
     * @return {IDBRequest<number>}
     */
    count(key) {}

    /**
     * @param {string} name
     * @param {string | string[]} keyPath
     * @param {IDBIndexParameters=} options
     * @returns {IDBIndex}
     */
    createIndex(name, keyPath, options) {}

    /**
     * @param {IDBValidKey | IDBKeyRange} key
     * @returns {IDBRequest<undefined>}
     */
    delete(key) {}

    /**
     * @param {string} name
     * @returns {void}
     */
    deleteIndex(name) {}

    /**
     * @param {IDBValidKey | IDBKeyRange} query
     * @returns {IDBRequest<any | undefined>}
     */
    get(query) {}

    /**
     * @param {IDBValidKey | IDBKeyRange | null=} query
     * @param {number=} count
     * @returns {IDBRequest<any[]>}
     */
    getAll(query, count) {}

    /**
     * @param {IDBValidKey | IDBKeyRange | null=} query
     * @param {number=} count
     * @returns {IDBRequest<IDBValidKey[]>}
     */
    getAllKeys(query, count) {}

    /**
     * @param {IDBValidKey | IDBKeyRange} query
     * @returns {IDBRequest<IDBValidKey | undefined>}
     */
    getKey(query) {}

    /**
     * @param {string} name
     * @returns {IDBIndex}
     */
    index(name) {}

    /**
     * @param {IDBValidKey | IDBKeyRange | null=} query
     * @param {IDBCursorDirection=} direction
     * @returns {IDBRequest<IDBCursorWithValue | null>}
     */
    openCursor(query, direction) {}

    /**
     * @param {IDBValidKey | IDBKeyRange | null=} query
     * @param {IDBCursorDirection=} direction
     */
    openKeyCursor(query, direction) {}

    /**
     *
     * @param {any} value
     * @param {IDBValidKey=} key
     * @returns {IDBRequest<IDBValidKey>}
     */
    put(value, key) {}
  }

  class IDBIndex {
    /** @type {string | string[]} */
    get keyPath() {}

    /** @type {boolean} */
    get multiEntry() {}

    /** @type {string} */
    get name() {}
    set name(value) {}

    /** @type {IDBObjectStore} */
    get objectStore() {}

    /** @type {boolean} */
    get unique() {}

    /**
     * @param {IDBValidKey | IDBKeyRange=} key
     * @returns {IDBRequest<number>}
     */
    count(key) {}

    /**
     * @param {IDBValidKey | IDBKeyRange} key
     * @returns {IDBRequest<any | undefined>}
     */
    get(key) {}

    /**
     * @param {IDBValidKey | IDBKeyRange | null=} query
     * @param {number=} count
     * @returns {IDBRequest<any[]>}
     */
    getAll(query, count) {}

    /**
     *
     * @param {IDBValidKey | IDBKeyRange | null=} query
     * @param {number=} count
     * @returns {IDBRequest<IDBValidKey[]>}
     */
    getAllKeys(query, count) {}

    /**
     * @param {IDBValidKey | IDBKeyRange} key
     * @returns {IDBRequest<IDBValidKey | undefined>}
     */
    getKey(key) {}

    /**
     * @param {IDBValidKey | IDBKeyRange | null=} query
     * @param {IDBCursorDirection=} direction
     * @returns {IDBRequest<IDBCursorWithValue | null>}
     */
    openCursor(query, direction) {}

    /**
     * @param {IDBValidKey | IDBKeyRange | null=} query
     * @param {IDBCursorDirection=} direction
     * @returns {IDBRequest<IDBCursor | null}
     */
    openKeyCursor(query, direction) {}
  }

  class IDBKeyRange {
    /** @type {any} */
    get lower() {}

    /** @type {boolean} */
    get lowerOpen() {}

    /** @type {any} */
    get upper() {}

    /** @type {boolean} */
    get upperOpen() {}

    /**
     * @param {any} key
     * @returns {boolean}
     */
    includes(key) {}

    /**
     * @param {any} lower
     * @param {any} upper
     * @param {boolean=} lowerOpen
     * @param {boolean=} upperOpen
     * @returns {IDBKeyRange}
     */
    static bound(lower, upper, lowerOpen, upperOpen) {}

    /**
     *
     * @param {any} lower
     * @param {boolean} open
     * @returns {IDBKeyRange}
     */
    static lowerBound(lower, open) {}

    /**
     * @param {any} value
     * @returns {IDBKeyRange}
     */
    static only(value) {}

    /**
     * @param {any} upper
     * @param {boolean=} open
     * @returns {IDBKeyRange}
     */
    static upperBound(upper, open) {}
  }

  class IDBCursor {
    /** @type {IDBCursorDirection} */
    get direction() {}

    /** @type {IDBValidKey} */
    get key() {}

    /** @type {IDBValidKey} */
    get primaryKey() {}

    /** @type {IDBObjectStore | IDBIndex} */
    get source() {}

    /**
     *
     * @param {number} count
     * @returns {void}
     */
    advance(count) {}

    /**
     * @param {IDBValidKey} key 
     * @returns {void}
     */
    continue(key) {}

    /**
     * @param {IDBValidKey} key 
     * @param {IDBValidKey} primaryKey 
     * @returns {void}
     */
    continuePrimaryKey(key, primaryKey) {}

    /** @returns {IDBRequest<undefined>} */
    delete() {}

    /** @returns {IDBRequest<IDBValidKey>} */
    update() {}
  }

  class IDBCursorWithValue extends IDBCursor {
    /** @type {any} */
    get value() {}
  }

  class IDBTransaction extends EventTarget {
    /** @type {IDBDatabase} */
    get db() {}

    /** @type {DOMException} */
    get error() {}

    /** @type {IDBTransactionMode} */
    get mode() {}

    /** @type {DOMStringList} */
    get objectStoreNames() {}

    /** @type {((this: IDBTransaction, ev: Event) => any) | null} */
    get onabort() {}
    set onabort(value) {}

    /** @type {((this: IDBTransaction, ev: Event) => any) | null} */
    get oncomplete() {}
    set oncomplete(value) {}

    /** @type {((this: IDBTransaction, ev: Event) => any) | null} */
    get onerror() {}
    set onerror(value) {}

    /** @returns {void} */
    abort() {}

    /**
     * @param {string} name 
     * @returns {IDBObjectStore}
     */
    objectStore(name) {}
  }

  const indexedDB = new IDBFactory();

  window.__bootstrap.indexedDB = {
    IDBCursor,
    IDBCursorWithValue,
    IDBDatabase,
    IDBFactory,
    IDBIndex,
    IDBKeyRange,
    IDBObjectStore,
    IDBOpenDBRequest,
    IDBRequest,
    IDBTransaction,
    IDBVersionChangeEvent,
    indexedDB,
  };
})(this);
