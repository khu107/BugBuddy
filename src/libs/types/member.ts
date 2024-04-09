import { ObjectId } from "mongoose";
import { MemberStatus, MemberType } from "../enum/member.enum";

export interface Member {
  _id: ObjectId;
  memberType: MemberType;
  memberStatus: MemberStatus;
  memberNick: string;
  memberPassword: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoints: number;
  createdAt: Date;
  updateAt: Date;
}

export interface MemberInput {
  memberType?: MemberType;
  memberStatus?: MemberStatus;
  memberNick: string;
  memberPassword: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoints?: number;
}
export interface LoginInput {
  memberNick: string;
  memberPassword: string;
}
