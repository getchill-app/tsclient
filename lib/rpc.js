"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatus = exports.ExportType = exports.SortDirection = exports.AuthType = exports.AuthStatus = void 0;
var AuthStatus;
(function (AuthStatus) {
    AuthStatus["AUTH_UNKNOWN"] = "AUTH_UNKNOWN";
    AuthStatus["AUTH_SETUP_NEEDED"] = "AUTH_SETUP_NEEDED";
    AuthStatus["AUTH_UNLOCKED"] = "AUTH_UNLOCKED";
    AuthStatus["AUTH_LOCKED"] = "AUTH_LOCKED";
})(AuthStatus = exports.AuthStatus || (exports.AuthStatus = {}));
var AuthType;
(function (AuthType) {
    AuthType["UNKNOWN_AUTH"] = "UNKNOWN_AUTH";
    AuthType["PASSWORD_AUTH"] = "PASSWORD_AUTH";
    AuthType["PAPER_KEY_AUTH"] = "PAPER_KEY_AUTH";
    AuthType["FIDO2_HMAC_SECRET_AUTH"] = "FIDO2_HMAC_SECRET_AUTH";
})(AuthType = exports.AuthType || (exports.AuthType = {}));
var SortDirection;
(function (SortDirection) {
    SortDirection["ASC"] = "ASC";
    SortDirection["DESC"] = "DESC";
})(SortDirection = exports.SortDirection || (exports.SortDirection = {}));
var ExportType;
(function (ExportType) {
    ExportType["DEFAULT_EXPORT_TYPE"] = "DEFAULT_EXPORT_TYPE";
    ExportType["SSH_EXPORT_TYPE"] = "SSH_EXPORT_TYPE";
})(ExportType = exports.ExportType || (exports.ExportType = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["USER_UNKNOWN"] = "USER_UNKNOWN";
    UserStatus["USER_OK"] = "USER_OK";
    UserStatus["USER_RESOURCE_NOT_FOUND"] = "USER_RESOURCE_NOT_FOUND";
    UserStatus["USER_CONTENT_NOT_FOUND"] = "USER_CONTENT_NOT_FOUND";
    UserStatus["USER_CONTENT_INVALID"] = "USER_CONTENT_INVALID";
    UserStatus["USER_CONN_FAILURE"] = "USER_CONN_FAILURE";
    UserStatus["USER_FAILURE"] = "USER_FAILURE";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
//# sourceMappingURL=rpc.js.map