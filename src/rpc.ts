export enum AuthStatus {
    AUTH_UNKNOWN = "AUTH_UNKNOWN",
    AUTH_SETUP_NEEDED = "AUTH_SETUP_NEEDED",
    AUTH_UNLOCKED = "AUTH_UNLOCKED",
    AUTH_LOCKED = "AUTH_LOCKED",
}
export enum AuthType {
    UNKNOWN_AUTH = "UNKNOWN_AUTH",
    PASSWORD_AUTH = "PASSWORD_AUTH",
    PAPER_KEY_AUTH = "PAPER_KEY_AUTH",
    FIDO2_HMAC_SECRET_AUTH = "FIDO2_HMAC_SECRET_AUTH",
}
export enum SortDirection {
    ASC = "ASC",
    DESC = "DESC",
}
export enum ExportType {
    DEFAULT_EXPORT_TYPE = "DEFAULT_EXPORT_TYPE",
    SSH_EXPORT_TYPE = "SSH_EXPORT_TYPE",
}
export enum UserStatus {
    USER_UNKNOWN = "USER_UNKNOWN",
    USER_OK = "USER_OK",
    USER_RESOURCE_NOT_FOUND = "USER_RESOURCE_NOT_FOUND",
    USER_CONTENT_NOT_FOUND = "USER_CONTENT_NOT_FOUND",
    USER_CONTENT_INVALID = "USER_CONTENT_INVALID",
    USER_CONN_FAILURE = "USER_CONN_FAILURE",
    USER_FAILURE = "USER_FAILURE",
}
export interface AuthSetupRequest {
    // Secret for auth depending on auth type, e.g. password, FIDO2 pin, etc.
    secret?: string;
    // Type for auth.
    type?: AuthType;
    // Device path (for FIDO2).
    device?: string;
}

export interface AuthSetupResponse {
}

export interface AuthUnlockRequest {
    // Secret for auth depending on auth type, e.g. password, pin, etc.
    secret?: string;
    // Type for auth.
    type?: AuthType;
    // Client name.
    client?: string;
}

export interface AuthUnlockResponse {
    // AuthToken to use for requests.
    authToken?: string;
}

export interface AuthLockRequest {
}

export interface AuthLockResponse {
}

export interface RuntimeStatusRequest {
}

export interface RuntimeStatusResponse {
    // Version of running service.
    version?: string;
    // AppName app name.
    appName?: string;
    // Exe is the service executable path.
    exe?: string;
    // AuthStatus is the status of auth.
    authStatus?: AuthStatus;
    // SyncStatus is the status of vault sync.
    sync?: boolean;
    // FIDO2 available.
    fido2?: boolean;
}

export interface KeyGenerateRequest {
    type?: string;
}

export interface KeyGenerateResponse {
    kid?: string;
}

export interface Key {
    // ID identifier.
    id?: string;
    // Type of key.
    type?: string;
    // IsPrivate if private key.
    isPrivate?: boolean;
    // User associated with this key.
    user?: User;
    // Saved if saved locally.
    saved?: boolean;
    // SigchainLength is length of sigchain (if any).
    sigchainLength?: number;
    sigchainUpdatedAt?: number;
}

export interface KeyRequest {
    // Key can be kid or user@service.
    key?: string;
    // Search, if true, will search for the key on the server.
    search?: boolean;
    // Update, if true, will update the sigchain from the server.
    update?: boolean;
}

export interface KeyResponse {
    key?: Key;
}

export interface KeysRequest {
    query?: string;
    types?: Array<string>;
    sortField?: string;
    sortDirection?: SortDirection;
}

export interface KeysResponse {
    keys?: Array<Key>;
    sortField?: string;
    sortDirection?: SortDirection;
}

export interface KeyExportRequest {
    kid?: string;
    password?: string;
    type?: ExportType;
    public?: boolean;
    noPassword?: boolean;
}

export interface KeyExportResponse {
    export?: Uint8Array;
}

export interface KeyImportRequest {
    in?: Uint8Array;
    password?: string;
    update?: boolean;
}

export interface KeyImportResponse {
    kid?: string;
}

export interface KeyRemoveRequest {
    // KID of key to remove.
    kid?: string;
}

export interface KeyRemoveResponse {
}

export interface User {
    id?: string;
    name?: string;
    kid?: string;
    seq?: number;
    service?: string;
    url?: string;
    status?: UserStatus;
    verifiedAt?: number;
    timestamp?: number;
    proxied?: boolean;
    err?: string;
}

export interface UserRequest {
    kid?: string;
    local?: boolean;
}

export interface UserResponse {
    user?: User;
}

export interface UserSearchRequest {
    query?: string;
    limit?: number;
    local?: boolean;
}

export interface UserSearchResponse {
    users?: Array<User>;
}

export interface UserServiceRequest {
    // KID to use, or if empty the current key.
    kid?: string;
    // Service such as twitter, github.
    service?: string;
}

export interface UserServiceResponse {
    // Service such as twitter, github.
    service?: string;
}

export interface UserSignRequest {
    // KID to use, or if empty the current key.
    kid?: string;
    // Service such as twitter, github.
    service?: string;
    // Name is username on the service.
    name?: string;
}

export interface UserSignResponse {
    // Message is signed message.
    message?: string;
    // Name in request.
    name?: string;
}

export interface UserAddRequest {
    // KID to use, or if empty the current key.
    kid?: string;
    // Service such as twitter, github.
    service?: string;
    // Name is username on the service.
    name?: string;
    // URL is location of signed message on the service.
    url?: string;
    // Local, if true, won't save to the current key server.
    local?: boolean;
}

export interface UserAddResponse {
    user?: User;
    statement?: Statement;
}

export interface Statement {
    // Sig is the signature bytes.
    sig?: Uint8Array;
    // Data that was signed.
    data?: Uint8Array;
    // KID is the key that signed.
    kid?: string;
    // Seq in a sigchain (1 is root).
    seq?: number;
    // Prev is a hash of the previous item in the sigchain.
    prev?: Uint8Array;
    // Revoke refers to a previous signed seq to revoke.
    revoke?: number;
    // Timestamp ...
    timestamp?: number;
    // Type (optional).
    type?: string;
}

export interface RPCService {
    AuthSetup: (r:AuthSetupRequest) => AuthSetupResponse;
    AuthUnlock: (r:AuthUnlockRequest) => AuthUnlockResponse;
    AuthLock: (r:AuthLockRequest) => AuthLockResponse;
    RuntimeStatus: (r:RuntimeStatusRequest) => RuntimeStatusResponse;
    KeyGenerate: (r:KeyGenerateRequest) => KeyGenerateResponse;
    Keys: (r:KeysRequest) => KeysResponse;
    Key: (r:KeyRequest) => KeyResponse;
    KeyImport: (r:KeyImportRequest) => KeyImportResponse;
    KeyExport: (r:KeyExportRequest) => KeyExportResponse;
    KeyRemove: (r:KeyRemoveRequest) => KeyRemoveResponse;
    User: (r:UserRequest) => UserResponse;
    UserSearch: (r:UserSearchRequest) => UserSearchResponse;
    UserService: (r:UserServiceRequest) => UserServiceResponse;
    UserSign: (r:UserSignRequest) => UserSignResponse;
    UserAdd: (r:UserAddRequest) => UserAddResponse;
}
