import { onMounted, onUnmounted, ref } from "vue";

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // skip if already loaded
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
}

async function loadDependencies(): Promise<void> {
  await loadScript("/scripts/three.min.js");
  await loadScript("/scripts/glitchGL.min.js");
}

export function useGlitchGL(
  selector: string,
  options: Record<string, unknown> = {},
) {
  const instance = ref<{
    updateOptions: (opts: unknown) => void;
    cleanup: () => void;
  } | null>(null);

  onMounted(async () => {
    try {
      await loadDependencies();
      instance.value = (window as any).glitchGL({
        target: selector,
        ...options,
      });
    } catch (err) {
      console.error("[useGlitchGL]", err);
    }
  });

  onUnmounted(() => {
    instance.value?.cleanup();
  });

  return { instance };
}
