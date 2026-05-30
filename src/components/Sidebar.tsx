import { component$, useSignal, type Signal } from "@builder.io/qwik";
import { Form, type ActionStore } from "@builder.io/qwik-city";

interface SidebarProps {
  isOpen: Signal<boolean>;
  logoutAction: ActionStore<Record<string, unknown>, Record<string, never>>;
}

const navItems: { label: string; icon: string }[] = [
  { label: "Dashboard", icon: "bi-speedometer2" },
  { label: "Sales", icon: "bi-bag-check" },
  { label: "Reports", icon: "bi-bar-chart-line" },
  { label: "Settings", icon: "bi-gear" },
];

export default component$<SidebarProps>(({ isOpen, logoutAction }) => {
  const openSection = useSignal<string>("Dashboard");

  return (
    <div
      class="h-full flex flex-col bg-black border-r border-white/10 overflow-hidden transition-all duration-300"
      style={isOpen.value ? "width:13rem" : "width:3.5rem"}
    >
      <div class="flex-1 overflow-y-auto overflow-x-hidden">
        {navItems.map((item) => (
          <div key={item.label} class="border-b border-white/10">
            <button
              class="w-full flex items-center justify-between px-3 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all"
              onClick$={() => {
                if (isOpen.value) {
                  openSection.value =
                    openSection.value === item.label ? "" : item.label;
                }
              }}
            >
              <div class="flex items-center gap-2">
                <i class={["bi flex-shrink-0 text-sm", item.icon].join(" ")}></i>
                {isOpen.value && (
                  <span class="text-[13px] font-semibold tracking-wide whitespace-nowrap">
                    {item.label}
                  </span>
                )}
              </div>
              {isOpen.value && (
                <i
                  class={[
                    "bi text-xs",
                    openSection.value === item.label
                      ? "bi-chevron-up"
                      : "bi-chevron-down",
                  ].join(" ")}
                ></i>
              )}
            </button>

            {isOpen.value && openSection.value === "Dashboard" && item.label === "Dashboard" && (
              <div class="flex flex-col pl-8 pb-2">
                <a
                  href="#"
                  class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors"
                >
                  <i class="bi bi-person-gear text-[10px]"></i>admin
                </a>
                <a
                  href="#"
                  class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors"
                >
                  <i class="bi bi-graph-up text-[10px]"></i>statics
                </a>
                <a
                  href="#"
                  class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors"
                >
                  <i class="bi bi-briefcase text-[10px]"></i>jobs
                </a>
              </div>
            )}

            {isOpen.value && openSection.value === "Sales" && item.label === "Sales" && (
              <div class="flex flex-col pl-8 pb-2">
                <a
                  href="#"
                  class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors"
                >
                  <i class="bi bi-person-gear text-[10px]"></i>admin
                </a>
                <a
                  href="#"
                  class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors"
                >
                  <i class="bi bi-graph-up text-[10px]"></i>statics
                </a>
                <a
                  href="#"
                  class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors"
                >
                  <i class="bi bi-briefcase text-[10px]"></i>jobs
                </a>
              </div>
            )}

            {isOpen.value && openSection.value === "Reports" && item.label === "Reports" && (
              <div class="flex flex-col pl-8 pb-2">
                <a
                  href="#"
                  class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors"
                >
                  <i class="bi bi-person-gear text-[10px]"></i>admin
                </a>
                <a
                  href="#"
                  class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors"
                >
                  <i class="bi bi-graph-up text-[10px]"></i>statics
                </a>
                <a
                  href="#"
                  class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors"
                >
                  <i class="bi bi-briefcase text-[10px]"></i>jobs
                </a>
              </div>
            )}

            {isOpen.value && openSection.value === "Settings" && item.label === "Settings" && (
              <div class="flex flex-col pl-8 pb-2">
                <a
                  href="#"
                  class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors"
                >
                  <i class="bi bi-person-gear text-[10px]"></i>admin
                </a>
                <a
                  href="#"
                  class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors"
                >
                  <i class="bi bi-graph-up text-[10px]"></i>statics
                </a>
                <a
                  href="#"
                  class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors"
                >
                  <i class="bi bi-briefcase text-[10px]"></i>jobs
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      <Form action={logoutAction} class="shrink-0 border-t border-white/10">
        <button
          type="submit"
          disabled={logoutAction.isRunning}
          title="Log out"
          class="w-full flex items-center gap-2 px-3 py-3 text-red-400/90 hover:text-red-300 hover:bg-white/5 disabled:opacity-50 transition-all"
        >
          <i class="bi bi-box-arrow-left flex-shrink-0 text-sm"></i>
          {isOpen.value && (
            <span class="text-[13px] font-semibold tracking-wide whitespace-nowrap">
              {logoutAction.isRunning ? "Logging out..." : "Logout"}
            </span>
          )}
        </button>
      </Form>
    </div>
  );
});
