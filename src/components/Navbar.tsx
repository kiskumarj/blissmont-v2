import { component$, useSignal, type Signal } from "@builder.io/qwik";

interface NavbarProps {
  isOpen: Signal<boolean>;
}

const tabs = ["Help Desk", "Sales", "Reports", "Settings"];

export default component$<NavbarProps>(({ isOpen }) => {
  const profileOpen = useSignal(false);
  const notifOpen = useSignal(false);
  const activeTab = useSignal("Help Desk");

  return (
    <div class="w-full h-[3.2rem] bg-black flex flex-row items-center border-b border-white/10 z-50">

      {/* Brand + Toggle */}
      <div class="flex-shrink-0 flex items-center gap-2 px-3 border-r border-white/10 h-full"
        style={isOpen.value ? "width:13rem" : "width:3.5rem"}
      >
       

        {/* Brand label — hide when collapsed */}
        {isOpen.value && (
          <div class="flex items-center gap-2 overflow-hidden">
           <i class="bi bi-hexagon-fill text-blue-500 text-sm shrink-0"></i>
            <span class="text-white font-bold text-[14px] tracking-wide whitespace-nowrap">
              blissmont ERP
            </span>
             
          </div>
        )}

        {/* Toggle Button */}
        <button
          class="text-white/50 hover:text-white transition-colors flex-shrink-0"
          onClick$={() => (isOpen.value = !isOpen.value)}
        >
          <i class={["bi text-base", isOpen.value ? "bi-layout-sidebar" : "bi-layout-sidebar-reverse"].join(" ")}></i>
        </button>

      </div>

      {/* Page Tabs */}
      <div class="flex flex-row h-full items-center flex-1 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick$={() => (activeTab.value = tab)}
            class={[
              "h-full px-5 text-[13px] font-medium border-r border-white/10 transition-all whitespace-nowrap",
              activeTab.value === tab
                ? "text-white bg-white/10 border-b-2 border-b-blue-500"
                : "text-white/40 hover:text-white hover:bg-white/5",
            ].join(" ")}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Right Controls */}
      <div class="flex items-center gap-1 px-3 h-full border-l border-white/10">

        {/* Search */}
        <button class="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 rounded transition-all">
          <i class="bi bi-search text-sm"></i>
        </button>

        {/* Notifications */}
        <div class="relative">
          <button
            class="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 rounded transition-all"
            onClick$={() => {
              notifOpen.value = !notifOpen.value;
              profileOpen.value = false;
            }}
          >
            <i class="bi bi-bell text-sm"></i>
            <span class="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
          </button>

          {notifOpen.value && (
            <div class="absolute right-0 top-10 w-64 bg-[#1a1a1a] border border-white/10 rounded shadow-xl z-50">
              <div class="px-4 py-2 border-b border-white/10 text-white text-[12px] font-semibold">
                Notifications
              </div>
              <div class="px-4 py-2.5 text-[12px] text-white/60 hover:bg-white/5 cursor-pointer border-b border-white/5">
                <i class="bi bi-dot text-blue-400 mr-1"></i>New invoice received
              </div>
              <div class="px-4 py-2.5 text-[12px] text-white/60 hover:bg-white/5 cursor-pointer border-b border-white/5">
                <i class="bi bi-dot text-blue-400 mr-1"></i>Job #442 updated
              </div>
              <div class="px-4 py-2.5 text-[12px] text-white/60 hover:bg-white/5 cursor-pointer border-b border-white/5">
                <i class="bi bi-dot text-blue-400 mr-1"></i>Admin login alert
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div class="relative">
          <button
            class="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 rounded transition-all"
            onClick$={() => {
              profileOpen.value = !profileOpen.value;
              notifOpen.value = false;
            }}
          >
            <i class="bi bi-person-circle text-sm"></i>
          </button>

          {profileOpen.value && (
            <div class="absolute right-0 top-10 w-48 bg-[#1a1a1a] border border-white/10 rounded shadow-xl z-50">
              <div class="px-4 py-3 border-b border-white/10">
                <p class="text-white text-[12px] font-semibold">Admin User</p>
                <p class="text-white/40 text-[10px]">admin@blissmont.com</p>
              </div>
              <div class="px-4 py-2.5 text-[12px] text-white/60 hover:bg-white/5 cursor-pointer flex items-center gap-2">
                <i class="bi bi-person text-sm"></i>Profile
              </div>
              <div class="px-4 py-2.5 text-[12px] text-white/60 hover:bg-white/5 cursor-pointer flex items-center gap-2">
                <i class="bi bi-shield-lock text-sm"></i>Security
              </div>
              <div class="px-4 py-2.5 text-[12px] text-white/60 hover:bg-white/5 cursor-pointer flex items-center gap-2">
                <i class="bi bi-box-arrow-right text-sm"></i>Sign Out
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
});