import { io, Socket } from "socket.io-client";
import { logger } from "./logger-manager";
import { RTCManager } from "./rtc-manager";

export enum RoomState {
  leave = "leave",
  joined = "joined",
  joined_conn = "joined_conn",
}

export type RoomStateChangListener = (state: RoomState) => void;

export interface RoomEventMap {
  roomStateChange: RoomStateChangListener;
}

class RoomManager {
  private roomId: number | undefined;

  private socket: Socket | undefined;

  private roomState: RoomState = RoomState.leave;

  private rtcManager: RTCManager | undefined;

  private roomStateChangeListeners: RoomStateChangListener[] = [];

  private setState(state: RoomState) {
    this.roomState = state;
    this.roomStateChangeListeners.forEach((listener) => listener(state));
  }

  private socketConnect() {
    this.socketDisconnect();
    if (process.env.NODE_ENV === "development") {
      this.socket = io("localhost:3001");
    } else {
      this.socket = io("socket.xulin.fun");
    }

    this.socket.on("joined", (roomId, socketId, userCount) => {
      logger.addLogMessage(
        `receive joined message: ${roomId} ${socketId} ${userCount}\n`,
        "room"
      );
      console.log(`receive joined message: ${roomId} ${socketId} ${userCount}`);
      this.roomId = roomId;
      this.setState(RoomState.joined);

      if (userCount > 1) {
        this.rtcManager = new RTCManager();
      }
    });

    this.socket.on("other_join", (roomId, socketId, userCount) => {
      console.log("receive other_join message", roomId, socketId, userCount);

      if (!this.rtcManager) {
        this.rtcManager = new RTCManager();
      }

      this.rtcManager.createOffer().then((offer) => {
        this.sendMessage(offer);
      });
    });

    this.socket.on("full", () => {
      this.socketDisconnect();
      this.rtcManager?.close();
      this.rtcManager = undefined;
      alert("房间已满！");
    });

    this.socket.on("left", () => {
      this.setState(RoomState.leave);
      this.socketDisconnect();
    });

    this.socket.on("bye", () => {
      this.setState(RoomState.leave);
      this.rtcManager?.close();
      this.rtcManager = undefined;
    });

    this.socket.on("message", (roomId, data) => {
      console.log("received message --->", data);
      const type = data?.type;
      switch (type) {
        case "offer":
          this.rtcManager?.setRemoteOffer(data).then((answer) => {
            this.sendMessage(answer);
          });
          break;
        case "answer":
          this.rtcManager?.setRemoteAnswer(data);
          break;
        case "icecandidate":
          if (data.candidate) {
            this.rtcManager?.addCandidate(data.candidate);
          } else {
            console.log("this is the end of candidate");
          }
          break;
        default:
          console.error("can not handle message", data);
      }
    });
  }

  sendMessage(data: any) {
    console.log("sendMessage", this.roomId, data);
    this.socket?.emit("message", this.roomId, data);
  }

  private socketDisconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = undefined;
    }
  }

  join(localRoomId: number) {
    this.socketConnect();
    this.socket?.emit("join", localRoomId);
  }

  left() {
    this.socket?.emit("leave", this.roomId);
    this.rtcManager?.close();
    this.rtcManager = undefined;
  }

  addListener<K extends keyof RoomEventMap>(
    type: K,
    listener: RoomEventMap[K]
  ) {
    if (type === "roomStateChange") {
      this.roomStateChangeListeners.push(listener);
    }
  }

  removeListener<K extends keyof RoomEventMap>(
    type: K,
    listener: RoomEventMap[K]
  ) {
    if (type === "roomStateChange") {
      const targetIndex = this.roomStateChangeListeners.indexOf(listener);
      if (targetIndex > -1) {
        this.roomStateChangeListeners.splice(targetIndex, 1);
      }
    }
  }
}

export const roomManager = new RoomManager();
