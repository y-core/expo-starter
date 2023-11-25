import { DEBUG_LOG } from '#/env';

export interface ILog {
  debug(primaryMessage: string, ...supportingData: any[]): void;
  warn(primaryMessage: string, ...supportingData: any[]): void;
  error(primaryMessage: string, ...supportingData: any[]): void;
  info(primaryMessage: string, ...supportingData: any[]): void;
}

type TMessageType = 'debug' | 'error' | 'info' | 'warn';

const debug = __DEV__ && DEBUG_LOG;

const emitLogMessage = (msgType: TMessageType, msg: string, supportingDetails: any[]) => {
  if (supportingDetails.length > 0) {
    console[msgType](msg, supportingDetails);
  } else {
    console[msgType](msg);
  }
};

const logger: ILog = {
  debug: (msg: string, ...supportingDetails: any[]) => {
    if (debug) {
      emitLogMessage('debug', msg, supportingDetails);
    }
  },
  error: (msg: string, ...supportingDetails: any[]) => {
    emitLogMessage('error', msg, supportingDetails);
  },
  info: (msg: string, ...supportingDetails: any[]) => {
    emitLogMessage('info', msg, supportingDetails);
  },
  warn: (msg: string, ...supportingDetails: any[]) => {
    emitLogMessage('warn', msg, supportingDetails);
  },
};

export default logger;
