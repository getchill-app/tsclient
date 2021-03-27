/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/light";

const $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  service: {
    options: {
      go_package: ".;service"
    },
    nested: {
      RPC: {
        methods: {
          AuthSetup: {
            requestType: "AuthSetupRequest",
            responseType: "AuthSetupResponse"
          },
          AuthUnlock: {
            requestType: "AuthUnlockRequest",
            responseType: "AuthUnlockResponse"
          },
          AuthLock: {
            requestType: "AuthLockRequest",
            responseType: "AuthLockResponse"
          },
          RuntimeStatus: {
            requestType: "RuntimeStatusRequest",
            responseType: "RuntimeStatusResponse"
          },
          KeyGenerate: {
            requestType: "KeyGenerateRequest",
            responseType: "KeyGenerateResponse"
          },
          Keys: {
            requestType: "KeysRequest",
            responseType: "KeysResponse"
          },
          Key: {
            requestType: "KeyRequest",
            responseType: "KeyResponse"
          },
          KeyImport: {
            requestType: "KeyImportRequest",
            responseType: "KeyImportResponse"
          },
          KeyExport: {
            requestType: "KeyExportRequest",
            responseType: "KeyExportResponse"
          },
          KeyRemove: {
            requestType: "KeyRemoveRequest",
            responseType: "KeyRemoveResponse"
          },
          User: {
            requestType: "UserRequest",
            responseType: "UserResponse"
          },
          UserSearch: {
            requestType: "UserSearchRequest",
            responseType: "UserSearchResponse"
          },
          UserService: {
            requestType: "UserServiceRequest",
            responseType: "UserServiceResponse"
          },
          UserSign: {
            requestType: "UserSignRequest",
            responseType: "UserSignResponse"
          },
          UserAdd: {
            requestType: "UserAddRequest",
            responseType: "UserAddResponse"
          }
        }
      },
      AuthStatus: {
        options: {
          "(go.enum).name": "AuthStatus"
        },
        values: {
          AUTH_UNKNOWN: 0,
          AUTH_SETUP_NEEDED: 1,
          AUTH_UNLOCKED: 2,
          AUTH_LOCKED: 3
        }
      },
      AuthType: {
        options: {
          "(go.enum).name": "AuthType"
        },
        values: {
          UNKNOWN_AUTH: 0,
          PASSWORD_AUTH: 10,
          PAPER_KEY_AUTH: 11,
          FIDO2_HMAC_SECRET_AUTH: 20
        }
      },
      AuthSetupRequest: {
        fields: {
          secret: {
            type: "string",
            id: 1
          },
          type: {
            type: "AuthType",
            id: 2
          },
          device: {
            type: "string",
            id: 5
          }
        }
      },
      AuthSetupResponse: {
        fields: {}
      },
      AuthUnlockRequest: {
        fields: {
          secret: {
            type: "string",
            id: 1
          },
          type: {
            type: "AuthType",
            id: 2
          },
          client: {
            type: "string",
            id: 6
          }
        }
      },
      AuthUnlockResponse: {
        fields: {
          authToken: {
            type: "string",
            id: 1
          }
        }
      },
      AuthLockRequest: {
        fields: {}
      },
      AuthLockResponse: {
        fields: {}
      },
      RuntimeStatusRequest: {
        fields: {}
      },
      RuntimeStatusResponse: {
        fields: {
          version: {
            type: "string",
            id: 1
          },
          appName: {
            type: "string",
            id: 2
          },
          exe: {
            type: "string",
            id: 4
          },
          authStatus: {
            type: "AuthStatus",
            id: 5
          },
          sync: {
            type: "bool",
            id: 6
          },
          fido2: {
            type: "bool",
            id: 20,
            options: {
              "(go.field).name": "FIDO2"
            }
          }
        }
      },
      KeyGenerateRequest: {
        fields: {
          type: {
            type: "string",
            id: 1
          }
        }
      },
      KeyGenerateResponse: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          }
        }
      },
      Key: {
        fields: {
          id: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "ID"
            }
          },
          type: {
            type: "string",
            id: 3
          },
          isPrivate: {
            type: "bool",
            id: 4
          },
          user: {
            type: "User",
            id: 6
          },
          saved: {
            type: "bool",
            id: 10
          },
          sigchainLength: {
            type: "int32",
            id: 40
          },
          sigchainUpdatedAt: {
            type: "int64",
            id: 41
          }
        }
      },
      KeyRequest: {
        fields: {
          key: {
            type: "string",
            id: 1
          },
          search: {
            type: "bool",
            id: 4
          },
          update: {
            type: "bool",
            id: 5
          }
        }
      },
      KeyResponse: {
        fields: {
          key: {
            type: "Key",
            id: 1
          }
        }
      },
      SortDirection: {
        options: {
          "(go.enum).name": "SortDirection"
        },
        values: {
          ASC: 0,
          DESC: 1
        }
      },
      KeysRequest: {
        fields: {
          query: {
            type: "string",
            id: 1
          },
          types: {
            rule: "repeated",
            type: "string",
            id: 2
          },
          sortField: {
            type: "string",
            id: 10
          },
          sortDirection: {
            type: "SortDirection",
            id: 11
          }
        }
      },
      KeysResponse: {
        fields: {
          keys: {
            rule: "repeated",
            type: "Key",
            id: 1
          },
          sortField: {
            type: "string",
            id: 10
          },
          sortDirection: {
            type: "SortDirection",
            id: 11
          }
        }
      },
      ExportType: {
        options: {
          "(go.enum).name": "ExportType"
        },
        values: {
          DEFAULT_EXPORT_TYPE: 0,
          SSH_EXPORT_TYPE: 1
        }
      },
      KeyExportRequest: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          },
          password: {
            type: "string",
            id: 2
          },
          type: {
            type: "ExportType",
            id: 3
          },
          "public": {
            type: "bool",
            id: 4
          },
          noPassword: {
            type: "bool",
            id: 5
          }
        }
      },
      KeyExportResponse: {
        fields: {
          "export": {
            type: "bytes",
            id: 1
          }
        }
      },
      KeyImportRequest: {
        fields: {
          "in": {
            type: "bytes",
            id: 1
          },
          password: {
            type: "string",
            id: 2
          },
          update: {
            type: "bool",
            id: 3
          }
        }
      },
      KeyImportResponse: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          }
        }
      },
      KeyRemoveRequest: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          }
        }
      },
      KeyRemoveResponse: {
        fields: {}
      },
      UserStatus: {
        options: {
          "(go.enum).name": "UserStatus"
        },
        values: {
          USER_UNKNOWN: 0,
          USER_OK: 1,
          USER_RESOURCE_NOT_FOUND: 20,
          USER_CONTENT_NOT_FOUND: 30,
          USER_CONTENT_INVALID: 31,
          USER_CONN_FAILURE: 40,
          USER_FAILURE: 50
        }
      },
      User: {
        fields: {
          id: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "ID"
            }
          },
          name: {
            type: "string",
            id: 2
          },
          kid: {
            type: "string",
            id: 3,
            options: {
              "(go.field).name": "KID"
            }
          },
          seq: {
            type: "int32",
            id: 4
          },
          service: {
            type: "string",
            id: 5
          },
          url: {
            type: "string",
            id: 6,
            options: {
              "(go.field).name": "URL"
            }
          },
          status: {
            type: "UserStatus",
            id: 10
          },
          verifiedAt: {
            type: "int64",
            id: 11
          },
          timestamp: {
            type: "int64",
            id: 12
          },
          proxied: {
            type: "bool",
            id: 13
          },
          err: {
            type: "string",
            id: 20
          }
        }
      },
      UserRequest: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          },
          local: {
            type: "bool",
            id: 4
          }
        }
      },
      UserResponse: {
        fields: {
          user: {
            type: "User",
            id: 1
          }
        }
      },
      UserSearchRequest: {
        fields: {
          query: {
            type: "string",
            id: 1
          },
          limit: {
            type: "int32",
            id: 3
          },
          local: {
            type: "bool",
            id: 4
          }
        }
      },
      UserSearchResponse: {
        fields: {
          users: {
            rule: "repeated",
            type: "User",
            id: 1
          }
        }
      },
      UserServiceRequest: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          },
          service: {
            type: "string",
            id: 2
          }
        }
      },
      UserServiceResponse: {
        fields: {
          service: {
            type: "string",
            id: 1
          }
        }
      },
      UserSignRequest: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          },
          service: {
            type: "string",
            id: 2
          },
          name: {
            type: "string",
            id: 3
          }
        }
      },
      UserSignResponse: {
        fields: {
          message: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          }
        }
      },
      UserAddRequest: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          },
          service: {
            type: "string",
            id: 2
          },
          name: {
            type: "string",
            id: 3
          },
          url: {
            type: "string",
            id: 4,
            options: {
              "(go.field).name": "URL"
            }
          },
          local: {
            type: "bool",
            id: 5
          }
        }
      },
      UserAddResponse: {
        fields: {
          user: {
            type: "User",
            id: 1
          },
          statement: {
            type: "Statement",
            id: 2
          }
        }
      },
      Statement: {
        fields: {
          sig: {
            type: "bytes",
            id: 1
          },
          data: {
            type: "bytes",
            id: 2
          },
          kid: {
            type: "string",
            id: 3,
            options: {
              "(go.field).name": "KID"
            }
          },
          seq: {
            type: "int32",
            id: 4
          },
          prev: {
            type: "bytes",
            id: 5
          },
          revoke: {
            type: "int32",
            id: 6
          },
          timestamp: {
            type: "int64",
            id: 7
          },
          type: {
            type: "string",
            id: 8
          }
        }
      }
    }
  }
});

export { $root as default };
