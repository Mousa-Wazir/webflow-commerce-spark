
import React, { useRef } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ProfileImageUploadProps {
  imageUrl: string | undefined;
  onChange: (file: File, previewUrl: string) => void;
}

export const ProfileImageUpload: React.FC<ProfileImageUploadProps> = ({ imageUrl, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      onChange(file, previewUrl);
    }
  };
  return (
    <div className="flex flex-col items-center gap-2">
      <Avatar className="w-20 h-20 border-4 border-indigo-200 shadow">
        <AvatarImage src={imageUrl} alt="Profile" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        className="hidden"
        onChange={handleUpload}
      />
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => inputRef.current?.click()}
      >
        Change photo
      </Button>
    </div>
  );
};
