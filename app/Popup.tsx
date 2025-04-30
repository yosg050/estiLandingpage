"use client";
import { useEffect } from "react";

interface PopupProps {
    message: string;
    visible: boolean;
    onClose: () => void;
}

export default function Popup({ message, visible, onClose }: PopupProps) {
    useEffect(() => {
        if (visible) {
            const timeout = setTimeout(() => {
                onClose();
            }, 3000); // נעלם אחרי 2 שניות

            return () => clearTimeout(timeout);
        }
    }, [visible, onClose]);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden max-w-md w-full text-center">

                {/* פס עליון צבעוני */}
                <div className="flex h-2">
                    <div className="w-1/3 bg-black"></div>
                    <div className="w-1/3 bg-[#CF0A0A]"></div>
                    <div className="w-1/3 bg-[#DC5F00]"></div>
                </div>

                {/* גוף ההודעה */}
                <div className="p-6">
                    <div className="w-16 h-16 bg-[#DC5F00] rounded-full flex items-center justify-center mb-4 mx-auto animate-bounce">
                        <span className="text-white text-3xl font-bold">✔</span>
                    </div>
                    <p className="text-gray-700 text-lg">{message}</p>
                </div>
            </div>
        </div>


    );
}
