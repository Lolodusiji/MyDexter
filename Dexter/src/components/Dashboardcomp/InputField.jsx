import { FiSend } from "react-icons/fi";
import { useState, useRef } from "react";
import { PiMagicWand } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../lib/config/axios-instance";
import toast from "react-hot-toast";

const InputField = () => {
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);
  const navigate = useNavigate();

  // Handle input change and auto-resize the textarea
  const handleInputChange = (e) => {
    setInput(e.target.value);
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  // Submit handler to navigate and call the chat function
  const handleSubmit = async () => {
    if (input.trim()) {
      try {
        await chat({ message: input });
      } catch (error) {
        // Handle any additional errors if necessary
      }
      setInput("");
      const textarea = textareaRef.current;
      textarea.style.height = "auto";
    }
  };

  // Chat function to interact with the backend
  const chat = async (data) => {
    try {
      const response = await authApi.post("/chat/message", {
        message: data.message,
      });
      toast.success("Message sent! Redirecting to chat...");
      navigate("/chat");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Something went wrong.";
      toast.error(errorMessage);
    } finally {
      reset();
    }
  };

  // Reset function to clear the input field
  const reset = () => {
    setInput("");
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
  };

  return (
    <div className="mt-6 flex justify-center w-full px-4 sm:px-6 md:px-8">
      <div className="flex items-center justify-between w-full max-w-3xl mx-auto px-4 py-3 border bg-white border-gray-300 rounded-xl">
        <div className="flex items-center gap-2 flex-grow">
          <PiMagicWand size={22} className="text-secondary" />
          <textarea
            ref={textareaRef}
            aria-label="Ask Dexter a question"
            placeholder="Ask Dexter a question..."
            value={input}
            onChange={handleInputChange}
            className="flex-grow outline-none placeholder:text-sm text-secondary resize-none overflow-hidden h-[20px]"
            rows={1} 
            maxLength={2000} 
          />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-secondary text-xs">{input.length}/2000</p>
          <button
            className={input.trim() ? "text-primary" : "text-secondary"}
            onClick={handleSubmit}
          >
            <FiSend size={18} />
          </button>
          {/* Optional Clear Button */}
          <button
            className="text-secondary"
            onClick={reset}
            disabled={!input.trim()}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputField;
