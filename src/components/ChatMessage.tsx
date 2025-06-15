
import React from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";

type ChatMessageProps = {
  content: string;
  isUser: boolean;
  timestamp: Date;
  rated?: "up" | "down" | null;
  onRate?: (rating: "up" | "down") => void;
};

const getTime = (date: Date): string => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const ChatMessage: React.FC<ChatMessageProps> = ({
  content,
  isUser,
  timestamp,
  rated,
  onRate,
}) => {
  return (
    <div
      className={`mb-4 flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] rounded-xl p-3 ${
          isUser
            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-tr-none"
            : "bg-gray-800 text-gray-100 rounded-tl-none"
        }`}
      >
        <div className="text-sm">{content}</div>
        <div
          className={`text-xs mt-1 ${isUser ? "text-blue-200" : "text-gray-400"} flex justify-between items-center`}
        >
          <span>{getTime(timestamp)}</span>
          {/* Rating buttons for AI messages only */}
          {!isUser && !!onRate && (
            <div className="flex space-x-2">
              {rated ? (
                <span
                  className={`text-xs ${rated === "up" ? "text-green-400" : "text-red-400"}`}
                >
                  {rated === "up" ? (
                    <ThumbsUp className="inline-block h-4 w-4" />
                  ) : (
                    <ThumbsDown className="inline-block h-4 w-4" />
                  )}
                </span>
              ) : (
                <>
                  <button
                    onClick={() => onRate("up")}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                    aria-label="Rate helpful"
                    type="button"
                  >
                    <ThumbsUp className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => onRate("down")}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                    aria-label="Rate unhelpful"
                    type="button"
                  >
                    <ThumbsDown className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
