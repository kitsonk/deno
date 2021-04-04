// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.

/// <reference no-default-lib="true" />
/// <reference lib="esnext" />

declare namespace globalThis {
  declare namespace __bootstrap {
    declare var indexedDB: {
      IDBCursor: typeof IDBCursor;
      IDBCursorWithValue: typeof IDBCursorWithValue;
      IDBDatabase: typeof IDBDatabase;
      IDBFactory: typeof IDBFactory;
      IDBIndex: typeof IDBIndex;
      IDBKeyRange: typeof IDBKeyRange;
      IDBObjectStore: typeof IDBObjectStore;
      IDBOpenDBRequest: typeof IDBOpenDBRequest;
      IDBRequest: typeof IDBRequest;
      IDBTransaction: typeof IDBTransaction;
      IDBVersionChangeEvent: typeof IDBVersionChangeEvent;
      indexedDB: IDBFactory;
    };
  }
}
