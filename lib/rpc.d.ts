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
export declare enum Encoding {
    HEX = "HEX",
    BASE62 = "BASE62",
    BASE58 = "BASE58",
    BASE32 = "BASE32",
    BASE16 = "BASE16",
    BASE64 = "BASE64",
    SALTPACK = "SALTPACK",
    BIP39 = "BIP39"
}
export declare enum MessageStatus {
    MESSAGE_SENT = "MESSAGE_SENT",
    MESSAGE_PENDING = "MESSAGE_PENDING",
    MESSAGE_ERROR = "MESSAGE_ERROR"
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
export interface AuthResetRequest {
    appName?: string;
}
export interface AuthResetResponse {
}
export interface StatusRequest {
}
export interface StatusResponse {
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
export interface RandRequest {
    numBytes?: number;
    encoding?: Encoding;
    noPadding?: boolean;
    lowercase?: boolean;
}
export interface RandResponse {
    data?: string;
}
export interface RandPasswordRequest {
    length?: number;
}
export interface RandPasswordResponse {
    password?: string;
}
export interface AuthProvisionRequest {
    secret?: string;
    type?: AuthType;
    device?: string;
    generate?: boolean;
}
export interface AuthProvisionResponse {
    provision?: AuthProvision;
}
export interface AuthDeprovisionRequest {
    id?: string;
}
export interface AuthDeprovisionResponse {
}
export interface AuthPasswordChangeRequest {
    old?: string;
    new?: string;
}
export interface AuthPasswordChangeResponse {
}
export interface AuthProvision {
    id?: string;
    type?: AuthType;
    createdAt?: number;
    aaguid?: string;
    noPin?: boolean;
}
export interface AuthProvisionsRequest {
}
export interface AuthProvisionsResponse {
    provisions?: Array<AuthProvision>;
}
export interface KeySearchRequest {
    query?: string;
}
export interface KeySearchResponse {
    keys?: Array<Key>;
}
export interface PullRequest {
    key?: string;
}
export interface PullResponse {
    kids?: Array<string>;
}
export interface SigchainRequest {
    kid?: string;
}
export interface SigchainResponse {
    key?: Key;
    statements?: Array<Statement>;
}
export interface StatementRequest {
    kid?: string;
    seq?: number;
}
export interface StatementResponse {
    statement?: Statement;
}
export interface StatementCreateRequest {
    data?: Uint8Array;
    kid?: string;
    local?: boolean;
}
export interface StatementCreateResponse {
    statement?: Statement;
}
export interface StatementRevokeRequest {
    seq?: number;
    kid?: string;
    local?: boolean;
}
export interface StatementRevokeResponse {
    statement?: Statement;
}
export interface Message {
    id?: string;
    sender?: Key;
    text?: Array<string>;
    status?: MessageStatus;
    createdAt?: number;
}
export interface MessagePrepareRequest {
    sender?: string;
    channel?: string;
    text?: string;
}
export interface MessagePrepareResponse {
    message?: Message;
}
export interface MessageCreateRequest {
    sender?: string;
    channel?: string;
    id?: string;
    text?: string;
}
export interface MessageCreateResponse {
    message?: Message;
}
export interface MessagesRequest {
    channel?: string;
    update?: boolean;
}
export interface MessagesResponse {
    messages?: Array<Message>;
}
export interface Channel {
    id?: string;
    name?: string;
    snippet?: string;
    updatedAt?: number;
    index?: number;
    readIndex?: number;
}
export interface ChannelsRequest {
    user?: string;
}
export interface ChannelsResponse {
    channels?: Array<Channel>;
}
export interface ChannelCreateRequest {
    name?: string;
    user?: string;
}
export interface ChannelCreateResponse {
    channel?: Channel;
}
export interface ChannelLeaveRequest {
    channel?: string;
}
export interface ChannelLeaveResponse {
}
export interface ChannelReadRequest {
    channel?: string;
    index?: number;
}
export interface ChannelReadResponse {
}
export interface ChannelInviteRequest {
    channel?: string;
    recipients?: Array<string>;
    sender?: string;
}
export interface ChannelInviteResponse {
    message?: Message;
}
export interface RelayRequest {
    keys?: Array<string>;
}
export interface RelayOutput {
    kid?: string;
    index?: number;
}
export interface RPCService {
    AuthSetup: (r: AuthSetupRequest) => AuthSetupResponse;
    AuthUnlock: (r: AuthUnlockRequest) => AuthUnlockResponse;
    AuthLock: (r: AuthLockRequest) => AuthLockResponse;
    AuthReset: (r: AuthResetRequest) => AuthResetResponse;
    Status: (r: StatusRequest) => StatusResponse;
    KeyGenerate: (r: KeyGenerateRequest) => KeyGenerateResponse;
    Keys: (r: KeysRequest) => KeysResponse;
    Key: (r: KeyRequest) => KeyResponse;
    KeyImport: (r: KeyImportRequest) => KeyImportResponse;
    KeyExport: (r: KeyExportRequest) => KeyExportResponse;
    KeyRemove: (r: KeyRemoveRequest) => KeyRemoveResponse;
    KeySearch: (r: KeySearchRequest) => KeySearchResponse;
    User: (r: UserRequest) => UserResponse;
    UserSearch: (r: UserSearchRequest) => UserSearchResponse;
    UserService: (r: UserServiceRequest) => UserServiceResponse;
    UserSign: (r: UserSignRequest) => UserSignResponse;
    UserAdd: (r: UserAddRequest) => UserAddResponse;
    Rand: (r: RandRequest) => RandResponse;
    RandPassword: (r: RandPasswordRequest) => RandPasswordResponse;
    Pull: (r: PullRequest) => PullResponse;
    Sigchain: (r: SigchainRequest) => SigchainResponse;
    Statement: (r: StatementRequest) => StatementResponse;
    StatementCreate: (r: StatementCreateRequest) => StatementCreateResponse;
    StatementRevoke: (r: StatementRevokeRequest) => StatementRevokeResponse;
    AuthProvision: (r: AuthProvisionRequest) => AuthProvisionResponse;
    AuthDeprovision: (r: AuthDeprovisionRequest) => AuthDeprovisionResponse;
    AuthProvisions: (r: AuthProvisionsRequest) => AuthProvisionsResponse;
    AuthPasswordChange: (r: AuthPasswordChangeRequest) => AuthPasswordChangeResponse;
    Channels: (r: ChannelsRequest) => ChannelsResponse;
    ChannelCreate: (r: ChannelCreateRequest) => ChannelCreateResponse;
    ChannelInvite: (r: ChannelInviteRequest) => ChannelInviteResponse;
    ChannelLeave: (r: ChannelLeaveRequest) => ChannelLeaveResponse;
    ChannelRead: (r: ChannelReadRequest) => ChannelReadResponse;
    MessagePrepare: (r: MessagePrepareRequest) => MessagePrepareResponse;
    MessageCreate: (r: MessageCreateRequest) => MessageCreateResponse;
    Messages: (r: MessagesRequest) => MessagesResponse;
    Relay: (r: RelayRequest, cb: (a: {
        value: RelayOutput;
        done: boolean;
    }) => void) => void;
}
