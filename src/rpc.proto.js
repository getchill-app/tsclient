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
          AuthReset: {
            requestType: "AuthResetRequest",
            responseType: "AuthResetResponse"
          },
          Status: {
            requestType: "StatusRequest",
            responseType: "StatusResponse"
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
          KeySearch: {
            requestType: "KeySearchRequest",
            responseType: "KeySearchResponse"
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
          },
          Rand: {
            requestType: "RandRequest",
            responseType: "RandResponse"
          },
          RandPassword: {
            requestType: "RandPasswordRequest",
            responseType: "RandPasswordResponse"
          },
          Pull: {
            requestType: "PullRequest",
            responseType: "PullResponse"
          },
          Sigchain: {
            requestType: "SigchainRequest",
            responseType: "SigchainResponse"
          },
          Statement: {
            requestType: "StatementRequest",
            responseType: "StatementResponse"
          },
          StatementCreate: {
            requestType: "StatementCreateRequest",
            responseType: "StatementCreateResponse"
          },
          StatementRevoke: {
            requestType: "StatementRevokeRequest",
            responseType: "StatementRevokeResponse"
          },
          AuthProvision: {
            requestType: "AuthProvisionRequest",
            responseType: "AuthProvisionResponse"
          },
          AuthDeprovision: {
            requestType: "AuthDeprovisionRequest",
            responseType: "AuthDeprovisionResponse"
          },
          AuthProvisions: {
            requestType: "AuthProvisionsRequest",
            responseType: "AuthProvisionsResponse"
          },
          AuthPasswordChange: {
            requestType: "AuthPasswordChangeRequest",
            responseType: "AuthPasswordChangeResponse"
          },
          Channels: {
            requestType: "ChannelsRequest",
            responseType: "ChannelsResponse"
          },
          ChannelCreate: {
            requestType: "ChannelCreateRequest",
            responseType: "ChannelCreateResponse"
          },
          ChannelInvite: {
            requestType: "ChannelInviteRequest",
            responseType: "ChannelInviteResponse"
          },
          ChannelLeave: {
            requestType: "ChannelLeaveRequest",
            responseType: "ChannelLeaveResponse"
          },
          ChannelRead: {
            requestType: "ChannelReadRequest",
            responseType: "ChannelReadResponse"
          },
          MessagePrepare: {
            requestType: "MessagePrepareRequest",
            responseType: "MessagePrepareResponse"
          },
          MessageCreate: {
            requestType: "MessageCreateRequest",
            responseType: "MessageCreateResponse"
          },
          Messages: {
            requestType: "MessagesRequest",
            responseType: "MessagesResponse"
          },
          Relay: {
            requestType: "RelayRequest",
            responseType: "RelayOutput",
            responseStream: true
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
      AuthResetRequest: {
        fields: {
          appName: {
            type: "string",
            id: 1
          }
        }
      },
      AuthResetResponse: {
        fields: {}
      },
      StatusRequest: {
        fields: {}
      },
      StatusResponse: {
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
      },
      Encoding: {
        options: {
          "(go.enum).name": "Encoding"
        },
        values: {
          HEX: 0,
          BASE62: 1,
          BASE58: 2,
          BASE32: 3,
          BASE16: 4,
          BASE64: 5,
          SALTPACK: 6,
          BIP39: 7
        }
      },
      RandRequest: {
        fields: {
          numBytes: {
            type: "int32",
            id: 1
          },
          encoding: {
            type: "Encoding",
            id: 2
          },
          noPadding: {
            type: "bool",
            id: 10
          },
          lowercase: {
            type: "bool",
            id: 11
          }
        }
      },
      RandResponse: {
        fields: {
          data: {
            type: "string",
            id: 1
          }
        }
      },
      RandPasswordRequest: {
        fields: {
          length: {
            type: "int32",
            id: 1
          }
        }
      },
      RandPasswordResponse: {
        fields: {
          password: {
            type: "string",
            id: 1
          }
        }
      },
      AuthProvisionRequest: {
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
          },
          generate: {
            type: "bool",
            id: 7
          }
        }
      },
      AuthProvisionResponse: {
        fields: {
          provision: {
            type: "AuthProvision",
            id: 1
          }
        }
      },
      AuthDeprovisionRequest: {
        fields: {
          id: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "ID"
            }
          }
        }
      },
      AuthDeprovisionResponse: {
        fields: {}
      },
      AuthPasswordChangeRequest: {
        fields: {
          old: {
            type: "string",
            id: 1
          },
          "new": {
            type: "string",
            id: 2
          }
        }
      },
      AuthPasswordChangeResponse: {
        fields: {}
      },
      AuthProvision: {
        fields: {
          id: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "ID"
            }
          },
          type: {
            type: "AuthType",
            id: 2
          },
          createdAt: {
            type: "int64",
            id: 3
          },
          aaguid: {
            type: "string",
            id: 100,
            options: {
              "(go.field).name": "AAGUID"
            }
          },
          noPin: {
            type: "bool",
            id: 101
          }
        }
      },
      AuthProvisionsRequest: {
        fields: {}
      },
      AuthProvisionsResponse: {
        fields: {
          provisions: {
            rule: "repeated",
            type: "AuthProvision",
            id: 1
          }
        }
      },
      KeySearchRequest: {
        fields: {
          query: {
            type: "string",
            id: 1
          }
        }
      },
      KeySearchResponse: {
        fields: {
          keys: {
            rule: "repeated",
            type: "Key",
            id: 1
          }
        }
      },
      PullRequest: {
        fields: {
          key: {
            type: "string",
            id: 1
          }
        }
      },
      PullResponse: {
        fields: {
          kids: {
            rule: "repeated",
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KIDs"
            }
          }
        }
      },
      SigchainRequest: {
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
      SigchainResponse: {
        fields: {
          key: {
            type: "Key",
            id: 1
          },
          statements: {
            rule: "repeated",
            type: "Statement",
            id: 2
          }
        }
      },
      StatementRequest: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          },
          seq: {
            type: "int32",
            id: 2
          }
        }
      },
      StatementResponse: {
        fields: {
          statement: {
            type: "Statement",
            id: 1
          }
        }
      },
      StatementCreateRequest: {
        fields: {
          data: {
            type: "bytes",
            id: 1
          },
          kid: {
            type: "string",
            id: 2,
            options: {
              "(go.field).name": "KID"
            }
          },
          local: {
            type: "bool",
            id: 5
          }
        }
      },
      StatementCreateResponse: {
        fields: {
          statement: {
            type: "Statement",
            id: 1
          }
        }
      },
      StatementRevokeRequest: {
        fields: {
          seq: {
            type: "int32",
            id: 1
          },
          kid: {
            type: "string",
            id: 2,
            options: {
              "(go.field).name": "KID"
            }
          },
          local: {
            type: "bool",
            id: 5
          }
        }
      },
      StatementRevokeResponse: {
        fields: {
          statement: {
            type: "Statement",
            id: 1
          }
        }
      },
      MessageStatus: {
        options: {
          "(go.enum).name": "MessageStatus"
        },
        values: {
          MESSAGE_SENT: 0,
          MESSAGE_PENDING: 1,
          MESSAGE_ERROR: 2
        }
      },
      Message: {
        fields: {
          id: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "ID"
            }
          },
          sender: {
            type: "Key",
            id: 2
          },
          text: {
            rule: "repeated",
            type: "string",
            id: 10
          },
          status: {
            type: "MessageStatus",
            id: 20
          },
          createdAt: {
            type: "int64",
            id: 31
          }
        }
      },
      MessagePrepareRequest: {
        fields: {
          sender: {
            type: "string",
            id: 1
          },
          channel: {
            type: "string",
            id: 2
          },
          text: {
            type: "string",
            id: 11
          }
        }
      },
      MessagePrepareResponse: {
        fields: {
          message: {
            type: "Message",
            id: 1
          }
        }
      },
      MessageCreateRequest: {
        fields: {
          sender: {
            type: "string",
            id: 1
          },
          channel: {
            type: "string",
            id: 2
          },
          id: {
            type: "string",
            id: 10,
            options: {
              "(go.field).name": "ID"
            }
          },
          text: {
            type: "string",
            id: 11
          }
        }
      },
      MessageCreateResponse: {
        fields: {
          message: {
            type: "Message",
            id: 1
          }
        }
      },
      MessagesRequest: {
        fields: {
          channel: {
            type: "string",
            id: 1
          },
          update: {
            type: "bool",
            id: 5
          }
        }
      },
      MessagesResponse: {
        fields: {
          messages: {
            rule: "repeated",
            type: "Message",
            id: 1
          }
        }
      },
      Channel: {
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
          snippet: {
            type: "string",
            id: 3
          },
          updatedAt: {
            type: "int64",
            id: 4
          },
          index: {
            type: "int64",
            id: 5
          },
          readIndex: {
            type: "int64",
            id: 10
          }
        }
      },
      ChannelsRequest: {
        fields: {
          user: {
            type: "string",
            id: 1
          }
        }
      },
      ChannelsResponse: {
        fields: {
          channels: {
            rule: "repeated",
            type: "Channel",
            id: 1
          }
        }
      },
      ChannelCreateRequest: {
        fields: {
          name: {
            type: "string",
            id: 1
          },
          user: {
            type: "string",
            id: 2
          }
        }
      },
      ChannelCreateResponse: {
        fields: {
          channel: {
            type: "Channel",
            id: 1
          }
        }
      },
      ChannelLeaveRequest: {
        fields: {
          channel: {
            type: "string",
            id: 1
          }
        }
      },
      ChannelLeaveResponse: {
        fields: {}
      },
      ChannelReadRequest: {
        fields: {
          channel: {
            type: "string",
            id: 1
          },
          index: {
            type: "int64",
            id: 2
          }
        }
      },
      ChannelReadResponse: {
        fields: {}
      },
      ChannelInviteRequest: {
        fields: {
          channel: {
            type: "string",
            id: 1
          },
          recipients: {
            rule: "repeated",
            type: "string",
            id: 2
          },
          sender: {
            type: "string",
            id: 3
          }
        }
      },
      ChannelInviteResponse: {
        fields: {
          message: {
            type: "Message",
            id: 1
          }
        }
      },
      RelayRequest: {
        fields: {
          keys: {
            rule: "repeated",
            type: "string",
            id: 1
          }
        }
      },
      RelayOutput: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          },
          index: {
            type: "int64",
            id: 2
          }
        }
      }
    }
  }
});

export { $root as default };
