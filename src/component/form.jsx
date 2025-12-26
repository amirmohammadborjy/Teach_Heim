import { useState, useEffect } from "react";

export default function EditFieldModal({ isOpen, onClose, fieldLabel, fieldValue, onSave }) {
  const [value, setValue] = useState(fieldValue || "");

  useEffect(() => {
    setValue(fieldValue || "");
  }, [fieldValue]);

  const handleSave = async () => {
    try {
      const response = await fetch("/api/update-field", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ field: fieldLabel, value }),
      });

      if (response.ok) {
        onSave(value); // آپدیت در UI
        onClose();     // بستن مودال
      } else {
        console.error("خطا در ذخیره اطلاعات");
      }
    } catch (err) {
      console.error("خطا:", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <div className="flex justify-between items-center ">
             <h2 className="text-lg font-semibold mb-4">Edit {fieldLabel}</h2>
        <button onClick={onClose} className="cursor-pointer">
            <img src="images/icons/close-circle.svg" alt="" />
        </button>

        </div>
       
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <div className="flex justify-end gap-2">
        
          <button onClick={handleSave} className="w-[162px] h-12 px-4 py-2 bg-blue-600 text-white rounded-[8px]">Save</button>
        </div>
      </div>
    </div>
  );
}
