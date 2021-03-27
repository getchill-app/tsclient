/// <reference types="node" />
import { ServiceClient } from '@grpc/grpc-js/build/src/make-client';
import { EventEmitter } from 'events';
import * as service from './rpc';
import { Logger } from 'ts-log';
export declare type RPCError = {
    name: string;
    message: string;
    code: number;
    details: string;
};
export declare class RPCService extends EventEmitter {
    serviceFn: () => ServiceClient;
    client?: ServiceClient;
    log: Logger;
    constructor(serviceFn: () => ServiceClient);
    service(): ServiceClient;
    emitError(err: RPCError): void;
    authSetup(req: service.AuthSetupRequest): Promise<service.AuthSetupResponse>;
    authUnlock(req: service.AuthUnlockRequest): Promise<service.AuthUnlockResponse>;
    authLock(req: service.AuthLockRequest): Promise<service.AuthLockResponse>;
    runtimeStatus(req: service.RuntimeStatusRequest): Promise<service.RuntimeStatusResponse>;
    keyGenerate(req: service.KeyGenerateRequest): Promise<service.KeyGenerateResponse>;
    keys(req: service.KeysRequest): Promise<service.KeysResponse>;
    key(req: service.KeyRequest): Promise<service.KeyResponse>;
    keyImport(req: service.KeyImportRequest): Promise<service.KeyImportResponse>;
    keyExport(req: service.KeyExportRequest): Promise<service.KeyExportResponse>;
    keyRemove(req: service.KeyRemoveRequest): Promise<service.KeyRemoveResponse>;
    user(req: service.UserRequest): Promise<service.UserResponse>;
    userSearch(req: service.UserSearchRequest): Promise<service.UserSearchResponse>;
    userService(req: service.UserServiceRequest): Promise<service.UserServiceResponse>;
    userSign(req: service.UserSignRequest): Promise<service.UserSignResponse>;
    userAdd(req: service.UserAddRequest): Promise<service.UserAddResponse>;
}
