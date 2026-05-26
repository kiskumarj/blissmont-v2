import { component$, useSignal, type Signal } from "@builder.io/qwik";

interface SidebarProps {
  isOpen: Signal<boolean>;
}

const navItems: { label: string; icon: string }[] = [
  { label: "Dashboard", icon: "bi-speedometer2" },
  { label: "Sales", icon: "bi-bag-check" },
  { label: "Reports", icon: "bi-bar-chart-line" },
  { label: "Settings", icon: "bi-gear" },
];

export default component$<SidebarProps>(({ isOpen }) => {
  const openSection = useSignal<string>("Dashboard");

  return (
    <div
      class="h-full flex flex-col bg-black border-r border-white/10 overflow-y-auto overflow-x-hidden transition-all duration-300"
      style={isOpen.value ? "width:13rem" : "width:3.5rem"}
    >
      {navItems.map((item) => (
        <div key={item.label} class="border-b border-white/10">

          {/* Section Header */}
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

          {/* Dropdown — only when sidebar is open */}
          {isOpen.value && openSection.value === "Dashboard" && item.label === "Dashboard" && (
            <div class="flex flex-col pl-8 pb-2">
              <a href="#" class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors">
                <i class="bi bi-person-gear text-[10px]"></i>admin
              </a>
              <a href="#" class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors">
                <i class="bi bi-graph-up text-[10px]"></i>statics
              </a>
              <a href="#" class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors">
                <i class="bi bi-briefcase text-[10px]"></i>jobs
              </a>
            </div>
          )}

          {isOpen.value && openSection.value === "Sales" && item.label === "Sales" && (
            <div class="flex flex-col pl-8 pb-2">
              <a href="#" class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors">
                <i class="bi bi-person-gear text-[10px]"></i>admin
              </a>
              <a href="#" class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors">
                <i class="bi bi-graph-up text-[10px]"></i>statics
              </a>
              <a href="#" class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors">
                <i class="bi bi-briefcase text-[10px]"></i>jobs
              </a>
            </div>
          )}

          {isOpen.value && openSection.value === "Reports" && item.label === "Reports" && (
            <div class="flex flex-col pl-8 pb-2">
              <a href="#" class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors">
                <i class="bi bi-person-gear text-[10px]"></i>admin
              </a>
              <a href="#" class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors">
                <i class="bi bi-graph-up text-[10px]"></i>statics
              </a>
              <a href="#" class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors">
                <i class="bi bi-briefcase text-[10px]"></i>jobs
              </a>
            </div>
          )}

          {isOpen.value && openSection.value === "Settings" && item.label === "Settings" && (
            <div class="flex flex-col pl-8 pb-2">
              <a href="#" class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors">
                <i class="bi bi-person-gear text-[10px]"></i>admin
              </a>
              <a href="#" class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors">
                <i class="bi bi-graph-up text-[10px]"></i>statics
              </a>
              <a href="#" class="text-[12px] text-white/50 hover:text-white py-1.5 flex items-center gap-2 transition-colors">
                <i class="bi bi-briefcase text-[10px]"></i>jobs
              </a>
            </div>
          )}

        </div>
      ))}
    </div>
  );
});