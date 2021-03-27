export declare enum AuthStatus {
    AUTH_UNKNOWN = "AUTH_UNKNOWN",
    AUTH_SETUP_NEEDED = "AUTH_SETUP_NEEDED",
    AUTH_UNLOCKED = "AUTH_UNLOCKED",
    AUTH_LOCKED = "AUTH_LOCKED"
}
export declare enum AuthType {
    UNKNOWN_AUTH = "UNKNOWN_AUTH",
    PASSWORD_AUTH = "PASSWORD_AUTH",
    PAPER_KEY_AUTH = "PAPER_KEY_AUTH",
    FIDO2_HMAC_SECRET_AUTH = "FIDO2_HMAC_SECRET_AUTH"
}
export declare enum SortDirection {
    ASC = "ASC",
    DESC = "DESC"
}
export declare enum ExportType {
    DEFAULT_EXPORT_TYPE = "DEFAULT_EXPORT_TYPE",
    SSH_EXPORT_TYPE = "SSH_EXPORT_TYPE"
}
export declare enum UserStatus {
    USER_UNKNOWN = "USER_UNKNOWN",
    USER_OK = "USER_OK",
    USER_RESOURCE_NOT_FOUND = "USER_RESOURCE_NOT_FOUND",
    USER_CONTENT_NOT_FOUND = "USER_CONTENT_NOT_FOUND",
    USER_CONTENT_INVALID = "USER_CONTENT_INVALID",
    USER_CONN_FAILURE = "USER_CONN_FAILURE",
    USER_FAILURE = "USER_FAILURE"
}
export interface AuthSetupRequest {
    secret?: string;
    type?: AuthType;
    device?: string;
}
export interface AuthSetupResponse {
}
export interface AuthUnlockRequest {
    secret?: string;
    type?: AuthType;
    client?: string;
}
export interface AuthUnlockResponse {
    authToken?: string;
}
export interface AuthLockRequest {
}
export interface AuthLockResponse {
}
export interface RuntimeStatusRequest {
}
export interface RuntimeStatusResponse {
    version?: string;
    appName?: string;
    exe?: string;
    authStatus?: AuthStatus;
    sync?: boolean;
    fido2?: boolean;
}
export interface KeyGenerateRequest {
    type?: string;
}
export interface KeyGenerateResponse {
    kid?: string;
}
export interface Key {
    id?: string;
    type?: string;
    isPrivate?: boolean;
    user?: User;
    saved?: boolean;
    sigchainLength?: number;
    sigchainUpdatedAt?: number;
}
export interface KeyRequest {
    key?: string;
    search?: boolean;
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
    kid?: string;
    service?: string;
}
export interface UserServiceResponse {
    service?: string;
}
export interface UserSignRequest {
    kid?: string;
    service?: string;
    name?: string;
}
export interface UserSignResponse {
    message?: string;
    name?: string;
}
export interface UserAddRequest {
    kid?: string;
    service?: string;
    name?: string;
    url?: string;
    local?: boolean;
}
export interface UserAddResponse {
    user?: User;
    statement?: Statement;
}
export interface Statement {
    sig?: Uint8Array;
    data?: Uint8Array;
    kid?: string;
    seq?: number;
    prev?: Uint8Array;
    revoke?: number;
    timestamp?: number;
    type?: string;
}
export interface RPCService {
    AuthSetup: (r: AuthSetupRequest) => AuthSetupResponse;
    AuthUnlock: (r: AuthUnlockRequest) => AuthUnlockResponse;
    AuthLock: (r: AuthLockRequest) => AuthLockResponse;
    RuntimeStatus: (r: RuntimeStatusRequest) => RuntimeStatusResponse;
    KeyGenerate: (r: KeyGenerateRequest) => KeyGenerateResponse;
    Keys: (r: KeysRequest) => KeysResponse;
    Key: (r: KeyRequest) => KeyResponse;
    KeyImport: (r: KeyImportRequest) => KeyImportResponse;
    KeyExport: (r: KeyExportRequest) => KeyExportResponse;
    KeyRemove: (r: KeyRemoveRequest) => KeyRemoveResponse;
    User: (r: UserRequest) => UserResponse;
    UserSearch: (r: UserSearchRequest) => UserSearchResponse;
    UserService: (r: UserServiceRequest) => UserServiceResponse;
    UserSign: (r: UserSignRequest) => UserSignResponse;
    UserAdd: (r: UserAddRequest) => UserAddResponse;
}
