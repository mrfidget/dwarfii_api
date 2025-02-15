import {
  telephotoCamera,
  statusTelephotoCmd,
  statusWideangleCmd,
  statusIRTelephotoCmd,
  statusWorkingStateTelephotoCmd,
} from "./api_codes";

// 3.4.1 Get telephoto ISP parameters
// 3.4.4 Returns the wide-angle ISP parameter
export function cameraSettings(camera = telephotoCamera) {
  let command;
  if (camera === telephotoCamera) {
    command = statusTelephotoCmd;
  } else {
    command = statusWideangleCmd;
  }
  const options = { interface: command, camId: camera };
  return options;
}

// 3.4.2 Get telephoto IRCUT state (when shooting raw)
export function iRSettings() {
  const options = { interface: statusIRTelephotoCmd, camId: telephotoCamera };
  return options;
}

// 3.4.3 Returns to the telephoto working state
export function cameraWorkingState() {
  const options = {
    interface: statusWorkingStateTelephotoCmd,
    camId: telephotoCamera,
  };
  return options;
}
