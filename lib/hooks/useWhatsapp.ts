import { useCallback } from "react";

interface PropsInterface {
  isMobile: boolean;
  message: string;
}

export default function useWhatsapp() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP;

  const sendToWhatsapp = ({ isMobile, message }: PropsInterface) => {
    const mobileUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}&type=phone_number&app_absent=0`;
    const webUrl = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${message}&type=phone_number&app_absent=0`;

    if (isMobile) return mobileUrl;
    return webUrl;
  };

  return useCallback(sendToWhatsapp, [whatsappNumber]);
}
