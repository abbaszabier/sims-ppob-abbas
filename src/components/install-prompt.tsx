import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => void;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("installed") === "true") return;

    const handleBeforeInstallPrompt = (event: BeforeInstallPromptEvent) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setShowModal(true);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt as EventListener
    );

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt as EventListener
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    const choiceResult = await deferredPrompt.userChoice;

    if (choiceResult.outcome === "accepted") {
      localStorage.setItem("installed", "true");
      setShowModal(false);
      setDeferredPrompt(null);
    } else {
      console.log("No installed");
      setShowModal(false);
    }

    setDeferredPrompt(null);
    setTimeout(() => setShowModal(false), 10);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white text-center p-4 md:rounded-2xl rounded-xl shadow-lg w-80">
        <img
          src="/logo192x192.png"
          alt="QuranKu"
          className="w-12 h-12 mx-auto"
        />
        <h2 className="text-black text-lg font-semibold mt-1 mb-2">
          Install SIMS PPOB
        </h2>
        <p className="text-black text-sm mb-4">
          Aplikasi ini dapat diinstal untuk pengalaman yang lebih baik!
        </p>
        <div className="flex gap-2 w-full">
          <button
            aria-label="install"
            aria-labelledby="install"
            onClick={handleInstallClick}
            disabled={!deferredPrompt}
            className="w-full px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-600 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md cursor-pointer"
          >
            {deferredPrompt ? "Install" : "Installasi belum siap"}
          </button>
          <button
            aria-label="tutup"
            aria-labelledby="tutup"
            onClick={() => setShowModal(false)}
            className="w-full px-4 py-2 rounded-md border border-neutral-300 bg-[#F13B2F] text-background
          text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md cursor-pointer"
          >
            Nanti dulu
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;
