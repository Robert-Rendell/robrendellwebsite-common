import { KeepNoteAttachment } from "./attachment";
import { KeepNoteLabel } from "./label";

export type KeepNote = {
  filename?: string;
  color: string;
  isTrashed: boolean;
  isPinned: boolean;
  isArchived: boolean;
  textContent: string;
  title: string;
  userEditedTimestampUsec: number;
  createdTimestampUsec: number;
  labels?: KeepNoteLabel[];
  attachments?: KeepNoteAttachment[];
};
